(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pell-wysiwyg-pell-wysiwyg-module"],{

/***/ "./node_modules/angular-pell/esm5/angular-pell.js":
/*!********************************************************!*\
  !*** ./node_modules/angular-pell/esm5/angular-pell.js ***!
  \********************************************************/
/*! exports provided: PellModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PellModule", function() { return PellModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var actions = {
    bold: {
        icon: '<b>B</b>',
        title: 'Bold',
        result: function () { return exec('bold'); }
    },
    italic: {
        icon: '<i>I</i>',
        title: 'Italic',
        result: function () { return exec('italic'); }
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Underline',
        result: function () { return exec('underline'); }
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Strike-through',
        result: function () { return exec('strikeThrough'); }
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Heading 1',
        result: function () { return exec('formatBlock', '<H1>'); }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: function () { return exec('formatBlock', '<H2>'); }
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraph',
        result: function () { return exec('formatBlock', '<P>'); }
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Quote',
        result: function () { return exec('formatBlock', '<BLOCKQUOTE>'); }
    },
    olist: {
        icon: '&#35;',
        title: 'Ordered List',
        result: function () { return exec('insertOrderedList'); }
    },
    ulist: {
        icon: '&#8226;',
        title: 'Unordered List',
        result: function () { return exec('insertUnorderedList'); }
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Code',
        result: function () { return exec('formatBlock', '<PRE>'); }
    },
    line: {
        icon: '&#8213;',
        title: 'Horizontal Line',
        result: function () { return exec('insertHorizontalRule'); }
    },
    link: {
        icon: '&#128279;',
        title: 'Link',
        result: function () {
            var url = window.prompt('Enter the link URL');
            if (url)
                exec('createLink', url);
        }
    },
    image: {
        icon: '&#128247;',
        title: 'Image',
        result: function () {
            var url = window.prompt('Enter the image URL');
            if (url)
                exec('insertImage', url);
        }
    }
};
var exec = function (command, value) {
    if (value === void 0) { value = null; }
    document.execCommand(command, false, value);
};
var PellComponent = /** @class */ (function () {
    function PellComponent() {
        this.actions = Object.keys(actions).map(function (action) { return actions[action]; });
        this.actionBarClass = 'pell-actionbar';
        this.actionButtonClass = 'pell-button';
        this.contentClass = 'pell-content';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PellComponent.prototype.ngOnInit = function () {
    };
    PellComponent.prototype.onInput = function (event) {
        this.onChange.emit(event.target.innerHTML);
    };
    return PellComponent;
}());
PellComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'pell-editor',
                template: "<div #pell>\n  <div [class]=\"actionBarClass\">\n    <button *ngFor=\"let action of actions\" [class]=\"actionButtonClass\" [title]=\"action.title\"\n    (click)=\"action.result()\" [innerHTML]=\"action.icon\">\n    </button>\n  </div>\n  <div contenteditable=\"true\" [class]=\"contentClass\" (input)=\"onInput($event)\"></div>\n</div>\n",
                styles: [".pell{border-radius:5px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1)}.pell,.pell-content{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.pell-content{height:300px;outline:0;overflow-y:auto;padding:10px}.pell-actionbar{background-color:#fff;border-bottom:1px solid hsla(0,0%,4%,.1);border-top-left-radius:5px;border-top-right-radius:5px;width:100%}.pell-button{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px}"],
            },] },
];
PellComponent.ctorParameters = function () { return []; };
PellComponent.propDecorators = {
    "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var PellModule = /** @class */ (function () {
    function PellModule() {
    }
    return PellModule;
}());
PellModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [PellComponent],
                exports: [PellComponent]
            },] },
];
PellModule.ctorParameters = function () { return []; };


//# sourceMappingURL=angular-pell.js.map


/***/ }),

/***/ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PellWysiwygRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PellWysiwygRoutingModule", function() { return PellWysiwygRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pell-wysiwyg.component */ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.ts");




var routes = [
    {
        path: '',
        component: _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_3__["PellWysiwygComponent"]
    }
];
var PellWysiwygRoutingModule = /** @class */ (function () {
    function PellWysiwygRoutingModule() {
    }
    PellWysiwygRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PellWysiwygRoutingModule);
    return PellWysiwygRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Pell WYSIWYG Editor\" [options]=\"false\">\n      <pell-editor></pell-editor>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0ZW5zaW9uL2VkaXRvci9wZWxsLXd5c2l3eWcvcGVsbC13eXNpd3lnLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.ts ***!
  \******************************************************************************/
/*! exports provided: PellWysiwygComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PellWysiwygComponent", function() { return PellWysiwygComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PellWysiwygComponent = /** @class */ (function () {
    function PellWysiwygComponent() {
        this.editorContent = 'OK';
    }
    PellWysiwygComponent.prototype.ngOnInit = function () {
    };
    PellWysiwygComponent.prototype.onInput = function (e) {
    };
    PellWysiwygComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pell-wysiwyg',
            template: __webpack_require__(/*! ./pell-wysiwyg.component.html */ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pell-wysiwyg.component.scss */ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PellWysiwygComponent);
    return PellWysiwygComponent;
}());



/***/ }),

/***/ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.module.ts ***!
  \***************************************************************************/
/*! exports provided: PellWysiwygModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PellWysiwygModule", function() { return PellWysiwygModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pell_wysiwyg_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pell-wysiwyg-routing.module */ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg-routing.module.ts");
/* harmony import */ var _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pell-wysiwyg.component */ "./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_pell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-pell */ "./node_modules/angular-pell/esm5/angular-pell.js");







var PellWysiwygModule = /** @class */ (function () {
    function PellWysiwygModule() {
    }
    PellWysiwygModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pell_wysiwyg_routing_module__WEBPACK_IMPORTED_MODULE_3__["PellWysiwygRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular_pell__WEBPACK_IMPORTED_MODULE_6__["PellModule"]
            ],
            declarations: [_pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_4__["PellWysiwygComponent"]]
        })
    ], PellWysiwygModule);
    return PellWysiwygModule;
}());



/***/ })

}]);
//# sourceMappingURL=pell-wysiwyg-pell-wysiwyg-module.js.map