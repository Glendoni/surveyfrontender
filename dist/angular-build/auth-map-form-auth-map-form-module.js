(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-map-form-auth-map-form-module"],{

/***/ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-map-form/auth-map-form-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AuthMapFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMapFormRoutingModule", function() { return AuthMapFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_map_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-map-form.component */ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.ts");




var routes = [
    {
        path: '',
        component: _auth_map_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthMapFormComponent"]
    }
];
var AuthMapFormRoutingModule = /** @class */ (function () {
    function AuthMapFormRoutingModule() {
    }
    AuthMapFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthMapFormRoutingModule);
    return AuthMapFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"container\">\n    <div class=\"card\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-md-4 col-lg-6 d-none d-md-block d-lg-block\">\n            <agm-map [latitude]=\"21.2334329\" [longitude]=\"72.866472\" [style.height]=\"'100%'\" [zoom]=\"15\" id=\"markers-map\" class=\"set-map\">\n              <agm-marker [latitude]=\"21.2334329\" [longitude]=\"72.866472\">\n                <agm-info-window>\n                  <h3>Codedthemes</h3> <br/> <p>Buy Now at <a href=\"https://themeforest.net/user/Codedthemes/portfolio\" target=\"_blank\">Themeforest</a></p>\n                </agm-info-window>\n              </agm-marker>\n            </agm-map>\n        </div>\n        <div class=\"col-md-8 col-lg-6\">\n          <div class=\"card-body text-center\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-sm-10\">\n                <div class=\"mb-4\">\n                  <i class=\"feather icon-user-plus auth-icon\"></i>\n                </div>\n                <h3 class=\"mb-4\">Sign up</h3>\n                <div class=\"input-group mb-3\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n                <div class=\"input-group mb-3\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n                <div class=\"input-group mb-4\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group text-left\">\n                  <div class=\"checkbox checkbox-fill d-inline\">\n                    <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-1\" checked=\"\">\n                    <label for=\"checkbox-fill-1\" class=\"cr\"> Save Details</label>\n                  </div>\n                </div>\n                <div class=\"form-group text-left\">\n                  <div class=\"checkbox checkbox-fill d-inline\">\n                    <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\n                    <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</label>\n                  </div>\n                </div>\n\n                <button class=\"btn btn-primary mb-4\">Register</button>\n                <p class=\"mb-0 text-muted\">Already have an account? <a [routerLink]=\"['/auth/signin']\">Log in</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1tYXAtZm9ybS9hdXRoLW1hcC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: AuthMapFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMapFormComponent", function() { return AuthMapFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthMapFormComponent = /** @class */ (function () {
    function AuthMapFormComponent() {
    }
    AuthMapFormComponent.prototype.ngOnInit = function () {
    };
    AuthMapFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-map-form',
            template: __webpack_require__(/*! ./auth-map-form.component.html */ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.html"),
            styles: [__webpack_require__(/*! ./auth-map-form.component.scss */ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthMapFormComponent);
    return AuthMapFormComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-map-form/auth-map-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthMapFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMapFormModule", function() { return AuthMapFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_map_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-map-form-routing.module */ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form-routing.module.ts");
/* harmony import */ var _auth_map_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-map-form.component */ "./src/app/demo/pages/authentication/auth-map-form/auth-map-form.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthMapFormModule = /** @class */ (function () {
    function AuthMapFormModule() {
    }
    AuthMapFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_map_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthMapFormRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [_auth_map_form_component__WEBPACK_IMPORTED_MODULE_4__["AuthMapFormComponent"]]
        })
    ], AuthMapFormModule);
    return AuthMapFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-map-form-auth-map-form-module.js.map