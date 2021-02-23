import {Component, Input, OnInit} from '@angular/core';
import {AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Type} from '../../models/type';
import { ModalController, ToastController} from '@ionic/angular';
import {FirebaseService} from '../../services/firebase.service';
import {TypeService} from '../../services/type.service';
import {Camera, } from '@ionic-native/camera/ngx';
import { Router} from '@angular/router';
import {CitizenService} from '../../services/citizen.service';
import Point from 'ol/geom/Point';
import {ImageService} from '../../services/image.service';
import {AlarmService} from '../../services/alarm.service';
import {InterventionService} from '../../services/intervention.service';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Alarm} from '../../models/alarm';
import firebase from 'firebase';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import {Icon, Style} from 'ol/style';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-new-alarm',
  templateUrl: './new-alarm.page.html',
  styleUrls: ['./new-alarm.page.scss'],
})
export class NewAlarmPage implements OnInit {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  itemsRef: AngularFirestoreCollection;
  selectedFile: any;
  loading: HTMLIonLoadingElement;
  types: Type[];
  items: Observable<any[]>;
  namecitizen: string;
  surnamecitizen: string;
  date: string;
  idCitizen: string;
  idType: string;
  idIntervention: number;
  lat: number;
  lon: number;
  map: Map;
  address: string;
  marker: Feature;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    private modalCtrl: ModalController,
    public firebaseService: FirebaseService,
    public typeService: TypeService,
    private camera: Camera,
    private toastCtrl: ToastController,
    private database: AngularFirestore,
    private db: AngularFirestore,
    public router: Router,
    public citizenService: CitizenService,
    public imageService: ImageService,
    public alarmService: AlarmService,
    public geolocation: Geolocation,
    public interventionService: InterventionService,
    public formBuilder: FormBuilder
  ) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigateByUrl('/new-alarm');
      }
      else {
        this.router.navigateByUrl('/slides');
      }
    });
    this.itemsRef = db.collection('items');
    this.items = this.itemsRef.valueChanges();

  }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      address: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(8)]]
    });


    this.date = new Date(new Date().getTime()).toISOString();
    this.idCitizen = localStorage.getItem('idCitizen');
    this.citizenService.getCitizenById(this.idCitizen).subscribe(data => {
      console.log(data);
      this.namecitizen = data.userDTO.name;
      this.surnamecitizen = data.userDTO.surname;
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'assets/icon/icon.png',
        }),
      });
      this.marker = new Feature({
        geometry: new Point(olProj.fromLonLat([resp.coords.longitude, resp.coords.latitude]))
      });
      this.marker.setStyle(iconStyle);
      this.vectorSource = new VectorSource({
        features: [this.marker],
      });

      this.vectorLayer = new VectorLayer({
        source: this.vectorSource,
      });
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          }), this.vectorLayer],
        target: 'map',
        view: new View({
          center: olProj.fromLonLat([resp.coords.longitude, resp.coords.latitude]),
          zoom: 18
        })
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.typeService.getTypes().subscribe(data => {
      console.log(data);
      this.types = data;
    });
    setTimeout(() => {
      this.map.updateSize();
    }, 500);

  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  getTypes() {
    this.typeService.getTypes().subscribe(data => {
      this.types = data;
    });
  }

  sendAlarm(type, addressplus, title, description, lat, lon){

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      alert('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }

    this.date = new Date(this.date).toISOString();
    console.log(this.date);
    const address = this.address + ', ' + addressplus;
    lat = this.lat;
    lon = this.lon;
    console.log(address);
    console.log(lat);
    console.log(lon);
    console.log(this.date);
    const alarmDate = this.date;
    this.idCitizen = localStorage.getItem('idCitizen');
    const status = 'signaled';
    const intervention = {
      lat,
      lon,
      address,
      status
    };
    this.alarmService.addAlarm(type, this.idCitizen, {intervention, alarmDate, title, description} as Alarm).subscribe(data => {
      console.log(data);
      this.presentToast();
    });
    this.router.navigateByUrl('/homecitizen');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Alarm Sended',
      duration: 2000
    });
    toast.present();
  }

  getCoord(event: any){
    const coordinate = this.map.getEventCoordinate(event);
    const coordinate1 = olProj.toLonLat(coordinate);
    this.simpleReverseGeocoding(coordinate1);
    console.log('ol', olProj.toLonLat(coordinate));
  }

  simpleReverseGeocoding(coord) {
    this.lat = coord[1];
    this.lon = coord[0];
    document.getElementById('lon').innerText = coord[0];
    document.getElementById('lat').innerText = coord[1];
    fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + coord[0] + '&lat=' + coord[1]).then(response => {
      return response.json();
    }).then(json => {
      this.address = json.display_name;
      document.getElementById('address').innerHTML = json.display_name;
      console.log(json);
    });
  }
}
