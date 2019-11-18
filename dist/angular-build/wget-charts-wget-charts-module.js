(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wget-charts-wget-charts-module"],{

/***/ "./src/app/demo/widget/wget-charts/wget-charts-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/widget/wget-charts/wget-charts-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: WgetChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetChartsRoutingModule", function() { return WgetChartsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wget_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-charts.component */ "./src/app/demo/widget/wget-charts/wget-charts.component.ts");




var routes = [
    {
        path: '',
        component: _wget_charts_component__WEBPACK_IMPORTED_MODULE_3__["WgetChartsComponent"]
    }
];
var WgetChartsRoutingModule = /** @class */ (function () {
    function WgetChartsRoutingModule() {
    }
    WgetChartsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WgetChartsRoutingModule);
    return WgetChartsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-charts/wget-charts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/wget-charts/wget-charts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card card-command\">\n      <div class=\"card-header\">\n        <h5><i class=\"card-icon far fa-comment f-16 m-r-5\"></i>Command</h5>\n      </div>\n      <div id=\"command-card-chart1\" style=\"height:250px\"></div>\n      <div class=\"card-block\">\n        <div class=\"comment-bar\">\n          <h6 class=\"text-uppercase text-muted\">COMMENTERS<span class=\"text-uppercase float-right\">view all</span></h6>\n          <div class=\"row align-items-center justify-content-center mt-4\">\n            <div class=\"col\">\n              <h6 class=\"mb-0\"><img class=\"rounded-circle mr-2 ml-2\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user text-uppercase\"><span class=\"d-block d-sm-inline-block m-t-10\" style=\"\">Ida Jorgensen</span></h6>\n            </div>\n            <div class=\"col-auto text-right\">\n              <span class=\"float-right f-14\">3 comments</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Sales\">\n      <div id=\"chart-sale\" class=\"chart-sale\" style=\"width:220px;height:220px;\"> </div>\n      <div class=\"row text-center mt-3\">\n        <div class=\"col-sm-12\">\n          <h3 class=\"f-w-300\">184</h3>\n          <span class=\"text-uppercase\">12 Today</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"Stack-bar\" class=\"Stackchart\" style=\"height:300px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"line-area2\" class=\"lineAreaDashboard\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card theme-bg gradientcolor\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Statistics</h5>\n      </div>\n      <div class=\"card-block p-0\">\n        <div class=\"p-2 text-center\">\n          <a class=\"text-white text-uppercase f-w-400\">Month</a>\n          <a class=\"btn btn-round bg-white text-uppercase mx-3 px-4 f-w-400\">Week</a>\n          <a class=\"text-white text-uppercase f-w-400\">Day</a>\n        </div>\n        <div class=\"my-3 text-center text-white\">\n          <a class=\" d-block mb-1\">$ 78.89 <span class=\"feather icon-arrow-up\"></span></a>\n          <span>Week2 +15.44</span>\n        </div>\n        <div id=\"Chartline\" class=\"lineChart ChartShadow\" style=\"height:260px;\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <app-card cardTitle=\"News Statistics\" blockClass=\"pl-0 pr-0 pb-2\">\n      <div id=\"bar-chart\" class=\"ChartShadow BarChart\" style=\"height:250px;\"></div>\n      <div class=\"card-block border-top\">\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <span class=\"theme-bg d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n            <h6 class=\"mb-2\">48</h6>\n            <h6 class=\"mt-2 mb-0\">Sport</h6>\n          </div>\n          <div class=\"col text-center\">\n            <span class=\"theme-bg2 d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n            <h6 class=\"mb-2\">36</h6>\n            <h6 class=\"mt-2 mb-0\">Music</h6>\n          </div>\n          <div class=\"col text-center\">\n            <span class=\"bg-c-blue d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n            <h6 class=\"mb-2\">41</h6>\n            <h6 class=\"mt-2 mb-0\">Travel</h6>\n          </div>\n          <div class=\"col text-center\">\n            <span class=\"bg-c-red d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n            <h6 class=\"mb-2\">7</h6>\n            <h6 class=\"mt-2 mb-0\">News</h6>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"line-chart1\" class=\"ChartShadow\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"line-chart2\" class=\"lineChart2 ChartShadow\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card  bg-c-blue\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Earnings</h5>\n      </div>\n      <div class=\"card-block\" style=\"padding:0 25px;\">\n        <div class=\"earning-text mb-4\">\n          <h3 class=\"mb-3 text-white f-w-300\">$ 4295.36 <i class=\"feather icon-arrow-up teal accent-3\"></i></h3>\n          <span class=\"text-uppercase text-white d-block\">Total Earnings</span>\n        </div>\n        <div id=\"Widget-line-chart\" class=\"WidgetlineChart2 ChartShadow\" style=\"height:300px;\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Earnings\">\n      <div class=\"earning-price mb-4\">\n        <h3 class=\"m-0 f-w-300\">$ 894.39</h3>\n      </div>\n      <div id=\"Widget-line-chart1\" class=\"WidgetlineChart \" style=\"height:300px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Reply\">\n      <div class=\"reply-price\">\n        <h3 class=\"f-w-300\">2.43 h</h3>\n        <span class=\"text-uppercase\">average time for first reply</span>\n      </div>\n      <div id=\"bar-chart1\" class=\"ChartShadow BarChart barChart1\" style=\"height:290px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"chart-percent\" class=\"chart-percent\" style=\"height:290px;\"></div>\n      <div class=\"row mb-3\">\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">23%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-green\" role=\"progressbar\" style=\"width: 23%;\" aria-valuenow=\"23\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">14%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-yellow\" role=\"progressbar\" style=\"width: 14%;\" aria-valuenow=\"14\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mb-2\">\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">35%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-purple\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">28%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width: 28%;\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\" blockClass=\"pb-0\">\n      <div id=\"bar-chart2\" class=\"bar-chart2\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Devices\">\n      <div id=\"device-chart\" class=\"device-chart\" style=\"width:250px;height:250px;\"></div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 pt-3 pb-3 border-top\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-green  mr-2\"></i>Desktop</span>\n          <span class=\"float-right\">41.6 %</span>\n        </div>\n\n        <div class=\"col-sm-12 pt-3 pb-3 border-top\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-blue  mr-2\"></i>Mobile</span>\n          <span class=\"float-right\">32.5 %</span>\n        </div>\n\n        <div class=\"col-sm-12 pt-3 border-top\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-purple  mr-2\"></i>Tablet</span>\n          <span class=\"float-right\">25.9 %</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5><img class=\"rounded-circle m-r-10\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"> Jonas Nielsen</h5>\n      </div>\n      <div class=\"card-block\">\n        <h3 class=\"f-w-300\">$ 359,234</h3>\n        <span class=\"d-block pt-1 pb-3\">TOTAL SAVINGS</span>\n        <div id=\"chart-percent1\" class=\"chart-percent1\" style=\"height:200px;\"></div>\n        <div class=\"client-name\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 pt-2 pb-2\">\n              <span class=\"mr-3\"><i class=\"feather icon-circle text-c-green  mr-2\"></i>Main wallet</span>\n              <span class=\"float-right text-muted\">$194.42</span>\n            </div>\n            <div class=\"col-sm-12 pt-2 pb-2\">\n              <span class=\"mr-3\"><i class=\"feather icon-circle text-c-blue  mr-2\"></i>Travel</span>\n              <span class=\"float-right text-muted\">$86.48</span>\n            </div>\n            <div class=\"col-sm-12 pt-2\">\n              <span class=\"mr-3\"><i class=\"feather icon-circle text-c-purple  mr-2\"></i>Food & Drink</span>\n              <span class=\"float-right text-muted\">$23.27</span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Yearly Summary\">\n      <div class=\"row pb-3\">\n        <div class=\"col-md-4 col-6 text-center m-b-15\">\n          <h3 class=\"f-w-300\">$ 2356.4</h3>\n          <span>Invoiced</span>\n        </div>\n        <div class=\"col-md-4 col-6 text-center m-b-15\">\n          <h3 class=\"f-w-300\">$ 1935.6</h3>\n          <span>Profit</span>\n        </div>\n        <div class=\"col-md-4 col-12 text-center m-b-15\">\n          <h3 class=\"f-w-300\">$ 468.9</h3>\n          <span>Expenses</span>\n        </div>\n      </div>\n      <div id=\"bar-chart3\" class=\"bar-chart3\" style=\"height:300px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Last 3 Days</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-6 text-center m-b-15\">\n            <h3 class=\"f-w-300\">$ 32,42</h3>\n            <span class=\"text-right\">Mon <strong>+5,93</strong></span>\n          </div>\n\n          <div class=\"col-md-4 col-6 text-center m-b-15\">\n            <h3 class=\"f-w-300\">$ 28,36</h3>\n            <span class=\"text-right\">Tue <strong>-4,24</strong></span>\n          </div>\n\n          <div class=\"col-md-4 col-12 text-center m-b-15\">\n            <h3 class=\"f-w-300\">$ 59,48</h3>\n            <span class=\"text-right\">Wed <strong>+12,25</strong></span>\n          </div>\n        </div>\n      </div>\n      <div id=\"processed-bar\" style=\"height:200px\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"chart-statistics\" class=\"chart-statistics\" style=\"width:250px;height:250px;\"> </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 pt-2 pb-2\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-green  mr-2\"></i>page Views</span>\n          <span class=\"float-right\">15.5 %</span>\n        </div>\n        <div class=\"col-sm-12 pt-2 pb-2\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-blue  mr-2\"></i>page Clicks</span>\n          <span class=\"float-right\">23.5 %</span>\n        </div>\n        <div class=\"col-sm-12 pt-2\">\n          <span class=\"mr-3\"><i class=\"feather icon-circle text-c-purple  mr-2\"></i>page Likes</span>\n          <span class=\"float-right\">36.3 %</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Activity\">\n      <div id=\"chart-activity\" class=\"chart-activity\" style=\"width:220px;height:230px;\"> </div>\n      <div class=\"row text-center\">\n        <div class=\"col-6\">\n          <h6 class=\"text-uppercase d-block mb-2\">max</h6>\n          <h3 class=\"f-w-300\">9.376</h3>\n          <h6>Steps</h6>\n        </div>\n        <div class=\"col-6\">\n          <h6 class=\"text-uppercase d-block mb-2\">min</h6>\n          <h3 class=\"font-weight-light\">237</h3>\n          <h6>Steps</h6>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Statistics</h5>\n      </div>\n      <div class=\"card-block\">\n        <h3 class=\"f-w-300\">$ 894.39</h3>\n      </div>\n      <div id=\"Earnings-chart\" style=\"height:300px;\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"sales-render\" style=\"height:300px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Web Statistics\">\n      <div id=\"webchart\" style=\"height:250px;\"></div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 pt-3 pb-3 mt-3 border-top\">\n          <span class=\"mr-3\">Sales</span>\n          <span class=\"float-right\">563 / 735</span>\n        </div>\n\n        <div class=\"col-sm-12 pt-3 pb-3 border-top\">\n          <span class=\"mr-3\">Clicks</span>\n          <span class=\"float-right\">76898 / 95442</span>\n        </div>\n        <div class=\"col-sm-12 pt-3 pb-3 border-top\">\n          <span class=\"mr-3\">Views</span>\n          <span class=\"float-right\">3682 / 4235</span>\n        </div>\n        <div class=\"col-sm-12 pt-3 border-top\">\n          <span class=\"mr-3\">Visits</span>\n          <span class=\"float-right\">2348 / 3749</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"Statistics-line\" class=\"ChartShadow\" style=\"height:450px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <h3 class=\"f-w-300 mb-0 float-left\">$ 59,48</h3>\n        </div>\n        <div class=\"col-6\">\n          <div id=\"transactions\" class=\"float-right\" style=\"height:80px;width:80px;margin:0 auto;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div id=\"transactions1\" style=\"height:50px;width:80px;margin:0 auto;\"></div>\n          <h3 class=\"f-w-300 pt-3 mb-0 text-center\">$ 80,48</h3>\n        </div>\n\n        <div class=\"col-6\">\n          <div id=\"transactions2\" style=\"height:50px;width:80px;margin:0 auto;\"></div>\n          <h3 class=\"f-w-300 pt-3 mb-0 text-center\">$ 40,27</h3>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <div id=\"transactions3\" class=\"float-left\" style=\"height:80px;width:80px;margin:0 auto;\"></div>\n        </div>\n        <div class=\"col-6\">\n          <h3 class=\"f-w-300 mb-0 float-right\">$ 59,48</h3>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg2\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Stats</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-6 text-center m-b-10\">\n            <h3 class=\"text-white f-w-300\">932</h3>\n            <span class=\"d-block text-white\">This Month</span>\n          </div>\n          <div class=\"col-md-4 col-6 text-center m-b-10\">\n            <h3 class=\"text-white f-w-300\">85</h3>\n            <span class=\"d-block text-white\">This Week</span>\n          </div>\n          <div class=\"col-md-4 col-12 text-center m-b-10\">\n            <h3 class=\"text-white f-w-300\">26</h3>\n            <span class=\"d-block text-white\">Today</span>\n          </div>\n        </div>\n      </div>\n      <div id=\"sitevisite-chart\" class=\"last-week-sales\" style=\"height:250px;\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-c-blue\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Statistics</h5>\n      </div>\n      <div class=\"card-block\">\n        <div id=\"Statistics-sale\" class=\"last-week-sales\" style=\"height:300px;\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-block user-chart\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <i class=\"fas fa-chart-line f-30\"></i>\n          </div>\n          <div class=\"col text-center\">\n            <img class=\"img-fluid rounded-circle\" src=\"assets/images/user/avatar-1.jpg\" alt=\"dashboard-user\">\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"far fa-envelope f-30\"></i>\n          </div>\n        </div>\n        <h5 class=\"m-t-30 text-center\">Alma Christensen</h5>\n        <span class=\"text-center d-block\">UX Designer</span>\n        <div class=\"row m-t-40\">\n          <div class=\"col\">\n            <div id=\"power-card-chart\" class=\"ChartShadow\" style=\"height:100px\"></div>\n          </div>\n          <div class=\"col-auto\">\n            <h3 class=\"f-w-300\"><i class=\"fas fa-caret-up text-c-green f-22 m-r-10 m-l-10\"></i>13 %</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Users from United States\">\n      <div id=\"world-low\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Phone Calls</h5>\n      </div>\n      <div id=\"call-chart\" style=\"height:350px;\"></div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-sm-12\">\n    <app-card cardTitle=\"Gender\" cardClass=\"progress-gender\">\n      <h6 class=\"m-b-10\">Female <span class=\"float-right\">Male</span></h6>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <h5 class=\"f-w-300 m-t-20  text-muted\">62%<span class=\"float-right\">28%</span></h5>\n      <h6 class=\"m-b-10 m-t-20\">Female <span class=\"float-right\">Male</span></h6>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 40%; height:10px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <h5 class=\"f-w-300 m-t-20  text-muted\">60%<span class=\"float-right\">50%</span></h5>\n      <h6 class=\"m-b-10 m-t-20\">Female <span class=\"float-right\">Male</span></h6>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 50%; height:10px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 50%; height:10px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <h5 class=\"f-w-300 m-t-20  text-muted\">50%<span class=\"float-right\">50%</span></h5>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-sm-12\">\n    <app-card cardTitle=\"Age\">\n      <div id=\"Stack-age\" class=\"Stackchart\" style=\"height:250px;\"></div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/widget/wget-charts/wget-charts.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/wget-charts/wget-charts.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vd2lkZ2V0L3dnZXQtY2hhcnRzL3dnZXQtY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/widget/wget-charts/wget-charts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/widget/wget-charts/wget-charts.component.ts ***!
  \******************************************************************/
/*! exports provided: WgetChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetChartsComponent", function() { return WgetChartsComponent; });
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















var WgetChartsComponent = /** @class */ (function () {
    function WgetChartsComponent() {
    }
    WgetChartsComponent.prototype.ngOnInit = function () {
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
            var chartLineData = [{
                    'Year': 'Jan',
                    'value': 50
                }, {
                    'Year': 'Feb',
                    'value': 60
                }, {
                    'Year': 'Mar',
                    'value': 55
                }, {
                    'Year': 'Apr',
                    'value': 62
                }, {
                    'Year': 'May',
                    'value': 55
                }, {
                    'Year': 'Jun',
                    'value': 62
                }];
            AmCharts.makeChart('Chartline', {
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
                'dataProvider': chartLineData,
                'autoMarginOffset': 0,
                'marginRight': 0,
                'categoryField': 'Year',
                'categoryAxis': {
                    'color': '#fff',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'offset': -20,
                    'minPeriod': 'YYYY',
                    'inside': true,
                },
                'valueAxes': [{
                        'fontSize': 0,
                        'inside': true,
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'minimum': 0,
                        'maximum': 80,
                    }],
                'chartCursor': {
                    'valueLineEnabled': false,
                    'valueLineBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false,
                    'valueZoomable': false,
                    'cursorColor': '#fff',
                    'categoryBalloonDateFormat': 'YYYY',
                    'categoryBalloonColor': '#1dd6d1',
                    'valueLineAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        'type': 'line',
                        'valueField': 'value',
                        'bullet': 'round',
                        'lineColor': '#ffffff',
                        'lineAlpha': 1,
                        'lineThickness': 3,
                        'fillAlphas': 0,
                        'showBalloon': true,
                        'balloon': {
                            'drop': true,
                            'adjustBorderColor': false,
                            'color': '#000',
                            'fillAlphas': 0.2,
                            'bullet': 'round',
                            'bulletBorderAlpha': 1,
                            'bulletSize': 5,
                            'hideBulletsCount': 50,
                            'lineThickness': 2,
                            'type': 'smoothedLine',
                            'useLineColorForBulletBorder': true,
                            'valueField': 'value',
                            'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                        },
                    }],
            });
            var chartLineData1 = [{
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
            AmCharts.makeChart('Widget-line-chart', {
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
                'dataProvider': chartLineData1,
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
                        },
                    }],
            });
            var chartLineData12 = [{
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
            AmCharts.makeChart('Widget-line-chart1', {
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
                'dataProvider': chartLineData1,
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
                        },
                    }],
            });
            var chartSaleData = [{
                    'year': '2001',
                    'bicycles': 55
                }, {
                    'year': '2002',
                    'bicycles': 40
                }, {
                    'year': '2003',
                    'bicycles': 50
                }];
            var chartSaleDataAm = AmCharts.makeChart('Statistics-sale', {
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
                'dataProvider': chartSaleData,
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
            var chartSiteVisitData = [{
                    'year': '1999',
                    'value': 20
                }, {
                    'year': '2000',
                    'value': 25
                }, {
                    'year': '2001',
                    'value': 30
                }, {
                    'year': '2002',
                    'value': 28
                }, {
                    'year': '2003',
                    'value': 25
                }, {
                    'year': '2004',
                    'value': 28
                }, {
                    'year': '2005',
                    'value': 30
                }];
            var chartSiteVisitDataAm = AmCharts.makeChart('sitevisite-chart', {
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
                'dataProvider': chartSiteVisitData,
                'dataDateFormat': 'YYYY',
                'autoMarginOffset': 0,
                'marginRight': 0,
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
                    'categoryBalloonColor': '#899ed4',
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
                        /*'type': 'line',*/
                        'valueField': 'value',
                        'type': 'smoothedLine',
                        'lineColor': '#fff',
                        'fillColors': [
                            '#a389d4',
                            'transparent'
                        ],
                        'lineAlpha': 1,
                        'lineThickness': 5,
                        'fillAlphas': 0.3,
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
                        },
                    }],
            });
            AmCharts.makeChart('Stack-bar', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'year': 'Jan',
                        'visits': 10,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'year': 'Feb',
                        'visits': 13,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'year': 'Mar',
                        'visits': 20,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'year': 'Apr',
                        'visits': 28,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'year': 'May',
                        'visits': 25,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'year': 'Jun',
                        'visits': 4,
                        'color': ['#1de9b6', '#1dc4e9']
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
                        'columnWidth': 0.1,
                        'type': 'column',
                        'valueField': 'visits'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'year',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                }
            });
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
            AmCharts.makeChart('bar-chart', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'game': 'Sport',
                        'visits': 53,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'game': 'Music',
                        'visits': 13,
                        'color': ['#a389d4', '#899ed4']
                    }, {
                        'game': 'Travel',
                        'visits': 30,
                        'color': ['#04a9f5', '#049df5']
                    }, {
                        'game': 'News',
                        'visits': 4,
                        'color': ['#f44236', '#f48f36']
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
                        'lineAlpha': 0,
                        'columnWidth': 0.2,
                        'type': 'column',
                        'valueField': 'visits'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'game',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                }
            });
            AmCharts.makeChart('bar-chart1', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'Average': '0-1',
                        'value': 53,
                        'color': ['#1de9b6', '#1dc4e9']
                    }, {
                        'Average': '1-4',
                        'value': 13,
                        'color': ['#a389d4', '#899ed4']
                    }, {
                        'Average': '8-24',
                        'value': 30,
                        'color': ['#04a9f5', '#049df5']
                    }, {
                        'Average': '>24',
                        'value': 4,
                        'color': ['#f44236', '#f48f36']
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
                        'labelPosition': 'top',
                        'labelText': '[[value]]',
                        'fillColorsField': 'color',
                        'fillAlphas': 0.9,
                        'lineAlpha': 0,
                        'type': 'column',
                        'valueField': 'value'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'Average',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                }
            });
            AmCharts.makeChart('line-chart1', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'dataProvider': [{
                        'year': 'Jan',
                        'value': 65,
                        'value2': 125,
                        'value3': 175,
                    }, {
                        'year': 'Feb',
                        'value': 105,
                        'value2': 80,
                        'value3': 190,
                    }, {
                        'year': 'Mar',
                        'value': 145,
                        'value2': 30,
                        'value3': 160,
                    }, {
                        'year': 'Apr',
                        'value': 105,
                        'value2': 70,
                        'value3': 190,
                    }, {
                        'year': 'May',
                        'value': 145,
                        'value2': 110,
                        'value3': 140,
                    }, {
                        'year': 'Jun',
                        'value': 185,
                        'value2': 150,
                        'value3': 100,
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'false',
                        'lineColor': '#2cd929',
                        'lineThickness': 3,
                        'negativeLineColor': '#2cd929',
                        'type': 'smoothedLine',
                        'valueField': 'value'
                    }, {
                        'id': 'g2',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'false',
                        'lineColor': '#29bdf5',
                        'lineThickness': 3,
                        'negativeLineColor': '#29bdf5',
                        'type': 'smoothedLine',
                        'valueField': 'value2'
                    }, {
                        'id': 'g3',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'false',
                        'lineColor': '#fdda08',
                        'lineThickness': 3,
                        'negativeLineColor': '#fdda08',
                        'type': 'smoothedLine',
                        'valueField': 'value3'
                    }],
                'chartCursor': {
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
                    'fullWidth': true
                },
                'categoryField': 'year',
                'categoryAxis': {
                    'minorGridAlpha': 0.1,
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
            AmCharts.makeChart('line-chart2', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'dataProvider': [{
                        'year': 'Jan',
                        'value': 160,
                        'value2': 85,
                    }, {
                        'year': 'Feb',
                        'value': 140,
                        'value2': 95,
                    }, {
                        'year': 'Mar',
                        'value': 150,
                        'value2': 90,
                    }, {
                        'year': 'Apr',
                        'value': 95,
                        'value2': 125,
                    }, {
                        'year': 'May',
                        'value': 130,
                        'value2': 105,
                    }, {
                        'year': 'Jun',
                        'value': 55,
                        'value2': 120,
                    }, {
                        'year': 'Jul',
                        'value': 75,
                        'value2': 110,
                    }, {
                        'year': 'Aug',
                        'value': 65,
                        'value2': 140,
                    }, {
                        'year': 'Sep',
                        'value': 140,
                        'value2': 100,
                    }, {
                        'year': 'oct',
                        'value': 120,
                        'value2': 95,
                    }, {
                        'year': 'Nov',
                        'value': 110,
                        'value2': 130,
                    }, {
                        'year': 'Dec',
                        'value': 180,
                        'value2': 80,
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'minimum': 0,
                        'maximum': 200,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletBorderAlpha': 2,
                        'bulletAlpha': 1,
                        'bulletSize': 12,
                        'stackable': false,
                        'bulletColor': '#fff',
                        'bulletBorderColor': '#a389d4',
                        'bulletBorderThickness': 3,
                        'lineColor': '#a389d4',
                        'lineThickness': 2,
                        'type': 'smoothedLine',
                        'valueField': 'value'
                    }, {
                        'id': 'g2',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletBorderAlpha': 2,
                        'bulletAlpha': 1,
                        'bulletSize': 12,
                        'stackable': false,
                        'bulletColor': '#fff',
                        'bulletBorderColor': '#1ddcc8',
                        'bulletBorderThickness': 3,
                        'lineColor': '#1ddcc8',
                        'lineThickness': 2,
                        'type': 'smoothedLine',
                        'valueField': 'value2'
                    }],
                'chartCursor': {
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
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
            AmCharts.makeChart('device-chart', {
                'type': 'pie',
                'theme': 'light',
                'labelRadius': -35,
                'labelText': '[[percents]]%',
                'dataProvider': [{
                        'device': 'Tablet',
                        'percentage': 25.9,
                        'color': '#a389d4'
                    }, {
                        'device': 'Mobile',
                        'percentage': 32.5,
                        'color': '#04a9f5'
                    }, {
                        'device': 'Desktop',
                        'percentage': 41.6,
                        'color': '#1de9b6'
                    }],
                'valueField': 'percentage',
                'titleField': 'device',
                'colorField': 'color',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('chart-statistics', {
                'type': 'pie',
                'theme': 'light',
                'dataProvider': [{
                        'title': 'page Views',
                        'value': 24.7,
                        'color': '#1de9b6'
                    }, {
                        'title': 'page Clicks',
                        'value': 36.3,
                        'color': '#a389d4'
                    }, {
                        'title': 'page Likes',
                        'value': 23.5,
                        'color': '#04a9f5'
                    }, {
                        'title': 'page',
                        'value': 15.5,
                        'color': '#ecedef'
                    }],
                'titleField': 'title',
                'valueField': 'value',
                'colorField': 'color',
                'labelRadius': 5,
                'radius': '42%',
                'innerRadius': '90%',
                'labelText': '',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('chart-percent', {
                'type': 'pie',
                'theme': 'light',
                'dataProvider': [{
                        'title': 'page done',
                        'value': 23,
                        'color': '#1de9b6'
                    }, {
                        'title': 'page progress',
                        'value': 14,
                        'color': '#f4c22b'
                    }, {
                        'title': 'page outstanding',
                        'value': 35,
                        'color': '#a389d4'
                    }, {
                        'title': 'page started',
                        'value': 28,
                        'color': '#04a9f5'
                    }],
                'titleField': 'title',
                'valueField': 'value',
                'colorField': 'color',
                'labelRadius': 5,
                'radius': '42%',
                'innerRadius': '91%',
                'labelText': '',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('chart-percent1', {
                'type': 'pie',
                'theme': 'light',
                'dataProvider': [{
                        'title': 'Main Wallet',
                        'value': 33.33,
                        'color': '#1de9b6'
                    }, {
                        'title': 'Travel',
                        'value': 33.33,
                        'color': '#a389d4'
                    }, {
                        'title': 'Food & Drink',
                        'value': 33.33,
                        'color': '#04a9f5'
                    }],
                'titleField': 'title',
                'valueField': 'value',
                'colorField': 'color',
                'labelRadius': 5,
                'radius': '42%',
                'innerRadius': '89%',
                'labelText': '',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('chart-activity', {
                'type': 'pie',
                'theme': 'light',
                'dataProvider': [{
                        'title': 'Max',
                        'value': 550,
                        'color': '#1de9b6'
                    }, {
                        'title': 'Min',
                        'value': 237,
                        'color': '#ecedef'
                    }],
                'titleField': 'title',
                'valueField': 'value',
                'colorField': 'color',
                'labelRadius': 5,
                'radius': '42%',
                'innerRadius': '95%',
                'labelText': '',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('chart-sale', {
                'type': 'pie',
                'theme': 'light',
                'dataProvider': [{
                        'title': 'Max',
                        'value': 500,
                        'color': '#1de9b6'
                    }, {
                        'title': 'Min',
                        'value': 237,
                        'color': '#fff'
                    }],
                'titleField': 'title',
                'valueField': 'value',
                'colorField': 'color',
                'labelRadius': 5,
                'radius': '42%',
                'innerRadius': '91%',
                'labelText': '',
                'balloon': {
                    'fixedPosition': true
                },
            });
            AmCharts.makeChart('sales-render', {
                'type': 'radar',
                'theme': 'light',
                'dataProvider': [{
                        'Month': 'Jan',
                        'visit': 100,
                        'sales': 80
                    }, {
                        'Month': 'Feb',
                        'visit': 60,
                        'sales': 90
                    }, {
                        'Month': 'Mar',
                        'visit': 100,
                        'sales': 80
                    }, {
                        'Month': 'Apr',
                        'visit': 100,
                        'sales': 110
                    }, {
                        'Month': 'May',
                        'visit': 100,
                        'sales': 40
                    }, {
                        'Month': 'Jun',
                        'visit': 80,
                        'sales': 115
                    }],
                'valueAxes': [{
                        'axisTitleOffset': 20,
                        'minimum': 0,
                        'axisAlpha': 0.15
                    }, {
                        'id': 'v2',
                        'axisTitleOffset': 20,
                        'minimum': 0,
                        'axisAlpha': 0,
                        'inside': true
                    }],
                'startDuration': 2,
                'graphs': [{
                        'balloonText': '[[value]] visit of per year',
                        'bullet': 'false',
                        'fillAlphas': 1,
                        'lineColor': ['#a389d4', '#899ed4'],
                        'valueField': 'visit'
                    },
                    {
                        'balloonText': '[[value]] sales of per year',
                        'bullet': 'false',
                        'valueField': 'sales',
                        'fillAlphas': 1,
                        'lineColor': ['#1de9b6', '#1dc4e9'],
                        'valueAxis': 'v2'
                    }
                ],
                'categoryField': 'Month',
            });
            AmCharts.makeChart('webchart', {
                'type': 'radar',
                'theme': 'light',
                'dataProvider': [{
                        'direction': 'Sales',
                        'value': 15
                    }, {
                        'direction': 'Visits',
                        'value': 13
                    }, {
                        'direction': 'Views',
                        'value': 11.1
                    }, {
                        'direction': 'Clicks',
                        'value': 15
                    }],
                'valueAxes': [{
                        'gridType': 'circles',
                        'minimum': 0,
                        'autoGridCount': true,
                        'axisAlpha': 0,
                        'fillAlpha': 0.05,
                        'fillColor': '#eff1f4',
                        'gridAlpha': 0.08,
                        'position': 'center'
                    }],
                'startDuration': 1,
                'graphs': [{
                        'balloonText': '[[category]]: [[value]] m/s',
                        'bullet': 'false',
                        'fillAlphas': 1,
                        'lineColor': ['#1de9b6', '#1dc4e9'],
                        'valueField': 'value'
                    }],
                'categoryField': 'direction',
            });
            AmCharts.makeChart('Statistics-line', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 10,
                'marginRight': 0,
                'dataProvider': [{
                        'year': '2014',
                        'value': 30
                    }, {
                        'year': '2015',
                        'value': 60
                    }, {
                        'year': '2016',
                        'value': 50
                    }, {
                        'year': '2017',
                        'value': 70
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'minimum': 0,
                        'maximum': 100,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletSize': 5,
                        'lineColor': '#1dc4e9',
                        'lineThickness': 5,
                        'valueField': 'value'
                    }],
                'chartCursor': {
                    'categoryBalloonDateFormat': 'YYYY',
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
                    'fullWidth': true
                },
                'dataDateFormat': 'YYYY',
                'categoryField': 'year',
                'categoryAxis': {
                    'minPeriod': 'YYYY',
                    'parseDates': true,
                    'minorGridAlpha': 0.1,
                    'gridColor': '#fff',
                    'minorGridEnabled': true
                },
            });
            var chartCommanData = [{
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
                    'value': 100
                }, {
                    'year': '2004',
                    'value': 70
                }];
            var chartCommanDataAm = AmCharts.makeChart('command-card-chart1', {
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
                'dataProvider': chartCommanData,
                'dataDateFormat': 'YYYY',
                'autoMarginOffset': 0,
                'marginRight': 0,
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
                    'categoryBalloonColor': '#1de9b6',
                    'valueZoomable': false,
                    'valueLineAlpha': 0
                },
                'valueAxes': [{
                        'fontSize': 0,
                        'inside': true,
                        'gridAlpha': 0,
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'minimum': 0,
                        'maximum': 150,
                    }],
                'graphs': [{
                        'id': 'g1',
                        /*'type': 'line',*/
                        'valueField': 'value',
                        'type': 'smoothedLine',
                        'lineColor': '#1de9b6',
                        'fillColors': [
                            '#1de9b6',
                            '#fff',
                            '#fff'
                        ],
                        'lineAlpha': 1,
                        'lineThickness': 5,
                        'fillAlphas': 0.3,
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
                        },
                    }],
            });
            var chartCallData = [{
                    'year': '2000',
                    'value': 55
                }, {
                    'year': '2001',
                    'value': 45
                }, {
                    'year': '2002',
                    'value': 60
                }, {
                    'year': '2003',
                    'value': 80
                }, {
                    'year': '2004',
                    'value': 70
                }, {
                    'year': '2005',
                    'value': 55
                }];
            var chartCallDataAm = AmCharts.makeChart('call-chart', {
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
                'dataProvider': chartCallData,
                'autoMarginOffset': 0,
                'marginRight': 0,
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
                    'categoryBalloonColor': '#95ead5',
                    'valueLineAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        /*'type': 'line',*/
                        'type': 'smoothedLine',
                        'valueField': 'value',
                        'fillColors': [
                            '#1de9b6',
                            '#1dc4e9'
                        ],
                        'lineAlpha': 0,
                        'fillAlphas': 1,
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
                        },
                    },],
            });
            var chartData = [{
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
            var chart = AmCharts.makeChart('Earnings-chart', {
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
                'dataProvider': chartData,
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
            $.plot($('#power-card-chart'), [{
                    data: [
                        [0, 50],
                        [20, 70],
                        [35, 45],
                        [50, 73],
                        [65, 85],
                    ],
                    color: '#1dc4e9',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3,
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true
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
                    max: 90,
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
            $.plot($('#processed-bar'), [{
                    data: [
                        [0, 30],
                        [20, 45],
                        [50, 30],
                        [80, 45],
                        [100, 30]
                    ],
                    color: '#1dc4e9',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 0,
                        fillColor: {
                            colors: [{
                                    opacity: 0.9
                                },
                                {
                                    opacity: 0.1
                                }
                            ]
                        },
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
            setTimeout(function () {
                chartCallDataAm.zoomToIndexes(1, chartCallData.length - 2);
                chartCommanDataAm.zoomToIndexes(1, chartCommanData.length - 2);
                chartSiteVisitDataAm.zoomToIndexes(1, chartSiteVisitData.length - 5);
                chartSaleDataAm.zoomToIndexes(1, chartSaleData.length - 2);
            }, 400);
        }, 500);
    };
    WgetChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wget-charts',
            template: __webpack_require__(/*! ./wget-charts.component.html */ "./src/app/demo/widget/wget-charts/wget-charts.component.html"),
            styles: [__webpack_require__(/*! ./wget-charts.component.scss */ "./src/app/demo/widget/wget-charts/wget-charts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WgetChartsComponent);
    return WgetChartsComponent;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-charts/wget-charts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/wget-charts/wget-charts.module.ts ***!
  \***************************************************************/
/*! exports provided: WgetChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetChartsModule", function() { return WgetChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wget_charts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-charts-routing.module */ "./src/app/demo/widget/wget-charts/wget-charts-routing.module.ts");
/* harmony import */ var _wget_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wget-charts.component */ "./src/app/demo/widget/wget-charts/wget-charts.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var WgetChartsModule = /** @class */ (function () {
    function WgetChartsModule() {
    }
    WgetChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _wget_charts_routing_module__WEBPACK_IMPORTED_MODULE_3__["WgetChartsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_wget_charts_component__WEBPACK_IMPORTED_MODULE_4__["WgetChartsComponent"]]
        })
    ], WgetChartsModule);
    return WgetChartsModule;
}());



/***/ })

}]);
//# sourceMappingURL=wget-charts-wget-charts-module.js.map