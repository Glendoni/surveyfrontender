(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-carousel-basic-carousel-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicCarouselRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCarouselRoutingModule", function() { return BasicCarouselRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-carousel.component */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts");




var routes = [
    {
        path: '',
        component: _basic_carousel_component__WEBPACK_IMPORTED_MODULE_3__["BasicCarouselComponent"]
    }
];
var BasicCarouselRoutingModule = /** @class */ (function () {
    function BasicCarouselRoutingModule() {
    }
    BasicCarouselRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicCarouselRoutingModule);
    return BasicCarouselRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <app-card cardTitle=\"Basic Carousel\" [options]=\"false\">\n      <ngb-carousel [showNavigationArrows]=\"false\" [showNavigationIndicators]=\"false\" [interval]=\"2000\">\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-1.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Ssecond Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-4.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-6.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-7.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-5.jpg\" alt=\"Third Slide\">\n        </ng-template>\n      </ngb-carousel>\n    </app-card>\n  </div>\n  <div class=\"col-sm-4\">\n    <app-card cardTitle=\"Carousel Arrows Controls\" [options]=\"false\">\n      <ngb-carousel [showNavigationIndicators]=\"false\">\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-7.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-6.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-4.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-5.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-1.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Ssecond Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Third Slide\">\n        </ng-template>\n      </ngb-carousel>\n    </app-card>\n  </div>\n  <div class=\"col-sm-4\">\n    <app-card cardTitle=\"Carousel Indicators\" [options]=\"false\">\n      <ngb-carousel [showNavigationArrows]=\"false\" [interval]=\"3000\">\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-2.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Ssecond Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-3.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-4.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-5.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-6.jpg\" alt=\"Third Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-7.jpg\" alt=\"Third Slide\">\n        </ng-template>\n      </ngb-carousel>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Carousel - No Loop\" [options]=\"false\">\n      <ngb-carousel [wrap]=\"false\" [interval]=\"10000\">\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-7.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-6.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-5.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-4.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-3.jpg\" alt=\"First Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Ssecond Slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Third Slide\">\n        </ng-template>\n      </ngb-carousel>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Carousel With Captions\" [options]=\"false\">\n      <ngb-carousel>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-3.jpg\" alt=\"First Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">First slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-2.jpg\" alt=\"Ssecond Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Second slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-1.jpg\" alt=\"Third Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Third slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-7.jpg\" alt=\"Third Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Forth slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-6.jpg\" alt=\"Third Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Fifth slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-5.jpg\" alt=\"Third Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Sixth slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"d-block w-100\" src=\"assets/images/slider/img-slide-4.jpg\" alt=\"Third Slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5 class=\"text-white\">Seventh slide label</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtY2Fyb3VzZWwvYmFzaWMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BasicCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCarouselComponent", function() { return BasicCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicCarouselComponent = /** @class */ (function () {
    function BasicCarouselComponent() {
    }
    BasicCarouselComponent.prototype.ngOnInit = function () {
    };
    BasicCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-carousel',
            template: __webpack_require__(/*! ./basic-carousel.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.html"),
            styles: [__webpack_require__(/*! ./basic-carousel.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicCarouselComponent);
    return BasicCarouselComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCarouselModule", function() { return BasicCarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-carousel-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts");
/* harmony import */ var _basic_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-carousel.component */ "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var BasicCarouselModule = /** @class */ (function () {
    function BasicCarouselModule() {
    }
    BasicCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicCarouselRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"]
            ],
            declarations: [_basic_carousel_component__WEBPACK_IMPORTED_MODULE_4__["BasicCarouselComponent"]]
        })
    ], BasicCarouselModule);
    return BasicCarouselModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-carousel-basic-carousel-module.js.map