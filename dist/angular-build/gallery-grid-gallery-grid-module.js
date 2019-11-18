(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-grid-gallery-grid-module"],{

/***/ "./src/app/demo/app/gallery/gallery-grid/gallery-grid-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-grid/gallery-grid-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: GalleryGridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryGridRoutingModule", function() { return GalleryGridRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-grid.component */ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.ts");




var routes = [
    {
        path: '',
        component: _gallery_grid_component__WEBPACK_IMPORTED_MODULE_3__["GalleryGridComponent"]
    }
];
var GalleryGridRoutingModule = /** @class */ (function () {
    function GalleryGridRoutingModule() {
    }
    GalleryGridRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GalleryGridRoutingModule);
    return GalleryGridRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Image Grid\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6\" *ngFor=\"let img of images; let i = index\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <ks-modal-gallery [id]=\"img.id\" [currentImageConfig]=\"{description: customFullDescriptionHidden}\" [modalImages]=\"[img]\" [dotsConfig]=\"{visible: false}\" [previewConfig]=\"{visible: false}\"></ks-modal-gallery>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Video Grid\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe allowfullscreen=\"\" src=\"//player.vimeo.com/video/246066429?title=0&amp;byline=0&amp;portrait=0\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe allowfullscreen=\"\" src=\"//player.vimeo.com/video/246066429?title=0&amp;byline=0&amp;portrait=0\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe allowfullscreen=\"\" src=\"//player.vimeo.com/video/246066429?title=0&amp;byline=0&amp;portrait=0\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/IkyZHPnfFnE\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/IkyZHPnfFnE\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"thumbnail mb-4\">\n            <div class=\"thumb\">\n              <div class=\"embed-responsive embed-responsive-4by3\">\n                <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/IkyZHPnfFnE\"></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYXBwL2dhbGxlcnkvZ2FsbGVyeS1ncmlkL2dhbGxlcnktZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.ts ***!
  \*************************************************************************/
/*! exports provided: GalleryGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryGridComponent", function() { return GalleryGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");



var GalleryGridComponent = /** @class */ (function () {
    function GalleryGridComponent() {
        this.images = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](0, { img: 'assets/images/gallery-grid/img-grd-gal-1.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](1, { img: 'assets/images/gallery-grid/img-grd-gal-2.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](2, { img: 'assets/images/gallery-grid/img-grd-gal-3.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](3, { img: 'assets/images/gallery-grid/img-grd-gal-4.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](4, { img: 'assets/images/gallery-grid/img-grd-gal-5.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](5, { img: 'assets/images/gallery-grid/img-grd-gal-6.jpg' })
        ];
        this.singleImage = [this.images[0]];
        this.customFullDescriptionHidden = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_HIDDEN,
            customFullDescription: 'Custom description of the current visible image'
        };
    }
    GalleryGridComponent.prototype.ngOnInit = function () {
    };
    GalleryGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-grid',
            template: __webpack_require__(/*! ./gallery-grid.component.html */ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.html"),
            styles: [__webpack_require__(/*! ./gallery-grid.component.scss */ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryGridComponent);
    return GalleryGridComponent;
}());



/***/ }),

/***/ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-grid/gallery-grid.module.ts ***!
  \**********************************************************************/
/*! exports provided: GalleryGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryGridModule", function() { return GalleryGridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-grid-routing.module */ "./src/app/demo/app/gallery/gallery-grid/gallery-grid-routing.module.ts");
/* harmony import */ var _gallery_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-grid.component */ "./src/app/demo/app/gallery/gallery-grid/gallery-grid.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var GalleryGridModule = /** @class */ (function () {
    function GalleryGridModule() {
    }
    GalleryGridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _gallery_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleryGridRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_gallery_grid_component__WEBPACK_IMPORTED_MODULE_4__["GalleryGridComponent"]]
        })
    ], GalleryGridModule);
    return GalleryGridModule;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-grid-gallery-grid-module.js.map