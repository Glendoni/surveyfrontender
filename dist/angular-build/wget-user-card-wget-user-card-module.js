(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wget-user-card-wget-user-card-module"],{

/***/ "./src/app/demo/widget/wget-user-card/wget-user-card-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/widget/wget-user-card/wget-user-card-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WgetUserCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetUserCardRoutingModule", function() { return WgetUserCardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wget_user_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-user-card.component */ "./src/app/demo/widget/wget-user-card/wget-user-card.component.ts");




var routes = [
    {
        path: '',
        component: _wget_user_card_component__WEBPACK_IMPORTED_MODULE_3__["WgetUserCardComponent"]
    }
];
var WgetUserCardRoutingModule = /** @class */ (function () {
    function WgetUserCardRoutingModule() {
    }
    WgetUserCardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WgetUserCardRoutingModule);
    return WgetUserCardRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-user-card/wget-user-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo/widget/wget-user-card/wget-user-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card dashboard-user\">\n      <img class=\"img-fluid\" src=\"assets/images/widget/dashborad-1.jpg\" alt=\"dashboard-user\">\n      <div class=\"card-block\">\n        <h5>Dashboard UI Kit</h5>\n        <span class=\"text-muted\">By Creative Studio Form</span>\n        <div class=\"row m-t-30\">\n          <div class=\"col-6 p-r-0\">\n            <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\">add friend</a>\n          </div>\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card dashboard-Kit\">\n      <div class=\"card-block\">\n        <img class=\"img-fluid\" style=\"width:100%;\" src=\"assets/images/widget/dashborad-2.jpg\" alt=\"dashboard-user\">\n        <h5 class=\"m-t-35\">Dashboard UI Kit</h5>\n        <span class=\"text-muted\">By Creative Studio Form</span>\n        <p class=\"border-top m-b-20 p-t-10 m-t-20\"></p>\n        <div class=\"row\">\n          <div class=\"col\">\n            <h5>$ 5236.42</h5>\n            <span>BUDGET</span>\n          </div>\n          <div class=\"col\">\n            <h5>9 May 2017</h5>\n            <span>DEADLINE</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card dashboard-ui\">\n      <div class=\"card-block\">\n        <img class=\"img-fluid\" style=\"width:100%;\" src=\"assets/images/widget/dashborad-3.jpg\" alt=\"dashboard-user\">\n        <h5 class=\"m-t-35\">Dashboard UI Kit</h5>\n        <span class=\"text-muted d-block m-b-30\">By Creative Studio Form</span>\n        <h6 class=\"m-b-0\">$ 2356.23 <span class=\"float-right\">$ 3200.00</span></h6>\n        <div class=\"progress m-t-10\" style=\"height: 7px;\">\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 69%;\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <div class=\"row m-t-30\">\n          <div class=\"col-6 p-r-0\">\n            <a href=\"javascript:\" class=\"btn btn-primary  text-uppercase btn-block f-14\">add friend</a>\n          </div>\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img class=\"img-fluid\" src=\"assets/images/widget/dashborad-5.jpg\" alt=\"dashboard-user\">\n          </div>\n\n          <div class=\"col\">\n            <h5 class=\"mb-3\">Dashboard UI Kit</h5>\n            <h6 class=\"m-b-0\">$ 2356.23 <span class=\"float-right\">$ 32</span></h6>\n            <div class=\"progress m-t-10\" style=\"height: 7px;\">\n              <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 69%;\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card table-card\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-auto\">\n          <img class=\"img-fluid\" src=\"assets/images/widget/dashborad-4.jpg\" alt=\"dashboard-user\">\n        </div>\n        <div class=\"col p-l-0\">\n          <h4>$ 59,48 <i class=\"fas fa-caret-up text-c-green f-22 m-l-5\"></i></h4>\n          <span>EARNINGS</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img class=\"img-fluid\" src=\"assets/images/widget/dashborad-5.jpg\" alt=\"dashboard-user\">\n          </div>\n\n          <div class=\"col\">\n            <h5 class=\"mb-3\">Dashboard UI Kit</h5>\n            <h6 class=\"m-b-0\">$ 2463.23 <span class=\"float-right\">$ 64</span></h6>\n            <div class=\"progress m-t-10\" style=\"height: 7px;\">\n              <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 40%;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card dashboard-kit\">\n      <div class=\"card-block\">\n        <h5>Dashboard UI Kit</h5>\n        <span class=\"text-muted\">By Creative Studio Form</span>\n        <img class=\"img-fluid mt-4\" style=\"width:100%;\" src=\"assets/images/widget/dashborad-1.jpg\" alt=\"dashboard-user\">\n        <ul class=\"design-image\">\n          <li>\n            <button class=\"btn bg-muted\"><i class=\"fas fa-plus f-14 mr-0\"></i></button>\n          </li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\"></li>\n          <li class=\"text-muted\">+63</li>\n        </ul>\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"mb-2\">Post with emoticons</h5>\n        <span class=\"text-muted d-block\">May 12, 2017</span>\n      </div>\n      <div class=\"card-block post-emoticon\">\n        <img class=\"img-fluid\" style=\"width:100%;\" src=\"assets/images/widget/emoticon.jpg\" alt=\"dashboard-user\">\n        <ul>\n          <li class=\"m-r-25\"><i class=\"far fa-smile f-26 text-c-green m-r-10\"></i>235</li>\n          <li class=\"m-r-25\"><i class=\"far fa-smile f-26 text-c-purple m-r-10\"></i>95</li>\n          <li class=\"m-r-0\"><i class=\"far fa-smile f-26 text-c-red m-r-10\"></i>18</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-block p-0\">\n        <img class=\"img-fluid\" style=\"width:100%;\" src=\"assets/images/widget/dashborad-2.jpg\" alt=\"dashboard-user\">\n        <div class=\"ux-designer\">\n          <button class=\"btn btn-primary\"><i class=\"fas fa-plus f-14 mr-0\"></i></button>\n          <h5>Alma Christensen</h5>\n          <span>UX Designer</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card theme-bg2 visa-top\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white float-left\">John Doe</h5>\n        <img class=\"img-fluid float-right\" src=\"assets/images/widget/visa-logo.png\" alt=\"visa-logo\">\n      </div>\n      <div class=\"card-block visa\">\n        <h6 class=\"f-w-600 text-white \">VALID <span class=\"f-w-300 m-l-10\">05/17</span></h6>\n        <h3 class=\"f-w-300 text-white m-t-25 m-b-0\">4883 2359 9932 3445</h3>\n        <span class=\"text-white\">5346</span>\n        <img class=\"img-fluid\" src=\"assets/images/widget/visa-background.png\" alt=\"visa-background\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card theme-bg visa-top\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white float-left\">Villads Johansen</h5>\n        <img class=\"img-fluid float-right\" src=\"assets/images/widget/master-logo.png\" alt=\"visa-logo\">\n      </div>\n      <div class=\"card-block visa\">\n        <h6 class=\"f-w-600 text-white \">NOT VALID <span class=\"f-w-300 m-l-10\">10/17</span></h6>\n        <h3 class=\"f-w-300 text-white m-t-25 m-b-0\">5635 2489 8596 3445</h3>\n        <span class=\"text-white\">1025</span>\n        <img class=\"img-fluid\" src=\"assets/images/widget/visa-background.png\" alt=\"visa-background\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <div class=\"card bg-c-blue visa-top\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white float-left\">Silje Larsen</h5>\n        <img class=\"img-fluid float-right\" src=\"assets/images/widget/rupay-logo.png\" alt=\"visa-logo\">\n      </div>\n      <div class=\"card-block visa\">\n        <h6 class=\"f-w-600 text-white \">VALID <span class=\"f-w-300 m-l-10\">09/18</span></h6>\n        <h3 class=\"f-w-300 text-white m-t-25 m-b-0\">7895 2359 1534 6548</h3>\n        <span class=\"text-white\">7852</span>\n        <img class=\"img-fluid\" src=\"assets/images/widget/visa-background.png\" alt=\"visa-background\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card loction-user\">\n      <div class=\"card-block p-0\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img class=\"img-fluid rounded-circle\" style=\"width:80px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"dashboard-user\">\n          </div>\n          <div class=\"col\">\n            <h5>Villads Johansen</h5>\n            <span><i class=\"fas fa-map-marker-alt f-18 m-r-5\"></i> Berlin, Germany</span>\n          </div>\n        </div>\n        <div class=\"border-top\"></div>\n        <div class=\"loction-progress\">\n          <h6 class=\"m-b-10\">Twitter<span class=\"float-right\">Google +</span></h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h5 class=\"f-w-300 m-t-20  text-muted\">62%<span class=\"float-right\">28%</span></h5>\n          <h6 class=\"m-b-10 m-t-20\">Facebook <span class=\"float-right\">Youtube</span></h6>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 40%; height:10px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 30%; height:10px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h5 class=\"f-w-300 m-t-20  text-muted\">60%<span class=\"float-right\">40%</span></h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"text-center m-b-30\">\n          <img class=\"img-fluid rounded-circle\" src=\"assets/images/user/avatar-2.jpg\" alt=\"dashboard-user\">\n          <h5 class=\"mt-3\">Mille Jensen</h5>\n          <span class=\"d-block\">Ninja Level 14</span>\n        </div>\n        <h6 class=\" m-b-0\">754 Points <span class=\"float-right\">1000</span></h6>\n        <div class=\"progress m-t-10\" style=\"height: 7px;\">\n          <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <div class=\"row m-t-30\">\n          <div class=\"col-6 p-r-0\">\n            <a href=\"javascript:\" class=\"btn btn-primary text-uppercase btn-block f-14\">add friend</a>\n          </div>\n          <div class=\"col-6\">\n            <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card user-designer\">\n      <div class=\"card-block text-center\">\n        <h5>Alma Christensen</h5>\n        <span class=\"d-block mb-4\">UX Designer</span>\n        <img class=\"img-fluid rounded-circle\" style=\"width:70px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"dashboard-user\">\n        <div class=\"row m-t-30\">\n          <div class=\"col-md-4 col-6\">\n            <h5>974</h5>\n            <span class=\"text-muted\">IMAGES</span>\n          </div>\n          <div class=\"col-md-4 col-6\">\n            <h5>35.7k</h5>\n            <span class=\"text-muted\">LIKES</span>\n          </div>\n          <div class=\"col-md-4 col-12\">\n            <h5>236</h5>\n            <span class=\"text-muted\">FOLLOW</span>\n          </div>\n        </div>\n        <div class=\"designer m-t-30\">\n          <a href=\"javascript:\" class=\"btn btn-primary  text-uppercase btn-block f-14\">add friend</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card Design-sprint theme-bg2\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Project Design Sprint</h5>\n        <span class=\"d-block text-white mt-3 f-w-300\">11 MAY 10:35</span>\n      </div>\n      <div class=\"card-block\">\n        <p class=\"text-white f-w-300\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.....</p>\n        <p class=\"text-white f-w-300\">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>\n        <ul class=\"design-image\">\n          <li>\n            <button class=\"btn bg-white\"><i class=\"fas fa-plus f-14 mr-0\"></i></button>\n          </li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\"></li>\n          <li class=\"text-white\">+63</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-auto\">\n            <img class=\"img-fluid rounded-circle\" style=\"width:70px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"dashboard-user\">\n          </div>\n          <div class=\"col\">\n            <h5>Alma Christensen</h5>\n            <span>UX Designer</span>\n          </div>\n        </div>\n        <ul class=\"task-list\">\n          <li>\n            <i class=\"task-icon bg-c-green\"></i>\n            <h6>Anton Knudsen<span class=\"float-right text-muted\">14 MAY</span></h6>\n            <p class=\"text-muted\">Lorem ipsum is dolorem…</p>\n          </li>\n          <li>\n            <i class=\"task-icon bg-c-green\"></i>\n            <h6>Anton Knudsen<span class=\"float-right text-muted\">14 MAY</span></h6>\n            <p class=\"text-muted\">Lorem ipsum is dolorem…</p>\n          </li>\n          <li>\n            <i class=\"task-icon bg-c-green\"></i>\n            <h6>Anton Knudsen<span class=\"float-right text-muted\">14 MAY</span></h6>\n            <p class=\"text-muted\">Lorem ipsum is dolorem…</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-block p-0\">\n        <div class=\"text-center project-main\">\n          <img class=\"img-fluid rounded-circle\" src=\"assets/images/user/avatar-3.jpg\" alt=\"dashboard-user\">\n          <h5 class=\"mt-4\">Alma Christensen</h5>\n          <span>UX Designer</span>\n          <div class=\"row m-t-30\">\n            <div class=\"col-6 p-r-0\">\n              <a href=\"javascript:\" class=\"btn btn-primary  text-uppercase btn-block f-14\">add friend</a>\n            </div>\n            <div class=\"col-6\">\n              <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-top\"></div>\n        <div class=\"project-main\">\n          <div class=\"row text-center\">\n            <div class=\"col-md-4 col-6\">\n              <h6 class=\"text-muted\"><i class=\"fas fa-star m-r-5\"></i> 4.8</h6>\n            </div>\n            <div class=\"col-md-4 col-6\">\n              <h6 class=\"text-muted\"><i class=\"fas fa-map-marker-alt m-r-5\"></i>USA</h6>\n            </div>\n            <div class=\"col-md-4 col-12\">\n              <h6 class=\"text-muted m-0\"><i class=\"fas fa-file-alt m-r-5\"></i> 28 Task</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/widget/wget-user-card/wget-user-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/widget/wget-user-card/wget-user-card.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vd2lkZ2V0L3dnZXQtdXNlci1jYXJkL3dnZXQtdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/widget/wget-user-card/wget-user-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/wget-user-card/wget-user-card.component.ts ***!
  \************************************************************************/
/*! exports provided: WgetUserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetUserCardComponent", function() { return WgetUserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WgetUserCardComponent = /** @class */ (function () {
    function WgetUserCardComponent() {
    }
    WgetUserCardComponent.prototype.ngOnInit = function () {
    };
    WgetUserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wget-user-card',
            template: __webpack_require__(/*! ./wget-user-card.component.html */ "./src/app/demo/widget/wget-user-card/wget-user-card.component.html"),
            styles: [__webpack_require__(/*! ./wget-user-card.component.scss */ "./src/app/demo/widget/wget-user-card/wget-user-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WgetUserCardComponent);
    return WgetUserCardComponent;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-user-card/wget-user-card.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/widget/wget-user-card/wget-user-card.module.ts ***!
  \*********************************************************************/
/*! exports provided: WgetUserCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetUserCardModule", function() { return WgetUserCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wget_user_card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-user-card-routing.module */ "./src/app/demo/widget/wget-user-card/wget-user-card-routing.module.ts");
/* harmony import */ var _wget_user_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wget-user-card.component */ "./src/app/demo/widget/wget-user-card/wget-user-card.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var WgetUserCardModule = /** @class */ (function () {
    function WgetUserCardModule() {
    }
    WgetUserCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _wget_user_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["WgetUserCardRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_wget_user_card_component__WEBPACK_IMPORTED_MODULE_4__["WgetUserCardComponent"]]
        })
    ], WgetUserCardModule);
    return WgetUserCardModule;
}());



/***/ })

}]);
//# sourceMappingURL=wget-user-card-wget-user-card-module.js.map