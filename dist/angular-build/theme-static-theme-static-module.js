(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-static-theme-static-module"],{

/***/ "./src/app/demo/layout/theme-static/theme-static-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/layout/theme-static/theme-static-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ThemeStaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticRoutingModule", function() { return ThemeStaticRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/layout/theme-static/theme-static.component.ts");




var routes = [
    {
        path: '',
        component: _theme_static_component__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticComponent"]
    }
];
var ThemeStaticRoutingModule = /** @class */ (function () {
    function ThemeStaticRoutingModule() {
    }
    ThemeStaticRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeStaticRoutingModule);
    return ThemeStaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-static/theme-static.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/layout/theme-static/theme-static.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Static Layout\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>vertical</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li>layout-type: <code>menu-dark</code></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li><mark>nav-fixed-layout: <code>false</code></mark></li>\n                <li><mark>header-fixed-layout: <code>false</code></mark></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-static/theme-static.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/layout/theme-static/theme-static.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLXN0YXRpYy90aGVtZS1zdGF0aWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/layout/theme-static/theme-static.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/layout/theme-static/theme-static.component.ts ***!
  \********************************************************************/
/*! exports provided: ThemeStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticComponent", function() { return ThemeStaticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeStaticComponent = /** @class */ (function () {
    function ThemeStaticComponent() {
    }
    ThemeStaticComponent.prototype.ngOnInit = function () {
    };
    ThemeStaticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-static',
            template: __webpack_require__(/*! ./theme-static.component.html */ "./src/app/demo/layout/theme-static/theme-static.component.html"),
            styles: [__webpack_require__(/*! ./theme-static.component.scss */ "./src/app/demo/layout/theme-static/theme-static.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeStaticComponent);
    return ThemeStaticComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-static/theme-static.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/layout/theme-static/theme-static.module.ts ***!
  \*****************************************************************/
/*! exports provided: ThemeStaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticModule", function() { return ThemeStaticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-static-routing.module */ "./src/app/demo/layout/theme-static/theme-static-routing.module.ts");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/layout/theme-static/theme-static.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeStaticModule = /** @class */ (function () {
    function ThemeStaticModule() {
    }
    ThemeStaticModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_static_component__WEBPACK_IMPORTED_MODULE_4__["ThemeStaticComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeStaticModule);
    return ThemeStaticModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-static-theme-static-module.js.map