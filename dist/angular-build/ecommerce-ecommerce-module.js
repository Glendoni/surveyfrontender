(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecommerce-module"],{

/***/ "./src/app/demo/dashboard/ecommerce/ecommerce-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/dashboard/ecommerce/ecommerce-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EcommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceRoutingModule", function() { return EcommerceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/demo/dashboard/ecommerce/ecommerce.component.ts");




var routes = [
    {
        path: '',
        component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"]
    }
];
var EcommerceRoutingModule = /** @class */ (function () {
    function EcommerceRoutingModule() {
    }
    EcommerceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EcommerceRoutingModule);
    return EcommerceRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/ecommerce/ecommerce.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/demo/dashboard/ecommerce/ecommerce.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h5>Online Orders</h5>\n      <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">Delivery Orders<span class=\"float-right f-18 text-c-green\">237 / 400</span></h6>\n      <div class=\"progress mt-3\">\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:65%;height:6px;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <span class=\"text-muted mt-2 d-block\">37% Done</span>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h5>Pending Orders</h5>\n      <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">Pending Orders<span class=\"float-right f-18 text-c-purple\">100 / 500</span></h6>\n      <div class=\"progress mt-3\">\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:50%;height:6px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <span class=\"text-muted mt-2 d-block\">20% Pending</span>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h5>Return Orders</h5>\n      <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">Return Orders<span class=\"float-right f-18 text-c-blue\">50 / 400</span></h6>\n      <div class=\"progress mt-3\">\n        <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:40%;height:6px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <span class=\"text-muted mt-2 d-block\">10% Return</span>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Yearly Summary\">\n      <div class=\"row pb-3\">\n        <div class=\"col-md-4 col-6 text-center m-b-10\">\n          <h3 class=\"f-w-300\">$2356.4</h3>\n          <span>Invoiced</span>\n        </div>\n        <div class=\"col-md-4 col-6 text-center m-b-10\">\n          <h3 class=\"f-w-300\">$1935.6</h3>\n          <span>Profit</span>\n        </div>\n        <div class=\"col-md-4 col-12 text-center m-b-10\">\n          <h3 class=\"f-w-300\">$468.9</h3>\n          <span>Expenses</span>\n        </div>\n      </div>\n      <div id=\"bar-chart3\" class=\"bar-chart3\" style=\"height:280px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg earning-date\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Earnings</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"bd-example bd-example-tabs\">\n          <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"earnings-mon\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-mon\">\n              <h2 class=\"text-white mb-3 f-w-300\">359,234<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n          </div>\n          <ul class=\"nav nav-pills align-items-center justify-content-center\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"pills-earnings-mon\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-mon\" aria-selected=\"true\">Mon</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-tue\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-tue\" aria-selected=\"false\">Tue</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-wed\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-wed\" aria-selected=\"false\">Wed</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-thu\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-thu\" aria-selected=\"false\">Thu</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-fri\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-fri\" aria-selected=\"false\">Fri</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sat\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sat\" aria-selected=\"false\">Sat</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sun\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sun\" aria-selected=\"false\">Sun</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"card theme-bg2\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img src=\"assets/images/widget/shape5.png\" alt=\"activity-user\">\n          </div>\n          <div class=\"col\">\n            <h2 class=\"text-white f-w-300\">375</h2>\n            <h5 class=\"text-white\">Sale Product</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-md-6\">\n    <app-card cardTitle=\"Full Width Table\" cardClass=\"code-table\" blockClass=\"pb-0\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>Id Number</th>\n            <th>Code</th>\n            <th>Date</th>\n            <th>Budget</th>\n            <th>Status</th>\n            <th class=\"text-right\">Ratings</th>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <h6 class=\"mb-1\">#467</h6>\n            </td>\n            <td>\n              <h6 class=\"mb-1\">8765482</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">Nov 14, 2017</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">$ 874.23</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg f-12 text-white\">Active</a></td>\n            <td class=\"text-right\"><a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <h6 class=\"mb-1\">#466</h6>\n            </td>\n            <td>\n              <h6 class=\"mb-1\">2366482</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">Nov 13, 2017</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">$ 235.34</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 f-12 text-white\">Not Active</a></td>\n            <td class=\"text-right\"><a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <h6 class=\"mb-1\">#465</h6>\n            </td>\n            <td>\n              <h6 class=\"mb-1\">8832638</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">Oct 14, 2017</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">$ 233.46</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg f-12 text-white\">Active</a></td>\n            <td class=\"text-right\"><a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6 class=\"mb-1\">#464</h6>\n            </td>\n            <td>\n              <h6 class=\"mb-1\">9632638</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">Dec 17, 2017</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">$ 133.46</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 f-12 text-white\">Not Active</a></td>\n            <td class=\"text-right\"><a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6 class=\"mb-1\">#463</h6>\n            </td>\n            <td>\n              <h6 class=\"mb-1\">3332538</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">July 14, 2017</h6>\n            </td>\n            <td>\n              <h6 class=\"m-b-0\">$ 244.46</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg f-12 text-white\">Active</a></td>\n            <td class=\"text-right\"><a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-black-50\"></i></a>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <app-card cardTitle=\"Earnings\">\n      <div class=\"earning-price mb-4\">\n        <h3 class=\"m-0 f-w-300\">$894.39</h3>\n      </div>\n      <div id=\"widget-line-chart1\" class=\"WidgetlineChart \" style=\"height:300px;\"></div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/ecommerce/ecommerce.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/dashboard/ecommerce/ecommerce.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/dashboard/ecommerce/ecommerce.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/dashboard/ecommerce/ecommerce.component.ts ***!
  \*****************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
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











var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            AmCharts.makeChart('bar-chart3', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'valueAxes': [{
                        'id': 'v1',
                        'position': 'left',
                        'gridAlpha': 0,
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
                        'title': 'Last Week ',
                        'valueField': 'sales2',
                        'columnWidth': 0.2,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v1',
                        'lineColor': ['#a389d4', '#899ed4'],
                        'fillColors': ['#a389d4', '#899ed4'],
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'Market Place ',
                        'valueField': 'sales1',
                        'columnWidth': 0.2,
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
                'categoryField': 'date',
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
                        'date': 'Q1',
                        'sales1': 4.5,
                        'sales2': 5.5
                    }, {
                        'date': 'Q2',
                        'sales1': 5,
                        'sales2': 6.5
                    }, {
                        'date': 'Q3',
                        'sales1': 6.5,
                        'sales2': 5.5
                    }, {
                        'date': 'Q4',
                        'sales1': 6,
                        'sales2': 7
                    }]
            });
            var chartDatac = [{
                    'day': 'Mon',
                    'value': 60
                }, {
                    'day': 'Tue',
                    'value': 50
                }, {
                    'day': 'Wed',
                    'value': 59
                }, {
                    'day': 'Thu',
                    'value': 55
                }, {
                    'day': 'Fri',
                    'value': 65
                }, {
                    'day': 'Sat',
                    'value': 55
                }, {
                    'day': 'Sun',
                    'value': 70
                }];
            AmCharts.makeChart('widget-line-chart1', {
                'type': 'serial',
                'addClassNames': true,
                'defs': {
                    'filter': [{
                            'x': '-50%',
                            'y': '-50%',
                            'width': '200%',
                            'height': '200%',
                            'id': 'blur',
                            'feGaussianBlur': {
                                'in': 'SourceGraphic',
                                'stdDeviation': '30'
                            }
                        },
                        {
                            'id': 'shadow',
                            'x': '-10%',
                            'y': '-10%',
                            'width': '120%',
                            'height': '120%',
                            'feOffset': {
                                'result': 'offOut',
                                'in': 'SourceAlpha',
                                'dx': '0',
                                'dy': '20'
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
                        }
                    ]
                },
                'fontSize': 15,
                'dataProvider': chartDatac,
                'autoMarginOffset': 0,
                'marginRight': 0,
                'categoryField': 'day',
                'categoryAxis': {
                    'color': '#393c40',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'offset': -20,
                    'inside': true,
                },
                'valueAxes': [{
                        'fontSize': 0,
                        'inside': true,
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'minimum': 0,
                        'maximum': 100,
                    }],
                'chartCursor': {
                    'valueLineEnabled': false,
                    'valueLineBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false,
                    'valueZoomable': false,
                    'cursorColor': '#fff',
                    'categoryBalloonColor': '#23d3d7',
                    'valueLineAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        'type': 'line',
                        'valueField': 'value',
                        'lineColor': '#23d3d7',
                        'lineAlpha': 1,
                        'lineThickness': 3,
                        'fillAlphas': 0,
                        'showBalloon': true,
                        'balloon': {
                            'drop': true,
                            'adjustBorderColor': false,
                            'color': '#ffffff',
                            'fillAlphas': 0.2,
                            'bullet': 'round',
                            'bulletBorderAlpha': 1,
                            'bulletSize': 5,
                            'hideBulletsCount': 50,
                            'lineThickness': 2,
                            'useLineColorForBulletBorder': true,
                            'valueField': 'value',
                            'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                        }
                    }]
            });
        }, 500);
    };
    EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./ecommerce.component.html */ "./src/app/demo/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.scss */ "./src/app/demo/dashboard/ecommerce/ecommerce.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/ecommerce/ecommerce.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/dashboard/ecommerce/ecommerce.module.ts ***!
  \**************************************************************/
/*! exports provided: EcommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce-routing.module */ "./src/app/demo/dashboard/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/demo/dashboard/ecommerce/ecommerce.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_3__["EcommerceRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__["EcommerceComponent"]]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ })

}]);
//# sourceMappingURL=ecommerce-ecommerce-module.js.map