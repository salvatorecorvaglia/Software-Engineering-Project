(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agentprofile-agentprofile-module"],{

/***/ "1LYZ":
/*!***********************************************************!*\
  !*** ./src/app/pages/agentprofile/agentprofile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VudHByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "4+cC":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentprofile/agentprofile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-button slot=\"end\" (click)=\"router.navigateByUrl('/homeagent')\">Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Name:</ion-label>\n    <ion-input type=\"text\" [disabled]=\"disabled\" #name1 placeholder=\"{{name}}\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Surname:</ion-label>\n    <ion-input type=\"text\" [disabled]=\"disabled\" #surname1 placeholder=\"{{surname}}\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Sex:</ion-label>\n    <ion-select [disabled]=\"disabled\" #sex1 value=\"{{sex}}\" placeholder=\"{{sex}}\">\n      <ion-select-option value=\"M\">M</ion-select-option>\n      <ion-select-option value=\"F\">F</ion-select-option></ion-select>\n\n  </ion-item>\n  <ion-item>\n    <ion-label>Birthdate:</ion-label>\n    <ion-datetime value=\"{{birthDate | date: 'medium'}}\" [disabled]=\"disabled\" #birthdate1></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Address:</ion-label>\n    <ion-input type=\"text\" [disabled]=\"disabled\" #address1 placeholder=\"{{address}}\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>City:</ion-label>\n    <ion-input type=\"text\" [disabled]=\"disabled\" #city1 placeholder=\"{{city}}\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Country:</ion-label>\n    <ion-input type=\"text\" [disabled]=\"disabled\" #country1 placeholder=\"{{country}}\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-button [disabled]=\"disabled\" (click)=\"updateAgent(name1.value, surname1.value, sex1.value, birthdate1.value, address1.value, city1.value, country1.value )\">UPDATE</ion-button>\n    <ion-button [hidden]=\"hidden\" (click)=\"modify()\">MODIFY</ion-button>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "WZZy":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agentprofile/agentprofile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AgentprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentprofilePageRoutingModule", function() { return AgentprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agentprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentprofile.page */ "wScm");




const routes = [
    {
        path: '',
        component: _agentprofile_page__WEBPACK_IMPORTED_MODULE_3__["AgentprofilePage"]
    }
];
let AgentprofilePageRoutingModule = class AgentprofilePageRoutingModule {
};
AgentprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgentprofilePageRoutingModule);



/***/ }),

/***/ "ccER":
/*!***********************************************************!*\
  !*** ./src/app/pages/agentprofile/agentprofile.module.ts ***!
  \***********************************************************/
/*! exports provided: AgentprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentprofilePageModule", function() { return AgentprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agentprofile-routing.module */ "WZZy");
/* harmony import */ var _agentprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agentprofile.page */ "wScm");







let AgentprofilePageModule = class AgentprofilePageModule {
};
AgentprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agentprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgentprofilePageRoutingModule"]
        ],
        declarations: [_agentprofile_page__WEBPACK_IMPORTED_MODULE_6__["AgentprofilePage"]]
    })
], AgentprofilePageModule);



/***/ }),

/***/ "wScm":
/*!*********************************************************!*\
  !*** ./src/app/pages/agentprofile/agentprofile.page.ts ***!
  \*********************************************************/
/*! exports provided: AgentprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentprofilePage", function() { return AgentprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agentprofile.page.html */ "4+cC");
/* harmony import */ var _agentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agentprofile.page.scss */ "1LYZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_agent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/agent.service */ "WQVK");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "JZFu");








let AgentprofilePage = class AgentprofilePage {
    constructor(router, agentService, toastCtrl) {
        this.router = router;
        this.agentService = agentService;
        this.toastCtrl = toastCtrl;
        this.disabled = true;
        this.hidden = false;
        firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().onAuthStateChanged(user => {
            if (user) {
                this.router.navigateByUrl('/agentprofile');
            }
            else {
                this.router.navigateByUrl('/slides');
            }
        });
    }
    ngOnInit() {
        this.getAgentData();
    }
    getAgentData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idAgent = localStorage.getItem('idAgent');
            yield this.agentService.getAgentById(this.idAgent).subscribe(data => {
                this.agent = data;
                this.name = data.userDTO.name;
                this.surname = data.userDTO.surname;
                this.address = data.userDTO.address;
                this.city = data.userDTO.city;
                this.country = data.userDTO.country;
                this.email = data.userDTO.email;
                this.birthDate = data.userDTO.birthDate;
                this.sex = data.userDTO.sex;
                this.lat = data.lat;
                this.lon = data.lon;
                this.idUser = data.userDTO.idUser;
            });
        });
    }
    updateAgent(name, surname, sex, birthDate, address, city, country) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (name === '') {
                name = this.name;
            }
            if (surname === '') {
                surname = this.surname;
            }
            if (address === '') {
                address = this.address;
            }
            if (city === '') {
                city = this.city;
            }
            if (country === '') {
                country = this.country;
            }
            let email;
            email = this.email;
            let pushId;
            pushId = localStorage.getItem('token');
            birthDate = new Date(birthDate).toISOString();
            const user = {
                name,
                surname,
                sex,
                birthDate,
                address,
                city,
                email,
                country,
                pushId
            };
            yield this.agentService.updateAgent(this.idUser.toString(), user).subscribe(data => {
                console.log(data);
                this.getAgentData();
                this.presentToast();
            });
        });
    }
    modify() {
        this.disabled = false;
        this.hidden = true;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Data Updated',
                duration: 2000
            });
            yield toast.present();
        });
    }
};
AgentprofilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_agent_service__WEBPACK_IMPORTED_MODULE_6__["AgentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
AgentprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agentprofile',
        template: _raw_loader_agentprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agentprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgentprofilePage);



/***/ })

}]);
//# sourceMappingURL=pages-agentprofile-agentprofile-module.js.map