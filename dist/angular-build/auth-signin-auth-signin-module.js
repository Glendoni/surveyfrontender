(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"],{

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function() { return AuthSigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");




var routes = [
    {
        path: '',
        component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
    }
];
var AuthSigninRoutingModule = /** @class */ (function () {
    function AuthSigninRoutingModule() {
    }
    AuthSigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthSigninRoutingModule);
    return AuthSigninRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <div class=\"mb-4\">\n          <i class=\"feather icon-unlock auth-icon\"></i>\n        </div>\n        <h3 class=\"mb-4\">Login</h3>\n        <div class=\"input-group mb-3\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <div class=\"input-group mb-4\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group text-left\">\n          <div class=\"checkbox checkbox-fill d-inline\">\n            <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\n            <label for=\"checkbox-fill-a1\" class=\"cr\"> Save Details</label>\n          </div>\n        </div>\n        <button class=\"btn btn-primary mb-4\">Login</button>\n        <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\">Reset</a></p>\n        <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\">Sign up</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWduaW4vYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthSigninComponent = /** @class */ (function () {
    function AuthSigninComponent() {
    }
    AuthSigninComponent.prototype.ngOnInit = function () {
    };
    AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signin',
            template: __webpack_require__(/*! ./auth-signin.component.html */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html"),
            styles: [__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthSigninComponent);
    return AuthSigninComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function() { return AuthSigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin-routing.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");





var AuthSigninModule = /** @class */ (function () {
    function AuthSigninModule() {
    }
    AuthSigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"]
            ],
            declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]]
        })
    ], AuthSigninModule);
    return AuthSigninModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signin-auth-signin-module.js.map