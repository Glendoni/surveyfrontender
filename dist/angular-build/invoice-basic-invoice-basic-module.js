(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-basic-invoice-basic-module"],{

/***/ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-basic/invoice-basic-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: InvoiceBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBasicRoutingModule", function() { return InvoiceBasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-basic.component */ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.ts");




var routes = [
    {
        path: '',
        component: _invoice_basic_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceBasicComponent"]
    }
];
var InvoiceBasicRoutingModule = /** @class */ (function () {
    function InvoiceBasicRoutingModule() {
    }
    InvoiceBasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoiceBasicRoutingModule);
    return InvoiceBasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- [ Invoice ] start -->\n  <div class=\"container\">\n    <div>\n      <div class=\"card\">\n        <div class=\"row invoice-contact\">\n          <div class=\"col-md-8\">\n            <div class=\"invoice-box row\">\n              <div class=\"col-sm-12\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-responsive invoice-table table-borderless\">\n                    <tbody>\n                      <tr>\n                        <td><img src=\"assets/images/logo-dark.png\" class=\"m-b-10\" alt=\"\"></td>\n                      </tr>\n                      <tr>\n                        <td>Company name </td>\n                      </tr>\n                      <tr>\n                        <td>1065 Mandan Road, Columbia MO, Missouri. (123)-65202</td>\n                      </tr>\n                      <tr>\n                        <td><a class=\"text-secondary\" href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a></td>\n                      </tr>\n                      <tr>\n                        <td>+91 919-91-91-919</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\"></div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"row invoive-info\">\n            <div class=\"col-md-4 col-xs-12 invoice-client-info\">\n              <h6>Client Information :</h6>\n              <h6 class=\"m-0\">Josephin Villa</h6>\n              <p class=\"m-0 m-t-10\">1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>\n              <p class=\"m-0\">(1234) - 567891</p>\n              <p><a class=\"text-secondary\" href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a></p>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n              <h6>Order Information :</h6>\n              <table class=\"table table-responsive invoice-table invoice-order table-borderless\">\n                <tbody>\n                <tr>\n                  <th>Date :</th>\n                  <td>November 14</td>\n                </tr>\n                <tr>\n                  <th>Status :</th>\n                  <td>\n                    <span class=\"label label-warning\">Pending</span>\n                  </td>\n                </tr>\n                <tr>\n                  <th>Id :</th>\n                  <td>\n                    #146859\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n              <h6 class=\"m-b-20\">Invoice Number <span>#123685479624</span></h6>\n              <h6 class=\"text-uppercase text-primary\">Total Due :\n                <span>$950.00</span>\n              </h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"table-responsive\">\n                <table class=\"table invoice-detail-table\">\n                  <thead>\n                  <tr class=\"thead-default\">\n                    <th>Description</th>\n                    <th>Quantity</th>\n                    <th>Amount</th>\n                    <th>Total</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <td>\n                      <h6>Logo Design</h6>\n                      <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                    </td>\n                    <td>6</td>\n                    <td>$200.00</td>\n                    <td>$1200.00</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h6>Logo Design</h6>\n                      <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                    </td>\n                    <td>7</td>\n                    <td>$100.00</td>\n                    <td>$700.00</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <h6>Logo Design</h6>\n                      <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                    </td>\n                    <td>5</td>\n                    <td>$150.00</td>\n                    <td>$750.00</td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <table class=\"table table-responsive invoice-table invoice-total\">\n                <tbody>\n                <tr>\n                  <th>Sub Total :</th>\n                  <td>$4725.00</td>\n                </tr>\n                <tr>\n                  <th>Taxes (10%) :</th>\n                  <td>$57.00</td>\n                </tr>\n                <tr>\n                  <th>Discount (5%) :</th>\n                  <td>$45.00</td>\n                </tr>\n                <tr class=\"text-info\">\n                  <td>\n                    <hr />\n                    <h5 class=\"text-primary m-r-10\">Total :</h5>\n                  </td>\n                  <td>\n                    <hr />\n                    <h5 class=\"text-primary\">$4827.00</h5>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h6>Terms And Condition :</h6>\n              <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row text-center\">\n        <div class=\"col-sm-12 invoice-btn-group text-center\">\n          <button type=\"button\" class=\"btn btn-primary btn-print-invoice m-b-10\">Print</button>\n          <button type=\"button\" class=\"btn btn-secondary m-b-10 \">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ Invoice ] end -->\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0ZW5zaW9uL2ludm9pY2UvaW52b2ljZS1iYXNpYy9pbnZvaWNlLWJhc2ljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvoiceBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBasicComponent", function() { return InvoiceBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoiceBasicComponent = /** @class */ (function () {
    function InvoiceBasicComponent() {
    }
    InvoiceBasicComponent.prototype.ngOnInit = function () {
    };
    InvoiceBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-basic',
            template: __webpack_require__(/*! ./invoice-basic.component.html */ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.html"),
            styles: [__webpack_require__(/*! ./invoice-basic.component.scss */ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoiceBasicComponent);
    return InvoiceBasicComponent;
}());



/***/ }),

/***/ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-basic/invoice-basic.module.ts ***!
  \******************************************************************************/
/*! exports provided: InvoiceBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBasicModule", function() { return InvoiceBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-basic-routing.module */ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic-routing.module.ts");
/* harmony import */ var _invoice_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-basic.component */ "./src/app/demo/extension/invoice/invoice-basic/invoice-basic.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var InvoiceBasicModule = /** @class */ (function () {
    function InvoiceBasicModule() {
    }
    InvoiceBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoice_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceBasicRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_invoice_basic_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceBasicComponent"]]
        })
    ], InvoiceBasicModule);
    return InvoiceBasicModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-basic-invoice-basic-module.js.map