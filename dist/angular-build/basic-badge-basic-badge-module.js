(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-badge-basic-badge-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicBadgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeRoutingModule", function() { return BasicBadgeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-badge.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");




var routes = [
    {
        path: '',
        component: _basic_badge_component__WEBPACK_IMPORTED_MODULE_3__["BasicBadgeComponent"]
    }
];
var BasicBadgeRoutingModule = /** @class */ (function () {
    function BasicBadgeRoutingModule() {
    }
    BasicBadgeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicBadgeRoutingModule);
    return BasicBadgeRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Basic Badges\" [options]=\"false\">\n      <h1>Example heading <span class=\"badge badge-secondary\">New</span></h1>\n      <h2>Example heading <span class=\"badge badge-secondary\">New</span></h2>\n      <h3>Example heading <span class=\"badge badge-secondary\">New</span></h3>\n      <h4>Example heading <span class=\"badge badge-secondary\">New</span></h4>\n      <h5>Example heading <span class=\"badge badge-secondary\">New</span></h5>\n      <h6>Example heading <span class=\"badge badge-secondary\">New</span></h6>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Button Badges\" [options]=\"false\">\n      <button type=\"button\" class=\"btn btn-primary\">primary <span class=\"badge badge-light\">4</span></button>\n      <button type=\"button\" class=\"btn btn-secondary\">secondary <span class=\"badge badge-light\">4</span></button>\n      <button type=\"button\" class=\"btn btn-success\">success <span class=\"badge badge-light\">4</span></button>\n      <button type=\"button\" class=\"btn btn-danger\">danger <span class=\"badge badge-light\">4</span></button>\n      <button type=\"button\" class=\"btn btn-warning\">warning <span class=\"badge badge-light\">4</span></button>\n      <button type=\"button\" class=\"btn btn-info\">info <span class=\"badge badge-light\">4</span></button>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Contextual Variations\" [options]=\"false\">\n      <span class=\"badge m-r-5 badge-primary\">Primary</span>\n      <span class=\"badge m-r-5 badge-secondary\">Secondary</span>\n      <span class=\"badge m-r-5 badge-success\">Success</span>\n      <span class=\"badge m-r-5 badge-danger\">Danger</span>\n      <span class=\"badge m-r-5 badge-warning\">Warning</span>\n      <span class=\"badge m-r-5 badge-info\">Info</span>\n      <span class=\"badge m-r-5 badge-light\">Light</span>\n      <span class=\"badge m-r-5 badge-dark\">Dark</span>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Pill Badges\" [options]=\"false\">\n      <span class=\"badge m-r-5 badge-pill badge-primary\">Primary</span>\n      <span class=\"badge m-r-5 badge-pill badge-secondary\">Secondary</span>\n      <span class=\"badge m-r-5 badge-pill badge-success\">Success</span>\n      <span class=\"badge m-r-5 badge-pill badge-danger\">Danger</span>\n      <span class=\"badge m-r-5 badge-pill badge-warning\">Warning</span>\n      <span class=\"badge m-r-5 badge-pill badge-info\">Info</span>\n      <span class=\"badge m-r-5 badge-pill badge-light\">Light</span>\n      <span class=\"badge m-r-5 badge-pill badge-d1ark\">Dark</span>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Links\" [options]=\"false\">\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-primary\">Primary</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-secondary\">Secondary</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-success\">Success</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-danger\">Danger</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-warning\">Warning</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-info\">Info</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-light\">Light</a>\n      <a href=\"javascript:\" class=\"badge m-r-5 badge-dark\">Dark</a>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYmFkZ2UvYmFzaWMtYmFkZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeComponent", function() { return BasicBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicBadgeComponent = /** @class */ (function () {
    function BasicBadgeComponent() {
    }
    BasicBadgeComponent.prototype.ngOnInit = function () {
    };
    BasicBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-badge',
            template: __webpack_require__(/*! ./basic-badge.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html"),
            styles: [__webpack_require__(/*! ./basic-badge.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicBadgeComponent);
    return BasicBadgeComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeModule", function() { return BasicBadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-badge-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts");
/* harmony import */ var _basic_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-badge.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var BasicBadgeModule = /** @class */ (function () {
    function BasicBadgeModule() {
    }
    BasicBadgeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicBadgeRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_badge_component__WEBPACK_IMPORTED_MODULE_4__["BasicBadgeComponent"]]
        })
    ], BasicBadgeModule);
    return BasicBadgeModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-badge-basic-badge-module.js.map