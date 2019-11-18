(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-amchart-crt-amchart-module"],{

/***/ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-amchart/crt-amchart-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CrtAmchartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtAmchartRoutingModule", function() { return CrtAmchartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crt_amchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-amchart.component */ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.ts");




var routes = [
    {
        path: '',
        component: _crt_amchart_component__WEBPACK_IMPORTED_MODULE_3__["CrtAmchartComponent"]
    }
];
var CrtAmchartRoutingModule = /** @class */ (function () {
    function CrtAmchartRoutingModule() {
    }
    CrtAmchartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CrtAmchartRoutingModule);
    return CrtAmchartRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  crt-amchart works!\n</p>\n"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtYW1jaGFydC9jcnQtYW1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.ts ***!
  \****************************************************************************/
/*! exports provided: CrtAmchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtAmchartComponent", function() { return CrtAmchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrtAmchartComponent = /** @class */ (function () {
    function CrtAmchartComponent() {
    }
    CrtAmchartComponent.prototype.ngOnInit = function () {
    };
    CrtAmchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crt-amchart',
            template: __webpack_require__(/*! ./crt-amchart.component.html */ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.html"),
            styles: [__webpack_require__(/*! ./crt-amchart.component.scss */ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrtAmchartComponent);
    return CrtAmchartComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.module.ts ***!
  \*************************************************************************/
/*! exports provided: CrtAmchartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtAmchartModule", function() { return CrtAmchartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crt_amchart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-amchart-routing.module */ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart-routing.module.ts");
/* harmony import */ var _crt_amchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crt-amchart.component */ "./src/app/demo/pages/core-chart/crt-amchart/crt-amchart.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var CrtAmchartModule = /** @class */ (function () {
    function CrtAmchartModule() {
    }
    CrtAmchartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _crt_amchart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrtAmchartRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_crt_amchart_component__WEBPACK_IMPORTED_MODULE_4__["CrtAmchartComponent"]]
        })
    ], CrtAmchartModule);
    return CrtAmchartModule;
}());



/***/ })

}]);
//# sourceMappingURL=crt-amchart-crt-amchart-module.js.map