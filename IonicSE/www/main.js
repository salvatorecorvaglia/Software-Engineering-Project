(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ingegneria\Magistrale\Software Engineering\Progetto\myAlert\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBAmDNos2QysaXwtZ_rU0pJ4cjRmfrVwz4",
        authDomain: "myalertlecce.firebaseapp.com",
        projectId: "myalertlecce",
        storageBucket: "myalertlecce.appspot.com",
        messagingSenderId: "421995246592",
        appId: "1:421995246592:web:7f7110cd4ad755477b94e5",
        measurementId: "G-MB2Y3W8LJ1"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ESHi":
/*!**************************************************!*\
  !*** ./src/app/services/intervention.service.ts ***!
  \**************************************************/
/*! exports provided: InterventionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionService", function() { return InterventionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const getinterventionUrl = 'http://localhost:8080/intervention/getInterventionById/';
const getinterventionstatusUrl = 'http://localhost:8080/intervention/getInterventionByStaus/';
let InterventionService = class InterventionService {
    constructor(http) {
        this.http = http;
    }
    getInterventionById(idIntervention) {
        return this.http.get(getinterventionUrl + idIntervention).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('get intervention by id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getInterventionById')));
    }
    getInterventionByStatus(status) {
        return this.http.get(getinterventionstatusUrl + status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('get intervention by status')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getInterventionByStatus', [])));
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
InterventionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InterventionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterventionService);



/***/ }),

/***/ "EUCk":
/*!***************************************************************!*\
  !*** ./src/app/components/view-alarm/view-alarm.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewAlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAlarmComponent", function() { return ViewAlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_alarm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-alarm.component.html */ "aOtr");
/* harmony import */ var _view_alarm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-alarm.component.scss */ "qwBL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_intervention_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/intervention.service */ "ESHi");







let ViewAlarmComponent = class ViewAlarmComponent {
    constructor(interventionService, modalCtrl, router) {
        this.interventionService = interventionService;
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.interventionService.getInterventionById(this.value).subscribe(data => {
            console.log(data);
            this.intervention = data;
            this.address = data.address;
            this.startDate = data.startDate;
            this.endDate = data.endDate;
            this.shortReport = data.shortReport;
            this.detailedReport = data.detailedReport;
            this.durate = this.getDataDiff(this.startDate, this.endDate);
            console.log(this.durate);
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    getDataDiff(startDate, endDate) {
        const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
        const days = Math.floor(diff / (60 * 60 * 24 * 1000));
        const hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
        const minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
        const seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
        const durate = hours + 'h, ' + minutes + 'm, ' + seconds + 's';
        return durate;
    }
};
ViewAlarmComponent.ctorParameters = () => [
    { type: _services_intervention_service__WEBPACK_IMPORTED_MODULE_6__["InterventionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ViewAlarmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-alarm',
        template: _raw_loader_view_alarm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_alarm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewAlarmComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_view_alarm_view_alarm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/view-alarm/view-alarm.component */ "EUCk");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");

















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_view_alarm_view_alarm_component__WEBPACK_IMPORTED_MODULE_15__["ViewAlarmComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_16__["FCM"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aOtr":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-alarm/view-alarm.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Check Alarm</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Address:</ion-label>\n        <ion-input disabled=\"true\">{{address}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Assigned Date:\n        <ion-input disabled=\"true\">{{startDate | date: 'medium'}}</ion-input>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Duration:\n        <ion-input *ngIf=\"endDate != null\" disabled=\"true\">{{durate}}</ion-input>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Short Report:\n        <ion-textarea disabled=\"true\">{{shortReport}}</ion-textarea>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Long Report:\n        <ion-textarea disabled=\"true\">{{detailedReport}}</ion-textarea>\n        </ion-label>\n      </ion-item>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "iz0C":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/@angular/core/fesm2015 lazy namespace object ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "iz0C";

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "qwBL":
/*!*****************************************************************!*\
  !*** ./src/app/components/view-alarm/view-alarm.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFsYXJtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'slides',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-slides-slides-module */ "pages-slides-slides-module").then(__webpack_require__.bind(null, /*! ./pages/slides/slides.module */ "vG9B")).then(m => m.SlidesPageModule)
    },
    {
        path: '',
        redirectTo: 'slides',
        pathMatch: 'full'
    },
    {
        path: 'homecitizen',
        loadChildren: () => Promise.all(/*! import() | pages-homecitizen-homecitizen-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("default~pages-homeagent-homeagent-module~pages-homecitizen-homecitizen-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-homecitizen-homecitizen-module")]).then(__webpack_require__.bind(null, /*! ./pages/homecitizen/homecitizen.module */ "XMng")).then(m => m.HomecitizenPageModule)
    },
    {
        path: 'new-alarm',
        loadChildren: () => Promise.all(/*! import() | pages-new-alarm-new-alarm-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-new-alarm-new-alarm-module")]).then(__webpack_require__.bind(null, /*! ./pages/new-alarm/new-alarm.module */ "Qi0B")).then(m => m.NewAlarmPageModule)
    },
    {
        path: 'addphoto',
        loadChildren: () => Promise.all(/*! import() | pages-addphoto-addphoto-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-addphoto-addphoto-module")]).then(__webpack_require__.bind(null, /*! ./pages/addphoto/addphoto.module */ "BZAw")).then(m => m.AddphotoPageModule)
    },
    {
        path: 'homeagent',
        loadChildren: () => Promise.all(/*! import() | pages-homeagent-homeagent-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("default~pages-homeagent-homeagent-module~pages-homecitizen-homecitizen-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-homeagent-homeagent-module")]).then(__webpack_require__.bind(null, /*! ./pages/homeagent/homeagent.module */ "zUM0")).then(m => m.HomeagentPageModule)
    },
    {
        path: 'addphotoagent',
        loadChildren: () => Promise.all(/*! import() | pages-addphotoagent-addphotoagent-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-addphotoagent-addphotoagent-module")]).then(__webpack_require__.bind(null, /*! ./pages/addphotoagent/addphotoagent.module */ "e3dv")).then(m => m.AddphotoagentPageModule)
    },
    {
        path: 'citizenprofile',
        loadChildren: () => Promise.all(/*! import() | pages-citizenprofile-citizenprofile-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-citizenprofile-citizenprofile-module")]).then(__webpack_require__.bind(null, /*! ./pages/citizenprofile/citizenprofile.module */ "5QFI")).then(m => m.CitizenprofilePageModule)
    },
    {
        path: 'agentprofile',
        loadChildren: () => Promise.all(/*! import() | pages-agentprofile-agentprofile-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-agentprofile-agentprofile-module")]).then(__webpack_require__.bind(null, /*! ./pages/agentprofile/agentprofile.module */ "ccER")).then(m => m.AgentprofilePageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~firebase-auth~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-~1a909b35"), __webpack_require__.e("default~pages-addphoto-addphoto-module~pages-addphotoagent-addphotoagent-module~pages-agentprofile-a~db589dea"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map