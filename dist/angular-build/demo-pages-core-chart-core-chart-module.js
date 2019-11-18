(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-core-chart-core-chart-module"],{

/***/ "./src/app/demo/pages/core-chart/core-chart-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CoreChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreChartRoutingModule", function() { return CoreChartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'amchart',
                loadChildren: './crt-amchart/crt-amchart.module#CrtAmchartModule'
            },
            {
                path: 'chart-js',
                loadChildren: './crt-chart-js/crt-chart-js.module#CrtChartJsModule'
            },
            {
                path: 'e-chart',
                loadChildren: './crt-echart/crt-echart.module#CrtEchartModule'
            },
            {
                path: 'google',
                loadChildren: './crt-google-chart/crt-google-chart.module#CrtGoogleChartModule'
            },
            {
                path: 'high-chart',
                loadChildren: './crt-high-chart/crt-high-chart.module#CrtHighChartModule'
            },
            {
                path: 'morris',
                loadChildren: './crt-morris/crt-morris.module#CrtMorrisModule'
            },
            {
                path: 'nvd3',
                loadChildren: './crt-nvd3/crt-nvd3.module#CrtNvd3Module'
            },
            {
                path: 'peity',
                loadChildren: './crt-peity/crt-peity.module#CrtPeityModule'
            },
            {
                path: 'radial',
                loadChildren: './crt-radial/crt-radial.module#CrtRadialModule'
            }
        ]
    }
];
var CoreChartRoutingModule = /** @class */ (function () {
    function CoreChartRoutingModule() {
    }
    CoreChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreChartRoutingModule);
    return CoreChartRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/core-chart.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart.module.ts ***!
  \************************************************************/
/*! exports provided: CoreChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreChartModule", function() { return CoreChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-chart-routing.module */ "./src/app/demo/pages/core-chart/core-chart-routing.module.ts");




var CoreChartModule = /** @class */ (function () {
    function CoreChartModule() {
    }
    CoreChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreChartRoutingModule"]
            ],
            declarations: []
        })
    ], CoreChartModule);
    return CoreChartModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-core-chart-core-chart-module.js.map