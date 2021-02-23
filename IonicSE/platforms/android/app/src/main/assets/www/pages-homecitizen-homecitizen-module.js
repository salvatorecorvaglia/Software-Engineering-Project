(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homecitizen-homecitizen-module"],{

/***/ "2bwl":
/*!*******************************************************!*\
  !*** ./src/app/pages/homecitizen/homecitizen.page.ts ***!
  \*******************************************************/
/*! exports provided: HomecitizenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecitizenPage", function() { return HomecitizenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_homecitizen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./homecitizen.page.html */ "Y6nN");
/* harmony import */ var _homecitizen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homecitizen.page.scss */ "lu2E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_citizen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/citizen.service */ "UmAX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_alarm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/alarm.service */ "zNDT");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _components_view_alarm_view_alarm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/view-alarm/view-alarm.component */ "EUCk");












let HomecitizenPage = class HomecitizenPage {
    constructor(firebaseService, modalCtrl, citizenService, router, alarmService, geolocation, navCtrl, toastCtrl, alertCtrl) {
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.citizenService = citizenService;
        this.router = router;
        this.alarmService = alarmService;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().onAuthStateChanged(user => {
            if (user) {
                this.router.navigateByUrl('/homecitizen');
            }
            else {
                this.router.navigateByUrl('/slides');
            }
        });
    }
    ngOnInit() {
        this.idcitizen = localStorage.getItem('idCitizen');
        this.citizenService.getCitizenById(this.idcitizen).subscribe(data => {
            console.log(data);
            this.citizen = data;
            this.getAlarmsByIdCitizen();
            this.namecitizen = data.userDTO.name;
            this.surnamecitizen = data.userDTO.surname;
            this.sendToken(data.userDTO.idUser, data.userDTO.name, data.userDTO.surname, data.userDTO.sex, data.userDTO.birthDate, data.userDTO.country, data.userDTO.address, data.userDTO.email, data.userDTO.city);
        });
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            this.citizenService.updatePosition(this.idcitizen, this.lat, this.lon, this.citizen).subscribe(data => {
                console.log(data);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAlarmsByIdCitizen() {
        this.alarmService.getAlarmsByIdCitizen(this.idcitizen).subscribe(data => {
            console.log(data);
            this.alarms = data;
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAlarmsByIdCitizen();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    openViewAlarmModal(idIntervention) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(idIntervention);
            const modal = yield this.modalCtrl.create({
                component: _components_view_alarm_view_alarm_component__WEBPACK_IMPORTED_MODULE_11__["ViewAlarmComponent"],
                componentProps: { value: idIntervention }
            });
            yield modal.present();
        });
    }
    openPhotoPage(idIntervention) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const navigationExtras = {
                state: {
                    idintervention: idIntervention
                }
            };
            yield this.router.navigateByUrl('/addphoto', navigationExtras);
        });
    }
    deleteAlarm(idAlarm) {
        this.alarmService.deleteAlarm(idAlarm).subscribe(data => {
            console.log(data);
            this.getAlarmsByIdCitizen();
        });
        this.presentToast();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Alarm Eliminated',
                duration: 2000
            });
            yield toast.present();
        });
    }
    presentAlert(idAlarm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: 'Are you sure?',
                buttons: [{
                        text: 'Confirm',
                        handler: () => {
                            this.deleteAlarm(idAlarm);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }]
            });
            yield alert.present();
        });
    }
    sendToken(idUser, name, surname, sex, birthDate, country, address, email, city) {
        birthDate = new Date(birthDate).toISOString();
        console.log(birthDate);
        const pushId = localStorage.getItem('token');
        this.citizenService.updateCitizen(idUser, { name, surname, email, birthDate, sex, address, city, country, pushId }).subscribe(data => {
            console.log(data);
        });
    }
};
HomecitizenPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_citizen_service__WEBPACK_IMPORTED_MODULE_7__["CitizenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_alarm_service__WEBPACK_IMPORTED_MODULE_9__["AlarmService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
HomecitizenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homecitizen',
        template: _raw_loader_homecitizen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homecitizen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomecitizenPage);



/***/ }),

/***/ "XMng":
/*!*********************************************************!*\
  !*** ./src/app/pages/homecitizen/homecitizen.module.ts ***!
  \*********************************************************/
/*! exports provided: HomecitizenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecitizenPageModule", function() { return HomecitizenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _homecitizen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homecitizen-routing.module */ "Y7gj");
/* harmony import */ var _homecitizen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homecitizen.page */ "2bwl");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "JMRq");








let HomecitizenPageModule = class HomecitizenPageModule {
};
HomecitizenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _homecitizen_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomecitizenPageRoutingModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]
        ],
        declarations: [_homecitizen_page__WEBPACK_IMPORTED_MODULE_6__["HomecitizenPage"]]
    })
], HomecitizenPageModule);



/***/ }),

/***/ "Y6nN":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homecitizen/homecitizen.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"assets/icon/favicon.png\" width=\"50\">\n    </ion-title>\n    <ion-icon name=\"person-circle-outline\" slot=\"end\" (click)=\"router.navigateByUrl('/citizenprofile')\" style=\"font-size: 35px\" ></ion-icon>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  </ion-refresher>\n  <div id=\"container\">\n  <ion-card>\n    <ion-button expand=\"block\" (click)=\"router.navigateByUrl('/new-alarm')\" fill=\"outline\" color=\"dark\"><ion-icon name=\"alert-circle\"></ion-icon>Send Alarm</ion-button>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of alarms | orderBy: idIntervention\">\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      Type: {{item.intervention.type.name}}\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n         Alarm Date: {{item.alarmDate | date: 'medium'}}\n    </ion-item>\n    <ion-item>\n      <ion-icon *ngIf=\"item.intervention.status == 'signaled'\" name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-icon *ngIf=\"item.intervention.status == 'assigned'\" name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-icon *ngIf=\"item.intervention.status == 'closed'\"   name=\"checkmark-done-circle-outline\" slot=\"start\"></ion-icon>\n      Status: {{item.intervention.status}}\n    </ion-item>\n    <ion-item>\n      <ion-button fill=\"outline\" color=\"warning\" slot=\"end\" *ngIf=\"item.intervention.status == 'signaled'\" (click)=\"openPhotoPage(item.intervention.idIntervention)\"><ion-icon name=\"camera\" slot=\"start\"></ion-icon>Add Photo</ion-button>\n    <ion-button fill=\"outline\" slot=\"end\" (click)=\"openViewAlarmModal(item.intervention.idIntervention)\"><ion-icon name=\"reader\" slot=\"start\"></ion-icon>View</ion-button>\n      <ion-button fill=\"outline\" color=\"danger\" slot=\"end\" *ngIf=\"item.intervention.status == 'signaled'\" (click)=\"presentAlert(item.idAlarm)\"><ion-icon name=\"trash-bin\" slot=\"start\"></ion-icon>Trash</ion-button>\n    </ion-item>\n  </ion-card>\n  </div>\n</ion-content>\n<ion-button (click)=\"firebaseService.logout()\">Logout</ion-button>\n\n\n");

/***/ }),

/***/ "Y7gj":
/*!*****************************************************************!*\
  !*** ./src/app/pages/homecitizen/homecitizen-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: HomecitizenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecitizenPageRoutingModule", function() { return HomecitizenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homecitizen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homecitizen.page */ "2bwl");




const routes = [
    {
        path: '',
        component: _homecitizen_page__WEBPACK_IMPORTED_MODULE_3__["HomecitizenPage"]
    }
];
let HomecitizenPageRoutingModule = class HomecitizenPageRoutingModule {
};
HomecitizenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomecitizenPageRoutingModule);



/***/ }),

/***/ "lu2E":
/*!*********************************************************!*\
  !*** ./src/app/pages/homecitizen/homecitizen.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-class {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lY2l0aXplbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWVjaXRpemVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-homecitizen-homecitizen-module.js.map