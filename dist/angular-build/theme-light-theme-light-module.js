(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-light-theme-light-module"],{

/***/ "./src/app/demo/layout/theme-light/theme-light-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/layout/theme-light/theme-light-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThemeLightRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLightRoutingModule", function() { return ThemeLightRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_light_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-light.component */ "./src/app/demo/layout/theme-light/theme-light.component.ts");




var routes = [
    {
        path: '',
        component: _theme_light_component__WEBPACK_IMPORTED_MODULE_3__["ThemeLightComponent"]
    }
];
var ThemeLightRoutingModule = /** @class */ (function () {
    function ThemeLightRoutingModule() {
    }
    ThemeLightRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeLightRoutingModule);
    return ThemeLightRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-light/theme-light.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo/layout/theme-light/theme-light.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Light Layout\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>vertical/horizontal</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li>collapse-menu: <code>false</code></li>\n                <li><mark>layout-type: <code>menu-light</code></mark></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-light/theme-light.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demo/layout/theme-light/theme-light.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLWxpZ2h0L3RoZW1lLWxpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/layout/theme-light/theme-light.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/layout/theme-light/theme-light.component.ts ***!
  \******************************************************************/
/*! exports provided: ThemeLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLightComponent", function() { return ThemeLightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeLightComponent = /** @class */ (function () {
    function ThemeLightComponent() {
    }
    ThemeLightComponent.prototype.ngOnInit = function () {
    };
    ThemeLightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-light',
            template: __webpack_require__(/*! ./theme-light.component.html */ "./src/app/demo/layout/theme-light/theme-light.component.html"),
            styles: [__webpack_require__(/*! ./theme-light.component.scss */ "./src/app/demo/layout/theme-light/theme-light.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeLightComponent);
    return ThemeLightComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-light/theme-light.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/layout/theme-light/theme-light.module.ts ***!
  \***************************************************************/
/*! exports provided: ThemeLightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLightModule", function() { return ThemeLightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_light_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-light-routing.module */ "./src/app/demo/layout/theme-light/theme-light-routing.module.ts");
/* harmony import */ var _theme_light_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-light.component */ "./src/app/demo/layout/theme-light/theme-light.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeLightModule = /** @class */ (function () {
    function ThemeLightModule() {
    }
    ThemeLightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_light_component__WEBPACK_IMPORTED_MODULE_4__["ThemeLightComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_light_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeLightRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeLightModule);
    return ThemeLightModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-light-theme-light-module.js.map