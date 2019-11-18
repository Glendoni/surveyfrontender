(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-grid-basic-grid-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicGridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicGridRoutingModule", function() { return BasicGridRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-grid.component */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts");




var routes = [
    {
        path: '',
        component: _basic_grid_component__WEBPACK_IMPORTED_MODULE_3__["BasicGridComponent"]
    }
];
var BasicGridRoutingModule = /** @class */ (function () {
    function BasicGridRoutingModule() {
    }
    BasicGridRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicGridRoutingModule);
    return BasicGridRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Grid System\" [options]=\"false\">\n      <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>\n      <h5 class=\"mt-5\">How it works</h5>\n      <hr>\n      <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox\">flexbox</a> and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>\n      <p><strong>New to or unfamiliar with flexbox?</strong> <a target=\"_blank\" href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background\">Read this CSS Tricks flexbox guide</a> for background, terminology, guidelines, and code snippets.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              One of three columns\n            </div>\n            <div class=\"col-sm\">\n              One of three columns\n            </div>\n            <div class=\"col-sm\">\n              One of three columns\n            </div>\n          </div>\n        </div>\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"container\"&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col-sm\"&gt;\n                          One of three columns\n                      &lt;/div&gt;\n                      &lt;div class=\"col-sm\"&gt;\n                          One of three columns\n                      &lt;/div&gt;\n                      &lt;div class=\"col-sm\"&gt;\n                          One of three columns\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n      <p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code class=\"highlighter-rouge\">.container</code>.</p>\n      <p>Breaking it down, here’s how it works:</p>\n      <ul>\n        <li>Containers provide a means to center and horizontally pad your site’s contents. Use <code class=\"highlighter-rouge\">.container</code> for a responsive pixel width or <code class=\"highlighter-rouge\">.container-fluid</code> for\n          <code class=\"highlighter-rouge\">width: 100%</code> across all viewport and device sizes.</li>\n        <li>Rows are wrappers for columns. Each column has horizontal <code class=\"highlighter-rouge\">padding</code> (called a gutter) for controlling the space between them. This <code class=\"highlighter-rouge\">padding</code> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>\n        <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>\n        <li>Thanks to flexbox, grid columns without a specified <code class=\"highlighter-rouge\">width</code> will automatically layout as equal width columns. For example, four instances of <code class=\"highlighter-rouge\">.col-sm</code> will each automatically be 25% wide from the small breakpoint and up. See the <a href=\"javascript:\">auto-layout columns</a> section for more examples.</li>\n        <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <code class=\"highlighter-rouge\">.col-4</code>.</li>\n        <li>Column <code class=\"highlighter-rouge\">width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.</li>\n        <li>Columns have horizontal <code class=\"highlighter-rouge\">padding</code> to create the gutters between individual columns, however, you can remove the <code class=\"highlighter-rouge\">margin</code> from rows and <code class=\"highlighter-rouge\">padding</code> from columns with <code class=\"highlighter-rouge\">.no-gutters</code> on the <code class=\"highlighter-rouge\">.row</code>.</li>\n        <li>To make the grid responsive, there are five grid breakpoints, one for each <a href=\"javascript:\">responsive breakpoint</a>: all breakpoints (extra small), small, medium, large, and extra large.</li>\n        <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code class=\"highlighter-rouge\">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code class=\"highlighter-rouge\">xs</code> breakpoint).</li>\n        <li>You can use predefined grid classes (like <code class=\"highlighter-rouge\">.col-4</code>) or <a href=\"javascript:\">Sass mixins</a> for more semantic markup.</li>\n      </ul>\n      <p>Be aware of the limitations and <a target=\"_blank\" href=\"https://github.com/philipwalton/flexbugs\">bugs around flexbox</a>, like the <a target=\"_blank\" href=\"https://github.com/philipwalton/flexbugs#flexbug-9\">inability to use some HTML elements as flex containers</a>.</p>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Grid Options\" [options]=\"false\">\n      <p>While Bootstrap uses <code class=\"highlighter-rouge\">em</code>s or <code class=\"highlighter-rouge\">rem</code>s for defining most sizes, <code class=\"highlighter-rouge\">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href=\"https://drafts.csswg.org/mediaqueries-3/#units\">font size</a>.</p>\n      <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n          <thead>\n          <tr>\n            <th></th>\n            <th class=\"text-center\">\n              Extra small\n              <br />\n              <small>&lt;576px</small>\n            </th>\n            <th class=\"text-center\">\n              Small\n              <br />\n              <small>&ge;576px</small>\n            </th>\n            <th class=\"text-center\">\n              Medium\n              <br />\n              <small>&ge;768px</small>\n            </th>\n            <th class=\"text-center\">\n              Large\n              <br />\n              <small>&ge;992px</small>\n            </th>\n            <th class=\"text-center\">\n              Extra large\n              <br />\n              <small>&ge;1200px</small>\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\">Max container width</th>\n            <td>None (auto)</td>\n            <td>540px</td>\n            <td>720px</td>\n            <td>960px</td>\n            <td>1140px</td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\n            <td><code>.col-</code></td>\n            <td><code>.col-sm-</code></td>\n            <td><code>.col-md-</code></td>\n            <td><code>.col-lg-</code></td>\n            <td><code>.col-xl-</code></td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\n            <td colspan=\"5\">12</td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\n            <td colspan=\"5\">30px (15px on each side of a column)</td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\n            <td colspan=\"5\">Yes</td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\n            <td colspan=\"5\">Yes</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Auto Layout Columns\" [options]=\"false\">\n      <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code class=\"highlighter-rouge\">.col-sm-6</code>.</p>\n      <h5 class=\"mt-5\">Equal-width</h5>\n      <hr>\n      <p>For example, here are two grid layouts that apply to every device and viewport, from <code class=\"highlighter-rouge\">xs</code> to <code class=\"highlighter-rouge\">xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              1 of 2\n            </div>\n            <div class=\"col\">\n              2 of 2\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              1 of 3\n            </div>\n            <div class=\"col\">\n              2 of 3\n            </div>\n            <div class=\"col\">\n              3 of 3\n            </div>\n          </div>\n        </div>\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"container\"&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;\n                          1 of 2\n                      &lt;/div&gt;\n                      &lt;div class=\"col\"&gt;\n                          2 of 2\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;\n                          1 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col\"&gt;\n                          2 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col\"&gt;\n                          3 of 3\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n      <p>Equal-width columns can be broken into multiple lines, but there was a <a href=\"https://github.com/philipwalton/flexbugs#flexbug-11\">Safari flexbox bug</a> that prevented this from working without an explicit\n        <code class=\"highlighter-rouge\">flex-basis</code> or <code class=\"highlighter-rouge\">border</code>. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">Column</div>\n            <div class=\"col\">Column</div>\n          </div>\n        </div>\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"container\"&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n                      &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n                      &lt;div class=\"w-100\"&gt;&lt;/div&gt;\n                      &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n                      &lt;div class=\"col\"&gt;Column&lt;/div&gt;\n                  &lt;/div&gt;\n              &lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n      <h5 class=\"mt-5\">Setting one column width</h5>\n      <hr>\n      <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              1 of 3\n            </div>\n            <div class=\"col-6\">\n              2 of 3 (wider)\n            </div>\n            <div class=\"col\">\n              3 of 3\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              1 of 3\n            </div>\n            <div class=\"col-5\">\n              2 of 3 (wider)\n            </div>\n            <div class=\"col\">\n              3 of 3\n            </div>\n          </div>\n        </div>\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"container\"&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;\n                          1 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col-6\"&gt;\n                          2 of 3 (wider)\n                      &lt;/div&gt;\n                      &lt;div class=\"col\"&gt;\n                          3 of 3\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;\n                          1 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col-5\"&gt;\n                          2 of 3 (wider)\n                      &lt;/div&gt;\n                      &lt;div class=\"col\"&gt;\n                          3 of 3\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n      <h5 class=\"mt-5\">Variable width content</h5>\n      <hr>\n      <p>Use <code class=\"highlighter-rouge\">col-*breakpoint*-auto</code> classes to size columns based on the natural width of their content.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container\">\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col col-lg-2\">\n              1 of 3\n            </div>\n            <div class=\"col-md-auto\">\n              Variable width content\n            </div>\n            <div class=\"col col-lg-2\">\n              3 of 3\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              1 of 3\n            </div>\n            <div class=\"col-md-auto\">\n              Variable width content\n            </div>\n            <div class=\"col col-lg-2\">\n              3 of 3\n            </div>\n          </div>\n        </div>\n\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"container\"&gt;\n                  &lt;div class=\"row justify-content-md-center\"&gt;\n                      &lt;div class=\"col col-lg-2\"&gt;\n                          1 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col-md-auto\"&gt;\n                          Variable width content\n                      &lt;/div&gt;\n                      &lt;div class=\"col col-lg-2\"&gt;\n                          3 of 3\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n                  &lt;div class=\"row\"&gt;\n                      &lt;div class=\"col\"&gt;\n                          1 of 3\n                      &lt;/div&gt;\n                      &lt;div class=\"col-md-auto\"&gt;\n                          Variable width content\n                      &lt;/div&gt;\n                      &lt;div class=\"col col-lg-2\"&gt;\n                          3 of 3\n                      &lt;/div&gt;\n                  &lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n\n      <h5 class=\"mt-5\">Equal-width multi-row</h5>\n      <hr>\n      <p>Create equal-width columns that span multiple rows by inserting a <code class=\"highlighter-rouge\">.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the\n        <code class=\"highlighter-rouge\">.w-100</code> with some <a href=\"/docs/4.1/utilities/display/\">responsive display utilities</a>.</p>\n      <div class=\"bd-example-row\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col\">col</div>\n            <div class=\"col\">col</div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">col</div>\n            <div class=\"col\">col</div>\n          </div>\n        </div>\n        <pre>\n          <code class=\"language-markup\">\n              &lt;div class=\"row\"&gt;\n                  &lt;div class=\"col\"&gt;col&lt;/div&gt;\n                  &lt;div class=\"col\"&gt;col&lt;/div&gt;\n                  &lt;div class=\"w-100\"&gt;&lt;/div&gt;\n                  &lt;div class=\"col\"&gt;col&lt;/div&gt;\n                  &lt;div class=\"col\"&gt;col&lt;/div&gt;\n              &lt;/div&gt;\n          </code>\n        </pre>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtZ3JpZC9iYXNpYy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts ***!
  \******************************************************************************/
/*! exports provided: BasicGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicGridComponent", function() { return BasicGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicGridComponent = /** @class */ (function () {
    function BasicGridComponent() {
    }
    BasicGridComponent.prototype.ngOnInit = function () {
    };
    BasicGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-grid',
            template: __webpack_require__(/*! ./basic-grid.component.html */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.html"),
            styles: [__webpack_require__(/*! ./basic-grid.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicGridComponent);
    return BasicGridComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.module.ts ***!
  \***************************************************************************/
/*! exports provided: BasicGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicGridModule", function() { return BasicGridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-grid-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts");
/* harmony import */ var _basic_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-grid.component */ "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var BasicGridModule = /** @class */ (function () {
    function BasicGridModule() {
    }
    BasicGridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicGridRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_grid_component__WEBPACK_IMPORTED_MODULE_4__["BasicGridComponent"]]
        })
    ], BasicGridModule);
    return BasicGridModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-grid-basic-grid-module.js.map