(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-list-todo-list-module"],{

/***/ "./src/app/demo/app/todo/todo-list/todo-list-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/app/todo/todo-list/todo-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TodoListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListRoutingModule", function() { return TodoListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/demo/app/todo/todo-list/todo-list.component.ts");




var routes = [
    {
        path: '',
        component: _todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
    }
];
var TodoListRoutingModule = /** @class */ (function () {
    function TodoListRoutingModule() {
    }
    TodoListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoListRoutingModule);
    return TodoListRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/todo/todo-list/todo-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/app/todo/todo-list/todo-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"To Do Card List\" [options]=\"false\">\n      <div class=\"input-group mb-3\">\n        <input type=\"text\" [(ngModel)]=\"todoCardMessage\" autocomplete=\"off\" name=\"task-insert\" class=\"form-control\" placeholder=\"Create your task list\" required=\"\" (keyup)=\"todo_card_message_error = false\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-icon\" [ngClass]=\"{'btn-danger': todo_card_message_error, 'btn-secondary': !todo_card_message_error}\" id=\"create-task\" (click)=\"addTodoCard()\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n      </div>\n      <section id=\"task-container\">\n        <ul id=\"task-list\">\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <li appTodoCardComplete>\n            <p>Lorem Ipsum Dolor Sit Amet</p>\n          </li>\n          <span [innerHTML]=\"newTodoCard\"></span>\n        </ul>\n        <div class=\"text-center\">\n          <button id=\"clear-all-tasks\" class=\"btn btn-primary m-b-0\" type=\"button\" (click)=\"clearAllTodoCardTask()\">Clear All Tasks</button>\n        </div>\n      </section>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"To Do List\" [options]=\"false\">\n      <div class=\"input-group mb-3\">\n        <input type=\"text\" [(ngModel)]=\"todoListMessage\" autocomplete=\"off\" name=\"task-insert\" class=\"form-control add_task_todo\" placeholder=\"Create your task list\" required=\"\" (keyup)=\"todo_list_message_error = false\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-icon\" id=\"add-btn\" [ngClass]=\"{'btn-danger': todo_list_message_error, 'btn-secondary': !todo_list_message_error}\" (click)=\"addTodoList()\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"new-task\">\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Lorem Ipsum Dolor Sit Amet</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Industry's standard dummy text ever since the 1500s</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">The point of using Lorem Ipsum is that it has a more-or-less </span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Contrary to popular belief</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">There are many variations of passages of Lorem Ipsum</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Sed ut perspiciatis unde omnis iste natus</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck7\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\"> must explain to you how all this mistaken idea</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <span [innerHTML]=\"newTodoList\"></span>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"To Do List in Modal\" [options]=\"false\">\n      <div class=\"tasks-widget\">\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck8\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Lorem Ipsum Dolor Sit Amet</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck9\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Contrary to popular belief</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck10\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Lorem Ipsum Dolor Sit Amet</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <div class=\"to-do-list mb-3\">\n          <div class=\"d-inline-block\">\n            <label class=\"check-task custom-control custom-checkbox d-flex justify-content-center\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck11\" (change)=\"completeTodoList($event)\">\n              <span class=\"custom-control-label\">Sed ut perspiciatis unde omnis iste natus</span>\n            </label>\n          </div>\n          <div class=\"float-right\"><a href=\"javascript:\" class=\"delete_todolist\" appTodoListRemove><i class=\"far fa-trash-alt\"></i></a></div>\n        </div>\n        <span [innerHTML]=\"newTodoModal\"></span>\n      </div>\n      <div>\n        <button type=\"button\" class=\"btn btn-primary btn-add-task m-t-10\" (click)=\"modalDefault.show()\">Add New Tasks</button>\n        <app-ui-modal #modalDefault>\n          <div class=\"app-modal-header\">\n            <h4 class=\"modal-title\">Add new todo</h4>\n            <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalDefault.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n          </div>\n          <div class=\"app-modal-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-material\">\n                  <div class=\"right-icon-control\">\n                    <form class=\"form-material\" action=\"javascript:\">\n                      <div class=\"form-group form-primary\">\n                        <input type=\"text\" [(ngModel)]=\"todoModalMessage\" autocomplete=\"off\" name=\"task-insert\" class=\"form-control save_task_todo\" placeholder=\"Create your task list\" required=\"\" (keyup)=\"todo_modal_message_error = false\">\n                        <span class=\"form-bar\"></span>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"app-modal-footer\">\n            <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-danger': todo_modal_message_error, 'btn-primary': !todo_modal_message_error}\" (click)=\"addTodoModal();\">Save</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #defaultClick (click)=\"modalDefault.hide()\">Close</button>\n          </div>\n        </app-ui-modal>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/app/todo/todo-list/todo-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demo/app/todo/todo-list/todo-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYXBwL3RvZG8vdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/app/todo/todo-list/todo-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/app/todo/todo-list/todo-list.component.ts ***!
  \****************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import {forEach} from '@angular/router/src/utils/collection';
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.newTodoCard = '';
        this.newTodoList = '';
        this.newTodoModal = '';
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.addTodoCard = function () {
        if (this.todoCardMessage === '' || this.todoCardMessage === undefined) {
            this.todo_card_message_error = true;
        }
        else {
            var html_todo = '<li>' +
                '<p>' + this.todoCardMessage + '</p>' +
                '</li>';
            this.newTodoCard = this.newTodoCard + html_todo;
            this.todoCardMessage = '';
        }
    };
    TodoListComponent.prototype.clearAllTodoCardTask = function () {
        var cardTodoList = document.querySelectorAll('#task-list li');
        for (var i = 0; i < cardTodoList.length; i++) {
            cardTodoList[i].remove();
        }
        this.newTodoCard = '';
    };
    TodoListComponent.prototype.addTodoList = function () {
        if (this.todoListMessage === '' || this.todoListMessage === undefined) {
            this.todo_list_message_error = true;
        }
        else {
            var random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
            var html_todo = '<div class="to-do-list mb-3">' +
                '<div class="d-inline-block">' +
                '<label class="check-task custom-control custom-checkbox d-flex justify-content-center">' +
                '<input type="checkbox" class="custom-control-input" id="info_' + random + '" (change)="completeTodoList($event)">' +
                '<span class="custom-control-label">' + this.todoListMessage + '</span>' +
                '</label>' +
                '</div>' +
                '<div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div>' +
                '</div>';
            this.newTodoList = this.newTodoList + html_todo;
            this.todoListMessage = '';
        }
    };
    TodoListComponent.prototype.completeTodoList = function (e) {
        e.target.parentElement.classList.remove('done-task');
        if (e.target.checked) {
            e.target.parentElement.classList.add('done-task');
        }
    };
    TodoListComponent.prototype.addTodoModal = function () {
        if (this.todoModalMessage === '' || this.todoModalMessage === undefined) {
            this.todo_modal_message_error = true;
        }
        else {
            var random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
            var html_todo = '<div class="to-do-list mb-3">' +
                '<div class="d-inline-block">' +
                '<label class="check-task custom-control custom-checkbox d-flex justify-content-center">' +
                '<input type="checkbox" class="custom-control-input" id="info_' + random + '" (change)="completeTodoList($event)">' +
                '<span class="custom-control-label">' + this.todoModalMessage + '</span>' +
                '</label>' +
                '</div>' +
                '<div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div>' +
                '</div>';
            this.newTodoModal = this.newTodoModal + html_todo;
            this.todoModalMessage = '';
            var el = this.defaultClick.nativeElement;
            el.click();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultClick'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TodoListComponent.prototype, "defaultClick", void 0);
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/demo/app/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/demo/app/todo/todo-list/todo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/demo/app/todo/todo-list/todo-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/app/todo/todo-list/todo-list.module.ts ***!
  \*************************************************************/
/*! exports provided: TodoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModule", function() { return TodoListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list-routing.module */ "./src/app/demo/app/todo/todo-list/todo-list-routing.module.ts");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/demo/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _todo_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodoListRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"]]
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ })

}]);
//# sourceMappingURL=todo-list-todo-list-module.js.map