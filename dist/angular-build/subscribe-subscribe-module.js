(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-subscribe-module"],{

/***/ "./src/app/demo/pages/authentication/subscribe/subscribe-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/subscribe/subscribe-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SubscribeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeRoutingModule", function() { return SubscribeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subscribe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe.component */ "./src/app/demo/pages/authentication/subscribe/subscribe.component.ts");




var routes = [
    {
        path: '',
        component: _subscribe_component__WEBPACK_IMPORTED_MODULE_3__["SubscribeComponent"]
    }
];
var SubscribeRoutingModule = /** @class */ (function () {
    function SubscribeRoutingModule() {
    }
    SubscribeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SubscribeRoutingModule);
    return SubscribeRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/subscribe/subscribe.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/subscribe/subscribe.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"auth-content subscribe\">\n    <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body text-left\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-10\">\n            <div class=\"mb-4 mt-3\">\n              <i class=\"feather icon-mail auth-icon\"></i>\n            </div>\n            <h3 class=\"mb-4\">Subscribe</h3>\n            <p class=\"text-muted\">Awesomeness delivered to your inbox.</p>\n            <div class=\"input-group mb-4\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\">Subscribe</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/subscribe/subscribe.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/subscribe/subscribe.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/subscribe/subscribe.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/subscribe/subscribe.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/demo/pages/authentication/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.scss */ "./src/app/demo/pages/authentication/subscribe/subscribe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/subscribe/subscribe.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/subscribe/subscribe.module.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeModule", function() { return SubscribeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subscribe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe-routing.module */ "./src/app/demo/pages/authentication/subscribe/subscribe-routing.module.ts");
/* harmony import */ var _subscribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribe.component */ "./src/app/demo/pages/authentication/subscribe/subscribe.component.ts");





var SubscribeModule = /** @class */ (function () {
    function SubscribeModule() {
    }
    SubscribeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _subscribe_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubscribeRoutingModule"]
            ],
            declarations: [_subscribe_component__WEBPACK_IMPORTED_MODULE_4__["SubscribeComponent"]]
        })
    ], SubscribeModule);
    return SubscribeModule;
}());



/***/ })

}]);
//# sourceMappingURL=subscribe-subscribe-module.js.map