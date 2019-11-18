(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-analytics-dash-analytics-module"],{

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashAnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsRoutingModule", function() { return DashAnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");




var routes = [
    {
        path: '',
        component: _dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsComponent"]
    }
];
var DashAnalyticsRoutingModule = /** @class */ (function () {
    function DashAnalyticsRoutingModule() {
    }
    DashAnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashAnalyticsRoutingModule);
    return DashAnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\" cardClass=\"user-card\">\n        <h5 class=\"m-b-15\">Register User</h5>\n        <h4 class=\"f-w-300 mb-3\">1205</h4>\n        <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">20%</label>Monthly Increase</span>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\" cardClass=\"user-card\">\n      <h5 class=\"f-w-400 m-b-15\">Daily User</h5>\n      <h4 class=\"f-w-300 mb-3\">467</h4>\n      <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">10%</label>Weekly Increase</span>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\" cardClass=\"user-card\">\n      <h5 class=\"f-w-400 m-b-15\">Premium User</h5>\n      <h4 class=\"f-w-300 mb-3\">346</h4>\n      <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">50%</label>Yearly Increase</span>\n    </app-card>\n  </div>\n\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"Active-visitor\" blockClass=\"text-center\" [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"mb-4\">Active Visitor</h5>\n      <i class=\"fas fa-user-friends f-30 text-c-green\"></i>\n      <h2 class=\"f-w-300 mt-3\">1,285</h2>\n      <span class=\"text-muted\">Active Visit On Sites</span>\n      <div class=\"progress mt-4 m-b-40\">\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 75%; height:7px;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <div class=\"row card-active\">\n        <div class=\"col-md-4 col-6\">\n          <h4>52%</h4>\n          <span class=\"text-muted\">Desktop</span>\n        </div>\n        <div class=\"col-md-4 col-6\">\n          <h4>80%</h4>\n          <span class=\"text-muted\">Mobile</span>\n        </div>\n        <div class=\"col-md-4 col-12\">\n          <h4>68%</h4>\n          <span class=\"text-muted\">Tablet</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Age\">\n      <div id=\"Stack-age\" class=\"Stackchart\" style=\"height:230px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card cardClass=\"theme-bg visitor\" blockClass=\"text-center\" [hidHeader]=\"true\" [options]=\"false\">\n      <img class=\"img-female\" src=\"assets/images/user/user-1.png\" alt=\"visitor-user\">\n      <h5 class=\"text-white m-0\">TOTAL VISITORS</h5>\n      <h3 class=\"text-white m-t-10 f-w-300\">235</h3>\n      <span class=\"text-white\">20% More than last Month</span>\n      <img class=\"img-men\" src=\"assets/images/user/user-2.png\" alt=\"visitor-user\">\n    </app-card>\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <i class=\"feather icon-shopping-cart f-30 text-c-green\"></i>\n          <h6 class=\"m-t-50 m-b-0\">Last week’s orders</h6>\n        </div>\n        <div class=\"col text-right\">\n          <h3 class=\"text-c-green f-w-300\">589</h3>\n          <span class=\"text-muted d-block\">New Order</span>\n          <span class=\"badge theme-bg text-white m-t-20\">1434</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\" blockClass=\"pb-0\">\n      <div id=\"bar-chart2\" class=\"bar-chart2\" style=\"height:340px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card bg-c-blue\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Statistics</h5>\n      </div>\n      <div class=\"card-block\">\n        <div id=\"Statistics-sale\" class=\"last-week-sales\" style=\"height:300px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <h3 class=\"f-w-300 mb-0 float-left\">$ 59,48</h3>\n        </div>\n        <div class=\"col-6\">\n          <div id=\"transactions\" class=\"float-right\" style=\"height:80px;width:80px;margin:0 auto;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div id=\"transactions1\" style=\"height:50px;width:80px;margin:0 auto;\"></div>\n          <h3 class=\"f-w-300 pt-3 mb-0 text-center\">$ 80,48</h3>\n        </div>\n\n        <div class=\"col-6\">\n          <div id=\"transactions2\" style=\"height:50px;width:80px;margin:0 auto;\"></div>\n          <h3 class=\"f-w-300 pt-3 mb-0 text-center\">$ 40,27</h3>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <div id=\"transactions3\" class=\"float-left\" style=\"height:80px;width:80px;margin:0 auto;\"></div>\n        </div>\n        <div class=\"col-6\">\n          <h3 class=\"f-w-300 mb-0 float-right\">$ 59,48</h3>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtYW5hbHl0aWNzL2Rhc2gtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsComponent", function() { return DashAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_pie_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.min.js */ "./src/assets/charts/amchart/pie.min.js");
/* harmony import */ var _assets_charts_amchart_pie_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_ammap_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.min.js */ "./src/assets/charts/amchart/ammap.min.js");
/* harmony import */ var _assets_charts_amchart_ammap_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/usaLow.js */ "./src/assets/charts/amchart/usaLow.js");
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_charts_amchart_radar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/charts/amchart/radar.js */ "./src/assets/charts/amchart/radar.js");
/* harmony import */ var _assets_charts_amchart_radar_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_radar_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/charts/amchart/worldLow.js */ "./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.js */ "./src/assets/charts/flot/jquery.flot.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.categories.js */ "./src/assets/charts/flot/jquery.flot.categories.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../assets/charts/flot/curvedLines.js */ "./src/assets/charts/flot/curvedLines.js");
/* harmony import */ var _assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.tooltip.min.js */ "./src/assets/charts/flot/jquery.flot.tooltip.min.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_14__);















var DashAnalyticsComponent = /** @class */ (function () {
    function DashAnalyticsComponent() {
    }
    DashAnalyticsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            AmCharts.makeChart('Stack-age', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'age': '<20',
                        'visits': 30,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'age': '30',
                        'visits': 35,
                        'color': ['#899FD4', '#A389D4']
                    }, {
                        'age': '40',
                        'visits': 40,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'age': '50',
                        'visits': 30,
                        'color': ['#899FD4', '#A389D4']
                    }, {
                        'age': '60',
                        'visits': 32,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'age': '>70',
                        'visits': 38,
                        'color': ['#899FD4', '#A389D4']
                    }],
                'valueAxes': [{
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'fontSize': 0,
                    }],
                'startDuration': 1,
                'graphs': [{
                        'balloonText': '<b>[[category]]: [[value]]</b>',
                        'fillColorsField': 'color',
                        'fillAlphas': 0.9,
                        'lineAlpha': 0.2,
                        'columnWidth': 0.2,
                        'type': 'column',
                        'valueField': 'visits'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'age',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                }
            });
            AmCharts.makeChart('bar-chart2', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'valueAxes': [{
                        'id': 'v1',
                        'position': 'left',
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return +Math.round(value) + '00';
                        }
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v1',
                        'lineColor': ['#1de9b6', '#1dc4e9'],
                        'fillColors': ['#1de9b6', '#1dc4e9'],
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'SALES',
                        'valueField': 'sales',
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v1',
                        'lineColor': ['#a389d4', '#899ed4'],
                        'fillColors': ['#a389d4', '#899ed4'],
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'VISITS ',
                        'valueField': 'visits',
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g3',
                        'valueAxis': 'v1',
                        'lineColor': ['#04a9f5', '#049df5'],
                        'fillColors': ['#04a9f5', '#049df5'],
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'CLICKS',
                        'valueField': 'clicks',
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'Year',
                'categoryAxis': {
                    'dashLength': 1,
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'dataProvider': [{
                        'Year': '2014',
                        'sales': 2,
                        'visits': 4,
                        'clicks': 3
                    }, {
                        'Year': '2015',
                        'sales': 4,
                        'visits': 7,
                        'clicks': 5
                    }, {
                        'Year': '2016',
                        'sales': 2,
                        'visits': 3,
                        'clicks': 4
                    }, {
                        'Year': '2017',
                        'sales': 4.5,
                        'visits': 6,
                        'clicks': 4
                    }]
            });
            var chartData = [{
                    'year': '2001',
                    'bicycles': 55
                }, {
                    'year': '2002',
                    'bicycles': 40
                }, {
                    'year': '2003',
                    'bicycles': 50
                }];
            AmCharts.makeChart('Statistics-sale', {
                'type': 'serial',
                'theme': 'light',
                'autoMargins': false,
                'addClassNames': true,
                'zoomOutText': '',
                'defs': {
                    'filter': [{
                            'id': 'shadow',
                            'width': '150%',
                            'height': '150%',
                            'feOffset': {
                                'result': 'offOut',
                                'in': 'SourceAlpha',
                                'dx': '2',
                                'dy': '2'
                            },
                            'feGaussianBlur': {
                                'result': 'blurOut',
                                'in': 'offOut',
                                'stdDeviation': '10'
                            },
                            'feColorMatrix': {
                                'result': 'blurOut',
                                'type': 'matrix',
                                'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
                            },
                            'feBlend': {
                                'in': 'SourceGraphic',
                                'in2': 'blurOut',
                                'mode': 'normal'
                            }
                        }]
                },
                'fontSize': 15,
                'pathToImages': '../amcharts/images/',
                'dataProvider': chartData,
                'dataDateFormat': 'YYYY',
                'marginTop': 10,
                'marginRight': 0,
                'marginLeft': 0,
                'autoMarginOffset': 5,
                'categoryField': 'year',
                'categoryAxis': {
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'startOnAxis': true,
                    'tickLength': 0,
                    'color': '#fff',
                    'parseDates': true,
                    'minPeriod': 'YYYY',
                    'offset': 0,
                    'inside': true,
                },
                'valueAxes': [{
                        'fontSize': 0,
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'minimum': 0,
                        'maximum': 100,
                    }],
                'graphs': [{
                        'id': 'g3',
                        'title': 'Bicycles',
                        'valueField': 'bicycles',
                        'lineAlpha': 1,
                        'lineColor': '#FFFFFF',
                        'lineThickness': 3,
                        'bullet': 'round',
                        'bulletBorderAlpha': 3,
                        'bulletAlpha': 1,
                        'bulletSize': 8,
                        'stackable': false,
                        'bulletColor': '#04A5F5',
                        'bulletBorderColor': '#fff',
                        'bulletBorderThickness': 3,
                        'balloonText': '<div style="margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff">[[value]]</div>'
                    }],
                'chartCursor': {
                    'cursorAlpha': 1,
                    'fontSize': 0,
                    'zoomable': false,
                    'cursorColor': '#fff',
                    'categoryBalloonColor': '#04A5F5',
                    'fullWidth': true,
                    'categoryBalloonDateFormat': 'YYYY',
                    'balloonPointerOrientation': 'vertical'
                },
                'balloon': {
                    'borderAlpha': 0,
                    'fillAlpha': 0,
                    'shadowAlpha': 0,
                    'offsetX': 40,
                    'offsetY': -50
                }
            });
            $.plot($('#transactions'), [{
                    data: [
                        [0, 48],
                        [1, 30],
                        [2, 25],
                        [3, 30],
                        [4, 20],
                        [5, 40],
                        [6, 30],
                    ],
                    color: '#1dc4e9',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.2,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
                        nrSplinePoints: 0
                    },
                },
                tooltip: {
                    show: true,
                    content: 'x : %x | y : %y'
                },
                grid: {
                    hoverable: true,
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 50,
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                },
                xaxis: {
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                }
            });
            $.plot($('#transactions1'), [{
                    data: [
                        [0, 48],
                        [1, 30],
                        [2, 25],
                        [3, 30],
                        [4, 20],
                        [5, 40],
                        [6, 30],
                    ],
                    color: '#a389d4',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.2,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
                        nrSplinePoints: 0
                    },
                },
                tooltip: {
                    show: true,
                    content: 'x : %x | y : %y'
                },
                grid: {
                    hoverable: true,
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 50,
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                },
                xaxis: {
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                }
            });
            $.plot($('#transactions2'), [{
                    data: [
                        [0, 44],
                        [1, 26],
                        [2, 22],
                        [3, 35],
                        [4, 28],
                        [5, 35],
                        [6, 28],
                    ],
                    color: '#1dc4e9',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.2,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
                        nrSplinePoints: 0
                    },
                },
                tooltip: {
                    show: true,
                    content: 'x : %x | y : %y'
                },
                grid: {
                    hoverable: true,
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 50,
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                },
                xaxis: {
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                }
            });
            $.plot($('#transactions3'), [{
                    data: [
                        [0, 40],
                        [1, 30],
                        [2, 25],
                        [3, 38],
                        [4, 30],
                        [5, 38],
                        [6, 30],
                    ],
                    color: '#1dc4e9',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.2,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
                        nrSplinePoints: 0
                    },
                },
                tooltip: {
                    show: true,
                    content: 'x : %x | y : %y'
                },
                grid: {
                    hoverable: true,
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 50,
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                },
                xaxis: {
                    color: 'transparent',
                    font: {
                        size: 0,
                    }
                }
            });
        }, 500);
    };
    DashAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-analytics',
            template: __webpack_require__(/*! ./dash-analytics.component.html */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.html"),
            styles: [__webpack_require__(/*! ./dash-analytics.component.scss */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashAnalyticsComponent);
    return DashAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts ***!
  \************************************************************************/
/*! exports provided: DashAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsModule", function() { return DashAnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-analytics-routing.module */ "./src/app/demo/dashboard/dash-analytics/dash-analytics-routing.module.ts");
/* harmony import */ var _dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-analytics.component */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var DashAnalyticsModule = /** @class */ (function () {
    function DashAnalyticsModule() {
    }
    DashAnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_dash_analytics_component__WEBPACK_IMPORTED_MODULE_4__["DashAnalyticsComponent"]]
        })
    ], DashAnalyticsModule);
    return DashAnalyticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-analytics-dash-analytics-module.js.map