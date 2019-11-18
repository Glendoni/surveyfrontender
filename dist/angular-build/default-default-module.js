(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"],{

/***/ "./src/app/demo/dashboard/default/default-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/default/default-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/demo/dashboard/default/default.component.ts");




var routes = [
    {
        path: '',
        component: _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"]
    }
];
var DefaultRoutingModule = /** @class */ (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/default/default.component.html":
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/default/default.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n        <h6 class=\"mb-4\">Daily Sales</h6>\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col-9\">\r\n            <h3 class=\"f-w-300 d-flex align-items-center m-b-0\"><i class=\"feather icon-arrow-up text-c-green f-30 m-r-10\"></i>$249.95</h3>\r\n          </div>\r\n\r\n          <div class=\"col-3 text-right\">\r\n            <p class=\"m-b-0\">67%</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <h6 class=\"mb-4\">Monthly Sales</h6>\r\n      <div class=\"row d-flex align-items-center\">\r\n        <div class=\"col-9\">\r\n          <h3 class=\"f-w-300 d-flex align-items-center  m-b-0\"><i class=\"feather icon-arrow-down text-c-red f-30 m-r-10\"></i>$2.942.32</h3>\r\n        </div>\r\n        <div class=\"col-3 text-right\">\r\n          <p class=\"m-b-0\">36%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <app-card [hidHeader]=\"true\">\r\n      <h6 class=\"mb-4\">Yearly Sales</h6>\r\n      <div class=\"row d-flex align-items-center\">\r\n        <div class=\"col-9\">\r\n          <h3 class=\"f-w-300 d-flex align-items-center  m-b-0\"><i class=\"feather icon-arrow-up text-c-green f-30 m-r-10\"></i>$8.638.32</h3>\r\n        </div>\r\n        <div class=\"col-3 text-right\">\r\n          <p class=\"m-b-0\">80%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\r\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-8 col-md-6\">\r\n    <app-card cardTitle=\"Users From United States\">\r\n      <div id=\"world-low\" style=\"height:450px;\"></div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-4 col-md-6\">\r\n    <div class=\"card bg-c-blue\">\r\n      <div class=\"card-header borderless\">\r\n        <h5 class=\"text-white\">Earnings</h5>\r\n      </div>\r\n      <div class=\"card-block\" style=\"padding:0 25px;\">\r\n        <div class=\"earning-text mb-0\">\r\n          <h3 class=\"mb-2 text-white f-w-300\">$4295.36 <i class=\"feather icon-arrow-up teal accent-3\"></i></h3>\r\n          <span class=\"text-uppercase text-white d-block\">Total Earnings</span>\r\n        </div>\r\n        <div id=\"widget-line-chart\" class=\"WidgetlineChart2 ChartShadow\" style=\"height:180px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-block border-bottom\">\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col-auto\">\r\n            <i class=\"feather icon-zap f-30 text-c-green\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h3 class=\"f-w-300\">235</h3>\r\n            <span class=\"d-block text-uppercase\">TOTAL IDEAS</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col-auto\">\r\n            <i class=\"feather icon-map-pin f-30 text-c-blue\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h3 class=\"f-w-300\">26</h3>\r\n            <span class=\"d-block text-uppercase\">TOTAL LOCATIONS</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card card-social\">\r\n      <div class=\"card-block border-bottom\">\r\n        <div class=\"row align-items-center justify-content-center\">\r\n          <div class=\"col-auto\">\r\n            <i class=\"fab fa-facebook-f text-primary f-36\"></i>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <h3>12,281</h3>\r\n            <h5 class=\"text-c-green mb-0\">+7.2% <span class=\"text-muted\">Total Likes</span></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row align-items-center justify-content-center card-active\">\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>35,098</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>3,539</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:45%;height:6px;\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <div class=\"card card-social\">\r\n      <div class=\"card-block border-bottom\">\r\n        <div class=\"row align-items-center justify-content-center\">\r\n          <div class=\"col-auto\">\r\n            <i class=\"fab fa-twitter text-c-blue f-36\"></i>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <h3>11,200</h3>\r\n            <h5 class=\"text-c-purple mb-0\">+6.2% <span class=\"text-muted\">Total Likes</span></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row align-items-center justify-content-center card-active\">\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>34,185</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-green\" role=\"progressbar\" style=\"width:40%;height:6px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>4,567</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:70%;height:6px;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <div class=\"card card-social\">\r\n      <div class=\"card-block border-bottom\">\r\n        <div class=\"row align-items-center justify-content-center\">\r\n          <div class=\"col-auto\">\r\n            <i class=\"fab fa-google-plus-g text-c-red f-36\"></i>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <h3>10,500</h3>\r\n            <h5 class=\"text-c-blue mb-0\">+5.9% <span class=\"text-muted\">Total Likes</span></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row align-items-center justify-content-center card-active\">\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>25,998</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:80%;height:6px;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>7,753</h6>\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:50%;height:6px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-md-6\">\r\n    <app-card cardTitle=\"Rating\">\r\n      <div class=\"row align-items-center justify-content-center m-b-20\">\r\n        <div class=\"col-6\">\r\n          <h2 class=\"f-w-300 d-flex align-items-center float-left m-0\">4.7 <i class=\"fas fa-star f-10 m-l-10 text-c-yellow\"></i></h2>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <h6 class=\"d-flex  align-items-center float-right m-0\">0.4 <i class=\"fas fa-caret-up text-c-green f-22 m-l-10\"></i></h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>5</h6>\r\n          <h6 class=\"align-items-center float-right\">384</h6>\r\n          <div class=\"progress m-t-30 m-b-20\" style=\"height: 6px;\">\r\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>4</h6>\r\n          <h6 class=\"align-items-center float-right\">145</h6>\r\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\r\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>3</h6>\r\n          <h6 class=\"align-items-center float-right\">24</h6>\r\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\r\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>2</h6>\r\n          <h6 class=\"align-items-center float-right\">1</h6>\r\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\r\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 10%;\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>1</h6>\r\n          <h6 class=\"align-items-center float-right\">0</h6>\r\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-xl-8 col-md-6\">\r\n    <app-card cardTitle=\"Recent Users\" cardClass=\"Recent-Users\" blockClass=\"px-0 py-3\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <tbody>\r\n          <tr class=\"unread\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">Isabella Christensen</h6>\r\n              <p class=\"m-0\">Lorem Ipsum is simply dummy</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>11 MAY 12:56</h6></td>\r\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">Mathilde Andersen</h6>\r\n              <p class=\"m-0\">Lorem Ipsum is simply</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-red f-10 m-r-15\"></i>11 MAY 10:35</h6></td>\r\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">Karla Sorensen</h6>\r\n              <p class=\"m-0\">Lorem Ipsum is simply dummy</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>9 MAY 17:38</h6></td>\r\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">Ida Jorgensen</h6>\r\n              <p class=\"m-0\">Lorem Ipsum is simply</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted f-w-300\"><i class=\"fas fa-circle text-c-red f-10 m-r-15\"></i>19 MAY 12:56</h6></td>\r\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></td>\r\n            <td>\r\n              <h6 class=\"mb-1\">Albert Andersen</h6>\r\n              <p class=\"m-0\">Lorem Ipsum is</p>\r\n            </td>\r\n            <td>\r\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>21 July 12:56</h6></td>\r\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/dashboard/default/default.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/default/default.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/dashboard/default/default.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/dashboard/default/default.component.ts ***!
  \*************************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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











var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
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
        }, 500);
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/demo/dashboard/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/demo/dashboard/default/default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/default/default.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/dashboard/default/default.module.ts ***!
  \**********************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-routing.module */ "./src/app/demo/dashboard/default/default-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default.component */ "./src/app/demo/dashboard/default/default.component.ts");






var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ })

}]);
//# sourceMappingURL=default-default-module.js.map