(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-layout-layout-module"],{

/***/ "./src/app/demo/layout/layout-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/layout/layout-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'static',
                loadChildren: './theme-static/theme-static.module#ThemeStaticModule'
            },
            {
                path: 'fixed',
                loadChildren: './theme-fixed/theme-fixed.module#ThemeFixedModule'
            },
            {
                path: 'nav-fixed',
                loadChildren: './theme-nav-fixed/theme-nav-fixed.module#ThemeNavFixedModule'
            },
            {
                path: 'nav-image',
                loadChildren: './theme-nav-image/theme-nav-image.module#ThemeNavImageModule'
            },
            {
                path: 'collapse-menu',
                loadChildren: './theme-collapse-menu/theme-collapse-menu.module#ThemeCollapseMenuModule'
            },
            {
                path: 'horizontal',
                loadChildren: './theme-horizontal/theme-horizontal.module#ThemeHorizontalModule'
            },
            {
                path: 'box',
                loadChildren: './theme-box/theme-box.module#ThemeBoxModule'
            },
            {
                path: 'rtl',
                loadChildren: './theme-rtl/theme-rtl.module#ThemeRtlModule'
            },
            {
                path: 'light',
                loadChildren: './theme-light/theme-light.module#ThemeLightModule'
            },
            {
                path: 'dark',
                loadChildren: './theme-dark/theme-dark.module#ThemeDarkModule'
            },
            {
                path: 'icon-color',
                loadChildren: './theme-icon-color/theme-icon-color.module#ThemeIconColorModule'
            },
            {
                path: 'layout-2',
                loadChildren: './theme-layout2/theme-layout2.module#ThemeLayout2Module'
            },
            {
                path: 'layout-2-2',
                loadChildren: './theme-layout22/theme-layout22.module#ThemeLayout22Module'
            },
            {
                path: 'layout-3',
                loadChildren: './theme-layout3/theme-layout3.module#ThemeLayout3Module'
            },
            {
                path: 'layout-4',
                loadChildren: './theme-layout4/theme-layout4.module#ThemeLayout4Module'
            },
            {
                path: 'layout-4-2',
                loadChildren: './theme-layout44/theme-layout44.module#ThemeLayout44Module'
            },
            {
                path: 'layout-5h',
                loadChildren: './theme-layout5h/theme-layout5h.module#ThemeLayout5hModule'
            },
            {
                path: 'nav-color',
                loadChildren: './theme-layout5v/theme-layout5v.module#ThemeLayout5vModule'
            },
            {
                path: 'layout-6',
                loadChildren: './theme-layout6/theme-layout6.module#ThemeLayout6Module'
            },
            {
                path: 'layout-8',
                loadChildren: './theme-layout8/theme-layout8.module#ThemeLayout8Module'
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/layout/layout.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/layout/layout.module.ts ***!
  \**********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/demo/layout/layout-routing.module.ts");




var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-layout-layout-module.js.map