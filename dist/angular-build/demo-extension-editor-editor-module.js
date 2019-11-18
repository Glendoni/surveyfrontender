(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-extension-editor-editor-module"],{

/***/ "./src/app/demo/extension/editor/editor-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/extension/editor/editor-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'wysiwyg',
                loadChildren: './pell-wysiwyg/pell-wysiwyg.module#PellWysiwygModule'
            },
            {
                path: 'tinymce',
                loadChildren: './ext-tinymce/ext-tinymce.module#ExtTinymceModule'
            }
        ]
    }
];
var EditorRoutingModule = /** @class */ (function () {
    function EditorRoutingModule() {
    }
    EditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditorRoutingModule);
    return EditorRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/editor/editor.module.ts":
/*!********************************************************!*\
  !*** ./src/app/demo/extension/editor/editor.module.ts ***!
  \********************************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/demo/extension/editor/editor-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _editor_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditorRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-extension-editor-editor-module.js.map