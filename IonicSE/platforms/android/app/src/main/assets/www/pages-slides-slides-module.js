(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"],{

/***/ "0sid":
/*!*******************************************************!*\
  !*** ./src/app/pages/slides/slides-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SlidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageRoutingModule", function() { return SlidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides.page */ "PrxK");




const routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_3__["SlidesPage"]
    }
];
let SlidesPageRoutingModule = class SlidesPageRoutingModule {
};
SlidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlidesPageRoutingModule);



/***/ }),

/***/ "INly":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js\"></script>\n<script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js\"></script>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css\"/>\n\n<ion-app>\n  <ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/logo.png\"/>\n          <h2><strong>Welcome to MyAlert!</strong></h2>\n          <p style=\"font-size: 20px\"><b>MyAlert</b> allows you to warn of dangers or alarms in your city in a simple and free way. </p>\n        </div>\n        <ion-button fill=\"clear\" (click)=\"router.navigateByUrl('/home')\">Login/Signup <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n        <img src=\"assets/photo1.png\"/>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/photo2.png\"/>\n        <h2><strong>Help your city</strong></h2>\n        <p style=\"font-size: 20px\">Warn about any incidents occurring in your area. An agent will take care of your report.</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/photo3.png\"/>\n        <h2><strong>Fire! Fire!</strong></h2>\n        <p style=\"font-size: 20px\">Promptly report the presence of fires and any other type of environmental emergency.</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/photo4.png\"/>\n        <h2><strong>Are you ready?</strong></h2>\n        <p style=\"font-size: 20px\">Allow access to your location to help agents take action and resolve the issue.</p>\n        <ion-button fill=\"clear\" (click)=\"router.navigateByUrl('/home')\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-content>\n</ion-app>\n");

/***/ }),

/***/ "PrxK":
/*!*********************************************!*\
  !*** ./src/app/pages/slides/slides.page.ts ***!
  \*********************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slides.page.html */ "INly");
/* harmony import */ var _slides_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides.page.scss */ "xqe7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SlidesPage = class SlidesPage {
    constructor(router) {
        this.router = router;
        localStorage.setItem('user', null);
        localStorage.setItem('idManager', null);
        localStorage.setItem('idAgent', null);
        localStorage.setItem('idCitizen', null);
    }
    ngOnInit() {
    }
};
SlidesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SlidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlidesPage);



/***/ }),

/***/ "vG9B":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.module.ts ***!
  \***********************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides-routing.module */ "0sid");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "PrxK");







let SlidesPageModule = class SlidesPageModule {
};
SlidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesPageRoutingModule"]
        ],
        declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
    })
], SlidesPageModule);



/***/ }),

/***/ "xqe7":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFFRiIsImZpbGUiOiJzbGlkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxucCBiIHtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG59XHJcbjpyb290IHtcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-slides-slides-module.js.map