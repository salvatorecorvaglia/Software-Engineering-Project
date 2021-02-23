import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import firebase from 'firebase';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {TypeService} from '../../services/type.service';
import {Type} from '../../models/type';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.css']
})
export class TypesListComponent implements OnInit {
  @ViewChild('typeform') form: any;
  @ViewChild('edittype') form1: any;
  idType: string;
  idManager: string;
  typename: string;
  types: Type[];
  type: Type;
  closeResult: string;

  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService,
              private typesService: TypeService,
              private modalService: NgbModal,
              public router: Router) {firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.router.navigate(['types_list']);
    }
    else {
      this.router.navigate(['']);
    }
  }); }

  ngOnInit(): void {
    this.getTypesList();
    this.type = {
      name: ''
    };
  }

  getTypesList(){
    this.typesService.getTypes().subscribe(data => {
      this.types = data;
    });
  }

  addTypeAlarm(name){
    this.idManager = localStorage.getItem('idManager');
    this.typesService.addType(this.idManager, name , {name} as Type).subscribe( data => {
      console.log(data);
      this.getTypesList();
    });
  }

  editTypeAlarm(name){
    this.idManager = localStorage.getItem('idManager');
    this.typesService.updateType(this.idType, this.idManager, name , {name} as Type).subscribe(data => {
      console.log(data);
      this.getTypesList();
    });
  }

  deleteTypeAlarm(){
    this.typesService.deleteType(this.idType).subscribe(data => {
      console.log(data);
      this.getTypesList();
    });
  }

  open(content, idType) {
    this.idType = idType;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
