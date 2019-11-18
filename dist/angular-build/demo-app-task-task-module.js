(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-app-task-task-module"],{

/***/ "./src/app/demo/app/task/task-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/app/task/task-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                loadChildren: './task-list/task-list.module#TaskListModule'
            },
            {
                path: 'board',
                loadChildren: './task-board/task-board.module#TaskBoardModule'
            },
            {
                path: 'detail',
                loadChildren: './task-detail/task-detail.module#TaskDetailModule'
            }
        ]
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/task/task.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/app/task/task.module.ts ***!
  \**********************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/demo/app/task/task-routing.module.ts");




var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _task_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaskRoutingModule"]
            ],
            declarations: []
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-app-task-task-module.js.map