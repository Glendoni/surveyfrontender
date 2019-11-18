(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-detail-task-detail-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/interval.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./src/app/demo/app/task/task-detail/task-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/app/task/task-detail/task-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TaskDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailRoutingModule", function() { return TaskDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-detail.component */ "./src/app/demo/app/task/task-detail/task-detail.component.ts");




var routes = [
    {
        path: '',
        component: _task_detail_component__WEBPACK_IMPORTED_MODULE_3__["TaskDetailComponent"]
    }
];
var TaskDetailRoutingModule = /** @class */ (function () {
    function TaskDetailRoutingModule() {
    }
    TaskDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaskDetailRoutingModule);
    return TaskDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/task/task-detail/task-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/app/task/task-detail/task-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4 col-lg-12 task-detail-right\">\n    <app-card cardTitle=\"Task Timer\" [options]=\"false\" blockClass=\"bg-c-blue\" [hidHeader]=\"true\">\n      <div class=\"counter text-center\">\n        <h4 id=\"timer\">\n          <b>{{(dYears !== 0 && dYears !== undefined) ? dYears : ''}}</b>{{(dYears !== 0 && dYears !== undefined) ? 'y : ' : ''}}\n          <b>{{dDays}}</b>d :\n          <b>{{dHours}}</b>h :\n          <b>{{dMinutes}}</b>m :\n          <b>{{dSeconds}}</b>s\n        </h4>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Task Details\" blockClass=\"task-details\" [options]=\"false\">\n      <table class=\"table\">\n        <tbody>\n        <tr>\n          <td><i class=\"fas fa-adjust m-r-5\"></i> Project:</td>\n          <td class=\"text-right\"><span class=\"float-right\"><a class=\"text-secondary\" href=\"javascript:\"> Singular app</a></span></td>\n        </tr>\n        <tr>\n          <td><i class=\"far fa-calendar-alt m-r-5\"></i> Updated:</td>\n          <td class=\"text-right\">12 May, 2015</td>\n        </tr>\n        <tr>\n          <td><i class=\"far fa-credit-card m-r-5\"></i> Created:</td>\n          <td class=\"text-right\">25 Feb, 2015</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-chart-line m-r-5\"></i> Priority:</td>\n          <td class=\"text-right\">\n            <div class=\"btn-group\">\n              <a href=\"javascript:\" class=\"text-secondary\"><i class=\"fas fa-upload m-r-5\"></i> Highest</a>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-sync-alt m-r-5\"></i> Revisions:</td>\n          <td class=\"text-right\">29</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-user-plus m-r-5\"></i> Added by:</td>\n          <td class=\"text-right\"><a class=\"text-secondary\" href=\"javascript:\">Winnie</a></td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-thermometer-half m-r-5\"></i> Status:</td>\n          <td class=\"text-right\">Published</td>\n        </tr>\n        </tbody>\n      </table>\n      <div>\n        <span>\n          <a href=\"javascript:\" class=\"text-muted f-16 m-r-10\"><i class=\"fas fa-random\"></i> </a>\n        </span>\n        <span class=\"m-r-10\">\n          <a href=\"javascript:\" class=\"text-muted f-16\"><i class=\"fas fa-ellipsis-v\"></i></a>\n        </span>\n        <div class=\"btn-group d-inline-block\" ngbDropdown [placement]=\"'bottom-left'\">\n          <button class=\"btn drp-icon btn-primary\" ngbDropdownToggle type=\"button\"><i class=\"feather icon-thumbs-up\"></i></button>\n          <div ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"javascript:\">Check in</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Attach screenshot</a>\n            <a class=\"dropdown-item active\" href=\"javascript:\">Reassign</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:\">Edit task</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Remove</a>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Task settings\" blockClass=\"task-setting\" [options]=\"false\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-1\" checked>\n                <label for=\"switch-1\" class=\"cr\"></label>\n              </div>\n              <label>Publish after save</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-2\" checked>\n                <label for=\"switch-2\" class=\"cr\"></label>\n              </div>\n              <label>Allow comments</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-3\" checked>\n                <label for=\"switch-3\" class=\"cr\"></label>\n              </div>\n              <label>Allow users to edit the task</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-4\">\n                <label for=\"switch-4\" class=\"cr\"></label>\n              </div>\n              <label>Use task timer</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-5\">\n                <label for=\"switch-5\" class=\"cr\"></label>\n              </div>\n              <label>Auto saving</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-6\">\n                <label for=\"switch-6\" class=\"cr\"></label>\n              </div>\n              <label>Auto saving</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group  mb-0\">\n              <div class=\"switch d-inline m-r-10\">\n                <input type=\"checkbox\" id=\"switch-7\">\n                <label for=\"switch-7\" class=\"cr\"></label>\n              </div>\n              <label>Allow attachments</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center mt-2\">\n          <div class=\"col-sm-12\">\n            <button type=\"button\" class=\"btn btn-secondary \">Reset\n            </button>\n            <button type=\"button\" class=\"btn btn-primary  \">Save</button>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Revisions\" [options]=\"false\">\n      <div class=\"taskboard-right-revision user-box\">\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <a class=\"btn btn-outline-primary btn-icon\" href=\"javascript:\" role=\"button\"><i class=\"fas fa-user-secret\"></i>\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <div class=\"chat-header f-w-400 mb-1\">Drop the IE specific hacks for temporal inputs</div>\n            <p class=\"chat-header  text-muted\">4 minutes ago</p>\n          </div>\n        </div>\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <a class=\"btn btn-outline-danger btn-icon\" href=\"javascript:\" role=\"button\"><i class=\"fas fa-anchor\"></i>\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <div class=\"chat-header f-w-400 mb-1\">Add full font overrides for popovers and tooltips</div>\n            <p class=\"chat-header text-muted\">36 minutes ago</p>\n          </div>\n        </div>\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <a class=\"btn btn-outline-warning btn-icon\" href=\"javascript:\" role=\"button\"><i class=\"fas fa-desktop\"></i>\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <div class=\"chat-header f-w-400 mb-1\">created a new Design branch</div>\n            <p class=\"chat-header text-muted\">2 month ago</p>\n          </div>\n        </div>\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <a class=\"btn btn-outline-success btn-icon\" href=\"javascript:\" role=\"button\"><i class=\"fas fa-briefcase\"></i>\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <div class=\"chat-header\">merged Master and Dev branches</div>\n            <p class=\"chat-header  text-muted\">6 month ago</p>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"Attached Files\" blockClass=\"task-attachment\" [options]=\"false\">\n      <ul class=\"media-list p-0\">\n        <li class=\"media d-flex m-b-15\">\n          <div class=\"m-r-20 file-attach\">\n            <i class=\"far fa-file-word f-28 text-muted\"></i>\n          </div>\n          <div class=\"media-body\">\n            <a href=\"javascript:\" class=\"m-b-5 d-block text-secondary\">Overdrew_scowled.doc</a>\n            <div class=\"text-muted\">\n              <span>Size: 1.2Mb</span>\n              <span> Added by <a href=\"javascript:\" class=\"text-secondary\">Winnie</a></span>\n            </div>\n          </div>\n          <div class=\"float-right text-muted\">\n            <i class=\"fas fa-download f-18\"></i>\n          </div>\n        </li>\n        <li class=\"media d-flex m-b-15\">\n          <div class=\"m-r-20 file-attach\">\n            <i class=\"far fa-file-powerpoint f-28 text-muted\"></i>\n          </div>\n          <div class=\"media-body\">\n            <a href=\"javascript:\" class=\"m-b-5 d-block text-secondary\">And_less_maternally.pdf</a>\n            <div class=\"text-muted\">\n              <span>Size: 0.11Mb</span>\n              <span> Added by <a href=\"javascript:\" class=\"text-secondary\">Eugene</a></span>\n            </div>\n          </div>\n          <div class=\"float-right text-muted\">\n            <i class=\"fas fa-download f-18\"></i>\n          </div>\n        </li>\n        <li class=\"media d-flex m-b-15\">\n          <div class=\"m-r-20 file-attach\">\n            <i class=\"far fa-file-pdf f-28 text-muted\"></i>\n          </div>\n          <div class=\"media-body\">\n            <a href=\"javascript:\" class=\"m-b-5 d-block text-secondary\">The_less_overslept.pdf</a>\n            <div class=\"text-muted\">\n              <span>Size:5.9Mb</span>\n              <span> Added by <a href=\"javascript:\" class=\"text-secondary\">Natalie</a></span>\n            </div>\n          </div>\n          <div class=\"float-right text-muted\">\n            <i class=\"fas fa-download f-18\"></i>\n          </div>\n        </li>\n        <li class=\"media d-flex m-b-15\">\n          <div class=\"m-r-20 file-attach\">\n            <i class=\"far fa-file-excel f-28 text-muted\"></i>\n          </div>\n          <div class=\"media-body\">\n            <a href=\"javascript:\" class=\"m-b-5 d-block text-secondary\">Well_equitably.mov</a>\n            <div class=\"text-muted\">\n              <span>Size:20.9Mb</span>\n              <span> Added by <a href=\"javascript:\" class=\"text-secondary\">Jenny</a></span>\n            </div>\n          </div>\n          <div class=\"float-right text-muted\">\n            <i class=\"fas fa-download f-18\"></i>\n          </div>\n        </li>\n      </ul>\n    </app-card>\n    <app-card cardTitle=\"Assigned Users\" blockClass=\"user-box assign-user\" [options]=\"false\">\n      <div class=\"media\">\n        <div class=\"media-left media-middle mr-3\">\n          <a href=\"javascript:\">\n            <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h6>Sortino media</h6>\n          <p>Software Engineer</p>\n        </div>\n        <div>\n          <a href=\"javascript:\" class=\"text-muted\"> <i class=\"icon-options-vertical\"></i></a>\n        </div>\n      </div>\n      <div class=\"media\">\n        <div class=\"media-left media-middle mr-3\">\n          <a href=\"javascript:\">\n            <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"chat-user\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h6>Larry heading </h6>\n          <p>Web Designer</p>\n        </div>\n        <div>\n          <a href=\"javascript:\" class=\"text-muted\"> <i class=\"icon-options-vertical\"></i></a>\n        </div>\n      </div>\n      <div class=\"media\">\n        <div class=\"media-left media-middle mr-3\">\n          <a href=\"javascript:\">\n            <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"chat-user\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h6>Mark</h6>\n          <p>Chief Financial Officer (CFO)</p>\n        </div>\n        <div>\n          <a href=\"javascript:\" class=\"text-muted\"> <i class=\"icon-options-vertical\"></i></a>\n        </div>\n      </div>\n      <div class=\"media p-0 d-flex\">\n        <div class=\"media-left media-middle mr-3\">\n          <a href=\"javascript:\">\n            <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"chat-user\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h6>John Doe</h6>\n          <p>Senior Marketing Designer</p>\n        </div>\n        <div>\n          <a href=\"javascript:\" class=\"text-muted\"> <i class=\"icon-options-vertical\"></i></a>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-8 col-lg-12\">\n    <app-card [customHeader]=\"true\" [options]=\"false\">\n      <div class=\"app-card-header\">\n        <h5 class=\"mb-3\"><i class=\"fas fa-ticket-alt m-r-5\"></i> Ticket List Doesn't Support Commas</h5>\n        <button class=\"btn btn-primary float-right f-14\"><i class=\"far fa-bell m-r-5\"></i>Check in</button>\n      </div>\n      <div class=\"m-b-20\">\n        <h6>Overview</h6>\n        <hr>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n      </div>\n      <div class=\"m-b-20\">\n        <h6>What we need</h6>\n        <hr>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n      </div>\n      <div class=\"m-b-20 col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12 col-lg-6\">\n            <div class=\"text-primary f-14 m-b-10\">\n              1. The standard Lorem Ipsum passage\n            </div>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n          </div>\n          <div class=\"col-md-12 col-lg-6\">\n            <div class=\"text-primary f-14 m-b-10\">\n              2. The standard Lorem Ipsum passage\n            </div>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"m-b-20\">\n        <h6>Requirements</h6>\n        <hr>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n        <div class=\"table-responsive m-t-20\">\n          <table class=\"table m-b-0 f-14 b-solid requid-table\">\n            <thead>\n            <tr class=\"text-uppercase\">\n              <th class=\"text-center\">#</th>\n              <th class=\"text-center\">Task</th>\n              <th class=\"text-center\">Due Date</th>\n              <th class=\"text-center\">Description</th>\n            </tr>\n            </thead>\n            <tbody class=\"text-center text-muted\">\n            <tr>\n              <td>1</td>\n              <td>Design mockup</td>\n              <td> <i class=\"far fa-calendar-alt\"></i>&nbsp; 22 December, 16</td>\n              <td>The standard Lorem Ipsum passage</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Software Engineer</td>\n              <td> <i class=\"far fa-calendar-alt\"></i>&nbsp; 01 December, 16</td>\n              <td>The standard Lorem Ipsum passage</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Photoshop And Illustrator</td>\n              <td> <i class=\"far fa-calendar-alt\"></i>&nbsp; 15 December, 16</td>\n              <td>The standard Lorem Ipsum passage</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>Allocated Resource</td>\n              <td> <i class=\"far fa-calendar-alt\"></i>&nbsp; 28 December, 16</td>\n              <td>The standard Lorem Ipsum passage</td>\n            </tr>\n            <tr>\n              <td>5</td>\n              <td>Financial Controlle</td>\n              <td> <i class=\"far fa-calendar-alt\"></i>&nbsp; 20 December, 16</td>\n              <td>The standard Lorem Ipsum passage</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"float-left mt-4\"><span class=\"txt-primary m-r-5\"> <i class=\"fas fa-chart-line\"></i>Status:</span>\n        <div class=\"dropdown-secondary d-inline-block\" ngbDropdown [placement]=\"'top-left'\">\n          <button class=\"btn btn btn-primary\" ngbDropdownToggle type=\"button\">Open</button>\n          <div ngbDropdownMenu>\n            <a class=\"dropdown-item active\" href=\"javascript:\">Open</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">On hold</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Resolved</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Closed</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:\">Dublicate</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Invalid</a>\n            <a class=\"dropdown-item\" href=\"javascript:\">Wontfix</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"float-right d-flex mt-4\">\n        <span><a href=\"javascript:\" class=\"text-muted m-r-10 f-16\"><i class=\"fas fa-edit\"></i> </a></span>\n        <span class=\"m-r-10\"><a href=\"javascript:\" class=\"text-muted f-16\"><i class=\"fas fa-trash\"></i></a></span>\n      </div>\n    </app-card>\n    <app-card [customHeader]=\"true\" blockClass=\"task-comment\" [options]=\"false\">\n      <div class=\"app-card-header\">\n        <h5 class=\"card-header-text\"><i class=\"fas fa-plus m-r-5\"></i> Comments</h5>\n        <button type=\"button\" class=\"btn btn-icon btn-primary float-right m-0\"><i class=\"fas fa-plus\"></i></button>\n      </div>\n      <ul class=\"media-list p-0\">\n        <li class=\"media\">\n          <div class=\"media-left mr-3\">\n            <a href=\"javascript:\">\n              <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"m-t-10 m-b-25\">\n              <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n            </div>\n            <hr>\n            <div class=\"media mt-2\">\n              <a class=\"media-left mr-3\" href=\"javascript:\">\n                <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              </a>\n              <div class=\"media-body\">\n                <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n                <div class=\"m-t-10 m-b-25\">\n                  <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n                </div>\n                <hr>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"media mt-2\">\n          <div class=\"media-left mr-3\">\n            <a href=\"javascript:\">\n              <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"m-t-10 m-b-25\">\n              <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n            </div>\n            <hr>\n          </div>\n        </li>\n        <li class=\"media\">\n          <div class=\"media-left mr-3\">\n            <a href=\"javascript:\">\n              <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"m-t-10 m-b-25\">\n              <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n            </div>\n            <hr>\n            <div class=\"media mt-2\">\n              <a class=\"media-left mr-3\" href=\"javascript:\">\n                <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              </a>\n              <div class=\"media-body\">\n                <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n                <div class=\"m-t-10 m-b-25\">\n                  <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n                </div>\n                <hr>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"media mt-2\">\n          <div class=\"media-left mr-3\">\n            <a href=\"javascript:\">\n              <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"m-t-10 m-b-25\">\n              <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n            </div>\n            <hr>\n          </div>\n        </li>\n        <li class=\"media mt-2\">\n          <div class=\"media-left mr-3\">\n            <a href=\"javascript:\">\n              <img class=\"media-object img-radius comment-img\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"m-t-10 m-b-25\">\n              <span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Reply</a></span><span><a href=\"javascript:\" class=\"m-r-10 text-secondary\">Edit</a> </span>\n            </div>\n            <hr>\n          </div>\n        </li>\n      </ul>\n      <div class=\"input-group mb-3\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Add Task...\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary btn-icon\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/app/task/task-detail/task-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/app/task/task-detail/task-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYXBwL3Rhc2svdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/app/task/task-detail/task-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/app/task/task-detail/task-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent() {
        this.futureString = 'January 1, 2020 12:00:00';
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date(this.futureString);
        this.$counter = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });
        this.subscription = this.$counter.subscribe(function (x) { return _this.message = _this.dhms(_this.diff); });
    };
    TaskDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TaskDetailComponent.prototype.dhms = function (t) {
        var years = 0;
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        days = Math.floor(t / 86400);
        if (days > 365) {
            years = Math.floor(days / 365);
            days = days - (years * 365);
        }
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.dYears = years;
        this.dDays = days;
        this.dHours = hours;
        this.dMinutes = minutes;
        this.dSeconds = seconds;
        return [
            years + ' years',
            days + ' days',
            hours + ' hours',
            minutes + ' min',
            seconds + ' sec'
        ].join(' ');
    };
    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/demo/app/task/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ./task-detail.component.scss */ "./src/app/demo/app/task/task-detail/task-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/demo/app/task/task-detail/task-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/app/task/task-detail/task-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailModule", function() { return TaskDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-detail-routing.module */ "./src/app/demo/app/task/task-detail/task-detail-routing.module.ts");
/* harmony import */ var _task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail.component */ "./src/app/demo/app/task/task-detail/task-detail.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var TaskDetailModule = /** @class */ (function () {
    function TaskDetailModule() {
    }
    TaskDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaskDetailRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"]
            ],
            declarations: [_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"]]
        })
    ], TaskDetailModule);
    return TaskDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=task-detail-task-detail-module.js.map