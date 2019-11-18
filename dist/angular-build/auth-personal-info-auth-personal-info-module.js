(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-personal-info-auth-personal-info-module"],{

/***/ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AuthPersonalInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPersonalInfoRoutingModule", function() { return AuthPersonalInfoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_personal_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-personal-info.component */ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.ts");




var routes = [
    {
        path: '',
        component: _auth_personal_info_component__WEBPACK_IMPORTED_MODULE_3__["AuthPersonalInfoComponent"]
    }
];
var AuthPersonalInfoRoutingModule = /** @class */ (function () {
    function AuthPersonalInfoRoutingModule() {
    }
    AuthPersonalInfoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthPersonalInfoRoutingModule);
    return AuthPersonalInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <h5 class=\"mb-4\">Personal Information</h5>\n        <div class=\"btn-group btn-group-toggle btn-auth-gen mb-4\" ngbRadioGroup [(ngModel)]=\"radioButtons\">\n          <label class=\"btn btn-outline-theme2 btn-icon active\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton name=\"options\" id=\"option1\" value=\"f\" checked><span><i class=\"fas fa-mars\"></i><small class=\"d-block\">Female</small></span>\n          </label>\n          <label class=\"btn btn-outline-theme2 btn-icon\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton name=\"options\" id=\"option2\" value=\"m\"> <span><i class=\"fas fa-venus\"></i><small class=\"d-block\">Male</small></span>\n          </label>\n        </div>\n        <div class=\"input-group mb-3\">\n          <select class=\"form-control\">\n            <option>India</option>\n            <option>Peris</option>\n            <option>China</option>\n          </select>\n        </div>\n        <div class=\"input-group mb-4\">\n          <input type=\"date\" class=\"form-control\">\n        </div>\n        <button class=\"btn btn-primary mb-4\">Register</button>\n        <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\">Sign up</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1wZXJzb25hbC1pbmZvL2F1dGgtcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AuthPersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPersonalInfoComponent", function() { return AuthPersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthPersonalInfoComponent = /** @class */ (function () {
    function AuthPersonalInfoComponent() {
        this.radioButtons = 'f';
    }
    AuthPersonalInfoComponent.prototype.ngOnInit = function () {
    };
    AuthPersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-personal-info',
            template: __webpack_require__(/*! ./auth-personal-info.component.html */ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.html"),
            styles: [__webpack_require__(/*! ./auth-personal-info.component.scss */ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthPersonalInfoComponent);
    return AuthPersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthPersonalInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPersonalInfoModule", function() { return AuthPersonalInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_personal_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-personal-info-routing.module */ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info-routing.module.ts");
/* harmony import */ var _auth_personal_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-personal-info.component */ "./src/app/demo/pages/authentication/auth-personal-info/auth-personal-info.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthPersonalInfoModule = /** @class */ (function () {
    function AuthPersonalInfoModule() {
    }
    AuthPersonalInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_personal_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthPersonalInfoRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_auth_personal_info_component__WEBPACK_IMPORTED_MODULE_4__["AuthPersonalInfoComponent"]]
        })
    ], AuthPersonalInfoModule);
    return AuthPersonalInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-personal-info-auth-personal-info-module.js.map