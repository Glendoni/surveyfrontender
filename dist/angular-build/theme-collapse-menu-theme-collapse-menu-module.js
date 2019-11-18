(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-collapse-menu-theme-collapse-menu-module"],{

/***/ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ThemeCollapseMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeCollapseMenuRoutingModule", function() { return ThemeCollapseMenuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_collapse_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-collapse-menu.component */ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.ts");




var routes = [
    {
        path: '',
        component: _theme_collapse_menu_component__WEBPACK_IMPORTED_MODULE_3__["ThemeCollapseMenuComponent"]
    }
];
var ThemeCollapseMenuRoutingModule = /** @class */ (function () {
    function ThemeCollapseMenuRoutingModule() {
    }
    ThemeCollapseMenuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeCollapseMenuRoutingModule);
    return ThemeCollapseMenuRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Collapse Menu Layout\">\n      <h5 class=\"m-15\">You can edit this file at [ ../src/app/app-config.ts ] </h5>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead class=\"header-table\">\n          <tr>\n            <th>Configuration</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <ul>\n                <li><mark>layout: <code>vertical</code></mark></li>\n                <li>pre-layout: <code>null</code></li>\n                <li><mark>collapse-menu: <code>true</code></mark></li>\n                <li>layout-type: <code>menu-dark</code></li>\n                <li>nav-icon-color: <code>false</code></li>\n                <li>header-back-color: <code>header-default</code></li>\n                <li>nav-back-color: <code>navbar-default</code></li>\n                <li>nav-brand-color: <code>brand-default</code></li>\n                <li>nav-back-image: <code>false</code></li>\n                <li>rtl-layout: <code>false</code></li>\n                <li>nav-fixed-layout: <code>true</code></li>\n                <li>header-fixed-layout: <code>false</code></li>\n                <li>box-layout: <code>false</code></li>\n                <li>nav-dropdown-icon: <code>string1</code></li>\n                <li>nav-list-icon: <code>string1</code></li>\n                <li>nav-active-list-color: <code>active-default</code></li>\n                <li>nav-list-title-color: <code>title-default</code></li>\n                <li>nav-list-title-hide: <code>false</code></li>\n              </ul>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vbGF5b3V0L3RoZW1lLWNvbGxhcHNlLW1lbnUvdGhlbWUtY29sbGFwc2UtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ThemeCollapseMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeCollapseMenuComponent", function() { return ThemeCollapseMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeCollapseMenuComponent = /** @class */ (function () {
    function ThemeCollapseMenuComponent() {
    }
    ThemeCollapseMenuComponent.prototype.ngOnInit = function () {
    };
    ThemeCollapseMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-collapse-menu',
            template: __webpack_require__(/*! ./theme-collapse-menu.component.html */ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.html"),
            styles: [__webpack_require__(/*! ./theme-collapse-menu.component.scss */ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeCollapseMenuComponent);
    return ThemeCollapseMenuComponent;
}());



/***/ }),

/***/ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ThemeCollapseMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeCollapseMenuModule", function() { return ThemeCollapseMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_collapse_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-collapse-menu-routing.module */ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu-routing.module.ts");
/* harmony import */ var _theme_collapse_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-collapse-menu.component */ "./src/app/demo/layout/theme-collapse-menu/theme-collapse-menu.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var ThemeCollapseMenuModule = /** @class */ (function () {
    function ThemeCollapseMenuModule() {
    }
    ThemeCollapseMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_theme_collapse_menu_component__WEBPACK_IMPORTED_MODULE_4__["ThemeCollapseMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_collapse_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeCollapseMenuRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ThemeCollapseMenuModule);
    return ThemeCollapseMenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-collapse-menu-theme-collapse-menu-module.js.map