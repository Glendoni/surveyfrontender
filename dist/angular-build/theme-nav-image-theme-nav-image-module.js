(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-nav-image-theme-nav-image-module"],{

/***/ "./src/app/demo/layout/theme-nav-image/theme-nav-image-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/layout/theme-nav-image/theme-nav-image-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ThemeNavImageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeNavImageRoutingModule", function() { return ThemeNavImageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_nav_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-nav-image.component */ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.ts");




var routes = [
    {
        path: '',
        component: _theme_nav_image_component__WEBPACK_IMPORTED_MODULE_3__["ThemeNavImageComponent"]
    }
];
var ThemeNavImageRoutingModule = /** @class */ (function () {
    function ThemeNavImageRoutingModule() {
    }
    ThemeNavImageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeNavImageRoutingModule);
    return ThemeNavImageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo/layout/theme-nav-image/theme-nav-image.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Sidebar Image\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>vertical</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li>layout-type: <code>menu-dark</code></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li><mark>nav-back-image: <code>navbar-image-3</code></mark></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo/layout/theme-nav-image/theme-nav-image.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLW5hdi1pbWFnZS90aGVtZS1uYXYtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/layout/theme-nav-image/theme-nav-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThemeNavImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeNavImageComponent", function() { return ThemeNavImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeNavImageComponent = /** @class */ (function () {
    function ThemeNavImageComponent() {
    }
    ThemeNavImageComponent.prototype.ngOnInit = function () {
    };
    ThemeNavImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-nav-image',
            template: __webpack_require__(/*! ./theme-nav-image.component.html */ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.html"),
            styles: [__webpack_require__(/*! ./theme-nav-image.component.scss */ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeNavImageComponent);
    return ThemeNavImageComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-nav-image/theme-nav-image.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/layout/theme-nav-image/theme-nav-image.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThemeNavImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeNavImageModule", function() { return ThemeNavImageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_nav_image_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-nav-image-routing.module */ "./src/app/demo/layout/theme-nav-image/theme-nav-image-routing.module.ts");
/* harmony import */ var _theme_nav_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-nav-image.component */ "./src/app/demo/layout/theme-nav-image/theme-nav-image.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeNavImageModule = /** @class */ (function () {
    function ThemeNavImageModule() {
    }
    ThemeNavImageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_nav_image_component__WEBPACK_IMPORTED_MODULE_4__["ThemeNavImageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_nav_image_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeNavImageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeNavImageModule);
    return ThemeNavImageModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-nav-image-theme-nav-image-module.js.map