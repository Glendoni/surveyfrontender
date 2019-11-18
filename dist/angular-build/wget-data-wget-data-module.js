(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wget-data-wget-data-module"],{

/***/ "./src/app/demo/widget/wget-data/wget-data-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/widget/wget-data/wget-data-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: WgetDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetDataRoutingModule", function() { return WgetDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wget_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-data.component */ "./src/app/demo/widget/wget-data/wget-data.component.ts");




var routes = [
    {
        path: '',
        component: _wget_data_component__WEBPACK_IMPORTED_MODULE_3__["WgetDataComponent"]
    }
];
var WgetDataRoutingModule = /** @class */ (function () {
    function WgetDataRoutingModule() {
    }
    WgetDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WgetDataRoutingModule);
    return WgetDataRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-data/wget-data.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/wget-data/wget-data.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Rating\" cardClass=\"user-list\">\n      <div class=\"row align-items-center justify-content-center m-b-20\">\n        <div class=\"col-6\">\n          <h2 class=\"f-w-300 d-flex align-items-center float-left m-0\">4.7 <i class=\"fas fa-star f-10 m-l-10 text-c-yellow\"></i></h2>\n        </div>\n        <div class=\"col-6\">\n          <h6 class=\"d-flex  align-items-center float-right m-0\">0.4 <i class=\"fas fa-caret-up text-c-green f-22 m-l-10\"></i></h6>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>5</h6>\n          <h6 class=\"align-items-center float-right\">384</h6>\n          <div class=\"progress m-t-30 m-b-20\" style=\"height: 6px;\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-12\">\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>4</h6>\n          <h6 class=\"align-items-center float-right\">145</h6>\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-12\">\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>3</h6>\n          <h6 class=\"align-items-center float-right\">24</h6>\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-12\">\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>2</h6>\n          <h6 class=\"align-items-center float-right\">1</h6>\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 10%;\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-12\">\n          <h6 class=\"align-items-center float-left\"><i class=\"fas fa-star f-10 m-r-10 text-c-yellow\"></i>1</h6>\n          <h6 class=\"align-items-center float-right\">0</h6>\n          <div class=\"progress m-t-30  m-b-20\" style=\"height: 6px;\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card chat-sanders\">\n      <div class=\"card-header  borderless\">\n        <h5 class=\"text-white\">Chat with Kristina Sanders</h5>\n      </div>\n      <div class=\"card-block m-t-30 p-0\">\n        <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-width]=\"'auto'\" [style.max-height]=\"'305px'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n          <div style=\"padding:0 30px 35px 30px;\">\n            <p class=\"text-center text-muted\">JUN 23 3:46PM</p>\n            <div class=\"row m-b-20 received-chat align-items-end\">\n              <div class=\"col-auto p-r-0\">\n                <h5 class=\"text-white d-flex align-items-center theme-bg2 justify-content-center\">k</h5>\n              </div>\n              <div class=\"col\">\n                <div class=\"msg\">\n                  <h6 class=\"m-b-0\">How may i help you?</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"row m-b-20 send-chat align-items-end\">\n              <div class=\"col text-right\">\n                <div class=\"msg\">\n                  <h6 class=\"m-b-0 text-white\">I need support for my ticket XXX.</h6>\n                </div>\n              </div>\n              <div class=\"col-auto p-l-0\">\n                <h5 class=\"text-white d-flex align-items-center theme-bg justify-content-center\">Y</h5>\n              </div>\n            </div>\n            <div class=\"row m-b-20 received-chat align-items-end\">\n              <div class=\"col-auto p-r-0\">\n                <h5 class=\"text-white d-flex align-items-center  theme-bg2 justify-content-center\">k</h5>\n              </div>\n              <div class=\"col\">\n                <div class=\"msg\">\n                  <h6 class=\"m-b-0\">Our support staff will contact you soon..</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"row m-b-0 send-chat align-items-end\">\n              <div class=\"col text-right\">\n                <div class=\"msg\">\n                  <h6 class=\"m-b-0 text-white\">Nice to meet you!</h6>\n                </div>\n              </div>\n              <div class=\"col-auto p-l-0\">\n                <h5 class=\"text-white d-flex align-items-center theme-bg justify-content-center\">Y</h5>\n              </div>\n            </div>\n          </div>\n        </perfect-scrollbar>\n      </div>\n      <div class=\"right-icon-control border-top\">\n        <div class=\"input-group input-group-button p-10\">\n          <input type=\"text\" class=\"form-control border-0 text-muted\" placeholder=\"Write your message\">\n          <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><i class=\"fas f-20 fa-paper-plane\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-12\">\n    <app-card cardTitle=\"User List\">\n      <div class=\"to-do-list mb-3\">\n        <div class=\"checkbox-fade fade-in-default\">\n          <label class=\"check-task done-task\">\n            <input type=\"checkbox\" value=\"\" checked>\n            <span class=\"cr\">\n\t\t\t\t\t\t\t\t\t                               <i class=\"cr-icon fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t                        </span>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\">\n              </div>\n              <div class=\"col\">\n                <h6>Silje Larsen</h6>\n                <p class=\"text-muted m-0\">Invertory System</p>\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list mb-3\">\n        <div class=\"checkbox-fade fade-in-default\">\n          <label class=\"check-task\">\n            <input type=\"checkbox\" value=\"\">\n            <span class=\"cr\">\n\t\t\t\t\t\t\t\t\t                               <i class=\"cr-icon fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t                        </span>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\">\n              </div>\n              <div class=\"col\">\n                <h6>Storm Hansen</h6>\n                <p class=\"text-muted m-0\">System Analytic</p>\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list mb-3\">\n        <div class=\"checkbox-fade fade-in-default\">\n          <label class=\"check-task\">\n            <input type=\"checkbox\" value=\"\">\n            <span class=\"cr\">\n\t\t\t\t\t\t\t\t\t                               <i class=\"cr-icon fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t                        </span>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\">\n              </div>\n              <div class=\"col\">\n                <h6>Frida Thomsen</h6>\n                <p class=\"text-muted m-0\">Last login 21/03/2017</p>\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list mb-3\">\n        <div class=\"checkbox-fade fade-in-default\">\n          <label class=\"check-task\">\n            <input type=\"checkbox\" value=\"\">\n            <span class=\"cr\">\n\t\t\t\t\t\t\t\t\t                               <i class=\"cr-icon fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t                        </span>\n            <div class=\"row\">\n              <div class=\"col-auto\">\n                <img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\">\n              </div>\n              <div class=\"col\">\n                <h6>Aksel Andersen</h6>\n                <p class=\"text-muted m-0\">Last seen 23/05/2017</p>\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"row m-t-35\">\n        <div class=\"col-6 p-r-0\">\n          <a href=\"javascript:\" class=\"btn btn-primary  text-uppercase btn-block p-15 f-14\">add friend</a>\n        </div>\n        <div class=\"col-6\">\n          <a href=\"javascript:\" class=\"btn text-uppercase border btn-block btn-outline-secondary p-15 f-14\">message</a>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Notifications\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-timeline\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-green f-10 m-r-10\"></i>\n                <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\"></a>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">The Quick Brown Fox Jumps</h6>\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of…</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-timeline\">\n            <div class=\"media\">\n\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-yellow f-10 m-r-10\"></i>\n                <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\"></a>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">Over The Lazy Dog</h6>\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of…</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-timeline\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-blue f-10 m-r-10\"></i>\n                <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\"></a>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">The Quick Brown Fox</h6>\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of…</p>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-0\">\n          <div class=\"widget-timeline\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-blue f-10 m-r-10\"></i>\n                <a href=\"javascript:\"><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\"></a>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">The Quick Brown Fox Jumps</h6>\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of…</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"To-Do\" cardClass=\"to-do\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-todo\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-green f-10 mr-2\"></i>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">Today 15:30</h6>\n                <p class=\"m-b-0 text-muted\">Meeting with Sara and Cristiane</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-todo\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-green f-10 mr-2\"></i>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">Today 19:15</h6>\n                <p class=\"m-b-0 text-muted\">Soccer game with family</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-30\">\n          <div class=\"widget-todo\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-blue f-10 mr-2\"></i>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">Tomorrow 08:45</h6>\n                <p class=\"m-b-0 text-muted\">Check all emails</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 m-b-0\">\n          <div class=\"widget-todo\">\n            <div class=\"media\">\n              <div class=\"mr-3 photo-table\">\n                <i class=\"fas fa-circle text-c-green f-10 mr-2\"></i>\n              </div>\n              <div class=\"media-body\">\n                <h6 class=\"d-inline-block\">Tomorrow 02:45</h6>\n                <p class=\"m-b-0 text-muted\">Soccer game with family</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"to-do-button\">\n          <button class=\"btn btn-primary\"><i class=\"fas fa-plus f-14 mr-0\"></i></button>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"card-header\" cardClass=\"note-bar\" blockClass=\"p-0\">\n      <a href=\"javascript:\" class=\"media friendlist-box\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order received</h6>\n          <span class=\"f-12 float-right text-muted\">12.56</span>\n          <p class=\"text-muted m-0\">2 unread notification</p>\n        </div>\n      </a>\n      <a href=\"javascript:\" class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New user register</h6>\n          <span class=\"f-12 float-right text-muted\">12.36</span>\n          <p class=\"text-muted m-0\">xx messages</p>\n        </div>\n      </a>\n      <a href=\"javascript:\" class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order register</h6>\n          <span class=\"f-12 float-right text-muted\">11.45</span>\n          <p class=\"text-muted m-0\">2 read notification</p>\n        </div>\n      </a>\n      <div class=\"media friendlist-box border-top\">\n        <div class=\"mr-3 photo-table\">\n          <i class=\"far fa-bell f-30\"></i>\n        </div>\n        <div class=\"media-body\">\n          <h6>New order prepend</h6>\n          <span class=\"f-12 float-right text-muted\">9.39</span>\n          <p class=\"text-muted m-0\">xx messages</p>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card lazy-dog\">\n      <div class=\"card-header\">\n        <h5>Do you know Datta Able is released?</h5>\n      </div>\n      <div class=\"card-block\">\n        <p>Datta Able comes with Bootstrap 4 & Angular 6. It is best kind of own Dashboard categoty.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card Design-sprint theme-bg2\">\n      <div class=\"card-header borderless\">\n        <h5 class=\"text-white\">Project Design Sprint</h5>\n        <span class=\"d-block text-white mt-2\">11 MAY 10:35</span>\n      </div>\n      <div class=\"card-block\">\n        <p class=\"text-white\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n        <ul class=\"design-image\">\n          <li>\n            <button class=\"btn bg-white\"><i class=\"fas fa-plus f-14 mr-0\"></i></button>\n          </li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\"></li>\n          <li><img class=\"rounded-circle\" style=\"width:40px;\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\"></li>\n          <li class=\"text-white\">+63</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <div class=\"card widget-content\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 m-b-20\">\n            <div class=\"widget-lorem\">\n              <div class=\"media align-items-center justify-content-center receive-bar\">\n                <div class=\"mr-3 photo-table\">\n                  <h5 class=\"theme-bg text-white d-flex align-items-center justify-content-center\">Q</h5>\n                </div>\n                <div class=\"media-body\">\n                  <h4>What is Lorem Ipsum?</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-12 m-b-0\">\n            <div class=\"widget-lorem\">\n              <div class=\"media send-bar\">\n                <div class=\"mr-3 photo-table\">\n                  <h5 class=\"text-white d-flex theme-bg2 align-items-center justify-content-center\">A</h5>\n                </div>\n                <div class=\"media-body\">\n                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Social Media Comparison\" cardClass=\"social-media\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 mb-4\">\n          <h6 class=\"m-b-20 text-center\">Facebook <span class=\"ml-4\">Twitter</span></h6>\n          <div class=\"progress\">\n            <h5 class=\"m-r-20 m-b-0\">67%</h5>\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 40%; height:12px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 40%; height:12px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <h5 class=\"m-l-20 m-b-0\">23%</h5>\n          </div>\n          <h6 class=\"m-t-20 text-center text-muted\">5326 <span class=\"m-l-15\">234</span></h6>\n        </div>\n        <div class=\"col-xl-12  mb-4\">\n          <h6 class=\"m-b-20 text-center\">Pinterest <span class=\"ml-4\">Instagram</span></h6>\n          <div class=\"progress\">\n            <h5 class=\"m-r-20 m-b-0\">46%</h5>\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:12px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 35%; height:12px;\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <h5 class=\"m-l-20 m-b-0\">54%</h5>\n          </div>\n          <h6 class=\"m-t-20 text-center text-muted\">2856 <span class=\"m-l-15\">5258</span></h6>\n        </div>\n        <div class=\"col-xl-12  mb-0\">\n          <h6 class=\"m-b-20 text-center\">YouTube <span class=\"ml-4\">Vimeo</span></h6>\n          <div class=\"progress\">\n            <h5 class=\"m-r-20 m-b-0\">59%</h5>\n            <div class=\"progress-bar progress-c-theme2\" role=\"progressbar\" style=\"width: 30%; height:12px;\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar progress-c-theme\" role=\"progressbar\" style=\"width: 40%; height:12px;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <h5 class=\"m-l-20 m-b-0\">41%</h5>\n          </div>\n          <h6 class=\"m-t-20 text-center text-muted\">2989 <span class=\"m-l-15\">2873</span></h6>\n        </div>\n\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/widget/wget-data/wget-data.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/wget-data/wget-data.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vd2lkZ2V0L3dnZXQtZGF0YS93Z2V0LWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/widget/wget-data/wget-data.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/widget/wget-data/wget-data.component.ts ***!
  \**************************************************************/
/*! exports provided: WgetDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetDataComponent", function() { return WgetDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WgetDataComponent = /** @class */ (function () {
    function WgetDataComponent() {
    }
    WgetDataComponent.prototype.ngOnInit = function () {
    };
    WgetDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wget-data',
            template: __webpack_require__(/*! ./wget-data.component.html */ "./src/app/demo/widget/wget-data/wget-data.component.html"),
            styles: [__webpack_require__(/*! ./wget-data.component.scss */ "./src/app/demo/widget/wget-data/wget-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WgetDataComponent);
    return WgetDataComponent;
}());



/***/ }),

/***/ "./src/app/demo/widget/wget-data/wget-data.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demo/widget/wget-data/wget-data.module.ts ***!
  \***********************************************************/
/*! exports provided: WgetDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgetDataModule", function() { return WgetDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wget_data_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wget-data-routing.module */ "./src/app/demo/widget/wget-data/wget-data-routing.module.ts");
/* harmony import */ var _wget_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wget-data.component */ "./src/app/demo/widget/wget-data/wget-data.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var WgetDataModule = /** @class */ (function () {
    function WgetDataModule() {
    }
    WgetDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _wget_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["WgetDataRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_wget_data_component__WEBPACK_IMPORTED_MODULE_4__["WgetDataComponent"]]
        })
    ], WgetDataModule);
    return WgetDataModule;
}());



/***/ })

}]);
//# sourceMappingURL=wget-data-wget-data-module.js.map