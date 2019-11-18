(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-profile-settings-auth-profile-settings-module"],{

/***/ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AuthProfileSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProfileSettingsRoutingModule", function() { return AuthProfileSettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-profile-settings.component */ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.ts");




var routes = [
    {
        path: '',
        component: _auth_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__["AuthProfileSettingsComponent"]
    }
];
var AuthProfileSettingsRoutingModule = /** @class */ (function () {
    function AuthProfileSettingsRoutingModule() {
    }
    AuthProfileSettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthProfileSettingsRoutingModule);
    return AuthProfileSettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <h5 class=\"mb-4\">Profile Settings</h5>\n        <img src=\"assets/images/user/avatar-3.jpg\" class=\"img-radius mb-4\" alt=\"User-Profile-Image\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n        </div>\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\">\n        </div>\n        <div class=\"mb-4 text-left\">\n          <div class=\"form-group d-inline\">\n            <div class=\"radio d-inline\">\n              <input type=\"radio\" name=\"radio-in-1\" id=\"radio-in-1\" checked>\n              <label for=\"radio-in-1\" class=\"cr\">Private Profile</label>\n            </div>\n          </div>\n          <div class=\"form-group d-inline\">\n            <div class=\"radio d-inline\">\n              <input type=\"radio\" name=\"radio-in-1\" id=\"radio-in-2\">\n              <label for=\"radio-in-2\" class=\"cr\">Public Profile</label>\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary mb-4\">Register</button>\n        <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\">Sign up</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1wcm9maWxlLXNldHRpbmdzL2F1dGgtcHJvZmlsZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AuthProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProfileSettingsComponent", function() { return AuthProfileSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthProfileSettingsComponent = /** @class */ (function () {
    function AuthProfileSettingsComponent() {
    }
    AuthProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    AuthProfileSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-profile-settings',
            template: __webpack_require__(/*! ./auth-profile-settings.component.html */ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.html"),
            styles: [__webpack_require__(/*! ./auth-profile-settings.component.scss */ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthProfileSettingsComponent);
    return AuthProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AuthProfileSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProfileSettingsModule", function() { return AuthProfileSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_profile_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-profile-settings-routing.module */ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings-routing.module.ts");
/* harmony import */ var _auth_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-profile-settings.component */ "./src/app/demo/pages/authentication/auth-profile-settings/auth-profile-settings.component.ts");





var AuthProfileSettingsModule = /** @class */ (function () {
    function AuthProfileSettingsModule() {
    }
    AuthProfileSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_profile_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthProfileSettingsRoutingModule"]
            ],
            declarations: [_auth_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__["AuthProfileSettingsComponent"]]
        })
    ], AuthProfileSettingsModule);
    return AuthProfileSettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-profile-settings-auth-profile-settings-module.js.map