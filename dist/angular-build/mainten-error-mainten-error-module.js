(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mainten-error-mainten-error-module"],{

/***/ "./src/app/demo/pages/maintenance/mainten-error/mainten-error-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/mainten-error/mainten-error-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: MaintenErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenErrorRoutingModule", function() { return MaintenErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainten_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainten-error.component */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.ts");




var routes = [
    {
        path: '',
        component: _mainten_error_component__WEBPACK_IMPORTED_MODULE_3__["MaintenErrorComponent"]
    }
];
var MaintenErrorRoutingModule = /** @class */ (function () {
    function MaintenErrorRoutingModule() {
    }
    MaintenErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MaintenErrorRoutingModule);
    return MaintenErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper offline\">\n  <div class=\"text-center\">\n    <h1 class=\"mb-4\">404 ERROR</h1>\n    <h5 class=\"text-muted mb-4\">Bad Client Request, Please Try After Some Time</h5>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbWFpbnRlbmFuY2UvbWFpbnRlbi1lcnJvci9tYWludGVuLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MaintenErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenErrorComponent", function() { return MaintenErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenErrorComponent = /** @class */ (function () {
    function MaintenErrorComponent() {
    }
    MaintenErrorComponent.prototype.ngOnInit = function () {
    };
    MaintenErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainten-error',
            template: __webpack_require__(/*! ./mainten-error.component.html */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.html"),
            styles: [__webpack_require__(/*! ./mainten-error.component.scss */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaintenErrorComponent);
    return MaintenErrorComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/mainten-error/mainten-error.module.ts ***!
  \******************************************************************************/
/*! exports provided: MaintenErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenErrorModule", function() { return MaintenErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mainten_error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainten-error-routing.module */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error-routing.module.ts");
/* harmony import */ var _mainten_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainten-error.component */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.component.ts");





var MaintenErrorModule = /** @class */ (function () {
    function MaintenErrorModule() {
    }
    MaintenErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mainten_error_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenErrorRoutingModule"]
            ],
            declarations: [_mainten_error_component__WEBPACK_IMPORTED_MODULE_4__["MaintenErrorComponent"]]
        })
    ], MaintenErrorModule);
    return MaintenErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=mainten-error-mainten-error-module.js.map