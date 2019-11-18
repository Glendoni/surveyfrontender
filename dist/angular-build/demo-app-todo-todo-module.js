(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-app-todo-todo-module"],{

/***/ "./src/app/demo/app/todo/todo-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/app/todo/todo-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: './todo-list/todo-list.module#TodoListModule'
            }
        ]
    }
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/todo/todo.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/app/todo/todo.module.ts ***!
  \**********************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/demo/app/todo/todo-routing.module.ts");




var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodoRoutingModule"]
            ],
            declarations: []
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-app-todo-todo-module.js.map