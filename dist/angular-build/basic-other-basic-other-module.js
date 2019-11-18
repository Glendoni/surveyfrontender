(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-other-basic-other-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicOtherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherRoutingModule", function() { return BasicOtherRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts");




var routes = [
    {
        path: '',
        component: _basic_other_component__WEBPACK_IMPORTED_MODULE_3__["BasicOtherComponent"]
    }
];
var BasicOtherRoutingModule = /** @class */ (function () {
    function BasicOtherRoutingModule() {
    }
    BasicOtherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicOtherRoutingModule);
    return BasicOtherRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Shadows\" [options]=\"false\">\n      <div class=\"shadow-none p-3 mb-5 bg-light rounded\">No shadow</div>\n      <div class=\"shadow-sm p-3 mb-5 bg-white rounded\">Small shadow</div>\n      <div class=\"shadow p-3 mb-5 bg-white rounded\">Regular shadow</div>\n      <div class=\"shadow-lg p-3 mb-5 bg-white rounded\">Larger shadow</div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Embeds\" [options]=\"false\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-8\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ilLU5vxhLYA?rel=0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Aspect Ratios\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5 class=\"mt-5\">Aspect Ratios 21by9</h5>\n          <hr>\n          <div class=\"embed-responsive embed-responsive-21by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ilLU5vxhLYA?rel=0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h5 class=\"mt-5\">Aspect Ratios 16by9</h5>\n          <hr>\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ilLU5vxhLYA?rel=0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h5 class=\"mt-5\">Aspect Ratios 4by3</h5>\n          <hr>\n          <div class=\"embed-responsive embed-responsive-4by3\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ilLU5vxhLYA?rel=0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h5 class=\"mt-5\">Aspect Ratios 1by1</h5>\n          <hr>\n          <div class=\"embed-responsive embed-responsive-1by1\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ilLU5vxhLYA?rel=0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtb3RoZXIvYmFzaWMtb3RoZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherComponent", function() { return BasicOtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicOtherComponent = /** @class */ (function () {
    function BasicOtherComponent() {
    }
    BasicOtherComponent.prototype.ngOnInit = function () {
    };
    BasicOtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-other',
            template: __webpack_require__(/*! ./basic-other.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.html"),
            styles: [__webpack_require__(/*! ./basic-other.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicOtherComponent);
    return BasicOtherComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicOtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function() { return BasicOtherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-other-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var BasicOtherModule = /** @class */ (function () {
    function BasicOtherModule() {
    }
    BasicOtherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicOtherRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_other_component__WEBPACK_IMPORTED_MODULE_4__["BasicOtherComponent"]]
        })
    ], BasicOtherModule);
    return BasicOtherModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-other-basic-other-module.js.map