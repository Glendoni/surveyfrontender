(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-layout4-theme-layout4-module"],{

/***/ "./src/app/demo/layout/theme-layout4/theme-layout4-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout4/theme-layout4-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ThemeLayout4RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout4RoutingModule", function() { return ThemeLayout4RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layout4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-layout4.component */ "./src/app/demo/layout/theme-layout4/theme-layout4.component.ts");




var routes = [
    {
        path: '',
        component: _theme_layout4_component__WEBPACK_IMPORTED_MODULE_3__["ThemeLayout4Component"]
    }
];
var ThemeLayout4RoutingModule = /** @class */ (function () {
    function ThemeLayout4RoutingModule() {
    }
    ThemeLayout4RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeLayout4RoutingModule);
    return ThemeLayout4RoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-layout4/theme-layout4.component.html":
/*!************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout4/theme-layout4.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Pre Build Layout 4\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>vertical</code></mark></li>\n                <li><mark>pre-layout: <code>layout-4</code></mark></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li>layout-type: <code>menu-dark</code></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-layout4/theme-layout4.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout4/theme-layout4.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLWxheW91dDQvdGhlbWUtbGF5b3V0NC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/layout/theme-layout4/theme-layout4.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout4/theme-layout4.component.ts ***!
  \**********************************************************************/
/*! exports provided: ThemeLayout4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout4Component", function() { return ThemeLayout4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeLayout4Component = /** @class */ (function () {
    function ThemeLayout4Component() {
    }
    ThemeLayout4Component.prototype.ngOnInit = function () {
    };
    ThemeLayout4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-layout4',
            template: __webpack_require__(/*! ./theme-layout4.component.html */ "./src/app/demo/layout/theme-layout4/theme-layout4.component.html"),
            styles: [__webpack_require__(/*! ./theme-layout4.component.scss */ "./src/app/demo/layout/theme-layout4/theme-layout4.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeLayout4Component);
    return ThemeLayout4Component;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-layout4/theme-layout4.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout4/theme-layout4.module.ts ***!
  \*******************************************************************/
/*! exports provided: ThemeLayout4Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout4Module", function() { return ThemeLayout4Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_layout4_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-layout4-routing.module */ "./src/app/demo/layout/theme-layout4/theme-layout4-routing.module.ts");
/* harmony import */ var _theme_layout4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-layout4.component */ "./src/app/demo/layout/theme-layout4/theme-layout4.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeLayout4Module = /** @class */ (function () {
    function ThemeLayout4Module() {
    }
    ThemeLayout4Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_layout4_component__WEBPACK_IMPORTED_MODULE_4__["ThemeLayout4Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_layout4_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeLayout4RoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeLayout4Module);
    return ThemeLayout4Module;
}());



/***/ })

}]);
//# sourceMappingURL=theme-layout4-theme-layout4-module.js.map