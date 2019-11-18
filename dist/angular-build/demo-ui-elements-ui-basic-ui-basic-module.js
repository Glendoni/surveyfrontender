(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-basic-ui-basic-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UiBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicRoutingModule", function() { return UiBasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadChildren: './basic-alert/basic-alert.module#BasicAlertModule'
            },
            {
                path: 'button',
                loadChildren: './basic-button/basic-button.module#BasicButtonModule'
            },
            {
                path: 'badges',
                loadChildren: './basic-badge/basic-badge.module#BasicBadgeModule'
            },
            {
                path: 'breadcrumb-paging',
                loadChildren: './breadcrumb-paging/breadcrumb-paging.module#BreadcrumbPagingModule'
            },
            {
                path: 'cards',
                loadChildren: './basic-cards/basic-cards.module#BasicCardsModule'
            },
            {
                path: 'collapse',
                loadChildren: './basic-collapse/basic-collapse.module#BasicCollapseModule'
            },
            {
                path: 'carousel',
                loadChildren: './basic-carousel/basic-carousel.module#BasicCarouselModule'
            },
            {
                path: 'grid-system',
                loadChildren: './basic-grid/basic-grid.module#BasicGridModule'
            },
            {
                path: 'progress',
                loadChildren: './basic-progress-bar/basic-progress-bar.module#BasicProgressBarModule'
            },
            {
                path: 'modal',
                loadChildren: './basic-modal/basic-modal.module#BasicModalModule'
            },
            {
                path: 'tabs-pills',
                loadChildren: './basic-tabs-pills/basic-tabs-pills.module#BasicTabsPillsModule'
            },
            {
                path: 'typography',
                loadChildren: './basic-typography/basic-typography.module#BasicTypographyModule'
            },
            {
                path: 'tooltip-popovers',
                loadChildren: './basic-tooltip-popovers/basic-tooltip-popovers.module#BasicTooltipPopoversModule'
            },
            {
                path: 'other',
                loadChildren: './basic-other/basic-other.module#BasicOtherModule'
            }
        ]
    }
];
var UiBasicRoutingModule = /** @class */ (function () {
    function UiBasicRoutingModule() {
    }
    UiBasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UiBasicRoutingModule);
    return UiBasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/*! exports provided: UiBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicModule", function() { return UiBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-basic-routing.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts");




var UiBasicModule = /** @class */ (function () {
    function UiBasicModule() {
    }
    UiBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiBasicRoutingModule"]
            ]
        })
    ], UiBasicModule);
    return UiBasicModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-basic-ui-basic-module.js.map