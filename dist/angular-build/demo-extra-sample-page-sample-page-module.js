(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-extra-sample-page-sample-page-module"],{

/***/ "./src/app/demo/extra/sample-page/sample-page-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/extra/sample-page/sample-page-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SamplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function() { return SamplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/extra/sample-page/sample-page.component.ts");




var routes = [
    {
        path: '',
        component: _sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]
    }
];
var SamplePageRoutingModule = /** @class */ (function () {
    function SamplePageRoutingModule() {
    }
    SamplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SamplePageRoutingModule);
    return SamplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extra/sample-page/sample-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/demo/extra/sample-page/sample-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Hello Card\">\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extra/sample-page/sample-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/extra/sample-page/sample-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2Uvc2FtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/extra/sample-page/sample-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/extra/sample-page/sample-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function() { return SamplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SamplePageComponent = /** @class */ (function () {
    function SamplePageComponent() {
    }
    SamplePageComponent.prototype.ngOnInit = function () {
    };
    SamplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample-page',
            template: __webpack_require__(/*! ./sample-page.component.html */ "./src/app/demo/extra/sample-page/sample-page.component.html"),
            styles: [__webpack_require__(/*! ./sample-page.component.scss */ "./src/app/demo/extra/sample-page/sample-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SamplePageComponent);
    return SamplePageComponent;
}());



/***/ }),

/***/ "./src/app/demo/extra/sample-page/sample-page.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/extra/sample-page/sample-page.module.ts ***!
  \**************************************************************/
/*! exports provided: SamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageModule", function() { return SamplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-page-routing.module */ "./src/app/demo/extra/sample-page/sample-page-routing.module.ts");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/extra/sample-page/sample-page.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var SamplePageModule = /** @class */ (function () {
    function SamplePageModule() {
    }
    SamplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SamplePageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_4__["SamplePageComponent"]]
        })
    ], SamplePageModule);
    return SamplePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-extra-sample-page-sample-page-module.js.map