(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-alert-basic-alert-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicAlertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertRoutingModule", function() { return BasicAlertRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-alert.component */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");




var routes = [
    {
        path: '',
        component: _basic_alert_component__WEBPACK_IMPORTED_MODULE_3__["BasicAlertComponent"]
    }
];
var BasicAlertRoutingModule = /** @class */ (function () {
    function BasicAlertRoutingModule() {
    }
    BasicAlertRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicAlertRoutingModule);
    return BasicAlertRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Basic Alert\" [options]=\"false\">\n      <app-alert type=\"primary\">A simple primary alert—check it out!</app-alert>\n      <app-alert type=\"secondary\">A simple secondary alert—check it out!</app-alert>\n      <app-alert type=\"success\">A simple success alert—check it out!</app-alert>\n      <app-alert type=\"danger\">A simple danger alert—check it out!</app-alert>\n      <app-alert type=\"warning\">A simple warning alert—check it out!</app-alert>\n      <app-alert type=\"info\">A simple info alert—check it out!</app-alert>\n      <app-alert type=\"light\">A simple light alert—check it out!</app-alert>\n      <app-alert type=\"dark\">A simple dark alert—check it out!</app-alert>\n    </app-card>\n    <app-card cardTitle=\"Link Alert\" [options]=\"false\">\n      <app-alert type=\"primary\">A simple primary with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"secondary\">A simple secondary with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"success\">A simple success with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"danger\">A simple danger with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"warning\">A simple warning with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"info\">A simple info with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"light\">A simple light with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n      <app-alert type=\"dark\">A simple dark with <a href=\"javascript:\" class=\"alert-link\">an example link</a>. Give it a click if you like.</app-alert>\n    </app-card>\n    <app-card cardTitle=\"Dismissing\" [options]=\"false\">\n      <app-alert type=\"primary\" dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"secondary\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"success\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"danger\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"warning\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"info\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"light\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n      <app-alert type=\"dark\"  dismiss=\"true\">Holy guacamole! You should check in on some of those fields below.</app-alert>\n    </app-card>\n    <app-card cardTitle=\"Additional Content\" [options]=\"false\">\n      <app-alert type=\"success\">\n        <h4 class=\"alert-heading\">Well done!</h4>\n        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n        <hr>\n        <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n      </app-alert>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYWxlcnQvYmFzaWMtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertComponent", function() { return BasicAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicAlertComponent = /** @class */ (function () {
    function BasicAlertComponent() {
    }
    BasicAlertComponent.prototype.ngOnInit = function () {
    };
    BasicAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-alert',
            template: __webpack_require__(/*! ./basic-alert.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.html"),
            styles: [__webpack_require__(/*! ./basic-alert.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicAlertComponent);
    return BasicAlertComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAlertModule", function() { return BasicAlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-alert-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts");
/* harmony import */ var _basic_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-alert.component */ "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var BasicAlertModule = /** @class */ (function () {
    function BasicAlertModule() {
    }
    BasicAlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicAlertRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_alert_component__WEBPACK_IMPORTED_MODULE_4__["BasicAlertComponent"]]
        })
    ], BasicAlertModule);
    return BasicAlertModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-alert-basic-alert-module.js.map