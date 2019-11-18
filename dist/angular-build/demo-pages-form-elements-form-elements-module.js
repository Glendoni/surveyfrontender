(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-form-elements-form-elements-module"],{

/***/ "./src/app/demo/pages/form-elements/form-elements-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormElementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsRoutingModule", function() { return FormElementsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
            },
            {
                path: 'advance',
                loadChildren: './frm-advance/frm-advance.module#FrmAdvanceModule'
            },
            {
                path: 'validation',
                loadChildren: './frm-validation/frm-validation.module#FrmValidationModule'
            },
            {
                path: 'masking',
                loadChildren: './frm-masking/frm-masking.module#FrmMaskingModule'
            },
            {
                path: 'wizard',
                loadChildren: './frm-wizard/frm-wizard.module#FrmWizardModule'
            },
            {
                path: 'picker',
                loadChildren: './frm-picker/frm-picker.module#FrmPickerModule'
            },
            {
                path: 'select',
                loadChildren: './frm-select/frm-select.module#FrmSelectModule'
            }
        ]
    }
];
var FormElementsRoutingModule = /** @class */ (function () {
    function FormElementsRoutingModule() {
    }
    FormElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormElementsRoutingModule);
    return FormElementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/form-elements/form-elements.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements.module.ts ***!
  \******************************************************************/
/*! exports provided: FormElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function() { return FormElementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements-routing.module */ "./src/app/demo/pages/form-elements/form-elements-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





var FormElementsModule = /** @class */ (function () {
    function FormElementsModule() {
    }
    FormElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormElementsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], FormElementsModule);
    return FormElementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-form-elements-form-elements-module.js.map