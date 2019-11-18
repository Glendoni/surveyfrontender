(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-crm-dash-crm-module"],{

/***/ "./src/app/demo/dashboard/dash-crm/dash-crm-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DashCrmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCrmRoutingModule", function() { return DashCrmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_crm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-crm.component */ "./src/app/demo/dashboard/dash-crm/dash-crm.component.ts");




var routes = [
    {
        path: '',
        component: _dash_crm_component__WEBPACK_IMPORTED_MODULE_3__["DashCrmComponent"]
    }
];
var DashCrmRoutingModule = /** @class */ (function () {
    function DashCrmRoutingModule() {
    }
    DashCrmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashCrmRoutingModule);
    return DashCrmRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-crm/dash-crm.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Transactions\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <h3 class=\"f-w-300 mb-0\">$ 59,48</h3>\n        </div>\n        <div class=\"col-6\">\n          <div id=\"transactions\" style=\"height:80px;width:80px;margin:0 auto;\"></div>\n        </div>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Project Rating\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6\">\n          <h2 class=\"f-w-300 d-flex align-items-center float-left\">4.3 <i class=\"fas fa-star f-12 m-l-10 text-c-yellow\"></i></h2>\n        </div>\n        <div class=\"col-6\">\n          <h6 class=\"f-w-300 d-flex  align-items-center float-right\">0.4 <i class=\"fas fa-caret-up text-c-green f-24 m-l-10\"></i></h6>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"News Statistics\">\n      <div id=\"bar-chart\" class=\"ChartShadow BarChart\" style=\"height:250px;\"></div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <span class=\"theme-bg d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n          <h6 class=\"mb-2\">48</h6>\n          <h6 class=\"mt-2 mb-0\">Sport</h6>\n        </div>\n        <div class=\"col text-center\">\n          <span class=\"theme-bg2 d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n          <h6 class=\"mb-2\">36</h6>\n          <h6 class=\"mt-2 mb-0\">Music</h6>\n        </div>\n        <div class=\"col text-center\">\n          <span class=\"bg-c-blue d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n          <h6 class=\"mb-2\">41</h6>\n          <h6 class=\"mt-2 mb-0\">Travel</h6>\n        </div>\n        <div class=\"col text-center\">\n          <span class=\"bg-c-red d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\n          <h6 class=\"mb-2\">7</h6>\n          <h6 class=\"mt-2 mb-0\">News</h6>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5>Phone Calls</h5>\n      </div>\n      <div id=\"call-chart\" style=\"height:380px;\"></div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-md-12\">\n    <app-card cardTitle=\"Recent Users\" cardClass=\"Recent-Users\" blockClass=\"px-0 py-3\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr class=\"unread\">\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Isabella Christensen</h6>\n              <p class=\"m-0\">Lorem Ipsum is simply dummy text of…</p>\n            </td>\n            <td>\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>11 MAY 12:56</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\n          </tr>\n          <tr class=\"unread\">\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Mathilde Andersen</h6>\n              <p class=\"m-0\">Lorem Ipsum is simply dummy text of…</p>\n            </td>\n            <td>\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-red f-10 m-r-15\"></i>11 MAY 10:35</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\n          </tr>\n          <tr class=\"unread\">\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Karla Sorensen</h6>\n              <p class=\"m-0\">Lorem Ipsum is simply dummy text of…</p>\n            </td>\n            <td>\n              <h6 class=\"text-muted\"><i class=\"fas fa-circle text-c-green f-10 m-r-15\"></i>9 MAY 17:38</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\n          </tr>\n          <tr class=\"unread\">\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Ida Jorgensen</h6>\n              <p class=\"m-0\">Lorem Ipsum is simply dummy text of…</p>\n            </td>\n            <td>\n              <h6 class=\"text-muted f-w-300\"><i class=\"fas fa-circle text-c-red f-10 m-r-15\"></i>19 MAY 12:56</h6>\n            </td>\n            <td><a href=\"javascript:\" class=\"label theme-bg2 text-white f-12\">Reject</a><a href=\"javascript:\" class=\"label theme-bg text-white f-12\">Approve</a></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-12 m-b-30\">\n    <ngb-tabset>\n      <ngb-tab title=\"Today\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>3750</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"This Week\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>5850</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"All\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>5875</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card theme-bg earning-date\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Page View</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"bd-example bd-example-tabs\">\n          <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"earnings-wed\" role=\"tabpanel\" aria-labelledby=\"pills-earnings-wed\">\n              <h2 class=\"text-white mb-3 f-w-300\">359,234<i class=\"feather icon-arrow-up\"></i></h2>\n              <span class=\"text-white mb-4 d-block\">TOTAL EARNINGS</span>\n            </div>\n          </div>\n          <ul class=\"nav nav-pills align-items-center justify-content-center\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-mon\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-mon\" aria-selected=\"true\">Mon</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-tue\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-tue\" aria-selected=\"false\">Tue</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-wed\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-wed\" aria-selected=\"false\">Wed</a>\n            </li>\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" id=\"pills-earnings-thu\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-thu\" aria-selected=\"false\">Thu</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-fri\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-fri\" aria-selected=\"false\">Fri</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sat\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sat\" aria-selected=\"false\">Sat</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-earnings-sun\" data-toggle=\"pill\" href=\"javascript:\" role=\"tab\" aria-controls=\"earnings-sun\" aria-selected=\"false\">Sun</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h2 class=\"mb-3 f-w-300\">$894.39</h2>\n      <h5 class=\"text-muted\"><span class=\"f-14 mr-1\">Deposits:</span>$10,000</h5>\n      <h5 class=\"mt-3 text-c-green mb-4\"><i class=\"fas fa-caret-down text-c-green f-22\"></i> 5.2% ($456)</h5>\n      <a href=\"javascript:\" class=\"btn btn-primary border-0 text-uppercase btn-block f-14\" style=\"max-width:150px;margin:0 auto;\">add funds</a>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Statistical\" [options]=\"false\">\n      <h3 class=\"f-w-300\">4,445,701</h3>\n      <span class=\"d-block\"><i class=\"fas fa-map-marker-alt m-r-10\"></i>256 Countries, 5667 Cites </span>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6> Our Overseas visits</h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"media-body\">\n          <label class=\"label theme-bg text-white f-14 float-right\">14%</label>\n        </div>\n      </div>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6> Our Overseas visits</h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"media-body\">\n          <label class=\"label theme-bg2 text-white f-14 float-right\">14%</label>\n        </div>\n      </div>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6> Our Overseas visits</h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"media-body\">\n          <label class=\"label bg-c-blue text-white f-14 float-right\">14%</label>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Markets\" [options]=\"false\">\n      <div class=\"media statistial-box\">\n        <div class=\"photo-table\">\n          <h6 class=\"text-muted\">Dash/USD<span class=\"text-c-green ml-3\">2.56%</span></h6>\n          <h6>1,0452 <span class=\"ml-2\"> USD</span></h6>\n        </div>\n        <div class=\"media-body\">\n          <div id=\"app-sale\" class=\"float-right\" style=\"height:40px;width:100px\"></div>\n        </div>\n      </div>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6 class=\"text-muted\">ETH/USD<span class=\"text-c-red ml-3\">-0.87%</span></h6>\n          <h6>0,0157<span class=\"ml-2\"> USD</span></h6>\n        </div>\n        <div class=\"media-body\">\n          <div id=\"app-sale1\" class=\"float-right\" style=\"height:40px;width:100px\">\n          </div>\n        </div>\n      </div>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6 class=\"text-muted\">ZEC/USD<span class=\"text-c-purple ml-3\">1.56%</span></h6>\n          <h6>2,0764<span class=\"ml-2\"> USD</span></h6>\n        </div>\n        <div class=\"media-body\">\n          <div id=\"app-sale2\" class=\"float-right\" style=\"height:40px;width:100px\">\n          </div>\n        </div>\n      </div>\n      <div class=\"media statistial-box mt-4\">\n        <div class=\"photo-table\">\n          <h6 class=\"text-muted\">BTC/USD<span class=\"text-c-green ml-3\">2.56%</span></h6>\n          <h6>1,0452<span class=\"ml-2\"> USD</span></h6>\n        </div>\n        <div class=\"media-body\">\n          <div id=\"app-sale3\" class=\"float-right\" style=\"height:40px;width:100px\">\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"text-center\">Total Leads</h5>\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-auto\">\n          <h3 class=\"f-w-300 m-t-20\">$59,48<i class=\"fas fa-caret-up text-c-green f-26 m-l-10\"></i></h3>\n          <span>EARNINGS</span>\n        </div>\n        <div class=\"col text-right\">\n          <i class=\"fas fa-chart-pie f-30 text-c-purple\"></i>\n        </div>\n      </div>\n      <div class=\"leads-progress mt-3\">\n        <h6 class=\"mb-3 text-center\">Organic <span class=\"ml-4\">Purchesed</span></h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 35%; height:10px;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <h6 class=\"text-muted f-w-300 mt-4\">Organic Leads <span class=\"float-right\">340</span></h6>\n        <h6 class=\"text-muted f-w-300 mt-4\">Purchesed Leads <span class=\"float-right\">150</span></h6>\n        <h6 class=\"text-muted f-w-300 mt-4\">Blocked Leads <span class=\"float-right\">120</span></h6>\n        <h6 class=\"text-muted f-w-300 mt-4 mb-0\">Buy Leads <span class=\"float-right\">245</span></h6>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-crm/dash-crm.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtY3JtL2Rhc2gtY3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-crm/dash-crm.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.component.ts ***!
  \***************************************************************/
/*! exports provided: DashCrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCrmComponent", function() { return DashCrmComponent; });
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















var DashCrmComponent = /** @class */ (function () {
    function DashCrmComponent() {
    }
    DashCrmComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
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
            var chartCall = [{
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
            var chartCallAM = AmCharts.makeChart('call-chart', {
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
                'dataProvider': chartCall,
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
                        'valueField': 'value',
                        'fillColors': [
                            '#1de9b6',
                            '#1dc4e9'
                        ],
                        'lineAlpha': 0,
                        'fillAlphas': 1,
                        'showBalloon': true,
                        'type': 'smoothedLine',
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
            setTimeout(function () {
                chartCallAM.zoomToIndexes(1, chartCall.length - 2);
            }, 400);
        }, 500);
    };
    DashCrmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-crm',
            template: __webpack_require__(/*! ./dash-crm.component.html */ "./src/app/demo/dashboard/dash-crm/dash-crm.component.html"),
            styles: [__webpack_require__(/*! ./dash-crm.component.scss */ "./src/app/demo/dashboard/dash-crm/dash-crm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashCrmComponent);
    return DashCrmComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-crm/dash-crm.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.module.ts ***!
  \************************************************************/
/*! exports provided: DashCrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCrmModule", function() { return DashCrmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_crm_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-crm-routing.module */ "./src/app/demo/dashboard/dash-crm/dash-crm-routing.module.ts");
/* harmony import */ var _dash_crm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-crm.component */ "./src/app/demo/dashboard/dash-crm/dash-crm.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var DashCrmModule = /** @class */ (function () {
    function DashCrmModule() {
    }
    DashCrmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_crm_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashCrmRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"]
            ],
            declarations: [_dash_crm_component__WEBPACK_IMPORTED_MODULE_4__["DashCrmComponent"]]
        })
    ], DashCrmModule);
    return DashCrmModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-crm-dash-crm-module.js.map