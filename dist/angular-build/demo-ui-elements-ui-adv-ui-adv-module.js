(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-adv-ui-adv-module"],{

/***/ "./src/app/demo/ui-elements/ui-adv/ui-adv-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/ui-adv-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UiAdvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAdvRoutingModule", function() { return UiAdvRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadChildren: './adv-alert/adv-alert.module#AdvAlertModule'
            },
            {
                path: 'datepicker',
                loadChildren: './adv-datepicker/adv-datepicker.module#AdvDatepickerModule'
            },
            {
                path: 'task-board',
                loadChildren: './adv-task-board/adv-task-board.module#AdvTaskBoardModule'
            },
            {
                path: 'light-box',
                loadChildren: './adv-light-box/adv-light-box.module#AdvLightBoxModule'
            },
            {
                path: 'modal',
                loadChildren: './adv-modal/adv-modal.module#AdvModalModule'
            },
            {
                path: 'notification',
                loadChildren: './adv-notification/adv-notification.module#AdvNotificationModule'
            },
            {
                path: 'rating',
                loadChildren: './adv-rating/adv-rating.module#AdvRatingModule'
            }
        ]
    }
];
var UiAdvRoutingModule = /** @class */ (function () {
    function UiAdvRoutingModule() {
    }
    UiAdvRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UiAdvRoutingModule);
    return UiAdvRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/ui-adv.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/ui-adv.module.ts ***!
  \**********************************************************/
/*! exports provided: UiAdvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiAdvModule", function() { return UiAdvModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_adv_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-adv-routing.module */ "./src/app/demo/ui-elements/ui-adv/ui-adv-routing.module.ts");




var UiAdvModule = /** @class */ (function () {
    function UiAdvModule() {
    }
    UiAdvModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ui_adv_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiAdvRoutingModule"]
            ],
            declarations: []
        })
    ], UiAdvModule);
    return UiAdvModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-adv-ui-adv-module.js.map