(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-morris-crt-morris-module"],{

/***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CrtMorrisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisRoutingModule", function() { return CrtMorrisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crt_morris_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-morris.component */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts");




var routes = [
    {
        path: '',
        component: _crt_morris_component__WEBPACK_IMPORTED_MODULE_3__["CrtMorrisComponent"]
    }
];
var CrtMorrisRoutingModule = /** @class */ (function () {
    function CrtMorrisRoutingModule() {
    }
    CrtMorrisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CrtMorrisRoutingModule);
    return CrtMorrisRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Bar [ Simple ] Chart\" [options]=\"false\">\n      <div id=\"morris-bar-basic-chart\" mk-morris-js [options]=\"barBasicMorrisOption\" [data]=\"barBasicMorrisData\" type=\"Bar\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Bar [ Stacked ] Chart\" [options]=\"false\">\n      <div id=\"morris-bar-stacked-chart\" mk-morris-js [options]=\"barStackedOption\" [data]=\"barBasicMorrisData\" type=\"Bar\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Area [ Angle ] Chart\" [options]=\"false\">\n      <div id=\"morris-area-angle-chart\" mk-morris-js [options]=\"areaAngleMorrisOption\" [data]=\"areaAngleMorrisData\" type=\"Area\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Area [ Smooth ] Chart\" [options]=\"false\">\n      <div id=\"morris-area-smooth-chart\" mk-morris-js [options]=\"areaSmoothMorrisOption\" [data]=\"areaSmoothMorrisData\" type=\"Area\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Line [ Angle ] Chart\" [options]=\"false\">\n      <div id=\"morris-line-angle-chart\" mk-morris-js [options]=\"lineAngleMorrisOption\" [data]=\"lineAngleMorrisData\" type=\"Line\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Line [ Smooth ] Chart\" [options]=\"false\">\n      <div id=\"morris-line-smooth-chart\" mk-morris-js [options]=\"lineSmoothMorrisOption\" [data]=\"lineSmoothMorrisData\" type=\"Line\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Donut Chart\" [options]=\"false\">\n      <div id=\"morris-donut-chart\" mk-morris-js [options]=\"donutMorrisOption\" [data]=\"donutMorrisData\" type=\"Donut\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtbW9ycmlzL2NydC1tb3JyaXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts ***!
  \**************************************************************************/
/*! exports provided: CrtMorrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisComponent", function() { return CrtMorrisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/morris.js/morris.js */ "./node_modules/morris.js/morris.js");
/* harmony import */ var _node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2__);



var CrtMorrisComponent = /** @class */ (function () {
    function CrtMorrisComponent() {
    }
    CrtMorrisComponent.prototype.ngOnInit = function () {
        this.barBasicMorrisData = [
            { y: '2008', a: 50, b: 40, c: 35 },
            { y: '2009', a: 75, b: 65, c: 60 },
            { y: '2010', a: 50, b: 40, c: 55 },
            { y: '2011', a: 75, b: 65, c: 85 },
            { y: '2012', a: 100, b: 90, c: 40 }
        ];
        this.barBasicMorrisOption = {
            xkey: 'y',
            barSizeRatio: 0.70,
            barGap: 3,
            resize: true,
            responsive: true,
            ykeys: ['a', 'b', 'c'],
            labels: ['Bar 1', 'Bar 2', 'Bar 3'],
            barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4', '#04a9f5']
        };
        this.barStackedOption = {
            xkey: 'y',
            stacked: true,
            barSizeRatio: 0.50,
            barGap: 3,
            resize: true,
            responsive: true,
            ykeys: ['a', 'b', 'c'],
            labels: ['Bar 1', 'Bar 2', 'Bar 3'],
            barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4', '#04a9f5']
        };
        this.areaAngleMorrisData = [
            { y: '2006', a: 0, b: 0 },
            { y: '2007', a: 130, b: 100 },
            { y: '2008', a: 80, b: 60 },
            { y: '2009', a: 70, b: 200 },
            { y: '2010', a: 220, b: 150 },
            { y: '2011', a: 105, b: 90 },
            { y: '2012', a: 250, b: 150 }
        ];
        this.areaAngleMorrisOption = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            pointSize: 0,
            fillOpacity: 0.8,
            pointStrokeColors: ['#b4becb', '#A389D4'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            responsive: true,
            lineColors: ['#b4becb', '#A389D4'],
            resize: true
        };
        this.areaSmoothMorrisData = [
            { period: '2010', iphone: 0, ipad: 0, itouch: 0 },
            { period: '2011', iphone: 50, ipad: 15, itouch: 5 },
            { period: '2012', iphone: 20, ipad: 50, itouch: 65 },
            { period: '2013', iphone: 60, ipad: 12, itouch: 7 },
            { period: '2014', iphone: 30, ipad: 20, itouch: 120 },
            { period: '2015', iphone: 25, ipad: 80, itouch: 40 },
            { period: '2016', iphone: 10, ipad: 10, itouch: 10 }
        ];
        this.areaSmoothMorrisOption = {
            lineColors: ['#A389D4', '#1de9b6', '#04a9f5'],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['Site A', 'Site B', 'Site C'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            fillOpacity: 0.9,
            responsive: true,
            behaveLikeLine: true,
            gridLineColor: '#d2d2d2',
            hideHover: 'auto'
        };
        this.lineAngleMorrisData = [
            { y: '2006', a: 20, b: 10 },
            { y: '2007', a: 55, b: 45 },
            { y: '2008', a: 45, b: 35 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ];
        this.lineAngleMorrisOption = {
            xkey: 'y',
            redraw: true,
            resize: true,
            smooth: false,
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            responsive: true,
            labels: ['Series A', 'Series B'],
            lineColors: ['#1de9b6', '#04a9f5']
        };
        this.lineSmoothMorrisData = [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ];
        this.lineSmoothMorrisOption = {
            xkey: 'y',
            redraw: true,
            resize: true,
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            responsive: true,
            labels: ['Series A', 'Series B'],
            lineColors: ['#1de9b6', '#A389D4']
        };
        this.donutMorrisData = [
            { value: 60, label: 'Data 1' },
            { value: 20, label: 'Data 1' },
            { value: 10, label: 'Data 1' },
            { value: 5, label: 'Data 1' }
        ];
        this.donutMorrisOption = {
            colors: [
                '#1de9b6',
                '#A389D4',
                '#04a9f5',
                '#1dc4e9',
            ],
            resize: true,
            formatter: function (x) {
                return 'val : ' + x;
            }
        };
    };
    CrtMorrisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crt-morris',
            template: __webpack_require__(/*! ./crt-morris.component.html */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html"),
            styles: [__webpack_require__(/*! ./crt-morris.component.scss */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrtMorrisComponent);
    return CrtMorrisComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.module.ts ***!
  \***********************************************************************/
/*! exports provided: CrtMorrisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisModule", function() { return CrtMorrisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crt_morris_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-morris-routing.module */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts");
/* harmony import */ var _crt_morris_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crt-morris.component */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-morris-js */ "./node_modules/angular-morris-js/esm5/angular-morris-js.js");







var CrtMorrisModule = /** @class */ (function () {
    function CrtMorrisModule() {
    }
    CrtMorrisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _crt_morris_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrtMorrisRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular_morris_js__WEBPACK_IMPORTED_MODULE_6__["MorrisJsModule"]
            ],
            declarations: [_crt_morris_component__WEBPACK_IMPORTED_MODULE_4__["CrtMorrisComponent"]]
        })
    ], CrtMorrisModule);
    return CrtMorrisModule;
}());



/***/ })

}]);
//# sourceMappingURL=crt-morris-crt-morris-module.js.map