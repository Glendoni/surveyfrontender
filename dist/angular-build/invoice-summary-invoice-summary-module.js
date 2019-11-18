(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-summary-invoice-summary-module"],{

/***/ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-summary/invoice-summary-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: InvoiceSummaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryRoutingModule", function() { return InvoiceSummaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-summary.component */ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.ts");




var routes = [
    {
        path: '',
        component: _invoice_summary_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceSummaryComponent"]
    }
];
var InvoiceSummaryRoutingModule = /** @class */ (function () {
    function InvoiceSummaryRoutingModule() {
    }
    InvoiceSummaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoiceSummaryRoutingModule);
    return InvoiceSummaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Sales and Expenses\" [options]=\"false\">\n      <div id=\"morris-bar-chart\" mk-morris-js [options]=\"barSaleExpensesMorrisOption\" [data]=\"barSaleExpensesMorrisData\" type=\"Bar\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Sales, Receipt and Dues\" [options]=\"false\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-hover m-0\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Sales</th>\n            <th>Receipt</th>\n            <th>Dues</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">Today</th>\n            <td>$250.00</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Week</th>\n            <td>$380.00</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Month</th>\n            <td>$450.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Year</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@facebook</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Total</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@google</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Recent Orders\" [options]=\"false\" blockClass=\"table-border-style invoice-summary\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-styling\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Order No.</th>\n            <th>Product Name</th>\n            <th>Quantity</th>\n            <th>Price</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>54822</td>\n            <td>Product 1</td>\n            <td>2</td>\n            <td>\n              <label class=\"label label-md label-danger\">$99.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>54823</td>\n            <td>Product 2</td>\n            <td>1</td>\n            <td>\n              <label class=\"label label-md label-success\">$29.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>54824</td>\n            <td>Product 3</td>\n            <td>3</td>\n            <td>\n              <label class=\"label label-md label-warning\">$109.00</label>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0ZW5zaW9uL2ludm9pY2UvaW52b2ljZS1zdW1tYXJ5L2ludm9pY2Utc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryComponent", function() { return InvoiceSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/morris.js/morris.js */ "./node_modules/morris.js/morris.js");
/* harmony import */ var _node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_morris_js_morris_js__WEBPACK_IMPORTED_MODULE_2__);



var InvoiceSummaryComponent = /** @class */ (function () {
    function InvoiceSummaryComponent() {
        this.barSaleExpensesMorrisOption = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Sales', 'Expenses'],
            resize: true,
            responsive: true,
            barSizeRatio: 0.70,
            barGap: 5,
            barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4']
        };
        this.barSaleExpensesMorrisData = [
            { y: '2012', a: 50, b: 40 },
            { y: '2013', a: 75, b: 65 },
            { y: '2014', a: 50, b: 40 },
            { y: '2015', a: 75, b: 65 },
            { y: '2016', a: 100, b: 90 }
        ];
    }
    InvoiceSummaryComponent.prototype.ngOnInit = function () {
    };
    InvoiceSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-summary',
            template: __webpack_require__(/*! ./invoice-summary.component.html */ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.html"),
            styles: [__webpack_require__(/*! ./invoice-summary.component.scss */ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoiceSummaryComponent);
    return InvoiceSummaryComponent;
}());



/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-summary/invoice-summary.module.ts ***!
  \**********************************************************************************/
/*! exports provided: InvoiceSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryModule", function() { return InvoiceSummaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_summary_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-summary-routing.module */ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary-routing.module.ts");
/* harmony import */ var _invoice_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-summary.component */ "./src/app/demo/extension/invoice/invoice-summary/invoice-summary.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-morris-js */ "./node_modules/angular-morris-js/esm5/angular-morris-js.js");







var InvoiceSummaryModule = /** @class */ (function () {
    function InvoiceSummaryModule() {
    }
    InvoiceSummaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoice_summary_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceSummaryRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular_morris_js__WEBPACK_IMPORTED_MODULE_6__["MorrisJsModule"]
            ],
            declarations: [_invoice_summary_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceSummaryComponent"]]
        })
    ], InvoiceSummaryModule);
    return InvoiceSummaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-summary-invoice-summary-module.js.map