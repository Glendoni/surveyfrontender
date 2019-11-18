(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-progress-bar-basic-progress-bar-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: BasicProgressBarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarRoutingModule", function() { return BasicProgressBarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-progress-bar.component */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts");




var routes = [
    {
        path: '',
        component: _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["BasicProgressBarComponent"]
    }
];
var BasicProgressBarRoutingModule = /** @class */ (function () {
    function BasicProgressBarRoutingModule() {
    }
    BasicProgressBarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicProgressBarRoutingModule);
    return BasicProgressBarRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Progress\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"0\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"25\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"50\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"75\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"100\"></ngb-progressbar></div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Labels\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar [showValue]=\"true\" [value]=\"25\"></ngb-progressbar></div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Height\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar height=\"1px\" [value]=\"25\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar height=\"20px\" [value]=\"25\"></ngb-progressbar></div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Backgrounds\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\">default</ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\">success</ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\">info</ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\">warning</ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\">danger</ngb-progressbar></div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Striped\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\" [striped]=\"true\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Animated Stripes\" [options]=\"false\">\n      <div class=\"mb-4\"><ngb-progressbar [value]=\"20\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\n      <div class=\"mb-4\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\" [animated]=\"stripAnimation\"></ngb-progressbar></div>\n      <button type=\"button\" class=\"btn btn-secondary bd-toggle-animated-progress\" data-toggle=\"button\" aria-pressed=\"false\" (click)=\"this.stripAnimation = !this.stripAnimation\">Toggle Animation</button>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtcHJvZ3Jlc3MtYmFyL2Jhc2ljLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BasicProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarComponent", function() { return BasicProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicProgressBarComponent = /** @class */ (function () {
    function BasicProgressBarComponent() {
        this.stripAnimation = true;
    }
    BasicProgressBarComponent.prototype.ngOnInit = function () {
    };
    BasicProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-progress-bar',
            template: __webpack_require__(/*! ./basic-progress-bar.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./basic-progress-bar.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicProgressBarComponent);
    return BasicProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBarModule", function() { return BasicProgressBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-progress-bar-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar-routing.module.ts");
/* harmony import */ var _basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-progress-bar.component */ "./src/app/demo/ui-elements/ui-basic/basic-progress-bar/basic-progress-bar.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var BasicProgressBarModule = /** @class */ (function () {
    function BasicProgressBarModule() {
    }
    BasicProgressBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicProgressBarRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"]
            ],
            declarations: [_basic_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["BasicProgressBarComponent"]]
        })
    ], BasicProgressBarModule);
    return BasicProgressBarModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-progress-bar-basic-progress-bar-module.js.map