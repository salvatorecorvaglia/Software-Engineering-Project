import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AngularFireStorage} from '@angular/fire/storage';
import {LoadingController} from '@ionic/angular';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ImageService} from '../../services/image.service';
import {Image} from '../../models/image';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {CitizenService} from '../../services/citizen.service';
import {Citizen} from '../../models/citizen';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import firebase from 'firebase';




@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.page.html',
  styleUrls: ['./addphoto.page.scss'],
})
export class AddphotoPage implements OnInit {


  newTodo: string;
  myPhoto: any;
  loading: any;
  itemsRef: AngularFirestoreCollection;
  items: Observable<any>;
  images: Image[];
  selectedFile: any;
  imageUrl: string;
  idIntervention: string;
  lat: number;
  lon: number;
  citizen: Citizen;
  idUser: number;
  idcitizen: string;
  idFire: string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private camera: Camera,
              private storage: AngularFireStorage,
              public loadingController: LoadingController,
              private db: AngularFirestore,
              private imageService: ImageService,
              private geolocation: Geolocation,
              private citizenService: CitizenService,
              // @ts-ignore
              private iab: InAppBrowser) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigateByUrl('/addphoto');
      }
      else {
        this.router.navigateByUrl('/slides');
      }
    });


    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idIntervention = this.router.getCurrentNavigation().extras.state.idintervention;
        console.log(this.idIntervention);
      }
    });
    this.itemsRef = db.collection('users/token/images');
    this.items = this.itemsRef.valueChanges();
  }

  ngOnInit() {
    this.idcitizen = localStorage.getItem('idCitizen');
    this.citizenService.getCitizenById(this.idcitizen).subscribe( data => {
      console.log(data);
      this.citizen = data;
      this.idUser = data.userDTO.idUser;
      this.getImages(this.idIntervention, this.idUser);
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      this.citizenService.updatePosition(this.idcitizen, this.lat, this.lon, this.citizen).subscribe( data => {
        console.log(data);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

   getImages(idIntervention, idUser){
     this.imageService.getImageByIdUser(idIntervention, idUser).subscribe(data => {
      console.log(data);
      this.images = data;
    });
  }


  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      return 0;
    });
    if (this.myPhoto) {
      this.itemsRef.add({}).then(async resp => {
        this.imageUrl = await this.uploadFile(resp.id, this.myPhoto);
        await this.itemsRef.doc(resp.id).update({
          id: resp.id,
          imageUrl: this.imageUrl || null
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }



  chooseFile(event) {
    this.selectedFile = event.target.files;
  }


  addTodo() {
    this.newTodo = '';
    if (this.selectedFile) {
      this.itemsRef.add({
        title: this.newTodo
      }).then(async resp => {
        this.idFire = resp.id;
        const imageUrl = await this.uploadFile(resp.id, this.selectedFile);
        await this.itemsRef.doc(resp.id).update({
          id: resp.id,
          imageUrl: imageUrl || null
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }

  async uploadFile(id, file): Promise<any> {
    if (file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.storage.ref('images').child(id).put(file[0]);
        await this.loading.dismiss();
        let url: string;
        let lat: number;
        let lon: number;
        let idFire: string;
        url = await this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
        lat = this.lat;
        lon = this.lon;
        idFire = this.idFire;
        console.log(lat);
        console.log(lon);
        let image: any;
        image = [{
         url,
         lat,
         lon,
          idFire
       }];
        this.imageService.addImage(this.idIntervention, this.idUser.toString(), image as Image).subscribe(data => {
          console.log(data);
          this.getImages(this.idIntervention, this.idUser);
        });
        return url;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }


  remove(id, idFire) {
    console.log(id);
    this.imageService.deleteImage(id).subscribe(data => {
      console.log(data);
      this.getImages(this.idIntervention, this.idUser);
    });
    this.storage.ref(`images/${idFire}`).delete();
    this.itemsRef.doc(idFire).delete();
  }



  openPhoto(url){
     const browser = this.iab.create(url);
}

}
