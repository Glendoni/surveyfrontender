(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-project-dash-project-module"],{

/***/ "./src/app/demo/dashboard/dash-project/dash-project-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DashProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashProjectRoutingModule", function() { return DashProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-project.component */ "./src/app/demo/dashboard/dash-project/dash-project.component.ts");




var routes = [
    {
        path: '',
        component: _dash_project_component__WEBPACK_IMPORTED_MODULE_3__["DashProjectComponent"]
    }
];
var DashProjectRoutingModule = /** @class */ (function () {
    function DashProjectRoutingModule() {
    }
    DashProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashProjectRoutingModule);
    return DashProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-project/dash-project.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"project-task\" [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col\">\n          <h5 class=\"m-0\"><i class=\"far fa-edit m-r-10\"></i>Project Task</h5>\n        </div>\n        <div class=\"col-auto\">\n          <label class=\"label theme-bg text-white f-14 f-w-400 float-right\">23% Done</label>\n        </div>\n      </div>\n      <h6 class=\"text-muted mt-4 mb-3\">Complete Task : 6/10</h6>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width:60%;height:6px;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <h6 class=\"mt-3 mb-0 text-center text-muted\">Project Team : 28 Persons</h6>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <h5 class=\"mb-4\">Sales Statistics</h5>\n      <h3 class=\"mb-4\">2,30,598</h3>\n      <span class=\"text-muted d-block\">Top selling items statistic by last month</span>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardClass=\"card-event\" [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col\">\n          <h5 class=\"m-0\">Upcoming Event</h5>\n        </div>\n        <div class=\"col-auto\">\n          <label class=\"label theme-bg2 text-white f-14 f-w-400 float-right\">34%</label>\n        </div>\n      </div>\n      <h2 class=\"mt-2 \">45<sub class=\"text-muted f-14\">Competitors</sub></h2>\n      <h6 class=\"text-muted mt-3 mb-0\">You can participate in event </h6>\n      <i class=\"fab fa-angellist text-c-purple f-50\"></i>\n    </app-card>\n  </div>\n\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Reply\">\n      <div class=\"reply-price\">\n        <h3 class=\"\">2.43 h</h3>\n        <span class=\"text-uppercase\">average time for first reply</span>\n      </div>\n      <div id=\"bar-chart1\" class=\"ChartShadow BarChart barChart1\" style=\"height:290px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card cardTitle=\"Statistics\">\n      <div id=\"chart-percent\" class=\"chart-percent\" style=\"height:290px;\"></div>\n      <div class=\"row mb-3\">\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">23%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-green\" role=\"progressbar\" style=\"width: 23%;\" aria-valuenow=\"23\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">14%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-yellow\" role=\"progressbar\" style=\"width: 14%;\" aria-valuenow=\"14\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mb-2\">\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">35%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-purple\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <span class=\"mb-1 text-muted d-block\">28%</span>\n          <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar progress-c-blue\" role=\"progressbar\" style=\"width: 28%;\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-12 m-b-30\">\n    <ngb-tabset>\n      <ngb-tab title=\"Today\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>3750</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"This Week\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>5850</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"All\">\n        <ng-template ngbTabContent>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3784</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Julie Vad</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>3544</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Storm Hanse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>2739</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Frida Thomse</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-down f-22 m-r-10 text-c-red\"></i>1032</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center m-b-20\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>8750</span>\n            </div>\n          </div>\n          <div class=\"media friendlist-box align-items-center justify-content-center\">\n            <div class=\"m-r-10 photo-table\">\n              <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></a>\n            </div>\n            <div class=\"media-body\">\n              <h6 class=\"m-0 d-inline\">Silje Larsen</h6>\n              <span class=\"float-right d-flex  align-items-center\"><i class=\"fas fa-caret-up f-22 m-r-10 text-c-green\"></i>5875</span>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Overdue Tasks</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\" m-0\">34</h2>\n            <span class=\"text-muted\">Last Week 60%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-red f-w-400\">10%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Tasks to Do</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\" m-0\">25</h2>\n            <span class=\"text-muted\">Last Week 40%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-green f-w-400\">30%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-block border-bottom\">\n        <h5 class=\"m-0\">Completed Task</h5>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row  align-items-center\">\n          <div class=\"col-8\">\n            <h2 class=\" m-0\">19</h2>\n            <span class=\"text-muted\">Last Week 70%</span>\n          </div>\n          <div class=\"col-4 text-right\">\n            <h5 class=\"text-c-red f-w-400\">25%</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"User Project List\" cardClass=\"user-list\" blockClass=\"pb-0\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>User</th>\n            <th>project</th>\n            <th>Completed</th>\n            <th>Status</th>\n            <th>Date</th>\n          </thead>\n          <tbody>\n          <tr>\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Social Media App</h6>\n              <p class=\"m-0\">Assigned to<span class=\"text-c-green\"> Tristan Madsen</span></p>\n            </td>\n            <td><span class=\"pie_1\">326,134</span></td>\n            <td>\n              <h6 class=\"m-0\">68%</h6></td>\n            <td>\n              <h6 class=\"m-0\">October 26, 2017</h6></td>\n          </tr>\n\n          <tr>\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Newspaper Wordpress Web</h6>\n              <p class=\"m-0\">Assigned to<span class=\"text-c-green\">  Marcus Poulsen</span></p>\n            </td>\n            <td><span class=\"pie_2\">110,134</span></td>\n            <td>\n              <h6 class=\"m-0\">46%</h6></td>\n            <td>\n              <h6 class=\"m-0\">September 4, 2017</h6></td>\n          </tr>\n\n          <tr>\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Dashboard UI Kit Design</h6>\n              <p class=\"m-0\">Assigned to<span class=\"text-c-green\">  Felix Johansen</span></p>\n            </td>\n            <td><span class=\"pie_3\">226,134</span></td>\n            <td>\n              <h6 class=\"m-0\">31%</h6></td>\n            <td>\n              <h6 class=\"m-0\">November 14, 2017</h6></td>\n          </tr>\n          <tr>\n            <td><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"activity-user\"></td>\n            <td>\n              <h6 class=\"mb-1\">Social Media App</h6>\n              <p class=\"m-0\">Assigned to<span class=\"text-c-green\">  Tristan Madsen</span></p>\n            </td>\n            <td><span class=\"pie_4\">500,134</span></td>\n            <td>\n              <h6 class=\"m-0\">85%</h6></td>\n            <td>\n              <h6 class=\"m-0\">December 14, 2017</h6></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-project/dash-project.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2Rhc2gtcHJvamVjdC9kYXNoLXByb2plY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/dashboard/dash-project/dash-project.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashProjectComponent", function() { return DashProjectComponent; });
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
/* harmony import */ var _node_modules_peity_jquery_peity_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/peity/jquery.peity.min.js */ "./node_modules/peity/jquery.peity.min.js");
/* harmony import */ var _node_modules_peity_jquery_peity_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_peity_jquery_peity_min_js__WEBPACK_IMPORTED_MODULE_11__);












var DashProjectComponent = /** @class */ (function () {
    function DashProjectComponent() {
    }
    DashProjectComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
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
                        'value': 15,
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
            $('span.pie_1').peity('pie', {
                fill: ['#1de9b6', '#eaeaea'],
                radius: 15
            });
            $('span.pie_2').peity('pie', {
                fill: ['#04a9f5', '#eaeaea'],
                radius: 15
            });
            $('span.pie_3').peity('pie', {
                fill: ['#a389d4', '#eaeaea'],
                radius: 15
            });
            $('span.pie_4').peity('pie', {
                fill: ['#1de9b6', '#eaeaea'],
                radius: 15
            });
            $('span.pie_5').peity('pie', {
                fill: ['#04a9f5', '#eaeaea'],
                radius: 15
            });
        }, 500);
    };
    DashProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-project',
            template: __webpack_require__(/*! ./dash-project.component.html */ "./src/app/demo/dashboard/dash-project/dash-project.component.html"),
            styles: [__webpack_require__(/*! ./dash-project.component.scss */ "./src/app/demo/dashboard/dash-project/dash-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashProjectComponent);
    return DashProjectComponent;
}());



/***/ }),

/***/ "./src/app/demo/dashboard/dash-project/dash-project.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.module.ts ***!
  \********************************************************************/
/*! exports provided: DashProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashProjectModule", function() { return DashProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-project-routing.module */ "./src/app/demo/dashboard/dash-project/dash-project-routing.module.ts");
/* harmony import */ var _dash_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-project.component */ "./src/app/demo/dashboard/dash-project/dash-project.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var DashProjectModule = /** @class */ (function () {
    function DashProjectModule() {
    }
    DashProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_project_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashProjectRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"]
            ],
            declarations: [_dash_project_component__WEBPACK_IMPORTED_MODULE_4__["DashProjectComponent"]]
        })
    ], DashProjectModule);
    return DashProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=dash-project-dash-project-module.js.map