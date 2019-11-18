(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-light-box-adv-light-box-module"],{

/***/ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AdvLightBoxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvLightBoxRoutingModule", function() { return AdvLightBoxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_light_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-light-box.component */ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.ts");




var routes = [
    {
        path: '',
        component: _adv_light_box_component__WEBPACK_IMPORTED_MODULE_3__["AdvLightBoxComponent"]
    }
];
var AdvLightBoxRoutingModule = /** @class */ (function () {
    function AdvLightBoxRoutingModule() {
    }
    AdvLightBoxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvLightBoxRoutingModule);
    return AdvLightBoxRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Single Images\">\n      <div class=\"row text-center border-less-image-gallery\">\n        <div class=\"col-xl-2 col-lg-3 col-sm-4 col-xs-12\" *ngFor=\"let img of images; let i = index\">\n          <ks-modal-gallery [id]=\"img.id\" [currentImageConfig]=\"{description: customFullDescriptionHidden}\" [modalImages]=\"[img]\" [dotsConfig]=\"{visible: false}\" [previewConfig]=\"{visible: false}\"></ks-modal-gallery>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-9\">\n    <app-card cardTitle=\"Image Gallery\">\n      <div class=\"row text-center border-less-image-gallery\">\n          <ks-modal-gallery [id]=\"1\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryGrid\"></ks-modal-gallery>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-card cardTitle=\"Vertical Gallery\">\n      <div class=\"row text-center border-less-image-gallery\">\n        <ks-modal-gallery [id]=\"4\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryColumn\"></ks-modal-gallery>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1saWdodC1ib3gvYWR2LWxpZ2h0LWJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdvLightBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvLightBoxComponent", function() { return AdvLightBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");



var AdvLightBoxComponent = /** @class */ (function () {
    function AdvLightBoxComponent() {
        this.images = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656452, { img: 'assets/images/light-box/l1.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656453, { img: 'assets/images/light-box/l5.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656454, { img: 'assets/images/light-box/l6.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656455, { img: 'assets/images/light-box/l4.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656456, { img: 'assets/images/light-box/l5.jpg' }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](44545656457, { img: 'assets/images/light-box/l6.jpg' })
        ];
        this.singleImage = [this.images[0]];
        this.customFullDescriptionHidden = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_HIDDEN,
            customFullDescription: 'Custom description of the current visible image'
        };
        this.customPlainGalleryRowConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.plainGalleryGrid = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].GRID,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GridLayout"]({ width: '150px', height: '150px' }, { length: 6, wrap: true })
        };
        this.plainGalleryColumn = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].COLUMN,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '100px', height: '100px' }, { length: 6, wrap: true }, 'flex-start')
        };
    }
    AdvLightBoxComponent.prototype.ngOnInit = function () {
    };
    AdvLightBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-light-box',
            template: __webpack_require__(/*! ./adv-light-box.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.html"),
            styles: [__webpack_require__(/*! ./adv-light-box.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvLightBoxComponent);
    return AdvLightBoxComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdvLightBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvLightBoxModule", function() { return AdvLightBoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_light_box_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-light-box-routing.module */ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box-routing.module.ts");
/* harmony import */ var _adv_light_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv-light-box.component */ "./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AdvLightBoxModule = /** @class */ (function () {
    function AdvLightBoxModule() {
    }
    AdvLightBoxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adv_light_box_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvLightBoxRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_adv_light_box_component__WEBPACK_IMPORTED_MODULE_4__["AdvLightBoxComponent"]]
        })
    ], AdvLightBoxModule);
    return AdvLightBoxModule;
}());



/***/ })

}]);
//# sourceMappingURL=adv-light-box-adv-light-box-module.js.map