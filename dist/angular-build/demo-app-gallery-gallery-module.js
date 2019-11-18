(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-app-gallery-gallery-module"],{

/***/ "./src/app/demo/app/gallery/gallery-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: './gallery-grid/gallery-grid.module#GalleryGridModule'
            },
            {
                path: 'masonry',
                loadChildren: './gallery-masonry/gallery-masonry.module#GalleryMasonryModule'
            },
            {
                path: 'advance',
                loadChildren: './gallery-advance/gallery-advance.module#GalleryAdvanceModule'
            }
        ]
    }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/gallery/gallery.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/app/gallery/gallery.module.ts ***!
  \****************************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/demo/app/gallery/gallery-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleryRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-app-gallery-gallery-module.js.map