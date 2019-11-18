(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-layout5h-theme-layout5h-module"],{

/***/ "./src/app/demo/layout/theme-layout5h/theme-layout5h-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout5h/theme-layout5h-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ThemeLayout5hRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout5hRoutingModule", function() { return ThemeLayout5hRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layout5h_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-layout5h.component */ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.ts");




var routes = [
    {
        path: '',
        component: _theme_layout5h_component__WEBPACK_IMPORTED_MODULE_3__["ThemeLayout5hComponent"]
    }
];
var ThemeLayout5hRoutingModule = /** @class */ (function () {
    function ThemeLayout5hRoutingModule() {
    }
    ThemeLayout5hRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeLayout5hRoutingModule);
    return ThemeLayout5hRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout5h/theme-layout5h.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Pre Build Layout 5 Horizontal\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>horizontal</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li><mark>layout-type: <code>menu-light</code></mark></li>\n                <li><mark>nav-icon-color: <code>true</code></mark></li>\n                <li><mark>header-back-color: <code>header-blue</code></mark></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout5h/theme-layout5h.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLWxheW91dDVoL3RoZW1lLWxheW91dDVoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout5h/theme-layout5h.component.ts ***!
  \************************************************************************/
/*! exports provided: ThemeLayout5hComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout5hComponent", function() { return ThemeLayout5hComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeLayout5hComponent = /** @class */ (function () {
    function ThemeLayout5hComponent() {
    }
    ThemeLayout5hComponent.prototype.ngOnInit = function () {
    };
    ThemeLayout5hComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-layout5h',
            template: __webpack_require__(/*! ./theme-layout5h.component.html */ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.html"),
            styles: [__webpack_require__(/*! ./theme-layout5h.component.scss */ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeLayout5hComponent);
    return ThemeLayout5hComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-layout5h/theme-layout5h.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/layout/theme-layout5h/theme-layout5h.module.ts ***!
  \*********************************************************************/
/*! exports provided: ThemeLayout5hModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLayout5hModule", function() { return ThemeLayout5hModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_layout5h_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-layout5h-routing.module */ "./src/app/demo/layout/theme-layout5h/theme-layout5h-routing.module.ts");
/* harmony import */ var _theme_layout5h_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-layout5h.component */ "./src/app/demo/layout/theme-layout5h/theme-layout5h.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeLayout5hModule = /** @class */ (function () {
    function ThemeLayout5hModule() {
    }
    ThemeLayout5hModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_layout5h_component__WEBPACK_IMPORTED_MODULE_4__["ThemeLayout5hComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_layout5h_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeLayout5hRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeLayout5hModule);
    return ThemeLayout5hModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-layout5h-theme-layout5h-module.js.map