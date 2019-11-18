(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-authentication-authentication-module"],{

/***/ "./src/app/demo/pages/authentication/authentication-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'signup',
                loadChildren: './auth-signup/auth-signup.module#AuthSignupModule'
            },
            {
                path: 'signin',
                loadChildren: './auth-signin/auth-signin.module#AuthSigninModule'
            },
            {
                path: 'reset-password',
                loadChildren: './auth-reset-password/auth-reset-password.module#AuthResetPasswordModule'
            },
            {
                path: 'change-password',
                loadChildren: './auth-change-password/auth-change-password.module#AuthChangePasswordModule'
            },
            {
                path: 'personal-information',
                loadChildren: './auth-personal-info/auth-personal-info.module#AuthPersonalInfoModule'
            },
            {
                path: 'profile-settings',
                loadChildren: './auth-profile-settings/auth-profile-settings.module#AuthProfileSettingsModule'
            },
            {
                path: 'map-form',
                loadChildren: './auth-map-form/auth-map-form.module#AuthMapFormModule'
            },
            {
                path: 'subscribe',
                loadChildren: './subscribe/subscribe.module#SubscribeModule'
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/authentication.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/demo/pages/authentication/authentication-routing.module.ts");




var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]
            ],
            declarations: []
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-authentication-authentication-module.js.map