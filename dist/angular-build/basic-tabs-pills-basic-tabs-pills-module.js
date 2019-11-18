(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-tabs-pills-basic-tabs-pills-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicTabsPillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTabsPillsRoutingModule", function() { return BasicTabsPillsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_tabs_pills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tabs-pills.component */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.ts");




var routes = [
    {
        path: '',
        component: _basic_tabs_pills_component__WEBPACK_IMPORTED_MODULE_3__["BasicTabsPillsComponent"]
    }
];
var BasicTabsPillsRoutingModule = /** @class */ (function () {
    function BasicTabsPillsRoutingModule() {
    }
    BasicTabsPillsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicTabsPillsRoutingModule);
    return BasicTabsPillsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h5>Basic Tabs</h5>\n    <hr>\n    <ngb-tabset>\n      <ngb-tab title=\"HOME\">\n        <ng-template ngbTabContent>\n          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"PROFILE\">\n        <ng-template ngbTabContent>\n          <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"CONTACT\">\n        <ng-template ngbTabContent>\n          <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n  <div class=\"col-sm-12\">\n    <h5 class=\"mt-4\">Basic Pills</h5>\n    <hr>\n    <ngb-tabset type=\"pills\">\n      <ngb-tab title=\"HOME\" class=\"mb-3\">\n        <ng-template ngbTabContent>\n          <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"PROFILE\">\n        <ng-template ngbTabContent>\n          <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"CONTACT\">\n        <ng-template ngbTabContent>\n          <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n  <div class=\"col-sm-12\">\n    <h5 class=\"mt-4\">Vertical Pills</h5>\n    <hr>\n    <div class=\"md-left-tabs\">\n    <ngb-tabset type=\"pills\" orientation=\"vertical\">\n      <ngb-tab title=\"HOME\" >\n        <ng-template ngbTabContent>\n          <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"PROFILE\">\n        <ng-template ngbTabContent>\n          <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"CONTACT\">\n        <ng-template ngbTabContent>\n          <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-pills {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy10YWJzLXBpbGxzL2Jhc2ljLXRhYnMtcGlsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdGFicy1waWxscy9iYXNpYy10YWJzLXBpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1waWxscyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BasicTabsPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTabsPillsComponent", function() { return BasicTabsPillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTabsPillsComponent = /** @class */ (function () {
    function BasicTabsPillsComponent() {
    }
    BasicTabsPillsComponent.prototype.ngOnInit = function () {
    };
    BasicTabsPillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-tabs-pills',
            template: __webpack_require__(/*! ./basic-tabs-pills.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./basic-tabs-pills.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTabsPillsComponent);
    return BasicTabsPillsComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BasicTabsPillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTabsPillsModule", function() { return BasicTabsPillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_tabs_pills_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tabs-pills-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills-routing.module.ts");
/* harmony import */ var _basic_tabs_pills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-tabs-pills.component */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var BasicTabsPillsModule = /** @class */ (function () {
    function BasicTabsPillsModule() {
    }
    BasicTabsPillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_tabs_pills_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicTabsPillsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"]
            ],
            declarations: [_basic_tabs_pills_component__WEBPACK_IMPORTED_MODULE_4__["BasicTabsPillsComponent"]]
        })
    ], BasicTabsPillsModule);
    return BasicTabsPillsModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-tabs-pills-basic-tabs-pills-module.js.map