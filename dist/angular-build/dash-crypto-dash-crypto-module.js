(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-crypto-dash-crypto-module"],{

/***/ "./src/app/demo/dashboard/dash-crypto/dash-crypto-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crypto/dash-crypto-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DashCryptoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCryptoRoutingModule", function() { return DashCryptoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_crypto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-crypto.component */ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.ts");




var routes = [
    {
        path: '',
        component: _dash_crypto_component__WEBPACK_IMPORTED_MODULE_3__["DashCryptoComponent"]
    }
];
var DashCryptoRoutingModule = /** @class */ (function () {
    function DashCryptoRoutingModule() {
    }
    DashCryptoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashCryptoRoutingModule);
    return DashCryptoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crypto/dash-crypto.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"theme-bg bitcoin-wallet\" [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n      <h2 class=\"text-white mb-2 f-w-300\">$9,302</h2>\n      <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n      <i class=\"fab fa-btc f-70 text-white\"></i>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"theme-bg2 bitcoin-wallet\" [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n      <h2 class=\"text-white mb-2 f-w-300\">$8,101</h2>\n      <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n      <i class=\"fas fa-dollar-sign f-70 text-white\"></i>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"bg-c-blue bitcoin-wallet\" [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n      <h2 class=\"text-white mb-2 f-w-300\">$7,501</h2>\n      <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n      <i class=\"fas fa-pound-sign f-70 text-white\"></i>\n    </app-card>\n  </div>\n\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"line-area2\" class=\"lineAreaDashboard\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <app-card cardTitle=\"Notifications\" cardClass=\"note-bar\" blockClass=\"p-0\">\n      <a href=\"javascript:\" class=\"media friendlist-box\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order received</h6>\n          <span class=\"f-12 float-right text-muted\">12.56</span>\n          <p class=\"text-muted m-0\">2 unread notification</p>\n        </div>\n      </a>\n      <a href=\"javascript:\" class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New user register</h6>\n          <span class=\"f-12 float-right text-muted\">12.36</span>\n          <p class=\"text-muted m-0\">xx messages</p>\n        </div>\n      </a>\n\n      <a href=\"javascript:\" class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order register</h6>\n          <span class=\"f-12 float-right text-muted\">11.45</span>\n          <p class=\"text-muted m-0\">2 read notification</p>\n        </div>\n      </a>\n\n      <a href=\"javascript:\" class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order prepend</h6>\n          <span class=\"f-12 float-right text-muted\">9.39</span>\n          <p class=\"text-muted m-0\">xx messages</p>\n        </div>\n      </a>\n    </app-card>\n  </div>\n\n  <div class=\"col-xl-8 col-md-6\">\n    <app-card cardTitle=\"Users From United States\">\n      <div id=\"world-low\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Statistics</h5>\n      </div>\n      <div class=\"card-block\">\n        <h3 class=\"f-w-300\">$894.39</h3>\n      </div>\n      <div id=\"Earnings-chart\" style=\"height:300px;\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crypto/dash-crypto.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtY3J5cHRvL2Rhc2gtY3J5cHRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crypto/dash-crypto.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashCryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCryptoComponent", function() { return DashCryptoComponent; });
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











var DashCryptoComponent = /** @class */ (function () {
    function DashCryptoComponent() {
    }
    DashCryptoComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            AmCharts.makeChart('line-area2', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'dataProvider': [{
                        'year': 'Jan',
                        'value': 5,
                        'value2': 80,
                    }, {
                        'year': 'Feb',
                        'value': 30,
                        'value2': 95,
                    }, {
                        'year': 'Mar',
                        'value': 25,
                        'value2': 87,
                    }, {
                        'year': 'Apr',
                        'value': 55,
                        'value2': 155,
                    }, {
                        'year': 'May',
                        'value': 45,
                        'value2': 140,
                    }, {
                        'year': 'Jun',
                        'value': 65,
                        'value2': 147,
                    }, {
                        'year': 'Jul',
                        'value': 60,
                        'value2': 130,
                    }, {
                        'year': 'Aug',
                        'value': 105,
                        'value2': 180,
                    }, {
                        'year': 'Sep',
                        'value': 80,
                        'value2': 160,
                    }, {
                        'year': 'Oct',
                        'value': 110,
                        'value2': 175,
                    }, {
                        'year': 'Nov',
                        'value': 120,
                        'value2': 165,
                    }, {
                        'year': 'Dec',
                        'value': 150,
                        'value2': 200,
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'lineColor': '#1de9b6',
                        'lineThickness': 3,
                        'negativeLineColor': '#1de9b6',
                        'valueField': 'value'
                    }, {
                        'id': 'g2',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'lineColor': '#10adf5',
                        'lineThickness': 3,
                        'negativeLineColor': '#10adf5',
                        'valueField': 'value2'
                    }],
                'chartCursor': {
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.3,
                    'fullWidth': true
                },
                'categoryField': 'year',
                'categoryAxis': {
                    'minorGridAlpha': 0,
                    'minorGridEnabled': true,
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
            });
            var latlong = {};
            latlong['AU'] = {
                'latitude': -27,
                'longitude': 133
            };
            latlong['BR'] = {
                'latitude': -10,
                'longitude': -55
            };
            latlong['BW'] = {
                'latitude': -22,
                'longitude': 24
            };
            latlong['IN'] = {
                'latitude': 20,
                'longitude': 77
            };
            latlong['KE'] = {
                'latitude': 1,
                'longitude': 38
            };
            latlong['MX'] = {
                'latitude': 23,
                'longitude': -102
            };
            latlong['MY'] = {
                'latitude': 2.5,
                'longitude': 112.5
            };
            latlong['NI'] = {
                'latitude': 13,
                'longitude': -85
            };
            latlong['NZ'] = {
                'latitude': -41,
                'longitude': 174
            };
            latlong['PH'] = {
                'latitude': 13,
                'longitude': 122
            };
            latlong['PL'] = {
                'latitude': 52,
                'longitude': 20
            };
            latlong['RU'] = {
                'latitude': 60,
                'longitude': 100
            };
            latlong['TH'] = {
                'latitude': 15,
                'longitude': 100
            };
            latlong['ZA'] = {
                'latitude': -29,
                'longitude': 24
            };
            var mapData = [
                {
                    'code': 'MX',
                    'name': 'Mexico',
                    'value': 114793341,
                    'color': '#a389d4'
                },
                {
                    'code': 'BR',
                    'name': 'Brazil',
                    'value': 196655014,
                    'color': '#1de9b6'
                },
                {
                    'code': 'PL',
                    'name': 'Poland',
                    'value': 38298949,
                    'color': '#f44236'
                },
                {
                    'code': 'KE',
                    'name': 'Kenya',
                    'value': 41609728,
                    'color': '#1dc4e9'
                },
                {
                    'code': 'ZA',
                    'name': 'South Africa',
                    'value': 50459978,
                    'color': '#f4c22b'
                },
                {
                    'code': 'RU',
                    'name': 'Russia',
                    'value': 142835555,
                    'color': '#f4c22b'
                },
                {
                    'code': 'IN',
                    'name': 'India',
                    'value': 241491960,
                    'color': '#1de9b6'
                },
                {
                    'code': 'PH',
                    'name': 'Philippines',
                    'value': 94852030,
                    'color': '#04a9f5'
                },
                {
                    'code': 'AU',
                    'name': 'Australia',
                    'value': 22605732,
                    'color': '#1dc4e9'
                },
                {
                    'code': 'TH',
                    'name': 'Thailand',
                    'value': 69518555,
                    'color': '#f44236'
                },
                {
                    'code': 'BW',
                    'name': 'Botswana',
                    'value': 2030738,
                    'color': '#04a9f5'
                },
                {
                    'code': 'MY',
                    'name': 'Malaysia',
                    'value': 28859154,
                    'color': '#A389D4'
                },
                {
                    'code': 'NZ',
                    'name': 'New Zealand',
                    'value': 4414509,
                    'color': '#04a9f5'
                },
                {
                    'code': 'NI',
                    'name': 'Nicaragua',
                    'value': 5869859,
                    'color': '#A389D4'
                }
            ];
            var minBulletSize = 3;
            var maxBulletSize = 70;
            var min = Infinity;
            var max = -Infinity;
            var i;
            var value;
            for (i = 0; i < mapData.length; i++) {
                value = mapData[i].value;
                if (value < min) {
                    min = value;
                }
                if (value > max) {
                    max = value;
                }
            }
            var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
            var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
            var images = [];
            for (i = 0; i < mapData.length; i++) {
                var dataItem = mapData[i];
                value = dataItem.value;
                var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
                if (square < minSquare) {
                    square = minSquare;
                }
                var size = Math.sqrt(square / (Math.PI * 8));
                var id = dataItem.code;
                images.push({
                    'type': 'circle',
                    'theme': 'light',
                    'width': size,
                    'height': size,
                    'color': dataItem.color,
                    'longitude': latlong[id].longitude,
                    'latitude': latlong[id].latitude,
                    'title': dataItem.name + '</br> [ ' + value + ' ]',
                    'value': value
                });
            }
            var map = AmCharts.makeChart('world-low', {
                'type': 'map',
                'projection': 'eckert6',
                'dataProvider': {
                    'map': 'worldLow',
                    'images': images
                },
                'export': {
                    'enabled': true
                }
            });
            var chartDatac = [{
                    'day': 'Mon',
                    'value': 60
                }, {
                    'day': 'Tue',
                    'value': 45
                }, {
                    'day': 'Wed',
                    'value': 70
                }, {
                    'day': 'Thu',
                    'value': 55
                }, {
                    'day': 'Fri',
                    'value': 70
                }, {
                    'day': 'Sat',
                    'value': 55
                }, {
                    'day': 'Sun',
                    'value': 70
                }];
            var chartc = AmCharts.makeChart('widget-line-chart', {
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
                    'color': '#fff',
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
                    'categoryBalloonColor': '#51b4e6',
                    'valueLineAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        'type': 'line',
                        'valueField': 'value',
                        'lineColor': '#ffffff',
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
                    }],
            });
            var earningChart = [{
                    'year': '1999',
                    'value': 30
                }, {
                    'year': '2000',
                    'value': 55
                }, {
                    'year': '2001',
                    'value': 80
                }, {
                    'year': '2002',
                    'value': 60
                }, {
                    'year': '2003',
                    'value': 70
                }, {
                    'year': '2004',
                    'value': 70
                }, {
                    'year': '2005',
                    'value': 110
                }, {
                    'year': '2006',
                    'value': 90
                }, {
                    'year': '2007',
                    'value': 130
                }];
            var charteAm = AmCharts.makeChart('Earnings-chart', {
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
                'dataProvider': earningChart,
                'dataDateFormat': 'YYYY',
                'autoMarginOffset': 0,
                'marginRight': -1,
                'marginBottom': -2,
                'categoryField': 'year',
                'categoryAxis': {
                    'color': '#fff',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'offset': -20,
                    'inside': true,
                    'parseDates': true,
                    'minPeriod': 'YYYY'
                },
                'chartCursor': {
                    'valueLineEnabled': false,
                    'valueLineBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false,
                    'cursorColor': '#fff',
                    'categoryBalloonColor': '#88dcef',
                    'valueZoomable': false,
                    'valueLineAlpha': 0
                },
                'valueAxes': [{
                        'fontSize': 0,
                        'inside': true,
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                    }],
                'graphs': [{
                        'id': 'g1',
                        'type': 'line',
                        'valueField': 'value',
                        'fillColors': [
                            '#1dc4e9',
                            '#A389D4'
                        ],
                        'lineColor': '#1dc4e9',
                        'balloon': {
                            'drop': true,
                            'adjustBorderColor': false,
                            'color': '#ffffff',
                            'type': 'smoothedLine'
                        },
                        'lineAlpha': 1,
                        'lineThickness': 5,
                        'fillAlphas': 0.2,
                        'showBalloon': true
                    }],
            });
            setTimeout(function () {
                charteAm.zoomToIndexes(1, earningChart.length - 2);
            }, 400);
        }, 500);
    };
    DashCryptoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-crypto',
            template: __webpack_require__(/*! ./dash-crypto.component.html */ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.html"),
            styles: [__webpack_require__(/*! ./dash-crypto.component.scss */ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashCryptoComponent);
    return DashCryptoComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-crypto/dash-crypto.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crypto/dash-crypto.module.ts ***!
  \******************************************************************/
/*! exports provided: DashCryptoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCryptoModule", function() { return DashCryptoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_crypto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-crypto-routing.module */ "./src/app/demo/dashboard/dash-crypto/dash-crypto-routing.module.ts");
/* harmony import */ var _dash_crypto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-crypto.component */ "./src/app/demo/dashboard/dash-crypto/dash-crypto.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var DashCryptoModule = /** @class */ (function () {
    function DashCryptoModule() {
    }
    DashCryptoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_crypto_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashCryptoRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_dash_crypto_component__WEBPACK_IMPORTED_MODULE_4__["DashCryptoComponent"]]
        })
    ], DashCryptoModule);
    return DashCryptoModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-crypto-dash-crypto-module.js.map