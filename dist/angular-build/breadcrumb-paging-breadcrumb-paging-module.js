(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["breadcrumb-paging-breadcrumb-paging-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: BreadcrumbPagingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingRoutingModule", function() { return BreadcrumbPagingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb-paging.component */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts");




var routes = [
    {
        path: '',
        component: _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbPagingComponent"]
    }
];
var BreadcrumbPagingRoutingModule = /** @class */ (function () {
    function BreadcrumbPagingRoutingModule() {
    }
    BreadcrumbPagingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BreadcrumbPagingRoutingModule);
    return BreadcrumbPagingRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Breadcrumb\" [options]=\"false\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n        </ol>\n      </nav>\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Home</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n        </ol>\n      </nav>\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Library</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n        </ol>\n      </nav>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card cardTitle=\"Breadcrumb Icon\" [options]=\"false\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"feather icon-home\"></i></li>\n        </ol>\n      </nav>\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\"><i class=\"feather icon-home\"></i></a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n        </ol>\n      </nav>\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\"><i class=\"feather icon-home\"></i></a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Library</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n        </ol>\n      </nav>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Breadcrumb Live\" [options]=\"false\">\n      <p>use <code>[type]</code> input parameter with <code>app-breadcrumb</code> tag to set breadcrumb theme.</p>\n      <app-breadcrumb [type]=\"breadcrumbTheme\"></app-breadcrumb>\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"breadcrumbTheme\">\n        <label class=\"btn btn-primary\" ngbButtonLabel><input type=\"radio\" ngbButton name=\"theme\" id=\"theme1\" value=\"theme1\"> Simple</label>\n        <label class=\"btn btn-primary\" ngbButtonLabel><input type=\"radio\" ngbButton name=\"theme\" id=\"theme2\" value=\"theme2\"> Icon</label>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Basic Pagination\" [options]=\"false\">\n      <p>click <a target=\"_blank\" href=\"https://ng-bootstrap.github.io/#/components/pagination/examples\" class=\"badge badge-primary\">ng-bootstrap</a> for pagination guide.</p>\n      <h5 class=\"mt-5\">Default pagination:</h5>\n      <hr>\n      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPage\" aria-label=\"Default pagination\"></ngb-pagination>\n      <h5 class=\"mt-5\">No direction links:</h5>\n      <hr>\n      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"noDirectionPage\" [directionLinks]=\"false\"></ngb-pagination>\n      <h5 class=\"mt-5\">With boundary links:</h5>\n      <hr>\n      <div class=\"horizontal-scroll\"><ngb-pagination [collectionSize]=\"70\" [(page)]=\"boundaryPage\" [boundaryLinks]=\"true\"></ngb-pagination></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Advanced Pagination\" [options]=\"false\">\n      <h5 class=\"mt-5\">Restricted size, no rotation:</h5>\n      <hr>\n      <div class=\"horizontal-scroll\"><ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancePage\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination></div>\n      <h5 class=\"mt-5\">Restricted size with rotation:</h5>\n      <hr>\n      <div class=\"horizontal-scroll\"><ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancePage\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination></div>\n      <h5 class=\"mt-5\">Restricted size with rotation and no ellipses:</h5>\n      <hr>\n      <div class=\"horizontal-scroll\"><ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancePage\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Pagination Size\" [options]=\"false\">\n      <h5 class=\"mt-5\">Large Size:</h5>\n      <hr>\n      <div class=\"horizontal-scroll\"><ngb-pagination [collectionSize]=\"50\" [(page)]=\"sizePage\" size=\"lg\"></ngb-pagination></div>\n      <h5 class=\"mt-5\">Medium Size (Default):</h5>\n      <hr>\n      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"sizePage\"></ngb-pagination>\n      <h5 class=\"mt-5\">Small Size:</h5>\n      <hr>\n      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"sizePage\" size=\"sm\"></ngb-pagination>\n    </app-card>\n  </div>\n  <div class=\"col-md-6\">\n    <app-card cardTitle=\"Pagination Alignment\" [options]=\"false\">\n      <h5 class=\"mt-5\">Left:</h5>\n      <hr>\n      <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"alignmentPage\"></ngb-pagination>\n      <h5 class=\"mt-5\">Center:</h5>\n      <hr>\n      <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"alignmentPage\"></ngb-pagination>\n      <h5 class=\"mt-5\">Right:</h5>\n      <hr>\n      <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"alignmentPage\"></ngb-pagination>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Disabled Pagination\" [options]=\"false\">\n      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"disablePage\" [disabled]='isDisabled'></ngb-pagination>\n      <button class=\"btn btn-sm btn-outline-primary\" (click)=\"this.isDisabled = !this.isDisabled\">{{this.isDisabled === false ? 'Disable' : 'Enable'}}</button>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYnJlYWRjcnVtYi1wYWdpbmcvYnJlYWRjcnVtYi1wYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BreadcrumbPagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingComponent", function() { return BreadcrumbPagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbPagingComponent = /** @class */ (function () {
    function BreadcrumbPagingComponent() {
        this.breadcrumbTheme = 'theme1';
        this.defaultPage = 5;
        this.noDirectionPage = 4;
        this.boundaryPage = 3;
        this.advancePage = 5;
        this.sizePage = 3;
        this.alignmentPage = 3;
        this.disablePage = 3;
        this.isDisabled = true;
    }
    BreadcrumbPagingComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbPagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb-paging',
            template: __webpack_require__(/*! ./breadcrumb-paging.component.html */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb-paging.component.scss */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbPagingComponent);
    return BreadcrumbPagingComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: BreadcrumbPagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingModule", function() { return BreadcrumbPagingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb-paging-routing.module */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts");
/* harmony import */ var _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb-paging.component */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var BreadcrumbPagingModule = /** @class */ (function () {
    function BreadcrumbPagingModule() {
    }
    BreadcrumbPagingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbPagingRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"]
            ],
            declarations: [_breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbPagingComponent"]]
        })
    ], BreadcrumbPagingModule);
    return BreadcrumbPagingModule;
}());



/***/ })

}]);
//# sourceMappingURL=breadcrumb-paging-breadcrumb-paging-module.js.map