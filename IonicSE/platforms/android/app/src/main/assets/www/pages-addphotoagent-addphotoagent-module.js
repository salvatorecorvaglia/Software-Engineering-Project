(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addphotoagent-addphotoagent-module"],{

/***/ "3YqR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/addphotoagent/addphotoagent-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddphotoagentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoagentPageRoutingModule", function() { return AddphotoagentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addphotoagent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addphotoagent.page */ "tbBR");




const routes = [
    {
        path: '',
        component: _addphotoagent_page__WEBPACK_IMPORTED_MODULE_3__["AddphotoagentPage"]
    }
];
let AddphotoagentPageRoutingModule = class AddphotoagentPageRoutingModule {
};
AddphotoagentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddphotoagentPageRoutingModule);



/***/ }),

/***/ "e3dv":
/*!*************************************************************!*\
  !*** ./src/app/pages/addphotoagent/addphotoagent.module.ts ***!
  \*************************************************************/
/*! exports provided: AddphotoagentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoagentPageModule", function() { return AddphotoagentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addphotoagent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addphotoagent-routing.module */ "3YqR");
/* harmony import */ var _addphotoagent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addphotoagent.page */ "tbBR");







let AddphotoagentPageModule = class AddphotoagentPageModule {
};
AddphotoagentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addphotoagent_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddphotoagentPageRoutingModule"]
        ],
        declarations: [_addphotoagent_page__WEBPACK_IMPORTED_MODULE_6__["AddphotoagentPage"]]
    })
], AddphotoagentPageModule);



/***/ }),

/***/ "rqHw":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addphotoagent/addphotoagent.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Photo</ion-title>\n    <ion-button color=\"primary\" slot=\"end\" (click)=\"router.navigateByUrl('/homeagent')\">Done</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of images;\" >\n      <ion-thumbnail slot=\"start\" *ngIf=\"item.url\">\n        <img [src]=\"item.url\" alt=\"\">\n      </ion-thumbnail>\n      <ion-button (click)=\"openPhoto(item.url)\">View Image</ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"remove(item.idImage, item.idFire)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Add New Image</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-button type=\"file\" name=\"takephoto\" (click)=\"takePhoto()\" >Take Photo</ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input type=\"file\" class=\"form-control-file\" name=\"file\" (change)=\"chooseFile($event)\"></ion-input>\n      </ion-item>\n      <ion-button type=\"submit\" (click)=\"addTodo()\">Upload</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "tbBR":
/*!***********************************************************!*\
  !*** ./src/app/pages/addphotoagent/addphotoagent.page.ts ***!
  \***********************************************************/
/*! exports provided: AddphotoagentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoagentPage", function() { return AddphotoagentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addphotoagent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addphotoagent.page.html */ "rqHw");
/* harmony import */ var _addphotoagent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addphotoagent.page.scss */ "xfKo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/image.service */ "mnRn");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _services_agent_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/agent.service */ "WQVK");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "JZFu");














let AddphotoagentPage = class AddphotoagentPage {
    constructor(route, router, camera, storage, loadingController, db, imageService, geolocation, agentService, 
    // @ts-ignore
    iab) {
        this.route = route;
        this.router = router;
        this.camera = camera;
        this.storage = storage;
        this.loadingController = loadingController;
        this.db = db;
        this.imageService = imageService;
        this.geolocation = geolocation;
        this.agentService = agentService;
        this.iab = iab;
        firebase__WEBPACK_IMPORTED_MODULE_13__["default"].auth().onAuthStateChanged(user => {
            if (user) {
                this.router.navigateByUrl('/addphotoagent');
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
        this.idagent = localStorage.getItem('idAgent');
        this.agentService.getAgentById(this.idagent).subscribe(data => {
            console.log(data);
            this.agent = data;
            this.idUser = data.userDTO.idUser;
            this.getImages(this.idIntervention, this.idUser);
        });
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            this.agentService.updatePosition(this.idagent, this.lat, this.lon, this.agent).subscribe(data => {
                console.log(data);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getImages(idIntervention, idUser) {
        this.imageService.getImageByIdUser(idIntervention, idUser).subscribe(data => {
            console.log(data);
            this.images = data;
        });
    }
    takePhoto() {
        const options = {
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
            this.itemsRef.add({}).then((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.imageUrl = yield this.uploadFile(resp.id, this.myPhoto);
                yield this.itemsRef.doc(resp.id).update({
                    id: resp.id,
                    imageUrl: this.imageUrl || null
                });
            })).catch(error => {
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
            }).then((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.idFire = resp.id;
                const imageUrl = yield this.uploadFile(resp.id, this.selectedFile);
                yield this.itemsRef.doc(resp.id).update({
                    id: resp.id,
                    imageUrl: imageUrl || null
                });
            })).catch(error => {
                console.log(error);
            });
        }
    }
    uploadFile(id, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (file && file.length) {
                try {
                    yield this.presentLoading();
                    const task = yield this.storage.ref('images').child(id).put(file[0]);
                    yield this.loading.dismiss();
                    let url;
                    let lat;
                    let lon;
                    let idFire;
                    url = yield this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
                    lat = this.lat;
                    lon = this.lon;
                    idFire = this.idFire;
                    console.log(lat);
                    console.log(lon);
                    let image;
                    image = [{
                            url,
                            lat,
                            lon,
                            idFire
                        }];
                    this.imageService.addImage(this.idIntervention, this.idUser.toString(), image).subscribe(data => {
                        console.log(data);
                        this.getImages(this.idIntervention, this.idUser);
                    });
                    return url;
                }
                catch (error) {
                    console.log(error);
                }
            }
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            return this.loading.present();
        });
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
    openPhoto(url) {
        const browser = this.iab.create(url);
    }
};
AddphotoagentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _services_agent_service__WEBPACK_IMPORTED_MODULE_12__["AgentService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] }
];
AddphotoagentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addphotoagent',
        template: _raw_loader_addphotoagent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addphotoagent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddphotoagentPage);



/***/ }),

/***/ "xfKo":
/*!*************************************************************!*\
  !*** ./src/app/pages/addphotoagent/addphotoagent.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRwaG90b2FnZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-addphotoagent-addphotoagent-module.js.map