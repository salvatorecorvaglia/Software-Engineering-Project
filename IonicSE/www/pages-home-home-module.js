(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center;\n}\n.vertical-center .fixed-content ion-list,\n.vertical-center .scroll-content ion-list {\n  max-width: 300px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJOztFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNOIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlciB7XG4gIC5maXhlZC1jb250ZW50LFxuICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/login-modal/login-modal.component */ "LdAs");
/* harmony import */ var _components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/signup-modal/signup-modal.component */ "XleP");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginModalComponent"], _components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_8__["SignupModalComponent"]],
        entryComponents: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginModalComponent"], _components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_8__["SignupModalComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "9CvR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup-modal/signup-modal.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>SignUp</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-label position=\"floating\">Name</ion-label>\n    <ion-input type=\"text\" #name></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Surname</ion-label>\n    <ion-input type=\"text\" #surname></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Sex</ion-label>\n    <ion-select  #sex>\n    <ion-select-option value=\"F\">Female</ion-select-option>\n    <ion-select-option value=\"M\">Male</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Birthdate</ion-label>\n    <ion-datetime #birthdate></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Address</ion-label>\n    <ion-input type=\"text\" #address></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">City</ion-label>\n    <ion-input type=\"text\" #city></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Country</ion-label>\n    <ion-input type=\"text\" #country></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" #email></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" #password></ion-input>\n  </ion-item>\n  <br>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"onSignUp(name.value, surname.value, email.value,password.value,sex.value,birthdate.value, address.value, city.value, country.value) && dismissModal()\">SignUp</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "HqSi":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-modal/login-modal.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n    <ion-buttons slot=\"end\">\n  <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" #email></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" #password></ion-input>\n  </ion-item>\n\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"onSignin(email.value,password.value) + dismissModal()\">Login</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "LdAs":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-modal.component.html */ "HqSi");
/* harmony import */ var _login_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-modal.component.scss */ "OyFK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _services_citizen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/citizen.service */ "UmAX");







let LoginModalComponent = class LoginModalComponent {
    constructor(modalCtrl, firebaseService, citizenService) {
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.citizenService = citizenService;
        this.isSignedIn = false;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    onSignin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService.signin(email, password);
            if (this.firebaseService.isLoggedIn) {
                this.isSignedIn = true;
            }
        });
    }
};
LoginModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _services_citizen_service__WEBPACK_IMPORTED_MODULE_6__["CitizenService"] }
];
LoginModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-modal',
        template: _raw_loader_login_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginModalComponent);



/***/ }),

/***/ "OyFK":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "XleP":
/*!*******************************************************************!*\
  !*** ./src/app/components/signup-modal/signup-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalComponent", function() { return SignupModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup-modal.component.html */ "9CvR");
/* harmony import */ var _signup_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-modal.component.scss */ "c7f+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _services_citizen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/citizen.service */ "UmAX");








let SignupModalComponent = class SignupModalComponent {
    constructor(modalCtrl, firebaseService, citizenService) {
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.citizenService = citizenService;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    // tslint:disable-next-line:variable-name
    onSignUp(name, surname, email, password, sex, birthdate1, address, city, country) {
        console.log(birthdate1);
        // tslint:disable-next-line:variable-name
        let birthDate;
        const idUser = null;
        const pushid = '42a0e22d-3245-4c29-a11c-75a3ce0180b7';
        const lat = null;
        const lon = null;
        birthDate = birthdate1.toString().slice(0, -13);
        // tslint:disable-next-line:variable-name
        const userDTO = {
            idUser,
            name,
            surname,
            email,
            birthDate,
            sex,
            address,
            city,
            country,
            pushid
        };
        this.citizenService.addCitizen({ lat, lon, userDTO }).subscribe(data => {
            console.log(data);
        });
        return firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
            window.alert('Correctly registered');
            this.SendVerificationMail();
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    SendVerificationMail() {
        return firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().currentUser.sendEmailVerification();
    }
};
SignupModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _services_citizen_service__WEBPACK_IMPORTED_MODULE_7__["CitizenService"] }
];
SignupModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup-modal',
        template: _raw_loader_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupModalComponent);



/***/ }),

/***/ "Z2Br":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let FirebaseService = class FirebaseService {
    constructor(firebaseAuth, router, fcm, userservice, platform) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.fcm = fcm;
        this.userservice = userservice;
        this.platform = platform;
    }
    signin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
                if (this.platform.is('android')) {
                    this.fcm.getToken().then(data => {
                        this.token = data;
                        console.log(data);
                        localStorage.setItem('token', data);
                    });
                }
                localStorage.setItem('user', JSON.stringify(res.user));
                this.userData = JSON.parse(localStorage.getItem('user'));
                this.userservice.getUserByEmail(email).subscribe(data => {
                    this.userData = data;
                    console.log(data);
                    this.idagent = data.idAgent;
                    this.idcitizen = data.idCitizen;
                    this.gotodash(this.idcitizen, this.idagent);
                    console.log(data);
                    console.log(this.idagent);
                    console.log(this.idcitizen);
                });
            }).catch((error) => {
                window.alert(error.message);
            });
        });
    }
    gotodash(idcitizen, idagent) {
        if (idcitizen) {
            localStorage.setItem('idCitizen', idcitizen);
            this.router.navigateByUrl('/homecitizen');
        }
        else if (idagent) {
            localStorage.setItem('idAgent', idagent);
            this.router.navigateByUrl('/homeagent');
        }
        else if (!idcitizen && !idagent) {
            window.alert('User not authorized');
        }
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null);
    }
    logout() {
        return this.firebaseAuth.signOut().then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('idManager');
            localStorage.removeItem('idAgent');
            this.router.navigateByUrl('/slides');
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseService);



/***/ }),

/***/ "c7f+":
/*!*********************************************************************!*\
  !*** ./src/app/components/signup-modal/signup-modal.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"assets/icon/favicon.png\" width=\"50\">\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-form\">\n  <img src=\"assets/photologin.png\">\n  <ion-grid align=\"center\" style=\"margin-top: 50px\">\n    <ion-row>\n\n      <ion-col>\n        <ion-button (click)=\"openSignupModal()\" expand=\"block\" color=\"primary\" style=\"margin-bottom: 7px\">Sign Up</ion-button>\n\n\n        <span class=\"already\" style=\"margin-bottom: 40px\">Already a user?</span>\n\n        <ion-button (click)=\"openLoginModal()\" expand=\"block\" color=\"danger\">Sign In</ion-button>\n        <img src=\"assets/logo.png\" width=\"150\" style=\"margin-top: 10px\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/login-modal/login-modal.component */ "LdAs");
/* harmony import */ var _components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/signup-modal/signup-modal.component */ "XleP");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");








let HomePage = class HomePage {
    constructor(modalCtrl, firebaseService) {
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.isSignedIn = false;
        localStorage.setItem('user', null);
        localStorage.setItem('user', null);
        localStorage.setItem('idManager', null);
        localStorage.setItem('idAgent', null);
        localStorage.setItem('idCitizen', null);
    }
    ngOnInit() {
        if (localStorage.getItem('user') !== null) {
            this.isSignedIn = true;
        }
        else {
            this.isSignedIn = false;
        }
    }
    openLoginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__["LoginModalComponent"]
            });
            yield modal.present();
        });
    }
    openSignupModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__["SignupModalComponent"]
            });
            yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const userbyemailurl = 'http://localhost:8080/user/getByEmail/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUserByEmail(email) {
        return this.http.get(userbyemailurl + '?email=' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched user email=${email}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getUser email`)));
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
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map