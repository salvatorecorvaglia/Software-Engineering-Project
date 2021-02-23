(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homeagent-homeagent-module"],{

/***/ "13xW":
/*!*****************************************************************!*\
  !*** ./src/app/components/firstreport/firstreport.component.ts ***!
  \*****************************************************************/
/*! exports provided: FirstreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstreportComponent", function() { return FirstreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_firstreport_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./firstreport.component.html */ "LBYu");
/* harmony import */ var _firstreport_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firstreport.component.scss */ "WZOe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_intervention_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/intervention.service */ "ESHi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_assign_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/assign.service */ "Ha8P");
/* harmony import */ var _services_agent_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/agent.service */ "WQVK");









let FirstreportComponent = class FirstreportComponent {
    constructor(interventionService, modalCtrl, router, assignService, agentService, toastCtrl) {
        this.interventionService = interventionService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.assignService = assignService;
        this.agentService = agentService;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.interventionService.getInterventionById(this.value).subscribe(data => {
            console.log(data);
            this.intervention = data;
        });
        this.idAgent = localStorage.getItem('idAgent');
        this.agentService.getAgentById(this.idAgent).subscribe(data => {
            console.log(data);
            this.agent = data;
            this.manager = data.managerDTO;
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    sendFirstReport(type, idIntervention, lat, lon, address, shortReport) {
        let confirm;
        let hasWritten;
        let intervention;
        let status;
        let idAssign;
        let endDate;
        let manager;
        let agent;
        let startValidate;
        let startDate;
        startValidate = this.value2;
        startDate = startValidate;
        manager = this.manager;
        agent = this.agent;
        confirm = 1;
        hasWritten = 0;
        status = 'assigned';
        endDate = new Date(new Date().getTime()).toISOString();
        idAssign = this.value1;
        intervention = {
            idIntervention,
            type,
            lat,
            lon,
            address,
            startDate,
            endDate,
            shortReport,
            status
        };
        this.assignService.updateAssign(idAssign, { idAssign, manager, agent, intervention, confirm, hasWritten, startValidate }).subscribe(data => {
            console.log(data);
        });
        this.dismissModal();
        this.presentToast();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Report Sended',
                duration: 2000
            });
            toast.present();
        });
    }
};
FirstreportComponent.ctorParameters = () => [
    { type: _services_intervention_service__WEBPACK_IMPORTED_MODULE_4__["InterventionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_assign_service__WEBPACK_IMPORTED_MODULE_7__["AssignService"] },
    { type: _services_agent_service__WEBPACK_IMPORTED_MODULE_8__["AgentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
FirstreportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-firstreport',
        template: _raw_loader_firstreport_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_firstreport_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FirstreportComponent);



/***/ }),

/***/ "3drD":
/*!*****************************************************!*\
  !*** ./src/app/pages/homeagent/homeagent.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lYWdlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6Ejm":
/*!***************************************************!*\
  !*** ./src/app/pages/homeagent/homeagent.page.ts ***!
  \***************************************************/
/*! exports provided: HomeagentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeagentPage", function() { return HomeagentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_homeagent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./homeagent.page.html */ "tB8M");
/* harmony import */ var _homeagent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeagent.page.scss */ "3drD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_alarm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alarm.service */ "zNDT");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _services_agent_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/agent.service */ "WQVK");
/* harmony import */ var _services_assign_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/assign.service */ "Ha8P");
/* harmony import */ var _components_firstreport_firstreport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/firstreport/firstreport.component */ "13xW");













let HomeagentPage = class HomeagentPage {
    constructor(firebaseService, modalCtrl, agentService, router, alarmService, geolocation, navCtrl, toastCtrl, alertCtrl, assignService) {
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.agentService = agentService;
        this.router = router;
        this.alarmService = alarmService;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.assignService = assignService;
        firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().onAuthStateChanged(user => {
            if (user) {
                this.router.navigateByUrl('/homeagent');
            }
            else {
                this.router.navigateByUrl('/slides');
            }
        });
    }
    ngOnInit() {
        this.idAgent = localStorage.getItem('idAgent');
        this.agentService.getAgentById(this.idAgent).subscribe(data => {
            console.log(data);
            this.agent = data;
            this.nameagent = data.userDTO.name;
            this.surnameagent = data.userDTO.surname;
            // tslint:disable-next-line:max-line-length
            this.sendToken(data.userDTO.idUser, data.userDTO.name, data.userDTO.surname, data.userDTO.sex, data.userDTO.birthDate, data.userDTO.country, data.userDTO.address, data.userDTO.email, data.userDTO.city);
        });
        this.getAssignByIdAgent();
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            this.agentService.updatePosition(this.idAgent, this.lat, this.lon, this.agent).subscribe(data => {
                console.log(data);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAssignByIdAgent() {
        this.assignService.getAllAssignByIdAgent(this.idAgent).subscribe(data => {
            console.log(data);
            this.assigns = data;
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAssignByIdAgent();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    openConfirmAlert(idAssign, idIntervention, address, lat, lon, type, manager, agent, count, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: 'Are you sure?',
                buttons: [{
                        text: 'Confirm',
                        handler: () => {
                            this.updateAssign(idAssign, idIntervention, address, lat, lon, type, manager, agent, count);
                            this.doRefresh(event);
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
    updateAssign(idAssign, idIntervention, address, lat, lon, type, manager, agent, count) {
        let confirm;
        let hasWritten;
        let startValidate;
        let intervention;
        let startDate;
        let status;
        status = 'assigned';
        startValidate = new Date(new Date().getTime()).toISOString();
        console.log(startValidate);
        startDate = startValidate;
        confirm = 1;
        hasWritten = 0;
        intervention = {
            idIntervention,
            type,
            lat,
            lon,
            address,
            startDate,
            status,
            count
        };
        // tslint:disable-next-line:max-line-length
        this.assignService.updateAssign(idAssign, { idAssign, manager, agent, intervention, confirm, hasWritten, startValidate }).subscribe(data => {
            console.log(data);
            this.getAssignByIdAgent();
        });
    }
    openPhotoPage(idIntervention) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const navigationExtras = {
                state: {
                    idintervention: idIntervention
                }
            };
            yield this.router.navigateByUrl('/addphotoagent', navigationExtras);
        });
    }
    openFirstReportModal(idIntervention, idAssign, startValidate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(idIntervention);
            const modal = yield this.modalCtrl.create({
                component: _components_firstreport_firstreport_component__WEBPACK_IMPORTED_MODULE_12__["FirstreportComponent"],
                componentProps: { value: idIntervention, value1: idAssign, value2: startValidate }
            });
            yield modal.present();
            yield modal.onDidDismiss().then(data => {
                this.getAssignByIdAgent();
            });
        });
    }
    sendToken(idUser, name, surname, sex, birthDate, country, address, email, city) {
        birthDate = new Date(birthDate).toISOString();
        console.log(birthDate);
        const pushId = localStorage.getItem('token');
        this.agentService.updateAgent(idUser, { name, surname, email, birthDate, sex, address, city, country, pushId }).subscribe(data => {
            console.log(data);
        });
    }
};
HomeagentPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_agent_service__WEBPACK_IMPORTED_MODULE_10__["AgentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_alarm_service__WEBPACK_IMPORTED_MODULE_7__["AlarmService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_assign_service__WEBPACK_IMPORTED_MODULE_11__["AssignService"] }
];
HomeagentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homeagent',
        template: _raw_loader_homeagent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homeagent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeagentPage);



/***/ }),

/***/ "Ha8P":
/*!********************************************!*\
  !*** ./src/app/services/assign.service.ts ***!
  \********************************************/
/*! exports provided: AssignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignService", function() { return AssignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const getassignbyidUrl = 'http://localhost:8080/assign/getAssignById/';
const getassignbyidagentUrl = 'http://localhost:8080/assign/getAllAssignByIdAgent/';
const updateassignurl = 'http://localhost:8080/assign/updateAssign/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AssignService = class AssignService {
    constructor(http) {
        this.http = http;
    }
    getAssignById(idassign) {
        return this.http.get(getassignbyidUrl + idassign).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched assign')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAssign')));
    }
    getAllAssignByIdAgent(idagent) {
        return this.http.get(getassignbyidagentUrl + idagent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched assign')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAssignByIdAgent', [])));
    }
    updateAssign(idassign, assign) {
        return this.http.put(updateassignurl + idassign, assign, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('updated assign')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateAssign')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
AssignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AssignService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AssignService);



/***/ }),

/***/ "LBYu":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/firstreport/firstreport.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Check Report</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label position=\"floating\">First Report:</ion-label>\n        <ion-textarea placeholder=\"Compile the report..\" rows=\"6\" cols=\"20\" #firstreport ></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-button color=\"primary\" slot=\"end\" (click)=\"sendFirstReport(intervention.type, intervention.idIntervention, intervention.lat, intervention.lon, intervention.address, firstreport.value)\">Send</ion-button>\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "WZOe":
/*!*******************************************************************!*\
  !*** ./src/app/components/firstreport/firstreport.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdHJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "fTxR":
/*!*************************************************************!*\
  !*** ./src/app/pages/homeagent/homeagent-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeagentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeagentPageRoutingModule", function() { return HomeagentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homeagent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeagent.page */ "6Ejm");




const routes = [
    {
        path: '',
        component: _homeagent_page__WEBPACK_IMPORTED_MODULE_3__["HomeagentPage"]
    }
];
let HomeagentPageRoutingModule = class HomeagentPageRoutingModule {
};
HomeagentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeagentPageRoutingModule);



/***/ }),

/***/ "tB8M":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homeagent/homeagent.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"assets/icon/favicon.png\" width=\"50\">\n    </ion-title>\n    <ion-icon name=\"person-circle-outline\" slot=\"end\" (click)=\"router.navigateByUrl('/agentprofile')\" style=\"font-size: 35px\" ></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  </ion-refresher>\n\n  <div id=\"container\">\n    <ion-card *ngFor=\"let item of assigns | orderBy: -idAssign\">\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        Address: {{item.intervention.address}}\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n        Validate Date: {{item.startValidate | date: 'medium'}}\n      </ion-item>\n      <ion-item *ngIf=\"item.intervention.startDate == null\"><ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>Status: Not Confirmed</ion-item>\n      <ion-item *ngIf=\"item.intervention.startDate != null\"><ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>Status: Confirmed</ion-item>\n      <ion-item *ngIf=\"item.intervention.shortReport == null\"><ion-icon name=\"clipboard-outline\" slot=\"start\"></ion-icon>First Report: Not Compiled</ion-item>\n      <ion-item *ngIf=\"item.intervention.shortReport != null\"><ion-icon name=\"reader-outline\" slot=\"start\"></ion-icon>First Report: Compiled</ion-item>\n      <ion-item *ngIf=\"item.intervention.shortReport == null\">\n        <ion-button *ngIf=\"item.intervention.startDate == null\" fill=\"outline\" slot=\"start\" color=\"success\" (click)=\"openConfirmAlert(item.idAssign, item.intervention.idIntervention, item.intervention.address, item.intervention.lat, item.intervention.lon, item.intervention.type, item.manager, item.agent, item.intervention.count, $event)\">Confirm</ion-button>\n        <ion-button *ngIf=\"item.intervention.shortReport == null\" fill=\"outline\" color=\"warning\" slot=\"start\"  (click)=\"openPhotoPage(item.intervention.idIntervention)\"><ion-icon name=\"camera\"></ion-icon>Add Photo</ion-button>\n        <ion-button *ngIf=\"item.intervention.shortReport == null\" fill=\"outline\" color=\"primary\" slot=\"start\" (click)=\"openFirstReportModal(item.intervention.idIntervention, item.idAssign, item.startValidate)\"><ion-icon name=\"create\" ></ion-icon>Report</ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n\n</ion-content>\n<ion-button (click)=\"firebaseService.logout()\">Logout</ion-button>\n");

/***/ }),

/***/ "zUM0":
/*!*****************************************************!*\
  !*** ./src/app/pages/homeagent/homeagent.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeagentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeagentPageModule", function() { return HomeagentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _homeagent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeagent-routing.module */ "fTxR");
/* harmony import */ var _homeagent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeagent.page */ "6Ejm");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "JMRq");








let HomeagentPageModule = class HomeagentPageModule {
};
HomeagentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _homeagent_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeagentPageRoutingModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]
        ],
        declarations: [_homeagent_page__WEBPACK_IMPORTED_MODULE_6__["HomeagentPage"]]
    })
], HomeagentPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-homeagent-homeagent-module.js.map