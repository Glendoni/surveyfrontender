(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wget-statistic-wget-statistic-module"],{

/***/ "./src/app/demo/widget/wget-statistic/wget-statistic-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/widget/wget-statistic/wget-statistic-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WgetStatisticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetStatisticRoutingModule", function() { return WgetStatisticRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wget_statistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-statistic.component */ "./src/app/demo/widget/wget-statistic/wget-statistic.component.ts");




var routes = [
    {
        path: '',
        component: _wget_statistic_component__WEBPACK_IMPORTED_MODULE_3__["WgetStatisticComponent"]
    }
];
var WgetStatisticRoutingModule = /** @class */ (function () {
    function WgetStatisticRoutingModule() {
    }
    WgetStatisticRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WgetStatisticRoutingModule);
    return WgetStatisticRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-statistic/wget-statistic.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo/widget/wget-statistic/wget-statistic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- [ card range ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"daily-sales\" cardTitle=\"Daily Sales\" [options]=\"false\">\n      <div class=\"row d-flex align-items-center\">\n        <div class=\"col-9\">\n          <h3 class=\"f-w-300 d-flex align-items-center m-b-0\"><i class=\"feather icon-arrow-up text-c-green f-30 m-r-5\"></i>$ 249.95</h3>\n        </div>\n\n        <div class=\"col-3 text-right\">\n          <p class=\"m-b-0\">67%</p>\n        </div>\n      </div>\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Monthly Sales\" cardClass=\"Monthly-sales\" [options]=\"false\">\n      <div class=\"row d-flex align-items-center\">\n        <div class=\"col-9\">\n          <h3 class=\"f-w-300 d-flex align-items-center  m-b-0\"><i class=\"feather icon-arrow-down text-c-red f-30 m-r-5\"></i>$ 2.942.32</h3>\n        </div>\n        <div class=\"col-3 text-right\">\n          <p class=\"m-b-0\">36%</p>\n        </div>\n      </div>\n      <div class=\"progress m-t-30\" style=\"height: 7px;\">\n        <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card cardTitle=\"Sales\" cardClass=\"Monthly-daily\" [options]=\"false\">\n      <h3 class=\"f-w-300\">$17,400</h3>\n      <span class=\"d-block  text-muted text-uppercase\">Total Revenue</span>\n      <div class=\"row\">\n        <div class=\"col-6 m-t-20\">\n          <h6 class=\"text-muted\">472</h6>\n          <h6 class=\" text-muted f-w-300 m-b-0\">Deals Added<span class=\"float-right f-w-400\">69%</span></h6>\n          <div class=\"progress m-t-10\" style=\"height: 7px;\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 69%;\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-6 m-t-20\">\n          <h6 class=\"text-muted\">89</h6>\n          <h6 class=\" text-muted f-w-300 m-b-0\">Deals Won<span class=\"float-right f-w-400\">58%</span></h6>\n          <div class=\"progress m-t-10\" style=\"height: 7px;\">\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 58%;\" aria-valuenow=\"58\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n\n  <!-- [ card range1 ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card filter-bar\">\n      <div class=\"card-header\">\n        <h5>Filter</h5>\n        <span class=\"d-block m-t-5\">Distance Filter</span>\n      </div>\n      <div class=\"card-block\">\n        <h3 class=\"f-w-300\">4 - 25 Miles</h3>\n        <div class=\"row m-t-30\">\n          <div class=\"col-6 p-r-0\">\n            <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\">add friend</a>\n          </div>\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-zap f-30 text-c-green\"></i>\n          </div>\n          <div class=\"col\">\n            <h3 class=\"f-w-300\">235</h3>\n            <span class=\"d-block text-uppercase\">total ideas</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-map-pin f-30 text-c-blue\"></i>\n          </div>\n          <div class=\"col\">\n            <h3 class=\"f-w-300\">26</h3>\n            <span class=\"d-block text-uppercase\">total locations</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-sun f-40 text-c-green\"></i>\n          </div>\n          <div class=\"col\">\n            <h2 class=\"f-w-300\">26°<span class=\" m-r-3 f-14 text-muted\">Sunny</span></h2>\n            <span class=\"d-block text-muted\">Monday 12:00 PM</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-sm-12 pt-2 pb-1\">\n            <span class=\"\">Wind</span>\n            <span class=\"float-right text-muted \">ESE 14 mph</span>\n          </div>\n          <div class=\"col-sm-12 pt-2 pb-1\">\n            <span class=\"\">Humidity</span>\n            <span class=\"float-right text-muted \">78%</span>\n          </div>\n          <div class=\"col-sm-12 pt-2\">\n            <span class=\"\">Pressure</span>\n            <span class=\"float-right text-muted \">27.64 in</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ card range1 ] end -->\n\n  <!-- [ card range2 ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg2\">\n      <div class=\"card-block\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-sun f-40 text-white\"></i>\n          </div>\n          <div class=\"col\">\n            <h2 class=\"f-w-300 text-white\">26°<span class=\" m-r-3 f-14 text-white\">Sunny</span></h2>\n            <span class=\"d-block text-white\">Monday 12:00 PM</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card table-card\">\n      <div class=\"row-table\">\n        <div class=\"col-auto theme-bg text-white p-t-50 p-b-50\">\n          <i class=\"feather icon-package f-30\"></i>\n        </div>\n        <div class=\"col text-center\">\n          <span class=\"text-uppercase d-block m-b-10\">New Products</span>\n          <h3 class=\"f-w-300\">235</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card rides-bar\">\n      <div class=\"card-block\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-shopping-cart f-30 text-white rides-icon\"></i>\n          </div>\n          <div class=\"col\">\n            <h3 class=\"f-w-300\">383 Rides</h3>\n            <span class=\"d-block\">Last week 295 <strong class=\"text-c-green f-w-300\">(+88)</strong></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ card range2 ] end -->\n\n  <!-- [ card range3 ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg visitor\">\n      <div class=\"card-block text-center\">\n        <img class=\"img-female\" src=\"assets/images/user/user-1.png\" alt=\"visitor-user\">\n        <h5 class=\"text-white m-0\">TOTAL VISITORS</h5>\n        <h3 class=\"text-white m-t-10 f-w-300\">235</h3>\n        <span class=\"text-white\">20% More than last Month</span>\n        <img class=\"img-men\" src=\"assets/images/user/user-2.png\" alt=\"visitor-user\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card impression\">\n      <div class=\"card-block\">\n        <div class=\"row d-flex align-items-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-map-pin f-30 text-c-blue\"></i>\n          </div>\n          <div class=\"col text-right\">\n            <h3 class=\"f-w-300\">235</h3>\n            <h5 class=\"d-block text-uppercase text-muted\">Impression</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <h3 class=\"text-white f-w-300 m-b-10\">598</h3>\n            <span class=\"text-white text-uppercase\">Pending Users</span>\n          </div>\n          <div class=\"col text-right\">\n            <span class=\"text-white d-block  p-1\">Last Month</span>\n            <span class=\"text-white d-block  p-1\">204</span>\n            <span class=\"text-white d-flex align-items-center justify-content-end  p-1\"><i class=\"fas fa-caret-up text-white f-26 m-r-10\"></i> 56.68%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ card range3 ] end -->\n\n  <!-- [ card range4 ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <i class=\"feather icon-shopping-cart f-30 text-c-green\"></i>\n            <h6 class=\"m-t-50 m-b-0\">Last week’s orders</h6>\n          </div>\n          <div class=\"col text-right\">\n            <h3 class=\"text-c-green f-w-300\">589</h3>\n            <span class=\"text-muted d-block\">New Order</span>\n            <span class=\"badge theme-bg text-white m-t-20\">1434</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-block\">\n        <h4 class=\"text-white text-uppercase text-center\">Savings Account</h4>\n        <div class=\"row m-t-10 p-t-20\">\n          <div class=\"col text-center\">\n            <h4 class=\"text-white f-w-300\">$2,456.78</h4>\n            <p class=\"text-white d-block\">Balance</p>\n          </div>\n\n          <div class=\"col text-center\">\n            <h4 class=\"text-white  f-w-300\">$867.00</h4>\n            <p class=\"text-white d-block\">Expenses</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card profit-bar\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <h5 class=\"f-w-300\">Total Profit</h5>\n            <h3 class=\"text-c-green f-w-400 m-t-10\">$1,783</h3>\n          </div>\n          <div class=\"col\">\n            <i class=\"fas fa-money-bill-alt f-20 text-white float-right\"></i>\n          </div>\n        </div>\n        <h6 class=\"m-t-20 text-muted\"><span class=\"badge theme-bg  text-white m-r-10\">+11%</span>From Previous Month </h6>\n      </div>\n    </div>\n  </div>\n  <!-- [ card range4 ] end -->\n\n  <!-- [ card range5 ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg2 assets-value\">\n      <div class=\"bg-img\"></div>\n      <div class=\"card-block  text-center\">\n        <i class=\"fas fa-chart-line text-white f-30 m-b-20\"></i>\n        <h5 class=\"text-white m-b-12\">Total Growth</h5>\n        <h3 class=\"text-white f-w-300\">2,80,500</h3>\n        <span class=\"text-white\">80% More than last Month</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Timer</h5>\n      </div>\n      <div class=\"card-block text-center\">\n        <h2 class=\"f-w-300 m-b-30 text-white\">00:24:38</h2>\n        <i class=\"feather icon-play f-50 text-white d-block m-b-25\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg assets-value\">\n      <div class=\"bg-img\"></div>\n      <div class=\"card-block  text-center\">\n        <i class=\"fas fa-users f-50 text-white m-b-20\"></i>\n        <h5 class=\"text-white m-b-15\">Total Assets</h5>\n        <h3 class=\"text-white f-w-300\">3,85,600</h3>\n        <span class=\"text-white\">60% More than last Month</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ card range5 ] end -->\n\n  <!-- [ overdue-task section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Overdue Tasks</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\"f-w-300 m-0\">34</h2>\n            <span class=\"text-muted\">Last Week 60%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-red f-w-400\">10%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ overdue-task section ] end -->\n\n  <!-- [ task-to-do section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Tasks to Do</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\"f-w-300 m-0\">25</h2>\n            <span class=\"text-muted\">Last Week 40%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-green f-w-400\">30%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ task-to-do section ] end -->\n\n  <!-- [ Complete-Task section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Completed Task</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\"f-w-300 m-0\">19</h2>\n            <span class=\"text-muted\">Last Week 60%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-red f-w-400\">25%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Complete-Task section ] end -->\n\n  <!-- [ Register-user section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card user-card\">\n      <div class=\"card-block\">\n        <h5 class=\"m-b-15\">Register User</h5>\n        <h4 class=\"f-w-300\">1205</h4>\n        <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">20%</label>Monthly Increase</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ Register-user section ] end -->\n\n  <!-- [ Daily-user section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card user-card\">\n      <div class=\"card-block\">\n        <h5 class=\"f-w-400 m-b-15\">Daily User</h5>\n        <h4 class=\"f-w-300\">467</h4>\n        <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">10%</label>Weekly Increase</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ Daily-user section ] end -->\n\n  <!-- [ Premium-user section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card user-card\">\n      <div class=\"card-block\">\n        <h5 class=\"f-w-400 m-b-15\">Premium User</h5>\n        <h4 class=\"f-w-300\">346</h4>\n        <span class=\"text-muted\"><label class=\"label theme-bg text-white f-12 f-w-400\">50%</label>Yearly Increase</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ Premium-user section ] end -->\n\n  <!-- [ Project-rating section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Project Rating</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-6\">\n            <h2 class=\"f-w-300 d-flex align-items-center float-left\">4.3 <i class=\"fas fa-star f-12 m-l-10 text-c-yellow\"></i></h2>\n          </div>\n          <div class=\"col-6\">\n            <h6 class=\"f-w-300 d-flex  align-items-center float-right\">0.4 <i class=\"fas fa-caret-up text-c-green f-24 m-l-10\"></i></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Project-rating section ] end -->\n\n  <!-- [ Total-Charge section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5>Your Total Charges</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-6\">\n            <h3 class=\"f-w-300 m-t-20\">$894.39</h3>\n            <span>August 31,2017</span>\n          </div>\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\">Pay now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Total-Charge section ] end -->\n\n  <!-- [ Growth-Rate section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5>Growth Rate</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-6\">\n            <h2 class=\"f-w-300 m-t-20\">48%</h2>\n          </div>\n          <div class=\"col-6 text-right\">\n            <i class=\"fas fa-chart-pie f-30 text-c-green\"></i>\n          </div>\n        </div>\n        <span class=\"text-muted text-center d-block\">From Last Month</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ Growth-Rate section ] end -->\n\n  <!-- [ Total-Leads section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"text-center\">Total Leads</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <h3 class=\"f-w-300 m-t-20\">$59,48<i class=\"fas fa-caret-up text-c-green f-26 m-l-10\"></i></h3>\n            <span>EARNINGS</span>\n          </div>\n          <div class=\"col text-right\">\n            <i class=\"fas fa-chart-pie f-30 text-c-purple\"></i>\n          </div>\n        </div>\n        <div class=\"leads-progress mt-3\">\n          <h6 class=\"mb-3 text-center\">Organic <span class=\"ml-4\">Purchesed</span></h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 35%; height:10px;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h6 class=\"text-muted f-w-300 mt-4\">Organic Leads <span class=\"float-right\">340</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4\">Purchesed Leads <span class=\"float-right\">150</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4\">Blocked Leads <span class=\"float-right\">120</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4 mb-0\">Buy Leads <span class=\"float-right\">245</span></h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Total-Leads section ] end -->\n\n  <!-- [ Active-visitor section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card Active-visitor\">\n      <div class=\"card-block text-center\">\n        <h5 class=\"mb-4\">Active Visitor</h5>\n        <i class=\"fas fa-user-friends f-30 text-c-green\"></i>\n        <h2 class=\"f-w-300 mt-3\">1,285</h2>\n        <span class=\"text-muted\">Active Visit On Sites</span>\n        <div class=\"progress mt-4 m-b-40\">\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 75%; height:7px;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <div class=\"row card-active\">\n          <div class=\"col-md-4 col-6\">\n            <h4>52%</h4>\n            <span class=\"text-muted\">Desktop</span>\n          </div>\n          <div class=\"col-md-4 col-6\">\n            <h4>80%</h4>\n            <span class=\"text-muted\">Mobile</span>\n          </div>\n          <div class=\"col-md-4 col-12\">\n            <h4>68%</h4>\n            <span class=\"text-muted\">Tablet</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Active-visitor section ] end -->\n\n  <!-- [ Total-sales section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"text-center\">Total Leads</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <h3 class=\"f-w-300 m-t-20\">$73,48<i class=\"fas fa-caret-up text-c-green f-26 m-l-10\"></i></h3>\n            <span>EARNINGS</span>\n          </div>\n          <div class=\"col text-right\">\n            <i class=\"fas fa-chart-line f-30 text-c-purple\"></i>\n          </div>\n        </div>\n        <div class=\"leads-progress mt-3\">\n          <h6 class=\"mb-3 text-center\">Quality <span class=\"ml-4\">Delivery</span></h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 35%; height:10px;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h6 class=\"text-muted f-w-300 mt-4\">Total Cost <span class=\"float-right\">340</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4\">Quality Of Product <span class=\"float-right\">65%</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4\">Delivery Period <span class=\"float-right\">4 Days</span></h6>\n          <h6 class=\"text-muted f-w-300 mt-4 mb-0\">Buy Product <span class=\"float-right\">245</span></h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Total-sales section ] end -->\n\n  <!-- [ protfolio section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"mb-4\">Your portfolio Balance</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h3 class=\"f-w-300\">$193,700</h3>\n          </div>\n          <div class=\"col-auto\">\n            <span class=\"text-c-green f-18\">15% <i class=\"feather icon-arrow-up-right f-20\"></i></span>\n          </div>\n        </div>\n        <div class=\"row m-t-25\">\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn btn-primary  text-uppercase btn-block p-15 f-14\">Deposit</a>\n          </div>\n          <div class=\"col-6 p-l-0\">\n            <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">withdraw</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ protfolio section ] end -->\n\n  <!-- [ Profit section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h4 class=\"text-white\">Profit</h4>\n          </div>\n          <div class=\"col\">\n            <h2 class=\"text-white text-right f-w-300\">$3,764</h2>\n          </div>\n        </div>\n        <div class=\"m-t-50\">\n          <h6 class=\"text-white\">Monthly Profit <span class=\"float-right text-white\">$340</span></h6>\n          <h6 class=\"text-white mt-3\">Weekly Profit <span class=\"float-right text-whitw\">$150</span></h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Profit section ] end -->\n\n  <!-- [ Review-emotion section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"mb-4\">Review With Emotions</h5>\n        <div class=\"review-emotion mb-3\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col\">\n              <span><i class=\"far fa-smile text-c-green f-20\"></i></span>\n            </div>\n            <div class=\"col-auto\">\n              <h5 class=\"m-0\">235</h5>\n            </div>\n            <div class=\"col text-right\">\n              <span>Google Chrome</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"review-emotion mb-3\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col\">\n              <span><i class=\"fas fa-smile text-c-purple f-20\"></i></span>\n            </div>\n            <div class=\"col-auto\">\n              <h5 class=\"m-0\">95</h5>\n            </div>\n            <div class=\"col text-right\">\n              <span>Mozilla Firefox</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"review-emotion mb-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col\">\n              <span><i class=\"far fa-smile text-c-red f-20\"></i></span>\n            </div>\n            <div class=\"col-auto\">\n              <h5 class=\"m-0\">18</h5>\n            </div>\n            <div class=\"col text-right\">\n              <span>Internet Explore</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Review-emotion section ] end -->\n\n  <!-- [ Total-Revenue section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg card-Revenue\">\n      <div class=\"card-block\">\n        <h5 class=\"text-white\">Total Revenue</h5>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <i class=\"feather icon-file-text f-30 text-white\"></i>\n          </div>\n          <div class=\"col\">\n            <div class=\"float-right text-white mr-4\">\n              <h6 class=\"text-white mb-2\">This Month</h6>\n              <span class=\"d-block mb-2\">$ 2018</span>\n              <span>+175 (22.5%)</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Total-Revenue section ] end -->\n\n  <!-- [ Invoices section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg Invoice-bar\">\n      <div class=\"card-block\">\n        <div class=\"invoice-lable text-right\">\n          <span><label class=\"label f-14\">monthly</label></span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-auto\">\n            <i class=\"fas fa-file-alt f-30 text-white\"></i>\n          </div>\n          <div class=\"col\">\n            <h5 class=\"text-white\">Invoices</h5>\n            <h3 class=\"text-white\">450</h3>\n            <div class=\"progress mt-3\">\n              <div class=\"progress-bar bg-white\" role=\"progressbar\" style=\"width: 50%; height:7px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Invoices section ] end -->\n\n  <!-- [ location-sale section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg location-sale\">\n      <div class=\"card-block\">\n        <i class=\"card-icon fas fa-map-marker-alt text-c-purple f-30\"></i>\n        <h5 class=\"text-white mt-3\">Location Sale <span class=\"float-right\">23% <i class=\"fas fa-arrow-down text-white\"></i></span></h5>\n        <h3 class=\"text-white d-flex align-items-center justify-content-between m-t-50 mb-0\">$ 1372,05 <span class=\"float-right f-16\">+ $23,13 (12%)</span></h3>\n      </div>\n    </div>\n  </div>\n  <!-- [ location-sale section ] end -->\n\n  <!-- [ Impressions section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-Impression\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h5 class=\"mb-3\">Impression</h5>\n            <h3 class=\"mb-2 f-w-300\">1,563</h3>\n            <span class=\"text-muted\">May 23 - June 01 (2017)</span>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-eye text-white f-20\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-Impression\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h5 class=\"mb-3\">Sales Prediction</h5>\n            <h3 class=\"mb-2 f-w-300\">2,013</h3>\n            <span class=\"text-muted\">July 01 - June 01 (2016)</span>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-dolly text-white f-20\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-Impression\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h5 class=\"mb-3\">Email Sent</h5>\n            <h3 class=\"mb-2 f-w-300\">1,563</h3>\n            <span class=\"text-muted\">Sep 23 - Nov 06 (2015)</span>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fas fa-envelope text-white f-20\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Impression section ] end -->\n\n  <!-- [ winner section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-customer\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h2 class=\"mb-2 f-w-300\">3210</h2>\n            <h5 class=\"text-muted mb-0\">Happy Customer</h5>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"feather icon-users f-30 text-white theme-bg\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-customer\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h2 class=\"mb-2 f-w-300\">432</h2>\n            <h5 class=\"text-muted mb-0\">Award Winning</h5>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"feather icon-award f-30 text-white theme-bg2\"></i>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-customer\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h2 class=\"mb-2 f-w-300\">4230</h2>\n            <h5 class=\"text-muted mb-0\">Project Completed</h5>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"feather icon-check-square f-30 text-white theme-bg\"></i>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ winner section ] end -->\n\n  <!-- [ visitor-ticket section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg2 ticket-customer\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <h2 class=\"text-white mb-0 f-w-300\">286</h2>\n          </div>\n          <div class=\"col\">\n            <span class=\"text-white d-block\">+134</span>\n            <span class=\"text-white\">Since last week</span>\n          </div>\n        </div>\n        <h5 class=\"text-white f-w-300 mt-4\">Ticket Answered</h5>\n        <i class=\"fas fa-file-alt text-white f-70\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block ticket-visitor\">\n        <h3 class=\"mb-2\">7210</h3>\n        <h5 class=\"text-muted f-w-300 mb-4\">Visitors</h5>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 72%;height:13px;\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\">72%</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg2\">\n      <div class=\"card-block customer-visitor\">\n        <h2 class=\"text-white text-right mt-2 f-w-300\">3254</h2>\n        <span class=\"text-white text-right d-block\">Customers</span>\n        <i class=\"fas fa-globe text-white\"></i>\n      </div>\n    </div>\n  </div>\n  <!-- [ visitor-ticket section ] end -->\n\n  <!-- [ social-media section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-social\">\n      <div class=\"card-block border-bottom\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <i class=\"fab fa-facebook-f text-primary f-36\"></i>\n          </div>\n          <div class=\"col text-right\">\n            <h3>12,281</h3>\n            <h5 class=\"text-c-green mb-0\">+7.2% <span class=\"text-muted\">Total Likes</span></h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center card-active\">\n          <div class=\"col-6\">\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>35,098</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>350</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:45%;height:6px;\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-social\">\n      <div class=\"card-block border-bottom\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <i class=\"fab fa-twitter text-c-blue f-36\"></i>\n          </div>\n          <div class=\"col text-right\">\n            <h3>11,200</h3>\n            <h5 class=\"text-c-purple mb-0\">+6.2% <span class=\"text-muted\">Total Likes</span></h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center card-active\">\n          <div class=\"col-6\">\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>34,185</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-green\" role=\"progressbar\" style=\"width:40%;height:6px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>800</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:70%;height:6px;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-social\">\n      <div class=\"card-block border-bottom\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <i class=\"fab fa-google-plus-g text-c-red f-36\"></i>\n          </div>\n          <div class=\"col text-right\">\n            <h3>10,500</h3>\n            <h5 class=\"text-c-blue mb-0\">+5.9% <span class=\"text-muted\">Total Likes</span></h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center card-active\">\n          <div class=\"col-6\">\n            <h6 class=\"text-center m-b-10\"><span class=\"text-muted m-r-5\">Target:</span>25,998</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:80%;height:6px;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <h6 class=\"text-center  m-b-10\"><span class=\"text-muted m-r-5\">Duration:</span>900</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:50%;height:6px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ social-media section ] end -->\n\n  <!-- [ online-order section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card Online-Order\">\n      <div class=\"card-block\">\n        <h5>Online Orders</h5>\n        <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">Delivery Orders<span class=\"float-right f-18 text-c-green\">237  /  400</span></h6>\n        <div class=\"progress mt-3\">\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:65%;height:6px;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <span class=\"text-muted mt-2 d-block\">37% Done</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card Online-Order\">\n      <div class=\"card-block\">\n        <h5>Pending  Orders</h5>\n        <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">pending Orders<span class=\"float-right f-18 text-c-purple\">100  /  500</span></h6>\n        <div class=\"progress mt-3\">\n          <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:50%;height:6px;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <span class=\"text-muted mt-2 d-block\">20% pending</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card Online-Order\">\n      <div class=\"card-block\">\n        <h5>Return  Orders</h5>\n        <h6 class=\"text-muted d-flex align-items-center justify-content-between m-t-30\">Return Orders<span class=\"float-right f-18 text-c-blue\">50  /  400</span></h6>\n        <div class=\"progress mt-3\">\n          <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:40%;height:6px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <span class=\"text-muted mt-2 d-block\">10% Return</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ online-order section ] end -->\n\n  <!-- [ affilate-offers section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card affilate-offers\">\n      <div class=\"card-block\">\n        <h5>Affiliate <span class=\"float-right\"><i class=\"card-icon fas fa-donate f-24\"></i></span></h5>\n        <h2 class=\"mt-4 mb-0 d-flex align-items-center justify-content-between f-w-300\">3,789 <label class=\"label theme-bg text-white f-12 f-w-400 float-right\">4+</label></h2>\n        <h6 class=\"d-flex align-items-center justify-content-center  mt-3\">From First week 13.5% <i class=\"fas fa-caret-up text-c-green f-26 m-l-10\"></i></h6>\n      </div>\n    </div>\n  </div>\n  <!-- [ affilate-offers section ] end -->\n\n  <!-- [ Team-leader section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block team-leader\">\n        <ngb-carousel [showNavigationArrows]=\"false\" [interval]=\"2000\">\n          <ng-template ngbSlide>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:85px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\">\n              </div>\n              <div class=\"col\">\n                <h5 class=\"mb-3\">Jarvis Pepperspray</h5>\n                <span class=\"f-w-300 text-muted mb-3 d-block\">Separated they live in Bookmarksgrove..</span>\n                <span>Team leader</span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template ngbSlide>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:85px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\">\n              </div>\n              <div class=\"col\">\n                <h5 class=\"mb-3\">Jarvis Pepperspray</h5>\n                <span class=\"f-w-300 text-muted mb-3 d-block\">Separated they live in Bookmarksgrove..</span>\n                <span>Team leader</span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template ngbSlide>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:85px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\">\n              </div>\n              <div class=\"col\">\n                <h5 class=\"mb-3\">Jarvis Pepperspray</h5>\n                <span class=\"f-w-300 text-muted mb-3 d-block\">Separated they live in Bookmarksgrove..</span>\n                <span>Team leader</span>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-carousel>\n      </div>\n    </div>\n  </div>\n  <!-- [ Team-leader section ] end -->\n\n  <!-- [ affilate-offers section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card affilate-offers\">\n      <div class=\"card-block\">\n        <h5>Offers<span class=\"float-right\"><i class=\"card-icon fas fa-hand-holding-usd f-24\"></i></span></h5>\n        <h2 class=\"mt-4 mb-0 d-flex align-items-center justify-content-between f-w-300\">2,586 <label class=\"label theme-bg text-white f-12 f-w-400 float-right\">10+</label></h2>\n        <h6 class=\"d-flex align-items-center justify-content-center mt-3\">From Last week 15.5% <i class=\"fas fa-caret-up text-c-green f-26 m-l-10\"></i></h6>\n      </div>\n    </div>\n  </div>\n  <!--[ affilate-offers section ] end -->\n\n  <!-- [ earning-day section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg earning-date\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Earnings</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"bd-example bd-example-tabs\">\n          <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"earnings-mon\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-mon\">\n              <h2 class=\"text-white mb-3 f-w-300\">359,234<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-tue\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-tue\">\n              <h2 class=\"text-white mb-3 f-w-300\">222,586<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-wed\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-wed\">\n              <h2 class=\"text-white mb-3 f-w-300\">859,745<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-thu\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-thu\">\n              <h2 class=\"text-white mb-3 f-w-300\">785,684<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-fri\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-fri\">\n              <h2 class=\"text-white mb-3 f-w-300\">123,486<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-sat\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-sat\">\n              <h2 class=\"text-white mb-3 f-w-300\">762,963<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"earnings-sun\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-sun\">\n              <h2 class=\"text-white mb-3 f-w-300\">984,632<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n          </div>\n          <ul class=\"nav nav-pills align-items-center justify-content-center\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"pills-earnings-mon\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-mon\" aria-selected=\"true\">Mon</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-tue\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-tue\" aria-selected=\"false\">Tue</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-wed\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-wed\" aria-selected=\"false\">Wed</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-thu\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-thu\" aria-selected=\"false\">Thu</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-fri\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-fri\" aria-selected=\"false\">Fri</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sat\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sat\" aria-selected=\"false\">Sat</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sun\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sun\" aria-selected=\"false\">Sun</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ earning-day section ] end -->\n\n  <!-- [ funds section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h2 class=\"mb-3 f-w-300\">$894.39</h2>\n        <h5 class=\"text-muted\"><span class=\"f-14 mr-1\">Deposits:</span>$10,000</h5>\n        <h5 class=\"mt-3 text-c-green mb-4\"><i class=\"fas fa-caret-down text-c-green f-22\"></i> 5.2%  ($456)</h5>\n        <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\" style=\"max-width:150px;margin:0 auto;\">add funds</a>\n      </div>\n    </div>\n  </div>\n  <!-- [ funds senction] end -->\n\n  <!-- [ page-view section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card theme-bg earning-date\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Page View</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"bd-example bd-example-tabs\">\n          <div class=\"tab-content\" id=\"pills-tabContent2\">\n            <div class=\"tab-pane fade show active\" id=\"view-mon\" role=\"tabpanel\" aria-labelledby=\"pills-view-mon\">\n              <h2 class=\"text-white mb-3 f-w-300\">9,456<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-tue\" role=\"tabpanel\" aria-labelledby=\"pills-view-tue\">\n              <h2 class=\"text-white mb-3 f-w-300\">8,568<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-wed\" role=\"tabpanel\" aria-labelledby=\"pills-view-wed\">\n              <h2 class=\"text-white mb-3 f-w-300\">3,756<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-thu\" role=\"tabpanel\" aria-labelledby=\"pills-view-thu\">\n              <h2 class=\"text-white mb-3 f-w-300\">9,635<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-fri\" role=\"tabpanel\" aria-labelledby=\"pills-view-fri\">\n              <h2 class=\"text-white mb-3 f-w-300\">23,486<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-sat\" role=\"tabpanel\" aria-labelledby=\"pills-view-sat\">\n              <h2 class=\"text-white mb-3 f-w-300\">86,789<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n            <div class=\"tab-pane fade\" id=\"view-sun\" role=\"tabpanel\" aria-labelledby=\"pills-view-sun\">\n              <h2 class=\"text-white mb-3 f-w-300\">93,628<i class=\"feather icon-arrow-down\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL VIEWS</span>\n            </div>\n          </div>\n          <ul class=\"nav nav-pills align-items-center justify-content-center\" id=\"pills-tab2\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"pills-view-mon\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-mon\" aria-selected=\"true\">Mon</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-tue\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-tue\" aria-selected=\"false\">Tue</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-wed\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-wed\" aria-selected=\"false\">Wed</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-thu\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-thu\" aria-selected=\"false\">Thu</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-fri\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-fri\" aria-selected=\"false\">Fri</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-sat\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-sat\" aria-selected=\"false\">Sat</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-view-sun\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"view-sun\" aria-selected=\"false\">Sun</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ page-view section ] end -->\n\n  <!-- [ sale-view section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Miami, Florida</h5>\n      </div>\n      <div class=\"card-block sale-view\">\n        <h3>14,678</h3>\n        <h6 class=\"text-muted\">USD</h6>\n        <span class=\"text-muted\">Today’s Sales</span>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <div id=\"sale-view\" style=\"height:80px;width:100px;\"></div>\n          </div>\n          <div class=\"col-auto text-right\">\n            <i class=\"fas fa-coins f-30 text-white theme-bg\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Silje Larsen</h5>\n      </div>\n      <div class=\"card-block sale-view\">\n        <h3>15,678</h3>\n        <h6 class=\"text-muted\">USD</h6>\n        <span class=\"text-muted\">Weekly Sales</span>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <div id=\"sale-view-second\" style=\"height:80px;width:100px;\"></div>\n          </div>\n          <div class=\"col-auto text-right\">\n            <i class=\"fab fa-bitcoin f-30 text-white theme-bg\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Ida Jorgensen</h5>\n      </div>\n      <div class=\"card-block sale-view\">\n        <h3>50,853</h3>\n        <h6 class=\"text-muted\">USD</h6>\n        <span class=\"text-muted\">Monthly Sales</span>\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <div id=\"sale-view-third\" style=\"height:80px;width:100px;\"></div>\n          </div>\n          <div class=\"col-auto text-right\">\n            <i class=\"fas fa-database f-30 text-white theme-bg\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ sale-view section ] end -->\n\n  <!-- [ project-task section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card project-task\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h5 class=\"m-0\"><i class=\"far fa-edit m-r-10\"></i>Project Task</h5>\n          </div>\n          <div class=\"col-auto\">\n            <label class=\"label theme-bg text-white f-14 f-w-400 float-right\">23% Done</label>\n          </div>\n        </div>\n        <h6 class=\"text-muted mt-4 mb-3\">Complete Task : 6/10</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <h6 class=\"mt-3 mb-0 text-center text-muted\">Project Team : 28 Persons</h6>\n      </div>\n    </div>\n  </div>\n  <!-- [ project-task section ] end -->\n\n  <!-- [ Sales-Statistics section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"mb-4\">Sales Statistics</h5>\n        <h3 class=\"mb-4\">23,0598</h3>\n        <span class=\"text-muted d-block\">Top selling items statistic by last month</span>\n      </div>\n    </div>\n  </div>\n  <!-- [ Sales-Statistics section ] end -->\n\n  <!-- [ upcoming-event section ] start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-event\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h5 class=\"m-0\">Upcoming Event</h5>\n          </div>\n          <div class=\"col-auto\">\n            <label class=\"label theme-bg2 text-white f-14 f-w-400 float-right\">34%</label>\n          </div>\n        </div>\n        <h2 class=\"mt-2 f-w-300\">45<sub class=\"text-muted f-14\">Competitors</sub></h2>\n        <h6 class=\"text-muted mt-3 mb-0\">You can participate in event </h6>\n        <i class=\"fab fa-angellist text-c-purple f-50\"></i>\n      </div>\n    </div>\n  </div>\n  <!-- [ upcoming-event section ] end -->\n\n  <!-- [ bitcoin-wallet section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg bitcoin-wallet\">\n      <div class=\"card-block\">\n        <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n        <h2 class=\"text-white mb-3 f-w-300\">$9,302</h2>\n        <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n        <i class=\"fab fa-btc f-70 text-white\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg2 bitcoin-wallet\">\n      <div class=\"card-block\">\n        <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n        <h2 class=\"text-white mb-3 f-w-300\">$8,101</h2>\n        <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n        <i class=\"fas fa-dollar-sign f-70 text-white\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card bg-c-blue bitcoin-wallet\">\n      <div class=\"card-block\">\n        <h5 class=\"text-white mb-2\">Bitcoin Wallet</h5>\n        <h2 class=\"text-white mb-3 f-w-300\">$7,501</h2>\n        <span class=\"text-white d-block\">Ratings by Market Capitalization</span>\n        <i class=\"fas fa-pound-sign f-70 text-white\"></i>\n      </div>\n    </div>\n  </div>\n  <!-- [ bitcoin-wallet section ] end -->\n\n  <!-- [ prouct-summary section ] start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h5 class=\"m-b-30\">Product Summary</h5>\n        <div class=\"media summary-box mb-4\">\n          <div class=\"photo-table\">\n            <h3 class=\"m-0 f-w-300\">$ 1935.26 <i class=\"fas fa-caret-up text-c-green f-26 m-l-8\"></i></h3>\n            <span>Profit</span>\n          </div>\n          <div class=\"media-body\">\n            <i class=\"card-icon feather icon-download float-right f-34\"></i>\n          </div>\n        </div>\n        <div class=\"media summary-box mb-4\">\n          <div class=\"photo-table\">\n            <h3 class=\"m-0 f-w-300\">$ 2356.42 <i class=\"fas fa-caret-up text-c-green f-26 m-l-8\"></i></h3>\n            <span>Invoiced</span>\n          </div>\n          <div class=\"media-body\">\n            <i class=\"card-icon feather icon-download float-right f-34\"></i>\n          </div>\n        </div>\n        <div class=\"media summary-box mb-4\">\n          <div class=\"photo-table\">\n            <h3 class=\"m-0 f-w-300\">$ 4683.96 <i class=\"fas fa-caret-down text-c-red f-26 m-l-8\"></i></h3>\n            <span>Expenses</span>\n          </div>\n          <div class=\"media-body\">\n            <i class=\"card-icon feather icon-download float-right f-34\"></i>\n          </div>\n        </div>\n        <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\" style=\"max-width:150px;margin:0 auto;\">add friend</a>\n      </div>\n    </div>\n  </div>\n  <!-- [ prouct-summary section ] end-->\n\n  <!-- [ statistial-visit section ] start -->\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card statistial-visit\">\n      <div class=\"card-header\">\n        <h5>Statistical</h5>\n        <span class=\"text-muted d-block mt-1\">Status : live</span>\n      </div>\n      <div class=\"card-block\">\n        <h3 class=\"f-w-300\">4,445,701</h3>\n        <span class=\"d-block\"><i class=\"fas fa-map-marker-alt m-r-10\"></i>256 Countries, 5667  Cites </span>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6> Our Overseas visits</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"media-body\">\n            <label class=\"label theme-bg text-white f-14 f-w-400 float-right\">14%</label>\n          </div>\n        </div>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6> Our Overseas visits</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"media-body\">\n            <label class=\"label theme-bg2 text-white f-14 f-w-400 float-right\">14%</label>\n          </div>\n        </div>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6> Our Overseas visits</h6>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n          <div class=\"media-body\">\n            <label class=\"label bg-c-blue text-white f-14 f-w-400 float-right\">14%</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ statistial section ] end -->\n\n  <!-- [ market section ] start -->\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Markets</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"media statistial-box\">\n          <div class=\"photo-table\">\n            <h6 class=\"text-muted\">Dash/USD<span class=\"text-c-green ml-3\">2.56%</span></h6>\n            <h6>1,0452 <span class=\"ml-2\"> USD</span></h6>\n          </div>\n          <div class=\"media-body\">\n            <div id=\"app-sale\" class=\"float-right\" style=\"height:40px;width:100px\"></div>\n          </div>\n        </div>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6 class=\"text-muted\">ETH/USD<span class=\"text-c-red ml-3\">-0.87%</span></h6>\n            <h6>0,0157<span class=\"ml-2\"> USD</span></h6>\n          </div>\n          <div class=\"media-body\">\n            <div id=\"app-sale1\" class=\"float-right\" style=\"height:40px;width:100px\">\n            </div>\n          </div>\n        </div>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6 class=\"text-muted\">ZEC/USD<span class=\"text-c-purple ml-3\">1.56%</span></h6>\n            <h6>2,0764<span class=\"ml-2\"> USD</span></h6>\n          </div>\n          <div class=\"media-body\">\n            <div id=\"app-sale2\" class=\"float-right\" style=\"height:40px;width:100px\">\n            </div>\n          </div>\n        </div>\n        <div class=\"media statistial-box mt-4\">\n          <div class=\"photo-table\">\n            <h6 class=\"text-muted\">BTC/USD<span class=\"text-c-green ml-3\">2.56%</span></h6>\n            <h6>1,0452<span class=\"ml-2\"> USD</span></h6>\n          </div>\n          <div class=\"media-body\">\n            <div id=\"app-sale3\" class=\"float-right\" style=\"height:40px;width:100px\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ market section ] end -->\n\n  <!-- [ total-order ] start -->\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h3 class=\"text-c-green\">2,02,150</h3>\n            <h5>Total Orders</h5>\n          </div>\n          <div class=\"col text-right\">\n            <img src=\"assets/images/widget/shape1.png\" style=\"width:80px;\" alt=\"activity-user\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h3 class=\"text-c-red\">8940</h3>\n            <h5>New Orders</h5>\n          </div>\n          <div class=\"col text-right\">\n            <img src=\"assets/images/widget/shape2.png\" style=\"width:80px;\" alt=\"activity-user\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col\">\n            <h3 class=\"text-c-green\">$52,510</h3>\n            <h5>Total Revenue</h5>\n          </div>\n          <div class=\"col text-right\">\n            <img src=\"assets/images/widget/shape3.png\" style=\"width:80px;\" alt=\"activity-user\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ total-order ] end -->\n\n  <!-- [ sale-product ] start -->\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img src=\"assets/images/widget/shape4.png\" alt=\"activity-user\">\n          </div>\n          <div class=\"col\">\n            <h2 class=\"text-white f-w-300\">520</h2>\n            <h5 class=\"text-white\">All Properties</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card theme-bg2\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img src=\"assets/images/widget/shape5.png\" alt=\"activity-user\">\n          </div>\n          <div class=\"col\">\n            <h2 class=\"text-white f-w-300\">375</h2>\n            <h5 class=\"text-white\">Sale Product</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card theme-bg\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img src=\"assets/images/widget/shape6.png\" alt=\"activity-user\">\n          </div>\n          <div class=\"col\">\n            <h2 class=\"text-white f-w-300\">$874</h2>\n            <h5 class=\"text-white\">Total Earnings</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ sale-product ] end -->\n\n  <!-- [ user-sale ] start -->\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <h5>2,456</h5>\n            <h6>Total Sales</h6>\n            <div id=\"user-sale\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">2567<span class=\"m-r-10 m-l-10\">Today</span></h6>\n          </div>\n          <div class=\"col-6\">\n            <h5>4,679</h5>\n            <h6>Total User</h6>\n            <div id=\"user-sale1\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">7896<span class=\"m-r-10 m-l-10\">Today</span></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <h5>1,456</h5>\n            <h6>Total Revenue</h6>\n            <div id=\"user-sale2\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">7423<span class=\"m-r-10 m-l-10\">Yesterday</span></h6>\n          </div>\n          <div class=\"col-6\">\n            <h5>5,652</h5>\n            <h6>Total User</h6>\n            <div id=\"user-sale3\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">9632<span class=\"m-r-10 m-l-10\">Today</span></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <h5>4,456</h5>\n            <h6>Total Order</h6>\n            <div id=\"user-sale4\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">4532<span class=\"m-r-10 m-l-10\">Today</span></h6>\n          </div>\n          <div class=\"col-6\">\n            <h5>6,325</h5>\n            <h6>Total User</h6>\n            <div id=\"user-sale5\" style=\"height:50px;width:100px;\"></div>\n            <h6 class=\"mt-2 mb-0\">4532<span class=\"m-r-10 m-l-10\">Tomorrow</span></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--[ user-sale ] end -->\n</div>\n"

/***/ }),

/***/ "./src/app/demo/widget/wget-statistic/wget-statistic.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/widget/wget-statistic/wget-statistic.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vd2lkZ2V0L3dnZXQtc3RhdGlzdGljL3dnZXQtc3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/widget/wget-statistic/wget-statistic.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/wget-statistic/wget-statistic.component.ts ***!
  \************************************************************************/
/*! exports provided: WgetStatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetStatisticComponent", function() { return WgetStatisticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.js */ "./src/assets/charts/flot/jquery.flot.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.categories.js */ "./src/assets/charts/flot/jquery.flot.categories.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/flot/curvedLines.js */ "./src/assets/charts/flot/curvedLines.js");
/* harmony import */ var _assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_curvedLines_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/flot/jquery.flot.tooltip.min.js */ "./src/assets/charts/flot/jquery.flot.tooltip.min.js");
/* harmony import */ var _assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_flot_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5__);






var WgetStatisticComponent = /** @class */ (function () {
    function WgetStatisticComponent() {
    }
    WgetStatisticComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $.plot($('#sale-view'), [{
                    data: [
                        [0, 10],
                        [1, 20],
                        [2, 10],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 24],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#04a9f5',
                    bars: {
                        show: true,
                        lineWidth: 0,
                        fill: true,
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
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
                    max: 30,
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
            $.plot($('#sale-view-second'), [{
                    data: [
                        [0, 10],
                        [1, 20],
                        [2, 10],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 24],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#1de9b6',
                    bars: {
                        show: true,
                        lineWidth: 0,
                        fill: true,
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
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
                    max: 30,
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
            $.plot($('#sale-view-third'), [{
                    data: [
                        [0, 10],
                        [1, 20],
                        [2, 10],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 24],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#ff5252',
                    bars: {
                        show: true,
                        lineWidth: 0,
                        fill: true,
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
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
                    max: 30,
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
            $.plot($('#app-sale'), [{
                    data: [
                        [0, 10],
                        [2, 27],
                        [4, 10],
                        [6, 10],
                        [8, 27],
                        [10, 20],
                        [12, 20],
                    ],
                    color: '#1DE3BE',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
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
                    max: 40,
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
            $.plot($('#app-sale1'), [{
                    data: [
                        [0, 27],
                        [2, 10],
                        [4, 20],
                        [6, 15],
                        [8, 27],
                        [10, 20],
                        [12, 20],
                    ],
                    color: '#FF4962',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
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
                    max: 40,
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
            $.plot($('#app-sale2'), [{
                    data: [
                        [0, 10],
                        [2, 27],
                        [4, 18],
                        [6, 25],
                        [8, 15],
                        [10, 25],
                        [12, 20],
                    ],
                    color: '#8C9CD4',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
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
                    max: 40,
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
            $.plot($('#app-sale3'), [{
                    data: [
                        [0, 10],
                        [2, 27],
                        [4, 10],
                        [6, 10],
                        [8, 27],
                        [10, 20],
                        [12, 20],
                    ],
                    color: '#1DE3BE',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
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
                    max: 40,
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
            $.plot($('#user-sale'), [{
                    data: [
                        [0, 10],
                        [3, 80],
                        [6, 30],
                        [9, 70],
                        [12, 20],
                        [15, 85],
                        [18, 70],
                    ],
                    color: '#1DE3BE',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
            $.plot($('#user-sale1'), [{
                    data: [
                        [0, 10],
                        [3, 80],
                        [6, 10],
                        [9, 70],
                        [12, 10],
                        [15, 60],
                        [18, 10],
                    ],
                    color: '#1DE3BE',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
            $.plot($('#user-sale2'), [{
                    data: [
                        [0, 80],
                        [3, 10],
                        [6, 50],
                        [9, 45],
                        [12, 80],
                        [15, 30],
                        [18, 70],
                        [21, 60],
                    ],
                    color: '#8C9CD4',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
            $.plot($('#user-sale3'), [{
                    data: [
                        [0, 10],
                        [3, 70],
                        [6, 10],
                        [9, 65],
                        [12, 10],
                        [15, 50],
                        [18, 70],
                    ],
                    color: '#8C9CD4',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
            $.plot($('#user-sale4'), [{
                    data: [
                        [0, 50],
                        [3, 70],
                        [6, 10],
                        [9, 65],
                        [12, 10],
                        [15, 50],
                        [18, 70],
                    ],
                    color: '#04a9f5',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
            $.plot($('#user-sale5'), [{
                    data: [
                        [0, 10],
                        [3, 80],
                        [6, 10],
                        [9, 70],
                        [12, 10],
                        [15, 60],
                        [18, 10],
                    ],
                    color: '#04a9f5',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                        radius: 3,
                        fill: true
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], {
                series: {
                    label: '',
                    curvedLines: {
                        active: true,
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
        });
    };
    WgetStatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wget-statistic',
            template: __webpack_require__(/*! ./wget-statistic.component.html */ "./src/app/demo/widget/wget-statistic/wget-statistic.component.html"),
            styles: [__webpack_require__(/*! ./wget-statistic.component.scss */ "./src/app/demo/widget/wget-statistic/wget-statistic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WgetStatisticComponent);
    return WgetStatisticComponent;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-statistic/wget-statistic.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/widget/wget-statistic/wget-statistic.module.ts ***!
  \*********************************************************************/
/*! exports provided: WgetStatisticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetStatisticModule", function() { return WgetStatisticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wget_statistic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-statistic-routing.module */ "./src/app/demo/widget/wget-statistic/wget-statistic-routing.module.ts");
/* harmony import */ var _wget_statistic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wget-statistic.component */ "./src/app/demo/widget/wget-statistic/wget-statistic.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var WgetStatisticModule = /** @class */ (function () {
    function WgetStatisticModule() {
    }
    WgetStatisticModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _wget_statistic_routing_module__WEBPACK_IMPORTED_MODULE_3__["WgetStatisticRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"]
            ],
            declarations: [_wget_statistic_component__WEBPACK_IMPORTED_MODULE_4__["WgetStatisticComponent"]]
        })
    ], WgetStatisticModule);
    return WgetStatisticModule;
}());



/***/ })

}]);
//# sourceMappingURL=wget-statistic-wget-statistic-module.js.map