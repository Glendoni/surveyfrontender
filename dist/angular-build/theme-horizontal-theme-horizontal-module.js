(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-horizontal-theme-horizontal-module"],{

/***/ "./src/app/demo/layout/theme-horizontal/theme-horizontal-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/layout/theme-horizontal/theme-horizontal-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ThemeHorizontalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeHorizontalRoutingModule", function() { return ThemeHorizontalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-horizontal.component */ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.ts");




var routes = [
    {
        path: '',
        component: _theme_horizontal_component__WEBPACK_IMPORTED_MODULE_3__["ThemeHorizontalComponent"]
    }
];
var ThemeHorizontalRoutingModule = /** @class */ (function () {
    function ThemeHorizontalRoutingModule() {
    }
    ThemeHorizontalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeHorizontalRoutingModule);
    return ThemeHorizontalRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo/layout/theme-horizontal/theme-horizontal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Horizontal Layout\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>horizontal</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li>layout-type: <code>menu-dark</code></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/layout/theme-horizontal/theme-horizontal.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLWhvcml6b250YWwvdGhlbWUtaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/layout/theme-horizontal/theme-horizontal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThemeHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeHorizontalComponent", function() { return ThemeHorizontalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeHorizontalComponent = /** @class */ (function () {
    function ThemeHorizontalComponent() {
    }
    ThemeHorizontalComponent.prototype.ngOnInit = function () {
    };
    ThemeHorizontalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-horizontal',
            template: __webpack_require__(/*! ./theme-horizontal.component.html */ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.html"),
            styles: [__webpack_require__(/*! ./theme-horizontal.component.scss */ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeHorizontalComponent);
    return ThemeHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-horizontal/theme-horizontal.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/layout/theme-horizontal/theme-horizontal.module.ts ***!
  \*************************************************************************/
/*! exports provided: ThemeHorizontalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeHorizontalModule", function() { return ThemeHorizontalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_horizontal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-horizontal-routing.module */ "./src/app/demo/layout/theme-horizontal/theme-horizontal-routing.module.ts");
/* harmony import */ var _theme_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-horizontal.component */ "./src/app/demo/layout/theme-horizontal/theme-horizontal.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeHorizontalModule = /** @class */ (function () {
    function ThemeHorizontalModule() {
    }
    ThemeHorizontalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["ThemeHorizontalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_horizontal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeHorizontalRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeHorizontalModule);
    return ThemeHorizontalModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-horizontal-theme-horizontal-module.js.map