(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-extension-invoice-invoice-module"],{

/***/ "./src/app/demo/extension/invoice/invoice-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: './invoice-basic/invoice-basic.module#InvoiceBasicModule'
            },
            {
                path: 'summary',
                loadChildren: './invoice-summary/invoice-summary.module#InvoiceSummaryModule'
            },
            {
                path: 'list',
                loadChildren: './invoice-list/invoice-list.module#InvoiceListModule'
            }
        ]
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice.module.ts ***!
  \**********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/demo/extension/invoice/invoice-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-extension-invoice-invoice-module.js.map