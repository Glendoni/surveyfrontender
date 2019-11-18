(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ext-tinymce-ext-tinymce-module"],{

/***/ "./node_modules/angular2-tinymce/fesm5/angular2-tinymce.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular2-tinymce/fesm5/angular2-tinymce.js ***!
  \*****************************************************************/
/*! exports provided: Angular2TinymceLibService, TinymceComponent, TinymceModule, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular2TinymceLibService", function() { return Angular2TinymceLibService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceComponent", function() { return TinymceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceModule", function() { return TinymceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TinymceDefaultOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tinymce_tinymce_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/tinymce.min */ "./node_modules/tinymce/tinymce.min.js");
/* harmony import */ var tinymce_tinymce_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/themes/modern/theme */ "./node_modules/tinymce/themes/modern/theme.js");
/* harmony import */ var tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_plugins_link_plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/plugins/link/plugin.js */ "./node_modules/tinymce/plugins/link/plugin.js");
/* harmony import */ var tinymce_plugins_link_plugin_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link_plugin_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_plugins_paste_plugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/plugins/paste/plugin.js */ "./node_modules/tinymce/plugins/paste/plugin.js");
/* harmony import */ var tinymce_plugins_paste_plugin_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_paste_plugin_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tinymce_plugins_table_plugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/plugins/table/plugin.js */ "./node_modules/tinymce/plugins/table/plugin.js");
/* harmony import */ var tinymce_plugins_table_plugin_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table_plugin_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tinymce_plugins_advlist_plugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/advlist/plugin.js */ "./node_modules/tinymce/plugins/advlist/plugin.js");
/* harmony import */ var tinymce_plugins_advlist_plugin_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_advlist_plugin_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_autoresize_plugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/autoresize/plugin.js */ "./node_modules/tinymce/plugins/autoresize/plugin.js");
/* harmony import */ var tinymce_plugins_autoresize_plugin_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize_plugin_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_lists_plugin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/lists/plugin.js */ "./node_modules/tinymce/plugins/lists/plugin.js");
/* harmony import */ var tinymce_plugins_lists_plugin_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists_plugin_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_code_plugin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/code/plugin.js */ "./node_modules/tinymce/plugins/code/plugin.js");
/* harmony import */ var tinymce_plugins_code_plugin_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_code_plugin_js__WEBPACK_IMPORTED_MODULE_10__);












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Angular2TinymceLibService = /** @class */ (function () {
    function Angular2TinymceLibService() {
    }
    Angular2TinymceLibService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Angular2TinymceLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ Angular2TinymceLibService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Angular2TinymceLibService_Factory() { return new Angular2TinymceLibService(); }, token: Angular2TinymceLibService, providedIn: "root" });
    return Angular2TinymceLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TinymceDefaultOptions = /** @class */ (function () {
    function TinymceDefaultOptions() {
        this.plugins = [
            'link',
            'paste',
            'table',
            'advlist',
            'autoresize',
            'lists',
            'code'
        ];
        this.skin_url = '/assets/tinymce/skins/lightgray';
        this.baseURL = '/assets/tinymce';
        this.auto_focus = true;
    }
    return TinymceDefaultOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () {
};
var TinymceComponent = /** @class */ (function () {
    function TinymceComponent(zone, globalOptions) {
        this.zone = zone;
        this.globalOptions = globalOptions;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mousedown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mousemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseleave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keypress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.beforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.preProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.undo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.redo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.execCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pastePreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pastePostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementId = 'tiny-' + Math.random().toString(36).substring(2);
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    TinymceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options = Object.assign(new TinymceDefaultOptions(), this.globalOptions, this.optionsOverride);
        this.options.selector = '#' + this.elementId;
        this.options.setup = function (editor) {
            _this.setupEvents(editor);
        };
        this.options.init_instance_callback = function (editor) {
            if (editor && _this.value) {
                editor.setContent(_this.value);
            }
            _this.editor = editor;
        };
    };
    /**
     * @return {?}
     */
    TinymceComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.options.baseURL) {
            tinymce.baseURL = this.options.baseURL;
        }
        tinymce.init(this.options);
    };
    /**
     * @return {?}
     */
    TinymceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        tinymce.remove(this.editor);
    };
    Object.defineProperty(TinymceComponent.prototype, "value", {
        // get accessor
        get: /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var _this = this;
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.zone.run(function () {
                    _this.onChangeCallback(v);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    TinymceComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            if (!value) {
                value = '';
            }
            if (this.editor && this.editor.initialized) {
                this.editor.setContent(value);
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TinymceComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TinymceComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} editor
     * @return {?}
     */
    TinymceComponent.prototype.setupEvents = /**
     * @param {?} editor
     * @return {?}
     */
    function (editor) {
        var _this = this;
        editor.on('change keyup', function () {
            /** @type {?} */
            var content = editor.getContent();
            _this.value = content;
        });
        editor.on('click', function (e) {
            _this.click.emit(e);
        });
        editor.on('dblclick', function (e) {
            _this.dblclick.emit(e);
        });
        editor.on('mousedown', function (e) {
            _this.mousedown.emit(e);
        });
        editor.on('mouseup', function (e) {
            _this.mouseup.emit(e);
        });
        editor.on('mousemove', function (e) {
            _this.mousemove.emit(e);
        });
        editor.on('mouseover', function (e) {
            _this.mouseover.emit(e);
        });
        editor.on('mouseout', function (e) {
            _this.mouseout.emit(e);
        });
        editor.on('mouseenter', function (e) {
            _this.mouseenter.emit(e);
        });
        editor.on('mouseleave', function (e) {
            _this.mouseleave.emit(e);
        });
        editor.on('keydown', function (e) {
            _this.keydown.emit(e);
        });
        editor.on('keypress', function (e) {
            _this.keypress.emit(e);
        });
        editor.on('keyup', function (e) {
            _this.keyup.emit(e);
        });
        editor.on('contextmenu', function (e) {
            _this.contextmenu.emit(e);
        });
        editor.on('paste', function (e) {
            _this.paste.emit(e);
        });
        editor.on('init', function (e) {
            _this.init.emit(e);
        });
        editor.on('focus', function (e) {
            _this.focus.emit(e);
        });
        editor.on('blur', function (e) {
            _this.blur.emit(e);
        });
        editor.on('BeforeSetContent', function (e) {
            _this.beforeSetContent.emit(e);
        });
        editor.on('SetContent', function (e) {
            _this.setContent.emit(e);
        });
        editor.on('GetContent', function (e) {
            _this.getContent.emit(e);
        });
        editor.on('PreProcess', function (e) {
            _this.preProcess.emit(e);
        });
        editor.on('PostProcess', function (e) {
            _this.postProcess.emit(e);
        });
        editor.on('NodeChange', function (e) {
            _this.nodeChange.emit(e);
        });
        editor.on('Undo', function (e) {
            _this.undo.emit(e);
        });
        editor.on('Redo', function (e) {
            _this.redo.emit(e);
        });
        editor.on('Change', function (e) {
            _this.change.emit(e);
        });
        editor.on('Dirty', function (e) {
            _this.dirty.emit(e);
        });
        editor.on('Remove', function (e) {
            _this.remove.emit(e);
        });
        editor.on('ExecCommand', function (e) {
            _this.execCommand.emit(e);
        });
        editor.on('PastePreProcess', function (e) {
            _this.pastePreProcess.emit(e);
        });
        editor.on('PastePostProcess', function (e) {
            _this.pastePostProcess.emit(e);
        });
    };
    TinymceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'app-tinymce',
                    template: '<div id="{{elementId}}"></div>',
                    exportAs: 'tinymce',
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TinymceComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    TinymceComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['TINYMCE_CONFIG',] }] }
    ]; };
    TinymceComponent.propDecorators = {
        optionsOverride: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseleave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        keypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        contextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        paste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        beforeSetContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        setContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        getContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        preProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        nodeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        undo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        redo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dirty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        execCommand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pastePreProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pastePostProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TinymceComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TinymceModule = /** @class */ (function () {
    function TinymceModule() {
    }
    /**
     * @param {?=} userConfig
     * @return {?}
     */
    TinymceModule.withConfig = /**
     * @param {?=} userConfig
     * @return {?}
     */
    function (userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return {
            ngModule: TinymceModule,
            providers: [
                { provide: 'TINYMCE_CONFIG', useValue: userConfig }
            ]
        };
    };
    TinymceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [TinymceComponent],
                    exports: [TinymceComponent],
                    providers: [
                        { provide: 'TINYMCE_CONFIG', useClass: TinymceDefaultOptions }
                    ]
                },] }
    ];
    return TinymceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItdGlueW1jZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhcjItdGlueW1jZS9saWIvYW5ndWxhcjItdGlueW1jZS1saWIuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhcjItdGlueW1jZS9saWIvYW5ndWxhcjItdGlueW1jZS1saWIuZGVmYXVsdC50cyIsIm5nOi8vYW5ndWxhcjItdGlueW1jZS9saWIvYW5ndWxhcjItdGlueW1jZS1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyMi10aW55bWNlL2xpYi9hbmd1bGFyMi10aW55bWNlLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyMlRpbnltY2VMaWJTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cbn1cbiIsImltcG9ydCB7IFRpbnltY2VPcHRpb25zIH0gZnJvbSAnLi9hbmd1bGFyMi10aW55bWNlLWxpYi5jb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFRpbnltY2VEZWZhdWx0T3B0aW9ucyBpbXBsZW1lbnRzIFRpbnltY2VPcHRpb25zIHtcblx0cGx1Z2lucyA9IFtcblx0XHQnbGluaycsXG5cdFx0J3Bhc3RlJyxcblx0XHQndGFibGUnLFxuXHRcdCdhZHZsaXN0Jyxcblx0XHQnYXV0b3Jlc2l6ZScsXG5cdFx0J2xpc3RzJyxcblx0XHQnY29kZSdcblx0XTtcblx0c2tpbl91cmwgPSAnL2Fzc2V0cy90aW55bWNlL3NraW5zL2xpZ2h0Z3JheSc7XG5cdGJhc2VVUkwgPSAnL2Fzc2V0cy90aW55bWNlJztcblx0YXV0b19mb2N1cyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgZm9yd2FyZFJlZiwgTmdab25lLCBJbmplY3QsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaW55bWNlRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL2FuZ3VsYXIyLXRpbnltY2UtbGliLmRlZmF1bHQnO1xuaW1wb3J0IHsgVGlueW1jZU9wdGlvbnMgfSBmcm9tICcuL2FuZ3VsYXIyLXRpbnltY2UtbGliLmNvbmZpZy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgJ3RpbnltY2UvdGlueW1jZS5taW4nO1xuXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XG5cbmltcG9ydCAndGlueW1jZS90aGVtZXMvbW9kZXJuL3RoZW1lJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2xpbmsvcGx1Z2luLmpzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3Bhc3RlL3BsdWdpbi5qcyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZS9wbHVnaW4uanMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYWR2bGlzdC9wbHVnaW4uanMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYXV0b3Jlc2l6ZS9wbHVnaW4uanMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGlzdHMvcGx1Z2luLmpzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGUvcGx1Z2luLmpzJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHtcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcC10aW55bWNlJyxcblx0dGVtcGxhdGU6ICc8ZGl2IGlkPVwie3tlbGVtZW50SWR9fVwiPjwvZGl2PicsXG5cdGV4cG9ydEFzOiAndGlueW1jZScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGlueW1jZUNvbXBvbmVudCksXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBUaW55bWNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcblx0QElucHV0KCdvcHRpb25zJykgb3B0aW9uc092ZXJyaWRlOiBUaW55bWNlT3B0aW9ucztcblxuXHRAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBkYmxjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG1vdXNldXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBtb3VzZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBtb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBtb3VzZW91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG1vdXNlZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBtb3VzZWxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkga2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGtleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBjb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHBhc3RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGJlZm9yZVNldENvbnRlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzZXRDb250ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZ2V0Q29udGVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByZVByb2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwb3N0UHJvY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG5vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB1bmRvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcmVkbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGRpcnR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZXhlY0NvbW1hbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwYXN0ZVByZVByb2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwYXN0ZVBvc3RQcm9jZXNzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBlbGVtZW50SWQ6IHN0cmluZyA9ICd0aW55LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cdHB1YmxpYyBlZGl0b3I6IGFueTtcblxuXHRwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcblx0cHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblx0cHJpdmF0ZSBpbm5lclZhbHVlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBvcHRpb25zOiBUaW55bWNlT3B0aW9ucztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRASW5qZWN0KCdUSU5ZTUNFX0NPTkZJRycpIHByaXZhdGUgZ2xvYmFsT3B0aW9uczogVGlueW1jZU9wdGlvbnNcblx0KSB7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFRpbnltY2VEZWZhdWx0T3B0aW9ucygpLCB0aGlzLmdsb2JhbE9wdGlvbnMsIHRoaXMub3B0aW9uc092ZXJyaWRlKTtcblx0XHR0aGlzLm9wdGlvbnMuc2VsZWN0b3IgPSAnIycgKyB0aGlzLmVsZW1lbnRJZDtcblx0XHR0aGlzLm9wdGlvbnMuc2V0dXAgPSBlZGl0b3IgPT4ge1xuXHRcdFx0dGhpcy5zZXR1cEV2ZW50cyhlZGl0b3IpO1xuXHRcdH07XG5cdFx0dGhpcy5vcHRpb25zLmluaXRfaW5zdGFuY2VfY2FsbGJhY2sgPSBlZGl0b3IgPT4ge1xuXHRcdFx0aWYgKGVkaXRvciAmJiB0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdGVkaXRvci5zZXRDb250ZW50KHRoaXMudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3I7XG5cdFx0fTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmJhc2VVUkwpIHtcblx0XHRcdHRpbnltY2UuYmFzZVVSTCA9IHRoaXMub3B0aW9ucy5iYXNlVVJMO1xuXHRcdH1cblx0XHR0aW55bWNlLmluaXQodGhpcy5vcHRpb25zKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRpbnltY2UucmVtb3ZlKHRoaXMuZWRpdG9yKTtcblx0fVxuXG5cdC8vIGdldCBhY2Nlc3NvclxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lclZhbHVlO1xuXHR9XG5cblx0Ly8gc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xuXHRzZXQgdmFsdWUodjogYW55KSB7XG5cdFx0aWYgKHYgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuXHRcdFx0dGhpcy5pbm5lclZhbHVlID0gdjtcblx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodik7XG5cdFx0XHR9KTtcblxuXHRcdH1cblx0fVxuXG5cdC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG5cdFx0XHR0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSAnJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5pbml0aWFsaXplZCkge1xuXHRcdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50KHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG5cdH1cblxuXHRzZXR1cEV2ZW50cyhlZGl0b3IpIHtcblx0XHRlZGl0b3Iub24oJ2NoYW5nZSBrZXl1cCcsICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0dGhpcy5jbGljay5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignZGJsY2xpY2snLCBlID0+IHtcblx0XHRcdHRoaXMuZGJsY2xpY2suZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ21vdXNlZG93bicsIGUgPT4ge1xuXHRcdFx0dGhpcy5tb3VzZWRvd24uZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ21vdXNldXAnLCBlID0+IHtcblx0XHRcdHRoaXMubW91c2V1cC5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignbW91c2Vtb3ZlJywgZSA9PiB7XG5cdFx0XHR0aGlzLm1vdXNlbW92ZS5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignbW91c2VvdmVyJywgZSA9PiB7XG5cdFx0XHR0aGlzLm1vdXNlb3Zlci5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignbW91c2VvdXQnLCBlID0+IHtcblx0XHRcdHRoaXMubW91c2VvdXQuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ21vdXNlZW50ZXInLCBlID0+IHtcblx0XHRcdHRoaXMubW91c2VlbnRlci5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignbW91c2VsZWF2ZScsIGUgPT4ge1xuXHRcdFx0dGhpcy5tb3VzZWxlYXZlLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdrZXlkb3duJywgZSA9PiB7XG5cdFx0XHR0aGlzLmtleWRvd24uZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ2tleXByZXNzJywgZSA9PiB7XG5cdFx0XHR0aGlzLmtleXByZXNzLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdrZXl1cCcsIGUgPT4ge1xuXHRcdFx0dGhpcy5rZXl1cC5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignY29udGV4dG1lbnUnLCBlID0+IHtcblx0XHRcdHRoaXMuY29udGV4dG1lbnUuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ3Bhc3RlJywgZSA9PiB7XG5cdFx0XHR0aGlzLnBhc3RlLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdpbml0JywgZSA9PiB7XG5cdFx0XHR0aGlzLmluaXQuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ2ZvY3VzJywgZSA9PiB7XG5cdFx0XHR0aGlzLmZvY3VzLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdibHVyJywgZSA9PiB7XG5cdFx0XHR0aGlzLmJsdXIuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ0JlZm9yZVNldENvbnRlbnQnLCBlID0+IHtcblx0XHRcdHRoaXMuYmVmb3JlU2V0Q29udGVudC5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignU2V0Q29udGVudCcsIGUgPT4ge1xuXHRcdFx0dGhpcy5zZXRDb250ZW50LmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdHZXRDb250ZW50JywgZSA9PiB7XG5cdFx0XHR0aGlzLmdldENvbnRlbnQuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ1ByZVByb2Nlc3MnLCBlID0+IHtcblx0XHRcdHRoaXMucHJlUHJvY2Vzcy5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignUG9zdFByb2Nlc3MnLCBlID0+IHtcblx0XHRcdHRoaXMucG9zdFByb2Nlc3MuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBlID0+IHtcblx0XHRcdHRoaXMubm9kZUNoYW5nZS5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignVW5kbycsIGUgPT4ge1xuXHRcdFx0dGhpcy51bmRvLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdSZWRvJywgZSA9PiB7XG5cdFx0XHR0aGlzLnJlZG8uZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ0NoYW5nZScsIGUgPT4ge1xuXHRcdFx0dGhpcy5jaGFuZ2UuZW1pdChlKTtcblx0XHR9KTtcblx0XHRlZGl0b3Iub24oJ0RpcnR5JywgZSA9PiB7XG5cdFx0XHR0aGlzLmRpcnR5LmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdSZW1vdmUnLCBlID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlLmVtaXQoZSk7XG5cdFx0fSk7XG5cdFx0ZWRpdG9yLm9uKCdFeGVjQ29tbWFuZCcsIGUgPT4ge1xuXHRcdFx0dGhpcy5leGVjQ29tbWFuZC5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignUGFzdGVQcmVQcm9jZXNzJywgZSA9PiB7XG5cdFx0XHR0aGlzLnBhc3RlUHJlUHJvY2Vzcy5lbWl0KGUpO1xuXHRcdH0pO1xuXHRcdGVkaXRvci5vbignUGFzdGVQb3N0UHJvY2VzcycsIGUgPT4ge1xuXHRcdFx0dGhpcy5wYXN0ZVBvc3RQcm9jZXNzLmVtaXQoZSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW55bWNlQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyMi10aW55bWNlLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlueW1jZU9wdGlvbnMgfSBmcm9tICcuL2FuZ3VsYXIyLXRpbnltY2UtbGliLmNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGlueW1jZURlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9hbmd1bGFyMi10aW55bWNlLWxpYi5kZWZhdWx0JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW10sXG5cdGRlY2xhcmF0aW9uczogW1RpbnltY2VDb21wb25lbnRdLFxuXHRleHBvcnRzOiBbVGlueW1jZUNvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogJ1RJTllNQ0VfQ09ORklHJywgdXNlQ2xhc3M6IFRpbnltY2VEZWZhdWx0T3B0aW9ucyB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVGlueW1jZU1vZHVsZSB7XG5cdHN0YXRpYyB3aXRoQ29uZmlnKHVzZXJDb25maWc6IFRpbnltY2VPcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFRpbnltY2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiAnVElOWU1DRV9DT05GSUcnLCB1c2VWYWx1ZTogdXNlckNvbmZpZyB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU1DO0tBQ0M7O2dCQUxELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7O29DQUpEOzs7Ozs7O0FDRUEsSUFBQTs7dUJBQ1c7WUFDVCxNQUFNO1lBQ04sT0FBTztZQUNQLE9BQU87WUFDUCxTQUFTO1lBQ1QsWUFBWTtZQUNaLE9BQU87WUFDUCxNQUFNO1NBQ047d0JBQ1UsaUNBQWlDO3VCQUNsQyxpQkFBaUI7MEJBQ2QsSUFBSTs7Z0NBZGxCO0lBZUM7Ozs7OztBQ2ZEO0FBa0JBLElBQU0sSUFBSSxHQUFHO0NBQ1osQ0FBQzs7SUEwREQsMEJBQ1MsTUFDMEIsYUFBNkI7UUFEdkQsU0FBSSxHQUFKLElBQUk7UUFDc0Isa0JBQWEsR0FBYixhQUFhLENBQWdCO3FCQTNDOUMsSUFBSSxZQUFZLEVBQUU7d0JBQ2YsSUFBSSxZQUFZLEVBQUU7eUJBQ2pCLElBQUksWUFBWSxFQUFFO3VCQUNwQixJQUFJLFlBQVksRUFBRTt5QkFDaEIsSUFBSSxZQUFZLEVBQUU7eUJBQ2xCLElBQUksWUFBWSxFQUFFO3dCQUNuQixJQUFJLFlBQVksRUFBRTswQkFDaEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFO3VCQUNyQixJQUFJLFlBQVksRUFBRTt3QkFDakIsSUFBSSxZQUFZLEVBQUU7cUJBQ3JCLElBQUksWUFBWSxFQUFFOzJCQUNaLElBQUksWUFBWSxFQUFFO3FCQUN4QixJQUFJLFlBQVksRUFBRTtvQkFDbkIsSUFBSSxZQUFZLEVBQUU7cUJBQ2pCLElBQUksWUFBWSxFQUFFO29CQUNuQixJQUFJLFlBQVksRUFBRTtnQ0FDTixJQUFJLFlBQVksRUFBRTswQkFDeEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFOzBCQUNsQixJQUFJLFlBQVksRUFBRTsyQkFDakIsSUFBSSxZQUFZLEVBQUU7MEJBQ25CLElBQUksWUFBWSxFQUFFO29CQUN4QixJQUFJLFlBQVksRUFBRTtvQkFDbEIsSUFBSSxZQUFZLEVBQUU7c0JBQ2hCLElBQUksWUFBWSxFQUFFO3FCQUNuQixJQUFJLFlBQVksRUFBRTtzQkFDakIsSUFBSSxZQUFZLEVBQUU7MkJBQ2IsSUFBSSxZQUFZLEVBQUU7K0JBQ2QsSUFBSSxZQUFZLEVBQUU7Z0NBQ2pCLElBQUksWUFBWSxFQUFFO3lCQUVwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lDQUdwQyxJQUFJO2dDQUNDLElBQUk7S0FVaEQ7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBQSxNQUFNO1lBQzFCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsVUFBQSxNQUFNO1lBQzNDLElBQUksTUFBTSxJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckIsQ0FBQztLQUNGOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN6QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1QjtJQUdELHNCQUFJLG1DQUFLOzs7OztRQUFUO1lBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZCOzs7Ozs7UUFHRCxVQUFVLENBQU07WUFBaEIsaUJBUUM7WUFQQSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QixDQUFDLENBQUM7YUFFSDtTQUNEOzs7T0FYQTs7Ozs7O0lBY0QscUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDcEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDWDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDRDtLQUNEOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDM0I7Ozs7O0lBRUQsNENBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUFsQixpQkFrR0M7UUFqR0EsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7O1lBQ3pCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUEsQ0FBQztZQUN2QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUM7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUEsQ0FBQztZQUN2QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFBLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUM7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQztZQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUM7WUFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUEsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFBLENBQUM7WUFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEsQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUEsQ0FBQztZQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQUEsQ0FBQztZQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQUEsQ0FBQztZQUM5QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQztLQUNIOztnQkEvTkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsU0FBUztvQkFDbkIsU0FBUyxFQUFFO3dCQUNWOzRCQUNDLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixHQUFBLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNYO3FCQUNEO2lCQUNEOzs7O2dCQWhDeUQsTUFBTTtnREErRTdELE1BQU0sU0FBQyxnQkFBZ0I7OztrQ0E3Q3hCLEtBQUssU0FBQyxTQUFTO3dCQUVmLE1BQU07MkJBQ04sTUFBTTs0QkFDTixNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNOzBCQUNOLE1BQU07MkJBQ04sTUFBTTt3QkFDTixNQUFNOzhCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTttQ0FDTixNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07eUJBQ04sTUFBTTt3QkFDTixNQUFNO3lCQUNOLE1BQU07OEJBQ04sTUFBTTtrQ0FDTixNQUFNO21DQUNOLE1BQU07OzJCQWxFUjs7Ozs7OztBQ0FBOzs7Ozs7O0lBY1Esd0JBQVU7Ozs7SUFBakIsVUFBa0IsVUFBK0I7UUFBL0IsMkJBQUEsRUFBQSxlQUErQjtRQUNoRCxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7YUFDbkQ7U0FDRCxDQUFDO0tBQ0Y7O2dCQWhCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO3FCQUM5RDtpQkFDRDs7d0JBWkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/tinymce/plugins/advlist/plugin.js":
/*!********************************************************!*\
  !*** ./node_modules/tinymce/plugins/advlist/plugin.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var advlist = (function () {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var applyListFormat = function (editor, listName, styleValue) {
      var cmd = listName === 'UL' ? 'InsertUnorderedList' : 'InsertOrderedList';
      editor.execCommand(cmd, false, styleValue === false ? null : { 'list-style-type': styleValue });
    };
    var Actions = { applyListFormat: applyListFormat };

    var register = function (editor) {
      editor.addCommand('ApplyUnorderedListStyle', function (ui, value) {
        Actions.applyListFormat(editor, 'UL', value['list-style-type']);
      });
      editor.addCommand('ApplyOrderedListStyle', function (ui, value) {
        Actions.applyListFormat(editor, 'OL', value['list-style-type']);
      });
    };
    var Commands = { register: register };

    var getNumberStyles = function (editor) {
      var styles = editor.getParam('advlist_number_styles', 'default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman');
      return styles ? styles.split(/[ ,]/) : [];
    };
    var getBulletStyles = function (editor) {
      var styles = editor.getParam('advlist_bullet_styles', 'default,circle,disc,square');
      return styles ? styles.split(/[ ,]/) : [];
    };
    var Settings = {
      getNumberStyles: getNumberStyles,
      getBulletStyles: getBulletStyles
    };

    var isChildOfBody = function (editor, elm) {
      return editor.$.contains(editor.getBody(), elm);
    };
    var isTableCellNode = function (node) {
      return node && /^(TH|TD)$/.test(node.nodeName);
    };
    var isListNode = function (editor) {
      return function (node) {
        return node && /^(OL|UL|DL)$/.test(node.nodeName) && isChildOfBody(editor, node);
      };
    };
    var getSelectedStyleType = function (editor) {
      var listElm = editor.dom.getParent(editor.selection.getNode(), 'ol,ul');
      return editor.dom.getStyle(listElm, 'listStyleType') || '';
    };
    var ListUtils = {
      isTableCellNode: isTableCellNode,
      isListNode: isListNode,
      getSelectedStyleType: getSelectedStyleType
    };

    var styleValueToText = function (styleValue) {
      return styleValue.replace(/\-/g, ' ').replace(/\b\w/g, function (chr) {
        return chr.toUpperCase();
      });
    };
    var toMenuItems = function (styles) {
      return global$1.map(styles, function (styleValue) {
        var text = styleValueToText(styleValue);
        var data = styleValue === 'default' ? '' : styleValue;
        return {
          text: text,
          data: data
        };
      });
    };
    var ListStyles = { toMenuItems: toMenuItems };

    var findIndex = function (list, predicate) {
      for (var index = 0; index < list.length; index++) {
        var element = list[index];
        if (predicate(element)) {
          return index;
        }
      }
      return -1;
    };
    var listState = function (editor, listName) {
      return function (e) {
        var ctrl = e.control;
        editor.on('NodeChange', function (e) {
          var tableCellIndex = findIndex(e.parents, ListUtils.isTableCellNode);
          var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
          var lists = global$1.grep(parents, ListUtils.isListNode(editor));
          ctrl.active(lists.length > 0 && lists[0].nodeName === listName);
        });
      };
    };
    var updateSelection = function (editor) {
      return function (e) {
        var listStyleType = ListUtils.getSelectedStyleType(editor);
        e.control.items().each(function (ctrl) {
          ctrl.active(ctrl.settings.data === listStyleType);
        });
      };
    };
    var addSplitButton = function (editor, id, tooltip, cmd, nodeName, styles) {
      editor.addButton(id, {
        active: false,
        type: 'splitbutton',
        tooltip: tooltip,
        menu: ListStyles.toMenuItems(styles),
        onPostRender: listState(editor, nodeName),
        onshow: updateSelection(editor),
        onselect: function (e) {
          Actions.applyListFormat(editor, nodeName, e.control.settings.data);
        },
        onclick: function () {
          editor.execCommand(cmd);
        }
      });
    };
    var addButton = function (editor, id, tooltip, cmd, nodeName, styles) {
      editor.addButton(id, {
        active: false,
        type: 'button',
        tooltip: tooltip,
        onPostRender: listState(editor, nodeName),
        onclick: function () {
          editor.execCommand(cmd);
        }
      });
    };
    var addControl = function (editor, id, tooltip, cmd, nodeName, styles) {
      if (styles.length > 0) {
        addSplitButton(editor, id, tooltip, cmd, nodeName, styles);
      } else {
        addButton(editor, id, tooltip, cmd, nodeName);
      }
    };
    var register$1 = function (editor) {
      addControl(editor, 'numlist', 'Numbered list', 'InsertOrderedList', 'OL', Settings.getNumberStyles(editor));
      addControl(editor, 'bullist', 'Bullet list', 'InsertUnorderedList', 'UL', Settings.getBulletStyles(editor));
    };
    var Buttons = { register: register$1 };

    global.add('advlist', function (editor) {
      var hasPlugin = function (editor, plugin) {
        var plugins = editor.settings.plugins ? editor.settings.plugins : '';
        return global$1.inArray(plugins.split(/[ ,]/), plugin) !== -1;
      };
      if (hasPlugin(editor, 'lists')) {
        Buttons.register(editor);
        Commands.register(editor);
      }
    });
    function Plugin () {
    }

    return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/autoresize/plugin.js":
/*!***********************************************************!*\
  !*** ./node_modules/tinymce/plugins/autoresize/plugin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var autoresize = (function () {
    'use strict';

    var Cell = function (initial) {
      var value = initial;
      var get = function () {
        return value;
      };
      var set = function (v) {
        value = v;
      };
      var clone = function () {
        return Cell(get());
      };
      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.Env');

    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Delay');

    var getAutoResizeMinHeight = function (editor) {
      return parseInt(editor.getParam('autoresize_min_height', editor.getElement().offsetHeight), 10);
    };
    var getAutoResizeMaxHeight = function (editor) {
      return parseInt(editor.getParam('autoresize_max_height', 0), 10);
    };
    var getAutoResizeOverflowPadding = function (editor) {
      return editor.getParam('autoresize_overflow_padding', 1);
    };
    var getAutoResizeBottomMargin = function (editor) {
      return editor.getParam('autoresize_bottom_margin', 50);
    };
    var shouldAutoResizeOnInit = function (editor) {
      return editor.getParam('autoresize_on_init', true);
    };
    var Settings = {
      getAutoResizeMinHeight: getAutoResizeMinHeight,
      getAutoResizeMaxHeight: getAutoResizeMaxHeight,
      getAutoResizeOverflowPadding: getAutoResizeOverflowPadding,
      getAutoResizeBottomMargin: getAutoResizeBottomMargin,
      shouldAutoResizeOnInit: shouldAutoResizeOnInit
    };

    var isFullscreen = function (editor) {
      return editor.plugins.fullscreen && editor.plugins.fullscreen.isFullscreen();
    };
    var wait = function (editor, oldSize, times, interval, callback) {
      global$2.setEditorTimeout(editor, function () {
        resize(editor, oldSize);
        if (times--) {
          wait(editor, oldSize, times, interval, callback);
        } else if (callback) {
          callback();
        }
      }, interval);
    };
    var toggleScrolling = function (editor, state) {
      var body = editor.getBody();
      if (body) {
        body.style.overflowY = state ? '' : 'hidden';
        if (!state) {
          body.scrollTop = 0;
        }
      }
    };
    var resize = function (editor, oldSize) {
      var deltaSize, doc, body, resizeHeight, myHeight;
      var marginTop, marginBottom, paddingTop, paddingBottom, borderTop, borderBottom;
      var dom = editor.dom;
      doc = editor.getDoc();
      if (!doc) {
        return;
      }
      if (isFullscreen(editor)) {
        toggleScrolling(editor, true);
        return;
      }
      body = doc.body;
      resizeHeight = Settings.getAutoResizeMinHeight(editor);
      marginTop = dom.getStyle(body, 'margin-top', true);
      marginBottom = dom.getStyle(body, 'margin-bottom', true);
      paddingTop = dom.getStyle(body, 'padding-top', true);
      paddingBottom = dom.getStyle(body, 'padding-bottom', true);
      borderTop = dom.getStyle(body, 'border-top-width', true);
      borderBottom = dom.getStyle(body, 'border-bottom-width', true);
      myHeight = body.offsetHeight + parseInt(marginTop, 10) + parseInt(marginBottom, 10) + parseInt(paddingTop, 10) + parseInt(paddingBottom, 10) + parseInt(borderTop, 10) + parseInt(borderBottom, 10);
      if (isNaN(myHeight) || myHeight <= 0) {
        myHeight = global$1.ie ? body.scrollHeight : global$1.webkit && body.clientHeight === 0 ? 0 : body.offsetHeight;
      }
      if (myHeight > Settings.getAutoResizeMinHeight(editor)) {
        resizeHeight = myHeight;
      }
      var maxHeight = Settings.getAutoResizeMaxHeight(editor);
      if (maxHeight && myHeight > maxHeight) {
        resizeHeight = maxHeight;
        toggleScrolling(editor, true);
      } else {
        toggleScrolling(editor, false);
      }
      if (resizeHeight !== oldSize.get()) {
        deltaSize = resizeHeight - oldSize.get();
        dom.setStyle(editor.iframeElement, 'height', resizeHeight + 'px');
        oldSize.set(resizeHeight);
        if (global$1.webkit && deltaSize < 0) {
          resize(editor, oldSize);
        }
      }
    };
    var setup = function (editor, oldSize) {
      editor.on('init', function () {
        var overflowPadding, bottomMargin;
        var dom = editor.dom;
        overflowPadding = Settings.getAutoResizeOverflowPadding(editor);
        bottomMargin = Settings.getAutoResizeBottomMargin(editor);
        if (overflowPadding !== false) {
          dom.setStyles(editor.getBody(), {
            paddingLeft: overflowPadding,
            paddingRight: overflowPadding
          });
        }
        if (bottomMargin !== false) {
          dom.setStyles(editor.getBody(), { paddingBottom: bottomMargin });
        }
      });
      editor.on('nodechange setcontent keyup FullscreenStateChanged', function (e) {
        resize(editor, oldSize);
      });
      if (Settings.shouldAutoResizeOnInit(editor)) {
        editor.on('init', function () {
          wait(editor, oldSize, 20, 100, function () {
            wait(editor, oldSize, 5, 1000);
          });
        });
      }
    };
    var Resize = {
      setup: setup,
      resize: resize
    };

    var register = function (editor, oldSize) {
      editor.addCommand('mceAutoResize', function () {
        Resize.resize(editor, oldSize);
      });
    };
    var Commands = { register: register };

    global.add('autoresize', function (editor) {
      if (!editor.inline) {
        var oldSize = Cell(0);
        Commands.register(editor, oldSize);
        Resize.setup(editor, oldSize);
      }
    });
    function Plugin () {
    }

    return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/code/plugin.js":
/*!*****************************************************!*\
  !*** ./node_modules/tinymce/plugins/code/plugin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var code = (function () {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var getMinWidth = function (editor) {
      return editor.getParam('code_dialog_width', 600);
    };
    var getMinHeight = function (editor) {
      return editor.getParam('code_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
    };
    var Settings = {
      getMinWidth: getMinWidth,
      getMinHeight: getMinHeight
    };

    var setContent = function (editor, html) {
      editor.focus();
      editor.undoManager.transact(function () {
        editor.setContent(html);
      });
      editor.selection.setCursorLocation();
      editor.nodeChanged();
    };
    var getContent = function (editor) {
      return editor.getContent({ source_view: true });
    };
    var Content = {
      setContent: setContent,
      getContent: getContent
    };

    var open = function (editor) {
      var minWidth = Settings.getMinWidth(editor);
      var minHeight = Settings.getMinHeight(editor);
      var win = editor.windowManager.open({
        title: 'Source code',
        body: {
          type: 'textbox',
          name: 'code',
          multiline: true,
          minWidth: minWidth,
          minHeight: minHeight,
          spellcheck: false,
          style: 'direction: ltr; text-align: left'
        },
        onSubmit: function (e) {
          Content.setContent(editor, e.data.code);
        }
      });
      win.find('#code').value(Content.getContent(editor));
    };
    var Dialog = { open: open };

    var register = function (editor) {
      editor.addCommand('mceCodeEditor', function () {
        Dialog.open(editor);
      });
    };
    var Commands = { register: register };

    var register$1 = function (editor) {
      editor.addButton('code', {
        icon: 'code',
        tooltip: 'Source code',
        onclick: function () {
          Dialog.open(editor);
        }
      });
      editor.addMenuItem('code', {
        icon: 'code',
        text: 'Source code',
        onclick: function () {
          Dialog.open(editor);
        }
      });
    };
    var Buttons = { register: register$1 };

    global.add('code', function (editor) {
      Commands.register(editor);
      Buttons.register(editor);
      return {};
    });
    function Plugin () {
    }

    return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/link/plugin.js":
/*!*****************************************************!*\
  !*** ./node_modules/tinymce/plugins/link/plugin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var link = (function (domGlobals) {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.util.VK');

    var assumeExternalTargets = function (editorSettings) {
      return typeof editorSettings.link_assume_external_targets === 'boolean' ? editorSettings.link_assume_external_targets : false;
    };
    var hasContextToolbar = function (editorSettings) {
      return typeof editorSettings.link_context_toolbar === 'boolean' ? editorSettings.link_context_toolbar : false;
    };
    var getLinkList = function (editorSettings) {
      return editorSettings.link_list;
    };
    var hasDefaultLinkTarget = function (editorSettings) {
      return typeof editorSettings.default_link_target === 'string';
    };
    var getDefaultLinkTarget = function (editorSettings) {
      return editorSettings.default_link_target;
    };
    var getTargetList = function (editorSettings) {
      return editorSettings.target_list;
    };
    var setTargetList = function (editor, list) {
      editor.settings.target_list = list;
    };
    var shouldShowTargetList = function (editorSettings) {
      return getTargetList(editorSettings) !== false;
    };
    var getRelList = function (editorSettings) {
      return editorSettings.rel_list;
    };
    var hasRelList = function (editorSettings) {
      return getRelList(editorSettings) !== undefined;
    };
    var getLinkClassList = function (editorSettings) {
      return editorSettings.link_class_list;
    };
    var hasLinkClassList = function (editorSettings) {
      return getLinkClassList(editorSettings) !== undefined;
    };
    var shouldShowLinkTitle = function (editorSettings) {
      return editorSettings.link_title !== false;
    };
    var allowUnsafeLinkTarget = function (editorSettings) {
      return typeof editorSettings.allow_unsafe_link_target === 'boolean' ? editorSettings.allow_unsafe_link_target : false;
    };
    var Settings = {
      assumeExternalTargets: assumeExternalTargets,
      hasContextToolbar: hasContextToolbar,
      getLinkList: getLinkList,
      hasDefaultLinkTarget: hasDefaultLinkTarget,
      getDefaultLinkTarget: getDefaultLinkTarget,
      getTargetList: getTargetList,
      setTargetList: setTargetList,
      shouldShowTargetList: shouldShowTargetList,
      getRelList: getRelList,
      hasRelList: hasRelList,
      getLinkClassList: getLinkClassList,
      hasLinkClassList: hasLinkClassList,
      shouldShowLinkTitle: shouldShowLinkTitle,
      allowUnsafeLinkTarget: allowUnsafeLinkTarget
    };

    var global$2 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var global$3 = tinymce.util.Tools.resolve('tinymce.Env');

    var appendClickRemove = function (link, evt) {
      domGlobals.document.body.appendChild(link);
      link.dispatchEvent(evt);
      domGlobals.document.body.removeChild(link);
    };
    var open = function (url) {
      if (!global$3.ie || global$3.ie > 10) {
        var link = domGlobals.document.createElement('a');
        link.target = '_blank';
        link.href = url;
        link.rel = 'noreferrer noopener';
        var evt = domGlobals.document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, domGlobals.window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        appendClickRemove(link, evt);
      } else {
        var win = domGlobals.window.open('', '_blank');
        if (win) {
          win.opener = null;
          var doc = win.document;
          doc.open();
          doc.write('<meta http-equiv="refresh" content="0; url=' + global$2.DOM.encode(url) + '">');
          doc.close();
        }
      }
    };
    var OpenUrl = { open: open };

    var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var toggleTargetRules = function (rel, isUnsafe) {
      var rules = ['noopener'];
      var newRel = rel ? rel.split(/\s+/) : [];
      var toString = function (rel) {
        return global$4.trim(rel.sort().join(' '));
      };
      var addTargetRules = function (rel) {
        rel = removeTargetRules(rel);
        return rel.length ? rel.concat(rules) : rules;
      };
      var removeTargetRules = function (rel) {
        return rel.filter(function (val) {
          return global$4.inArray(rules, val) === -1;
        });
      };
      newRel = isUnsafe ? addTargetRules(newRel) : removeTargetRules(newRel);
      return newRel.length ? toString(newRel) : null;
    };
    var trimCaretContainers = function (text) {
      return text.replace(/\uFEFF/g, '');
    };
    var getAnchorElement = function (editor, selectedElm) {
      selectedElm = selectedElm || editor.selection.getNode();
      if (isImageFigure(selectedElm)) {
        return editor.dom.select('a[href]', selectedElm)[0];
      } else {
        return editor.dom.getParent(selectedElm, 'a[href]');
      }
    };
    var getAnchorText = function (selection, anchorElm) {
      var text = anchorElm ? anchorElm.innerText || anchorElm.textContent : selection.getContent({ format: 'text' });
      return trimCaretContainers(text);
    };
    var isLink = function (elm) {
      return elm && elm.nodeName === 'A' && elm.href;
    };
    var hasLinks = function (elements) {
      return global$4.grep(elements, isLink).length > 0;
    };
    var isOnlyTextSelected = function (html) {
      if (/</.test(html) && (!/^<a [^>]+>[^<]+<\/a>$/.test(html) || html.indexOf('href=') === -1)) {
        return false;
      }
      return true;
    };
    var isImageFigure = function (node) {
      return node && node.nodeName === 'FIGURE' && /\bimage\b/i.test(node.className);
    };
    var link = function (editor, attachState) {
      return function (data) {
        editor.undoManager.transact(function () {
          var selectedElm = editor.selection.getNode();
          var anchorElm = getAnchorElement(editor, selectedElm);
          var linkAttrs = {
            href: data.href,
            target: data.target ? data.target : null,
            rel: data.rel ? data.rel : null,
            class: data.class ? data.class : null,
            title: data.title ? data.title : null
          };
          if (!Settings.hasRelList(editor.settings) && Settings.allowUnsafeLinkTarget(editor.settings) === false) {
            linkAttrs.rel = toggleTargetRules(linkAttrs.rel, linkAttrs.target === '_blank');
          }
          if (data.href === attachState.href) {
            attachState.attach();
            attachState = {};
          }
          if (anchorElm) {
            editor.focus();
            if (data.hasOwnProperty('text')) {
              if ('innerText' in anchorElm) {
                anchorElm.innerText = data.text;
              } else {
                anchorElm.textContent = data.text;
              }
            }
            editor.dom.setAttribs(anchorElm, linkAttrs);
            editor.selection.select(anchorElm);
            editor.undoManager.add();
          } else {
            if (isImageFigure(selectedElm)) {
              linkImageFigure(editor, selectedElm, linkAttrs);
            } else if (data.hasOwnProperty('text')) {
              editor.insertContent(editor.dom.createHTML('a', linkAttrs, editor.dom.encode(data.text)));
            } else {
              editor.execCommand('mceInsertLink', false, linkAttrs);
            }
          }
        });
      };
    };
    var unlink = function (editor) {
      return function () {
        editor.undoManager.transact(function () {
          var node = editor.selection.getNode();
          if (isImageFigure(node)) {
            unlinkImageFigure(editor, node);
          } else {
            editor.execCommand('unlink');
          }
        });
      };
    };
    var unlinkImageFigure = function (editor, fig) {
      var a, img;
      img = editor.dom.select('img', fig)[0];
      if (img) {
        a = editor.dom.getParents(img, 'a[href]', fig)[0];
        if (a) {
          a.parentNode.insertBefore(img, a);
          editor.dom.remove(a);
        }
      }
    };
    var linkImageFigure = function (editor, fig, attrs) {
      var a, img;
      img = editor.dom.select('img', fig)[0];
      if (img) {
        a = editor.dom.create('a', attrs);
        img.parentNode.insertBefore(a, img);
        a.appendChild(img);
      }
    };
    var Utils = {
      link: link,
      unlink: unlink,
      isLink: isLink,
      hasLinks: hasLinks,
      isOnlyTextSelected: isOnlyTextSelected,
      getAnchorElement: getAnchorElement,
      getAnchorText: getAnchorText,
      toggleTargetRules: toggleTargetRules
    };

    var global$5 = tinymce.util.Tools.resolve('tinymce.util.Delay');

    var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');

    var attachState = {};
    var createLinkList = function (editor, callback) {
      var linkList = Settings.getLinkList(editor.settings);
      if (typeof linkList === 'string') {
        global$6.send({
          url: linkList,
          success: function (text) {
            callback(editor, JSON.parse(text));
          }
        });
      } else if (typeof linkList === 'function') {
        linkList(function (list) {
          callback(editor, list);
        });
      } else {
        callback(editor, linkList);
      }
    };
    var buildListItems = function (inputList, itemCallback, startItems) {
      var appendItems = function (values, output) {
        output = output || [];
        global$4.each(values, function (item) {
          var menuItem = { text: item.text || item.title };
          if (item.menu) {
            menuItem.menu = appendItems(item.menu);
          } else {
            menuItem.value = item.value;
            if (itemCallback) {
              itemCallback(menuItem);
            }
          }
          output.push(menuItem);
        });
        return output;
      };
      return appendItems(inputList, startItems || []);
    };
    var delayedConfirm = function (editor, message, callback) {
      var rng = editor.selection.getRng();
      global$5.setEditorTimeout(editor, function () {
        editor.windowManager.confirm(message, function (state) {
          editor.selection.setRng(rng);
          callback(state);
        });
      });
    };
    var showDialog = function (editor, linkList) {
      var data = {};
      var selection = editor.selection;
      var dom = editor.dom;
      var anchorElm, initialText;
      var win, onlyText, textListCtrl, linkListCtrl, relListCtrl, targetListCtrl, classListCtrl, linkTitleCtrl, value;
      var linkListChangeHandler = function (e) {
        var textCtrl = win.find('#text');
        if (!textCtrl.value() || e.lastControl && textCtrl.value() === e.lastControl.text()) {
          textCtrl.value(e.control.text());
        }
        win.find('#href').value(e.control.value());
      };
      var buildAnchorListControl = function (url) {
        var anchorList = [];
        global$4.each(editor.dom.select('a:not([href])'), function (anchor) {
          var id = anchor.name || anchor.id;
          if (id) {
            anchorList.push({
              text: id,
              value: '#' + id,
              selected: url.indexOf('#' + id) !== -1
            });
          }
        });
        if (anchorList.length) {
          anchorList.unshift({
            text: 'None',
            value: ''
          });
          return {
            name: 'anchor',
            type: 'listbox',
            label: 'Anchors',
            values: anchorList,
            onselect: linkListChangeHandler
          };
        }
      };
      var updateText = function () {
        if (!initialText && onlyText && !data.text) {
          this.parent().parent().find('#text')[0].value(this.value());
        }
      };
      var urlChange = function (e) {
        var meta = e.meta || {};
        if (linkListCtrl) {
          linkListCtrl.value(editor.convertURL(this.value(), 'href'));
        }
        global$4.each(e.meta, function (value, key) {
          var inp = win.find('#' + key);
          if (key === 'text') {
            if (initialText.length === 0) {
              inp.value(value);
              data.text = value;
            }
          } else {
            inp.value(value);
          }
        });
        if (meta.attach) {
          attachState = {
            href: this.value(),
            attach: meta.attach
          };
        }
        if (!meta.text) {
          updateText.call(this);
        }
      };
      var onBeforeCall = function (e) {
        e.meta = win.toJSON();
      };
      onlyText = Utils.isOnlyTextSelected(selection.getContent());
      anchorElm = Utils.getAnchorElement(editor);
      data.text = initialText = Utils.getAnchorText(editor.selection, anchorElm);
      data.href = anchorElm ? dom.getAttrib(anchorElm, 'href') : '';
      if (anchorElm) {
        data.target = dom.getAttrib(anchorElm, 'target');
      } else if (Settings.hasDefaultLinkTarget(editor.settings)) {
        data.target = Settings.getDefaultLinkTarget(editor.settings);
      }
      if (value = dom.getAttrib(anchorElm, 'rel')) {
        data.rel = value;
      }
      if (value = dom.getAttrib(anchorElm, 'class')) {
        data.class = value;
      }
      if (value = dom.getAttrib(anchorElm, 'title')) {
        data.title = value;
      }
      if (onlyText) {
        textListCtrl = {
          name: 'text',
          type: 'textbox',
          size: 40,
          label: 'Text to display',
          onchange: function () {
            data.text = this.value();
          }
        };
      }
      if (linkList) {
        linkListCtrl = {
          type: 'listbox',
          label: 'Link list',
          values: buildListItems(linkList, function (item) {
            item.value = editor.convertURL(item.value || item.url, 'href');
          }, [{
              text: 'None',
              value: ''
            }]),
          onselect: linkListChangeHandler,
          value: editor.convertURL(data.href, 'href'),
          onPostRender: function () {
            linkListCtrl = this;
          }
        };
      }
      if (Settings.shouldShowTargetList(editor.settings)) {
        if (Settings.getTargetList(editor.settings) === undefined) {
          Settings.setTargetList(editor, [
            {
              text: 'None',
              value: ''
            },
            {
              text: 'New window',
              value: '_blank'
            }
          ]);
        }
        targetListCtrl = {
          name: 'target',
          type: 'listbox',
          label: 'Target',
          values: buildListItems(Settings.getTargetList(editor.settings))
        };
      }
      if (Settings.hasRelList(editor.settings)) {
        relListCtrl = {
          name: 'rel',
          type: 'listbox',
          label: 'Rel',
          values: buildListItems(Settings.getRelList(editor.settings), function (item) {
            if (Settings.allowUnsafeLinkTarget(editor.settings) === false) {
              item.value = Utils.toggleTargetRules(item.value, data.target === '_blank');
            }
          })
        };
      }
      if (Settings.hasLinkClassList(editor.settings)) {
        classListCtrl = {
          name: 'class',
          type: 'listbox',
          label: 'Class',
          values: buildListItems(Settings.getLinkClassList(editor.settings), function (item) {
            if (item.value) {
              item.textStyle = function () {
                return editor.formatter.getCssText({
                  inline: 'a',
                  classes: [item.value]
                });
              };
            }
          })
        };
      }
      if (Settings.shouldShowLinkTitle(editor.settings)) {
        linkTitleCtrl = {
          name: 'title',
          type: 'textbox',
          label: 'Title',
          value: data.title
        };
      }
      win = editor.windowManager.open({
        title: 'Insert link',
        data: data,
        body: [
          {
            name: 'href',
            type: 'filepicker',
            filetype: 'file',
            size: 40,
            autofocus: true,
            label: 'Url',
            onchange: urlChange,
            onkeyup: updateText,
            onpaste: updateText,
            onbeforecall: onBeforeCall
          },
          textListCtrl,
          linkTitleCtrl,
          buildAnchorListControl(data.href),
          linkListCtrl,
          relListCtrl,
          targetListCtrl,
          classListCtrl
        ],
        onSubmit: function (e) {
          var assumeExternalTargets = Settings.assumeExternalTargets(editor.settings);
          var insertLink = Utils.link(editor, attachState);
          var removeLink = Utils.unlink(editor);
          var resultData = global$4.extend({}, data, e.data);
          var href = resultData.href;
          if (!href) {
            removeLink();
            return;
          }
          if (!onlyText || resultData.text === initialText) {
            delete resultData.text;
          }
          if (href.indexOf('@') > 0 && href.indexOf('//') === -1 && href.indexOf('mailto:') === -1) {
            delayedConfirm(editor, 'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?', function (state) {
              if (state) {
                resultData.href = 'mailto:' + href;
              }
              insertLink(resultData);
            });
            return;
          }
          if (assumeExternalTargets === true && !/^\w+:/i.test(href) || assumeExternalTargets === false && /^\s*www[\.|\d\.]/i.test(href)) {
            delayedConfirm(editor, 'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?', function (state) {
              if (state) {
                resultData.href = 'http://' + href;
              }
              insertLink(resultData);
            });
            return;
          }
          insertLink(resultData);
        }
      });
    };
    var open$1 = function (editor) {
      createLinkList(editor, showDialog);
    };
    var Dialog = { open: open$1 };

    var getLink = function (editor, elm) {
      return editor.dom.getParent(elm, 'a[href]');
    };
    var getSelectedLink = function (editor) {
      return getLink(editor, editor.selection.getStart());
    };
    var getHref = function (elm) {
      var href = elm.getAttribute('data-mce-href');
      return href ? href : elm.getAttribute('href');
    };
    var isContextMenuVisible = function (editor) {
      var contextmenu = editor.plugins.contextmenu;
      return contextmenu ? contextmenu.isContextMenuVisible() : false;
    };
    var hasOnlyAltModifier = function (e) {
      return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
    };
    var gotoLink = function (editor, a) {
      if (a) {
        var href = getHref(a);
        if (/^#/.test(href)) {
          var targetEl = editor.$(href);
          if (targetEl.length) {
            editor.selection.scrollIntoView(targetEl[0], true);
          }
        } else {
          OpenUrl.open(a.href);
        }
      }
    };
    var openDialog = function (editor) {
      return function () {
        Dialog.open(editor);
      };
    };
    var gotoSelectedLink = function (editor) {
      return function () {
        gotoLink(editor, getSelectedLink(editor));
      };
    };
    var leftClickedOnAHref = function (editor) {
      return function (elm) {
        var sel, rng, node;
        if (Settings.hasContextToolbar(editor.settings) && !isContextMenuVisible(editor) && Utils.isLink(elm)) {
          sel = editor.selection;
          rng = sel.getRng();
          node = rng.startContainer;
          if (node.nodeType === 3 && sel.isCollapsed() && rng.startOffset > 0 && rng.startOffset < node.data.length) {
            return true;
          }
        }
        return false;
      };
    };
    var setupGotoLinks = function (editor) {
      editor.on('click', function (e) {
        var link = getLink(editor, e.target);
        if (link && global$1.metaKeyPressed(e)) {
          e.preventDefault();
          gotoLink(editor, link);
        }
      });
      editor.on('keydown', function (e) {
        var link = getSelectedLink(editor);
        if (link && e.keyCode === 13 && hasOnlyAltModifier(e)) {
          e.preventDefault();
          gotoLink(editor, link);
        }
      });
    };
    var toggleActiveState = function (editor) {
      return function () {
        var self = this;
        editor.on('nodechange', function (e) {
          self.active(!editor.readonly && !!Utils.getAnchorElement(editor, e.element));
        });
      };
    };
    var toggleViewLinkState = function (editor) {
      return function () {
        var self = this;
        var toggleVisibility = function (e) {
          if (Utils.hasLinks(e.parents)) {
            self.show();
          } else {
            self.hide();
          }
        };
        if (!Utils.hasLinks(editor.dom.getParents(editor.selection.getStart()))) {
          self.hide();
        }
        editor.on('nodechange', toggleVisibility);
        self.on('remove', function () {
          editor.off('nodechange', toggleVisibility);
        });
      };
    };
    var Actions = {
      openDialog: openDialog,
      gotoSelectedLink: gotoSelectedLink,
      leftClickedOnAHref: leftClickedOnAHref,
      setupGotoLinks: setupGotoLinks,
      toggleActiveState: toggleActiveState,
      toggleViewLinkState: toggleViewLinkState
    };

    var register = function (editor) {
      editor.addCommand('mceLink', Actions.openDialog(editor));
    };
    var Commands = { register: register };

    var setup = function (editor) {
      editor.addShortcut('Meta+K', '', Actions.openDialog(editor));
    };
    var Keyboard = { setup: setup };

    var setupButtons = function (editor) {
      editor.addButton('link', {
        active: false,
        icon: 'link',
        tooltip: 'Insert/edit link',
        onclick: Actions.openDialog(editor),
        onpostrender: Actions.toggleActiveState(editor)
      });
      editor.addButton('unlink', {
        active: false,
        icon: 'unlink',
        tooltip: 'Remove link',
        onclick: Utils.unlink(editor),
        onpostrender: Actions.toggleActiveState(editor)
      });
      if (editor.addContextToolbar) {
        editor.addButton('openlink', {
          icon: 'newtab',
          tooltip: 'Open link',
          onclick: Actions.gotoSelectedLink(editor)
        });
      }
    };
    var setupMenuItems = function (editor) {
      editor.addMenuItem('openlink', {
        text: 'Open link',
        icon: 'newtab',
        onclick: Actions.gotoSelectedLink(editor),
        onPostRender: Actions.toggleViewLinkState(editor),
        prependToContext: true
      });
      editor.addMenuItem('link', {
        icon: 'link',
        text: 'Link',
        shortcut: 'Meta+K',
        onclick: Actions.openDialog(editor),
        stateSelector: 'a[href]',
        context: 'insert',
        prependToContext: true
      });
      editor.addMenuItem('unlink', {
        icon: 'unlink',
        text: 'Remove link',
        onclick: Utils.unlink(editor),
        stateSelector: 'a[href]'
      });
    };
    var setupContextToolbars = function (editor) {
      if (editor.addContextToolbar) {
        editor.addContextToolbar(Actions.leftClickedOnAHref(editor), 'openlink | link unlink');
      }
    };
    var Controls = {
      setupButtons: setupButtons,
      setupMenuItems: setupMenuItems,
      setupContextToolbars: setupContextToolbars
    };

    global.add('link', function (editor) {
      Controls.setupButtons(editor);
      Controls.setupMenuItems(editor);
      Controls.setupContextToolbars(editor);
      Actions.setupGotoLinks(editor);
      Commands.register(editor);
      Keyboard.setup(editor);
    });
    function Plugin () {
    }

    return Plugin;

}(window));
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/lists/plugin.js":
/*!******************************************************!*\
  !*** ./node_modules/tinymce/plugins/lists/plugin.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var lists = (function (domGlobals) {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');

    var global$2 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');

    var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');

    var global$4 = tinymce.util.Tools.resolve('tinymce.dom.BookmarkManager');

    var global$5 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var global$6 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var isTextNode = function (node) {
      return node && node.nodeType === 3;
    };
    var isListNode = function (node) {
      return node && /^(OL|UL|DL)$/.test(node.nodeName);
    };
    var isOlUlNode = function (node) {
      return node && /^(OL|UL)$/.test(node.nodeName);
    };
    var isListItemNode = function (node) {
      return node && /^(LI|DT|DD)$/.test(node.nodeName);
    };
    var isDlItemNode = function (node) {
      return node && /^(DT|DD)$/.test(node.nodeName);
    };
    var isTableCellNode = function (node) {
      return node && /^(TH|TD)$/.test(node.nodeName);
    };
    var isBr = function (node) {
      return node && node.nodeName === 'BR';
    };
    var isFirstChild = function (node) {
      return node.parentNode.firstChild === node;
    };
    var isLastChild = function (node) {
      return node.parentNode.lastChild === node;
    };
    var isTextBlock = function (editor, node) {
      return node && !!editor.schema.getTextBlockElements()[node.nodeName];
    };
    var isBlock = function (node, blockElements) {
      return node && node.nodeName in blockElements;
    };
    var isBogusBr = function (dom, node) {
      if (!isBr(node)) {
        return false;
      }
      if (dom.isBlock(node.nextSibling) && !isBr(node.previousSibling)) {
        return true;
      }
      return false;
    };
    var isEmpty = function (dom, elm, keepBookmarks) {
      var empty = dom.isEmpty(elm);
      if (keepBookmarks && dom.select('span[data-mce-type=bookmark]', elm).length > 0) {
        return false;
      }
      return empty;
    };
    var isChildOfBody = function (dom, elm) {
      return dom.isChildOf(elm, dom.getRoot());
    };
    var NodeType = {
      isTextNode: isTextNode,
      isListNode: isListNode,
      isOlUlNode: isOlUlNode,
      isDlItemNode: isDlItemNode,
      isListItemNode: isListItemNode,
      isTableCellNode: isTableCellNode,
      isBr: isBr,
      isFirstChild: isFirstChild,
      isLastChild: isLastChild,
      isTextBlock: isTextBlock,
      isBlock: isBlock,
      isBogusBr: isBogusBr,
      isEmpty: isEmpty,
      isChildOfBody: isChildOfBody
    };

    var getNormalizedPoint = function (container, offset) {
      if (NodeType.isTextNode(container)) {
        return {
          container: container,
          offset: offset
        };
      }
      var node = global$1.getNode(container, offset);
      if (NodeType.isTextNode(node)) {
        return {
          container: node,
          offset: offset >= container.childNodes.length ? node.data.length : 0
        };
      } else if (node.previousSibling && NodeType.isTextNode(node.previousSibling)) {
        return {
          container: node.previousSibling,
          offset: node.previousSibling.data.length
        };
      } else if (node.nextSibling && NodeType.isTextNode(node.nextSibling)) {
        return {
          container: node.nextSibling,
          offset: 0
        };
      }
      return {
        container: container,
        offset: offset
      };
    };
    var normalizeRange = function (rng) {
      var outRng = rng.cloneRange();
      var rangeStart = getNormalizedPoint(rng.startContainer, rng.startOffset);
      outRng.setStart(rangeStart.container, rangeStart.offset);
      var rangeEnd = getNormalizedPoint(rng.endContainer, rng.endOffset);
      outRng.setEnd(rangeEnd.container, rangeEnd.offset);
      return outRng;
    };
    var Range = {
      getNormalizedPoint: getNormalizedPoint,
      normalizeRange: normalizeRange
    };

    var DOM = global$6.DOM;
    var createBookmark = function (rng) {
      var bookmark = {};
      var setupEndPoint = function (start) {
        var offsetNode, container, offset;
        container = rng[start ? 'startContainer' : 'endContainer'];
        offset = rng[start ? 'startOffset' : 'endOffset'];
        if (container.nodeType === 1) {
          offsetNode = DOM.create('span', { 'data-mce-type': 'bookmark' });
          if (container.hasChildNodes()) {
            offset = Math.min(offset, container.childNodes.length - 1);
            if (start) {
              container.insertBefore(offsetNode, container.childNodes[offset]);
            } else {
              DOM.insertAfter(offsetNode, container.childNodes[offset]);
            }
          } else {
            container.appendChild(offsetNode);
          }
          container = offsetNode;
          offset = 0;
        }
        bookmark[start ? 'startContainer' : 'endContainer'] = container;
        bookmark[start ? 'startOffset' : 'endOffset'] = offset;
      };
      setupEndPoint(true);
      if (!rng.collapsed) {
        setupEndPoint();
      }
      return bookmark;
    };
    var resolveBookmark = function (bookmark) {
      function restoreEndPoint(start) {
        var container, offset, node;
        var nodeIndex = function (container) {
          var node = container.parentNode.firstChild, idx = 0;
          while (node) {
            if (node === container) {
              return idx;
            }
            if (node.nodeType !== 1 || node.getAttribute('data-mce-type') !== 'bookmark') {
              idx++;
            }
            node = node.nextSibling;
          }
          return -1;
        };
        container = node = bookmark[start ? 'startContainer' : 'endContainer'];
        offset = bookmark[start ? 'startOffset' : 'endOffset'];
        if (!container) {
          return;
        }
        if (container.nodeType === 1) {
          offset = nodeIndex(container);
          container = container.parentNode;
          DOM.remove(node);
          if (!container.hasChildNodes() && DOM.isBlock(container)) {
            container.appendChild(DOM.create('br'));
          }
        }
        bookmark[start ? 'startContainer' : 'endContainer'] = container;
        bookmark[start ? 'startOffset' : 'endOffset'] = offset;
      }
      restoreEndPoint(true);
      restoreEndPoint();
      var rng = DOM.createRng();
      rng.setStart(bookmark.startContainer, bookmark.startOffset);
      if (bookmark.endContainer) {
        rng.setEnd(bookmark.endContainer, bookmark.endOffset);
      }
      return Range.normalizeRange(rng);
    };
    var Bookmark = {
      createBookmark: createBookmark,
      resolveBookmark: resolveBookmark
    };

    var constant = function (value) {
      return function () {
        return value;
      };
    };
    var not = function (f) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return !f.apply(null, args);
      };
    };
    var never = constant(false);
    var always = constant(true);

    var never$1 = never;
    var always$1 = always;
    var none = function () {
      return NONE;
    };
    var NONE = function () {
      var eq = function (o) {
        return o.isNone();
      };
      var call = function (thunk) {
        return thunk();
      };
      var id = function (n) {
        return n;
      };
      var noop = function () {
      };
      var nul = function () {
        return null;
      };
      var undef = function () {
        return undefined;
      };
      var me = {
        fold: function (n, s) {
          return n();
        },
        is: never$1,
        isSome: never$1,
        isNone: always$1,
        getOr: id,
        getOrThunk: call,
        getOrDie: function (msg) {
          throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: none,
        ap: none,
        each: noop,
        bind: none,
        flatten: none,
        exists: never$1,
        forall: always$1,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () {
          return [];
        },
        toString: constant('none()')
      };
      if (Object.freeze) {
        Object.freeze(me);
      }
      return me;
    }();
    var some = function (a) {
      var constant_a = function () {
        return a;
      };
      var self = function () {
        return me;
      };
      var map = function (f) {
        return some(f(a));
      };
      var bind = function (f) {
        return f(a);
      };
      var me = {
        fold: function (n, s) {
          return s(a);
        },
        is: function (v) {
          return a === v;
        },
        isSome: always$1,
        isNone: never$1,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
          return optfab.fold(none, function (fab) {
            return some(fab(a));
          });
        },
        each: function (f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
          return f(a) ? me : NONE;
        },
        equals: function (o) {
          return o.is(a);
        },
        equals_: function (o, elementEq) {
          return o.fold(never$1, function (b) {
            return elementEq(a, b);
          });
        },
        toArray: function () {
          return [a];
        },
        toString: function () {
          return 'some(' + a + ')';
        }
      };
      return me;
    };
    var from = function (value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: none,
      from: from
    };

    var typeOf = function (x) {
      if (x === null) {
        return 'null';
      }
      var t = typeof x;
      if (t === 'object' && (Array.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'Array')) {
        return 'array';
      }
      if (t === 'object' && (String.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'String')) {
        return 'string';
      }
      return t;
    };
    var isType = function (type) {
      return function (value) {
        return typeOf(value) === type;
      };
    };
    var isString = isType('string');
    var isArray = isType('array');
    var isBoolean = isType('boolean');
    var isFunction = isType('function');
    var isNumber = isType('number');

    var slice = Array.prototype.slice;
    var map = function (xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var each = function (xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var filter = function (xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var groupBy = function (xs, f) {
      if (xs.length === 0) {
        return [];
      } else {
        var wasType = f(xs[0]);
        var r = [];
        var group = [];
        for (var i = 0, len = xs.length; i < len; i++) {
          var x = xs[i];
          var type = f(x);
          if (type !== wasType) {
            r.push(group);
            group = [];
          }
          wasType = type;
          group.push(x);
        }
        if (group.length !== 0) {
          r.push(group);
        }
        return r;
      }
    };
    var foldl = function (xs, f, acc) {
      each(xs, function (x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var find = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var push = Array.prototype.push;
    var flatten = function (xs) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (!isArray(xs[i])) {
          throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        }
        push.apply(r, xs[i]);
      }
      return r;
    };
    var bind = function (xs, f) {
      var output = map(xs, f);
      return flatten(output);
    };
    var reverse = function (xs) {
      var r = slice.call(xs, 0);
      r.reverse();
      return r;
    };
    var head = function (xs) {
      return xs.length === 0 ? Option.none() : Option.some(xs[0]);
    };
    var last = function (xs) {
      return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
    };
    var from$1 = isFunction(Array.from) ? Array.from : function (x) {
      return slice.call(x);
    };

    var Global = typeof domGlobals.window !== 'undefined' ? domGlobals.window : Function('return this;')();

    var path = function (parts, scope) {
      var o = scope !== undefined && scope !== null ? scope : Global;
      for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i) {
        o = o[parts[i]];
      }
      return o;
    };
    var resolve = function (p, scope) {
      var parts = p.split('.');
      return path(parts, scope);
    };

    var unsafe = function (name, scope) {
      return resolve(name, scope);
    };
    var getOrDie = function (name, scope) {
      var actual = unsafe(name, scope);
      if (actual === undefined || actual === null) {
        throw new Error(name + ' not available on this browser');
      }
      return actual;
    };
    var Global$1 = { getOrDie: getOrDie };

    var htmlElement = function (scope) {
      return Global$1.getOrDie('HTMLElement', scope);
    };
    var isPrototypeOf = function (x) {
      var scope = resolve('ownerDocument.defaultView', x);
      return htmlElement(scope).prototype.isPrototypeOf(x);
    };
    var HTMLElement = { isPrototypeOf: isPrototypeOf };

    var global$7 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

    var getParentList = function (editor) {
      var selectionStart = editor.selection.getStart(true);
      return editor.dom.getParent(selectionStart, 'OL,UL,DL', getClosestListRootElm(editor, selectionStart));
    };
    var isParentListSelected = function (parentList, selectedBlocks) {
      return parentList && selectedBlocks.length === 1 && selectedBlocks[0] === parentList;
    };
    var findSubLists = function (parentList) {
      return global$5.grep(parentList.querySelectorAll('ol,ul,dl'), function (elm) {
        return NodeType.isListNode(elm);
      });
    };
    var getSelectedSubLists = function (editor) {
      var parentList = getParentList(editor);
      var selectedBlocks = editor.selection.getSelectedBlocks();
      if (isParentListSelected(parentList, selectedBlocks)) {
        return findSubLists(parentList);
      } else {
        return global$5.grep(selectedBlocks, function (elm) {
          return NodeType.isListNode(elm) && parentList !== elm;
        });
      }
    };
    var findParentListItemsNodes = function (editor, elms) {
      var listItemsElms = global$5.map(elms, function (elm) {
        var parentLi = editor.dom.getParent(elm, 'li,dd,dt', getClosestListRootElm(editor, elm));
        return parentLi ? parentLi : elm;
      });
      return global$7.unique(listItemsElms);
    };
    var getSelectedListItems = function (editor) {
      var selectedBlocks = editor.selection.getSelectedBlocks();
      return global$5.grep(findParentListItemsNodes(editor, selectedBlocks), function (block) {
        return NodeType.isListItemNode(block);
      });
    };
    var getSelectedDlItems = function (editor) {
      return filter(getSelectedListItems(editor), NodeType.isDlItemNode);
    };
    var getClosestListRootElm = function (editor, elm) {
      var parentTableCell = editor.dom.getParents(elm, 'TD,TH');
      var root = parentTableCell.length > 0 ? parentTableCell[0] : editor.getBody();
      return root;
    };
    var findLastParentListNode = function (editor, elm) {
      var parentLists = editor.dom.getParents(elm, 'ol,ul', getClosestListRootElm(editor, elm));
      return last(parentLists);
    };
    var getSelectedLists = function (editor) {
      var firstList = findLastParentListNode(editor, editor.selection.getStart());
      var subsequentLists = filter(editor.selection.getSelectedBlocks(), NodeType.isOlUlNode);
      return firstList.toArray().concat(subsequentLists);
    };
    var getSelectedListRoots = function (editor) {
      var selectedLists = getSelectedLists(editor);
      return getUniqueListRoots(editor, selectedLists);
    };
    var getUniqueListRoots = function (editor, lists) {
      var listRoots = map(lists, function (list) {
        return findLastParentListNode(editor, list).getOr(list);
      });
      return global$7.unique(listRoots);
    };
    var isList = function (editor) {
      var list = getParentList(editor);
      return HTMLElement.isPrototypeOf(list);
    };
    var Selection = {
      isList: isList,
      getParentList: getParentList,
      getSelectedSubLists: getSelectedSubLists,
      getSelectedListItems: getSelectedListItems,
      getClosestListRootElm: getClosestListRootElm,
      getSelectedDlItems: getSelectedDlItems,
      getSelectedListRoots: getSelectedListRoots
    };

    var fromHtml = function (html, scope) {
      var doc = scope || domGlobals.document;
      var div = doc.createElement('div');
      div.innerHTML = html;
      if (!div.hasChildNodes() || div.childNodes.length > 1) {
        domGlobals.console.error('HTML does not have a single root node', html);
        throw new Error('HTML must have a single root node');
      }
      return fromDom(div.childNodes[0]);
    };
    var fromTag = function (tag, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createElement(tag);
      return fromDom(node);
    };
    var fromText = function (text, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createTextNode(text);
      return fromDom(node);
    };
    var fromDom = function (node) {
      if (node === null || node === undefined) {
        throw new Error('Node cannot be null or undefined');
      }
      return { dom: constant(node) };
    };
    var fromPoint = function (docElm, x, y) {
      var doc = docElm.dom();
      return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
    };
    var Element = {
      fromHtml: fromHtml,
      fromTag: fromTag,
      fromText: fromText,
      fromDom: fromDom,
      fromPoint: fromPoint
    };

    var liftN = function (arr, f) {
      var r = [];
      for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        if (x.isSome()) {
          r.push(x.getOrDie());
        } else {
          return Option.none();
        }
      }
      return Option.some(f.apply(null, r));
    };

    var fromElements = function (elements, scope) {
      var doc = scope || domGlobals.document;
      var fragment = doc.createDocumentFragment();
      each(elements, function (element) {
        fragment.appendChild(element.dom());
      });
      return Element.fromDom(fragment);
    };

    var Immutable = function () {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
          throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
        }
        var struct = {};
        each(fields, function (name, i) {
          struct[name] = constant(values[i]);
        });
        return struct;
      };
    };

    var keys = Object.keys;
    var each$1 = function (obj, f) {
      var props = keys(obj);
      for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        f(x, i, obj);
      }
    };

    var node = function () {
      var f = Global$1.getOrDie('Node');
      return f;
    };
    var compareDocumentPosition = function (a, b, match) {
      return (a.compareDocumentPosition(b) & match) !== 0;
    };
    var documentPositionPreceding = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
    };
    var documentPositionContainedBy = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
    };
    var Node = {
      documentPositionPreceding: documentPositionPreceding,
      documentPositionContainedBy: documentPositionContainedBy
    };

    var cached = function (f) {
      var called = false;
      var r;
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!called) {
          called = true;
          r = f.apply(null, args);
        }
        return r;
      };
    };

    var firstMatch = function (regexes, s) {
      for (var i = 0; i < regexes.length; i++) {
        var x = regexes[i];
        if (x.test(s)) {
          return x;
        }
      }
      return undefined;
    };
    var find$1 = function (regexes, agent) {
      var r = firstMatch(regexes, agent);
      if (!r) {
        return {
          major: 0,
          minor: 0
        };
      }
      var group = function (i) {
        return Number(agent.replace(r, '$' + i));
      };
      return nu(group(1), group(2));
    };
    var detect = function (versionRegexes, agent) {
      var cleanedAgent = String(agent).toLowerCase();
      if (versionRegexes.length === 0) {
        return unknown();
      }
      return find$1(versionRegexes, cleanedAgent);
    };
    var unknown = function () {
      return nu(0, 0);
    };
    var nu = function (major, minor) {
      return {
        major: major,
        minor: minor
      };
    };
    var Version = {
      nu: nu,
      detect: detect,
      unknown: unknown
    };

    var edge = 'Edge';
    var chrome = 'Chrome';
    var ie = 'IE';
    var opera = 'Opera';
    var firefox = 'Firefox';
    var safari = 'Safari';
    var isBrowser = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$1 = function () {
      return nu$1({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$1 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isEdge: isBrowser(edge, current),
        isChrome: isBrowser(chrome, current),
        isIE: isBrowser(ie, current),
        isOpera: isBrowser(opera, current),
        isFirefox: isBrowser(firefox, current),
        isSafari: isBrowser(safari, current)
      };
    };
    var Browser = {
      unknown: unknown$1,
      nu: nu$1,
      edge: constant(edge),
      chrome: constant(chrome),
      ie: constant(ie),
      opera: constant(opera),
      firefox: constant(firefox),
      safari: constant(safari)
    };

    var windows = 'Windows';
    var ios = 'iOS';
    var android = 'Android';
    var linux = 'Linux';
    var osx = 'OSX';
    var solaris = 'Solaris';
    var freebsd = 'FreeBSD';
    var isOS = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$2 = function () {
      return nu$2({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$2 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isWindows: isOS(windows, current),
        isiOS: isOS(ios, current),
        isAndroid: isOS(android, current),
        isOSX: isOS(osx, current),
        isLinux: isOS(linux, current),
        isSolaris: isOS(solaris, current),
        isFreeBSD: isOS(freebsd, current)
      };
    };
    var OperatingSystem = {
      unknown: unknown$2,
      nu: nu$2,
      windows: constant(windows),
      ios: constant(ios),
      android: constant(android),
      linux: constant(linux),
      osx: constant(osx),
      solaris: constant(solaris),
      freebsd: constant(freebsd)
    };

    var DeviceType = function (os, browser, userAgent) {
      var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
      var isiPhone = os.isiOS() && !isiPad;
      var isAndroid3 = os.isAndroid() && os.version.major === 3;
      var isAndroid4 = os.isAndroid() && os.version.major === 4;
      var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
      var isTouch = os.isiOS() || os.isAndroid();
      var isPhone = isTouch && !isTablet;
      var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
      return {
        isiPad: constant(isiPad),
        isiPhone: constant(isiPhone),
        isTablet: constant(isTablet),
        isPhone: constant(isPhone),
        isTouch: constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: constant(iOSwebview)
      };
    };

    var detect$1 = function (candidates, userAgent) {
      var agent = String(userAgent).toLowerCase();
      return find(candidates, function (candidate) {
        return candidate.search(agent);
      });
    };
    var detectBrowser = function (browsers, userAgent) {
      return detect$1(browsers, userAgent).map(function (browser) {
        var version = Version.detect(browser.versionRegexes, userAgent);
        return {
          current: browser.name,
          version: version
        };
      });
    };
    var detectOs = function (oses, userAgent) {
      return detect$1(oses, userAgent).map(function (os) {
        var version = Version.detect(os.versionRegexes, userAgent);
        return {
          current: os.name,
          version: version
        };
      });
    };
    var UaString = {
      detectBrowser: detectBrowser,
      detectOs: detectOs
    };

    var contains = function (str, substr) {
      return str.indexOf(substr) !== -1;
    };

    var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
    var checkContains = function (target) {
      return function (uastring) {
        return contains(uastring, target);
      };
    };
    var browsers = [
      {
        name: 'Edge',
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function (uastring) {
          return contains(uastring, 'edge/') && contains(uastring, 'chrome') && contains(uastring, 'safari') && contains(uastring, 'applewebkit');
        }
      },
      {
        name: 'Chrome',
        versionRegexes: [
          /.*?chrome\/([0-9]+)\.([0-9]+).*/,
          normalVersionRegex
        ],
        search: function (uastring) {
          return contains(uastring, 'chrome') && !contains(uastring, 'chromeframe');
        }
      },
      {
        name: 'IE',
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: function (uastring) {
          return contains(uastring, 'msie') || contains(uastring, 'trident');
        }
      },
      {
        name: 'Opera',
        versionRegexes: [
          normalVersionRegex,
          /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('opera')
      },
      {
        name: 'Firefox',
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: checkContains('firefox')
      },
      {
        name: 'Safari',
        versionRegexes: [
          normalVersionRegex,
          /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: function (uastring) {
          return (contains(uastring, 'safari') || contains(uastring, 'mobile/')) && contains(uastring, 'applewebkit');
        }
      }
    ];
    var oses = [
      {
        name: 'Windows',
        search: checkContains('win'),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'iOS',
        search: function (uastring) {
          return contains(uastring, 'iphone') || contains(uastring, 'ipad');
        },
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
      },
      {
        name: 'Android',
        search: checkContains('android'),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'OSX',
        search: checkContains('os x'),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: 'Linux',
        search: checkContains('linux'),
        versionRegexes: []
      },
      {
        name: 'Solaris',
        search: checkContains('sunos'),
        versionRegexes: []
      },
      {
        name: 'FreeBSD',
        search: checkContains('freebsd'),
        versionRegexes: []
      }
    ];
    var PlatformInfo = {
      browsers: constant(browsers),
      oses: constant(oses)
    };

    var detect$2 = function (userAgent) {
      var browsers = PlatformInfo.browsers();
      var oses = PlatformInfo.oses();
      var browser = UaString.detectBrowser(browsers, userAgent).fold(Browser.unknown, Browser.nu);
      var os = UaString.detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
      var deviceType = DeviceType(os, browser, userAgent);
      return {
        browser: browser,
        os: os,
        deviceType: deviceType
      };
    };
    var PlatformDetection = { detect: detect$2 };

    var detect$3 = cached(function () {
      var userAgent = domGlobals.navigator.userAgent;
      return PlatformDetection.detect(userAgent);
    });
    var PlatformDetection$1 = { detect: detect$3 };

    var ATTRIBUTE = domGlobals.Node.ATTRIBUTE_NODE;
    var CDATA_SECTION = domGlobals.Node.CDATA_SECTION_NODE;
    var COMMENT = domGlobals.Node.COMMENT_NODE;
    var DOCUMENT = domGlobals.Node.DOCUMENT_NODE;
    var DOCUMENT_TYPE = domGlobals.Node.DOCUMENT_TYPE_NODE;
    var DOCUMENT_FRAGMENT = domGlobals.Node.DOCUMENT_FRAGMENT_NODE;
    var ELEMENT = domGlobals.Node.ELEMENT_NODE;
    var TEXT = domGlobals.Node.TEXT_NODE;
    var PROCESSING_INSTRUCTION = domGlobals.Node.PROCESSING_INSTRUCTION_NODE;
    var ENTITY_REFERENCE = domGlobals.Node.ENTITY_REFERENCE_NODE;
    var ENTITY = domGlobals.Node.ENTITY_NODE;
    var NOTATION = domGlobals.Node.NOTATION_NODE;

    var ELEMENT$1 = ELEMENT;
    var is = function (element, selector) {
      var dom = element.dom();
      if (dom.nodeType !== ELEMENT$1) {
        return false;
      } else {
        var elem = dom;
        if (elem.matches !== undefined) {
          return elem.matches(selector);
        } else if (elem.msMatchesSelector !== undefined) {
          return elem.msMatchesSelector(selector);
        } else if (elem.webkitMatchesSelector !== undefined) {
          return elem.webkitMatchesSelector(selector);
        } else if (elem.mozMatchesSelector !== undefined) {
          return elem.mozMatchesSelector(selector);
        } else {
          throw new Error('Browser lacks native selectors');
        }
      }
    };

    var eq = function (e1, e2) {
      return e1.dom() === e2.dom();
    };
    var regularContains = function (e1, e2) {
      var d1 = e1.dom();
      var d2 = e2.dom();
      return d1 === d2 ? false : d1.contains(d2);
    };
    var ieContains = function (e1, e2) {
      return Node.documentPositionContainedBy(e1.dom(), e2.dom());
    };
    var browser = PlatformDetection$1.detect().browser;
    var contains$1 = browser.isIE() ? ieContains : regularContains;
    var is$1 = is;

    var parent = function (element) {
      return Option.from(element.dom().parentNode).map(Element.fromDom);
    };
    var children = function (element) {
      return map(element.dom().childNodes, Element.fromDom);
    };
    var child = function (element, index) {
      var cs = element.dom().childNodes;
      return Option.from(cs[index]).map(Element.fromDom);
    };
    var firstChild = function (element) {
      return child(element, 0);
    };
    var lastChild = function (element) {
      return child(element, element.dom().childNodes.length - 1);
    };
    var spot = Immutable('element', 'offset');

    var before = function (marker, element) {
      var parent$1 = parent(marker);
      parent$1.each(function (v) {
        v.dom().insertBefore(element.dom(), marker.dom());
      });
    };
    var append = function (parent, element) {
      parent.dom().appendChild(element.dom());
    };

    var before$1 = function (marker, elements) {
      each(elements, function (x) {
        before(marker, x);
      });
    };
    var append$1 = function (parent, elements) {
      each(elements, function (x) {
        append(parent, x);
      });
    };

    var remove = function (element) {
      var dom = element.dom();
      if (dom.parentNode !== null) {
        dom.parentNode.removeChild(dom);
      }
    };

    var name = function (element) {
      var r = element.dom().nodeName;
      return r.toLowerCase();
    };
    var type = function (element) {
      return element.dom().nodeType;
    };
    var isType$1 = function (t) {
      return function (element) {
        return type(element) === t;
      };
    };
    var isElement = isType$1(ELEMENT);

    var rawSet = function (dom, key, value) {
      if (isString(value) || isBoolean(value) || isNumber(value)) {
        dom.setAttribute(key, value + '');
      } else {
        domGlobals.console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
        throw new Error('Attribute value was not simple');
      }
    };
    var setAll = function (element, attrs) {
      var dom = element.dom();
      each$1(attrs, function (v, k) {
        rawSet(dom, k, v);
      });
    };
    var clone = function (element) {
      return foldl(element.dom().attributes, function (acc, attr) {
        acc[attr.name] = attr.value;
        return acc;
      }, {});
    };

    var isSupported = function (dom) {
      return dom.style !== undefined && isFunction(dom.style.getPropertyValue);
    };

    var internalSet = function (dom, property, value) {
      if (!isString(value)) {
        domGlobals.console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
        throw new Error('CSS value must be a string: ' + value);
      }
      if (isSupported(dom)) {
        dom.style.setProperty(property, value);
      }
    };
    var set = function (element, property, value) {
      var dom = element.dom();
      internalSet(dom, property, value);
    };

    var clone$1 = function (original, isDeep) {
      return Element.fromDom(original.dom().cloneNode(isDeep));
    };
    var deep = function (original) {
      return clone$1(original, true);
    };
    var shallowAs = function (original, tag) {
      var nu = Element.fromTag(tag);
      var attributes = clone(original);
      setAll(nu, attributes);
      return nu;
    };
    var mutate = function (original, tag) {
      var nu = shallowAs(original, tag);
      before(original, nu);
      var children$1 = children(original);
      append$1(nu, children$1);
      remove(original);
      return nu;
    };

    var joinSegment = function (parent, child) {
      append(parent.item, child.list);
    };
    var joinSegments = function (segments) {
      for (var i = 1; i < segments.length; i++) {
        joinSegment(segments[i - 1], segments[i]);
      }
    };
    var appendSegments = function (head$1, tail) {
      liftN([
        last(head$1),
        head(tail)
      ], joinSegment);
    };
    var createSegment = function (scope, listType) {
      var segment = {
        list: Element.fromTag(listType, scope),
        item: Element.fromTag('li', scope)
      };
      append(segment.list, segment.item);
      return segment;
    };
    var createSegments = function (scope, entry, size) {
      var segments = [];
      for (var i = 0; i < size; i++) {
        segments.push(createSegment(scope, entry.listType));
      }
      return segments;
    };
    var populateSegments = function (segments, entry) {
      for (var i = 0; i < segments.length - 1; i++) {
        set(segments[i].item, 'list-style-type', 'none');
      }
      last(segments).each(function (segment) {
        setAll(segment.list, entry.listAttributes);
        setAll(segment.item, entry.itemAttributes);
        append$1(segment.item, entry.content);
      });
    };
    var normalizeSegment = function (segment, entry) {
      if (name(segment.list) !== entry.listType) {
        segment.list = mutate(segment.list, entry.listType);
      }
      setAll(segment.list, entry.listAttributes);
    };
    var createItem = function (scope, attr, content) {
      var item = Element.fromTag('li', scope);
      setAll(item, attr);
      append$1(item, content);
      return item;
    };
    var appendItem = function (segment, item) {
      append(segment.list, item);
      segment.item = item;
    };
    var writeShallow = function (scope, cast, entry) {
      var newCast = cast.slice(0, entry.depth);
      last(newCast).each(function (segment) {
        var item = createItem(scope, entry.itemAttributes, entry.content);
        appendItem(segment, item);
        normalizeSegment(segment, entry);
      });
      return newCast;
    };
    var writeDeep = function (scope, cast, entry) {
      var segments = createSegments(scope, entry, entry.depth - cast.length);
      joinSegments(segments);
      populateSegments(segments, entry);
      appendSegments(cast, segments);
      return cast.concat(segments);
    };
    var composeList = function (scope, entries) {
      var cast = foldl(entries, function (cast, entry) {
        return entry.depth > cast.length ? writeDeep(scope, cast, entry) : writeShallow(scope, cast, entry);
      }, []);
      return head(cast).map(function (segment) {
        return segment.list;
      });
    };

    var isList$1 = function (el) {
      return is$1(el, 'OL,UL');
    };
    var hasFirstChildList = function (el) {
      return firstChild(el).map(isList$1).getOr(false);
    };
    var hasLastChildList = function (el) {
      return lastChild(el).map(isList$1).getOr(false);
    };

    var isIndented = function (entry) {
      return entry.depth > 0;
    };
    var isSelected = function (entry) {
      return entry.isSelected;
    };
    var cloneItemContent = function (li) {
      var children$1 = children(li);
      var content = hasLastChildList(li) ? children$1.slice(0, -1) : children$1;
      return map(content, deep);
    };
    var createEntry = function (li, depth, isSelected) {
      return parent(li).filter(isElement).map(function (list) {
        return {
          depth: depth,
          isSelected: isSelected,
          content: cloneItemContent(li),
          itemAttributes: clone(li),
          listAttributes: clone(list),
          listType: name(list)
        };
      });
    };

    var indentEntry = function (indentation, entry) {
      switch (indentation) {
      case 'Indent':
        entry.depth++;
        break;
      case 'Outdent':
        entry.depth--;
        break;
      case 'Flatten':
        entry.depth = 0;
      }
    };

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var shallow = function (old, nu) {
      return nu;
    };
    var baseMerge = function (merger) {
      return function () {
        var objects = new Array(arguments.length);
        for (var i = 0; i < objects.length; i++) {
          objects[i] = arguments[i];
        }
        if (objects.length === 0) {
          throw new Error('Can\'t merge zero objects');
        }
        var ret = {};
        for (var j = 0; j < objects.length; j++) {
          var curObject = objects[j];
          for (var key in curObject) {
            if (hasOwnProperty.call(curObject, key)) {
              ret[key] = merger(ret[key], curObject[key]);
            }
          }
        }
        return ret;
      };
    };
    var merge = baseMerge(shallow);

    var cloneListProperties = function (target, source) {
      target.listType = source.listType;
      target.listAttributes = merge({}, source.listAttributes);
    };
    var previousSiblingEntry = function (entries, start) {
      var depth = entries[start].depth;
      for (var i = start - 1; i >= 0; i--) {
        if (entries[i].depth === depth) {
          return Option.some(entries[i]);
        }
        if (entries[i].depth < depth) {
          break;
        }
      }
      return Option.none();
    };
    var normalizeEntries = function (entries) {
      each(entries, function (entry, i) {
        previousSiblingEntry(entries, i).each(function (matchingEntry) {
          cloneListProperties(entry, matchingEntry);
        });
      });
    };

    var Cell = function (initial) {
      var value = initial;
      var get = function () {
        return value;
      };
      var set = function (v) {
        value = v;
      };
      var clone = function () {
        return Cell(get());
      };
      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var parseItem = function (depth, itemSelection, selectionState, item) {
      return firstChild(item).filter(isList$1).fold(function () {
        itemSelection.each(function (selection) {
          if (eq(selection.start, item)) {
            selectionState.set(true);
          }
        });
        var currentItemEntry = createEntry(item, depth, selectionState.get());
        itemSelection.each(function (selection) {
          if (eq(selection.end, item)) {
            selectionState.set(false);
          }
        });
        var childListEntries = lastChild(item).filter(isList$1).map(function (list) {
          return parseList(depth, itemSelection, selectionState, list);
        }).getOr([]);
        return currentItemEntry.toArray().concat(childListEntries);
      }, function (list) {
        return parseList(depth, itemSelection, selectionState, list);
      });
    };
    var parseList = function (depth, itemSelection, selectionState, list) {
      return bind(children(list), function (element) {
        var parser = isList$1(element) ? parseList : parseItem;
        var newDepth = depth + 1;
        return parser(newDepth, itemSelection, selectionState, element);
      });
    };
    var parseLists = function (lists, itemSelection) {
      var selectionState = Cell(false);
      var initialDepth = 0;
      return map(lists, function (list) {
        return {
          sourceList: list,
          entries: parseList(initialDepth, itemSelection, selectionState, list)
        };
      });
    };

    var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

    var createTextBlock = function (editor, contentNode) {
      var dom = editor.dom;
      var blockElements = editor.schema.getBlockElements();
      var fragment = dom.createFragment();
      var node, textBlock, blockName, hasContentNode;
      if (editor.settings.forced_root_block) {
        blockName = editor.settings.forced_root_block;
      }
      if (blockName) {
        textBlock = dom.create(blockName);
        if (textBlock.tagName === editor.settings.forced_root_block) {
          dom.setAttribs(textBlock, editor.settings.forced_root_block_attrs);
        }
        if (!NodeType.isBlock(contentNode.firstChild, blockElements)) {
          fragment.appendChild(textBlock);
        }
      }
      if (contentNode) {
        while (node = contentNode.firstChild) {
          var nodeName = node.nodeName;
          if (!hasContentNode && (nodeName !== 'SPAN' || node.getAttribute('data-mce-type') !== 'bookmark')) {
            hasContentNode = true;
          }
          if (NodeType.isBlock(node, blockElements)) {
            fragment.appendChild(node);
            textBlock = null;
          } else {
            if (blockName) {
              if (!textBlock) {
                textBlock = dom.create(blockName);
                fragment.appendChild(textBlock);
              }
              textBlock.appendChild(node);
            } else {
              fragment.appendChild(node);
            }
          }
        }
      }
      if (!editor.settings.forced_root_block) {
        fragment.appendChild(dom.create('br'));
      } else {
        if (!hasContentNode && (!global$8.ie || global$8.ie > 10)) {
          textBlock.appendChild(dom.create('br', { 'data-mce-bogus': '1' }));
        }
      }
      return fragment;
    };

    var outdentedComposer = function (editor, entries) {
      return map(entries, function (entry) {
        var content = fromElements(entry.content);
        return Element.fromDom(createTextBlock(editor, content.dom()));
      });
    };
    var indentedComposer = function (editor, entries) {
      normalizeEntries(entries);
      return composeList(editor.contentDocument, entries).toArray();
    };
    var composeEntries = function (editor, entries) {
      return bind(groupBy(entries, isIndented), function (entries) {
        var groupIsIndented = head(entries).map(isIndented).getOr(false);
        return groupIsIndented ? indentedComposer(editor, entries) : outdentedComposer(editor, entries);
      });
    };
    var indentSelectedEntries = function (entries, indentation) {
      each(filter(entries, isSelected), function (entry) {
        return indentEntry(indentation, entry);
      });
    };
    var getItemSelection = function (editor) {
      var selectedListItems = map(Selection.getSelectedListItems(editor), Element.fromDom);
      return liftN([
        find(selectedListItems, not(hasFirstChildList)),
        find(reverse(selectedListItems), not(hasFirstChildList))
      ], function (start, end) {
        return {
          start: start,
          end: end
        };
      });
    };
    var listsIndentation = function (editor, lists, indentation) {
      var entrySets = parseLists(lists, getItemSelection(editor));
      each(entrySets, function (entrySet) {
        indentSelectedEntries(entrySet.entries, indentation);
        before$1(entrySet.sourceList, composeEntries(editor, entrySet.entries));
        remove(entrySet.sourceList);
      });
    };

    var DOM$1 = global$6.DOM;
    var splitList = function (editor, ul, li) {
      var tmpRng, fragment, bookmarks, node, newBlock;
      var removeAndKeepBookmarks = function (targetNode) {
        global$5.each(bookmarks, function (node) {
          targetNode.parentNode.insertBefore(node, li.parentNode);
        });
        DOM$1.remove(targetNode);
      };
      bookmarks = DOM$1.select('span[data-mce-type="bookmark"]', ul);
      newBlock = createTextBlock(editor, li);
      tmpRng = DOM$1.createRng();
      tmpRng.setStartAfter(li);
      tmpRng.setEndAfter(ul);
      fragment = tmpRng.extractContents();
      for (node = fragment.firstChild; node; node = node.firstChild) {
        if (node.nodeName === 'LI' && editor.dom.isEmpty(node)) {
          DOM$1.remove(node);
          break;
        }
      }
      if (!editor.dom.isEmpty(fragment)) {
        DOM$1.insertAfter(fragment, ul);
      }
      DOM$1.insertAfter(newBlock, ul);
      if (NodeType.isEmpty(editor.dom, li.parentNode)) {
        removeAndKeepBookmarks(li.parentNode);
      }
      DOM$1.remove(li);
      if (NodeType.isEmpty(editor.dom, ul)) {
        DOM$1.remove(ul);
      }
    };
    var SplitList = { splitList: splitList };

    var outdentDlItem = function (editor, item) {
      if (is$1(item, 'dd')) {
        mutate(item, 'dt');
      } else if (is$1(item, 'dt')) {
        parent(item).each(function (dl) {
          return SplitList.splitList(editor, dl.dom(), item.dom());
        });
      }
    };
    var indentDlItem = function (item) {
      if (is$1(item, 'dt')) {
        mutate(item, 'dd');
      }
    };
    var dlIndentation = function (editor, indentation, dlItems) {
      if (indentation === 'Indent') {
        each(dlItems, indentDlItem);
      } else {
        each(dlItems, function (item) {
          return outdentDlItem(editor, item);
        });
      }
    };

    var selectionIndentation = function (editor, indentation) {
      var lists = map(Selection.getSelectedListRoots(editor), Element.fromDom);
      var dlItems = map(Selection.getSelectedDlItems(editor), Element.fromDom);
      var isHandled = false;
      if (lists.length || dlItems.length) {
        var bookmark = editor.selection.getBookmark();
        listsIndentation(editor, lists, indentation);
        dlIndentation(editor, indentation, dlItems);
        editor.selection.moveToBookmark(bookmark);
        editor.selection.setRng(Range.normalizeRange(editor.selection.getRng()));
        editor.nodeChanged();
        isHandled = true;
      }
      return isHandled;
    };
    var indentListSelection = function (editor) {
      return selectionIndentation(editor, 'Indent');
    };
    var outdentListSelection = function (editor) {
      return selectionIndentation(editor, 'Outdent');
    };
    var flattenListSelection = function (editor) {
      return selectionIndentation(editor, 'Flatten');
    };

    var updateListStyle = function (dom, el, detail) {
      var type = detail['list-style-type'] ? detail['list-style-type'] : null;
      dom.setStyle(el, 'list-style-type', type);
    };
    var setAttribs = function (elm, attrs) {
      global$5.each(attrs, function (value, key) {
        elm.setAttribute(key, value);
      });
    };
    var updateListAttrs = function (dom, el, detail) {
      setAttribs(el, detail['list-attributes']);
      global$5.each(dom.select('li', el), function (li) {
        setAttribs(li, detail['list-item-attributes']);
      });
    };
    var updateListWithDetails = function (dom, el, detail) {
      updateListStyle(dom, el, detail);
      updateListAttrs(dom, el, detail);
    };
    var removeStyles = function (dom, element, styles) {
      global$5.each(styles, function (style) {
        var _a;
        return dom.setStyle(element, (_a = {}, _a[style] = '', _a));
      });
    };
    var getEndPointNode = function (editor, rng, start, root) {
      var container, offset;
      container = rng[start ? 'startContainer' : 'endContainer'];
      offset = rng[start ? 'startOffset' : 'endOffset'];
      if (container.nodeType === 1) {
        container = container.childNodes[Math.min(offset, container.childNodes.length - 1)] || container;
      }
      if (!start && NodeType.isBr(container.nextSibling)) {
        container = container.nextSibling;
      }
      while (container.parentNode !== root) {
        if (NodeType.isTextBlock(editor, container)) {
          return container;
        }
        if (/^(TD|TH)$/.test(container.parentNode.nodeName)) {
          return container;
        }
        container = container.parentNode;
      }
      return container;
    };
    var getSelectedTextBlocks = function (editor, rng, root) {
      var textBlocks = [], dom = editor.dom;
      var startNode = getEndPointNode(editor, rng, true, root);
      var endNode = getEndPointNode(editor, rng, false, root);
      var block;
      var siblings = [];
      for (var node = startNode; node; node = node.nextSibling) {
        siblings.push(node);
        if (node === endNode) {
          break;
        }
      }
      global$5.each(siblings, function (node) {
        if (NodeType.isTextBlock(editor, node)) {
          textBlocks.push(node);
          block = null;
          return;
        }
        if (dom.isBlock(node) || NodeType.isBr(node)) {
          if (NodeType.isBr(node)) {
            dom.remove(node);
          }
          block = null;
          return;
        }
        var nextSibling = node.nextSibling;
        if (global$4.isBookmarkNode(node)) {
          if (NodeType.isTextBlock(editor, nextSibling) || !nextSibling && node.parentNode === root) {
            block = null;
            return;
          }
        }
        if (!block) {
          block = dom.create('p');
          node.parentNode.insertBefore(block, node);
          textBlocks.push(block);
        }
        block.appendChild(node);
      });
      return textBlocks;
    };
    var hasCompatibleStyle = function (dom, sib, detail) {
      var sibStyle = dom.getStyle(sib, 'list-style-type');
      var detailStyle = detail ? detail['list-style-type'] : '';
      detailStyle = detailStyle === null ? '' : detailStyle;
      return sibStyle === detailStyle;
    };
    var applyList = function (editor, listName, detail) {
      if (detail === void 0) {
        detail = {};
      }
      var rng = editor.selection.getRng(true);
      var bookmark;
      var listItemName = 'LI';
      var root = Selection.getClosestListRootElm(editor, editor.selection.getStart(true));
      var dom = editor.dom;
      if (dom.getContentEditable(editor.selection.getNode()) === 'false') {
        return;
      }
      listName = listName.toUpperCase();
      if (listName === 'DL') {
        listItemName = 'DT';
      }
      bookmark = Bookmark.createBookmark(rng);
      global$5.each(getSelectedTextBlocks(editor, rng, root), function (block) {
        var listBlock, sibling;
        sibling = block.previousSibling;
        if (sibling && NodeType.isListNode(sibling) && sibling.nodeName === listName && hasCompatibleStyle(dom, sibling, detail)) {
          listBlock = sibling;
          block = dom.rename(block, listItemName);
          sibling.appendChild(block);
        } else {
          listBlock = dom.create(listName);
          block.parentNode.insertBefore(listBlock, block);
          listBlock.appendChild(block);
          block = dom.rename(block, listItemName);
        }
        removeStyles(dom, block, [
          'margin',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'margin-top',
          'padding',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'padding-top'
        ]);
        updateListWithDetails(dom, listBlock, detail);
        mergeWithAdjacentLists(editor.dom, listBlock);
      });
      editor.selection.setRng(Bookmark.resolveBookmark(bookmark));
    };
    var isValidLists = function (list1, list2) {
      return list1 && list2 && NodeType.isListNode(list1) && list1.nodeName === list2.nodeName;
    };
    var hasSameListStyle = function (dom, list1, list2) {
      var targetStyle = dom.getStyle(list1, 'list-style-type', true);
      var style = dom.getStyle(list2, 'list-style-type', true);
      return targetStyle === style;
    };
    var hasSameClasses = function (elm1, elm2) {
      return elm1.className === elm2.className;
    };
    var shouldMerge = function (dom, list1, list2) {
      return isValidLists(list1, list2) && hasSameListStyle(dom, list1, list2) && hasSameClasses(list1, list2);
    };
    var mergeWithAdjacentLists = function (dom, listBlock) {
      var sibling, node;
      sibling = listBlock.nextSibling;
      if (shouldMerge(dom, listBlock, sibling)) {
        while (node = sibling.firstChild) {
          listBlock.appendChild(node);
        }
        dom.remove(sibling);
      }
      sibling = listBlock.previousSibling;
      if (shouldMerge(dom, listBlock, sibling)) {
        while (node = sibling.lastChild) {
          listBlock.insertBefore(node, listBlock.firstChild);
        }
        dom.remove(sibling);
      }
    };
    var updateList = function (dom, list, listName, detail) {
      if (list.nodeName !== listName) {
        var newList = dom.rename(list, listName);
        updateListWithDetails(dom, newList, detail);
      } else {
        updateListWithDetails(dom, list, detail);
      }
    };
    var toggleMultipleLists = function (editor, parentList, lists, listName, detail) {
      if (parentList.nodeName === listName && !hasListStyleDetail(detail)) {
        flattenListSelection(editor);
      } else {
        var bookmark = Bookmark.createBookmark(editor.selection.getRng(true));
        global$5.each([parentList].concat(lists), function (elm) {
          updateList(editor.dom, elm, listName, detail);
        });
        editor.selection.setRng(Bookmark.resolveBookmark(bookmark));
      }
    };
    var hasListStyleDetail = function (detail) {
      return 'list-style-type' in detail;
    };
    var toggleSingleList = function (editor, parentList, listName, detail) {
      if (parentList === editor.getBody()) {
        return;
      }
      if (parentList) {
        if (parentList.nodeName === listName && !hasListStyleDetail(detail)) {
          flattenListSelection(editor);
        } else {
          var bookmark = Bookmark.createBookmark(editor.selection.getRng(true));
          updateListWithDetails(editor.dom, parentList, detail);
          mergeWithAdjacentLists(editor.dom, editor.dom.rename(parentList, listName));
          editor.selection.setRng(Bookmark.resolveBookmark(bookmark));
        }
      } else {
        applyList(editor, listName, detail);
      }
    };
    var toggleList = function (editor, listName, detail) {
      var parentList = Selection.getParentList(editor);
      var selectedSubLists = Selection.getSelectedSubLists(editor);
      detail = detail ? detail : {};
      if (parentList && selectedSubLists.length > 0) {
        toggleMultipleLists(editor, parentList, selectedSubLists, listName, detail);
      } else {
        toggleSingleList(editor, parentList, listName, detail);
      }
    };
    var ToggleList = {
      toggleList: toggleList,
      mergeWithAdjacentLists: mergeWithAdjacentLists
    };

    var DOM$2 = global$6.DOM;
    var normalizeList = function (dom, ul) {
      var sibling;
      var parentNode = ul.parentNode;
      if (parentNode.nodeName === 'LI' && parentNode.firstChild === ul) {
        sibling = parentNode.previousSibling;
        if (sibling && sibling.nodeName === 'LI') {
          sibling.appendChild(ul);
          if (NodeType.isEmpty(dom, parentNode)) {
            DOM$2.remove(parentNode);
          }
        } else {
          DOM$2.setStyle(parentNode, 'listStyleType', 'none');
        }
      }
      if (NodeType.isListNode(parentNode)) {
        sibling = parentNode.previousSibling;
        if (sibling && sibling.nodeName === 'LI') {
          sibling.appendChild(ul);
        }
      }
    };
    var normalizeLists = function (dom, element) {
      global$5.each(global$5.grep(dom.select('ol,ul', element)), function (ul) {
        normalizeList(dom, ul);
      });
    };
    var NormalizeLists = {
      normalizeList: normalizeList,
      normalizeLists: normalizeLists
    };

    var findNextCaretContainer = function (editor, rng, isForward, root) {
      var node = rng.startContainer;
      var offset = rng.startOffset;
      var nonEmptyBlocks, walker;
      if (node.nodeType === 3 && (isForward ? offset < node.data.length : offset > 0)) {
        return node;
      }
      nonEmptyBlocks = editor.schema.getNonEmptyElements();
      if (node.nodeType === 1) {
        node = global$1.getNode(node, offset);
      }
      walker = new global$2(node, root);
      if (isForward) {
        if (NodeType.isBogusBr(editor.dom, node)) {
          walker.next();
        }
      }
      while (node = walker[isForward ? 'next' : 'prev2']()) {
        if (node.nodeName === 'LI' && !node.hasChildNodes()) {
          return node;
        }
        if (nonEmptyBlocks[node.nodeName]) {
          return node;
        }
        if (node.nodeType === 3 && node.data.length > 0) {
          return node;
        }
      }
    };
    var hasOnlyOneBlockChild = function (dom, elm) {
      var childNodes = elm.childNodes;
      return childNodes.length === 1 && !NodeType.isListNode(childNodes[0]) && dom.isBlock(childNodes[0]);
    };
    var unwrapSingleBlockChild = function (dom, elm) {
      if (hasOnlyOneBlockChild(dom, elm)) {
        dom.remove(elm.firstChild, true);
      }
    };
    var moveChildren = function (dom, fromElm, toElm) {
      var node, targetElm;
      targetElm = hasOnlyOneBlockChild(dom, toElm) ? toElm.firstChild : toElm;
      unwrapSingleBlockChild(dom, fromElm);
      if (!NodeType.isEmpty(dom, fromElm, true)) {
        while (node = fromElm.firstChild) {
          targetElm.appendChild(node);
        }
      }
    };
    var mergeLiElements = function (dom, fromElm, toElm) {
      var node, listNode;
      var ul = fromElm.parentNode;
      if (!NodeType.isChildOfBody(dom, fromElm) || !NodeType.isChildOfBody(dom, toElm)) {
        return;
      }
      if (NodeType.isListNode(toElm.lastChild)) {
        listNode = toElm.lastChild;
      }
      if (ul === toElm.lastChild) {
        if (NodeType.isBr(ul.previousSibling)) {
          dom.remove(ul.previousSibling);
        }
      }
      node = toElm.lastChild;
      if (node && NodeType.isBr(node) && fromElm.hasChildNodes()) {
        dom.remove(node);
      }
      if (NodeType.isEmpty(dom, toElm, true)) {
        dom.$(toElm).empty();
      }
      moveChildren(dom, fromElm, toElm);
      if (listNode) {
        toElm.appendChild(listNode);
      }
      var contains = contains$1(Element.fromDom(toElm), Element.fromDom(fromElm));
      var nestedLists = contains ? dom.getParents(fromElm, NodeType.isListNode, toElm) : [];
      dom.remove(fromElm);
      each(nestedLists, function (list) {
        if (NodeType.isEmpty(dom, list) && list !== dom.getRoot()) {
          dom.remove(list);
        }
      });
    };
    var mergeIntoEmptyLi = function (editor, fromLi, toLi) {
      editor.dom.$(toLi).empty();
      mergeLiElements(editor.dom, fromLi, toLi);
      editor.selection.setCursorLocation(toLi);
    };
    var mergeForward = function (editor, rng, fromLi, toLi) {
      var dom = editor.dom;
      if (dom.isEmpty(toLi)) {
        mergeIntoEmptyLi(editor, fromLi, toLi);
      } else {
        var bookmark = Bookmark.createBookmark(rng);
        mergeLiElements(dom, fromLi, toLi);
        editor.selection.setRng(Bookmark.resolveBookmark(bookmark));
      }
    };
    var mergeBackward = function (editor, rng, fromLi, toLi) {
      var bookmark = Bookmark.createBookmark(rng);
      mergeLiElements(editor.dom, fromLi, toLi);
      var resolvedBookmark = Bookmark.resolveBookmark(bookmark);
      editor.selection.setRng(resolvedBookmark);
    };
    var backspaceDeleteFromListToListCaret = function (editor, isForward) {
      var dom = editor.dom, selection = editor.selection;
      var selectionStartElm = selection.getStart();
      var root = Selection.getClosestListRootElm(editor, selectionStartElm);
      var li = dom.getParent(selection.getStart(), 'LI', root);
      var ul, rng, otherLi;
      if (li) {
        ul = li.parentNode;
        if (ul === editor.getBody() && NodeType.isEmpty(dom, ul)) {
          return true;
        }
        rng = Range.normalizeRange(selection.getRng(true));
        otherLi = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
        if (otherLi && otherLi !== li) {
          if (isForward) {
            mergeForward(editor, rng, otherLi, li);
          } else {
            mergeBackward(editor, rng, li, otherLi);
          }
          return true;
        } else if (!otherLi) {
          if (!isForward) {
            flattenListSelection(editor);
            return true;
          }
        }
      }
      return false;
    };
    var removeBlock = function (dom, block, root) {
      var parentBlock = dom.getParent(block.parentNode, dom.isBlock, root);
      dom.remove(block);
      if (parentBlock && dom.isEmpty(parentBlock)) {
        dom.remove(parentBlock);
      }
    };
    var backspaceDeleteIntoListCaret = function (editor, isForward) {
      var dom = editor.dom;
      var selectionStartElm = editor.selection.getStart();
      var root = Selection.getClosestListRootElm(editor, selectionStartElm);
      var block = dom.getParent(selectionStartElm, dom.isBlock, root);
      if (block && dom.isEmpty(block)) {
        var rng = Range.normalizeRange(editor.selection.getRng(true));
        var otherLi_1 = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
        if (otherLi_1) {
          editor.undoManager.transact(function () {
            removeBlock(dom, block, root);
            ToggleList.mergeWithAdjacentLists(dom, otherLi_1.parentNode);
            editor.selection.select(otherLi_1, true);
            editor.selection.collapse(isForward);
          });
          return true;
        }
      }
      return false;
    };
    var backspaceDeleteCaret = function (editor, isForward) {
      return backspaceDeleteFromListToListCaret(editor, isForward) || backspaceDeleteIntoListCaret(editor, isForward);
    };
    var backspaceDeleteRange = function (editor) {
      var selectionStartElm = editor.selection.getStart();
      var root = Selection.getClosestListRootElm(editor, selectionStartElm);
      var startListParent = editor.dom.getParent(selectionStartElm, 'LI,DT,DD', root);
      if (startListParent || Selection.getSelectedListItems(editor).length > 0) {
        editor.undoManager.transact(function () {
          editor.execCommand('Delete');
          NormalizeLists.normalizeLists(editor.dom, editor.getBody());
        });
        return true;
      }
      return false;
    };
    var backspaceDelete = function (editor, isForward) {
      return editor.selection.isCollapsed() ? backspaceDeleteCaret(editor, isForward) : backspaceDeleteRange(editor);
    };
    var setup = function (editor) {
      editor.on('keydown', function (e) {
        if (e.keyCode === global$3.BACKSPACE) {
          if (backspaceDelete(editor, false)) {
            e.preventDefault();
          }
        } else if (e.keyCode === global$3.DELETE) {
          if (backspaceDelete(editor, true)) {
            e.preventDefault();
          }
        }
      });
    };
    var Delete = {
      setup: setup,
      backspaceDelete: backspaceDelete
    };

    var get = function (editor) {
      return {
        backspaceDelete: function (isForward) {
          Delete.backspaceDelete(editor, isForward);
        }
      };
    };
    var Api = { get: get };

    var queryListCommandState = function (editor, listName) {
      return function () {
        var parentList = editor.dom.getParent(editor.selection.getStart(), 'UL,OL,DL');
        return parentList && parentList.nodeName === listName;
      };
    };
    var register = function (editor) {
      editor.on('BeforeExecCommand', function (e) {
        var cmd = e.command.toLowerCase();
        if (cmd === 'indent') {
          indentListSelection(editor);
        } else if (cmd === 'outdent') {
          outdentListSelection(editor);
        }
      });
      editor.addCommand('InsertUnorderedList', function (ui, detail) {
        ToggleList.toggleList(editor, 'UL', detail);
      });
      editor.addCommand('InsertOrderedList', function (ui, detail) {
        ToggleList.toggleList(editor, 'OL', detail);
      });
      editor.addCommand('InsertDefinitionList', function (ui, detail) {
        ToggleList.toggleList(editor, 'DL', detail);
      });
      editor.addCommand('RemoveList', function () {
        flattenListSelection(editor);
      });
      editor.addQueryStateHandler('InsertUnorderedList', queryListCommandState(editor, 'UL'));
      editor.addQueryStateHandler('InsertOrderedList', queryListCommandState(editor, 'OL'));
      editor.addQueryStateHandler('InsertDefinitionList', queryListCommandState(editor, 'DL'));
    };
    var Commands = { register: register };

    var shouldIndentOnTab = function (editor) {
      return editor.getParam('lists_indent_on_tab', true);
    };
    var Settings = { shouldIndentOnTab: shouldIndentOnTab };

    var setupTabKey = function (editor) {
      editor.on('keydown', function (e) {
        if (e.keyCode !== global$3.TAB || global$3.metaKeyPressed(e)) {
          return;
        }
        editor.undoManager.transact(function () {
          if (e.shiftKey ? outdentListSelection(editor) : indentListSelection(editor)) {
            e.preventDefault();
          }
        });
      });
    };
    var setup$1 = function (editor) {
      if (Settings.shouldIndentOnTab(editor)) {
        setupTabKey(editor);
      }
      Delete.setup(editor);
    };
    var Keyboard = { setup: setup$1 };

    var findIndex = function (list, predicate) {
      for (var index = 0; index < list.length; index++) {
        var element = list[index];
        if (predicate(element)) {
          return index;
        }
      }
      return -1;
    };
    var listState = function (editor, listName) {
      return function (e) {
        var ctrl = e.control;
        editor.on('NodeChange', function (e) {
          var tableCellIndex = findIndex(e.parents, NodeType.isTableCellNode);
          var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
          var lists = global$5.grep(parents, NodeType.isListNode);
          ctrl.active(lists.length > 0 && lists[0].nodeName === listName);
        });
      };
    };
    var register$1 = function (editor) {
      var hasPlugin = function (editor, plugin) {
        var plugins = editor.settings.plugins ? editor.settings.plugins : '';
        return global$5.inArray(plugins.split(/[ ,]/), plugin) !== -1;
      };
      if (!hasPlugin(editor, 'advlist')) {
        editor.addButton('numlist', {
          active: false,
          title: 'Numbered list',
          cmd: 'InsertOrderedList',
          onPostRender: listState(editor, 'OL')
        });
        editor.addButton('bullist', {
          active: false,
          title: 'Bullet list',
          cmd: 'InsertUnorderedList',
          onPostRender: listState(editor, 'UL')
        });
      }
      editor.addButton('indent', {
        icon: 'indent',
        title: 'Increase indent',
        cmd: 'Indent'
      });
    };
    var Buttons = { register: register$1 };

    global.add('lists', function (editor) {
      Keyboard.setup(editor);
      Buttons.register(editor);
      Commands.register(editor);
      return Api.get(editor);
    });
    function Plugin () {
    }

    return Plugin;

}(window));
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/paste/plugin.js":
/*!******************************************************!*\
  !*** ./node_modules/tinymce/plugins/paste/plugin.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var paste = (function (domGlobals) {
    'use strict';

    var Cell = function (initial) {
      var value = initial;
      var get = function () {
        return value;
      };
      var set = function (v) {
        value = v;
      };
      var clone = function () {
        return Cell(get());
      };
      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var hasProPlugin = function (editor) {
      if (/(^|[ ,])powerpaste([, ]|$)/.test(editor.settings.plugins) && global$1.get('powerpaste')) {
        if (typeof domGlobals.window.console !== 'undefined' && domGlobals.window.console.log) {
          domGlobals.window.console.log('PowerPaste is incompatible with Paste plugin! Remove \'paste\' from the \'plugins\' option.');
        }
        return true;
      } else {
        return false;
      }
    };
    var DetectProPlugin = { hasProPlugin: hasProPlugin };

    var get = function (clipboard, quirks) {
      return {
        clipboard: clipboard,
        quirks: quirks
      };
    };
    var Api = { get: get };

    var firePastePreProcess = function (editor, html, internal, isWordHtml) {
      return editor.fire('PastePreProcess', {
        content: html,
        internal: internal,
        wordContent: isWordHtml
      });
    };
    var firePastePostProcess = function (editor, node, internal, isWordHtml) {
      return editor.fire('PastePostProcess', {
        node: node,
        internal: internal,
        wordContent: isWordHtml
      });
    };
    var firePastePlainTextToggle = function (editor, state) {
      return editor.fire('PastePlainTextToggle', { state: state });
    };
    var firePaste = function (editor, ieFake) {
      return editor.fire('paste', { ieFake: ieFake });
    };
    var Events = {
      firePastePreProcess: firePastePreProcess,
      firePastePostProcess: firePastePostProcess,
      firePastePlainTextToggle: firePastePlainTextToggle,
      firePaste: firePaste
    };

    var shouldPlainTextInform = function (editor) {
      return editor.getParam('paste_plaintext_inform', true);
    };
    var shouldBlockDrop = function (editor) {
      return editor.getParam('paste_block_drop', false);
    };
    var shouldPasteDataImages = function (editor) {
      return editor.getParam('paste_data_images', false);
    };
    var shouldFilterDrop = function (editor) {
      return editor.getParam('paste_filter_drop', true);
    };
    var getPreProcess = function (editor) {
      return editor.getParam('paste_preprocess');
    };
    var getPostProcess = function (editor) {
      return editor.getParam('paste_postprocess');
    };
    var getWebkitStyles = function (editor) {
      return editor.getParam('paste_webkit_styles');
    };
    var shouldRemoveWebKitStyles = function (editor) {
      return editor.getParam('paste_remove_styles_if_webkit', true);
    };
    var shouldMergeFormats = function (editor) {
      return editor.getParam('paste_merge_formats', true);
    };
    var isSmartPasteEnabled = function (editor) {
      return editor.getParam('smart_paste', true);
    };
    var isPasteAsTextEnabled = function (editor) {
      return editor.getParam('paste_as_text', false);
    };
    var getRetainStyleProps = function (editor) {
      return editor.getParam('paste_retain_style_properties');
    };
    var getWordValidElements = function (editor) {
      var defaultValidElements = '-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,' + '-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,' + 'td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody';
      return editor.getParam('paste_word_valid_elements', defaultValidElements);
    };
    var shouldConvertWordFakeLists = function (editor) {
      return editor.getParam('paste_convert_word_fake_lists', true);
    };
    var shouldUseDefaultFilters = function (editor) {
      return editor.getParam('paste_enable_default_filters', true);
    };
    var Settings = {
      shouldPlainTextInform: shouldPlainTextInform,
      shouldBlockDrop: shouldBlockDrop,
      shouldPasteDataImages: shouldPasteDataImages,
      shouldFilterDrop: shouldFilterDrop,
      getPreProcess: getPreProcess,
      getPostProcess: getPostProcess,
      getWebkitStyles: getWebkitStyles,
      shouldRemoveWebKitStyles: shouldRemoveWebKitStyles,
      shouldMergeFormats: shouldMergeFormats,
      isSmartPasteEnabled: isSmartPasteEnabled,
      isPasteAsTextEnabled: isPasteAsTextEnabled,
      getRetainStyleProps: getRetainStyleProps,
      getWordValidElements: getWordValidElements,
      shouldConvertWordFakeLists: shouldConvertWordFakeLists,
      shouldUseDefaultFilters: shouldUseDefaultFilters
    };

    var shouldInformUserAboutPlainText = function (editor, userIsInformedState) {
      return userIsInformedState.get() === false && Settings.shouldPlainTextInform(editor);
    };
    var displayNotification = function (editor, message) {
      editor.notificationManager.open({
        text: editor.translate(message),
        type: 'info'
      });
    };
    var togglePlainTextPaste = function (editor, clipboard, userIsInformedState) {
      if (clipboard.pasteFormat.get() === 'text') {
        clipboard.pasteFormat.set('html');
        Events.firePastePlainTextToggle(editor, false);
      } else {
        clipboard.pasteFormat.set('text');
        Events.firePastePlainTextToggle(editor, true);
        if (shouldInformUserAboutPlainText(editor, userIsInformedState)) {
          displayNotification(editor, 'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.');
          userIsInformedState.set(true);
        }
      }
      editor.focus();
    };
    var Actions = { togglePlainTextPaste: togglePlainTextPaste };

    var register = function (editor, clipboard, userIsInformedState) {
      editor.addCommand('mceTogglePlainTextPaste', function () {
        Actions.togglePlainTextPaste(editor, clipboard, userIsInformedState);
      });
      editor.addCommand('mceInsertClipboardContent', function (ui, value) {
        if (value.content) {
          clipboard.pasteHtml(value.content, value.internal);
        }
        if (value.text) {
          clipboard.pasteText(value.text);
        }
      });
    };
    var Commands = { register: register };

    var global$2 = tinymce.util.Tools.resolve('tinymce.Env');

    var global$3 = tinymce.util.Tools.resolve('tinymce.util.Delay');

    var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var global$5 = tinymce.util.Tools.resolve('tinymce.util.VK');

    var internalMimeType = 'x-tinymce/html';
    var internalMark = '<!-- ' + internalMimeType + ' -->';
    var mark = function (html) {
      return internalMark + html;
    };
    var unmark = function (html) {
      return html.replace(internalMark, '');
    };
    var isMarked = function (html) {
      return html.indexOf(internalMark) !== -1;
    };
    var InternalHtml = {
      mark: mark,
      unmark: unmark,
      isMarked: isMarked,
      internalHtmlMime: function () {
        return internalMimeType;
      }
    };

    var global$6 = tinymce.util.Tools.resolve('tinymce.html.Entities');

    var isPlainText = function (text) {
      return !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(text);
    };
    var toBRs = function (text) {
      return text.replace(/\r?\n/g, '<br>');
    };
    var openContainer = function (rootTag, rootAttrs) {
      var key;
      var attrs = [];
      var tag = '<' + rootTag;
      if (typeof rootAttrs === 'object') {
        for (key in rootAttrs) {
          if (rootAttrs.hasOwnProperty(key)) {
            attrs.push(key + '="' + global$6.encodeAllRaw(rootAttrs[key]) + '"');
          }
        }
        if (attrs.length) {
          tag += ' ' + attrs.join(' ');
        }
      }
      return tag + '>';
    };
    var toBlockElements = function (text, rootTag, rootAttrs) {
      var blocks = text.split(/\n\n/);
      var tagOpen = openContainer(rootTag, rootAttrs);
      var tagClose = '</' + rootTag + '>';
      var paragraphs = global$4.map(blocks, function (p) {
        return p.split(/\n/).join('<br />');
      });
      var stitch = function (p) {
        return tagOpen + p + tagClose;
      };
      return paragraphs.length === 1 ? paragraphs[0] : global$4.map(paragraphs, stitch).join('');
    };
    var convert = function (text, rootTag, rootAttrs) {
      return rootTag ? toBlockElements(text, rootTag, rootAttrs) : toBRs(text);
    };
    var Newlines = {
      isPlainText: isPlainText,
      convert: convert,
      toBRs: toBRs,
      toBlockElements: toBlockElements
    };

    var global$7 = tinymce.util.Tools.resolve('tinymce.html.DomParser');

    var global$8 = tinymce.util.Tools.resolve('tinymce.html.Node');

    var global$9 = tinymce.util.Tools.resolve('tinymce.html.Schema');

    var global$a = tinymce.util.Tools.resolve('tinymce.html.Serializer');

    function filter(content, items) {
      global$4.each(items, function (v) {
        if (v.constructor === RegExp) {
          content = content.replace(v, '');
        } else {
          content = content.replace(v[0], v[1]);
        }
      });
      return content;
    }
    function innerText(html) {
      var schema = global$9();
      var domParser = global$7({}, schema);
      var text = '';
      var shortEndedElements = schema.getShortEndedElements();
      var ignoreElements = global$4.makeMap('script noscript style textarea video audio iframe object', ' ');
      var blockElements = schema.getBlockElements();
      function walk(node) {
        var name = node.name, currentNode = node;
        if (name === 'br') {
          text += '\n';
          return;
        }
        if (name === 'wbr') {
          return;
        }
        if (shortEndedElements[name]) {
          text += ' ';
        }
        if (ignoreElements[name]) {
          text += ' ';
          return;
        }
        if (node.type === 3) {
          text += node.value;
        }
        if (!node.shortEnded) {
          if (node = node.firstChild) {
            do {
              walk(node);
            } while (node = node.next);
          }
        }
        if (blockElements[name] && currentNode.next) {
          text += '\n';
          if (name === 'p') {
            text += '\n';
          }
        }
      }
      html = filter(html, [/<!\[[^\]]+\]>/g]);
      walk(domParser.parse(html));
      return text;
    }
    function trimHtml(html) {
      function trimSpaces(all, s1, s2) {
        if (!s1 && !s2) {
          return ' ';
        }
        return '\xA0';
      }
      html = filter(html, [
        /^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/ig,
        /<!--StartFragment-->|<!--EndFragment-->/g,
        [
          /( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,
          trimSpaces
        ],
        /<br class="Apple-interchange-newline">/g,
        /<br>$/i
      ]);
      return html;
    }
    function createIdGenerator(prefix) {
      var count = 0;
      return function () {
        return prefix + count++;
      };
    }
    var isMsEdge = function () {
      return domGlobals.navigator.userAgent.indexOf(' Edge/') !== -1;
    };
    var Utils = {
      filter: filter,
      innerText: innerText,
      trimHtml: trimHtml,
      createIdGenerator: createIdGenerator,
      isMsEdge: isMsEdge
    };

    function isWordContent(content) {
      return /<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(content) || /class="OutlineElement/.test(content) || /id="?docs\-internal\-guid\-/.test(content);
    }
    function isNumericList(text) {
      var found, patterns;
      patterns = [
        /^[IVXLMCD]{1,2}\.[ \u00a0]/,
        /^[ivxlmcd]{1,2}\.[ \u00a0]/,
        /^[a-z]{1,2}[\.\)][ \u00a0]/,
        /^[A-Z]{1,2}[\.\)][ \u00a0]/,
        /^[0-9]+\.[ \u00a0]/,
        /^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,
        /^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/
      ];
      text = text.replace(/^[\u00a0 ]+/, '');
      global$4.each(patterns, function (pattern) {
        if (pattern.test(text)) {
          found = true;
          return false;
        }
      });
      return found;
    }
    function isBulletList(text) {
      return /^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(text);
    }
    function convertFakeListsToProperLists(node) {
      var currentListNode, prevListNode, lastLevel = 1;
      function getText(node) {
        var txt = '';
        if (node.type === 3) {
          return node.value;
        }
        if (node = node.firstChild) {
          do {
            txt += getText(node);
          } while (node = node.next);
        }
        return txt;
      }
      function trimListStart(node, regExp) {
        if (node.type === 3) {
          if (regExp.test(node.value)) {
            node.value = node.value.replace(regExp, '');
            return false;
          }
        }
        if (node = node.firstChild) {
          do {
            if (!trimListStart(node, regExp)) {
              return false;
            }
          } while (node = node.next);
        }
        return true;
      }
      function removeIgnoredNodes(node) {
        if (node._listIgnore) {
          node.remove();
          return;
        }
        if (node = node.firstChild) {
          do {
            removeIgnoredNodes(node);
          } while (node = node.next);
        }
      }
      function convertParagraphToLi(paragraphNode, listName, start) {
        var level = paragraphNode._listLevel || lastLevel;
        if (level !== lastLevel) {
          if (level < lastLevel) {
            if (currentListNode) {
              currentListNode = currentListNode.parent.parent;
            }
          } else {
            prevListNode = currentListNode;
            currentListNode = null;
          }
        }
        if (!currentListNode || currentListNode.name !== listName) {
          prevListNode = prevListNode || currentListNode;
          currentListNode = new global$8(listName, 1);
          if (start > 1) {
            currentListNode.attr('start', '' + start);
          }
          paragraphNode.wrap(currentListNode);
        } else {
          currentListNode.append(paragraphNode);
        }
        paragraphNode.name = 'li';
        if (level > lastLevel && prevListNode) {
          prevListNode.lastChild.append(currentListNode);
        }
        lastLevel = level;
        removeIgnoredNodes(paragraphNode);
        trimListStart(paragraphNode, /^\u00a0+/);
        trimListStart(paragraphNode, /^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/);
        trimListStart(paragraphNode, /^\u00a0+/);
      }
      var elements = [];
      var child = node.firstChild;
      while (typeof child !== 'undefined' && child !== null) {
        elements.push(child);
        child = child.walk();
        if (child !== null) {
          while (typeof child !== 'undefined' && child.parent !== node) {
            child = child.walk();
          }
        }
      }
      for (var i = 0; i < elements.length; i++) {
        node = elements[i];
        if (node.name === 'p' && node.firstChild) {
          var nodeText = getText(node);
          if (isBulletList(nodeText)) {
            convertParagraphToLi(node, 'ul');
            continue;
          }
          if (isNumericList(nodeText)) {
            var matches = /([0-9]+)\./.exec(nodeText);
            var start = 1;
            if (matches) {
              start = parseInt(matches[1], 10);
            }
            convertParagraphToLi(node, 'ol', start);
            continue;
          }
          if (node._listLevel) {
            convertParagraphToLi(node, 'ul', 1);
            continue;
          }
          currentListNode = null;
        } else {
          prevListNode = currentListNode;
          currentListNode = null;
        }
      }
    }
    function filterStyles(editor, validStyles, node, styleValue) {
      var outputStyles = {}, matches;
      var styles = editor.dom.parseStyle(styleValue);
      global$4.each(styles, function (value, name) {
        switch (name) {
        case 'mso-list':
          matches = /\w+ \w+([0-9]+)/i.exec(styleValue);
          if (matches) {
            node._listLevel = parseInt(matches[1], 10);
          }
          if (/Ignore/i.test(value) && node.firstChild) {
            node._listIgnore = true;
            node.firstChild._listIgnore = true;
          }
          break;
        case 'horiz-align':
          name = 'text-align';
          break;
        case 'vert-align':
          name = 'vertical-align';
          break;
        case 'font-color':
        case 'mso-foreground':
          name = 'color';
          break;
        case 'mso-background':
        case 'mso-highlight':
          name = 'background';
          break;
        case 'font-weight':
        case 'font-style':
          if (value !== 'normal') {
            outputStyles[name] = value;
          }
          return;
        case 'mso-element':
          if (/^(comment|comment-list)$/i.test(value)) {
            node.remove();
            return;
          }
          break;
        }
        if (name.indexOf('mso-comment') === 0) {
          node.remove();
          return;
        }
        if (name.indexOf('mso-') === 0) {
          return;
        }
        if (Settings.getRetainStyleProps(editor) === 'all' || validStyles && validStyles[name]) {
          outputStyles[name] = value;
        }
      });
      if (/(bold)/i.test(outputStyles['font-weight'])) {
        delete outputStyles['font-weight'];
        node.wrap(new global$8('b', 1));
      }
      if (/(italic)/i.test(outputStyles['font-style'])) {
        delete outputStyles['font-style'];
        node.wrap(new global$8('i', 1));
      }
      outputStyles = editor.dom.serializeStyle(outputStyles, node.name);
      if (outputStyles) {
        return outputStyles;
      }
      return null;
    }
    var filterWordContent = function (editor, content) {
      var retainStyleProperties, validStyles;
      retainStyleProperties = Settings.getRetainStyleProps(editor);
      if (retainStyleProperties) {
        validStyles = global$4.makeMap(retainStyleProperties.split(/[, ]/));
      }
      content = Utils.filter(content, [
        /<br class="?Apple-interchange-newline"?>/gi,
        /<b[^>]+id="?docs-internal-[^>]*>/gi,
        /<!--[\s\S]+?-->/gi,
        /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,
        [
          /<(\/?)s>/gi,
          '<$1strike>'
        ],
        [
          /&nbsp;/gi,
          '\xA0'
        ],
        [
          /<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,
          function (str, spaces) {
            return spaces.length > 0 ? spaces.replace(/./, ' ').slice(Math.floor(spaces.length / 2)).split('').join('\xA0') : '';
          }
        ]
      ]);
      var validElements = Settings.getWordValidElements(editor);
      var schema = global$9({
        valid_elements: validElements,
        valid_children: '-li[p]'
      });
      global$4.each(schema.elements, function (rule) {
        if (!rule.attributes.class) {
          rule.attributes.class = {};
          rule.attributesOrder.push('class');
        }
        if (!rule.attributes.style) {
          rule.attributes.style = {};
          rule.attributesOrder.push('style');
        }
      });
      var domParser = global$7({}, schema);
      domParser.addAttributeFilter('style', function (nodes) {
        var i = nodes.length, node;
        while (i--) {
          node = nodes[i];
          node.attr('style', filterStyles(editor, validStyles, node, node.attr('style')));
          if (node.name === 'span' && node.parent && !node.attributes.length) {
            node.unwrap();
          }
        }
      });
      domParser.addAttributeFilter('class', function (nodes) {
        var i = nodes.length, node, className;
        while (i--) {
          node = nodes[i];
          className = node.attr('class');
          if (/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(className)) {
            node.remove();
          }
          node.attr('class', null);
        }
      });
      domParser.addNodeFilter('del', function (nodes) {
        var i = nodes.length;
        while (i--) {
          nodes[i].remove();
        }
      });
      domParser.addNodeFilter('a', function (nodes) {
        var i = nodes.length, node, href, name;
        while (i--) {
          node = nodes[i];
          href = node.attr('href');
          name = node.attr('name');
          if (href && href.indexOf('#_msocom_') !== -1) {
            node.remove();
            continue;
          }
          if (href && href.indexOf('file://') === 0) {
            href = href.split('#')[1];
            if (href) {
              href = '#' + href;
            }
          }
          if (!href && !name) {
            node.unwrap();
          } else {
            if (name && !/^_?(?:toc|edn|ftn)/i.test(name)) {
              node.unwrap();
              continue;
            }
            node.attr({
              href: href,
              name: name
            });
          }
        }
      });
      var rootNode = domParser.parse(content);
      if (Settings.shouldConvertWordFakeLists(editor)) {
        convertFakeListsToProperLists(rootNode);
      }
      content = global$a({ validate: editor.settings.validate }, schema).serialize(rootNode);
      return content;
    };
    var preProcess = function (editor, content) {
      return Settings.shouldUseDefaultFilters(editor) ? filterWordContent(editor, content) : content;
    };
    var WordFilter = {
      preProcess: preProcess,
      isWordContent: isWordContent
    };

    var processResult = function (content, cancelled) {
      return {
        content: content,
        cancelled: cancelled
      };
    };
    var postProcessFilter = function (editor, html, internal, isWordHtml) {
      var tempBody = editor.dom.create('div', { style: 'display:none' }, html);
      var postProcessArgs = Events.firePastePostProcess(editor, tempBody, internal, isWordHtml);
      return processResult(postProcessArgs.node.innerHTML, postProcessArgs.isDefaultPrevented());
    };
    var filterContent = function (editor, content, internal, isWordHtml) {
      var preProcessArgs = Events.firePastePreProcess(editor, content, internal, isWordHtml);
      if (editor.hasEventListeners('PastePostProcess') && !preProcessArgs.isDefaultPrevented()) {
        return postProcessFilter(editor, preProcessArgs.content, internal, isWordHtml);
      } else {
        return processResult(preProcessArgs.content, preProcessArgs.isDefaultPrevented());
      }
    };
    var process = function (editor, html, internal) {
      var isWordHtml = WordFilter.isWordContent(html);
      var content = isWordHtml ? WordFilter.preProcess(editor, html) : html;
      return filterContent(editor, content, internal, isWordHtml);
    };
    var ProcessFilters = { process: process };

    var removeMeta = function (editor, html) {
      var body = editor.dom.create('body', {}, html);
      global$4.each(body.querySelectorAll('meta'), function (elm) {
        return elm.parentNode.removeChild(elm);
      });
      return body.innerHTML;
    };
    var pasteHtml = function (editor, html) {
      editor.insertContent(removeMeta(editor, html), {
        merge: Settings.shouldMergeFormats(editor),
        paste: true
      });
      return true;
    };
    var isAbsoluteUrl = function (url) {
      return /^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(url);
    };
    var isImageUrl = function (url) {
      return isAbsoluteUrl(url) && /.(gif|jpe?g|png)$/.test(url);
    };
    var createImage = function (editor, url, pasteHtmlFn) {
      editor.undoManager.extra(function () {
        pasteHtmlFn(editor, url);
      }, function () {
        editor.insertContent('<img src="' + url + '">');
      });
      return true;
    };
    var createLink = function (editor, url, pasteHtmlFn) {
      editor.undoManager.extra(function () {
        pasteHtmlFn(editor, url);
      }, function () {
        editor.execCommand('mceInsertLink', false, url);
      });
      return true;
    };
    var linkSelection = function (editor, html, pasteHtmlFn) {
      return editor.selection.isCollapsed() === false && isAbsoluteUrl(html) ? createLink(editor, html, pasteHtmlFn) : false;
    };
    var insertImage = function (editor, html, pasteHtmlFn) {
      return isImageUrl(html) ? createImage(editor, html, pasteHtmlFn) : false;
    };
    var smartInsertContent = function (editor, html) {
      global$4.each([
        linkSelection,
        insertImage,
        pasteHtml
      ], function (action) {
        return action(editor, html, pasteHtml) !== true;
      });
    };
    var insertContent = function (editor, html) {
      if (Settings.isSmartPasteEnabled(editor) === false) {
        pasteHtml(editor, html);
      } else {
        smartInsertContent(editor, html);
      }
    };
    var SmartPaste = {
      isImageUrl: isImageUrl,
      isAbsoluteUrl: isAbsoluteUrl,
      insertContent: insertContent
    };

    var constant = function (value) {
      return function () {
        return value;
      };
    };
    function curry(fn) {
      var initialArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        initialArgs[_i - 1] = arguments[_i];
      }
      return function () {
        var restArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          restArgs[_i] = arguments[_i];
        }
        var all = initialArgs.concat(restArgs);
        return fn.apply(null, all);
      };
    }
    var never = constant(false);
    var always = constant(true);

    var never$1 = never;
    var always$1 = always;
    var none = function () {
      return NONE;
    };
    var NONE = function () {
      var eq = function (o) {
        return o.isNone();
      };
      var call = function (thunk) {
        return thunk();
      };
      var id = function (n) {
        return n;
      };
      var noop = function () {
      };
      var nul = function () {
        return null;
      };
      var undef = function () {
        return undefined;
      };
      var me = {
        fold: function (n, s) {
          return n();
        },
        is: never$1,
        isSome: never$1,
        isNone: always$1,
        getOr: id,
        getOrThunk: call,
        getOrDie: function (msg) {
          throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: none,
        ap: none,
        each: noop,
        bind: none,
        flatten: none,
        exists: never$1,
        forall: always$1,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () {
          return [];
        },
        toString: constant('none()')
      };
      if (Object.freeze) {
        Object.freeze(me);
      }
      return me;
    }();
    var some = function (a) {
      var constant_a = function () {
        return a;
      };
      var self = function () {
        return me;
      };
      var map = function (f) {
        return some(f(a));
      };
      var bind = function (f) {
        return f(a);
      };
      var me = {
        fold: function (n, s) {
          return s(a);
        },
        is: function (v) {
          return a === v;
        },
        isSome: always$1,
        isNone: never$1,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
          return optfab.fold(none, function (fab) {
            return some(fab(a));
          });
        },
        each: function (f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
          return f(a) ? me : NONE;
        },
        equals: function (o) {
          return o.is(a);
        },
        equals_: function (o, elementEq) {
          return o.fold(never$1, function (b) {
            return elementEq(a, b);
          });
        },
        toArray: function () {
          return [a];
        },
        toString: function () {
          return 'some(' + a + ')';
        }
      };
      return me;
    };
    var from = function (value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: none,
      from: from
    };

    var typeOf = function (x) {
      if (x === null) {
        return 'null';
      }
      var t = typeof x;
      if (t === 'object' && (Array.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'Array')) {
        return 'array';
      }
      if (t === 'object' && (String.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'String')) {
        return 'string';
      }
      return t;
    };
    var isType = function (type) {
      return function (value) {
        return typeOf(value) === type;
      };
    };
    var isFunction = isType('function');

    var slice = Array.prototype.slice;
    var map = function (xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var each = function (xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var filter$1 = function (xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var from$1 = isFunction(Array.from) ? Array.from : function (x) {
      return slice.call(x);
    };

    var exports$1 = {}, module = { exports: exports$1 };
    (function (define, exports, module, require) {
      (function (f) {
        if (typeof exports === 'object' && typeof module !== 'undefined') {
          module.exports = f();
        } else if (typeof define === 'function' && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== 'undefined') {
            g = window;
          } else if (typeof global !== 'undefined') {
            g = global;
          } else if (typeof self !== 'undefined') {
            g = self;
          } else {
            g = this;
          }
          g.EphoxContactWrapper = f();
        }
      }(function () {
        return function () {
          function r(e, n, t) {
            function o(i, f) {
              if (!n[i]) {
                if (!e[i]) {
                  var c = 'function' == typeof require && require;
                  if (!f && c)
                    return c(i, !0);
                  if (u)
                    return u(i, !0);
                  var a = new Error('Cannot find module \'' + i + '\'');
                  throw a.code = 'MODULE_NOT_FOUND', a;
                }
                var p = n[i] = { exports: {} };
                e[i][0].call(p.exports, function (r) {
                  var n = e[i][1][r];
                  return o(n || r);
                }, p, p.exports, r, e, n, t);
              }
              return n[i].exports;
            }
            for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++)
              o(t[i]);
            return o;
          }
          return r;
        }()({
          1: [
            function (require, module, exports) {
              var process = module.exports = {};
              var cachedSetTimeout;
              var cachedClearTimeout;
              function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
              }
              function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
              }
              (function () {
                try {
                  if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                  } else {
                    cachedSetTimeout = defaultSetTimout;
                  }
                } catch (e) {
                  cachedSetTimeout = defaultSetTimout;
                }
                try {
                  if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                  } else {
                    cachedClearTimeout = defaultClearTimeout;
                  }
                } catch (e) {
                  cachedClearTimeout = defaultClearTimeout;
                }
              }());
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                  cachedSetTimeout = setTimeout;
                  return setTimeout(fun, 0);
                }
                try {
                  return cachedSetTimeout(fun, 0);
                } catch (e) {
                  try {
                    return cachedSetTimeout.call(null, fun, 0);
                  } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                  }
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                  cachedClearTimeout = clearTimeout;
                  return clearTimeout(marker);
                }
                try {
                  return cachedClearTimeout(marker);
                } catch (e) {
                  try {
                    return cachedClearTimeout.call(null, marker);
                  } catch (e) {
                    return cachedClearTimeout.call(this, marker);
                  }
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;
              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }
              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }
              process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function () {
                this.fun.apply(null, this.array);
              };
              process.title = 'browser';
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = '';
              process.versions = {};
              function noop() {
              }
              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;
              process.prependListener = noop;
              process.prependOnceListener = noop;
              process.listeners = function (name) {
                return [];
              };
              process.binding = function (name) {
                throw new Error('process.binding is not supported');
              };
              process.cwd = function () {
                return '/';
              };
              process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
              };
              process.umask = function () {
                return 0;
              };
            },
            {}
          ],
          2: [
            function (require, module, exports) {
              (function (setImmediate) {
                (function (root) {
                  var setTimeoutFunc = setTimeout;
                  function noop() {
                  }
                  function bind(fn, thisArg) {
                    return function () {
                      fn.apply(thisArg, arguments);
                    };
                  }
                  function Promise(fn) {
                    if (typeof this !== 'object')
                      throw new TypeError('Promises must be constructed via new');
                    if (typeof fn !== 'function')
                      throw new TypeError('not a function');
                    this._state = 0;
                    this._handled = false;
                    this._value = undefined;
                    this._deferreds = [];
                    doResolve(fn, this);
                  }
                  function handle(self, deferred) {
                    while (self._state === 3) {
                      self = self._value;
                    }
                    if (self._state === 0) {
                      self._deferreds.push(deferred);
                      return;
                    }
                    self._handled = true;
                    Promise._immediateFn(function () {
                      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
                      if (cb === null) {
                        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                        return;
                      }
                      var ret;
                      try {
                        ret = cb(self._value);
                      } catch (e) {
                        reject(deferred.promise, e);
                        return;
                      }
                      resolve(deferred.promise, ret);
                    });
                  }
                  function resolve(self, newValue) {
                    try {
                      if (newValue === self)
                        throw new TypeError('A promise cannot be resolved with itself.');
                      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                        var then = newValue.then;
                        if (newValue instanceof Promise) {
                          self._state = 3;
                          self._value = newValue;
                          finale(self);
                          return;
                        } else if (typeof then === 'function') {
                          doResolve(bind(then, newValue), self);
                          return;
                        }
                      }
                      self._state = 1;
                      self._value = newValue;
                      finale(self);
                    } catch (e) {
                      reject(self, e);
                    }
                  }
                  function reject(self, newValue) {
                    self._state = 2;
                    self._value = newValue;
                    finale(self);
                  }
                  function finale(self) {
                    if (self._state === 2 && self._deferreds.length === 0) {
                      Promise._immediateFn(function () {
                        if (!self._handled) {
                          Promise._unhandledRejectionFn(self._value);
                        }
                      });
                    }
                    for (var i = 0, len = self._deferreds.length; i < len; i++) {
                      handle(self, self._deferreds[i]);
                    }
                    self._deferreds = null;
                  }
                  function Handler(onFulfilled, onRejected, promise) {
                    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
                    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
                    this.promise = promise;
                  }
                  function doResolve(fn, self) {
                    var done = false;
                    try {
                      fn(function (value) {
                        if (done)
                          return;
                        done = true;
                        resolve(self, value);
                      }, function (reason) {
                        if (done)
                          return;
                        done = true;
                        reject(self, reason);
                      });
                    } catch (ex) {
                      if (done)
                        return;
                      done = true;
                      reject(self, ex);
                    }
                  }
                  Promise.prototype['catch'] = function (onRejected) {
                    return this.then(null, onRejected);
                  };
                  Promise.prototype.then = function (onFulfilled, onRejected) {
                    var prom = new this.constructor(noop);
                    handle(this, new Handler(onFulfilled, onRejected, prom));
                    return prom;
                  };
                  Promise.all = function (arr) {
                    var args = Array.prototype.slice.call(arr);
                    return new Promise(function (resolve, reject) {
                      if (args.length === 0)
                        return resolve([]);
                      var remaining = args.length;
                      function res(i, val) {
                        try {
                          if (val && (typeof val === 'object' || typeof val === 'function')) {
                            var then = val.then;
                            if (typeof then === 'function') {
                              then.call(val, function (val) {
                                res(i, val);
                              }, reject);
                              return;
                            }
                          }
                          args[i] = val;
                          if (--remaining === 0) {
                            resolve(args);
                          }
                        } catch (ex) {
                          reject(ex);
                        }
                      }
                      for (var i = 0; i < args.length; i++) {
                        res(i, args[i]);
                      }
                    });
                  };
                  Promise.resolve = function (value) {
                    if (value && typeof value === 'object' && value.constructor === Promise) {
                      return value;
                    }
                    return new Promise(function (resolve) {
                      resolve(value);
                    });
                  };
                  Promise.reject = function (value) {
                    return new Promise(function (resolve, reject) {
                      reject(value);
                    });
                  };
                  Promise.race = function (values) {
                    return new Promise(function (resolve, reject) {
                      for (var i = 0, len = values.length; i < len; i++) {
                        values[i].then(resolve, reject);
                      }
                    });
                  };
                  Promise._immediateFn = typeof setImmediate === 'function' ? function (fn) {
                    setImmediate(fn);
                  } : function (fn) {
                    setTimeoutFunc(fn, 0);
                  };
                  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
                    if (typeof console !== 'undefined' && console) {
                      console.warn('Possible Unhandled Promise Rejection:', err);
                    }
                  };
                  Promise._setImmediateFn = function _setImmediateFn(fn) {
                    Promise._immediateFn = fn;
                  };
                  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
                    Promise._unhandledRejectionFn = fn;
                  };
                  if (typeof module !== 'undefined' && module.exports) {
                    module.exports = Promise;
                  } else if (!root.Promise) {
                    root.Promise = Promise;
                  }
                }(this));
              }.call(this, require('timers').setImmediate));
            },
            { 'timers': 3 }
          ],
          3: [
            function (require, module, exports) {
              (function (setImmediate, clearImmediate) {
                var nextTick = require('process/browser.js').nextTick;
                var apply = Function.prototype.apply;
                var slice = Array.prototype.slice;
                var immediateIds = {};
                var nextImmediateId = 0;
                exports.setTimeout = function () {
                  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
                };
                exports.setInterval = function () {
                  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
                };
                exports.clearTimeout = exports.clearInterval = function (timeout) {
                  timeout.close();
                };
                function Timeout(id, clearFn) {
                  this._id = id;
                  this._clearFn = clearFn;
                }
                Timeout.prototype.unref = Timeout.prototype.ref = function () {
                };
                Timeout.prototype.close = function () {
                  this._clearFn.call(window, this._id);
                };
                exports.enroll = function (item, msecs) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = msecs;
                };
                exports.unenroll = function (item) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = -1;
                };
                exports._unrefActive = exports.active = function (item) {
                  clearTimeout(item._idleTimeoutId);
                  var msecs = item._idleTimeout;
                  if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                      if (item._onTimeout)
                        item._onTimeout();
                    }, msecs);
                  }
                };
                exports.setImmediate = typeof setImmediate === 'function' ? setImmediate : function (fn) {
                  var id = nextImmediateId++;
                  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
                  immediateIds[id] = true;
                  nextTick(function onNextTick() {
                    if (immediateIds[id]) {
                      if (args) {
                        fn.apply(null, args);
                      } else {
                        fn.call(null);
                      }
                      exports.clearImmediate(id);
                    }
                  });
                  return id;
                };
                exports.clearImmediate = typeof clearImmediate === 'function' ? clearImmediate : function (id) {
                  delete immediateIds[id];
                };
              }.call(this, require('timers').setImmediate, require('timers').clearImmediate));
            },
            {
              'process/browser.js': 1,
              'timers': 3
            }
          ],
          4: [
            function (require, module, exports) {
              var promisePolyfill = require('promise-polyfill');
              var Global = function () {
                if (typeof window !== 'undefined') {
                  return window;
                } else {
                  return Function('return this;')();
                }
              }();
              module.exports = { boltExport: Global.Promise || promisePolyfill };
            },
            { 'promise-polyfill': 2 }
          ]
        }, {}, [4])(4);
      }));
    }(undefined, exports$1, module, undefined));
    var Promise = module.exports.boltExport;

    var nu = function (baseFn) {
      var data = Option.none();
      var callbacks = [];
      var map = function (f) {
        return nu(function (nCallback) {
          get(function (data) {
            nCallback(f(data));
          });
        });
      };
      var get = function (nCallback) {
        if (isReady()) {
          call(nCallback);
        } else {
          callbacks.push(nCallback);
        }
      };
      var set = function (x) {
        data = Option.some(x);
        run(callbacks);
        callbacks = [];
      };
      var isReady = function () {
        return data.isSome();
      };
      var run = function (cbs) {
        each(cbs, call);
      };
      var call = function (cb) {
        data.each(function (x) {
          domGlobals.setTimeout(function () {
            cb(x);
          }, 0);
        });
      };
      baseFn(set);
      return {
        get: get,
        map: map,
        isReady: isReady
      };
    };
    var pure = function (a) {
      return nu(function (callback) {
        callback(a);
      });
    };
    var LazyValue = {
      nu: nu,
      pure: pure
    };

    var errorReporter = function (err) {
      domGlobals.setTimeout(function () {
        throw err;
      }, 0);
    };
    var make = function (run) {
      var get = function (callback) {
        run().then(callback, errorReporter);
      };
      var map = function (fab) {
        return make(function () {
          return run().then(fab);
        });
      };
      var bind = function (aFutureB) {
        return make(function () {
          return run().then(function (v) {
            return aFutureB(v).toPromise();
          });
        });
      };
      var anonBind = function (futureB) {
        return make(function () {
          return run().then(function () {
            return futureB.toPromise();
          });
        });
      };
      var toLazy = function () {
        return LazyValue.nu(get);
      };
      var toCached = function () {
        var cache = null;
        return make(function () {
          if (cache === null) {
            cache = run();
          }
          return cache;
        });
      };
      var toPromise = run;
      return {
        map: map,
        bind: bind,
        anonBind: anonBind,
        toLazy: toLazy,
        toCached: toCached,
        toPromise: toPromise,
        get: get
      };
    };
    var nu$1 = function (baseFn) {
      return make(function () {
        return new Promise(baseFn);
      });
    };
    var pure$1 = function (a) {
      return make(function () {
        return Promise.resolve(a);
      });
    };
    var Future = {
      nu: nu$1,
      pure: pure$1
    };

    var par = function (asyncValues, nu) {
      return nu(function (callback) {
        var r = [];
        var count = 0;
        var cb = function (i) {
          return function (value) {
            r[i] = value;
            count++;
            if (count >= asyncValues.length) {
              callback(r);
            }
          };
        };
        if (asyncValues.length === 0) {
          callback([]);
        } else {
          each(asyncValues, function (asyncValue, i) {
            asyncValue.get(cb(i));
          });
        }
      });
    };

    var par$1 = function (futures) {
      return par(futures, Future.nu);
    };
    var mapM = function (array, fn) {
      var futures = map(array, fn);
      return par$1(futures);
    };

    var value = function () {
      var subject = Cell(Option.none());
      var clear = function () {
        subject.set(Option.none());
      };
      var set = function (s) {
        subject.set(Option.some(s));
      };
      var on = function (f) {
        subject.get().each(f);
      };
      var isSet = function () {
        return subject.get().isSome();
      };
      return {
        clear: clear,
        set: set,
        isSet: isSet,
        on: on
      };
    };

    var pasteHtml$1 = function (editor, html, internalFlag) {
      var internal = internalFlag ? internalFlag : InternalHtml.isMarked(html);
      var args = ProcessFilters.process(editor, InternalHtml.unmark(html), internal);
      if (args.cancelled === false) {
        SmartPaste.insertContent(editor, args.content);
      }
    };
    var pasteText = function (editor, text) {
      text = editor.dom.encode(text).replace(/\r\n/g, '\n');
      text = Newlines.convert(text, editor.settings.forced_root_block, editor.settings.forced_root_block_attrs);
      pasteHtml$1(editor, text, false);
    };
    var getDataTransferItems = function (dataTransfer) {
      var items = {};
      var mceInternalUrlPrefix = 'data:text/mce-internal,';
      if (dataTransfer) {
        if (dataTransfer.getData) {
          var legacyText = dataTransfer.getData('Text');
          if (legacyText && legacyText.length > 0) {
            if (legacyText.indexOf(mceInternalUrlPrefix) === -1) {
              items['text/plain'] = legacyText;
            }
          }
        }
        if (dataTransfer.types) {
          for (var i = 0; i < dataTransfer.types.length; i++) {
            var contentType = dataTransfer.types[i];
            try {
              items[contentType] = dataTransfer.getData(contentType);
            } catch (ex) {
              items[contentType] = '';
            }
          }
        }
      }
      return items;
    };
    var getClipboardContent = function (editor, clipboardEvent) {
      var content = getDataTransferItems(clipboardEvent.clipboardData || editor.getDoc().dataTransfer);
      return Utils.isMsEdge() ? global$4.extend(content, { 'text/html': '' }) : content;
    };
    var hasContentType = function (clipboardContent, mimeType) {
      return mimeType in clipboardContent && clipboardContent[mimeType].length > 0;
    };
    var hasHtmlOrText = function (content) {
      return hasContentType(content, 'text/html') || hasContentType(content, 'text/plain');
    };
    var getBase64FromUri = function (uri) {
      var idx;
      idx = uri.indexOf(',');
      if (idx !== -1) {
        return uri.substr(idx + 1);
      }
      return null;
    };
    var isValidDataUriImage = function (settings, imgElm) {
      return settings.images_dataimg_filter ? settings.images_dataimg_filter(imgElm) : true;
    };
    var extractFilename = function (editor, str) {
      var m = str.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i);
      return m ? editor.dom.encode(m[1]) : null;
    };
    var uniqueId = Utils.createIdGenerator('mceclip');
    var pasteImage = function (editor, imageItem) {
      var base64 = getBase64FromUri(imageItem.uri);
      var id = uniqueId();
      var name = editor.settings.images_reuse_filename && imageItem.blob.name ? extractFilename(editor, imageItem.blob.name) : id;
      var img = new domGlobals.Image();
      img.src = imageItem.uri;
      if (isValidDataUriImage(editor.settings, img)) {
        var blobCache = editor.editorUpload.blobCache;
        var blobInfo = void 0, existingBlobInfo = void 0;
        existingBlobInfo = blobCache.findFirst(function (cachedBlobInfo) {
          return cachedBlobInfo.base64() === base64;
        });
        if (!existingBlobInfo) {
          blobInfo = blobCache.create(id, imageItem.blob, base64, name);
          blobCache.add(blobInfo);
        } else {
          blobInfo = existingBlobInfo;
        }
        pasteHtml$1(editor, '<img src="' + blobInfo.blobUri() + '">', false);
      } else {
        pasteHtml$1(editor, '<img src="' + imageItem.uri + '">', false);
      }
    };
    var isClipboardEvent = function (event) {
      return event.type === 'paste';
    };
    var readBlobsAsDataUris = function (items) {
      return mapM(items, function (item) {
        return Future.nu(function (resolve) {
          var blob = item.getAsFile ? item.getAsFile() : item;
          var reader = new window.FileReader();
          reader.onload = function () {
            resolve({
              blob: blob,
              uri: reader.result
            });
          };
          reader.readAsDataURL(blob);
        });
      });
    };
    var getImagesFromDataTransfer = function (dataTransfer) {
      var items = dataTransfer.items ? map(from$1(dataTransfer.items), function (item) {
        return item.getAsFile();
      }) : [];
      var files = dataTransfer.files ? from$1(dataTransfer.files) : [];
      var images = filter$1(items.length > 0 ? items : files, function (file) {
        return /^image\/(jpeg|png|gif|bmp)$/.test(file.type);
      });
      return images;
    };
    var pasteImageData = function (editor, e, rng) {
      var dataTransfer = isClipboardEvent(e) ? e.clipboardData : e.dataTransfer;
      if (editor.settings.paste_data_images && dataTransfer) {
        var images = getImagesFromDataTransfer(dataTransfer);
        if (images.length > 0) {
          e.preventDefault();
          readBlobsAsDataUris(images).get(function (blobResults) {
            if (rng) {
              editor.selection.setRng(rng);
            }
            each(blobResults, function (result) {
              pasteImage(editor, result);
            });
          });
          return true;
        }
      }
      return false;
    };
    var isBrokenAndroidClipboardEvent = function (e) {
      var clipboardData = e.clipboardData;
      return domGlobals.navigator.userAgent.indexOf('Android') !== -1 && clipboardData && clipboardData.items && clipboardData.items.length === 0;
    };
    var isKeyboardPasteEvent = function (e) {
      return global$5.metaKeyPressed(e) && e.keyCode === 86 || e.shiftKey && e.keyCode === 45;
    };
    var registerEventHandlers = function (editor, pasteBin, pasteFormat) {
      var keyboardPasteEvent = value();
      var keyboardPastePlainTextState;
      editor.on('keydown', function (e) {
        function removePasteBinOnKeyUp(e) {
          if (isKeyboardPasteEvent(e) && !e.isDefaultPrevented()) {
            pasteBin.remove();
          }
        }
        if (isKeyboardPasteEvent(e) && !e.isDefaultPrevented()) {
          keyboardPastePlainTextState = e.shiftKey && e.keyCode === 86;
          if (keyboardPastePlainTextState && global$2.webkit && domGlobals.navigator.userAgent.indexOf('Version/') !== -1) {
            return;
          }
          e.stopImmediatePropagation();
          keyboardPasteEvent.set(e);
          window.setTimeout(function () {
            keyboardPasteEvent.clear();
          }, 100);
          if (global$2.ie && keyboardPastePlainTextState) {
            e.preventDefault();
            Events.firePaste(editor, true);
            return;
          }
          pasteBin.remove();
          pasteBin.create();
          editor.once('keyup', removePasteBinOnKeyUp);
          editor.once('paste', function () {
            editor.off('keyup', removePasteBinOnKeyUp);
          });
        }
      });
      function insertClipboardContent(clipboardContent, isKeyBoardPaste, plainTextMode, internal) {
        var content, isPlainTextHtml;
        if (hasContentType(clipboardContent, 'text/html')) {
          content = clipboardContent['text/html'];
        } else {
          content = pasteBin.getHtml();
          internal = internal ? internal : InternalHtml.isMarked(content);
          if (pasteBin.isDefaultContent(content)) {
            plainTextMode = true;
          }
        }
        content = Utils.trimHtml(content);
        pasteBin.remove();
        isPlainTextHtml = internal === false && Newlines.isPlainText(content);
        if (!content.length || isPlainTextHtml) {
          plainTextMode = true;
        }
        if (plainTextMode) {
          if (hasContentType(clipboardContent, 'text/plain') && isPlainTextHtml) {
            content = clipboardContent['text/plain'];
          } else {
            content = Utils.innerText(content);
          }
        }
        if (pasteBin.isDefaultContent(content)) {
          if (!isKeyBoardPaste) {
            editor.windowManager.alert('Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.');
          }
          return;
        }
        if (plainTextMode) {
          pasteText(editor, content);
        } else {
          pasteHtml$1(editor, content, internal);
        }
      }
      var getLastRng = function () {
        return pasteBin.getLastRng() || editor.selection.getRng();
      };
      editor.on('paste', function (e) {
        var isKeyBoardPaste = keyboardPasteEvent.isSet();
        var clipboardContent = getClipboardContent(editor, e);
        var plainTextMode = pasteFormat.get() === 'text' || keyboardPastePlainTextState;
        var internal = hasContentType(clipboardContent, InternalHtml.internalHtmlMime());
        keyboardPastePlainTextState = false;
        if (e.isDefaultPrevented() || isBrokenAndroidClipboardEvent(e)) {
          pasteBin.remove();
          return;
        }
        if (!hasHtmlOrText(clipboardContent) && pasteImageData(editor, e, getLastRng())) {
          pasteBin.remove();
          return;
        }
        if (!isKeyBoardPaste) {
          e.preventDefault();
        }
        if (global$2.ie && (!isKeyBoardPaste || e.ieFake) && !hasContentType(clipboardContent, 'text/html')) {
          pasteBin.create();
          editor.dom.bind(pasteBin.getEl(), 'paste', function (e) {
            e.stopPropagation();
          });
          editor.getDoc().execCommand('Paste', false, null);
          clipboardContent['text/html'] = pasteBin.getHtml();
        }
        if (hasContentType(clipboardContent, 'text/html')) {
          e.preventDefault();
          if (!internal) {
            internal = InternalHtml.isMarked(clipboardContent['text/html']);
          }
          insertClipboardContent(clipboardContent, isKeyBoardPaste, plainTextMode, internal);
        } else {
          global$3.setEditorTimeout(editor, function () {
            insertClipboardContent(clipboardContent, isKeyBoardPaste, plainTextMode, internal);
          }, 0);
        }
      });
    };
    var registerEventsAndFilters = function (editor, pasteBin, pasteFormat) {
      registerEventHandlers(editor, pasteBin, pasteFormat);
      var src;
      editor.parser.addNodeFilter('img', function (nodes, name, args) {
        var isPasteInsert = function (args) {
          return args.data && args.data.paste === true;
        };
        var remove = function (node) {
          if (!node.attr('data-mce-object') && src !== global$2.transparentSrc) {
            node.remove();
          }
        };
        var isWebKitFakeUrl = function (src) {
          return src.indexOf('webkit-fake-url') === 0;
        };
        var isDataUri = function (src) {
          return src.indexOf('data:') === 0;
        };
        if (!editor.settings.paste_data_images && isPasteInsert(args)) {
          var i = nodes.length;
          while (i--) {
            src = nodes[i].attributes.map.src;
            if (!src) {
              continue;
            }
            if (isWebKitFakeUrl(src)) {
              remove(nodes[i]);
            } else if (!editor.settings.allow_html_data_urls && isDataUri(src)) {
              remove(nodes[i]);
            }
          }
        }
      });
    };

    var getPasteBinParent = function (editor) {
      return global$2.ie && editor.inline ? domGlobals.document.body : editor.getBody();
    };
    var isExternalPasteBin = function (editor) {
      return getPasteBinParent(editor) !== editor.getBody();
    };
    var delegatePasteEvents = function (editor, pasteBinElm, pasteBinDefaultContent) {
      if (isExternalPasteBin(editor)) {
        editor.dom.bind(pasteBinElm, 'paste keyup', function (e) {
          if (!isDefault(editor, pasteBinDefaultContent)) {
            editor.fire('paste');
          }
        });
      }
    };
    var create = function (editor, lastRngCell, pasteBinDefaultContent) {
      var dom = editor.dom, body = editor.getBody();
      var pasteBinElm;
      lastRngCell.set(editor.selection.getRng());
      pasteBinElm = editor.dom.add(getPasteBinParent(editor), 'div', {
        'id': 'mcepastebin',
        'class': 'mce-pastebin',
        'contentEditable': true,
        'data-mce-bogus': 'all',
        'style': 'position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0'
      }, pasteBinDefaultContent);
      if (global$2.ie || global$2.gecko) {
        dom.setStyle(pasteBinElm, 'left', dom.getStyle(body, 'direction', true) === 'rtl' ? 65535 : -65535);
      }
      dom.bind(pasteBinElm, 'beforedeactivate focusin focusout', function (e) {
        e.stopPropagation();
      });
      delegatePasteEvents(editor, pasteBinElm, pasteBinDefaultContent);
      pasteBinElm.focus();
      editor.selection.select(pasteBinElm, true);
    };
    var remove = function (editor, lastRngCell) {
      if (getEl(editor)) {
        var pasteBinClone = void 0;
        var lastRng = lastRngCell.get();
        while (pasteBinClone = editor.dom.get('mcepastebin')) {
          editor.dom.remove(pasteBinClone);
          editor.dom.unbind(pasteBinClone);
        }
        if (lastRng) {
          editor.selection.setRng(lastRng);
        }
      }
      lastRngCell.set(null);
    };
    var getEl = function (editor) {
      return editor.dom.get('mcepastebin');
    };
    var getHtml = function (editor) {
      var pasteBinElm, pasteBinClones, i, dirtyWrappers, cleanWrapper;
      var copyAndRemove = function (toElm, fromElm) {
        toElm.appendChild(fromElm);
        editor.dom.remove(fromElm, true);
      };
      pasteBinClones = global$4.grep(getPasteBinParent(editor).childNodes, function (elm) {
        return elm.id === 'mcepastebin';
      });
      pasteBinElm = pasteBinClones.shift();
      global$4.each(pasteBinClones, function (pasteBinClone) {
        copyAndRemove(pasteBinElm, pasteBinClone);
      });
      dirtyWrappers = editor.dom.select('div[id=mcepastebin]', pasteBinElm);
      for (i = dirtyWrappers.length - 1; i >= 0; i--) {
        cleanWrapper = editor.dom.create('div');
        pasteBinElm.insertBefore(cleanWrapper, dirtyWrappers[i]);
        copyAndRemove(cleanWrapper, dirtyWrappers[i]);
      }
      return pasteBinElm ? pasteBinElm.innerHTML : '';
    };
    var getLastRng = function (lastRng) {
      return lastRng.get();
    };
    var isDefaultContent = function (pasteBinDefaultContent, content) {
      return content === pasteBinDefaultContent;
    };
    var isPasteBin = function (elm) {
      return elm && elm.id === 'mcepastebin';
    };
    var isDefault = function (editor, pasteBinDefaultContent) {
      var pasteBinElm = getEl(editor);
      return isPasteBin(pasteBinElm) && isDefaultContent(pasteBinDefaultContent, pasteBinElm.innerHTML);
    };
    var PasteBin = function (editor) {
      var lastRng = Cell(null);
      var pasteBinDefaultContent = '%MCEPASTEBIN%';
      return {
        create: function () {
          return create(editor, lastRng, pasteBinDefaultContent);
        },
        remove: function () {
          return remove(editor, lastRng);
        },
        getEl: function () {
          return getEl(editor);
        },
        getHtml: function () {
          return getHtml(editor);
        },
        getLastRng: function () {
          return getLastRng(lastRng);
        },
        isDefault: function () {
          return isDefault(editor, pasteBinDefaultContent);
        },
        isDefaultContent: function (content) {
          return isDefaultContent(pasteBinDefaultContent, content);
        }
      };
    };

    var Clipboard = function (editor, pasteFormat) {
      var pasteBin = PasteBin(editor);
      editor.on('preInit', function () {
        return registerEventsAndFilters(editor, pasteBin, pasteFormat);
      });
      return {
        pasteFormat: pasteFormat,
        pasteHtml: function (html, internalFlag) {
          return pasteHtml$1(editor, html, internalFlag);
        },
        pasteText: function (text) {
          return pasteText(editor, text);
        },
        pasteImageData: function (e, rng) {
          return pasteImageData(editor, e, rng);
        },
        getDataTransferItems: getDataTransferItems,
        hasHtmlOrText: hasHtmlOrText,
        hasContentType: hasContentType
      };
    };

    var noop = function () {
    };
    var hasWorkingClipboardApi = function (clipboardData) {
      return global$2.iOS === false && clipboardData !== undefined && typeof clipboardData.setData === 'function' && Utils.isMsEdge() !== true;
    };
    var setHtml5Clipboard = function (clipboardData, html, text) {
      if (hasWorkingClipboardApi(clipboardData)) {
        try {
          clipboardData.clearData();
          clipboardData.setData('text/html', html);
          clipboardData.setData('text/plain', text);
          clipboardData.setData(InternalHtml.internalHtmlMime(), html);
          return true;
        } catch (e) {
          return false;
        }
      } else {
        return false;
      }
    };
    var setClipboardData = function (evt, data, fallback, done) {
      if (setHtml5Clipboard(evt.clipboardData, data.html, data.text)) {
        evt.preventDefault();
        done();
      } else {
        fallback(data.html, done);
      }
    };
    var fallback = function (editor) {
      return function (html, done) {
        var markedHtml = InternalHtml.mark(html);
        var outer = editor.dom.create('div', {
          'contenteditable': 'false',
          'data-mce-bogus': 'all'
        });
        var inner = editor.dom.create('div', { contenteditable: 'true' }, markedHtml);
        editor.dom.setStyles(outer, {
          position: 'fixed',
          top: '0',
          left: '-3000px',
          width: '1000px',
          overflow: 'hidden'
        });
        outer.appendChild(inner);
        editor.dom.add(editor.getBody(), outer);
        var range = editor.selection.getRng();
        inner.focus();
        var offscreenRange = editor.dom.createRng();
        offscreenRange.selectNodeContents(inner);
        editor.selection.setRng(offscreenRange);
        setTimeout(function () {
          editor.selection.setRng(range);
          outer.parentNode.removeChild(outer);
          done();
        }, 0);
      };
    };
    var getData = function (editor) {
      return {
        html: editor.selection.getContent({ contextual: true }),
        text: editor.selection.getContent({ format: 'text' })
      };
    };
    var isTableSelection = function (editor) {
      return !!editor.dom.getParent(editor.selection.getStart(), 'td[data-mce-selected],th[data-mce-selected]', editor.getBody());
    };
    var hasSelectedContent = function (editor) {
      return !editor.selection.isCollapsed() || isTableSelection(editor);
    };
    var cut = function (editor) {
      return function (evt) {
        if (hasSelectedContent(editor)) {
          setClipboardData(evt, getData(editor), fallback(editor), function () {
            setTimeout(function () {
              editor.execCommand('Delete');
            }, 0);
          });
        }
      };
    };
    var copy = function (editor) {
      return function (evt) {
        if (hasSelectedContent(editor)) {
          setClipboardData(evt, getData(editor), fallback(editor), noop);
        }
      };
    };
    var register$1 = function (editor) {
      editor.on('cut', cut(editor));
      editor.on('copy', copy(editor));
    };
    var CutCopy = { register: register$1 };

    var global$b = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');

    var getCaretRangeFromEvent = function (editor, e) {
      return global$b.getCaretRangeFromPoint(e.clientX, e.clientY, editor.getDoc());
    };
    var isPlainTextFileUrl = function (content) {
      var plainTextContent = content['text/plain'];
      return plainTextContent ? plainTextContent.indexOf('file://') === 0 : false;
    };
    var setFocusedRange = function (editor, rng) {
      editor.focus();
      editor.selection.setRng(rng);
    };
    var setup = function (editor, clipboard, draggingInternallyState) {
      if (Settings.shouldBlockDrop(editor)) {
        editor.on('dragend dragover draggesture dragdrop drop drag', function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      }
      if (!Settings.shouldPasteDataImages(editor)) {
        editor.on('drop', function (e) {
          var dataTransfer = e.dataTransfer;
          if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {
            e.preventDefault();
          }
        });
      }
      editor.on('drop', function (e) {
        var dropContent, rng;
        rng = getCaretRangeFromEvent(editor, e);
        if (e.isDefaultPrevented() || draggingInternallyState.get()) {
          return;
        }
        dropContent = clipboard.getDataTransferItems(e.dataTransfer);
        var internal = clipboard.hasContentType(dropContent, InternalHtml.internalHtmlMime());
        if ((!clipboard.hasHtmlOrText(dropContent) || isPlainTextFileUrl(dropContent)) && clipboard.pasteImageData(e, rng)) {
          return;
        }
        if (rng && Settings.shouldFilterDrop(editor)) {
          var content_1 = dropContent['mce-internal'] || dropContent['text/html'] || dropContent['text/plain'];
          if (content_1) {
            e.preventDefault();
            global$3.setEditorTimeout(editor, function () {
              editor.undoManager.transact(function () {
                if (dropContent['mce-internal']) {
                  editor.execCommand('Delete');
                }
                setFocusedRange(editor, rng);
                content_1 = Utils.trimHtml(content_1);
                if (!dropContent['text/html']) {
                  clipboard.pasteText(content_1);
                } else {
                  clipboard.pasteHtml(content_1, internal);
                }
              });
            });
          }
        }
      });
      editor.on('dragstart', function (e) {
        draggingInternallyState.set(true);
      });
      editor.on('dragover dragend', function (e) {
        if (Settings.shouldPasteDataImages(editor) && draggingInternallyState.get() === false) {
          e.preventDefault();
          setFocusedRange(editor, getCaretRangeFromEvent(editor, e));
        }
        if (e.type === 'dragend') {
          draggingInternallyState.set(false);
        }
      });
    };
    var DragDrop = { setup: setup };

    var setup$1 = function (editor) {
      var plugin = editor.plugins.paste;
      var preProcess = Settings.getPreProcess(editor);
      if (preProcess) {
        editor.on('PastePreProcess', function (e) {
          preProcess.call(plugin, plugin, e);
        });
      }
      var postProcess = Settings.getPostProcess(editor);
      if (postProcess) {
        editor.on('PastePostProcess', function (e) {
          postProcess.call(plugin, plugin, e);
        });
      }
    };
    var PrePostProcess = { setup: setup$1 };

    function addPreProcessFilter(editor, filterFunc) {
      editor.on('PastePreProcess', function (e) {
        e.content = filterFunc(editor, e.content, e.internal, e.wordContent);
      });
    }
    function addPostProcessFilter(editor, filterFunc) {
      editor.on('PastePostProcess', function (e) {
        filterFunc(editor, e.node);
      });
    }
    function removeExplorerBrElementsAfterBlocks(editor, html) {
      if (!WordFilter.isWordContent(html)) {
        return html;
      }
      var blockElements = [];
      global$4.each(editor.schema.getBlockElements(), function (block, blockName) {
        blockElements.push(blockName);
      });
      var explorerBlocksRegExp = new RegExp('(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?(' + blockElements.join('|') + ')[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*', 'g');
      html = Utils.filter(html, [[
          explorerBlocksRegExp,
          '$1'
        ]]);
      html = Utils.filter(html, [
        [
          /<br><br>/g,
          '<BR><BR>'
        ],
        [
          /<br>/g,
          ' '
        ],
        [
          /<BR><BR>/g,
          '<br>'
        ]
      ]);
      return html;
    }
    function removeWebKitStyles(editor, content, internal, isWordHtml) {
      if (isWordHtml || internal) {
        return content;
      }
      var webKitStylesSetting = Settings.getWebkitStyles(editor);
      var webKitStyles;
      if (Settings.shouldRemoveWebKitStyles(editor) === false || webKitStylesSetting === 'all') {
        return content;
      }
      if (webKitStylesSetting) {
        webKitStyles = webKitStylesSetting.split(/[, ]/);
      }
      if (webKitStyles) {
        var dom_1 = editor.dom, node_1 = editor.selection.getNode();
        content = content.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, function (all, before, value, after) {
          var inputStyles = dom_1.parseStyle(dom_1.decode(value));
          var outputStyles = {};
          if (webKitStyles === 'none') {
            return before + after;
          }
          for (var i = 0; i < webKitStyles.length; i++) {
            var inputValue = inputStyles[webKitStyles[i]], currentValue = dom_1.getStyle(node_1, webKitStyles[i], true);
            if (/color/.test(webKitStyles[i])) {
              inputValue = dom_1.toHex(inputValue);
              currentValue = dom_1.toHex(currentValue);
            }
            if (currentValue !== inputValue) {
              outputStyles[webKitStyles[i]] = inputValue;
            }
          }
          outputStyles = dom_1.serializeStyle(outputStyles, 'span');
          if (outputStyles) {
            return before + ' style="' + outputStyles + '"' + after;
          }
          return before + after;
        });
      } else {
        content = content.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, '$1$3');
      }
      content = content.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, function (all, before, value, after) {
        return before + ' style="' + value + '"' + after;
      });
      return content;
    }
    function removeUnderlineAndFontInAnchor(editor, root) {
      editor.$('a', root).find('font,u').each(function (i, node) {
        editor.dom.remove(node, true);
      });
    }
    var setup$2 = function (editor) {
      if (global$2.webkit) {
        addPreProcessFilter(editor, removeWebKitStyles);
      }
      if (global$2.ie) {
        addPreProcessFilter(editor, removeExplorerBrElementsAfterBlocks);
        addPostProcessFilter(editor, removeUnderlineAndFontInAnchor);
      }
    };
    var Quirks = { setup: setup$2 };

    var stateChange = function (editor, clipboard, e) {
      var ctrl = e.control;
      ctrl.active(clipboard.pasteFormat.get() === 'text');
      editor.on('PastePlainTextToggle', function (e) {
        ctrl.active(e.state);
      });
    };
    var register$2 = function (editor, clipboard) {
      var postRender = curry(stateChange, editor, clipboard);
      editor.addButton('pastetext', {
        active: false,
        icon: 'pastetext',
        tooltip: 'Paste as text',
        cmd: 'mceTogglePlainTextPaste',
        onPostRender: postRender
      });
      editor.addMenuItem('pastetext', {
        text: 'Paste as text',
        selectable: true,
        active: clipboard.pasteFormat,
        cmd: 'mceTogglePlainTextPaste',
        onPostRender: postRender
      });
    };
    var Buttons = { register: register$2 };

    global$1.add('paste', function (editor) {
      if (DetectProPlugin.hasProPlugin(editor) === false) {
        var userIsInformedState = Cell(false);
        var draggingInternallyState = Cell(false);
        var pasteFormat = Cell(Settings.isPasteAsTextEnabled(editor) ? 'text' : 'html');
        var clipboard = Clipboard(editor, pasteFormat);
        var quirks = Quirks.setup(editor);
        Buttons.register(editor, clipboard);
        Commands.register(editor, clipboard, userIsInformedState);
        PrePostProcess.setup(editor);
        CutCopy.register(editor);
        DragDrop.setup(editor, clipboard, draggingInternallyState);
        return Api.get(clipboard, quirks);
      }
    });
    function Plugin () {
    }

    return Plugin;

}(window));
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/table/plugin.js":
/*!******************************************************!*\
  !*** ./node_modules/tinymce/plugins/table/plugin.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var table = (function (domGlobals) {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var noop = function () {
    };
    var compose = function (fa, fb) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return fa(fb.apply(null, args));
      };
    };
    var constant = function (value) {
      return function () {
        return value;
      };
    };
    var identity = function (x) {
      return x;
    };
    function curry(fn) {
      var initialArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        initialArgs[_i - 1] = arguments[_i];
      }
      return function () {
        var restArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          restArgs[_i] = arguments[_i];
        }
        var all = initialArgs.concat(restArgs);
        return fn.apply(null, all);
      };
    }
    var not = function (f) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return !f.apply(null, args);
      };
    };
    var die = function (msg) {
      return function () {
        throw new Error(msg);
      };
    };
    var never = constant(false);
    var always = constant(true);

    var never$1 = never;
    var always$1 = always;
    var none = function () {
      return NONE;
    };
    var NONE = function () {
      var eq = function (o) {
        return o.isNone();
      };
      var call = function (thunk) {
        return thunk();
      };
      var id = function (n) {
        return n;
      };
      var noop = function () {
      };
      var nul = function () {
        return null;
      };
      var undef = function () {
        return undefined;
      };
      var me = {
        fold: function (n, s) {
          return n();
        },
        is: never$1,
        isSome: never$1,
        isNone: always$1,
        getOr: id,
        getOrThunk: call,
        getOrDie: function (msg) {
          throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: none,
        ap: none,
        each: noop,
        bind: none,
        flatten: none,
        exists: never$1,
        forall: always$1,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () {
          return [];
        },
        toString: constant('none()')
      };
      if (Object.freeze) {
        Object.freeze(me);
      }
      return me;
    }();
    var some = function (a) {
      var constant_a = function () {
        return a;
      };
      var self = function () {
        return me;
      };
      var map = function (f) {
        return some(f(a));
      };
      var bind = function (f) {
        return f(a);
      };
      var me = {
        fold: function (n, s) {
          return s(a);
        },
        is: function (v) {
          return a === v;
        },
        isSome: always$1,
        isNone: never$1,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
          return optfab.fold(none, function (fab) {
            return some(fab(a));
          });
        },
        each: function (f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
          return f(a) ? me : NONE;
        },
        equals: function (o) {
          return o.is(a);
        },
        equals_: function (o, elementEq) {
          return o.fold(never$1, function (b) {
            return elementEq(a, b);
          });
        },
        toArray: function () {
          return [a];
        },
        toString: function () {
          return 'some(' + a + ')';
        }
      };
      return me;
    };
    var from = function (value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: none,
      from: from
    };

    var typeOf = function (x) {
      if (x === null) {
        return 'null';
      }
      var t = typeof x;
      if (t === 'object' && (Array.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'Array')) {
        return 'array';
      }
      if (t === 'object' && (String.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'String')) {
        return 'string';
      }
      return t;
    };
    var isType = function (type) {
      return function (value) {
        return typeOf(value) === type;
      };
    };
    var isString = isType('string');
    var isArray = isType('array');
    var isBoolean = isType('boolean');
    var isFunction = isType('function');
    var isNumber = isType('number');

    var slice = Array.prototype.slice;
    var rawIndexOf = function () {
      var pIndexOf = Array.prototype.indexOf;
      var fastIndex = function (xs, x) {
        return pIndexOf.call(xs, x);
      };
      var slowIndex = function (xs, x) {
        return slowIndexOf(xs, x);
      };
      return pIndexOf === undefined ? slowIndex : fastIndex;
    }();
    var contains = function (xs, x) {
      return rawIndexOf(xs, x) > -1;
    };
    var exists = function (xs, pred) {
      return findIndex(xs, pred).isSome();
    };
    var map = function (xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var each = function (xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var eachr = function (xs, f) {
      for (var i = xs.length - 1; i >= 0; i--) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var filter = function (xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var foldr = function (xs, f, acc) {
      eachr(xs, function (x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var foldl = function (xs, f, acc) {
      each(xs, function (x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var find = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var findIndex = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(i);
        }
      }
      return Option.none();
    };
    var slowIndexOf = function (xs, x) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    };
    var push = Array.prototype.push;
    var flatten = function (xs) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (!isArray(xs[i])) {
          throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        }
        push.apply(r, xs[i]);
      }
      return r;
    };
    var bind = function (xs, f) {
      var output = map(xs, f);
      return flatten(output);
    };
    var forall = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        var x = xs[i];
        if (pred(x, i, xs) !== true) {
          return false;
        }
      }
      return true;
    };
    var reverse = function (xs) {
      var r = slice.call(xs, 0);
      r.reverse();
      return r;
    };
    var last = function (xs) {
      return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
    };
    var from$1 = isFunction(Array.from) ? Array.from : function (x) {
      return slice.call(x);
    };

    var keys = Object.keys;
    var each$1 = function (obj, f) {
      var props = keys(obj);
      for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        f(x, i, obj);
      }
    };
    var map$1 = function (obj, f) {
      return tupleMap(obj, function (x, i, obj) {
        return {
          k: i,
          v: f(x, i, obj)
        };
      });
    };
    var tupleMap = function (obj, f) {
      var r = {};
      each$1(obj, function (x, i) {
        var tuple = f(x, i, obj);
        r[tuple.k] = tuple.v;
      });
      return r;
    };

    var Immutable = function () {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
          throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
        }
        var struct = {};
        each(fields, function (name, i) {
          struct[name] = constant(values[i]);
        });
        return struct;
      };
    };

    var sort = function (arr) {
      return arr.slice(0).sort();
    };
    var reqMessage = function (required, keys) {
      throw new Error('All required keys (' + sort(required).join(', ') + ') were not specified. Specified keys were: ' + sort(keys).join(', ') + '.');
    };
    var unsuppMessage = function (unsupported) {
      throw new Error('Unsupported keys for object: ' + sort(unsupported).join(', '));
    };
    var validateStrArr = function (label, array) {
      if (!isArray(array)) {
        throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
      }
      each(array, function (a) {
        if (!isString(a)) {
          throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
        }
      });
    };
    var invalidTypeMessage = function (incorrect, type) {
      throw new Error('All values need to be of type: ' + type + '. Keys (' + sort(incorrect).join(', ') + ') were not.');
    };
    var checkDupes = function (everything) {
      var sorted = sort(everything);
      var dupe = find(sorted, function (s, i) {
        return i < sorted.length - 1 && s === sorted[i + 1];
      });
      dupe.each(function (d) {
        throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
      });
    };

    var MixedBag = function (required, optional) {
      var everything = required.concat(optional);
      if (everything.length === 0) {
        throw new Error('You must specify at least one required or optional field.');
      }
      validateStrArr('required', required);
      validateStrArr('optional', optional);
      checkDupes(everything);
      return function (obj) {
        var keys$1 = keys(obj);
        var allReqd = forall(required, function (req) {
          return contains(keys$1, req);
        });
        if (!allReqd) {
          reqMessage(required, keys$1);
        }
        var unsupported = filter(keys$1, function (key) {
          return !contains(everything, key);
        });
        if (unsupported.length > 0) {
          unsuppMessage(unsupported);
        }
        var r = {};
        each(required, function (req) {
          r[req] = constant(obj[req]);
        });
        each(optional, function (opt) {
          r[opt] = constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
        });
        return r;
      };
    };

    var ATTRIBUTE = domGlobals.Node.ATTRIBUTE_NODE;
    var CDATA_SECTION = domGlobals.Node.CDATA_SECTION_NODE;
    var COMMENT = domGlobals.Node.COMMENT_NODE;
    var DOCUMENT = domGlobals.Node.DOCUMENT_NODE;
    var DOCUMENT_TYPE = domGlobals.Node.DOCUMENT_TYPE_NODE;
    var DOCUMENT_FRAGMENT = domGlobals.Node.DOCUMENT_FRAGMENT_NODE;
    var ELEMENT = domGlobals.Node.ELEMENT_NODE;
    var TEXT = domGlobals.Node.TEXT_NODE;
    var PROCESSING_INSTRUCTION = domGlobals.Node.PROCESSING_INSTRUCTION_NODE;
    var ENTITY_REFERENCE = domGlobals.Node.ENTITY_REFERENCE_NODE;
    var ENTITY = domGlobals.Node.ENTITY_NODE;
    var NOTATION = domGlobals.Node.NOTATION_NODE;

    var Global = typeof domGlobals.window !== 'undefined' ? domGlobals.window : Function('return this;')();

    var path = function (parts, scope) {
      var o = scope !== undefined && scope !== null ? scope : Global;
      for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i) {
        o = o[parts[i]];
      }
      return o;
    };
    var resolve = function (p, scope) {
      var parts = p.split('.');
      return path(parts, scope);
    };

    var unsafe = function (name, scope) {
      return resolve(name, scope);
    };
    var getOrDie = function (name, scope) {
      var actual = unsafe(name, scope);
      if (actual === undefined || actual === null) {
        throw new Error(name + ' not available on this browser');
      }
      return actual;
    };
    var Global$1 = { getOrDie: getOrDie };

    var name = function (element) {
      var r = element.dom().nodeName;
      return r.toLowerCase();
    };
    var type = function (element) {
      return element.dom().nodeType;
    };
    var isType$1 = function (t) {
      return function (element) {
        return type(element) === t;
      };
    };
    var isComment = function (element) {
      return type(element) === COMMENT || name(element) === '#comment';
    };
    var isElement = isType$1(ELEMENT);
    var isText = isType$1(TEXT);

    var rawSet = function (dom, key, value) {
      if (isString(value) || isBoolean(value) || isNumber(value)) {
        dom.setAttribute(key, value + '');
      } else {
        domGlobals.console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
        throw new Error('Attribute value was not simple');
      }
    };
    var set = function (element, key, value) {
      rawSet(element.dom(), key, value);
    };
    var setAll = function (element, attrs) {
      var dom = element.dom();
      each$1(attrs, function (v, k) {
        rawSet(dom, k, v);
      });
    };
    var get = function (element, key) {
      var v = element.dom().getAttribute(key);
      return v === null ? undefined : v;
    };
    var has = function (element, key) {
      var dom = element.dom();
      return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
    };
    var remove = function (element, key) {
      element.dom().removeAttribute(key);
    };
    var clone = function (element) {
      return foldl(element.dom().attributes, function (acc, attr) {
        acc[attr.name] = attr.value;
        return acc;
      }, {});
    };

    var checkRange = function (str, substr, start) {
      if (substr === '') {
        return true;
      }
      if (str.length < substr.length) {
        return false;
      }
      var x = str.substr(start, start + substr.length);
      return x === substr;
    };
    var contains$1 = function (str, substr) {
      return str.indexOf(substr) !== -1;
    };
    var endsWith = function (str, suffix) {
      return checkRange(str, suffix, str.length - suffix.length);
    };
    var trim = function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    };

    var isSupported = function (dom) {
      return dom.style !== undefined && isFunction(dom.style.getPropertyValue);
    };

    var cached = function (f) {
      var called = false;
      var r;
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!called) {
          called = true;
          r = f.apply(null, args);
        }
        return r;
      };
    };

    var fromHtml = function (html, scope) {
      var doc = scope || domGlobals.document;
      var div = doc.createElement('div');
      div.innerHTML = html;
      if (!div.hasChildNodes() || div.childNodes.length > 1) {
        domGlobals.console.error('HTML does not have a single root node', html);
        throw new Error('HTML must have a single root node');
      }
      return fromDom(div.childNodes[0]);
    };
    var fromTag = function (tag, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createElement(tag);
      return fromDom(node);
    };
    var fromText = function (text, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createTextNode(text);
      return fromDom(node);
    };
    var fromDom = function (node) {
      if (node === null || node === undefined) {
        throw new Error('Node cannot be null or undefined');
      }
      return { dom: constant(node) };
    };
    var fromPoint = function (docElm, x, y) {
      var doc = docElm.dom();
      return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
    };
    var Element = {
      fromHtml: fromHtml,
      fromTag: fromTag,
      fromText: fromText,
      fromDom: fromDom,
      fromPoint: fromPoint
    };

    var inBody = function (element) {
      var dom = isText(element) ? element.dom().parentNode : element.dom();
      return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
    };
    var body = cached(function () {
      return getBody(Element.fromDom(domGlobals.document));
    });
    var getBody = function (doc) {
      var b = doc.dom().body;
      if (b === null || b === undefined) {
        throw new Error('Body is not available yet');
      }
      return Element.fromDom(b);
    };

    var internalSet = function (dom, property, value) {
      if (!isString(value)) {
        domGlobals.console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
        throw new Error('CSS value must be a string: ' + value);
      }
      if (isSupported(dom)) {
        dom.style.setProperty(property, value);
      }
    };
    var internalRemove = function (dom, property) {
      if (isSupported(dom)) {
        dom.style.removeProperty(property);
      }
    };
    var set$1 = function (element, property, value) {
      var dom = element.dom();
      internalSet(dom, property, value);
    };
    var setAll$1 = function (element, css) {
      var dom = element.dom();
      each$1(css, function (v, k) {
        internalSet(dom, k, v);
      });
    };
    var get$1 = function (element, property) {
      var dom = element.dom();
      var styles = domGlobals.window.getComputedStyle(dom);
      var r = styles.getPropertyValue(property);
      var v = r === '' && !inBody(element) ? getUnsafeProperty(dom, property) : r;
      return v === null ? undefined : v;
    };
    var getUnsafeProperty = function (dom, property) {
      return isSupported(dom) ? dom.style.getPropertyValue(property) : '';
    };
    var getRaw = function (element, property) {
      var dom = element.dom();
      var raw = getUnsafeProperty(dom, property);
      return Option.from(raw).filter(function (r) {
        return r.length > 0;
      });
    };
    var remove$1 = function (element, property) {
      var dom = element.dom();
      internalRemove(dom, property);
      if (has(element, 'style') && trim(get(element, 'style')) === '') {
        remove(element, 'style');
      }
    };
    var copy = function (source, target) {
      var sourceDom = source.dom();
      var targetDom = target.dom();
      if (isSupported(sourceDom) && isSupported(targetDom)) {
        targetDom.style.cssText = sourceDom.style.cssText;
      }
    };

    var node = function () {
      var f = Global$1.getOrDie('Node');
      return f;
    };
    var compareDocumentPosition = function (a, b, match) {
      return (a.compareDocumentPosition(b) & match) !== 0;
    };
    var documentPositionPreceding = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
    };
    var documentPositionContainedBy = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
    };
    var Node = {
      documentPositionPreceding: documentPositionPreceding,
      documentPositionContainedBy: documentPositionContainedBy
    };

    var firstMatch = function (regexes, s) {
      for (var i = 0; i < regexes.length; i++) {
        var x = regexes[i];
        if (x.test(s)) {
          return x;
        }
      }
      return undefined;
    };
    var find$1 = function (regexes, agent) {
      var r = firstMatch(regexes, agent);
      if (!r) {
        return {
          major: 0,
          minor: 0
        };
      }
      var group = function (i) {
        return Number(agent.replace(r, '$' + i));
      };
      return nu(group(1), group(2));
    };
    var detect = function (versionRegexes, agent) {
      var cleanedAgent = String(agent).toLowerCase();
      if (versionRegexes.length === 0) {
        return unknown();
      }
      return find$1(versionRegexes, cleanedAgent);
    };
    var unknown = function () {
      return nu(0, 0);
    };
    var nu = function (major, minor) {
      return {
        major: major,
        minor: minor
      };
    };
    var Version = {
      nu: nu,
      detect: detect,
      unknown: unknown
    };

    var edge = 'Edge';
    var chrome = 'Chrome';
    var ie = 'IE';
    var opera = 'Opera';
    var firefox = 'Firefox';
    var safari = 'Safari';
    var isBrowser = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$1 = function () {
      return nu$1({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$1 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isEdge: isBrowser(edge, current),
        isChrome: isBrowser(chrome, current),
        isIE: isBrowser(ie, current),
        isOpera: isBrowser(opera, current),
        isFirefox: isBrowser(firefox, current),
        isSafari: isBrowser(safari, current)
      };
    };
    var Browser = {
      unknown: unknown$1,
      nu: nu$1,
      edge: constant(edge),
      chrome: constant(chrome),
      ie: constant(ie),
      opera: constant(opera),
      firefox: constant(firefox),
      safari: constant(safari)
    };

    var windows = 'Windows';
    var ios = 'iOS';
    var android = 'Android';
    var linux = 'Linux';
    var osx = 'OSX';
    var solaris = 'Solaris';
    var freebsd = 'FreeBSD';
    var isOS = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$2 = function () {
      return nu$2({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$2 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isWindows: isOS(windows, current),
        isiOS: isOS(ios, current),
        isAndroid: isOS(android, current),
        isOSX: isOS(osx, current),
        isLinux: isOS(linux, current),
        isSolaris: isOS(solaris, current),
        isFreeBSD: isOS(freebsd, current)
      };
    };
    var OperatingSystem = {
      unknown: unknown$2,
      nu: nu$2,
      windows: constant(windows),
      ios: constant(ios),
      android: constant(android),
      linux: constant(linux),
      osx: constant(osx),
      solaris: constant(solaris),
      freebsd: constant(freebsd)
    };

    var DeviceType = function (os, browser, userAgent) {
      var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
      var isiPhone = os.isiOS() && !isiPad;
      var isAndroid3 = os.isAndroid() && os.version.major === 3;
      var isAndroid4 = os.isAndroid() && os.version.major === 4;
      var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
      var isTouch = os.isiOS() || os.isAndroid();
      var isPhone = isTouch && !isTablet;
      var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
      return {
        isiPad: constant(isiPad),
        isiPhone: constant(isiPhone),
        isTablet: constant(isTablet),
        isPhone: constant(isPhone),
        isTouch: constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: constant(iOSwebview)
      };
    };

    var detect$1 = function (candidates, userAgent) {
      var agent = String(userAgent).toLowerCase();
      return find(candidates, function (candidate) {
        return candidate.search(agent);
      });
    };
    var detectBrowser = function (browsers, userAgent) {
      return detect$1(browsers, userAgent).map(function (browser) {
        var version = Version.detect(browser.versionRegexes, userAgent);
        return {
          current: browser.name,
          version: version
        };
      });
    };
    var detectOs = function (oses, userAgent) {
      return detect$1(oses, userAgent).map(function (os) {
        var version = Version.detect(os.versionRegexes, userAgent);
        return {
          current: os.name,
          version: version
        };
      });
    };
    var UaString = {
      detectBrowser: detectBrowser,
      detectOs: detectOs
    };

    var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
    var checkContains = function (target) {
      return function (uastring) {
        return contains$1(uastring, target);
      };
    };
    var browsers = [
      {
        name: 'Edge',
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function (uastring) {
          return contains$1(uastring, 'edge/') && contains$1(uastring, 'chrome') && contains$1(uastring, 'safari') && contains$1(uastring, 'applewebkit');
        }
      },
      {
        name: 'Chrome',
        versionRegexes: [
          /.*?chrome\/([0-9]+)\.([0-9]+).*/,
          normalVersionRegex
        ],
        search: function (uastring) {
          return contains$1(uastring, 'chrome') && !contains$1(uastring, 'chromeframe');
        }
      },
      {
        name: 'IE',
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: function (uastring) {
          return contains$1(uastring, 'msie') || contains$1(uastring, 'trident');
        }
      },
      {
        name: 'Opera',
        versionRegexes: [
          normalVersionRegex,
          /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('opera')
      },
      {
        name: 'Firefox',
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: checkContains('firefox')
      },
      {
        name: 'Safari',
        versionRegexes: [
          normalVersionRegex,
          /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: function (uastring) {
          return (contains$1(uastring, 'safari') || contains$1(uastring, 'mobile/')) && contains$1(uastring, 'applewebkit');
        }
      }
    ];
    var oses = [
      {
        name: 'Windows',
        search: checkContains('win'),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'iOS',
        search: function (uastring) {
          return contains$1(uastring, 'iphone') || contains$1(uastring, 'ipad');
        },
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
      },
      {
        name: 'Android',
        search: checkContains('android'),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'OSX',
        search: checkContains('os x'),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: 'Linux',
        search: checkContains('linux'),
        versionRegexes: []
      },
      {
        name: 'Solaris',
        search: checkContains('sunos'),
        versionRegexes: []
      },
      {
        name: 'FreeBSD',
        search: checkContains('freebsd'),
        versionRegexes: []
      }
    ];
    var PlatformInfo = {
      browsers: constant(browsers),
      oses: constant(oses)
    };

    var detect$2 = function (userAgent) {
      var browsers = PlatformInfo.browsers();
      var oses = PlatformInfo.oses();
      var browser = UaString.detectBrowser(browsers, userAgent).fold(Browser.unknown, Browser.nu);
      var os = UaString.detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
      var deviceType = DeviceType(os, browser, userAgent);
      return {
        browser: browser,
        os: os,
        deviceType: deviceType
      };
    };
    var PlatformDetection = { detect: detect$2 };

    var detect$3 = cached(function () {
      var userAgent = domGlobals.navigator.userAgent;
      return PlatformDetection.detect(userAgent);
    });
    var PlatformDetection$1 = { detect: detect$3 };

    var ELEMENT$1 = ELEMENT;
    var DOCUMENT$1 = DOCUMENT;
    var is = function (element, selector) {
      var dom = element.dom();
      if (dom.nodeType !== ELEMENT$1) {
        return false;
      } else {
        var elem = dom;
        if (elem.matches !== undefined) {
          return elem.matches(selector);
        } else if (elem.msMatchesSelector !== undefined) {
          return elem.msMatchesSelector(selector);
        } else if (elem.webkitMatchesSelector !== undefined) {
          return elem.webkitMatchesSelector(selector);
        } else if (elem.mozMatchesSelector !== undefined) {
          return elem.mozMatchesSelector(selector);
        } else {
          throw new Error('Browser lacks native selectors');
        }
      }
    };
    var bypassSelector = function (dom) {
      return dom.nodeType !== ELEMENT$1 && dom.nodeType !== DOCUMENT$1 || dom.childElementCount === 0;
    };
    var all = function (selector, scope) {
      var base = scope === undefined ? domGlobals.document : scope.dom();
      return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), Element.fromDom);
    };
    var one = function (selector, scope) {
      var base = scope === undefined ? domGlobals.document : scope.dom();
      return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(Element.fromDom);
    };

    var eq = function (e1, e2) {
      return e1.dom() === e2.dom();
    };
    var regularContains = function (e1, e2) {
      var d1 = e1.dom();
      var d2 = e2.dom();
      return d1 === d2 ? false : d1.contains(d2);
    };
    var ieContains = function (e1, e2) {
      return Node.documentPositionContainedBy(e1.dom(), e2.dom());
    };
    var browser = PlatformDetection$1.detect().browser;
    var contains$2 = browser.isIE() ? ieContains : regularContains;
    var is$1 = is;

    var owner = function (element) {
      return Element.fromDom(element.dom().ownerDocument);
    };
    var defaultView = function (element) {
      return Element.fromDom(element.dom().ownerDocument.defaultView);
    };
    var parent = function (element) {
      return Option.from(element.dom().parentNode).map(Element.fromDom);
    };
    var parents = function (element, isRoot) {
      var stop = isFunction(isRoot) ? isRoot : never;
      var dom = element.dom();
      var ret = [];
      while (dom.parentNode !== null && dom.parentNode !== undefined) {
        var rawParent = dom.parentNode;
        var p = Element.fromDom(rawParent);
        ret.push(p);
        if (stop(p) === true) {
          break;
        } else {
          dom = rawParent;
        }
      }
      return ret;
    };
    var prevSibling = function (element) {
      return Option.from(element.dom().previousSibling).map(Element.fromDom);
    };
    var nextSibling = function (element) {
      return Option.from(element.dom().nextSibling).map(Element.fromDom);
    };
    var children = function (element) {
      return map(element.dom().childNodes, Element.fromDom);
    };
    var child = function (element, index) {
      var cs = element.dom().childNodes;
      return Option.from(cs[index]).map(Element.fromDom);
    };
    var firstChild = function (element) {
      return child(element, 0);
    };
    var spot = Immutable('element', 'offset');

    var before = function (marker, element) {
      var parent$1 = parent(marker);
      parent$1.each(function (v) {
        v.dom().insertBefore(element.dom(), marker.dom());
      });
    };
    var after = function (marker, element) {
      var sibling = nextSibling(marker);
      sibling.fold(function () {
        var parent$1 = parent(marker);
        parent$1.each(function (v) {
          append(v, element);
        });
      }, function (v) {
        before(v, element);
      });
    };
    var prepend = function (parent, element) {
      var firstChild$1 = firstChild(parent);
      firstChild$1.fold(function () {
        append(parent, element);
      }, function (v) {
        parent.dom().insertBefore(element.dom(), v.dom());
      });
    };
    var append = function (parent, element) {
      parent.dom().appendChild(element.dom());
    };
    var wrap = function (element, wrapper) {
      before(element, wrapper);
      append(wrapper, element);
    };

    var before$1 = function (marker, elements) {
      each(elements, function (x) {
        before(marker, x);
      });
    };
    var after$1 = function (marker, elements) {
      each(elements, function (x, i) {
        var e = i === 0 ? marker : elements[i - 1];
        after(e, x);
      });
    };
    var append$1 = function (parent, elements) {
      each(elements, function (x) {
        append(parent, x);
      });
    };

    var empty = function (element) {
      element.dom().textContent = '';
      each(children(element), function (rogue) {
        remove$2(rogue);
      });
    };
    var remove$2 = function (element) {
      var dom = element.dom();
      if (dom.parentNode !== null) {
        dom.parentNode.removeChild(dom);
      }
    };
    var unwrap = function (wrapper) {
      var children$1 = children(wrapper);
      if (children$1.length > 0) {
        before$1(wrapper, children$1);
      }
      remove$2(wrapper);
    };

    var dimension = Immutable('width', 'height');
    var dimensions = Immutable('width', 'height');
    var grid = Immutable('rows', 'columns');
    var address = Immutable('row', 'column');
    var coords = Immutable('x', 'y');
    var detail = Immutable('element', 'rowspan', 'colspan');
    var detailnew = Immutable('element', 'rowspan', 'colspan', 'isNew');
    var extended = Immutable('element', 'rowspan', 'colspan', 'row', 'column');
    var rowdata = Immutable('element', 'cells', 'section');
    var elementnew = Immutable('element', 'isNew');
    var rowdatanew = Immutable('element', 'cells', 'section', 'isNew');
    var rowcells = Immutable('cells', 'section');
    var rowdetails = Immutable('details', 'section');
    var bounds = Immutable('startRow', 'startCol', 'finishRow', 'finishCol');

    var ancestors = function (scope, predicate, isRoot) {
      return filter(parents(scope, isRoot), predicate);
    };
    var children$1 = function (scope, predicate) {
      return filter(children(scope), predicate);
    };
    var descendants = function (scope, predicate) {
      var result = [];
      each(children(scope), function (x) {
        if (predicate(x)) {
          result = result.concat([x]);
        }
        result = result.concat(descendants(x, predicate));
      });
      return result;
    };

    var ancestors$1 = function (scope, selector, isRoot) {
      return ancestors(scope, function (e) {
        return is(e, selector);
      }, isRoot);
    };
    var children$2 = function (scope, selector) {
      return children$1(scope, function (e) {
        return is(e, selector);
      });
    };
    var descendants$1 = function (scope, selector) {
      return all(selector, scope);
    };

    function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
      return is(scope, a) ? Option.some(scope) : isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
    }

    var ancestor = function (scope, predicate, isRoot) {
      var element = scope.dom();
      var stop = isFunction(isRoot) ? isRoot : constant(false);
      while (element.parentNode) {
        element = element.parentNode;
        var el = Element.fromDom(element);
        if (predicate(el)) {
          return Option.some(el);
        } else if (stop(el)) {
          break;
        }
      }
      return Option.none();
    };
    var closest = function (scope, predicate, isRoot) {
      var is = function (s, test) {
        return test(s);
      };
      return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
    };
    var child$1 = function (scope, predicate) {
      var pred = function (node) {
        return predicate(Element.fromDom(node));
      };
      var result = find(scope.dom().childNodes, pred);
      return result.map(Element.fromDom);
    };
    var descendant = function (scope, predicate) {
      var descend = function (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var child_1 = Element.fromDom(node.childNodes[i]);
          if (predicate(child_1)) {
            return Option.some(child_1);
          }
          var res = descend(node.childNodes[i]);
          if (res.isSome()) {
            return res;
          }
        }
        return Option.none();
      };
      return descend(scope.dom());
    };

    var ancestor$1 = function (scope, selector, isRoot) {
      return ancestor(scope, function (e) {
        return is(e, selector);
      }, isRoot);
    };
    var child$2 = function (scope, selector) {
      return child$1(scope, function (e) {
        return is(e, selector);
      });
    };
    var descendant$1 = function (scope, selector) {
      return one(selector, scope);
    };
    var closest$1 = function (scope, selector, isRoot) {
      return ClosestOrAncestor(is, ancestor$1, scope, selector, isRoot);
    };

    var firstLayer = function (scope, selector) {
      return filterFirstLayer(scope, selector, constant(true));
    };
    var filterFirstLayer = function (scope, selector, predicate) {
      return bind(children(scope), function (x) {
        return is(x, selector) ? predicate(x) ? [x] : [] : filterFirstLayer(x, selector, predicate);
      });
    };
    var LayerSelector = {
      firstLayer: firstLayer,
      filterFirstLayer: filterFirstLayer
    };

    var lookup = function (tags, element, isRoot) {
      if (isRoot === void 0) {
        isRoot = never;
      }
      if (isRoot(element)) {
        return Option.none();
      }
      if (contains(tags, name(element))) {
        return Option.some(element);
      }
      var isRootOrUpperTable = function (elm) {
        return is(elm, 'table') || isRoot(elm);
      };
      return ancestor$1(element, tags.join(','), isRootOrUpperTable);
    };
    var cell = function (element, isRoot) {
      return lookup([
        'td',
        'th'
      ], element, isRoot);
    };
    var cells = function (ancestor) {
      return LayerSelector.firstLayer(ancestor, 'th,td');
    };
    var notCell = function (element, isRoot) {
      return lookup([
        'caption',
        'tr',
        'tbody',
        'tfoot',
        'thead'
      ], element, isRoot);
    };
    var neighbours = function (selector, element) {
      return parent(element).map(function (parent) {
        return children$2(parent, selector);
      });
    };
    var neighbourCells = curry(neighbours, 'th,td');
    var neighbourRows = curry(neighbours, 'tr');
    var firstCell = function (ancestor) {
      return descendant$1(ancestor, 'th,td');
    };
    var table = function (element, isRoot) {
      return closest$1(element, 'table', isRoot);
    };
    var row = function (element, isRoot) {
      return lookup(['tr'], element, isRoot);
    };
    var rows = function (ancestor) {
      return LayerSelector.firstLayer(ancestor, 'tr');
    };
    var attr = function (element, property) {
      return parseInt(get(element, property), 10);
    };
    var grid$1 = function (element, rowProp, colProp) {
      var rowsCount = attr(element, rowProp);
      var cols = attr(element, colProp);
      return grid(rowsCount, cols);
    };
    var TableLookup = {
      cell: cell,
      firstCell: firstCell,
      cells: cells,
      neighbourCells: neighbourCells,
      table: table,
      row: row,
      rows: rows,
      notCell: notCell,
      neighbourRows: neighbourRows,
      attr: attr,
      grid: grid$1
    };

    var fromTable = function (table) {
      var rows = TableLookup.rows(table);
      return map(rows, function (row) {
        var element = row;
        var parent$1 = parent(element);
        var parentSection = parent$1.map(function (p) {
          var parentName = name(p);
          return parentName === 'tfoot' || parentName === 'thead' || parentName === 'tbody' ? parentName : 'tbody';
        }).getOr('tbody');
        var cells = map(TableLookup.cells(row), function (cell) {
          var rowspan = has(cell, 'rowspan') ? parseInt(get(cell, 'rowspan'), 10) : 1;
          var colspan = has(cell, 'colspan') ? parseInt(get(cell, 'colspan'), 10) : 1;
          return detail(cell, rowspan, colspan);
        });
        return rowdata(element, cells, parentSection);
      });
    };
    var fromPastedRows = function (rows, example) {
      return map(rows, function (row) {
        var cells = map(TableLookup.cells(row), function (cell) {
          var rowspan = has(cell, 'rowspan') ? parseInt(get(cell, 'rowspan'), 10) : 1;
          var colspan = has(cell, 'colspan') ? parseInt(get(cell, 'colspan'), 10) : 1;
          return detail(cell, rowspan, colspan);
        });
        return rowdata(row, cells, example.section());
      });
    };
    var DetailsList = {
      fromTable: fromTable,
      fromPastedRows: fromPastedRows
    };

    var key = function (row, column) {
      return row + ',' + column;
    };
    var getAt = function (warehouse, row, column) {
      var raw = warehouse.access()[key(row, column)];
      return raw !== undefined ? Option.some(raw) : Option.none();
    };
    var findItem = function (warehouse, item, comparator) {
      var filtered = filterItems(warehouse, function (detail) {
        return comparator(item, detail.element());
      });
      return filtered.length > 0 ? Option.some(filtered[0]) : Option.none();
    };
    var filterItems = function (warehouse, predicate) {
      var all = bind(warehouse.all(), function (r) {
        return r.cells();
      });
      return filter(all, predicate);
    };
    var generate = function (list) {
      var access = {};
      var cells = [];
      var maxRows = list.length;
      var maxColumns = 0;
      each(list, function (details, r) {
        var currentRow = [];
        each(details.cells(), function (detail) {
          var start = 0;
          while (access[key(r, start)] !== undefined) {
            start++;
          }
          var current = extended(detail.element(), detail.rowspan(), detail.colspan(), r, start);
          for (var i = 0; i < detail.colspan(); i++) {
            for (var j = 0; j < detail.rowspan(); j++) {
              var cr = r + j;
              var cc = start + i;
              var newpos = key(cr, cc);
              access[newpos] = current;
              maxColumns = Math.max(maxColumns, cc + 1);
            }
          }
          currentRow.push(current);
        });
        cells.push(rowdata(details.element(), currentRow, details.section()));
      });
      var grid$1 = grid(maxRows, maxColumns);
      return {
        grid: constant(grid$1),
        access: constant(access),
        all: constant(cells)
      };
    };
    var justCells = function (warehouse) {
      var rows = map(warehouse.all(), function (w) {
        return w.cells();
      });
      return flatten(rows);
    };
    var Warehouse = {
      generate: generate,
      getAt: getAt,
      findItem: findItem,
      filterItems: filterItems,
      justCells: justCells
    };

    var statsStruct = Immutable('minRow', 'minCol', 'maxRow', 'maxCol');
    var findSelectedStats = function (house, isSelected) {
      var totalColumns = house.grid().columns();
      var totalRows = house.grid().rows();
      var minRow = totalRows;
      var minCol = totalColumns;
      var maxRow = 0;
      var maxCol = 0;
      each$1(house.access(), function (detail) {
        if (isSelected(detail)) {
          var startRow = detail.row();
          var endRow = startRow + detail.rowspan() - 1;
          var startCol = detail.column();
          var endCol = startCol + detail.colspan() - 1;
          if (startRow < minRow) {
            minRow = startRow;
          } else if (endRow > maxRow) {
            maxRow = endRow;
          }
          if (startCol < minCol) {
            minCol = startCol;
          } else if (endCol > maxCol) {
            maxCol = endCol;
          }
        }
      });
      return statsStruct(minRow, minCol, maxRow, maxCol);
    };
    var makeCell = function (list, seenSelected, rowIndex) {
      var row = list[rowIndex].element();
      var td = Element.fromTag('td');
      append(td, Element.fromTag('br'));
      var f = seenSelected ? append : prepend;
      f(row, td);
    };
    var fillInGaps = function (list, house, stats, isSelected) {
      var totalColumns = house.grid().columns();
      var totalRows = house.grid().rows();
      for (var i = 0; i < totalRows; i++) {
        var seenSelected = false;
        for (var j = 0; j < totalColumns; j++) {
          if (!(i < stats.minRow() || i > stats.maxRow() || j < stats.minCol() || j > stats.maxCol())) {
            var needCell = Warehouse.getAt(house, i, j).filter(isSelected).isNone();
            if (needCell) {
              makeCell(list, seenSelected, i);
            } else {
              seenSelected = true;
            }
          }
        }
      }
    };
    var clean = function (table, stats) {
      var emptyRows = filter(LayerSelector.firstLayer(table, 'tr'), function (row) {
        return row.dom().childElementCount === 0;
      });
      each(emptyRows, remove$2);
      if (stats.minCol() === stats.maxCol() || stats.minRow() === stats.maxRow()) {
        each(LayerSelector.firstLayer(table, 'th,td'), function (cell) {
          remove(cell, 'rowspan');
          remove(cell, 'colspan');
        });
      }
      remove(table, 'width');
      remove(table, 'height');
      remove$1(table, 'width');
      remove$1(table, 'height');
    };
    var extract = function (table, selectedSelector) {
      var isSelected = function (detail) {
        return is(detail.element(), selectedSelector);
      };
      var list = DetailsList.fromTable(table);
      var house = Warehouse.generate(list);
      var stats = findSelectedStats(house, isSelected);
      var selector = 'th:not(' + selectedSelector + ')' + ',td:not(' + selectedSelector + ')';
      var unselectedCells = LayerSelector.filterFirstLayer(table, 'th,td', function (cell) {
        return is(cell, selector);
      });
      each(unselectedCells, remove$2);
      fillInGaps(list, house, stats, isSelected);
      clean(table, stats);
      return table;
    };
    var CopySelected = { extract: extract };

    function NodeValue (is, name) {
      var get = function (element) {
        if (!is(element)) {
          throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
        }
        return getOption(element).getOr('');
      };
      var getOption = function (element) {
        return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
      };
      var set = function (element, value) {
        if (!is(element)) {
          throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
        }
        element.dom().nodeValue = value;
      };
      return {
        get: get,
        getOption: getOption,
        set: set
      };
    }

    var api = NodeValue(isText, 'text');
    var get$2 = function (element) {
      return api.get(element);
    };
    var getOption = function (element) {
      return api.getOption(element);
    };
    var set$2 = function (element, value) {
      api.set(element, value);
    };

    var getEnd = function (element) {
      return name(element) === 'img' ? 1 : getOption(element).fold(function () {
        return children(element).length;
      }, function (v) {
        return v.length;
      });
    };
    var NBSP = '\xA0';
    var isTextNodeWithCursorPosition = function (el) {
      return getOption(el).filter(function (text) {
        return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
      }).isSome();
    };
    var elementsWithCursorPosition = [
      'img',
      'br'
    ];
    var isCursorPosition = function (elem) {
      var hasCursorPosition = isTextNodeWithCursorPosition(elem);
      return hasCursorPosition || contains(elementsWithCursorPosition, name(elem));
    };

    var first = function (element) {
      return descendant(element, isCursorPosition);
    };
    var last$1 = function (element) {
      return descendantRtl(element, isCursorPosition);
    };
    var descendantRtl = function (scope, predicate) {
      var descend = function (element) {
        var children$1 = children(element);
        for (var i = children$1.length - 1; i >= 0; i--) {
          var child = children$1[i];
          if (predicate(child)) {
            return Option.some(child);
          }
          var res = descend(child);
          if (res.isSome()) {
            return res;
          }
        }
        return Option.none();
      };
      return descend(scope);
    };

    var clone$1 = function (original, isDeep) {
      return Element.fromDom(original.dom().cloneNode(isDeep));
    };
    var shallow = function (original) {
      return clone$1(original, false);
    };
    var deep = function (original) {
      return clone$1(original, true);
    };
    var shallowAs = function (original, tag) {
      var nu = Element.fromTag(tag);
      var attributes = clone(original);
      setAll(nu, attributes);
      return nu;
    };
    var copy$1 = function (original, tag) {
      var nu = shallowAs(original, tag);
      var cloneChildren = children(deep(original));
      append$1(nu, cloneChildren);
      return nu;
    };

    var createCell = function () {
      var td = Element.fromTag('td');
      append(td, Element.fromTag('br'));
      return td;
    };
    var replace = function (cell, tag, attrs) {
      var replica = copy$1(cell, tag);
      each$1(attrs, function (v, k) {
        if (v === null) {
          remove(replica, k);
        } else {
          set(replica, k, v);
        }
      });
      return replica;
    };
    var pasteReplace = function (cell) {
      return cell;
    };
    var newRow = function (doc) {
      return function () {
        return Element.fromTag('tr', doc.dom());
      };
    };
    var cloneFormats = function (oldCell, newCell, formats) {
      var first$1 = first(oldCell);
      return first$1.map(function (firstText) {
        var formatSelector = formats.join(',');
        var parents = ancestors$1(firstText, formatSelector, function (element) {
          return eq(element, oldCell);
        });
        return foldr(parents, function (last, parent) {
          var clonedFormat = shallow(parent);
          remove(clonedFormat, 'contenteditable');
          append(last, clonedFormat);
          return clonedFormat;
        }, newCell);
      }).getOr(newCell);
    };
    var cellOperations = function (mutate, doc, formatsToClone) {
      var newCell = function (prev) {
        var docu = owner(prev.element());
        var td = Element.fromTag(name(prev.element()), docu.dom());
        var formats = formatsToClone.getOr([
          'strong',
          'em',
          'b',
          'i',
          'span',
          'font',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'div'
        ]);
        var lastNode = formats.length > 0 ? cloneFormats(prev.element(), td, formats) : td;
        append(lastNode, Element.fromTag('br'));
        copy(prev.element(), td);
        remove$1(td, 'height');
        if (prev.colspan() !== 1) {
          remove$1(prev.element(), 'width');
        }
        mutate(prev.element(), td);
        return td;
      };
      return {
        row: newRow(doc),
        cell: newCell,
        replace: replace,
        gap: createCell
      };
    };
    var paste = function (doc) {
      return {
        row: newRow(doc),
        cell: createCell,
        replace: pasteReplace,
        gap: createCell
      };
    };
    var TableFill = {
      cellOperations: cellOperations,
      paste: paste
    };

    var fromHtml$1 = function (html, scope) {
      var doc = scope || domGlobals.document;
      var div = doc.createElement('div');
      div.innerHTML = html;
      return children(Element.fromDom(div));
    };

    var inSelection = function (bounds, detail) {
      var leftEdge = detail.column();
      var rightEdge = detail.column() + detail.colspan() - 1;
      var topEdge = detail.row();
      var bottomEdge = detail.row() + detail.rowspan() - 1;
      return leftEdge <= bounds.finishCol() && rightEdge >= bounds.startCol() && (topEdge <= bounds.finishRow() && bottomEdge >= bounds.startRow());
    };
    var isWithin = function (bounds, detail) {
      return detail.column() >= bounds.startCol() && detail.column() + detail.colspan() - 1 <= bounds.finishCol() && detail.row() >= bounds.startRow() && detail.row() + detail.rowspan() - 1 <= bounds.finishRow();
    };
    var isRectangular = function (warehouse, bounds) {
      var isRect = true;
      var detailIsWithin = curry(isWithin, bounds);
      for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
        for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
          isRect = isRect && Warehouse.getAt(warehouse, i, j).exists(detailIsWithin);
        }
      }
      return isRect ? Option.some(bounds) : Option.none();
    };
    var CellBounds = {
      inSelection: inSelection,
      isWithin: isWithin,
      isRectangular: isRectangular
    };

    var getBounds = function (detailA, detailB) {
      return bounds(Math.min(detailA.row(), detailB.row()), Math.min(detailA.column(), detailB.column()), Math.max(detailA.row() + detailA.rowspan() - 1, detailB.row() + detailB.rowspan() - 1), Math.max(detailA.column() + detailA.colspan() - 1, detailB.column() + detailB.colspan() - 1));
    };
    var getAnyBox = function (warehouse, startCell, finishCell) {
      var startCoords = Warehouse.findItem(warehouse, startCell, eq);
      var finishCoords = Warehouse.findItem(warehouse, finishCell, eq);
      return startCoords.bind(function (sc) {
        return finishCoords.map(function (fc) {
          return getBounds(sc, fc);
        });
      });
    };
    var getBox = function (warehouse, startCell, finishCell) {
      return getAnyBox(warehouse, startCell, finishCell).bind(function (bounds) {
        return CellBounds.isRectangular(warehouse, bounds);
      });
    };
    var CellGroup = {
      getAnyBox: getAnyBox,
      getBox: getBox
    };

    var moveBy = function (warehouse, cell, row, column) {
      return Warehouse.findItem(warehouse, cell, eq).bind(function (detail) {
        var startRow = row > 0 ? detail.row() + detail.rowspan() - 1 : detail.row();
        var startCol = column > 0 ? detail.column() + detail.colspan() - 1 : detail.column();
        var dest = Warehouse.getAt(warehouse, startRow + row, startCol + column);
        return dest.map(function (d) {
          return d.element();
        });
      });
    };
    var intercepts = function (warehouse, start, finish) {
      return CellGroup.getAnyBox(warehouse, start, finish).map(function (bounds) {
        var inside = Warehouse.filterItems(warehouse, curry(CellBounds.inSelection, bounds));
        return map(inside, function (detail) {
          return detail.element();
        });
      });
    };
    var parentCell = function (warehouse, innerCell) {
      var isContainedBy = function (c1, c2) {
        return contains$2(c2, c1);
      };
      return Warehouse.findItem(warehouse, innerCell, isContainedBy).map(function (detail) {
        return detail.element();
      });
    };
    var CellFinder = {
      moveBy: moveBy,
      intercepts: intercepts,
      parentCell: parentCell
    };

    var moveBy$1 = function (cell, deltaRow, deltaColumn) {
      return TableLookup.table(cell).bind(function (table) {
        var warehouse = getWarehouse(table);
        return CellFinder.moveBy(warehouse, cell, deltaRow, deltaColumn);
      });
    };
    var intercepts$1 = function (table, first, last) {
      var warehouse = getWarehouse(table);
      return CellFinder.intercepts(warehouse, first, last);
    };
    var nestedIntercepts = function (table, first, firstTable, last, lastTable) {
      var warehouse = getWarehouse(table);
      var optStartCell = eq(table, firstTable) ? Option.some(first) : CellFinder.parentCell(warehouse, first);
      var optLastCell = eq(table, lastTable) ? Option.some(last) : CellFinder.parentCell(warehouse, last);
      return optStartCell.bind(function (startCell) {
        return optLastCell.bind(function (lastCell) {
          return CellFinder.intercepts(warehouse, startCell, lastCell);
        });
      });
    };
    var getBox$1 = function (table, first, last) {
      var warehouse = getWarehouse(table);
      return CellGroup.getBox(warehouse, first, last);
    };
    var getWarehouse = function (table) {
      var list = DetailsList.fromTable(table);
      return Warehouse.generate(list);
    };
    var TablePositions = {
      moveBy: moveBy$1,
      intercepts: intercepts$1,
      nestedIntercepts: nestedIntercepts,
      getBox: getBox$1
    };

    var TagBoundaries = [
      'body',
      'p',
      'div',
      'article',
      'aside',
      'figcaption',
      'figure',
      'footer',
      'header',
      'nav',
      'section',
      'ol',
      'ul',
      'li',
      'table',
      'thead',
      'tbody',
      'tfoot',
      'caption',
      'tr',
      'td',
      'th',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'pre',
      'address'
    ];

    function DomUniverse () {
      var clone$1 = function (element) {
        return Element.fromDom(element.dom().cloneNode(false));
      };
      var document = function (element) {
        return element.dom().ownerDocument;
      };
      var isBoundary = function (element) {
        if (!isElement(element)) {
          return false;
        }
        if (name(element) === 'body') {
          return true;
        }
        return contains(TagBoundaries, name(element));
      };
      var isEmptyTag = function (element) {
        if (!isElement(element)) {
          return false;
        }
        return contains([
          'br',
          'img',
          'hr',
          'input'
        ], name(element));
      };
      var comparePosition = function (element, other) {
        return element.dom().compareDocumentPosition(other.dom());
      };
      var copyAttributesTo = function (source, destination) {
        var as = clone(source);
        setAll(destination, as);
      };
      return {
        up: constant({
          selector: ancestor$1,
          closest: closest$1,
          predicate: ancestor,
          all: parents
        }),
        down: constant({
          selector: descendants$1,
          predicate: descendants
        }),
        styles: constant({
          get: get$1,
          getRaw: getRaw,
          set: set$1,
          remove: remove$1
        }),
        attrs: constant({
          get: get,
          set: set,
          remove: remove,
          copyTo: copyAttributesTo
        }),
        insert: constant({
          before: before,
          after: after,
          afterAll: after$1,
          append: append,
          appendAll: append$1,
          prepend: prepend,
          wrap: wrap
        }),
        remove: constant({
          unwrap: unwrap,
          remove: remove$2
        }),
        create: constant({
          nu: Element.fromTag,
          clone: clone$1,
          text: Element.fromText
        }),
        query: constant({
          comparePosition: comparePosition,
          prevSibling: prevSibling,
          nextSibling: nextSibling
        }),
        property: constant({
          children: children,
          name: name,
          parent: parent,
          document: document,
          isText: isText,
          isComment: isComment,
          isElement: isElement,
          getText: get$2,
          setText: set$2,
          isBoundary: isBoundary,
          isEmptyTag: isEmptyTag
        }),
        eq: eq,
        is: is$1
      };
    }

    var leftRight = Immutable('left', 'right');
    var brokenPath = Immutable('first', 'second', 'splits');
    var bisect = function (universe, parent, child) {
      var children = universe.property().children(parent);
      var index = findIndex(children, curry(universe.eq, child));
      return index.map(function (ind) {
        return {
          before: constant(children.slice(0, ind)),
          after: constant(children.slice(ind + 1))
        };
      });
    };
    var breakToRight = function (universe, parent, child) {
      return bisect(universe, parent, child).map(function (parts) {
        var second = universe.create().clone(parent);
        universe.insert().appendAll(second, parts.after());
        universe.insert().after(parent, second);
        return leftRight(parent, second);
      });
    };
    var breakToLeft = function (universe, parent, child) {
      return bisect(universe, parent, child).map(function (parts) {
        var prior = universe.create().clone(parent);
        universe.insert().appendAll(prior, parts.before().concat([child]));
        universe.insert().appendAll(parent, parts.after());
        universe.insert().before(parent, prior);
        return leftRight(prior, parent);
      });
    };
    var breakPath = function (universe, item, isTop, breaker) {
      var next = function (child, group, splits) {
        var fallback = brokenPath(child, Option.none(), splits);
        if (isTop(child)) {
          return brokenPath(child, group, splits);
        } else {
          return universe.property().parent(child).bind(function (parent) {
            return breaker(universe, parent, child).map(function (breakage) {
              var extra = [{
                  first: breakage.left,
                  second: breakage.right
                }];
              var nextChild = isTop(parent) ? parent : breakage.left();
              return next(nextChild, Option.some(breakage.right()), splits.concat(extra));
            });
          }).getOr(fallback);
        }
      };
      return next(item, Option.none(), []);
    };

    var all$1 = function (universe, look, elements, f) {
      var head = elements[0];
      var tail = elements.slice(1);
      return f(universe, look, head, tail);
    };
    var oneAll = function (universe, look, elements) {
      return elements.length > 0 ? all$1(universe, look, elements, unsafeOne) : Option.none();
    };
    var unsafeOne = function (universe, look, head, tail) {
      var start = look(universe, head);
      return foldr(tail, function (b, a) {
        var current = look(universe, a);
        return commonElement(universe, b, current);
      }, start);
    };
    var commonElement = function (universe, start, end) {
      return start.bind(function (s) {
        return end.filter(curry(universe.eq, s));
      });
    };

    var eq$1 = function (universe, item) {
      return curry(universe.eq, item);
    };
    var unsafeSubset = function (universe, common, ps1, ps2) {
      var children = universe.property().children(common);
      if (universe.eq(common, ps1[0])) {
        return Option.some([ps1[0]]);
      }
      if (universe.eq(common, ps2[0])) {
        return Option.some([ps2[0]]);
      }
      var finder = function (ps) {
        var topDown = reverse(ps);
        var index = findIndex(topDown, eq$1(universe, common)).getOr(-1);
        var item = index < topDown.length - 1 ? topDown[index + 1] : topDown[index];
        return findIndex(children, eq$1(universe, item));
      };
      var startIndex = finder(ps1);
      var endIndex = finder(ps2);
      return startIndex.bind(function (sIndex) {
        return endIndex.map(function (eIndex) {
          var first = Math.min(sIndex, eIndex);
          var last = Math.max(sIndex, eIndex);
          return children.slice(first, last + 1);
        });
      });
    };
    var ancestors$2 = function (universe, start, end, isRoot) {
      if (isRoot === void 0) {
        isRoot = never;
      }
      var ps1 = [start].concat(universe.up().all(start));
      var ps2 = [end].concat(universe.up().all(end));
      var prune = function (path) {
        var index = findIndex(path, isRoot);
        return index.fold(function () {
          return path;
        }, function (ind) {
          return path.slice(0, ind + 1);
        });
      };
      var pruned1 = prune(ps1);
      var pruned2 = prune(ps2);
      var shared = find(pruned1, function (x) {
        return exists(pruned2, eq$1(universe, x));
      });
      return {
        firstpath: constant(pruned1),
        secondpath: constant(pruned2),
        shared: constant(shared)
      };
    };
    var subset = function (universe, start, end) {
      var ancs = ancestors$2(universe, start, end);
      return ancs.shared().bind(function (shared) {
        return unsafeSubset(universe, shared, ancs.firstpath(), ancs.secondpath());
      });
    };
    var SubsetFn = {
      subset: subset,
      ancestors: ancestors$2
    };

    var sharedOne = oneAll;
    var subset$1 = SubsetFn.subset;
    var ancestors$3 = SubsetFn.ancestors;
    var breakToLeft$1 = breakToLeft;
    var breakToRight$1 = breakToRight;
    var breakPath$1 = breakPath;
    var Parent = {
      sharedOne: sharedOne,
      subset: subset$1,
      ancestors: ancestors$3,
      breakToLeft: breakToLeft$1,
      breakToRight: breakToRight$1,
      breakPath: breakPath$1
    };

    var universe = DomUniverse();
    var sharedOne$1 = function (look, elements) {
      return Parent.sharedOne(universe, function (_universe, element) {
        return look(element);
      }, elements);
    };
    var subset$2 = function (start, finish) {
      return Parent.subset(universe, start, finish);
    };
    var ancestors$4 = function (start, finish, isRoot) {
      return Parent.ancestors(universe, start, finish, isRoot);
    };
    var breakToLeft$2 = function (parent, child) {
      return Parent.breakToLeft(universe, parent, child);
    };
    var breakToRight$2 = function (parent, child) {
      return Parent.breakToRight(universe, parent, child);
    };
    var breakPath$2 = function (child, isTop, breaker) {
      return Parent.breakPath(universe, child, isTop, function (u, p, c) {
        return breaker(p, c);
      });
    };
    var DomParent = {
      sharedOne: sharedOne$1,
      subset: subset$2,
      ancestors: ancestors$4,
      breakToLeft: breakToLeft$2,
      breakToRight: breakToRight$2,
      breakPath: breakPath$2
    };

    var create = MixedBag([
      'boxes',
      'start',
      'finish'
    ], []);
    var Identified = { create: create };

    var lookupTable = function (container) {
      return ancestor$1(container, 'table');
    };
    var identify = function (start, finish, isRoot) {
      var getIsRoot = function (rootTable) {
        return function (element) {
          return isRoot !== undefined && isRoot(element) || eq(element, rootTable);
        };
      };
      if (eq(start, finish)) {
        return Option.some(Identified.create({
          boxes: Option.some([start]),
          start: start,
          finish: finish
        }));
      } else {
        return lookupTable(start).bind(function (startTable) {
          return lookupTable(finish).bind(function (finishTable) {
            if (eq(startTable, finishTable)) {
              return Option.some(Identified.create({
                boxes: TablePositions.intercepts(startTable, start, finish),
                start: start,
                finish: finish
              }));
            } else if (contains$2(startTable, finishTable)) {
              var ancestorCells = ancestors$1(finish, 'td,th', getIsRoot(startTable));
              var finishCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : finish;
              return Option.some(Identified.create({
                boxes: TablePositions.nestedIntercepts(startTable, start, startTable, finish, finishTable),
                start: start,
                finish: finishCell
              }));
            } else if (contains$2(finishTable, startTable)) {
              var ancestorCells = ancestors$1(start, 'td,th', getIsRoot(finishTable));
              var startCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : start;
              return Option.some(Identified.create({
                boxes: TablePositions.nestedIntercepts(finishTable, start, startTable, finish, finishTable),
                start: start,
                finish: startCell
              }));
            } else {
              return DomParent.ancestors(start, finish).shared().bind(function (lca) {
                return closest$1(lca, 'table', isRoot).bind(function (lcaTable) {
                  var finishAncestorCells = ancestors$1(finish, 'td,th', getIsRoot(lcaTable));
                  var finishCell = finishAncestorCells.length > 0 ? finishAncestorCells[finishAncestorCells.length - 1] : finish;
                  var startAncestorCells = ancestors$1(start, 'td,th', getIsRoot(lcaTable));
                  var startCell = startAncestorCells.length > 0 ? startAncestorCells[startAncestorCells.length - 1] : start;
                  return Option.some(Identified.create({
                    boxes: TablePositions.nestedIntercepts(lcaTable, start, startTable, finish, finishTable),
                    start: startCell,
                    finish: finishCell
                  }));
                });
              });
            }
          });
        });
      }
    };
    var retrieve = function (container, selector) {
      var sels = descendants$1(container, selector);
      return sels.length > 0 ? Option.some(sels) : Option.none();
    };
    var getLast = function (boxes, lastSelectedSelector) {
      return find(boxes, function (box) {
        return is(box, lastSelectedSelector);
      });
    };
    var getEdges = function (container, firstSelectedSelector, lastSelectedSelector) {
      return descendant$1(container, firstSelectedSelector).bind(function (first) {
        return descendant$1(container, lastSelectedSelector).bind(function (last) {
          return DomParent.sharedOne(lookupTable, [
            first,
            last
          ]).map(function (tbl) {
            return {
              first: constant(first),
              last: constant(last),
              table: constant(tbl)
            };
          });
        });
      });
    };
    var expandTo = function (finish, firstSelectedSelector) {
      return ancestor$1(finish, 'table').bind(function (table) {
        return descendant$1(table, firstSelectedSelector).bind(function (start) {
          return identify(start, finish).bind(function (identified) {
            return identified.boxes().map(function (boxes) {
              return {
                boxes: constant(boxes),
                start: constant(identified.start()),
                finish: constant(identified.finish())
              };
            });
          });
        });
      });
    };
    var shiftSelection = function (boxes, deltaRow, deltaColumn, firstSelectedSelector, lastSelectedSelector) {
      return getLast(boxes, lastSelectedSelector).bind(function (last) {
        return TablePositions.moveBy(last, deltaRow, deltaColumn).bind(function (finish) {
          return expandTo(finish, firstSelectedSelector);
        });
      });
    };
    var CellSelection = {
      identify: identify,
      retrieve: retrieve,
      shiftSelection: shiftSelection,
      getEdges: getEdges
    };

    var retrieve$1 = function (container, selector) {
      return CellSelection.retrieve(container, selector);
    };
    var retrieveBox = function (container, firstSelectedSelector, lastSelectedSelector) {
      return CellSelection.getEdges(container, firstSelectedSelector, lastSelectedSelector).bind(function (edges) {
        var isRoot = function (ancestor) {
          return eq(container, ancestor);
        };
        var firstAncestor = ancestor$1(edges.first(), 'thead,tfoot,tbody,table', isRoot);
        var lastAncestor = ancestor$1(edges.last(), 'thead,tfoot,tbody,table', isRoot);
        return firstAncestor.bind(function (fA) {
          return lastAncestor.bind(function (lA) {
            return eq(fA, lA) ? TablePositions.getBox(edges.table(), edges.first(), edges.last()) : Option.none();
          });
        });
      });
    };
    var TableSelection = {
      retrieve: retrieve$1,
      retrieveBox: retrieveBox
    };

    var selected = 'data-mce-selected';
    var selectedSelector = 'td[' + selected + '],th[' + selected + ']';
    var attributeSelector = '[' + selected + ']';
    var firstSelected = 'data-mce-first-selected';
    var firstSelectedSelector = 'td[' + firstSelected + '],th[' + firstSelected + ']';
    var lastSelected = 'data-mce-last-selected';
    var lastSelectedSelector = 'td[' + lastSelected + '],th[' + lastSelected + ']';
    var Ephemera = {
      selected: constant(selected),
      selectedSelector: constant(selectedSelector),
      attributeSelector: constant(attributeSelector),
      firstSelected: constant(firstSelected),
      firstSelectedSelector: constant(firstSelectedSelector),
      lastSelected: constant(lastSelected),
      lastSelectedSelector: constant(lastSelectedSelector)
    };

    var generate$1 = function (cases) {
      if (!isArray(cases)) {
        throw new Error('cases must be an array');
      }
      if (cases.length === 0) {
        throw new Error('there must be at least one case');
      }
      var constructors = [];
      var adt = {};
      each(cases, function (acase, count) {
        var keys$1 = keys(acase);
        if (keys$1.length !== 1) {
          throw new Error('one and only one name per case');
        }
        var key = keys$1[0];
        var value = acase[key];
        if (adt[key] !== undefined) {
          throw new Error('duplicate key detected:' + key);
        } else if (key === 'cata') {
          throw new Error('cannot have a case named cata (sorry)');
        } else if (!isArray(value)) {
          throw new Error('case arguments must be an array');
        }
        constructors.push(key);
        adt[key] = function () {
          var argLength = arguments.length;
          if (argLength !== value.length) {
            throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
          }
          var args = new Array(argLength);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          var match = function (branches) {
            var branchKeys = keys(branches);
            if (constructors.length !== branchKeys.length) {
              throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
            }
            var allReqd = forall(constructors, function (reqKey) {
              return contains(branchKeys, reqKey);
            });
            if (!allReqd) {
              throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
            }
            return branches[key].apply(null, args);
          };
          return {
            fold: function () {
              if (arguments.length !== cases.length) {
                throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
              }
              var target = arguments[count];
              return target.apply(null, args);
            },
            match: match,
            log: function (label) {
              domGlobals.console.log(label, {
                constructors: constructors,
                constructor: key,
                params: args
              });
            }
          };
        };
      });
      return adt;
    };
    var Adt = { generate: generate$1 };

    var type$1 = Adt.generate([
      { none: [] },
      { multiple: ['elements'] },
      { single: ['selection'] }
    ]);
    var cata = function (subject, onNone, onMultiple, onSingle) {
      return subject.fold(onNone, onMultiple, onSingle);
    };
    var SelectionTypes = {
      cata: cata,
      none: type$1.none,
      multiple: type$1.multiple,
      single: type$1.single
    };

    var selection = function (cell, selections) {
      return SelectionTypes.cata(selections.get(), constant([]), identity, constant([cell]));
    };
    var unmergable = function (cell, selections) {
      var hasSpan = function (elem) {
        return has(elem, 'rowspan') && parseInt(get(elem, 'rowspan'), 10) > 1 || has(elem, 'colspan') && parseInt(get(elem, 'colspan'), 10) > 1;
      };
      var candidates = selection(cell, selections);
      return candidates.length > 0 && forall(candidates, hasSpan) ? Option.some(candidates) : Option.none();
    };
    var mergable = function (table, selections) {
      return SelectionTypes.cata(selections.get(), Option.none, function (cells, _env) {
        if (cells.length === 0) {
          return Option.none();
        }
        return TableSelection.retrieveBox(table, Ephemera.firstSelectedSelector(), Ephemera.lastSelectedSelector()).bind(function (bounds) {
          return cells.length > 1 ? Option.some({
            bounds: constant(bounds),
            cells: constant(cells)
          }) : Option.none();
        });
      }, Option.none);
    };
    var CellOperations = {
      mergable: mergable,
      unmergable: unmergable,
      selection: selection
    };

    var noMenu = function (cell) {
      return {
        element: constant(cell),
        mergable: Option.none,
        unmergable: Option.none,
        selection: constant([cell])
      };
    };
    var forMenu = function (selections, table, cell) {
      return {
        element: constant(cell),
        mergable: constant(CellOperations.mergable(table, selections)),
        unmergable: constant(CellOperations.unmergable(cell, selections)),
        selection: constant(CellOperations.selection(cell, selections))
      };
    };
    var notCell$1 = function (element) {
      return noMenu(element);
    };
    var paste$1 = Immutable('element', 'clipboard', 'generators');
    var pasteRows = function (selections, table, cell, clipboard, generators) {
      return {
        element: constant(cell),
        mergable: Option.none,
        unmergable: Option.none,
        selection: constant(CellOperations.selection(cell, selections)),
        clipboard: constant(clipboard),
        generators: constant(generators)
      };
    };
    var TableTargets = {
      noMenu: noMenu,
      forMenu: forMenu,
      notCell: notCell$1,
      paste: paste$1,
      pasteRows: pasteRows
    };

    var extractSelected = function (cells) {
      return TableLookup.table(cells[0]).map(deep).map(function (replica) {
        return [CopySelected.extract(replica, Ephemera.attributeSelector())];
      });
    };
    var serializeElements = function (editor, elements) {
      return map(elements, function (elm) {
        return editor.selection.serializer.serialize(elm.dom(), {});
      }).join('');
    };
    var getTextContent = function (elements) {
      return map(elements, function (element) {
        return element.dom().innerText;
      }).join('');
    };
    var registerEvents = function (editor, selections, actions, cellSelection) {
      editor.on('BeforeGetContent', function (e) {
        var multiCellContext = function (cells) {
          e.preventDefault();
          extractSelected(cells).each(function (elements) {
            e.content = e.format === 'text' ? getTextContent(elements) : serializeElements(editor, elements);
          });
        };
        if (e.selection === true) {
          SelectionTypes.cata(selections.get(), noop, multiCellContext, noop);
        }
      });
      editor.on('BeforeSetContent', function (e) {
        if (e.selection === true && e.paste === true) {
          var cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
          cellOpt.each(function (domCell) {
            var cell = Element.fromDom(domCell);
            TableLookup.table(cell).each(function (table) {
              var elements = filter(fromHtml$1(e.content), function (content) {
                return name(content) !== 'meta';
              });
              if (elements.length === 1 && name(elements[0]) === 'table') {
                e.preventDefault();
                var doc = Element.fromDom(editor.getDoc());
                var generators = TableFill.paste(doc);
                var targets = TableTargets.paste(cell, elements[0], generators);
                actions.pasteCells(table, targets).each(function (rng) {
                  editor.selection.setRng(rng);
                  editor.focus();
                  cellSelection.clear(table);
                });
              }
            });
          });
        }
      });
    };
    var Clipboard = { registerEvents: registerEvents };

    function Dimension (name, getOffset) {
      var set = function (element, h) {
        if (!isNumber(h) && !h.match(/^[0-9]+$/)) {
          throw new Error(name + '.set accepts only positive integer values. Value was ' + h);
        }
        var dom = element.dom();
        if (isSupported(dom)) {
          dom.style[name] = h + 'px';
        }
      };
      var get = function (element) {
        var r = getOffset(element);
        if (r <= 0 || r === null) {
          var css = get$1(element, name);
          return parseFloat(css) || 0;
        }
        return r;
      };
      var getOuter = get;
      var aggregate = function (element, properties) {
        return foldl(properties, function (acc, property) {
          var val = get$1(element, property);
          var value = val === undefined ? 0 : parseInt(val, 10);
          return isNaN(value) ? acc : acc + value;
        }, 0);
      };
      var max = function (element, value, properties) {
        var cumulativeInclusions = aggregate(element, properties);
        var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
        return absoluteMax;
      };
      return {
        set: set,
        get: get,
        getOuter: getOuter,
        aggregate: aggregate,
        max: max
      };
    }

    var api$1 = Dimension('height', function (element) {
      var dom = element.dom();
      return inBody(element) ? dom.getBoundingClientRect().height : dom.offsetHeight;
    });
    var get$3 = function (element) {
      return api$1.get(element);
    };
    var getOuter = function (element) {
      return api$1.getOuter(element);
    };

    var api$2 = Dimension('width', function (element) {
      return element.dom().offsetWidth;
    });
    var get$4 = function (element) {
      return api$2.get(element);
    };
    var getOuter$1 = function (element) {
      return api$2.getOuter(element);
    };

    var platform = PlatformDetection$1.detect();
    var needManualCalc = function () {
      return platform.browser.isIE() || platform.browser.isEdge();
    };
    var toNumber = function (px, fallback) {
      var num = parseFloat(px);
      return isNaN(num) ? fallback : num;
    };
    var getProp = function (elm, name, fallback) {
      return toNumber(get$1(elm, name), fallback);
    };
    var getCalculatedHeight = function (cell) {
      var paddingTop = getProp(cell, 'padding-top', 0);
      var paddingBottom = getProp(cell, 'padding-bottom', 0);
      var borderTop = getProp(cell, 'border-top-width', 0);
      var borderBottom = getProp(cell, 'border-bottom-width', 0);
      var height = cell.dom().getBoundingClientRect().height;
      var boxSizing = get$1(cell, 'box-sizing');
      var borders = borderTop + borderBottom;
      return boxSizing === 'border-box' ? height : height - paddingTop - paddingBottom - borders;
    };
    var getWidth = function (cell) {
      return getProp(cell, 'width', get$4(cell));
    };
    var getHeight = function (cell) {
      return needManualCalc() ? getCalculatedHeight(cell) : getProp(cell, 'height', get$3(cell));
    };
    var RuntimeSize = {
      getWidth: getWidth,
      getHeight: getHeight
    };

    var genericSizeRegex = /(\d+(\.\d+)?)(\w|%)*/;
    var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
    var pixelBasedSizeRegex = /(\d+(\.\d+)?)px|em/;
    var setPixelWidth = function (cell, amount) {
      set$1(cell, 'width', amount + 'px');
    };
    var setPercentageWidth = function (cell, amount) {
      set$1(cell, 'width', amount + '%');
    };
    var setHeight = function (cell, amount) {
      set$1(cell, 'height', amount + 'px');
    };
    var getHeightValue = function (cell) {
      return getRaw(cell, 'height').getOrThunk(function () {
        return RuntimeSize.getHeight(cell) + 'px';
      });
    };
    var convert = function (cell, number, getter, setter) {
      var newSize = TableLookup.table(cell).map(function (table) {
        var total = getter(table);
        return Math.floor(number / 100 * total);
      }).getOr(number);
      setter(cell, newSize);
      return newSize;
    };
    var normalizePixelSize = function (value, cell, getter, setter) {
      var number = parseInt(value, 10);
      return endsWith(value, '%') && name(cell) !== 'table' ? convert(cell, number, getter, setter) : number;
    };
    var getTotalHeight = function (cell) {
      var value = getHeightValue(cell);
      if (!value) {
        return get$3(cell);
      }
      return normalizePixelSize(value, cell, get$3, setHeight);
    };
    var get$5 = function (cell, type, f) {
      var v = f(cell);
      var span = getSpan(cell, type);
      return v / span;
    };
    var getSpan = function (cell, type) {
      return has(cell, type) ? parseInt(get(cell, type), 10) : 1;
    };
    var getRawWidth = function (element) {
      var cssWidth = getRaw(element, 'width');
      return cssWidth.fold(function () {
        return Option.from(get(element, 'width'));
      }, function (width) {
        return Option.some(width);
      });
    };
    var normalizePercentageWidth = function (cellWidth, tableSize) {
      return cellWidth / tableSize.pixelWidth() * 100;
    };
    var choosePercentageSize = function (element, width, tableSize) {
      var percentMatch = percentageBasedSizeRegex.exec(width);
      if (percentMatch !== null) {
        return parseFloat(percentMatch[1]);
      } else {
        var intWidth = get$4(element);
        return normalizePercentageWidth(intWidth, tableSize);
      }
    };
    var getPercentageWidth = function (cell, tableSize) {
      var width = getRawWidth(cell);
      return width.fold(function () {
        var intWidth = get$4(cell);
        return normalizePercentageWidth(intWidth, tableSize);
      }, function (w) {
        return choosePercentageSize(cell, w, tableSize);
      });
    };
    var normalizePixelWidth = function (cellWidth, tableSize) {
      return cellWidth / 100 * tableSize.pixelWidth();
    };
    var choosePixelSize = function (element, width, tableSize) {
      var pixelMatch = pixelBasedSizeRegex.exec(width);
      if (pixelMatch !== null) {
        return parseInt(pixelMatch[1], 10);
      }
      var percentMatch = percentageBasedSizeRegex.exec(width);
      if (percentMatch !== null) {
        var floatWidth = parseFloat(percentMatch[1]);
        return normalizePixelWidth(floatWidth, tableSize);
      }
      return get$4(element);
    };
    var getPixelWidth = function (cell, tableSize) {
      var width = getRawWidth(cell);
      return width.fold(function () {
        return get$4(cell);
      }, function (w) {
        return choosePixelSize(cell, w, tableSize);
      });
    };
    var getHeight$1 = function (cell) {
      return get$5(cell, 'rowspan', getTotalHeight);
    };
    var getGenericWidth = function (cell) {
      var width = getRawWidth(cell);
      return width.bind(function (w) {
        var match = genericSizeRegex.exec(w);
        if (match !== null) {
          return Option.some({
            width: constant(parseFloat(match[1])),
            unit: constant(match[3])
          });
        } else {
          return Option.none();
        }
      });
    };
    var setGenericWidth = function (cell, amount, unit) {
      set$1(cell, 'width', amount + unit);
    };
    var Sizes = {
      percentageBasedSizeRegex: constant(percentageBasedSizeRegex),
      pixelBasedSizeRegex: constant(pixelBasedSizeRegex),
      setPixelWidth: setPixelWidth,
      setPercentageWidth: setPercentageWidth,
      setHeight: setHeight,
      getPixelWidth: getPixelWidth,
      getPercentageWidth: getPercentageWidth,
      getGenericWidth: getGenericWidth,
      setGenericWidth: setGenericWidth,
      getHeight: getHeight$1,
      getRawWidth: getRawWidth
    };

    var halve = function (main, other) {
      var width = Sizes.getGenericWidth(main);
      width.each(function (w) {
        var newWidth = w.width() / 2;
        Sizes.setGenericWidth(main, newWidth, w.unit());
        Sizes.setGenericWidth(other, newWidth, w.unit());
      });
    };
    var CellMutations = { halve: halve };

    var r = function (left, top) {
      var translate = function (x, y) {
        return r(left + x, top + y);
      };
      return {
        left: constant(left),
        top: constant(top),
        translate: translate
      };
    };
    var Position = r;

    var boxPosition = function (dom) {
      var box = dom.getBoundingClientRect();
      return Position(box.left, box.top);
    };
    var firstDefinedOrZero = function (a, b) {
      return a !== undefined ? a : b !== undefined ? b : 0;
    };
    var absolute = function (element) {
      var doc = element.dom().ownerDocument;
      var body = doc.body;
      var win = doc.defaultView;
      var html = doc.documentElement;
      var scrollTop = firstDefinedOrZero(win.pageYOffset, html.scrollTop);
      var scrollLeft = firstDefinedOrZero(win.pageXOffset, html.scrollLeft);
      var clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
      var clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
      return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
    };
    var viewport = function (element) {
      var dom = element.dom();
      var doc = dom.ownerDocument;
      var body = doc.body;
      if (body === dom) {
        return Position(body.offsetLeft, body.offsetTop);
      }
      if (!inBody(element)) {
        return Position(0, 0);
      }
      return boxPosition(dom);
    };

    var rowInfo = Immutable('row', 'y');
    var colInfo = Immutable('col', 'x');
    var rtlEdge = function (cell) {
      var pos = absolute(cell);
      return pos.left() + getOuter$1(cell);
    };
    var ltrEdge = function (cell) {
      return absolute(cell).left();
    };
    var getLeftEdge = function (index, cell) {
      return colInfo(index, ltrEdge(cell));
    };
    var getRightEdge = function (index, cell) {
      return colInfo(index, rtlEdge(cell));
    };
    var getTop = function (cell) {
      return absolute(cell).top();
    };
    var getTopEdge = function (index, cell) {
      return rowInfo(index, getTop(cell));
    };
    var getBottomEdge = function (index, cell) {
      return rowInfo(index, getTop(cell) + getOuter(cell));
    };
    var findPositions = function (getInnerEdge, getOuterEdge, array) {
      if (array.length === 0) {
        return [];
      }
      var lines = map(array.slice(1), function (cellOption, index) {
        return cellOption.map(function (cell) {
          return getInnerEdge(index, cell);
        });
      });
      var lastLine = array[array.length - 1].map(function (cell) {
        return getOuterEdge(array.length - 1, cell);
      });
      return lines.concat([lastLine]);
    };
    var negate = function (step) {
      return -step;
    };
    var height = {
      delta: identity,
      positions: function (optElements) {
        return findPositions(getTopEdge, getBottomEdge, optElements);
      },
      edge: getTop
    };
    var ltr = {
      delta: identity,
      edge: ltrEdge,
      positions: function (optElements) {
        return findPositions(getLeftEdge, getRightEdge, optElements);
      }
    };
    var rtl = {
      delta: negate,
      edge: rtlEdge,
      positions: function (optElements) {
        return findPositions(getRightEdge, getLeftEdge, optElements);
      }
    };
    var BarPositions = {
      height: height,
      rtl: rtl,
      ltr: ltr
    };

    var ResizeDirection = {
      ltr: BarPositions.ltr,
      rtl: BarPositions.rtl
    };

    function TableDirection (directionAt) {
      var auto = function (table) {
        return directionAt(table).isRtl() ? ResizeDirection.rtl : ResizeDirection.ltr;
      };
      var delta = function (amount, table) {
        return auto(table).delta(amount, table);
      };
      var positions = function (cols, table) {
        return auto(table).positions(cols, table);
      };
      var edge = function (cell) {
        return auto(cell).edge(cell);
      };
      return {
        delta: delta,
        edge: edge,
        positions: positions
      };
    }

    var getGridSize = function (table) {
      var input = DetailsList.fromTable(table);
      var warehouse = Warehouse.generate(input);
      return warehouse.grid();
    };
    var TableGridSize = { getGridSize: getGridSize };

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };

    var cat = function (arr) {
      var r = [];
      var push = function (x) {
        r.push(x);
      };
      for (var i = 0; i < arr.length; i++) {
        arr[i].each(push);
      }
      return r;
    };
    var findMap = function (arr, f) {
      for (var i = 0; i < arr.length; i++) {
        var r = f(arr[i], i);
        if (r.isSome()) {
          return r;
        }
      }
      return Option.none();
    };

    var setIfNot = function (element, property, value, ignore) {
      if (value === ignore) {
        remove(element, property);
      } else {
        set(element, property, value);
      }
    };
    var render = function (table, grid) {
      var newRows = [];
      var newCells = [];
      var renderSection = function (gridSection, sectionName) {
        var section = child$2(table, sectionName).getOrThunk(function () {
          var tb = Element.fromTag(sectionName, owner(table).dom());
          append(table, tb);
          return tb;
        });
        empty(section);
        var rows = map(gridSection, function (row) {
          if (row.isNew()) {
            newRows.push(row.element());
          }
          var tr = row.element();
          empty(tr);
          each(row.cells(), function (cell) {
            if (cell.isNew()) {
              newCells.push(cell.element());
            }
            setIfNot(cell.element(), 'colspan', cell.colspan(), 1);
            setIfNot(cell.element(), 'rowspan', cell.rowspan(), 1);
            append(tr, cell.element());
          });
          return tr;
        });
        append$1(section, rows);
      };
      var removeSection = function (sectionName) {
        child$2(table, sectionName).each(remove$2);
      };
      var renderOrRemoveSection = function (gridSection, sectionName) {
        if (gridSection.length > 0) {
          renderSection(gridSection, sectionName);
        } else {
          removeSection(sectionName);
        }
      };
      var headSection = [];
      var bodySection = [];
      var footSection = [];
      each(grid, function (row) {
        switch (row.section()) {
        case 'thead':
          headSection.push(row);
          break;
        case 'tbody':
          bodySection.push(row);
          break;
        case 'tfoot':
          footSection.push(row);
          break;
        }
      });
      renderOrRemoveSection(headSection, 'thead');
      renderOrRemoveSection(bodySection, 'tbody');
      renderOrRemoveSection(footSection, 'tfoot');
      return {
        newRows: constant(newRows),
        newCells: constant(newCells)
      };
    };
    var copy$2 = function (grid) {
      var rows = map(grid, function (row) {
        var tr = shallow(row.element());
        each(row.cells(), function (cell) {
          var clonedCell = deep(cell.element());
          setIfNot(clonedCell, 'colspan', cell.colspan(), 1);
          setIfNot(clonedCell, 'rowspan', cell.rowspan(), 1);
          append(tr, clonedCell);
        });
        return tr;
      });
      return rows;
    };
    var Redraw = {
      render: render,
      copy: copy$2
    };

    var read = function (element, attr) {
      var value = get(element, attr);
      return value === undefined || value === '' ? [] : value.split(' ');
    };
    var add = function (element, attr, id) {
      var old = read(element, attr);
      var nu = old.concat([id]);
      set(element, attr, nu.join(' '));
      return true;
    };
    var remove$3 = function (element, attr, id) {
      var nu = filter(read(element, attr), function (v) {
        return v !== id;
      });
      if (nu.length > 0) {
        set(element, attr, nu.join(' '));
      } else {
        remove(element, attr);
      }
      return false;
    };

    var supports = function (element) {
      return element.dom().classList !== undefined;
    };
    var get$6 = function (element) {
      return read(element, 'class');
    };
    var add$1 = function (element, clazz) {
      return add(element, 'class', clazz);
    };
    var remove$4 = function (element, clazz) {
      return remove$3(element, 'class', clazz);
    };

    var add$2 = function (element, clazz) {
      if (supports(element)) {
        element.dom().classList.add(clazz);
      } else {
        add$1(element, clazz);
      }
    };
    var cleanClass = function (element) {
      var classList = supports(element) ? element.dom().classList : get$6(element);
      if (classList.length === 0) {
        remove(element, 'class');
      }
    };
    var remove$5 = function (element, clazz) {
      if (supports(element)) {
        var classList = element.dom().classList;
        classList.remove(clazz);
      } else {
        remove$4(element, clazz);
      }
      cleanClass(element);
    };
    var has$1 = function (element, clazz) {
      return supports(element) && element.dom().classList.contains(clazz);
    };

    var repeat = function (repititions, f) {
      var r = [];
      for (var i = 0; i < repititions; i++) {
        r.push(f(i));
      }
      return r;
    };
    var range = function (start, end) {
      var r = [];
      for (var i = start; i < end; i++) {
        r.push(i);
      }
      return r;
    };
    var deduce = function (xs, index) {
      if (index < 0 || index >= xs.length - 1) {
        return Option.none();
      }
      var current = xs[index].fold(function () {
        var rest = reverse(xs.slice(0, index));
        return findMap(rest, function (a, i) {
          return a.map(function (aa) {
            return {
              value: aa,
              delta: i + 1
            };
          });
        });
      }, function (c) {
        return Option.some({
          value: c,
          delta: 0
        });
      });
      var next = xs[index + 1].fold(function () {
        var rest = xs.slice(index + 1);
        return findMap(rest, function (a, i) {
          return a.map(function (aa) {
            return {
              value: aa,
              delta: i + 1
            };
          });
        });
      }, function (n) {
        return Option.some({
          value: n,
          delta: 1
        });
      });
      return current.bind(function (c) {
        return next.map(function (n) {
          var extras = n.delta + c.delta;
          return Math.abs(n.value - c.value) / extras;
        });
      });
    };

    var columns = function (warehouse) {
      var grid = warehouse.grid();
      var cols = range(0, grid.columns());
      var rowsArr = range(0, grid.rows());
      return map(cols, function (col) {
        var getBlock = function () {
          return bind(rowsArr, function (r) {
            return Warehouse.getAt(warehouse, r, col).filter(function (detail) {
              return detail.column() === col;
            }).fold(constant([]), function (detail) {
              return [detail];
            });
          });
        };
        var isSingle = function (detail) {
          return detail.colspan() === 1;
        };
        var getFallback = function () {
          return Warehouse.getAt(warehouse, 0, col);
        };
        return decide(getBlock, isSingle, getFallback);
      });
    };
    var decide = function (getBlock, isSingle, getFallback) {
      var inBlock = getBlock();
      var singleInBlock = find(inBlock, isSingle);
      var detailOption = singleInBlock.orThunk(function () {
        return Option.from(inBlock[0]).orThunk(getFallback);
      });
      return detailOption.map(function (detail) {
        return detail.element();
      });
    };
    var rows$1 = function (warehouse) {
      var grid = warehouse.grid();
      var rowsArr = range(0, grid.rows());
      var cols = range(0, grid.columns());
      return map(rowsArr, function (row) {
        var getBlock = function () {
          return bind(cols, function (c) {
            return Warehouse.getAt(warehouse, row, c).filter(function (detail) {
              return detail.row() === row;
            }).fold(constant([]), function (detail) {
              return [detail];
            });
          });
        };
        var isSingle = function (detail) {
          return detail.rowspan() === 1;
        };
        var getFallback = function () {
          return Warehouse.getAt(warehouse, row, 0);
        };
        return decide(getBlock, isSingle, getFallback);
      });
    };
    var Blocks = {
      columns: columns,
      rows: rows$1
    };

    var css = function (namespace) {
      var dashNamespace = namespace.replace(/\./g, '-');
      var resolve = function (str) {
        return dashNamespace + '-' + str;
      };
      return { resolve: resolve };
    };

    var styles = css('ephox-snooker');
    var Styles = { resolve: styles.resolve };

    var col = function (column, x, y, w, h) {
      var blocker = Element.fromTag('div');
      setAll$1(blocker, {
        position: 'absolute',
        left: x - w / 2 + 'px',
        top: y + 'px',
        height: h + 'px',
        width: w + 'px'
      });
      setAll(blocker, {
        'data-column': column,
        'role': 'presentation'
      });
      return blocker;
    };
    var row$1 = function (r, x, y, w, h) {
      var blocker = Element.fromTag('div');
      setAll$1(blocker, {
        position: 'absolute',
        left: x + 'px',
        top: y - h / 2 + 'px',
        height: h + 'px',
        width: w + 'px'
      });
      setAll(blocker, {
        'data-row': r,
        'role': 'presentation'
      });
      return blocker;
    };
    var Bar = {
      col: col,
      row: row$1
    };

    var resizeBar = Styles.resolve('resizer-bar');
    var resizeRowBar = Styles.resolve('resizer-rows');
    var resizeColBar = Styles.resolve('resizer-cols');
    var BAR_THICKNESS = 7;
    var destroy = function (wire) {
      var previous = descendants$1(wire.parent(), '.' + resizeBar);
      each(previous, remove$2);
    };
    var drawBar = function (wire, positions, create) {
      var origin = wire.origin();
      each(positions, function (cpOption, i) {
        cpOption.each(function (cp) {
          var bar = create(origin, cp);
          add$2(bar, resizeBar);
          append(wire.parent(), bar);
        });
      });
    };
    var refreshCol = function (wire, colPositions, position, tableHeight) {
      drawBar(wire, colPositions, function (origin, cp) {
        var colBar = Bar.col(cp.col(), cp.x() - origin.left(), position.top() - origin.top(), BAR_THICKNESS, tableHeight);
        add$2(colBar, resizeColBar);
        return colBar;
      });
    };
    var refreshRow = function (wire, rowPositions, position, tableWidth) {
      drawBar(wire, rowPositions, function (origin, cp) {
        var rowBar = Bar.row(cp.row(), position.left() - origin.left(), cp.y() - origin.top(), tableWidth, BAR_THICKNESS);
        add$2(rowBar, resizeRowBar);
        return rowBar;
      });
    };
    var refreshGrid = function (wire, table, rows, cols, hdirection, vdirection) {
      var position = absolute(table);
      var rowPositions = rows.length > 0 ? hdirection.positions(rows, table) : [];
      refreshRow(wire, rowPositions, position, getOuter$1(table));
      var colPositions = cols.length > 0 ? vdirection.positions(cols, table) : [];
      refreshCol(wire, colPositions, position, getOuter(table));
    };
    var refresh = function (wire, table, hdirection, vdirection) {
      destroy(wire);
      var list = DetailsList.fromTable(table);
      var warehouse = Warehouse.generate(list);
      var rows = Blocks.rows(warehouse);
      var cols = Blocks.columns(warehouse);
      refreshGrid(wire, table, rows, cols, hdirection, vdirection);
    };
    var each$2 = function (wire, f) {
      var bars = descendants$1(wire.parent(), '.' + resizeBar);
      each(bars, f);
    };
    var hide = function (wire) {
      each$2(wire, function (bar) {
        set$1(bar, 'display', 'none');
      });
    };
    var show = function (wire) {
      each$2(wire, function (bar) {
        set$1(bar, 'display', 'block');
      });
    };
    var isRowBar = function (element) {
      return has$1(element, resizeRowBar);
    };
    var isColBar = function (element) {
      return has$1(element, resizeColBar);
    };
    var Bars = {
      refresh: refresh,
      hide: hide,
      show: show,
      destroy: destroy,
      isRowBar: isRowBar,
      isColBar: isColBar
    };

    var addCell = function (gridRow, index, cell) {
      var cells = gridRow.cells();
      var before = cells.slice(0, index);
      var after = cells.slice(index);
      var newCells = before.concat([cell]).concat(after);
      return setCells(gridRow, newCells);
    };
    var mutateCell = function (gridRow, index, cell) {
      var cells = gridRow.cells();
      cells[index] = cell;
    };
    var setCells = function (gridRow, cells) {
      return rowcells(cells, gridRow.section());
    };
    var mapCells = function (gridRow, f) {
      var cells = gridRow.cells();
      var r = map(cells, f);
      return rowcells(r, gridRow.section());
    };
    var getCell = function (gridRow, index) {
      return gridRow.cells()[index];
    };
    var getCellElement = function (gridRow, index) {
      return getCell(gridRow, index).element();
    };
    var cellLength = function (gridRow) {
      return gridRow.cells().length;
    };
    var GridRow = {
      addCell: addCell,
      setCells: setCells,
      mutateCell: mutateCell,
      getCell: getCell,
      getCellElement: getCellElement,
      mapCells: mapCells,
      cellLength: cellLength
    };

    var getColumn = function (grid, index) {
      return map(grid, function (row) {
        return GridRow.getCell(row, index);
      });
    };
    var getRow = function (grid, index) {
      return grid[index];
    };
    var findDiff = function (xs, comp) {
      if (xs.length === 0) {
        return 0;
      }
      var first = xs[0];
      var index = findIndex(xs, function (x) {
        return !comp(first.element(), x.element());
      });
      return index.fold(function () {
        return xs.length;
      }, function (ind) {
        return ind;
      });
    };
    var subgrid = function (grid, row, column, comparator) {
      var restOfRow = getRow(grid, row).cells().slice(column);
      var endColIndex = findDiff(restOfRow, comparator);
      var restOfColumn = getColumn(grid, column).slice(row);
      var endRowIndex = findDiff(restOfColumn, comparator);
      return {
        colspan: constant(endColIndex),
        rowspan: constant(endRowIndex)
      };
    };
    var TableGrid = { subgrid: subgrid };

    var toDetails = function (grid, comparator) {
      var seen = map(grid, function (row, ri) {
        return map(row.cells(), function (col, ci) {
          return false;
        });
      });
      var updateSeen = function (ri, ci, rowspan, colspan) {
        for (var r = ri; r < ri + rowspan; r++) {
          for (var c = ci; c < ci + colspan; c++) {
            seen[r][c] = true;
          }
        }
      };
      return map(grid, function (row, ri) {
        var details = bind(row.cells(), function (cell, ci) {
          if (seen[ri][ci] === false) {
            var result = TableGrid.subgrid(grid, ri, ci, comparator);
            updateSeen(ri, ci, result.rowspan(), result.colspan());
            return [detailnew(cell.element(), result.rowspan(), result.colspan(), cell.isNew())];
          } else {
            return [];
          }
        });
        return rowdetails(details, row.section());
      });
    };
    var toGrid = function (warehouse, generators, isNew) {
      var grid = [];
      for (var i = 0; i < warehouse.grid().rows(); i++) {
        var rowCells = [];
        for (var j = 0; j < warehouse.grid().columns(); j++) {
          var element = Warehouse.getAt(warehouse, i, j).map(function (item) {
            return elementnew(item.element(), isNew);
          }).getOrThunk(function () {
            return elementnew(generators.gap(), true);
          });
          rowCells.push(element);
        }
        var row = rowcells(rowCells, warehouse.all()[i].section());
        grid.push(row);
      }
      return grid;
    };
    var Transitions = {
      toDetails: toDetails,
      toGrid: toGrid
    };

    var fromWarehouse = function (warehouse, generators) {
      return Transitions.toGrid(warehouse, generators, false);
    };
    var deriveRows = function (rendered, generators) {
      var findRow = function (details) {
        var rowOfCells = findMap(details, function (detail) {
          return parent(detail.element()).map(function (row) {
            var isNew = parent(row).isNone();
            return elementnew(row, isNew);
          });
        });
        return rowOfCells.getOrThunk(function () {
          return elementnew(generators.row(), true);
        });
      };
      return map(rendered, function (details) {
        var row = findRow(details.details());
        return rowdatanew(row.element(), details.details(), details.section(), row.isNew());
      });
    };
    var toDetailList = function (grid, generators) {
      var rendered = Transitions.toDetails(grid, eq);
      return deriveRows(rendered, generators);
    };
    var findInWarehouse = function (warehouse, element) {
      var all = flatten(map(warehouse.all(), function (r) {
        return r.cells();
      }));
      return find(all, function (e) {
        return eq(element, e.element());
      });
    };
    var run = function (operation, extract, adjustment, postAction, genWrappers) {
      return function (wire, table, target, generators, direction) {
        var input = DetailsList.fromTable(table);
        var warehouse = Warehouse.generate(input);
        var output = extract(warehouse, target).map(function (info) {
          var model = fromWarehouse(warehouse, generators);
          var result = operation(model, info, eq, genWrappers(generators));
          var grid = toDetailList(result.grid(), generators);
          return {
            grid: constant(grid),
            cursor: result.cursor
          };
        });
        return output.fold(function () {
          return Option.none();
        }, function (out) {
          var newElements = Redraw.render(table, out.grid());
          adjustment(table, out.grid(), direction);
          postAction(table);
          Bars.refresh(wire, table, BarPositions.height, direction);
          return Option.some({
            cursor: out.cursor,
            newRows: newElements.newRows,
            newCells: newElements.newCells
          });
        });
      };
    };
    var onCell = function (warehouse, target) {
      return TableLookup.cell(target.element()).bind(function (cell) {
        return findInWarehouse(warehouse, cell);
      });
    };
    var onPaste = function (warehouse, target) {
      return TableLookup.cell(target.element()).bind(function (cell) {
        return findInWarehouse(warehouse, cell).map(function (details) {
          var value = __assign({}, details, {
            generators: target.generators,
            clipboard: target.clipboard
          });
          return value;
        });
      });
    };
    var onPasteRows = function (warehouse, target) {
      var details = map(target.selection(), function (cell) {
        return TableLookup.cell(cell).bind(function (lc) {
          return findInWarehouse(warehouse, lc);
        });
      });
      var cells = cat(details);
      return cells.length > 0 ? Option.some({
        cells: cells,
        generators: target.generators,
        clipboard: target.clipboard
      }) : Option.none();
    };
    var onMergable = function (_warehouse, target) {
      return target.mergable();
    };
    var onUnmergable = function (_warehouse, target) {
      return target.unmergable();
    };
    var onCells = function (warehouse, target) {
      var details = map(target.selection(), function (cell) {
        return TableLookup.cell(cell).bind(function (lc) {
          return findInWarehouse(warehouse, lc);
        });
      });
      var cells = cat(details);
      return cells.length > 0 ? Option.some(cells) : Option.none();
    };

    var value = function (o) {
      var is = function (v) {
        return o === v;
      };
      var or = function (opt) {
        return value(o);
      };
      var orThunk = function (f) {
        return value(o);
      };
      var map = function (f) {
        return value(f(o));
      };
      var mapError = function (f) {
        return value(o);
      };
      var each = function (f) {
        f(o);
      };
      var bind = function (f) {
        return f(o);
      };
      var fold = function (_, onValue) {
        return onValue(o);
      };
      var exists = function (f) {
        return f(o);
      };
      var forall = function (f) {
        return f(o);
      };
      var toOption = function () {
        return Option.some(o);
      };
      return {
        is: is,
        isValue: always,
        isError: never,
        getOr: constant(o),
        getOrThunk: constant(o),
        getOrDie: constant(o),
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: each,
        bind: bind,
        exists: exists,
        forall: forall,
        toOption: toOption
      };
    };
    var error = function (message) {
      var getOrThunk = function (f) {
        return f();
      };
      var getOrDie = function () {
        return die(String(message))();
      };
      var or = function (opt) {
        return opt;
      };
      var orThunk = function (f) {
        return f();
      };
      var map = function (f) {
        return error(message);
      };
      var mapError = function (f) {
        return error(f(message));
      };
      var bind = function (f) {
        return error(message);
      };
      var fold = function (onError, _) {
        return onError(message);
      };
      return {
        is: never,
        isValue: never,
        isError: always,
        getOr: identity,
        getOrThunk: getOrThunk,
        getOrDie: getOrDie,
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: noop,
        bind: bind,
        exists: never,
        forall: always,
        toOption: Option.none
      };
    };
    var fromOption = function (opt, err) {
      return opt.fold(function () {
        return error(err);
      }, value);
    };
    var Result = {
      value: value,
      error: error,
      fromOption: fromOption
    };

    var measure = function (startAddress, gridA, gridB) {
      if (startAddress.row() >= gridA.length || startAddress.column() > GridRow.cellLength(gridA[0])) {
        return Result.error('invalid start address out of table bounds, row: ' + startAddress.row() + ', column: ' + startAddress.column());
      }
      var rowRemainder = gridA.slice(startAddress.row());
      var colRemainder = rowRemainder[0].cells().slice(startAddress.column());
      var colRequired = GridRow.cellLength(gridB[0]);
      var rowRequired = gridB.length;
      return Result.value({
        rowDelta: constant(rowRemainder.length - rowRequired),
        colDelta: constant(colRemainder.length - colRequired)
      });
    };
    var measureWidth = function (gridA, gridB) {
      var colLengthA = GridRow.cellLength(gridA[0]);
      var colLengthB = GridRow.cellLength(gridB[0]);
      return {
        rowDelta: constant(0),
        colDelta: constant(colLengthA - colLengthB)
      };
    };
    var fill = function (cells, generator) {
      return map(cells, function () {
        return elementnew(generator.cell(), true);
      });
    };
    var rowFill = function (grid, amount, generator) {
      return grid.concat(repeat(amount, function (_row) {
        return GridRow.setCells(grid[grid.length - 1], fill(grid[grid.length - 1].cells(), generator));
      }));
    };
    var colFill = function (grid, amount, generator) {
      return map(grid, function (row) {
        return GridRow.setCells(row, row.cells().concat(fill(range(0, amount), generator)));
      });
    };
    var tailor = function (gridA, delta, generator) {
      var fillCols = delta.colDelta() < 0 ? colFill : identity;
      var fillRows = delta.rowDelta() < 0 ? rowFill : identity;
      var modifiedCols = fillCols(gridA, Math.abs(delta.colDelta()), generator);
      var tailoredGrid = fillRows(modifiedCols, Math.abs(delta.rowDelta()), generator);
      return tailoredGrid;
    };
    var Fitment = {
      measure: measure,
      measureWidth: measureWidth,
      tailor: tailor
    };

    var merge = function (grid, bounds, comparator, substitution) {
      if (grid.length === 0) {
        return grid;
      }
      for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
        for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
          GridRow.mutateCell(grid[i], j, elementnew(substitution(), false));
        }
      }
      return grid;
    };
    var unmerge = function (grid, target, comparator, substitution) {
      var first = true;
      for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < GridRow.cellLength(grid[0]); j++) {
          var current = GridRow.getCellElement(grid[i], j);
          var isToReplace = comparator(current, target);
          if (isToReplace === true && first === false) {
            GridRow.mutateCell(grid[i], j, elementnew(substitution(), true));
          } else if (isToReplace === true) {
            first = false;
          }
        }
      }
      return grid;
    };
    var uniqueCells = function (row, comparator) {
      return foldl(row, function (rest, cell) {
        return exists(rest, function (currentCell) {
          return comparator(currentCell.element(), cell.element());
        }) ? rest : rest.concat([cell]);
      }, []);
    };
    var splitRows = function (grid, index, comparator, substitution) {
      if (index > 0 && index < grid.length) {
        var rowPrevCells = grid[index - 1].cells();
        var cells = uniqueCells(rowPrevCells, comparator);
        each(cells, function (cell) {
          var replacement = Option.none();
          var _loop_1 = function (i) {
            var _loop_2 = function (j) {
              var current = grid[i].cells()[j];
              var isToReplace = comparator(current.element(), cell.element());
              if (isToReplace) {
                if (replacement.isNone()) {
                  replacement = Option.some(substitution());
                }
                replacement.each(function (sub) {
                  GridRow.mutateCell(grid[i], j, elementnew(sub, true));
                });
              }
            };
            for (var j = 0; j < GridRow.cellLength(grid[0]); j++) {
              _loop_2(j);
            }
          };
          for (var i = index; i < grid.length; i++) {
            _loop_1(i);
          }
        });
      }
      return grid;
    };
    var MergingOperations = {
      merge: merge,
      unmerge: unmerge,
      splitRows: splitRows
    };

    var isSpanning = function (grid, row, col, comparator) {
      var candidate = GridRow.getCell(grid[row], col);
      var matching = curry(comparator, candidate.element());
      var currentRow = grid[row];
      return grid.length > 1 && GridRow.cellLength(currentRow) > 1 && (col > 0 && matching(GridRow.getCellElement(currentRow, col - 1)) || col < currentRow.cells().length - 1 && matching(GridRow.getCellElement(currentRow, col + 1)) || row > 0 && matching(GridRow.getCellElement(grid[row - 1], col)) || row < grid.length - 1 && matching(GridRow.getCellElement(grid[row + 1], col)));
    };
    var mergeTables = function (startAddress, gridA, gridB, generator, comparator) {
      var startRow = startAddress.row();
      var startCol = startAddress.column();
      var mergeHeight = gridB.length;
      var mergeWidth = GridRow.cellLength(gridB[0]);
      var endRow = startRow + mergeHeight;
      var endCol = startCol + mergeWidth;
      for (var r = startRow; r < endRow; r++) {
        for (var c = startCol; c < endCol; c++) {
          if (isSpanning(gridA, r, c, comparator)) {
            MergingOperations.unmerge(gridA, GridRow.getCellElement(gridA[r], c), comparator, generator.cell);
          }
          var newCell = GridRow.getCellElement(gridB[r - startRow], c - startCol);
          var replacement = generator.replace(newCell);
          GridRow.mutateCell(gridA[r], c, elementnew(replacement, true));
        }
      }
      return gridA;
    };
    var merge$1 = function (startAddress, gridA, gridB, generator, comparator) {
      var result = Fitment.measure(startAddress, gridA, gridB);
      return result.map(function (delta) {
        var fittedGrid = Fitment.tailor(gridA, delta, generator);
        return mergeTables(startAddress, fittedGrid, gridB, generator, comparator);
      });
    };
    var insert = function (index, gridA, gridB, generator, comparator) {
      MergingOperations.splitRows(gridA, index, comparator, generator.cell);
      var delta = Fitment.measureWidth(gridB, gridA);
      var fittedNewGrid = Fitment.tailor(gridB, delta, generator);
      var secondDelta = Fitment.measureWidth(gridA, fittedNewGrid);
      var fittedOldGrid = Fitment.tailor(gridA, secondDelta, generator);
      return fittedOldGrid.slice(0, index).concat(fittedNewGrid).concat(fittedOldGrid.slice(index, fittedOldGrid.length));
    };
    var TableMerge = {
      merge: merge$1,
      insert: insert
    };

    var insertRowAt = function (grid, index, example, comparator, substitution) {
      var before = grid.slice(0, index);
      var after = grid.slice(index);
      var between = GridRow.mapCells(grid[example], function (ex, c) {
        var withinSpan = index > 0 && index < grid.length && comparator(GridRow.getCellElement(grid[index - 1], c), GridRow.getCellElement(grid[index], c));
        var ret = withinSpan ? GridRow.getCell(grid[index], c) : elementnew(substitution(ex.element(), comparator), true);
        return ret;
      });
      return before.concat([between]).concat(after);
    };
    var insertColumnAt = function (grid, index, example, comparator, substitution) {
      return map(grid, function (row) {
        var withinSpan = index > 0 && index < GridRow.cellLength(row) && comparator(GridRow.getCellElement(row, index - 1), GridRow.getCellElement(row, index));
        var sub = withinSpan ? GridRow.getCell(row, index) : elementnew(substitution(GridRow.getCellElement(row, example), comparator), true);
        return GridRow.addCell(row, index, sub);
      });
    };
    var splitCellIntoColumns = function (grid, exampleRow, exampleCol, comparator, substitution) {
      var index = exampleCol + 1;
      return map(grid, function (row, i) {
        var isTargetCell = i === exampleRow;
        var sub = isTargetCell ? elementnew(substitution(GridRow.getCellElement(row, exampleCol), comparator), true) : GridRow.getCell(row, exampleCol);
        return GridRow.addCell(row, index, sub);
      });
    };
    var splitCellIntoRows = function (grid, exampleRow, exampleCol, comparator, substitution) {
      var index = exampleRow + 1;
      var before = grid.slice(0, index);
      var after = grid.slice(index);
      var between = GridRow.mapCells(grid[exampleRow], function (ex, i) {
        var isTargetCell = i === exampleCol;
        return isTargetCell ? elementnew(substitution(ex.element(), comparator), true) : ex;
      });
      return before.concat([between]).concat(after);
    };
    var deleteColumnsAt = function (grid, start, finish) {
      var rows = map(grid, function (row) {
        var cells = row.cells().slice(0, start).concat(row.cells().slice(finish + 1));
        return rowcells(cells, row.section());
      });
      return filter(rows, function (row) {
        return row.cells().length > 0;
      });
    };
    var deleteRowsAt = function (grid, start, finish) {
      return grid.slice(0, start).concat(grid.slice(finish + 1));
    };
    var ModificationOperations = {
      insertRowAt: insertRowAt,
      insertColumnAt: insertColumnAt,
      splitCellIntoColumns: splitCellIntoColumns,
      splitCellIntoRows: splitCellIntoRows,
      deleteRowsAt: deleteRowsAt,
      deleteColumnsAt: deleteColumnsAt
    };

    var replaceIn = function (grid, targets, comparator, substitution) {
      var isTarget = function (cell) {
        return exists(targets, function (target) {
          return comparator(cell.element(), target.element());
        });
      };
      return map(grid, function (row) {
        return GridRow.mapCells(row, function (cell) {
          return isTarget(cell) ? elementnew(substitution(cell.element(), comparator), true) : cell;
        });
      });
    };
    var notStartRow = function (grid, rowIndex, colIndex, comparator) {
      return GridRow.getCellElement(grid[rowIndex], colIndex) !== undefined && (rowIndex > 0 && comparator(GridRow.getCellElement(grid[rowIndex - 1], colIndex), GridRow.getCellElement(grid[rowIndex], colIndex)));
    };
    var notStartColumn = function (row, index, comparator) {
      return index > 0 && comparator(GridRow.getCellElement(row, index - 1), GridRow.getCellElement(row, index));
    };
    var replaceColumn = function (grid, index, comparator, substitution) {
      var targets = bind(grid, function (row, i) {
        var alreadyAdded = notStartRow(grid, i, index, comparator) || notStartColumn(row, index, comparator);
        return alreadyAdded ? [] : [GridRow.getCell(row, index)];
      });
      return replaceIn(grid, targets, comparator, substitution);
    };
    var replaceRow = function (grid, index, comparator, substitution) {
      var targetRow = grid[index];
      var targets = bind(targetRow.cells(), function (item, i) {
        var alreadyAdded = notStartRow(grid, index, i, comparator) || notStartColumn(targetRow, i, comparator);
        return alreadyAdded ? [] : [item];
      });
      return replaceIn(grid, targets, comparator, substitution);
    };
    var TransformOperations = {
      replaceColumn: replaceColumn,
      replaceRow: replaceRow
    };

    var adt = Adt.generate([
      { none: [] },
      { only: ['index'] },
      {
        left: [
          'index',
          'next'
        ]
      },
      {
        middle: [
          'prev',
          'index',
          'next'
        ]
      },
      {
        right: [
          'prev',
          'index'
        ]
      }
    ]);
    var ColumnContext = __assign({}, adt);

    var neighbours$1 = function (input, index) {
      if (input.length === 0) {
        return ColumnContext.none();
      }
      if (input.length === 1) {
        return ColumnContext.only(0);
      }
      if (index === 0) {
        return ColumnContext.left(0, 1);
      }
      if (index === input.length - 1) {
        return ColumnContext.right(index - 1, index);
      }
      if (index > 0 && index < input.length - 1) {
        return ColumnContext.middle(index - 1, index, index + 1);
      }
      return ColumnContext.none();
    };
    var determine = function (input, column, step, tableSize) {
      var result = input.slice(0);
      var context = neighbours$1(input, column);
      var zero = function (array) {
        return map(array, constant(0));
      };
      var onNone = constant(zero(result));
      var onOnly = function (index) {
        return tableSize.singleColumnWidth(result[index], step);
      };
      var onChange = function (index, next) {
        if (step >= 0) {
          var newNext = Math.max(tableSize.minCellWidth(), result[next] - step);
          return zero(result.slice(0, index)).concat([
            step,
            newNext - result[next]
          ]).concat(zero(result.slice(next + 1)));
        } else {
          var newThis = Math.max(tableSize.minCellWidth(), result[index] + step);
          var diffx = result[index] - newThis;
          return zero(result.slice(0, index)).concat([
            newThis - result[index],
            diffx
          ]).concat(zero(result.slice(next + 1)));
        }
      };
      var onLeft = onChange;
      var onMiddle = function (_prev, index, next) {
        return onChange(index, next);
      };
      var onRight = function (_prev, index) {
        if (step >= 0) {
          return zero(result.slice(0, index)).concat([step]);
        } else {
          var size = Math.max(tableSize.minCellWidth(), result[index] + step);
          return zero(result.slice(0, index)).concat([size - result[index]]);
        }
      };
      return context.fold(onNone, onOnly, onLeft, onMiddle, onRight);
    };
    var Deltas = { determine: determine };

    var getSpan$1 = function (cell, type) {
      return has(cell, type) && parseInt(get(cell, type), 10) > 1;
    };
    var hasColspan = function (cell) {
      return getSpan$1(cell, 'colspan');
    };
    var hasRowspan = function (cell) {
      return getSpan$1(cell, 'rowspan');
    };
    var getInt = function (element, property) {
      return parseInt(get$1(element, property), 10);
    };
    var CellUtils = {
      hasColspan: hasColspan,
      hasRowspan: hasRowspan,
      minWidth: constant(10),
      minHeight: constant(10),
      getInt: getInt
    };

    var getRaw$1 = function (cell, property, getter) {
      return getRaw(cell, property).fold(function () {
        return getter(cell) + 'px';
      }, function (raw) {
        return raw;
      });
    };
    var getRawW = function (cell, tableSize) {
      return getRaw$1(cell, 'width', function (e) {
        return Sizes.getPixelWidth(e, tableSize);
      });
    };
    var getRawH = function (cell) {
      return getRaw$1(cell, 'height', Sizes.getHeight);
    };
    var getWidthFrom = function (warehouse, direction, getWidth, fallback, tableSize) {
      var columns = Blocks.columns(warehouse);
      var backups = map(columns, function (cellOption) {
        return cellOption.map(direction.edge);
      });
      return map(columns, function (cellOption, c) {
        var columnCell = cellOption.filter(not(CellUtils.hasColspan));
        return columnCell.fold(function () {
          var deduced = deduce(backups, c);
          return fallback(deduced);
        }, function (cell) {
          return getWidth(cell, tableSize);
        });
      });
    };
    var getDeduced = function (deduced) {
      return deduced.map(function (d) {
        return d + 'px';
      }).getOr('');
    };
    var getRawWidths = function (warehouse, direction, tableSize) {
      return getWidthFrom(warehouse, direction, getRawW, getDeduced, tableSize);
    };
    var getPercentageWidths = function (warehouse, direction, tableSize) {
      return getWidthFrom(warehouse, direction, Sizes.getPercentageWidth, function (deduced) {
        return deduced.fold(function () {
          return tableSize.minCellWidth();
        }, function (cellWidth) {
          return cellWidth / tableSize.pixelWidth() * 100;
        });
      }, tableSize);
    };
    var getPixelWidths = function (warehouse, direction, tableSize) {
      return getWidthFrom(warehouse, direction, Sizes.getPixelWidth, function (deduced) {
        return deduced.getOrThunk(tableSize.minCellWidth);
      }, tableSize);
    };
    var getHeightFrom = function (warehouse, direction, getHeight, fallback) {
      var rows = Blocks.rows(warehouse);
      var backups = map(rows, function (cellOption) {
        return cellOption.map(direction.edge);
      });
      return map(rows, function (cellOption, c) {
        var rowCell = cellOption.filter(not(CellUtils.hasRowspan));
        return rowCell.fold(function () {
          var deduced = deduce(backups, c);
          return fallback(deduced);
        }, function (cell) {
          return getHeight(cell);
        });
      });
    };
    var getPixelHeights = function (warehouse, direction) {
      return getHeightFrom(warehouse, direction, Sizes.getHeight, function (deduced) {
        return deduced.getOrThunk(CellUtils.minHeight);
      });
    };
    var getRawHeights = function (warehouse, direction) {
      return getHeightFrom(warehouse, direction, getRawH, getDeduced);
    };
    var ColumnSizes = {
      getRawWidths: getRawWidths,
      getPixelWidths: getPixelWidths,
      getPercentageWidths: getPercentageWidths,
      getPixelHeights: getPixelHeights,
      getRawHeights: getRawHeights
    };

    var total = function (start, end, measures) {
      var r = 0;
      for (var i = start; i < end; i++) {
        r += measures[i] !== undefined ? measures[i] : 0;
      }
      return r;
    };
    var recalculateWidth = function (warehouse, widths) {
      var all = Warehouse.justCells(warehouse);
      return map(all, function (cell) {
        var width = total(cell.column(), cell.column() + cell.colspan(), widths);
        return {
          element: cell.element,
          width: constant(width),
          colspan: cell.colspan
        };
      });
    };
    var recalculateHeight = function (warehouse, heights) {
      var all = Warehouse.justCells(warehouse);
      return map(all, function (cell) {
        var height = total(cell.row(), cell.row() + cell.rowspan(), heights);
        return {
          element: cell.element,
          height: constant(height),
          rowspan: cell.rowspan
        };
      });
    };
    var matchRowHeight = function (warehouse, heights) {
      return map(warehouse.all(), function (row, i) {
        return {
          element: row.element,
          height: constant(heights[i])
        };
      });
    };
    var Recalculations = {
      recalculateWidth: recalculateWidth,
      recalculateHeight: recalculateHeight,
      matchRowHeight: matchRowHeight
    };

    var percentageSize = function (width, element) {
      var floatWidth = parseFloat(width);
      var pixelWidth = get$4(element);
      var getCellDelta = function (delta) {
        return delta / pixelWidth * 100;
      };
      var singleColumnWidth = function (w, _delta) {
        return [100 - w];
      };
      var minCellWidth = function () {
        return CellUtils.minWidth() / pixelWidth * 100;
      };
      var setTableWidth = function (table, _newWidths, delta) {
        var ratio = delta / 100;
        var change = ratio * floatWidth;
        Sizes.setPercentageWidth(table, floatWidth + change);
      };
      return {
        width: constant(floatWidth),
        pixelWidth: constant(pixelWidth),
        getWidths: ColumnSizes.getPercentageWidths,
        getCellDelta: getCellDelta,
        singleColumnWidth: singleColumnWidth,
        minCellWidth: minCellWidth,
        setElementWidth: Sizes.setPercentageWidth,
        setTableWidth: setTableWidth
      };
    };
    var pixelSize = function (width) {
      var getCellDelta = identity;
      var singleColumnWidth = function (w, delta) {
        var newNext = Math.max(CellUtils.minWidth(), w + delta);
        return [newNext - w];
      };
      var setTableWidth = function (table, newWidths, _delta) {
        var total = foldr(newWidths, function (b, a) {
          return b + a;
        }, 0);
        Sizes.setPixelWidth(table, total);
      };
      return {
        width: constant(width),
        pixelWidth: constant(width),
        getWidths: ColumnSizes.getPixelWidths,
        getCellDelta: getCellDelta,
        singleColumnWidth: singleColumnWidth,
        minCellWidth: CellUtils.minWidth,
        setElementWidth: Sizes.setPixelWidth,
        setTableWidth: setTableWidth
      };
    };
    var chooseSize = function (element, width) {
      var percentMatch = Sizes.percentageBasedSizeRegex().exec(width);
      if (percentMatch !== null) {
        return percentageSize(percentMatch[1], element);
      }
      var pixelMatch = Sizes.pixelBasedSizeRegex().exec(width);
      if (pixelMatch !== null) {
        var intWidth = parseInt(pixelMatch[1], 10);
        return pixelSize(intWidth);
      }
      var fallbackWidth = get$4(element);
      return pixelSize(fallbackWidth);
    };
    var getTableSize = function (element) {
      var width = Sizes.getRawWidth(element);
      return width.fold(function () {
        var fallbackWidth = get$4(element);
        return pixelSize(fallbackWidth);
      }, function (w) {
        return chooseSize(element, w);
      });
    };
    var TableSize = { getTableSize: getTableSize };

    var getWarehouse$1 = function (list) {
      return Warehouse.generate(list);
    };
    var sumUp = function (newSize) {
      return foldr(newSize, function (b, a) {
        return b + a;
      }, 0);
    };
    var getTableWarehouse = function (table) {
      var list = DetailsList.fromTable(table);
      return getWarehouse$1(list);
    };
    var adjustWidth = function (table, delta, index, direction) {
      var tableSize = TableSize.getTableSize(table);
      var step = tableSize.getCellDelta(delta);
      var warehouse = getTableWarehouse(table);
      var widths = tableSize.getWidths(warehouse, direction, tableSize);
      var deltas = Deltas.determine(widths, index, step, tableSize);
      var newWidths = map(deltas, function (dx, i) {
        return dx + widths[i];
      });
      var newSizes = Recalculations.recalculateWidth(warehouse, newWidths);
      each(newSizes, function (cell) {
        tableSize.setElementWidth(cell.element(), cell.width());
      });
      if (index === warehouse.grid().columns() - 1) {
        tableSize.setTableWidth(table, newWidths, step);
      }
    };
    var adjustHeight = function (table, delta, index, direction) {
      var warehouse = getTableWarehouse(table);
      var heights = ColumnSizes.getPixelHeights(warehouse, direction);
      var newHeights = map(heights, function (dy, i) {
        return index === i ? Math.max(delta + dy, CellUtils.minHeight()) : dy;
      });
      var newCellSizes = Recalculations.recalculateHeight(warehouse, newHeights);
      var newRowSizes = Recalculations.matchRowHeight(warehouse, newHeights);
      each(newRowSizes, function (row) {
        Sizes.setHeight(row.element(), row.height());
      });
      each(newCellSizes, function (cell) {
        Sizes.setHeight(cell.element(), cell.height());
      });
      var total = sumUp(newHeights);
      Sizes.setHeight(table, total);
    };
    var adjustWidthTo = function (table, list, direction) {
      var tableSize = TableSize.getTableSize(table);
      var warehouse = getWarehouse$1(list);
      var widths = tableSize.getWidths(warehouse, direction, tableSize);
      var newSizes = Recalculations.recalculateWidth(warehouse, widths);
      each(newSizes, function (cell) {
        tableSize.setElementWidth(cell.element(), cell.width());
      });
      if (newSizes.length > 0) {
        tableSize.setTableWidth(table, widths, tableSize.getCellDelta(0));
      }
    };
    var Adjustments = {
      adjustWidth: adjustWidth,
      adjustHeight: adjustHeight,
      adjustWidthTo: adjustWidthTo
    };

    var Cell = function (initial) {
      var value = initial;
      var get = function () {
        return value;
      };
      var set = function (v) {
        value = v;
      };
      var clone = function () {
        return Cell(get());
      };
      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var base = function (handleUnsupported, required) {
      return baseWith(handleUnsupported, required, {
        validate: isFunction,
        label: 'function'
      });
    };
    var baseWith = function (handleUnsupported, required, pred) {
      if (required.length === 0) {
        throw new Error('You must specify at least one required field.');
      }
      validateStrArr('required', required);
      checkDupes(required);
      return function (obj) {
        var keys$1 = keys(obj);
        var allReqd = forall(required, function (req) {
          return contains(keys$1, req);
        });
        if (!allReqd) {
          reqMessage(required, keys$1);
        }
        handleUnsupported(required, keys$1);
        var invalidKeys = filter(required, function (key) {
          return !pred.validate(obj[key], key);
        });
        if (invalidKeys.length > 0) {
          invalidTypeMessage(invalidKeys, pred.label);
        }
        return obj;
      };
    };
    var handleExact = function (required, keys) {
      var unsupported = filter(keys, function (key) {
        return !contains(required, key);
      });
      if (unsupported.length > 0) {
        unsuppMessage(unsupported);
      }
    };
    var exactly = function (required) {
      return base(handleExact, required);
    };

    var verifyGenerators = exactly([
      'cell',
      'row',
      'replace',
      'gap'
    ]);
    var elementToData = function (element) {
      var colspan = has(element, 'colspan') ? parseInt(get(element, 'colspan'), 10) : 1;
      var rowspan = has(element, 'rowspan') ? parseInt(get(element, 'rowspan'), 10) : 1;
      return {
        element: constant(element),
        colspan: constant(colspan),
        rowspan: constant(rowspan)
      };
    };
    var modification = function (generators, toData) {
      if (toData === void 0) {
        toData = elementToData;
      }
      verifyGenerators(generators);
      var position = Cell(Option.none());
      var nu = function (data) {
        return generators.cell(data);
      };
      var nuFrom = function (element) {
        var data = toData(element);
        return nu(data);
      };
      var add = function (element) {
        var replacement = nuFrom(element);
        if (position.get().isNone()) {
          position.set(Option.some(replacement));
        }
        recent = Option.some({
          item: element,
          replacement: replacement
        });
        return replacement;
      };
      var recent = Option.none();
      var getOrInit = function (element, comparator) {
        return recent.fold(function () {
          return add(element);
        }, function (p) {
          return comparator(element, p.item) ? p.replacement : add(element);
        });
      };
      return {
        getOrInit: getOrInit,
        cursor: position.get
      };
    };
    var transform = function (scope, tag) {
      return function (generators) {
        var position = Cell(Option.none());
        verifyGenerators(generators);
        var list = [];
        var find$1 = function (element, comparator) {
          return find(list, function (x) {
            return comparator(x.item, element);
          });
        };
        var makeNew = function (element) {
          var attrs = { scope: scope };
          var cell = generators.replace(element, tag, attrs);
          list.push({
            item: element,
            sub: cell
          });
          if (position.get().isNone()) {
            position.set(Option.some(cell));
          }
          return cell;
        };
        var replaceOrInit = function (element, comparator) {
          return find$1(element, comparator).fold(function () {
            return makeNew(element);
          }, function (p) {
            return comparator(element, p.item) ? p.sub : makeNew(element);
          });
        };
        return {
          replaceOrInit: replaceOrInit,
          cursor: position.get
        };
      };
    };
    var merging = function (generators) {
      verifyGenerators(generators);
      var position = Cell(Option.none());
      var combine = function (cell) {
        if (position.get().isNone()) {
          position.set(Option.some(cell));
        }
        return function () {
          var raw = generators.cell({
            element: constant(cell),
            colspan: constant(1),
            rowspan: constant(1)
          });
          remove$1(raw, 'width');
          remove$1(cell, 'width');
          return raw;
        };
      };
      return {
        combine: combine,
        cursor: position.get
      };
    };
    var Generators = {
      modification: modification,
      transform: transform,
      merging: merging
    };

    var blockList = [
      'body',
      'p',
      'div',
      'article',
      'aside',
      'figcaption',
      'figure',
      'footer',
      'header',
      'nav',
      'section',
      'ol',
      'ul',
      'table',
      'thead',
      'tfoot',
      'tbody',
      'caption',
      'tr',
      'td',
      'th',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'pre',
      'address'
    ];
    var isList = function (universe, item) {
      var tagName = universe.property().name(item);
      return contains([
        'ol',
        'ul'
      ], tagName);
    };
    var isBlock = function (universe, item) {
      var tagName = universe.property().name(item);
      return contains(blockList, tagName);
    };
    var isFormatting = function (universe, item) {
      var tagName = universe.property().name(item);
      return contains([
        'address',
        'pre',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
      ], tagName);
    };
    var isHeading = function (universe, item) {
      var tagName = universe.property().name(item);
      return contains([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
      ], tagName);
    };
    var isContainer = function (universe, item) {
      return contains([
        'div',
        'li',
        'td',
        'th',
        'blockquote',
        'body',
        'caption'
      ], universe.property().name(item));
    };
    var isEmptyTag = function (universe, item) {
      return contains([
        'br',
        'img',
        'hr',
        'input'
      ], universe.property().name(item));
    };
    var isFrame = function (universe, item) {
      return universe.property().name(item) === 'iframe';
    };
    var isInline = function (universe, item) {
      return !(isBlock(universe, item) || isEmptyTag(universe, item)) && universe.property().name(item) !== 'li';
    };
    var Structure = {
      isBlock: isBlock,
      isList: isList,
      isFormatting: isFormatting,
      isHeading: isHeading,
      isContainer: isContainer,
      isEmptyTag: isEmptyTag,
      isFrame: isFrame,
      isInline: isInline
    };

    var universe$1 = DomUniverse();
    var isBlock$1 = function (element) {
      return Structure.isBlock(universe$1, element);
    };
    var isList$1 = function (element) {
      return Structure.isList(universe$1, element);
    };
    var isFormatting$1 = function (element) {
      return Structure.isFormatting(universe$1, element);
    };
    var isHeading$1 = function (element) {
      return Structure.isHeading(universe$1, element);
    };
    var isContainer$1 = function (element) {
      return Structure.isContainer(universe$1, element);
    };
    var isEmptyTag$1 = function (element) {
      return Structure.isEmptyTag(universe$1, element);
    };
    var isFrame$1 = function (element) {
      return Structure.isFrame(universe$1, element);
    };
    var isInline$1 = function (element) {
      return Structure.isInline(universe$1, element);
    };
    var DomStructure = {
      isBlock: isBlock$1,
      isList: isList$1,
      isFormatting: isFormatting$1,
      isHeading: isHeading$1,
      isContainer: isContainer$1,
      isEmptyTag: isEmptyTag$1,
      isFrame: isFrame$1,
      isInline: isInline$1
    };

    var merge$2 = function (cells) {
      var isBr = function (el) {
        return name(el) === 'br';
      };
      var advancedBr = function (children) {
        return forall(children, function (c) {
          return isBr(c) || isText(c) && get$2(c).trim().length === 0;
        });
      };
      var isListItem = function (el) {
        return name(el) === 'li' || ancestor(el, DomStructure.isList).isSome();
      };
      var siblingIsBlock = function (el) {
        return nextSibling(el).map(function (rightSibling) {
          if (DomStructure.isBlock(rightSibling)) {
            return true;
          }
          if (DomStructure.isEmptyTag(rightSibling)) {
            return name(rightSibling) === 'img' ? false : true;
          }
          return false;
        }).getOr(false);
      };
      var markCell = function (cell) {
        return last$1(cell).bind(function (rightEdge) {
          var rightSiblingIsBlock = siblingIsBlock(rightEdge);
          return parent(rightEdge).map(function (parent) {
            return rightSiblingIsBlock === true || isListItem(parent) || isBr(rightEdge) || DomStructure.isBlock(parent) && !eq(cell, parent) ? [] : [Element.fromTag('br')];
          });
        }).getOr([]);
      };
      var markContent = function () {
        var content = bind(cells, function (cell) {
          var children$1 = children(cell);
          return advancedBr(children$1) ? [] : children$1.concat(markCell(cell));
        });
        return content.length === 0 ? [Element.fromTag('br')] : content;
      };
      var contents = markContent();
      empty(cells[0]);
      append$1(cells[0], contents);
    };
    var TableContent = { merge: merge$2 };

    var prune = function (table) {
      var cells = TableLookup.cells(table);
      if (cells.length === 0) {
        remove$2(table);
      }
    };
    var outcome = Immutable('grid', 'cursor');
    var elementFromGrid = function (grid, row, column) {
      return findIn(grid, row, column).orThunk(function () {
        return findIn(grid, 0, 0);
      });
    };
    var findIn = function (grid, row, column) {
      return Option.from(grid[row]).bind(function (r) {
        return Option.from(r.cells()[column]).bind(function (c) {
          return Option.from(c.element());
        });
      });
    };
    var bundle = function (grid, row, column) {
      return outcome(grid, findIn(grid, row, column));
    };
    var uniqueRows = function (details) {
      return foldl(details, function (rest, detail) {
        return exists(rest, function (currentDetail) {
          return currentDetail.row() === detail.row();
        }) ? rest : rest.concat([detail]);
      }, []).sort(function (detailA, detailB) {
        return detailA.row() - detailB.row();
      });
    };
    var uniqueColumns = function (details) {
      return foldl(details, function (rest, detail) {
        return exists(rest, function (currentDetail) {
          return currentDetail.column() === detail.column();
        }) ? rest : rest.concat([detail]);
      }, []).sort(function (detailA, detailB) {
        return detailA.column() - detailB.column();
      });
    };
    var insertRowBefore = function (grid, detail, comparator, genWrappers) {
      var example = detail.row();
      var targetIndex = detail.row();
      var newGrid = ModificationOperations.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
      return bundle(newGrid, targetIndex, detail.column());
    };
    var insertRowsBefore = function (grid, details, comparator, genWrappers) {
      var example = details[0].row();
      var targetIndex = details[0].row();
      var rows = uniqueRows(details);
      var newGrid = foldl(rows, function (newG, _row) {
        return ModificationOperations.insertRowAt(newG, targetIndex, example, comparator, genWrappers.getOrInit);
      }, grid);
      return bundle(newGrid, targetIndex, details[0].column());
    };
    var insertRowAfter = function (grid, detail, comparator, genWrappers) {
      var example = detail.row();
      var targetIndex = detail.row() + detail.rowspan();
      var newGrid = ModificationOperations.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
      return bundle(newGrid, targetIndex, detail.column());
    };
    var insertRowsAfter = function (grid, details, comparator, genWrappers) {
      var rows = uniqueRows(details);
      var example = rows[rows.length - 1].row();
      var targetIndex = rows[rows.length - 1].row() + rows[rows.length - 1].rowspan();
      var newGrid = foldl(rows, function (newG, _row) {
        return ModificationOperations.insertRowAt(newG, targetIndex, example, comparator, genWrappers.getOrInit);
      }, grid);
      return bundle(newGrid, targetIndex, details[0].column());
    };
    var insertColumnBefore = function (grid, detail, comparator, genWrappers) {
      var example = detail.column();
      var targetIndex = detail.column();
      var newGrid = ModificationOperations.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
      return bundle(newGrid, detail.row(), targetIndex);
    };
    var insertColumnsBefore = function (grid, details, comparator, genWrappers) {
      var columns = uniqueColumns(details);
      var example = columns[0].column();
      var targetIndex = columns[0].column();
      var newGrid = foldl(columns, function (newG, _row) {
        return ModificationOperations.insertColumnAt(newG, targetIndex, example, comparator, genWrappers.getOrInit);
      }, grid);
      return bundle(newGrid, details[0].row(), targetIndex);
    };
    var insertColumnAfter = function (grid, detail, comparator, genWrappers) {
      var example = detail.column();
      var targetIndex = detail.column() + detail.colspan();
      var newGrid = ModificationOperations.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
      return bundle(newGrid, detail.row(), targetIndex);
    };
    var insertColumnsAfter = function (grid, details, comparator, genWrappers) {
      var example = details[details.length - 1].column();
      var targetIndex = details[details.length - 1].column() + details[details.length - 1].colspan();
      var columns = uniqueColumns(details);
      var newGrid = foldl(columns, function (newG, _row) {
        return ModificationOperations.insertColumnAt(newG, targetIndex, example, comparator, genWrappers.getOrInit);
      }, grid);
      return bundle(newGrid, details[0].row(), targetIndex);
    };
    var makeRowHeader = function (grid, detail, comparator, genWrappers) {
      var newGrid = TransformOperations.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var makeColumnHeader = function (grid, detail, comparator, genWrappers) {
      var newGrid = TransformOperations.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var unmakeRowHeader = function (grid, detail, comparator, genWrappers) {
      var newGrid = TransformOperations.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var unmakeColumnHeader = function (grid, detail, comparator, genWrappers) {
      var newGrid = TransformOperations.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var splitCellIntoColumns$1 = function (grid, detail, comparator, genWrappers) {
      var newGrid = ModificationOperations.splitCellIntoColumns(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var splitCellIntoRows$1 = function (grid, detail, comparator, genWrappers) {
      var newGrid = ModificationOperations.splitCellIntoRows(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
      return bundle(newGrid, detail.row(), detail.column());
    };
    var eraseColumns = function (grid, details, _comparator, _genWrappers) {
      var columns = uniqueColumns(details);
      var newGrid = ModificationOperations.deleteColumnsAt(grid, columns[0].column(), columns[columns.length - 1].column());
      var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
      return outcome(newGrid, cursor);
    };
    var eraseRows = function (grid, details, _comparator, _genWrappers) {
      var rows = uniqueRows(details);
      var newGrid = ModificationOperations.deleteRowsAt(grid, rows[0].row(), rows[rows.length - 1].row());
      var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
      return outcome(newGrid, cursor);
    };
    var mergeCells = function (grid, mergable, comparator, _genWrappers) {
      var cells = mergable.cells();
      TableContent.merge(cells);
      var newGrid = MergingOperations.merge(grid, mergable.bounds(), comparator, constant(cells[0]));
      return outcome(newGrid, Option.from(cells[0]));
    };
    var unmergeCells = function (grid, unmergable, comparator, genWrappers) {
      var newGrid = foldr(unmergable, function (b, cell) {
        return MergingOperations.unmerge(b, cell, comparator, genWrappers.combine(cell));
      }, grid);
      return outcome(newGrid, Option.from(unmergable[0]));
    };
    var pasteCells = function (grid, pasteDetails, comparator, _genWrappers) {
      var gridify = function (table, generators) {
        var list = DetailsList.fromTable(table);
        var wh = Warehouse.generate(list);
        return Transitions.toGrid(wh, generators, true);
      };
      var gridB = gridify(pasteDetails.clipboard(), pasteDetails.generators());
      var startAddress = address(pasteDetails.row(), pasteDetails.column());
      var mergedGrid = TableMerge.merge(startAddress, grid, gridB, pasteDetails.generators(), comparator);
      return mergedGrid.fold(function () {
        return outcome(grid, Option.some(pasteDetails.element()));
      }, function (nuGrid) {
        var cursor = elementFromGrid(nuGrid, pasteDetails.row(), pasteDetails.column());
        return outcome(nuGrid, cursor);
      });
    };
    var gridifyRows = function (rows, generators, example) {
      var pasteDetails = DetailsList.fromPastedRows(rows, example);
      var wh = Warehouse.generate(pasteDetails);
      return Transitions.toGrid(wh, generators, true);
    };
    var pasteRowsBefore = function (grid, pasteDetails, comparator, _genWrappers) {
      var example = grid[pasteDetails.cells[0].row()];
      var index = pasteDetails.cells[0].row();
      var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
      var mergedGrid = TableMerge.insert(index, grid, gridB, pasteDetails.generators(), comparator);
      var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
      return outcome(mergedGrid, cursor);
    };
    var pasteRowsAfter = function (grid, pasteDetails, comparator, _genWrappers) {
      var example = grid[pasteDetails.cells[0].row()];
      var index = pasteDetails.cells[pasteDetails.cells.length - 1].row() + pasteDetails.cells[pasteDetails.cells.length - 1].rowspan();
      var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
      var mergedGrid = TableMerge.insert(index, grid, gridB, pasteDetails.generators(), comparator);
      var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
      return outcome(mergedGrid, cursor);
    };
    var resize = Adjustments.adjustWidthTo;
    var TableOperations = {
      insertRowBefore: run(insertRowBefore, onCell, noop, noop, Generators.modification),
      insertRowsBefore: run(insertRowsBefore, onCells, noop, noop, Generators.modification),
      insertRowAfter: run(insertRowAfter, onCell, noop, noop, Generators.modification),
      insertRowsAfter: run(insertRowsAfter, onCells, noop, noop, Generators.modification),
      insertColumnBefore: run(insertColumnBefore, onCell, resize, noop, Generators.modification),
      insertColumnsBefore: run(insertColumnsBefore, onCells, resize, noop, Generators.modification),
      insertColumnAfter: run(insertColumnAfter, onCell, resize, noop, Generators.modification),
      insertColumnsAfter: run(insertColumnsAfter, onCells, resize, noop, Generators.modification),
      splitCellIntoColumns: run(splitCellIntoColumns$1, onCell, resize, noop, Generators.modification),
      splitCellIntoRows: run(splitCellIntoRows$1, onCell, noop, noop, Generators.modification),
      eraseColumns: run(eraseColumns, onCells, resize, prune, Generators.modification),
      eraseRows: run(eraseRows, onCells, noop, prune, Generators.modification),
      makeColumnHeader: run(makeColumnHeader, onCell, noop, noop, Generators.transform('row', 'th')),
      unmakeColumnHeader: run(unmakeColumnHeader, onCell, noop, noop, Generators.transform(null, 'td')),
      makeRowHeader: run(makeRowHeader, onCell, noop, noop, Generators.transform('col', 'th')),
      unmakeRowHeader: run(unmakeRowHeader, onCell, noop, noop, Generators.transform(null, 'td')),
      mergeCells: run(mergeCells, onMergable, noop, noop, Generators.merging),
      unmergeCells: run(unmergeCells, onUnmergable, resize, noop, Generators.merging),
      pasteCells: run(pasteCells, onPaste, resize, noop, Generators.modification),
      pasteRowsBefore: run(pasteRowsBefore, onPasteRows, noop, noop, Generators.modification),
      pasteRowsAfter: run(pasteRowsAfter, onPasteRows, noop, noop, Generators.modification)
    };

    var getBody$1 = function (editor) {
      return Element.fromDom(editor.getBody());
    };
    var getPixelWidth$1 = function (elm) {
      return elm.getBoundingClientRect().width;
    };
    var getPixelHeight = function (elm) {
      return elm.getBoundingClientRect().height;
    };
    var getIsRoot = function (editor) {
      return function (element) {
        return eq(element, getBody$1(editor));
      };
    };
    var removePxSuffix = function (size) {
      return size ? size.replace(/px$/, '') : '';
    };
    var addSizeSuffix = function (size) {
      if (/^[0-9]+$/.test(size)) {
        size += 'px';
      }
      return size;
    };
    var removeDataStyle = function (table) {
      var dataStyleCells = descendants$1(table, 'td[data-mce-style],th[data-mce-style]');
      remove(table, 'data-mce-style');
      each(dataStyleCells, function (cell) {
        remove(cell, 'data-mce-style');
      });
    };

    var getDirection = function (element) {
      return get$1(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
    };

    var ltr$1 = { isRtl: constant(false) };
    var rtl$1 = { isRtl: constant(true) };
    var directionAt = function (element) {
      var dir = getDirection(element);
      return dir === 'rtl' ? rtl$1 : ltr$1;
    };
    var Direction = { directionAt: directionAt };

    var defaultTableToolbar = [
      'tableprops',
      'tabledelete',
      '|',
      'tableinsertrowbefore',
      'tableinsertrowafter',
      'tabledeleterow',
      '|',
      'tableinsertcolbefore',
      'tableinsertcolafter',
      'tabledeletecol'
    ];
    var defaultStyles = {
      'border-collapse': 'collapse',
      'width': '100%'
    };
    var defaultAttributes = { border: '1' };
    var getDefaultAttributes = function (editor) {
      return editor.getParam('table_default_attributes', defaultAttributes, 'object');
    };
    var getDefaultStyles = function (editor) {
      return editor.getParam('table_default_styles', defaultStyles, 'object');
    };
    var hasTableResizeBars = function (editor) {
      return editor.getParam('table_resize_bars', true, 'boolean');
    };
    var hasTabNavigation = function (editor) {
      return editor.getParam('table_tab_navigation', true, 'boolean');
    };
    var hasAdvancedCellTab = function (editor) {
      return editor.getParam('table_cell_advtab', true, 'boolean');
    };
    var hasAdvancedRowTab = function (editor) {
      return editor.getParam('table_row_advtab', true, 'boolean');
    };
    var hasAdvancedTableTab = function (editor) {
      return editor.getParam('table_advtab', true, 'boolean');
    };
    var hasAppearanceOptions = function (editor) {
      return editor.getParam('table_appearance_options', true, 'boolean');
    };
    var hasTableGrid = function (editor) {
      return editor.getParam('table_grid', true, 'boolean');
    };
    var shouldStyleWithCss = function (editor) {
      return editor.getParam('table_style_by_css', false, 'boolean');
    };
    var getCellClassList = function (editor) {
      return editor.getParam('table_cell_class_list', [], 'array');
    };
    var getRowClassList = function (editor) {
      return editor.getParam('table_row_class_list', [], 'array');
    };
    var getTableClassList = function (editor) {
      return editor.getParam('table_class_list', [], 'array');
    };
    var getColorPickerCallback = function (editor) {
      return editor.getParam('color_picker_callback');
    };
    var isPixelsForced = function (editor) {
      return editor.getParam('table_responsive_width') === false;
    };
    var getCloneElements = function (editor) {
      var cloneElements = editor.getParam('table_clone_elements');
      if (isString(cloneElements)) {
        return Option.some(cloneElements.split(/[ ,]/));
      } else if (Array.isArray(cloneElements)) {
        return Option.some(cloneElements);
      } else {
        return Option.none();
      }
    };
    var hasObjectResizing = function (editor) {
      var objectResizing = editor.getParam('object_resizing', true);
      return objectResizing === 'table' || objectResizing;
    };
    var getToolbar = function (editor) {
      var toolbar = editor.getParam('table_toolbar', defaultTableToolbar);
      if (toolbar === '' || toolbar === false) {
        return [];
      } else if (isString(toolbar)) {
        return toolbar.split(/[ ,]/);
      } else if (isArray(toolbar)) {
        return toolbar;
      } else {
        return [];
      }
    };

    var fireNewRow = function (editor, row) {
      return editor.fire('newrow', { node: row });
    };
    var fireNewCell = function (editor, cell) {
      return editor.fire('newcell', { node: cell });
    };
    var fireObjectResizeStart = function (editor, target, width, height) {
      editor.fire('ObjectResizeStart', {
        target: target,
        width: width,
        height: height
      });
    };
    var fireObjectResized = function (editor, target, width, height) {
      editor.fire('ObjectResized', {
        target: target,
        width: width,
        height: height
      });
    };

    var TableActions = function (editor, lazyWire) {
      var isTableBody = function (editor) {
        return name(getBody$1(editor)) === 'table';
      };
      var lastRowGuard = function (table) {
        var size = TableGridSize.getGridSize(table);
        return isTableBody(editor) === false || size.rows() > 1;
      };
      var lastColumnGuard = function (table) {
        var size = TableGridSize.getGridSize(table);
        return isTableBody(editor) === false || size.columns() > 1;
      };
      var cloneFormats = getCloneElements(editor);
      var execute = function (operation, guard, mutate, lazyWire) {
        return function (table, target) {
          removeDataStyle(table);
          var wire = lazyWire();
          var doc = Element.fromDom(editor.getDoc());
          var direction = TableDirection(Direction.directionAt);
          var generators = TableFill.cellOperations(mutate, doc, cloneFormats);
          return guard(table) ? operation(wire, table, target, generators, direction).bind(function (result) {
            each(result.newRows(), function (row) {
              fireNewRow(editor, row.dom());
            });
            each(result.newCells(), function (cell) {
              fireNewCell(editor, cell.dom());
            });
            return result.cursor().map(function (cell) {
              var rng = editor.dom.createRng();
              rng.setStart(cell.dom(), 0);
              rng.setEnd(cell.dom(), 0);
              return rng;
            });
          }) : Option.none();
        };
      };
      var deleteRow = execute(TableOperations.eraseRows, lastRowGuard, noop, lazyWire);
      var deleteColumn = execute(TableOperations.eraseColumns, lastColumnGuard, noop, lazyWire);
      var insertRowsBefore = execute(TableOperations.insertRowsBefore, always, noop, lazyWire);
      var insertRowsAfter = execute(TableOperations.insertRowsAfter, always, noop, lazyWire);
      var insertColumnsBefore = execute(TableOperations.insertColumnsBefore, always, CellMutations.halve, lazyWire);
      var insertColumnsAfter = execute(TableOperations.insertColumnsAfter, always, CellMutations.halve, lazyWire);
      var mergeCells = execute(TableOperations.mergeCells, always, noop, lazyWire);
      var unmergeCells = execute(TableOperations.unmergeCells, always, noop, lazyWire);
      var pasteRowsBefore = execute(TableOperations.pasteRowsBefore, always, noop, lazyWire);
      var pasteRowsAfter = execute(TableOperations.pasteRowsAfter, always, noop, lazyWire);
      var pasteCells = execute(TableOperations.pasteCells, always, noop, lazyWire);
      return {
        deleteRow: deleteRow,
        deleteColumn: deleteColumn,
        insertRowsBefore: insertRowsBefore,
        insertRowsAfter: insertRowsAfter,
        insertColumnsBefore: insertColumnsBefore,
        insertColumnsAfter: insertColumnsAfter,
        mergeCells: mergeCells,
        unmergeCells: unmergeCells,
        pasteRowsBefore: pasteRowsBefore,
        pasteRowsAfter: pasteRowsAfter,
        pasteCells: pasteCells
      };
    };

    var copyRows = function (table, target, generators) {
      var list = DetailsList.fromTable(table);
      var house = Warehouse.generate(list);
      var details = onCells(house, target);
      return details.map(function (selectedCells) {
        var grid = Transitions.toGrid(house, generators, false);
        var slicedGrid = grid.slice(selectedCells[0].row(), selectedCells[selectedCells.length - 1].row() + selectedCells[selectedCells.length - 1].rowspan());
        var slicedDetails = toDetailList(slicedGrid, generators);
        return Redraw.copy(slicedDetails);
      });
    };
    var CopyRows = { copyRows: copyRows };

    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var getTDTHOverallStyle = function (dom, elm, name) {
      var cells = dom.select('td,th', elm);
      var firstChildStyle;
      var checkChildren = function (firstChildStyle, elms) {
        for (var i = 0; i < elms.length; i++) {
          var currentStyle = dom.getStyle(elms[i], name);
          if (typeof firstChildStyle === 'undefined') {
            firstChildStyle = currentStyle;
          }
          if (firstChildStyle !== currentStyle) {
            return '';
          }
        }
        return firstChildStyle;
      };
      firstChildStyle = checkChildren(firstChildStyle, cells);
      return firstChildStyle;
    };
    var applyAlign = function (editor, elm, name) {
      if (name) {
        editor.formatter.apply('align' + name, {}, elm);
      }
    };
    var applyVAlign = function (editor, elm, name) {
      if (name) {
        editor.formatter.apply('valign' + name, {}, elm);
      }
    };
    var unApplyAlign = function (editor, elm) {
      global$1.each('left center right'.split(' '), function (name) {
        editor.formatter.remove('align' + name, {}, elm);
      });
    };
    var unApplyVAlign = function (editor, elm) {
      global$1.each('top middle bottom'.split(' '), function (name) {
        editor.formatter.remove('valign' + name, {}, elm);
      });
    };
    var Styles$1 = {
      applyAlign: applyAlign,
      applyVAlign: applyVAlign,
      unApplyAlign: unApplyAlign,
      unApplyVAlign: unApplyVAlign,
      getTDTHOverallStyle: getTDTHOverallStyle
    };

    var buildListItems = function (inputList, itemCallback, startItems) {
      var appendItems = function (values, output) {
        output = output || [];
        global$1.each(values, function (item) {
          var menuItem = { text: item.text || item.title };
          if (item.menu) {
            menuItem.menu = appendItems(item.menu);
          } else {
            menuItem.value = item.value;
            if (itemCallback) {
              itemCallback(menuItem);
            }
          }
          output.push(menuItem);
        });
        return output;
      };
      return appendItems(inputList, startItems || []);
    };
    function styleFieldHasFocus(e) {
      return e.control.rootControl.find('#style')[0].getEl().isEqualNode(domGlobals.document.activeElement);
    }
    var syncAdvancedStyleFields = function (editor, evt) {
      if (styleFieldHasFocus(evt)) {
        updateAdvancedFields(editor, evt);
      } else {
        updateStyleField(editor, evt);
      }
    };
    var updateStyleField = function (editor, evt) {
      var dom = editor.dom;
      var rootControl = evt.control.rootControl;
      var data = rootControl.toJSON();
      var css = dom.parseStyle(data.style);
      css['border-style'] = data.borderStyle;
      css['border-color'] = data.borderColor;
      css['background-color'] = data.backgroundColor;
      css.width = data.width ? addSizeSuffix(data.width) : '';
      css.height = data.height ? addSizeSuffix(data.height) : '';
      rootControl.find('#style').value(dom.serializeStyle(dom.parseStyle(dom.serializeStyle(css))));
    };
    var updateAdvancedFields = function (editor, evt) {
      var dom = editor.dom;
      var rootControl = evt.control.rootControl;
      var data = rootControl.toJSON();
      var css = dom.parseStyle(data.style);
      rootControl.find('#borderStyle').value(css['border-style'] || '');
      rootControl.find('#borderColor').value(css['border-color'] || '');
      rootControl.find('#backgroundColor').value(css['background-color'] || '');
      rootControl.find('#width').value(css.width || '');
      rootControl.find('#height').value(css.height || '');
    };
    var extractAdvancedStyles = function (dom, elm) {
      var css = dom.parseStyle(dom.getAttrib(elm, 'style'));
      var data = {};
      if (css['border-style']) {
        data.borderStyle = css['border-style'];
      }
      if (css['border-color']) {
        data.borderColor = css['border-color'];
      }
      if (css['background-color']) {
        data.backgroundColor = css['background-color'];
      }
      data.style = dom.serializeStyle(css);
      return data;
    };
    var createStyleForm = function (editor) {
      var createColorPickAction = function () {
        var colorPickerCallback = getColorPickerCallback(editor);
        if (colorPickerCallback) {
          return function (evt) {
            return colorPickerCallback.call(editor, function (value) {
              evt.control.value(value).fire('change');
            }, evt.control.value());
          };
        }
      };
      return {
        title: 'Advanced',
        type: 'form',
        defaults: { onchange: curry(updateStyleField, editor) },
        items: [
          {
            label: 'Style',
            name: 'style',
            type: 'textbox',
            onchange: curry(updateAdvancedFields, editor)
          },
          {
            type: 'form',
            padding: 0,
            formItemDefaults: {
              layout: 'grid',
              alignH: [
                'start',
                'right'
              ]
            },
            defaults: { size: 7 },
            items: [
              {
                label: 'Border style',
                type: 'listbox',
                name: 'borderStyle',
                width: 90,
                onselect: curry(updateStyleField, editor),
                values: [
                  {
                    text: 'Select...',
                    value: ''
                  },
                  {
                    text: 'Solid',
                    value: 'solid'
                  },
                  {
                    text: 'Dotted',
                    value: 'dotted'
                  },
                  {
                    text: 'Dashed',
                    value: 'dashed'
                  },
                  {
                    text: 'Double',
                    value: 'double'
                  },
                  {
                    text: 'Groove',
                    value: 'groove'
                  },
                  {
                    text: 'Ridge',
                    value: 'ridge'
                  },
                  {
                    text: 'Inset',
                    value: 'inset'
                  },
                  {
                    text: 'Outset',
                    value: 'outset'
                  },
                  {
                    text: 'None',
                    value: 'none'
                  },
                  {
                    text: 'Hidden',
                    value: 'hidden'
                  }
                ]
              },
              {
                label: 'Border color',
                type: 'colorbox',
                name: 'borderColor',
                onaction: createColorPickAction()
              },
              {
                label: 'Background color',
                type: 'colorbox',
                name: 'backgroundColor',
                onaction: createColorPickAction()
              }
            ]
          }
        ]
      };
    };
    var Helpers = {
      createStyleForm: createStyleForm,
      buildListItems: buildListItems,
      updateStyleField: updateStyleField,
      extractAdvancedStyles: extractAdvancedStyles,
      updateAdvancedFields: updateAdvancedFields,
      syncAdvancedStyleFields: syncAdvancedStyleFields
    };

    var updateStyles = function (elm, cssText) {
      delete elm.dataset.mceStyle;
      elm.style.cssText += ';' + cssText;
    };
    var extractDataFromElement = function (editor, elm) {
      var dom = editor.dom;
      var data = {
        width: dom.getStyle(elm, 'width') || dom.getAttrib(elm, 'width'),
        height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
        scope: dom.getAttrib(elm, 'scope'),
        class: dom.getAttrib(elm, 'class'),
        type: elm.nodeName.toLowerCase(),
        style: '',
        align: '',
        valign: ''
      };
      global$1.each('left center right'.split(' '), function (name) {
        if (editor.formatter.matchNode(elm, 'align' + name)) {
          data.align = name;
        }
      });
      global$1.each('top middle bottom'.split(' '), function (name) {
        if (editor.formatter.matchNode(elm, 'valign' + name)) {
          data.valign = name;
        }
      });
      if (hasAdvancedCellTab(editor)) {
        global$1.extend(data, Helpers.extractAdvancedStyles(dom, elm));
      }
      return data;
    };
    var onSubmitCellForm = function (editor, cells, evt) {
      var dom = editor.dom;
      var data;
      function setAttrib(elm, name, value) {
        if (cells.length === 1 || value) {
          dom.setAttrib(elm, name, value);
        }
      }
      function setStyle(elm, name, value) {
        if (cells.length === 1 || value) {
          dom.setStyle(elm, name, value);
        }
      }
      if (hasAdvancedCellTab(editor)) {
        Helpers.syncAdvancedStyleFields(editor, evt);
      }
      data = evt.control.rootControl.toJSON();
      editor.undoManager.transact(function () {
        global$1.each(cells, function (cellElm) {
          setAttrib(cellElm, 'scope', data.scope);
          if (cells.length === 1) {
            setAttrib(cellElm, 'style', data.style);
          } else {
            updateStyles(cellElm, data.style);
          }
          setAttrib(cellElm, 'class', data.class);
          setStyle(cellElm, 'width', addSizeSuffix(data.width));
          setStyle(cellElm, 'height', addSizeSuffix(data.height));
          if (data.type && cellElm.nodeName.toLowerCase() !== data.type) {
            cellElm = dom.rename(cellElm, data.type);
          }
          if (cells.length === 1) {
            Styles$1.unApplyAlign(editor, cellElm);
            Styles$1.unApplyVAlign(editor, cellElm);
          }
          if (data.align) {
            Styles$1.applyAlign(editor, cellElm, data.align);
          }
          if (data.valign) {
            Styles$1.applyVAlign(editor, cellElm, data.valign);
          }
        });
        editor.focus();
      });
    };
    var open = function (editor) {
      var cellElm, data, classListCtrl, cells = [];
      cells = editor.dom.select('td[data-mce-selected],th[data-mce-selected]');
      cellElm = editor.dom.getParent(editor.selection.getStart(), 'td,th');
      if (!cells.length && cellElm) {
        cells.push(cellElm);
      }
      cellElm = cellElm || cells[0];
      if (!cellElm) {
        return;
      }
      if (cells.length > 1) {
        data = {
          width: '',
          height: '',
          scope: '',
          class: '',
          align: '',
          valign: '',
          style: '',
          type: cellElm.nodeName.toLowerCase()
        };
      } else {
        data = extractDataFromElement(editor, cellElm);
      }
      if (getCellClassList(editor).length > 0) {
        classListCtrl = {
          name: 'class',
          type: 'listbox',
          label: 'Class',
          values: Helpers.buildListItems(getCellClassList(editor), function (item) {
            if (item.value) {
              item.textStyle = function () {
                return editor.formatter.getCssText({
                  block: 'td',
                  classes: [item.value]
                });
              };
            }
          })
        };
      }
      var generalCellForm = {
        type: 'form',
        layout: 'flex',
        direction: 'column',
        labelGapCalc: 'children',
        padding: 0,
        items: [
          {
            type: 'form',
            layout: 'grid',
            columns: 2,
            labelGapCalc: false,
            padding: 0,
            defaults: {
              type: 'textbox',
              maxWidth: 50
            },
            items: [
              {
                label: 'Width',
                name: 'width',
                onchange: curry(Helpers.updateStyleField, editor)
              },
              {
                label: 'Height',
                name: 'height',
                onchange: curry(Helpers.updateStyleField, editor)
              },
              {
                label: 'Cell type',
                name: 'type',
                type: 'listbox',
                text: 'None',
                minWidth: 90,
                maxWidth: null,
                values: [
                  {
                    text: 'Cell',
                    value: 'td'
                  },
                  {
                    text: 'Header cell',
                    value: 'th'
                  }
                ]
              },
              {
                label: 'Scope',
                name: 'scope',
                type: 'listbox',
                text: 'None',
                minWidth: 90,
                maxWidth: null,
                values: [
                  {
                    text: 'None',
                    value: ''
                  },
                  {
                    text: 'Row',
                    value: 'row'
                  },
                  {
                    text: 'Column',
                    value: 'col'
                  },
                  {
                    text: 'Row group',
                    value: 'rowgroup'
                  },
                  {
                    text: 'Column group',
                    value: 'colgroup'
                  }
                ]
              },
              {
                label: 'H Align',
                name: 'align',
                type: 'listbox',
                text: 'None',
                minWidth: 90,
                maxWidth: null,
                values: [
                  {
                    text: 'None',
                    value: ''
                  },
                  {
                    text: 'Left',
                    value: 'left'
                  },
                  {
                    text: 'Center',
                    value: 'center'
                  },
                  {
                    text: 'Right',
                    value: 'right'
                  }
                ]
              },
              {
                label: 'V Align',
                name: 'valign',
                type: 'listbox',
                text: 'None',
                minWidth: 90,
                maxWidth: null,
                values: [
                  {
                    text: 'None',
                    value: ''
                  },
                  {
                    text: 'Top',
                    value: 'top'
                  },
                  {
                    text: 'Middle',
                    value: 'middle'
                  },
                  {
                    text: 'Bottom',
                    value: 'bottom'
                  }
                ]
              }
            ]
          },
          classListCtrl
        ]
      };
      if (hasAdvancedCellTab(editor)) {
        editor.windowManager.open({
          title: 'Cell properties',
          bodyType: 'tabpanel',
          data: data,
          body: [
            {
              title: 'General',
              type: 'form',
              items: generalCellForm
            },
            Helpers.createStyleForm(editor)
          ],
          onsubmit: curry(onSubmitCellForm, editor, cells)
        });
      } else {
        editor.windowManager.open({
          title: 'Cell properties',
          data: data,
          body: generalCellForm,
          onsubmit: curry(onSubmitCellForm, editor, cells)
        });
      }
    };
    var CellDialog = { open: open };

    var extractDataFromElement$1 = function (editor, elm) {
      var dom = editor.dom;
      var data = {
        height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
        scope: dom.getAttrib(elm, 'scope'),
        class: dom.getAttrib(elm, 'class'),
        align: '',
        style: '',
        type: elm.parentNode.nodeName.toLowerCase()
      };
      global$1.each('left center right'.split(' '), function (name) {
        if (editor.formatter.matchNode(elm, 'align' + name)) {
          data.align = name;
        }
      });
      if (hasAdvancedRowTab(editor)) {
        global$1.extend(data, Helpers.extractAdvancedStyles(dom, elm));
      }
      return data;
    };
    var switchRowType = function (dom, rowElm, toType) {
      var tableElm = dom.getParent(rowElm, 'table');
      var oldParentElm = rowElm.parentNode;
      var parentElm = dom.select(toType, tableElm)[0];
      if (!parentElm) {
        parentElm = dom.create(toType);
        if (tableElm.firstChild) {
          if (tableElm.firstChild.nodeName === 'CAPTION') {
            dom.insertAfter(parentElm, tableElm.firstChild);
          } else {
            tableElm.insertBefore(parentElm, tableElm.firstChild);
          }
        } else {
          tableElm.appendChild(parentElm);
        }
      }
      parentElm.appendChild(rowElm);
      if (!oldParentElm.hasChildNodes()) {
        dom.remove(oldParentElm);
      }
    };
    function onSubmitRowForm(editor, rows, oldData, evt) {
      var dom = editor.dom;
      function setAttrib(elm, name, value) {
        if (rows.length === 1 || value) {
          dom.setAttrib(elm, name, value);
        }
      }
      function setStyle(elm, name, value) {
        if (rows.length === 1 || value) {
          dom.setStyle(elm, name, value);
        }
      }
      if (hasAdvancedRowTab(editor)) {
        Helpers.syncAdvancedStyleFields(editor, evt);
      }
      var data = evt.control.rootControl.toJSON();
      editor.undoManager.transact(function () {
        global$1.each(rows, function (rowElm) {
          setAttrib(rowElm, 'scope', data.scope);
          setAttrib(rowElm, 'style', data.style);
          setAttrib(rowElm, 'class', data.class);
          setStyle(rowElm, 'height', addSizeSuffix(data.height));
          if (data.type !== rowElm.parentNode.nodeName.toLowerCase()) {
            switchRowType(editor.dom, rowElm, data.type);
          }
          if (data.align !== oldData.align) {
            Styles$1.unApplyAlign(editor, rowElm);
            Styles$1.applyAlign(editor, rowElm, data.align);
          }
        });
        editor.focus();
      });
    }
    var open$1 = function (editor) {
      var dom = editor.dom;
      var tableElm, cellElm, rowElm, classListCtrl, data;
      var rows = [];
      var generalRowForm;
      tableElm = dom.getParent(editor.selection.getStart(), 'table');
      cellElm = dom.getParent(editor.selection.getStart(), 'td,th');
      global$1.each(tableElm.rows, function (row) {
        global$1.each(row.cells, function (cell) {
          if (dom.getAttrib(cell, 'data-mce-selected') || cell === cellElm) {
            rows.push(row);
            return false;
          }
        });
      });
      rowElm = rows[0];
      if (!rowElm) {
        return;
      }
      if (rows.length > 1) {
        data = {
          height: '',
          scope: '',
          style: '',
          class: '',
          align: '',
          type: rowElm.parentNode.nodeName.toLowerCase()
        };
      } else {
        data = extractDataFromElement$1(editor, rowElm);
      }
      if (getRowClassList(editor).length > 0) {
        classListCtrl = {
          name: 'class',
          type: 'listbox',
          label: 'Class',
          values: Helpers.buildListItems(getRowClassList(editor), function (item) {
            if (item.value) {
              item.textStyle = function () {
                return editor.formatter.getCssText({
                  block: 'tr',
                  classes: [item.value]
                });
              };
            }
          })
        };
      }
      generalRowForm = {
        type: 'form',
        columns: 2,
        padding: 0,
        defaults: { type: 'textbox' },
        items: [
          {
            type: 'listbox',
            name: 'type',
            label: 'Row type',
            text: 'Header',
            maxWidth: null,
            values: [
              {
                text: 'Header',
                value: 'thead'
              },
              {
                text: 'Body',
                value: 'tbody'
              },
              {
                text: 'Footer',
                value: 'tfoot'
              }
            ]
          },
          {
            type: 'listbox',
            name: 'align',
            label: 'Alignment',
            text: 'None',
            maxWidth: null,
            values: [
              {
                text: 'None',
                value: ''
              },
              {
                text: 'Left',
                value: 'left'
              },
              {
                text: 'Center',
                value: 'center'
              },
              {
                text: 'Right',
                value: 'right'
              }
            ]
          },
          {
            label: 'Height',
            name: 'height'
          },
          classListCtrl
        ]
      };
      if (hasAdvancedRowTab(editor)) {
        editor.windowManager.open({
          title: 'Row properties',
          data: data,
          bodyType: 'tabpanel',
          body: [
            {
              title: 'General',
              type: 'form',
              items: generalRowForm
            },
            Helpers.createStyleForm(editor)
          ],
          onsubmit: curry(onSubmitRowForm, editor, rows, data)
        });
      } else {
        editor.windowManager.open({
          title: 'Row properties',
          data: data,
          body: generalRowForm,
          onsubmit: curry(onSubmitRowForm, editor, rows, data)
        });
      }
    };
    var RowDialog = { open: open$1 };

    var global$2 = tinymce.util.Tools.resolve('tinymce.Env');

    var DefaultRenderOptions = {
      styles: {
        'border-collapse': 'collapse',
        'width': '100%'
      },
      attributes: { border: '1' },
      percentages: true
    };
    var makeTable = function () {
      return Element.fromTag('table');
    };
    var tableBody = function () {
      return Element.fromTag('tbody');
    };
    var tableRow = function () {
      return Element.fromTag('tr');
    };
    var tableHeaderCell = function () {
      return Element.fromTag('th');
    };
    var tableCell = function () {
      return Element.fromTag('td');
    };
    var render$1 = function (rows, columns, rowHeaders, columnHeaders, renderOpts) {
      if (renderOpts === void 0) {
        renderOpts = DefaultRenderOptions;
      }
      var table = makeTable();
      setAll$1(table, renderOpts.styles);
      setAll(table, renderOpts.attributes);
      var tbody = tableBody();
      append(table, tbody);
      var trs = [];
      for (var i = 0; i < rows; i++) {
        var tr = tableRow();
        for (var j = 0; j < columns; j++) {
          var td = i < rowHeaders || j < columnHeaders ? tableHeaderCell() : tableCell();
          if (j < columnHeaders) {
            set(td, 'scope', 'row');
          }
          if (i < rowHeaders) {
            set(td, 'scope', 'col');
          }
          append(td, Element.fromTag('br'));
          if (renderOpts.percentages) {
            set$1(td, 'width', 100 / columns + '%');
          }
          append(tr, td);
        }
        trs.push(tr);
      }
      append$1(tbody, trs);
      return table;
    };

    var get$7 = function (element) {
      return element.dom().innerHTML;
    };
    var getOuter$2 = function (element) {
      var container = Element.fromTag('div');
      var clone = Element.fromDom(element.dom().cloneNode(true));
      append(container, clone);
      return get$7(container);
    };

    var placeCaretInCell = function (editor, cell) {
      editor.selection.select(cell.dom(), true);
      editor.selection.collapse(true);
    };
    var selectFirstCellInTable = function (editor, tableElm) {
      descendant$1(tableElm, 'td,th').each(curry(placeCaretInCell, editor));
    };
    var fireEvents = function (editor, table) {
      each(descendants$1(table, 'tr'), function (row) {
        fireNewRow(editor, row.dom());
        each(descendants$1(row, 'th,td'), function (cell) {
          fireNewCell(editor, cell.dom());
        });
      });
    };
    var isPercentage = function (width) {
      return isString(width) && width.indexOf('%') !== -1;
    };
    var insert$1 = function (editor, columns, rows) {
      var defaultStyles = getDefaultStyles(editor);
      var options = {
        styles: defaultStyles,
        attributes: getDefaultAttributes(editor),
        percentages: isPercentage(defaultStyles.width) && !isPixelsForced(editor)
      };
      var table = render$1(rows, columns, 0, 0, options);
      set(table, 'data-mce-id', '__mce');
      var html = getOuter$2(table);
      editor.insertContent(html);
      return descendant$1(getBody$1(editor), 'table[data-mce-id="__mce"]').map(function (table) {
        if (isPixelsForced(editor)) {
          set$1(table, 'width', get$1(table, 'width'));
        }
        remove(table, 'data-mce-id');
        fireEvents(editor, table);
        selectFirstCellInTable(editor, table);
        return table.dom();
      }).getOr(null);
    };
    var InsertTable = { insert: insert$1 };

    function styleTDTH(dom, elm, name, value) {
      if (elm.tagName === 'TD' || elm.tagName === 'TH') {
        dom.setStyle(elm, name, value);
      } else {
        if (elm.children) {
          for (var i = 0; i < elm.children.length; i++) {
            styleTDTH(dom, elm.children[i], name, value);
          }
        }
      }
    }
    var extractDataFromElement$2 = function (editor, tableElm) {
      var dom = editor.dom;
      var data = {
        width: dom.getStyle(tableElm, 'width') || dom.getAttrib(tableElm, 'width'),
        height: dom.getStyle(tableElm, 'height') || dom.getAttrib(tableElm, 'height'),
        cellspacing: dom.getStyle(tableElm, 'border-spacing') || dom.getAttrib(tableElm, 'cellspacing'),
        cellpadding: dom.getAttrib(tableElm, 'data-mce-cell-padding') || dom.getAttrib(tableElm, 'cellpadding') || Styles$1.getTDTHOverallStyle(editor.dom, tableElm, 'padding'),
        border: dom.getAttrib(tableElm, 'data-mce-border') || dom.getAttrib(tableElm, 'border') || Styles$1.getTDTHOverallStyle(editor.dom, tableElm, 'border'),
        borderColor: dom.getAttrib(tableElm, 'data-mce-border-color'),
        caption: !!dom.select('caption', tableElm)[0],
        class: dom.getAttrib(tableElm, 'class')
      };
      global$1.each('left center right'.split(' '), function (name) {
        if (editor.formatter.matchNode(tableElm, 'align' + name)) {
          data.align = name;
        }
      });
      if (hasAdvancedTableTab(editor)) {
        global$1.extend(data, Helpers.extractAdvancedStyles(dom, tableElm));
      }
      return data;
    };
    var applyDataToElement = function (editor, tableElm, data) {
      var dom = editor.dom;
      var attrs = {};
      var styles = {};
      attrs.class = data.class;
      styles.height = addSizeSuffix(data.height);
      if (dom.getAttrib(tableElm, 'width') && !shouldStyleWithCss(editor)) {
        attrs.width = removePxSuffix(data.width);
      } else {
        styles.width = addSizeSuffix(data.width);
      }
      if (shouldStyleWithCss(editor)) {
        styles['border-width'] = addSizeSuffix(data.border);
        styles['border-spacing'] = addSizeSuffix(data.cellspacing);
        global$1.extend(attrs, {
          'data-mce-border-color': data.borderColor,
          'data-mce-cell-padding': data.cellpadding,
          'data-mce-border': data.border
        });
      } else {
        global$1.extend(attrs, {
          border: data.border,
          cellpadding: data.cellpadding,
          cellspacing: data.cellspacing
        });
      }
      if (shouldStyleWithCss(editor)) {
        if (tableElm.children) {
          for (var i = 0; i < tableElm.children.length; i++) {
            styleTDTH(dom, tableElm.children[i], {
              'border-width': addSizeSuffix(data.border),
              'border-color': data.borderColor,
              'padding': addSizeSuffix(data.cellpadding)
            });
          }
        }
      }
      if (data.style) {
        global$1.extend(styles, dom.parseStyle(data.style));
      } else {
        styles = global$1.extend({}, dom.parseStyle(dom.getAttrib(tableElm, 'style')), styles);
      }
      attrs.style = dom.serializeStyle(styles);
      dom.setAttribs(tableElm, attrs);
    };
    var onSubmitTableForm = function (editor, tableElm, evt) {
      var dom = editor.dom;
      var captionElm;
      var data;
      if (hasAdvancedTableTab(editor)) {
        Helpers.syncAdvancedStyleFields(editor, evt);
      }
      data = evt.control.rootControl.toJSON();
      if (data.class === false) {
        delete data.class;
      }
      editor.undoManager.transact(function () {
        if (!tableElm) {
          tableElm = InsertTable.insert(editor, data.cols || 1, data.rows || 1);
        }
        applyDataToElement(editor, tableElm, data);
        captionElm = dom.select('caption', tableElm)[0];
        if (captionElm && !data.caption) {
          dom.remove(captionElm);
        }
        if (!captionElm && data.caption) {
          captionElm = dom.create('caption');
          captionElm.innerHTML = !global$2.ie ? '<br data-mce-bogus="1"/>' : '\xA0';
          tableElm.insertBefore(captionElm, tableElm.firstChild);
        }
        Styles$1.unApplyAlign(editor, tableElm);
        if (data.align) {
          Styles$1.applyAlign(editor, tableElm, data.align);
        }
        editor.focus();
        editor.addVisual();
      });
    };
    var open$2 = function (editor, isProps) {
      var dom = editor.dom;
      var tableElm, colsCtrl, rowsCtrl, classListCtrl, data = {}, generalTableForm;
      if (isProps === true) {
        tableElm = dom.getParent(editor.selection.getStart(), 'table');
        if (tableElm) {
          data = extractDataFromElement$2(editor, tableElm);
        }
      } else {
        colsCtrl = {
          label: 'Cols',
          name: 'cols'
        };
        rowsCtrl = {
          label: 'Rows',
          name: 'rows'
        };
      }
      if (getTableClassList(editor).length > 0) {
        if (data.class) {
          data.class = data.class.replace(/\s*mce\-item\-table\s*/g, '');
        }
        classListCtrl = {
          name: 'class',
          type: 'listbox',
          label: 'Class',
          values: Helpers.buildListItems(getTableClassList(editor), function (item) {
            if (item.value) {
              item.textStyle = function () {
                return editor.formatter.getCssText({
                  block: 'table',
                  classes: [item.value]
                });
              };
            }
          })
        };
      }
      generalTableForm = {
        type: 'form',
        layout: 'flex',
        direction: 'column',
        labelGapCalc: 'children',
        padding: 0,
        items: [
          {
            type: 'form',
            labelGapCalc: false,
            padding: 0,
            layout: 'grid',
            columns: 2,
            defaults: {
              type: 'textbox',
              maxWidth: 50
            },
            items: hasAppearanceOptions(editor) ? [
              colsCtrl,
              rowsCtrl,
              {
                label: 'Width',
                name: 'width',
                onchange: curry(Helpers.updateStyleField, editor)
              },
              {
                label: 'Height',
                name: 'height',
                onchange: curry(Helpers.updateStyleField, editor)
              },
              {
                label: 'Cell spacing',
                name: 'cellspacing'
              },
              {
                label: 'Cell padding',
                name: 'cellpadding'
              },
              {
                label: 'Border',
                name: 'border'
              },
              {
                label: 'Caption',
                name: 'caption',
                type: 'checkbox'
              }
            ] : [
              colsCtrl,
              rowsCtrl,
              {
                label: 'Width',
                name: 'width',
                onchange: curry(Helpers.updateStyleField, editor)
              },
              {
                label: 'Height',
                name: 'height',
                onchange: curry(Helpers.updateStyleField, editor)
              }
            ]
          },
          {
            label: 'Alignment',
            name: 'align',
            type: 'listbox',
            text: 'None',
            values: [
              {
                text: 'None',
                value: ''
              },
              {
                text: 'Left',
                value: 'left'
              },
              {
                text: 'Center',
                value: 'center'
              },
              {
                text: 'Right',
                value: 'right'
              }
            ]
          },
          classListCtrl
        ]
      };
      if (hasAdvancedTableTab(editor)) {
        editor.windowManager.open({
          title: 'Table properties',
          data: data,
          bodyType: 'tabpanel',
          body: [
            {
              title: 'General',
              type: 'form',
              items: generalTableForm
            },
            Helpers.createStyleForm(editor)
          ],
          onsubmit: curry(onSubmitTableForm, editor, tableElm)
        });
      } else {
        editor.windowManager.open({
          title: 'Table properties',
          data: data,
          body: generalTableForm,
          onsubmit: curry(onSubmitTableForm, editor, tableElm)
        });
      }
    };
    var TableDialog = { open: open$2 };

    var each$3 = global$1.each;
    var registerCommands = function (editor, actions, cellSelection, selections, clipboardRows) {
      var isRoot = getIsRoot(editor);
      var eraseTable = function () {
        getSelectionStartCell().orThunk(getSelectionStartCaption).each(function (cellOrCaption) {
          var table = TableLookup.table(cellOrCaption, isRoot);
          table.filter(not(isRoot)).each(function (table) {
            var cursor = Element.fromText('');
            after(table, cursor);
            remove$2(table);
            var rng = editor.dom.createRng();
            rng.setStart(cursor.dom(), 0);
            rng.setEnd(cursor.dom(), 0);
            editor.selection.setRng(rng);
          });
        });
      };
      var getSelectionStartFromSelector = function (selector) {
        return function () {
          return Option.from(editor.dom.getParent(editor.selection.getStart(), selector)).map(Element.fromDom);
        };
      };
      var getSelectionStartCaption = getSelectionStartFromSelector('caption');
      var getSelectionStartCell = getSelectionStartFromSelector('th,td');
      var getTableFromCell = function (cell) {
        return TableLookup.table(cell, isRoot);
      };
      var getSize = function (table) {
        return {
          width: getPixelWidth$1(table.dom()),
          height: getPixelWidth$1(table.dom())
        };
      };
      var resizeChange = function (editor, oldSize, table) {
        var newSize = getSize(table);
        if (oldSize.width !== newSize.width || oldSize.height !== newSize.height) {
          fireObjectResizeStart(editor, table.dom(), oldSize.width, oldSize.height);
          fireObjectResized(editor, table.dom(), newSize.width, newSize.height);
        }
      };
      var actOnSelection = function (execute) {
        getSelectionStartCell().each(function (cell) {
          getTableFromCell(cell).each(function (table) {
            var targets = TableTargets.forMenu(selections, table, cell);
            var beforeSize = getSize(table);
            execute(table, targets).each(function (rng) {
              resizeChange(editor, beforeSize, table);
              editor.selection.setRng(rng);
              editor.focus();
              cellSelection.clear(table);
              removeDataStyle(table);
            });
          });
        });
      };
      var copyRowSelection = function (execute) {
        return getSelectionStartCell().bind(function (cell) {
          return getTableFromCell(cell).bind(function (table) {
            var doc = Element.fromDom(editor.getDoc());
            var targets = TableTargets.forMenu(selections, table, cell);
            var generators = TableFill.cellOperations(noop, doc, Option.none());
            return CopyRows.copyRows(table, targets, generators);
          });
        });
      };
      var pasteOnSelection = function (execute) {
        clipboardRows.get().each(function (rows) {
          var clonedRows = map(rows, function (row) {
            return deep(row);
          });
          getSelectionStartCell().each(function (cell) {
            getTableFromCell(cell).each(function (table) {
              var doc = Element.fromDom(editor.getDoc());
              var generators = TableFill.paste(doc);
              var targets = TableTargets.pasteRows(selections, table, cell, clonedRows, generators);
              execute(table, targets).each(function (rng) {
                editor.selection.setRng(rng);
                editor.focus();
                cellSelection.clear(table);
              });
            });
          });
        });
      };
      each$3({
        mceTableSplitCells: function () {
          actOnSelection(actions.unmergeCells);
        },
        mceTableMergeCells: function () {
          actOnSelection(actions.mergeCells);
        },
        mceTableInsertRowBefore: function () {
          actOnSelection(actions.insertRowsBefore);
        },
        mceTableInsertRowAfter: function () {
          actOnSelection(actions.insertRowsAfter);
        },
        mceTableInsertColBefore: function () {
          actOnSelection(actions.insertColumnsBefore);
        },
        mceTableInsertColAfter: function () {
          actOnSelection(actions.insertColumnsAfter);
        },
        mceTableDeleteCol: function () {
          actOnSelection(actions.deleteColumn);
        },
        mceTableDeleteRow: function () {
          actOnSelection(actions.deleteRow);
        },
        mceTableCutRow: function (grid) {
          clipboardRows.set(copyRowSelection());
          actOnSelection(actions.deleteRow);
        },
        mceTableCopyRow: function (grid) {
          clipboardRows.set(copyRowSelection());
        },
        mceTablePasteRowBefore: function (grid) {
          pasteOnSelection(actions.pasteRowsBefore);
        },
        mceTablePasteRowAfter: function (grid) {
          pasteOnSelection(actions.pasteRowsAfter);
        },
        mceTableDelete: eraseTable
      }, function (func, name) {
        editor.addCommand(name, func);
      });
      each$3({
        mceInsertTable: curry(TableDialog.open, editor),
        mceTableProps: curry(TableDialog.open, editor, true),
        mceTableRowProps: curry(RowDialog.open, editor),
        mceTableCellProps: curry(CellDialog.open, editor)
      }, function (func, name) {
        editor.addCommand(name, function (ui, val) {
          func(val);
        });
      });
    };
    var Commands = { registerCommands: registerCommands };

    var only = function (element) {
      var parent = Option.from(element.dom().documentElement).map(Element.fromDom).getOr(element);
      return {
        parent: constant(parent),
        view: constant(element),
        origin: constant(Position(0, 0))
      };
    };
    var detached = function (editable, chrome) {
      var origin = function () {
        return absolute(chrome);
      };
      return {
        parent: constant(chrome),
        view: constant(editable),
        origin: origin
      };
    };
    var body$1 = function (editable, chrome) {
      return {
        parent: constant(chrome),
        view: constant(editable),
        origin: constant(Position(0, 0))
      };
    };
    var ResizeWire = {
      only: only,
      detached: detached,
      body: body$1
    };

    var Event = function (fields) {
      var struct = Immutable.apply(null, fields);
      var handlers = [];
      var bind = function (handler) {
        if (handler === undefined) {
          throw new Error('Event bind error: undefined handler');
        }
        handlers.push(handler);
      };
      var unbind = function (handler) {
        handlers = filter(handlers, function (h) {
          return h !== handler;
        });
      };
      var trigger = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var event = struct.apply(null, args);
        each(handlers, function (handler) {
          handler(event);
        });
      };
      return {
        bind: bind,
        unbind: unbind,
        trigger: trigger
      };
    };

    var create$1 = function (typeDefs) {
      var registry = map$1(typeDefs, function (event) {
        return {
          bind: event.bind,
          unbind: event.unbind
        };
      });
      var trigger = map$1(typeDefs, function (event) {
        return event.trigger;
      });
      return {
        registry: registry,
        trigger: trigger
      };
    };
    var Events = { create: create$1 };

    var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
      return {
        target: constant(target),
        x: constant(x),
        y: constant(y),
        stop: stop,
        prevent: prevent,
        kill: kill,
        raw: constant(raw)
      };
    };
    var handle = function (filter, handler) {
      return function (rawEvent) {
        if (!filter(rawEvent)) {
          return;
        }
        var target = Element.fromDom(rawEvent.target);
        var stop = function () {
          rawEvent.stopPropagation();
        };
        var prevent = function () {
          rawEvent.preventDefault();
        };
        var kill = compose(prevent, stop);
        var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
        handler(evt);
      };
    };
    var binder = function (element, event, filter, handler, useCapture) {
      var wrapped = handle(filter, handler);
      element.dom().addEventListener(event, wrapped, useCapture);
      return { unbind: curry(unbind, element, event, wrapped, useCapture) };
    };
    var bind$1 = function (element, event, filter, handler) {
      return binder(element, event, filter, handler, false);
    };
    var unbind = function (element, event, handler, useCapture) {
      element.dom().removeEventListener(event, handler, useCapture);
    };

    var filter$1 = constant(true);
    var bind$2 = function (element, event, handler) {
      return bind$1(element, event, filter$1, handler);
    };

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var shallow$1 = function (old, nu) {
      return nu;
    };
    var baseMerge = function (merger) {
      return function () {
        var objects = new Array(arguments.length);
        for (var i = 0; i < objects.length; i++) {
          objects[i] = arguments[i];
        }
        if (objects.length === 0) {
          throw new Error('Can\'t merge zero objects');
        }
        var ret = {};
        for (var j = 0; j < objects.length; j++) {
          var curObject = objects[j];
          for (var key in curObject) {
            if (hasOwnProperty.call(curObject, key)) {
              ret[key] = merger(ret[key], curObject[key]);
            }
          }
        }
        return ret;
      };
    };
    var merge$3 = baseMerge(shallow$1);

    var styles$1 = css('ephox-dragster');
    var Styles$2 = { resolve: styles$1.resolve };

    var Blocker = function (options) {
      var settings = merge$3({ layerClass: Styles$2.resolve('blocker') }, options);
      var div = Element.fromTag('div');
      set(div, 'role', 'presentation');
      setAll$1(div, {
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%'
      });
      add$2(div, Styles$2.resolve('blocker'));
      add$2(div, settings.layerClass);
      var element = function () {
        return div;
      };
      var destroy = function () {
        remove$2(div);
      };
      return {
        element: element,
        destroy: destroy
      };
    };

    var DragMode = exactly([
      'compare',
      'extract',
      'mutate',
      'sink'
    ]);
    var DragSink = exactly([
      'element',
      'start',
      'stop',
      'destroy'
    ]);
    var DragApi = exactly([
      'forceDrop',
      'drop',
      'move',
      'delayDrop'
    ]);

    var compare = function (old, nu) {
      return Position(nu.left() - old.left(), nu.top() - old.top());
    };
    var extract$1 = function (event) {
      return Option.some(Position(event.x(), event.y()));
    };
    var mutate = function (mutation, info) {
      mutation.mutate(info.left(), info.top());
    };
    var sink = function (dragApi, settings) {
      var blocker = Blocker(settings);
      var mdown = bind$2(blocker.element(), 'mousedown', dragApi.forceDrop);
      var mup = bind$2(blocker.element(), 'mouseup', dragApi.drop);
      var mmove = bind$2(blocker.element(), 'mousemove', dragApi.move);
      var mout = bind$2(blocker.element(), 'mouseout', dragApi.delayDrop);
      var destroy = function () {
        blocker.destroy();
        mup.unbind();
        mmove.unbind();
        mout.unbind();
        mdown.unbind();
      };
      var start = function (parent) {
        append(parent, blocker.element());
      };
      var stop = function () {
        remove$2(blocker.element());
      };
      return DragSink({
        element: blocker.element,
        start: start,
        stop: stop,
        destroy: destroy
      });
    };
    var MouseDrag = DragMode({
      compare: compare,
      extract: extract$1,
      sink: sink,
      mutate: mutate
    });

    var last$2 = function (fn, rate) {
      var timer = null;
      var cancel = function () {
        if (timer !== null) {
          domGlobals.clearTimeout(timer);
          timer = null;
        }
      };
      var throttle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (timer !== null) {
          domGlobals.clearTimeout(timer);
        }
        timer = domGlobals.setTimeout(function () {
          fn.apply(null, args);
          timer = null;
        }, rate);
      };
      return {
        cancel: cancel,
        throttle: throttle
      };
    };

    function InDrag () {
      var previous = Option.none();
      var reset = function () {
        previous = Option.none();
      };
      var update = function (mode, nu) {
        var result = previous.map(function (old) {
          return mode.compare(old, nu);
        });
        previous = Option.some(nu);
        return result;
      };
      var onEvent = function (event, mode) {
        var dataOption = mode.extract(event);
        dataOption.each(function (data) {
          var offset = update(mode, data);
          offset.each(function (d) {
            events.trigger.move(d);
          });
        });
      };
      var events = Events.create({ move: Event(['info']) });
      return {
        onEvent: onEvent,
        reset: reset,
        events: events.registry
      };
    }

    function NoDrag () {
      return {
        onEvent: noop,
        reset: noop
      };
    }

    function Movement () {
      var noDragState = NoDrag();
      var inDragState = InDrag();
      var dragState = noDragState;
      var on = function () {
        dragState.reset();
        dragState = inDragState;
      };
      var off = function () {
        dragState.reset();
        dragState = noDragState;
      };
      var onEvent = function (event, mode) {
        dragState.onEvent(event, mode);
      };
      var isOn = function () {
        return dragState === inDragState;
      };
      return {
        on: on,
        off: off,
        isOn: isOn,
        onEvent: onEvent,
        events: inDragState.events
      };
    }

    var setup = function (mutation, mode, settings) {
      var active = false;
      var events = Events.create({
        start: Event([]),
        stop: Event([])
      });
      var movement = Movement();
      var drop = function () {
        sink.stop();
        if (movement.isOn()) {
          movement.off();
          events.trigger.stop();
        }
      };
      var throttledDrop = last$2(drop, 200);
      var go = function (parent) {
        sink.start(parent);
        movement.on();
        events.trigger.start();
      };
      var mousemove = function (event) {
        throttledDrop.cancel();
        movement.onEvent(event, mode);
      };
      movement.events.move.bind(function (event) {
        mode.mutate(mutation, event.info());
      });
      var on = function () {
        active = true;
      };
      var off = function () {
        active = false;
      };
      var runIfActive = function (f) {
        return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (active) {
            f.apply(null, args);
          }
        };
      };
      var sink = mode.sink(DragApi({
        forceDrop: drop,
        drop: runIfActive(drop),
        move: runIfActive(mousemove),
        delayDrop: runIfActive(throttledDrop.throttle)
      }), settings);
      var destroy = function () {
        sink.destroy();
      };
      return {
        element: sink.element,
        go: go,
        on: on,
        off: off,
        destroy: destroy,
        events: events.registry
      };
    };
    var Dragging = { setup: setup };

    var transform$1 = function (mutation, settings) {
      if (settings === void 0) {
        settings = {};
      }
      var mode = settings.mode !== undefined ? settings.mode : MouseDrag;
      return Dragging.setup(mutation, mode, settings);
    };
    var Dragger = { transform: transform$1 };

    var Mutation = function () {
      var events = Events.create({
        drag: Event([
          'xDelta',
          'yDelta'
        ])
      });
      var mutate = function (x, y) {
        events.trigger.drag(x, y);
      };
      return {
        mutate: mutate,
        events: events.registry
      };
    };

    var BarMutation = function () {
      var events = Events.create({
        drag: Event([
          'xDelta',
          'yDelta',
          'target'
        ])
      });
      var target = Option.none();
      var delegate = Mutation();
      delegate.events.drag.bind(function (event) {
        target.each(function (t) {
          events.trigger.drag(event.xDelta(), event.yDelta(), t);
        });
      });
      var assign = function (t) {
        target = Option.some(t);
      };
      var get = function () {
        return target;
      };
      return {
        assign: assign,
        get: get,
        mutate: delegate.mutate,
        events: events.registry
      };
    };

    var isContentEditableTrue = function (elm) {
      return get(elm, 'contenteditable') === 'true';
    };
    var findClosestContentEditable = function (target, isRoot) {
      return closest$1(target, '[contenteditable]', isRoot);
    };

    var resizeBarDragging = Styles.resolve('resizer-bar-dragging');
    var BarManager = function (wire, direction, hdirection) {
      var mutation = BarMutation();
      var resizing = Dragger.transform(mutation, {});
      var hoverTable = Option.none();
      var getResizer = function (element, type) {
        return Option.from(get(element, type));
      };
      mutation.events.drag.bind(function (event) {
        getResizer(event.target(), 'data-row').each(function (_dataRow) {
          var currentRow = CellUtils.getInt(event.target(), 'top');
          set$1(event.target(), 'top', currentRow + event.yDelta() + 'px');
        });
        getResizer(event.target(), 'data-column').each(function (_dataCol) {
          var currentCol = CellUtils.getInt(event.target(), 'left');
          set$1(event.target(), 'left', currentCol + event.xDelta() + 'px');
        });
      });
      var getDelta = function (target, dir) {
        var newX = CellUtils.getInt(target, dir);
        var oldX = parseInt(get(target, 'data-initial-' + dir), 10);
        return newX - oldX;
      };
      resizing.events.stop.bind(function () {
        mutation.get().each(function (target) {
          hoverTable.each(function (table) {
            getResizer(target, 'data-row').each(function (row) {
              var delta = getDelta(target, 'top');
              remove(target, 'data-initial-top');
              events.trigger.adjustHeight(table, delta, parseInt(row, 10));
            });
            getResizer(target, 'data-column').each(function (column) {
              var delta = getDelta(target, 'left');
              remove(target, 'data-initial-left');
              events.trigger.adjustWidth(table, delta, parseInt(column, 10));
            });
            Bars.refresh(wire, table, hdirection, direction);
          });
        });
      });
      var handler = function (target, dir) {
        events.trigger.startAdjust();
        mutation.assign(target);
        set(target, 'data-initial-' + dir, parseInt(get$1(target, dir), 10));
        add$2(target, resizeBarDragging);
        set$1(target, 'opacity', '0.2');
        resizing.go(wire.parent());
      };
      var mousedown = bind$2(wire.parent(), 'mousedown', function (event) {
        if (Bars.isRowBar(event.target())) {
          handler(event.target(), 'top');
        }
        if (Bars.isColBar(event.target())) {
          handler(event.target(), 'left');
        }
      });
      var isRoot = function (e) {
        return eq(e, wire.view());
      };
      var findClosestEditableTable = function (target) {
        return closest$1(target, 'table', isRoot).filter(function (table) {
          return findClosestContentEditable(table, isRoot).exists(isContentEditableTrue);
        });
      };
      var mouseover = bind$2(wire.view(), 'mouseover', function (event) {
        findClosestEditableTable(event.target()).fold(function () {
          if (inBody(event.target())) {
            Bars.destroy(wire);
          }
        }, function (table) {
          hoverTable = Option.some(table);
          Bars.refresh(wire, table, hdirection, direction);
        });
      });
      var destroy = function () {
        mousedown.unbind();
        mouseover.unbind();
        resizing.destroy();
        Bars.destroy(wire);
      };
      var refresh = function (tbl) {
        Bars.refresh(wire, tbl, hdirection, direction);
      };
      var events = Events.create({
        adjustHeight: Event([
          'table',
          'delta',
          'row'
        ]),
        adjustWidth: Event([
          'table',
          'delta',
          'column'
        ]),
        startAdjust: Event([])
      });
      return {
        destroy: destroy,
        refresh: refresh,
        on: resizing.on,
        off: resizing.off,
        hideBars: curry(Bars.hide, wire),
        showBars: curry(Bars.show, wire),
        events: events.registry
      };
    };

    function TableResize (wire, vdirection) {
      var hdirection = BarPositions.height;
      var manager = BarManager(wire, vdirection, hdirection);
      var events = Events.create({
        beforeResize: Event(['table']),
        afterResize: Event(['table']),
        startDrag: Event([])
      });
      manager.events.adjustHeight.bind(function (event) {
        events.trigger.beforeResize(event.table());
        var delta = hdirection.delta(event.delta(), event.table());
        Adjustments.adjustHeight(event.table(), delta, event.row(), hdirection);
        events.trigger.afterResize(event.table());
      });
      manager.events.startAdjust.bind(function (event) {
        events.trigger.startDrag();
      });
      manager.events.adjustWidth.bind(function (event) {
        events.trigger.beforeResize(event.table());
        var delta = vdirection.delta(event.delta(), event.table());
        Adjustments.adjustWidth(event.table(), delta, event.column(), vdirection);
        events.trigger.afterResize(event.table());
      });
      return {
        on: manager.on,
        off: manager.off,
        hideBars: manager.hideBars,
        showBars: manager.showBars,
        destroy: manager.destroy,
        events: events.registry
      };
    }

    var createContainer = function () {
      var container = Element.fromTag('div');
      setAll$1(container, {
        position: 'static',
        height: '0',
        width: '0',
        padding: '0',
        margin: '0',
        border: '0'
      });
      append(body(), container);
      return container;
    };
    var get$8 = function (editor, container) {
      return editor.inline ? ResizeWire.body(getBody$1(editor), createContainer()) : ResizeWire.only(Element.fromDom(editor.getDoc()));
    };
    var remove$6 = function (editor, wire) {
      if (editor.inline) {
        remove$2(wire.parent());
      }
    };
    var TableWire = {
      get: get$8,
      remove: remove$6
    };

    var ResizeHandler = function (editor) {
      var selectionRng = Option.none();
      var resize = Option.none();
      var wire = Option.none();
      var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
      var startW, startRawW;
      var isTable = function (elm) {
        return elm.nodeName === 'TABLE';
      };
      var getRawWidth = function (elm) {
        return editor.dom.getStyle(elm, 'width') || editor.dom.getAttrib(elm, 'width');
      };
      var lazyResize = function () {
        return resize;
      };
      var lazyWire = function () {
        return wire.getOr(ResizeWire.only(Element.fromDom(editor.getBody())));
      };
      var destroy = function () {
        resize.each(function (sz) {
          sz.destroy();
        });
        wire.each(function (w) {
          TableWire.remove(editor, w);
        });
      };
      editor.on('init', function () {
        var direction = TableDirection(Direction.directionAt);
        var rawWire = TableWire.get(editor);
        wire = Option.some(rawWire);
        if (hasObjectResizing(editor) && hasTableResizeBars(editor)) {
          var sz = TableResize(rawWire, direction);
          sz.on();
          sz.events.startDrag.bind(function (event) {
            selectionRng = Option.some(editor.selection.getRng());
          });
          sz.events.beforeResize.bind(function (event) {
            var rawTable = event.table().dom();
            fireObjectResizeStart(editor, rawTable, getPixelWidth$1(rawTable), getPixelHeight(rawTable));
          });
          sz.events.afterResize.bind(function (event) {
            var table = event.table();
            var rawTable = table.dom();
            removeDataStyle(table);
            selectionRng.each(function (rng) {
              editor.selection.setRng(rng);
              editor.focus();
            });
            fireObjectResized(editor, rawTable, getPixelWidth$1(rawTable), getPixelHeight(rawTable));
            editor.undoManager.add();
          });
          resize = Option.some(sz);
        }
      });
      editor.on('ObjectResizeStart', function (e) {
        var targetElm = e.target;
        if (isTable(targetElm)) {
          startW = e.width;
          startRawW = getRawWidth(targetElm);
        }
      });
      editor.on('ObjectResized', function (e) {
        var targetElm = e.target;
        if (isTable(targetElm)) {
          var table = targetElm;
          if (percentageBasedSizeRegex.test(startRawW)) {
            var percentW = parseFloat(percentageBasedSizeRegex.exec(startRawW)[1]);
            var targetPercentW = e.width * percentW / startW;
            editor.dom.setStyle(table, 'width', targetPercentW + '%');
          } else {
            var newCellSizes_1 = [];
            global$1.each(table.rows, function (row) {
              global$1.each(row.cells, function (cell) {
                var width = editor.dom.getStyle(cell, 'width', true);
                newCellSizes_1.push({
                  cell: cell,
                  width: width
                });
              });
            });
            global$1.each(newCellSizes_1, function (newCellSize) {
              editor.dom.setStyle(newCellSize.cell, 'width', newCellSize.width);
              editor.dom.setAttrib(newCellSize.cell, 'width', null);
            });
          }
        }
      });
      return {
        lazyResize: lazyResize,
        lazyWire: lazyWire,
        destroy: destroy
      };
    };

    var adt$1 = Adt.generate([
      { none: ['current'] },
      { first: ['current'] },
      {
        middle: [
          'current',
          'target'
        ]
      },
      { last: ['current'] }
    ]);
    var none$1 = function (current) {
      if (current === void 0) {
        current = undefined;
      }
      return adt$1.none(current);
    };
    var CellLocation = __assign({}, adt$1, { none: none$1 });

    var detect$4 = function (current, isRoot) {
      return TableLookup.table(current, isRoot).bind(function (table) {
        var all = TableLookup.cells(table);
        var index = findIndex(all, function (x) {
          return eq(current, x);
        });
        return index.map(function (ind) {
          return {
            index: constant(ind),
            all: constant(all)
          };
        });
      });
    };
    var next = function (current, isRoot) {
      var detection = detect$4(current, isRoot);
      return detection.fold(function () {
        return CellLocation.none(current);
      }, function (info) {
        return info.index() + 1 < info.all().length ? CellLocation.middle(current, info.all()[info.index() + 1]) : CellLocation.last(current);
      });
    };
    var prev = function (current, isRoot) {
      var detection = detect$4(current, isRoot);
      return detection.fold(function () {
        return CellLocation.none();
      }, function (info) {
        return info.index() - 1 >= 0 ? CellLocation.middle(current, info.all()[info.index() - 1]) : CellLocation.first(current);
      });
    };
    var CellNavigation = {
      next: next,
      prev: prev
    };

    var create$2 = Immutable('start', 'soffset', 'finish', 'foffset');
    var SimRange = { create: create$2 };

    var adt$2 = Adt.generate([
      { before: ['element'] },
      {
        on: [
          'element',
          'offset'
        ]
      },
      { after: ['element'] }
    ]);
    var cata$1 = function (subject, onBefore, onOn, onAfter) {
      return subject.fold(onBefore, onOn, onAfter);
    };
    var getStart = function (situ) {
      return situ.fold(identity, identity, identity);
    };
    var before$2 = adt$2.before;
    var on = adt$2.on;
    var after$2 = adt$2.after;
    var Situ = {
      before: before$2,
      on: on,
      after: after$2,
      cata: cata$1,
      getStart: getStart
    };

    var adt$3 = Adt.generate([
      { domRange: ['rng'] },
      {
        relative: [
          'startSitu',
          'finishSitu'
        ]
      },
      {
        exact: [
          'start',
          'soffset',
          'finish',
          'foffset'
        ]
      }
    ]);
    var exactFromRange = function (simRange) {
      return adt$3.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
    };
    var getStart$1 = function (selection) {
      return selection.match({
        domRange: function (rng) {
          return Element.fromDom(rng.startContainer);
        },
        relative: function (startSitu, finishSitu) {
          return Situ.getStart(startSitu);
        },
        exact: function (start, soffset, finish, foffset) {
          return start;
        }
      });
    };
    var domRange = adt$3.domRange;
    var relative = adt$3.relative;
    var exact = adt$3.exact;
    var getWin = function (selection) {
      var start = getStart$1(selection);
      return defaultView(start);
    };
    var range$1 = SimRange.create;
    var Selection = {
      domRange: domRange,
      relative: relative,
      exact: exact,
      exactFromRange: exactFromRange,
      getWin: getWin,
      range: range$1
    };

    var selectNodeContents = function (win, element) {
      var rng = win.document.createRange();
      selectNodeContentsUsing(rng, element);
      return rng;
    };
    var selectNodeContentsUsing = function (rng, element) {
      rng.selectNodeContents(element.dom());
    };
    var setStart = function (rng, situ) {
      situ.fold(function (e) {
        rng.setStartBefore(e.dom());
      }, function (e, o) {
        rng.setStart(e.dom(), o);
      }, function (e) {
        rng.setStartAfter(e.dom());
      });
    };
    var setFinish = function (rng, situ) {
      situ.fold(function (e) {
        rng.setEndBefore(e.dom());
      }, function (e, o) {
        rng.setEnd(e.dom(), o);
      }, function (e) {
        rng.setEndAfter(e.dom());
      });
    };
    var relativeToNative = function (win, startSitu, finishSitu) {
      var range = win.document.createRange();
      setStart(range, startSitu);
      setFinish(range, finishSitu);
      return range;
    };
    var exactToNative = function (win, start, soffset, finish, foffset) {
      var rng = win.document.createRange();
      rng.setStart(start.dom(), soffset);
      rng.setEnd(finish.dom(), foffset);
      return rng;
    };
    var toRect = function (rect) {
      return {
        left: constant(rect.left),
        top: constant(rect.top),
        right: constant(rect.right),
        bottom: constant(rect.bottom),
        width: constant(rect.width),
        height: constant(rect.height)
      };
    };
    var getFirstRect = function (rng) {
      var rects = rng.getClientRects();
      var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
      return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
    };

    var adt$4 = Adt.generate([
      {
        ltr: [
          'start',
          'soffset',
          'finish',
          'foffset'
        ]
      },
      {
        rtl: [
          'start',
          'soffset',
          'finish',
          'foffset'
        ]
      }
    ]);
    var fromRange = function (win, type, range) {
      return type(Element.fromDom(range.startContainer), range.startOffset, Element.fromDom(range.endContainer), range.endOffset);
    };
    var getRanges = function (win, selection) {
      return selection.match({
        domRange: function (rng) {
          return {
            ltr: constant(rng),
            rtl: Option.none
          };
        },
        relative: function (startSitu, finishSitu) {
          return {
            ltr: cached(function () {
              return relativeToNative(win, startSitu, finishSitu);
            }),
            rtl: cached(function () {
              return Option.some(relativeToNative(win, finishSitu, startSitu));
            })
          };
        },
        exact: function (start, soffset, finish, foffset) {
          return {
            ltr: cached(function () {
              return exactToNative(win, start, soffset, finish, foffset);
            }),
            rtl: cached(function () {
              return Option.some(exactToNative(win, finish, foffset, start, soffset));
            })
          };
        }
      });
    };
    var doDiagnose = function (win, ranges) {
      var rng = ranges.ltr();
      if (rng.collapsed) {
        var reversed = ranges.rtl().filter(function (rev) {
          return rev.collapsed === false;
        });
        return reversed.map(function (rev) {
          return adt$4.rtl(Element.fromDom(rev.endContainer), rev.endOffset, Element.fromDom(rev.startContainer), rev.startOffset);
        }).getOrThunk(function () {
          return fromRange(win, adt$4.ltr, rng);
        });
      } else {
        return fromRange(win, adt$4.ltr, rng);
      }
    };
    var diagnose = function (win, selection) {
      var ranges = getRanges(win, selection);
      return doDiagnose(win, ranges);
    };
    var asLtrRange = function (win, selection) {
      var diagnosis = diagnose(win, selection);
      return diagnosis.match({
        ltr: function (start, soffset, finish, foffset) {
          var rng = win.document.createRange();
          rng.setStart(start.dom(), soffset);
          rng.setEnd(finish.dom(), foffset);
          return rng;
        },
        rtl: function (start, soffset, finish, foffset) {
          var rng = win.document.createRange();
          rng.setStart(finish.dom(), foffset);
          rng.setEnd(start.dom(), soffset);
          return rng;
        }
      });
    };

    var searchForPoint = function (rectForOffset, x, y, maxX, length) {
      if (length === 0) {
        return 0;
      } else if (x === maxX) {
        return length - 1;
      }
      var xDelta = maxX;
      for (var i = 1; i < length; i++) {
        var rect = rectForOffset(i);
        var curDeltaX = Math.abs(x - rect.left);
        if (y <= rect.bottom) {
          if (y < rect.top || curDeltaX > xDelta) {
            return i - 1;
          } else {
            xDelta = curDeltaX;
          }
        }
      }
      return 0;
    };
    var inRect = function (rect, x, y) {
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    };

    var locateOffset = function (doc, textnode, x, y, rect) {
      var rangeForOffset = function (o) {
        var r = doc.dom().createRange();
        r.setStart(textnode.dom(), o);
        r.collapse(true);
        return r;
      };
      var rectForOffset = function (o) {
        var r = rangeForOffset(o);
        return r.getBoundingClientRect();
      };
      var length = get$2(textnode).length;
      var offset = searchForPoint(rectForOffset, x, y, rect.right, length);
      return rangeForOffset(offset);
    };
    var locate = function (doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rects = r.getClientRects();
      var foundRect = findMap(rects, function (rect) {
        return inRect(rect, x, y) ? Option.some(rect) : Option.none();
      });
      return foundRect.map(function (rect) {
        return locateOffset(doc, node, x, y, rect);
      });
    };

    var searchInChildren = function (doc, node, x, y) {
      var r = doc.dom().createRange();
      var nodes = children(node);
      return findMap(nodes, function (n) {
        r.selectNode(n.dom());
        return inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
      });
    };
    var locateNode = function (doc, node, x, y) {
      return isText(node) ? locate(doc, node, x, y) : searchInChildren(doc, node, x, y);
    };
    var locate$1 = function (doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rect = r.getBoundingClientRect();
      var boundedX = Math.max(rect.left, Math.min(rect.right, x));
      var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
      return locateNode(doc, node, boundedX, boundedY);
    };

    var COLLAPSE_TO_LEFT = true;
    var COLLAPSE_TO_RIGHT = false;
    var getCollapseDirection = function (rect, x) {
      return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
    };
    var createCollapsedNode = function (doc, target, collapseDirection) {
      var r = doc.dom().createRange();
      r.selectNode(target.dom());
      r.collapse(collapseDirection);
      return r;
    };
    var locateInElement = function (doc, node, x) {
      var cursorRange = doc.dom().createRange();
      cursorRange.selectNode(node.dom());
      var rect = cursorRange.getBoundingClientRect();
      var collapseDirection = getCollapseDirection(rect, x);
      var f = collapseDirection === COLLAPSE_TO_LEFT ? first : last$1;
      return f(node).map(function (target) {
        return createCollapsedNode(doc, target, collapseDirection);
      });
    };
    var locateInEmpty = function (doc, node, x) {
      var rect = node.dom().getBoundingClientRect();
      var collapseDirection = getCollapseDirection(rect, x);
      return Option.some(createCollapsedNode(doc, node, collapseDirection));
    };
    var search = function (doc, node, x) {
      var f = children(node).length === 0 ? locateInEmpty : locateInElement;
      return f(doc, node, x);
    };

    var caretPositionFromPoint = function (doc, x, y) {
      return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
        if (pos.offsetNode === null) {
          return Option.none();
        }
        var r = doc.dom().createRange();
        r.setStart(pos.offsetNode, pos.offset);
        r.collapse();
        return Option.some(r);
      });
    };
    var caretRangeFromPoint = function (doc, x, y) {
      return Option.from(doc.dom().caretRangeFromPoint(x, y));
    };
    var searchTextNodes = function (doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rect = r.getBoundingClientRect();
      var boundedX = Math.max(rect.left, Math.min(rect.right, x));
      var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
      return locate$1(doc, node, boundedX, boundedY);
    };
    var searchFromPoint = function (doc, x, y) {
      return Element.fromPoint(doc, x, y).bind(function (elem) {
        var fallback = function () {
          return search(doc, elem, x);
        };
        return children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
      });
    };
    var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
    var fromPoint$1 = function (win, x, y) {
      var doc = Element.fromDom(win.document);
      return availableSearch(doc, x, y).map(function (rng) {
        return SimRange.create(Element.fromDom(rng.startContainer), rng.startOffset, Element.fromDom(rng.endContainer), rng.endOffset);
      });
    };

    var beforeSpecial = function (element, offset) {
      var name$1 = name(element);
      if ('input' === name$1) {
        return Situ.after(element);
      } else if (!contains([
          'br',
          'img'
        ], name$1)) {
        return Situ.on(element, offset);
      } else {
        return offset === 0 ? Situ.before(element) : Situ.after(element);
      }
    };
    var preprocessRelative = function (startSitu, finishSitu) {
      var start = startSitu.fold(Situ.before, beforeSpecial, Situ.after);
      var finish = finishSitu.fold(Situ.before, beforeSpecial, Situ.after);
      return Selection.relative(start, finish);
    };
    var preprocessExact = function (start, soffset, finish, foffset) {
      var startSitu = beforeSpecial(start, soffset);
      var finishSitu = beforeSpecial(finish, foffset);
      return Selection.relative(startSitu, finishSitu);
    };
    var preprocess = function (selection) {
      return selection.match({
        domRange: function (rng) {
          var start = Element.fromDom(rng.startContainer);
          var finish = Element.fromDom(rng.endContainer);
          return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
        },
        relative: preprocessRelative,
        exact: preprocessExact
      });
    };

    var makeRange = function (start, soffset, finish, foffset) {
      var doc = owner(start);
      var rng = doc.dom().createRange();
      rng.setStart(start.dom(), soffset);
      rng.setEnd(finish.dom(), foffset);
      return rng;
    };
    var after$3 = function (start, soffset, finish, foffset) {
      var r = makeRange(start, soffset, finish, foffset);
      var same = eq(start, finish) && soffset === foffset;
      return r.collapsed && !same;
    };

    var doSetNativeRange = function (win, rng) {
      Option.from(win.getSelection()).each(function (selection) {
        selection.removeAllRanges();
        selection.addRange(rng);
      });
    };
    var doSetRange = function (win, start, soffset, finish, foffset) {
      var rng = exactToNative(win, start, soffset, finish, foffset);
      doSetNativeRange(win, rng);
    };
    var setLegacyRtlRange = function (win, selection, start, soffset, finish, foffset) {
      selection.collapse(start.dom(), soffset);
      selection.extend(finish.dom(), foffset);
    };
    var setRangeFromRelative = function (win, relative) {
      return diagnose(win, relative).match({
        ltr: function (start, soffset, finish, foffset) {
          doSetRange(win, start, soffset, finish, foffset);
        },
        rtl: function (start, soffset, finish, foffset) {
          var selection = win.getSelection();
          if (selection.setBaseAndExtent) {
            selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
          } else if (selection.extend) {
            try {
              setLegacyRtlRange(win, selection, start, soffset, finish, foffset);
            } catch (e) {
              doSetRange(win, finish, foffset, start, soffset);
            }
          } else {
            doSetRange(win, finish, foffset, start, soffset);
          }
        }
      });
    };
    var setExact = function (win, start, soffset, finish, foffset) {
      var relative = preprocessExact(start, soffset, finish, foffset);
      setRangeFromRelative(win, relative);
    };
    var setRelative = function (win, startSitu, finishSitu) {
      var relative = preprocessRelative(startSitu, finishSitu);
      setRangeFromRelative(win, relative);
    };
    var toNative = function (selection) {
      var win = Selection.getWin(selection).dom();
      var getDomRange = function (start, soffset, finish, foffset) {
        return exactToNative(win, start, soffset, finish, foffset);
      };
      var filtered = preprocess(selection);
      return diagnose(win, filtered).match({
        ltr: getDomRange,
        rtl: getDomRange
      });
    };
    var readRange = function (selection) {
      if (selection.rangeCount > 0) {
        var firstRng = selection.getRangeAt(0);
        var lastRng = selection.getRangeAt(selection.rangeCount - 1);
        return Option.some(SimRange.create(Element.fromDom(firstRng.startContainer), firstRng.startOffset, Element.fromDom(lastRng.endContainer), lastRng.endOffset));
      } else {
        return Option.none();
      }
    };
    var doGetExact = function (selection) {
      var anchor = Element.fromDom(selection.anchorNode);
      var focus = Element.fromDom(selection.focusNode);
      return after$3(anchor, selection.anchorOffset, focus, selection.focusOffset) ? Option.some(SimRange.create(anchor, selection.anchorOffset, focus, selection.focusOffset)) : readRange(selection);
    };
    var setToElement = function (win, element) {
      var rng = selectNodeContents(win, element);
      doSetNativeRange(win, rng);
    };
    var getExact = function (win) {
      return Option.from(win.getSelection()).filter(function (sel) {
        return sel.rangeCount > 0;
      }).bind(doGetExact);
    };
    var get$9 = function (win) {
      return getExact(win).map(function (range) {
        return Selection.exact(range.start(), range.soffset(), range.finish(), range.foffset());
      });
    };
    var getFirstRect$1 = function (win, selection) {
      var rng = asLtrRange(win, selection);
      return getFirstRect(rng);
    };
    var getAtPoint = function (win, x, y) {
      return fromPoint$1(win, x, y);
    };
    var clear = function (win) {
      var selection = win.getSelection();
      selection.removeAllRanges();
    };

    var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');

    var forward = function (editor, isRoot, cell, lazyWire) {
      return go(editor, isRoot, CellNavigation.next(cell), lazyWire);
    };
    var backward = function (editor, isRoot, cell, lazyWire) {
      return go(editor, isRoot, CellNavigation.prev(cell), lazyWire);
    };
    var getCellFirstCursorPosition = function (editor, cell) {
      var selection = Selection.exact(cell, 0, cell, 0);
      return toNative(selection);
    };
    var getNewRowCursorPosition = function (editor, table) {
      var rows = descendants$1(table, 'tr');
      return last(rows).bind(function (last) {
        return descendant$1(last, 'td,th').map(function (first) {
          return getCellFirstCursorPosition(editor, first);
        });
      });
    };
    var go = function (editor, isRoot, cell, actions, lazyWire) {
      return cell.fold(Option.none, Option.none, function (current, next) {
        return first(next).map(function (cell) {
          return getCellFirstCursorPosition(editor, cell);
        });
      }, function (current) {
        return TableLookup.table(current, isRoot).bind(function (table) {
          var targets = TableTargets.noMenu(current);
          editor.undoManager.transact(function () {
            actions.insertRowsAfter(table, targets);
          });
          return getNewRowCursorPosition(editor, table);
        });
      });
    };
    var rootElements = [
      'table',
      'li',
      'dl'
    ];
    var handle$1 = function (event, editor, actions, lazyWire) {
      if (event.keyCode === global$3.TAB) {
        var body_1 = getBody$1(editor);
        var isRoot_1 = function (element) {
          var name$1 = name(element);
          return eq(element, body_1) || contains(rootElements, name$1);
        };
        var rng = editor.selection.getRng();
        if (rng.collapsed) {
          var start = Element.fromDom(rng.startContainer);
          TableLookup.cell(start, isRoot_1).each(function (cell) {
            event.preventDefault();
            var navigation = event.shiftKey ? backward : forward;
            var rng = navigation(editor, isRoot_1, cell, actions, lazyWire);
            rng.each(function (range) {
              editor.selection.setRng(range);
            });
          });
        }
      }
    };
    var TabContext = { handle: handle$1 };

    var create$3 = Immutable('selection', 'kill');
    var Response = { create: create$3 };

    var create$4 = function (start, soffset, finish, foffset) {
      return {
        start: constant(Situ.on(start, soffset)),
        finish: constant(Situ.on(finish, foffset))
      };
    };
    var Situs = { create: create$4 };

    var convertToRange = function (win, selection) {
      var rng = asLtrRange(win, selection);
      return SimRange.create(Element.fromDom(rng.startContainer), rng.startOffset, Element.fromDom(rng.endContainer), rng.endOffset);
    };
    var makeSitus = Situs.create;
    var Util = {
      convertToRange: convertToRange,
      makeSitus: makeSitus
    };

    var sync = function (container, isRoot, start, soffset, finish, foffset, selectRange) {
      if (!(eq(start, finish) && soffset === foffset)) {
        return closest$1(start, 'td,th', isRoot).bind(function (s) {
          return closest$1(finish, 'td,th', isRoot).bind(function (f) {
            return detect$5(container, isRoot, s, f, selectRange);
          });
        });
      } else {
        return Option.none();
      }
    };
    var detect$5 = function (container, isRoot, start, finish, selectRange) {
      if (!eq(start, finish)) {
        return CellSelection.identify(start, finish, isRoot).bind(function (cellSel) {
          var boxes = cellSel.boxes().getOr([]);
          if (boxes.length > 0) {
            selectRange(container, boxes, cellSel.start(), cellSel.finish());
            return Option.some(Response.create(Option.some(Util.makeSitus(start, 0, start, getEnd(start))), true));
          } else {
            return Option.none();
          }
        });
      } else {
        return Option.none();
      }
    };
    var update = function (rows, columns, container, selected, annotations) {
      var updateSelection = function (newSels) {
        annotations.clear(container);
        annotations.selectRange(container, newSels.boxes(), newSels.start(), newSels.finish());
        return newSels.boxes();
      };
      return CellSelection.shiftSelection(selected, rows, columns, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(updateSelection);
    };
    var KeySelection = {
      sync: sync,
      detect: detect$5,
      update: update
    };

    var traverse = Immutable('item', 'mode');
    var backtrack = function (universe, item, _direction, transition) {
      if (transition === void 0) {
        transition = sidestep;
      }
      return universe.property().parent(item).map(function (p) {
        return traverse(p, transition);
      });
    };
    var sidestep = function (universe, item, direction, transition) {
      if (transition === void 0) {
        transition = advance;
      }
      return direction.sibling(universe, item).map(function (p) {
        return traverse(p, transition);
      });
    };
    var advance = function (universe, item, direction, transition) {
      if (transition === void 0) {
        transition = advance;
      }
      var children = universe.property().children(item);
      var result = direction.first(children);
      return result.map(function (r) {
        return traverse(r, transition);
      });
    };
    var successors = [
      {
        current: backtrack,
        next: sidestep,
        fallback: Option.none()
      },
      {
        current: sidestep,
        next: advance,
        fallback: Option.some(backtrack)
      },
      {
        current: advance,
        next: advance,
        fallback: Option.some(sidestep)
      }
    ];
    var go$1 = function (universe, item, mode, direction, rules) {
      if (rules === void 0) {
        rules = successors;
      }
      var ruleOpt = find(rules, function (succ) {
        return succ.current === mode;
      });
      return ruleOpt.bind(function (rule) {
        return rule.current(universe, item, direction, rule.next).orThunk(function () {
          return rule.fallback.bind(function (fb) {
            return go$1(universe, item, fb, direction);
          });
        });
      });
    };

    var left = function () {
      var sibling = function (universe, item) {
        return universe.query().prevSibling(item);
      };
      var first = function (children) {
        return children.length > 0 ? Option.some(children[children.length - 1]) : Option.none();
      };
      return {
        sibling: sibling,
        first: first
      };
    };
    var right = function () {
      var sibling = function (universe, item) {
        return universe.query().nextSibling(item);
      };
      var first = function (children) {
        return children.length > 0 ? Option.some(children[0]) : Option.none();
      };
      return {
        sibling: sibling,
        first: first
      };
    };
    var Walkers = {
      left: left,
      right: right
    };

    var hone = function (universe, item, predicate, mode, direction, isRoot) {
      var next = go$1(universe, item, mode, direction);
      return next.bind(function (n) {
        if (isRoot(n.item())) {
          return Option.none();
        } else {
          return predicate(n.item()) ? Option.some(n.item()) : hone(universe, n.item(), predicate, n.mode(), direction, isRoot);
        }
      });
    };
    var left$1 = function (universe, item, predicate, isRoot) {
      return hone(universe, item, predicate, sidestep, Walkers.left(), isRoot);
    };
    var right$1 = function (universe, item, predicate, isRoot) {
      return hone(universe, item, predicate, sidestep, Walkers.right(), isRoot);
    };

    var isLeaf = function (universe) {
      return function (element) {
        return universe.property().children(element).length === 0;
      };
    };
    var before$3 = function (universe, item, isRoot) {
      return seekLeft(universe, item, isLeaf(universe), isRoot);
    };
    var after$4 = function (universe, item, isRoot) {
      return seekRight(universe, item, isLeaf(universe), isRoot);
    };
    var seekLeft = left$1;
    var seekRight = right$1;

    var universe$2 = DomUniverse();
    var before$4 = function (element, isRoot) {
      return before$3(universe$2, element, isRoot);
    };
    var after$5 = function (element, isRoot) {
      return after$4(universe$2, element, isRoot);
    };
    var seekLeft$1 = function (element, predicate, isRoot) {
      return seekLeft(universe$2, element, predicate, isRoot);
    };
    var seekRight$1 = function (element, predicate, isRoot) {
      return seekRight(universe$2, element, predicate, isRoot);
    };

    var ancestor$2 = function (scope, predicate, isRoot) {
      return ancestor(scope, predicate, isRoot).isSome();
    };

    var point = Immutable('element', 'offset');
    var delta = Immutable('element', 'deltaOffset');
    var range$2 = Immutable('element', 'start', 'finish');
    var points = Immutable('begin', 'end');
    var text = Immutable('element', 'text');

    var adt$5 = Adt.generate([
      { none: ['message'] },
      { success: [] },
      { failedUp: ['cell'] },
      { failedDown: ['cell'] }
    ]);
    var isOverlapping = function (bridge, before, after) {
      var beforeBounds = bridge.getRect(before);
      var afterBounds = bridge.getRect(after);
      return afterBounds.right > beforeBounds.left && afterBounds.left < beforeBounds.right;
    };
    var isRow = function (elem) {
      return closest$1(elem, 'tr');
    };
    var verify = function (bridge, before, beforeOffset, after, afterOffset, failure, isRoot) {
      return closest$1(after, 'td,th', isRoot).bind(function (afterCell) {
        return closest$1(before, 'td,th', isRoot).map(function (beforeCell) {
          if (!eq(afterCell, beforeCell)) {
            return DomParent.sharedOne(isRow, [
              afterCell,
              beforeCell
            ]).fold(function () {
              return isOverlapping(bridge, beforeCell, afterCell) ? adt$5.success() : failure(beforeCell);
            }, function (_sharedRow) {
              return failure(beforeCell);
            });
          } else {
            return eq(after, afterCell) && getEnd(afterCell) === afterOffset ? failure(beforeCell) : adt$5.none('in same cell');
          }
        });
      }).getOr(adt$5.none('default'));
    };
    var cata$2 = function (subject, onNone, onSuccess, onFailedUp, onFailedDown) {
      return subject.fold(onNone, onSuccess, onFailedUp, onFailedDown);
    };
    var BeforeAfter = __assign({}, adt$5, {
      verify: verify,
      cata: cata$2
    });

    var inAncestor = Immutable('ancestor', 'descendants', 'element', 'index');
    var inParent = Immutable('parent', 'children', 'element', 'index');
    var indexInParent = function (element) {
      return parent(element).bind(function (parent) {
        var children$1 = children(parent);
        return indexOf(children$1, element).map(function (index) {
          return inParent(parent, children$1, element, index);
        });
      });
    };
    var indexOf = function (elements, element) {
      return findIndex(elements, curry(eq, element));
    };

    var isBr = function (elem) {
      return name(elem) === 'br';
    };
    var gatherer = function (cand, gather, isRoot) {
      return gather(cand, isRoot).bind(function (target) {
        return isText(target) && get$2(target).trim().length === 0 ? gatherer(target, gather, isRoot) : Option.some(target);
      });
    };
    var handleBr = function (isRoot, element, direction) {
      return direction.traverse(element).orThunk(function () {
        return gatherer(element, direction.gather, isRoot);
      }).map(direction.relative);
    };
    var findBr = function (element, offset) {
      return child(element, offset).filter(isBr).orThunk(function () {
        return child(element, offset - 1).filter(isBr);
      });
    };
    var handleParent = function (isRoot, element, offset, direction) {
      return findBr(element, offset).bind(function (br) {
        return direction.traverse(br).fold(function () {
          return gatherer(br, direction.gather, isRoot).map(direction.relative);
        }, function (adjacent) {
          return indexInParent(adjacent).map(function (info) {
            return Situ.on(info.parent(), info.index());
          });
        });
      });
    };
    var tryBr = function (isRoot, element, offset, direction) {
      var target = isBr(element) ? handleBr(isRoot, element, direction) : handleParent(isRoot, element, offset, direction);
      return target.map(function (tgt) {
        return {
          start: constant(tgt),
          finish: constant(tgt)
        };
      });
    };
    var process = function (analysis) {
      return BeforeAfter.cata(analysis, function (message) {
        return Option.none();
      }, function () {
        return Option.none();
      }, function (cell) {
        return Option.some(point(cell, 0));
      }, function (cell) {
        return Option.some(point(cell, getEnd(cell)));
      });
    };
    var BrTags = {
      tryBr: tryBr,
      process: process
    };

    var nu$3 = MixedBag([
      'left',
      'top',
      'right',
      'bottom'
    ], []);
    var moveDown = function (caret, amount) {
      return nu$3({
        left: caret.left(),
        top: caret.top() + amount,
        right: caret.right(),
        bottom: caret.bottom() + amount
      });
    };
    var moveUp = function (caret, amount) {
      return nu$3({
        left: caret.left(),
        top: caret.top() - amount,
        right: caret.right(),
        bottom: caret.bottom() - amount
      });
    };
    var moveBottomTo = function (caret, bottom) {
      var height = caret.bottom() - caret.top();
      return nu$3({
        left: caret.left(),
        top: bottom - height,
        right: caret.right(),
        bottom: bottom
      });
    };
    var moveTopTo = function (caret, top) {
      var height = caret.bottom() - caret.top();
      return nu$3({
        left: caret.left(),
        top: top,
        right: caret.right(),
        bottom: top + height
      });
    };
    var translate = function (caret, xDelta, yDelta) {
      return nu$3({
        left: caret.left() + xDelta,
        top: caret.top() + yDelta,
        right: caret.right() + xDelta,
        bottom: caret.bottom() + yDelta
      });
    };
    var getTop$1 = function (caret) {
      return caret.top();
    };
    var getBottom = function (caret) {
      return caret.bottom();
    };
    var toString = function (caret) {
      return '(' + caret.left() + ', ' + caret.top() + ') -> (' + caret.right() + ', ' + caret.bottom() + ')';
    };
    var Carets = {
      nu: nu$3,
      moveUp: moveUp,
      moveDown: moveDown,
      moveBottomTo: moveBottomTo,
      moveTopTo: moveTopTo,
      getTop: getTop$1,
      getBottom: getBottom,
      translate: translate,
      toString: toString
    };

    var getPartialBox = function (bridge, element, offset) {
      if (offset >= 0 && offset < getEnd(element)) {
        return bridge.getRangedRect(element, offset, element, offset + 1);
      } else if (offset > 0) {
        return bridge.getRangedRect(element, offset - 1, element, offset);
      }
      return Option.none();
    };
    var toCaret = function (rect) {
      return Carets.nu({
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom
      });
    };
    var getElemBox = function (bridge, element) {
      return Option.some(bridge.getRect(element));
    };
    var getBoxAt = function (bridge, element, offset) {
      if (isElement(element)) {
        return getElemBox(bridge, element).map(toCaret);
      } else if (isText(element)) {
        return getPartialBox(bridge, element, offset).map(toCaret);
      } else {
        return Option.none();
      }
    };
    var getEntireBox = function (bridge, element) {
      if (isElement(element)) {
        return getElemBox(bridge, element).map(toCaret);
      } else if (isText(element)) {
        return bridge.getRangedRect(element, 0, element, getEnd(element)).map(toCaret);
      } else {
        return Option.none();
      }
    };
    var Rectangles = {
      getBoxAt: getBoxAt,
      getEntireBox: getEntireBox
    };

    var JUMP_SIZE = 5;
    var NUM_RETRIES = 100;
    var adt$6 = Adt.generate([
      { none: [] },
      { retry: ['caret'] }
    ]);
    var isOutside = function (caret, box) {
      return caret.left() < box.left() || Math.abs(box.right() - caret.left()) < 1 || caret.left() > box.right();
    };
    var inOutsideBlock = function (bridge, element, caret) {
      return closest(element, DomStructure.isBlock).fold(constant(false), function (cell) {
        return Rectangles.getEntireBox(bridge, cell).exists(function (box) {
          return isOutside(caret, box);
        });
      });
    };
    var adjustDown = function (bridge, element, guessBox, original, caret) {
      var lowerCaret = Carets.moveDown(caret, JUMP_SIZE);
      if (Math.abs(guessBox.bottom() - original.bottom()) < 1) {
        return adt$6.retry(lowerCaret);
      } else if (guessBox.top() > caret.bottom()) {
        return adt$6.retry(lowerCaret);
      } else if (guessBox.top() === caret.bottom()) {
        return adt$6.retry(Carets.moveDown(caret, 1));
      } else {
        return inOutsideBlock(bridge, element, caret) ? adt$6.retry(Carets.translate(lowerCaret, JUMP_SIZE, 0)) : adt$6.none();
      }
    };
    var adjustUp = function (bridge, element, guessBox, original, caret) {
      var higherCaret = Carets.moveUp(caret, JUMP_SIZE);
      if (Math.abs(guessBox.top() - original.top()) < 1) {
        return adt$6.retry(higherCaret);
      } else if (guessBox.bottom() < caret.top()) {
        return adt$6.retry(higherCaret);
      } else if (guessBox.bottom() === caret.top()) {
        return adt$6.retry(Carets.moveUp(caret, 1));
      } else {
        return inOutsideBlock(bridge, element, caret) ? adt$6.retry(Carets.translate(higherCaret, JUMP_SIZE, 0)) : adt$6.none();
      }
    };
    var upMovement = {
      point: Carets.getTop,
      adjuster: adjustUp,
      move: Carets.moveUp,
      gather: before$4
    };
    var downMovement = {
      point: Carets.getBottom,
      adjuster: adjustDown,
      move: Carets.moveDown,
      gather: after$5
    };
    var isAtTable = function (bridge, x, y) {
      return bridge.elementFromPoint(x, y).filter(function (elm) {
        return name(elm) === 'table';
      }).isSome();
    };
    var adjustForTable = function (bridge, movement, original, caret, numRetries) {
      return adjustTil(bridge, movement, original, movement.move(caret, JUMP_SIZE), numRetries);
    };
    var adjustTil = function (bridge, movement, original, caret, numRetries) {
      if (numRetries === 0) {
        return Option.some(caret);
      }
      if (isAtTable(bridge, caret.left(), movement.point(caret))) {
        return adjustForTable(bridge, movement, original, caret, numRetries - 1);
      }
      return bridge.situsFromPoint(caret.left(), movement.point(caret)).bind(function (guess) {
        return guess.start().fold(Option.none, function (element) {
          return Rectangles.getEntireBox(bridge, element).bind(function (guessBox) {
            return movement.adjuster(bridge, element, guessBox, original, caret).fold(Option.none, function (newCaret) {
              return adjustTil(bridge, movement, original, newCaret, numRetries - 1);
            });
          }).orThunk(function () {
            return Option.some(caret);
          });
        }, Option.none);
      });
    };
    var ieTryDown = function (bridge, caret) {
      return bridge.situsFromPoint(caret.left(), caret.bottom() + JUMP_SIZE);
    };
    var ieTryUp = function (bridge, caret) {
      return bridge.situsFromPoint(caret.left(), caret.top() - JUMP_SIZE);
    };
    var checkScroll = function (movement, adjusted, bridge) {
      if (movement.point(adjusted) > bridge.getInnerHeight()) {
        return Option.some(movement.point(adjusted) - bridge.getInnerHeight());
      } else if (movement.point(adjusted) < 0) {
        return Option.some(-movement.point(adjusted));
      } else {
        return Option.none();
      }
    };
    var retry = function (movement, bridge, caret) {
      var moved = movement.move(caret, JUMP_SIZE);
      var adjusted = adjustTil(bridge, movement, caret, moved, NUM_RETRIES).getOr(moved);
      return checkScroll(movement, adjusted, bridge).fold(function () {
        return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted));
      }, function (delta) {
        bridge.scrollBy(0, delta);
        return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted) - delta);
      });
    };
    var Retries = {
      tryUp: curry(retry, upMovement),
      tryDown: curry(retry, downMovement),
      ieTryUp: ieTryUp,
      ieTryDown: ieTryDown,
      getJumpSize: constant(JUMP_SIZE)
    };

    var MAX_RETRIES = 20;
    var platform$1 = PlatformDetection$1.detect();
    var findSpot = function (bridge, isRoot, direction) {
      return bridge.getSelection().bind(function (sel) {
        return BrTags.tryBr(isRoot, sel.finish(), sel.foffset(), direction).fold(function () {
          return Option.some(point(sel.finish(), sel.foffset()));
        }, function (brNeighbour) {
          var range = bridge.fromSitus(brNeighbour);
          var analysis = BeforeAfter.verify(bridge, sel.finish(), sel.foffset(), range.finish(), range.foffset(), direction.failure, isRoot);
          return BrTags.process(analysis);
        });
      });
    };
    var scan = function (bridge, isRoot, element, offset, direction, numRetries) {
      if (numRetries === 0) {
        return Option.none();
      }
      return tryCursor(bridge, isRoot, element, offset, direction).bind(function (situs) {
        var range = bridge.fromSitus(situs);
        var analysis = BeforeAfter.verify(bridge, element, offset, range.finish(), range.foffset(), direction.failure, isRoot);
        return BeforeAfter.cata(analysis, function () {
          return Option.none();
        }, function () {
          return Option.some(situs);
        }, function (cell) {
          if (eq(element, cell) && offset === 0) {
            return tryAgain(bridge, element, offset, Carets.moveUp, direction);
          } else {
            return scan(bridge, isRoot, cell, 0, direction, numRetries - 1);
          }
        }, function (cell) {
          if (eq(element, cell) && offset === getEnd(cell)) {
            return tryAgain(bridge, element, offset, Carets.moveDown, direction);
          } else {
            return scan(bridge, isRoot, cell, getEnd(cell), direction, numRetries - 1);
          }
        });
      });
    };
    var tryAgain = function (bridge, element, offset, move, direction) {
      return Rectangles.getBoxAt(bridge, element, offset).bind(function (box) {
        return tryAt(bridge, direction, move(box, Retries.getJumpSize()));
      });
    };
    var tryAt = function (bridge, direction, box) {
      if (platform$1.browser.isChrome() || platform$1.browser.isSafari() || platform$1.browser.isFirefox() || platform$1.browser.isEdge()) {
        return direction.otherRetry(bridge, box);
      } else if (platform$1.browser.isIE()) {
        return direction.ieRetry(bridge, box);
      } else {
        return Option.none();
      }
    };
    var tryCursor = function (bridge, isRoot, element, offset, direction) {
      return Rectangles.getBoxAt(bridge, element, offset).bind(function (box) {
        return tryAt(bridge, direction, box);
      });
    };
    var handle$2 = function (bridge, isRoot, direction) {
      return findSpot(bridge, isRoot, direction).bind(function (spot) {
        return scan(bridge, isRoot, spot.element(), spot.offset(), direction, MAX_RETRIES).map(bridge.fromSitus);
      });
    };
    var TableKeys = { handle: handle$2 };

    var detection = PlatformDetection$1.detect();
    var inSameTable = function (elem, table) {
      return ancestor$2(elem, function (e) {
        return parent(e).exists(function (p) {
          return eq(p, table);
        });
      });
    };
    var simulate = function (bridge, isRoot, direction, initial, anchor) {
      return closest$1(initial, 'td,th', isRoot).bind(function (start) {
        return closest$1(start, 'table', isRoot).bind(function (table) {
          if (!inSameTable(anchor, table)) {
            return Option.none();
          }
          return TableKeys.handle(bridge, isRoot, direction).bind(function (range) {
            return closest$1(range.finish(), 'td,th', isRoot).map(function (finish) {
              return {
                start: constant(start),
                finish: constant(finish),
                range: constant(range)
              };
            });
          });
        });
      });
    };
    var navigate = function (bridge, isRoot, direction, initial, anchor, precheck) {
      if (detection.browser.isIE()) {
        return Option.none();
      } else {
        return precheck(initial, isRoot).orThunk(function () {
          return simulate(bridge, isRoot, direction, initial, anchor).map(function (info) {
            var range = info.range();
            return Response.create(Option.some(Util.makeSitus(range.start(), range.soffset(), range.finish(), range.foffset())), true);
          });
        });
      }
    };
    var firstUpCheck = function (initial, isRoot) {
      return closest$1(initial, 'tr', isRoot).bind(function (startRow) {
        return closest$1(startRow, 'table', isRoot).bind(function (table) {
          var rows = descendants$1(table, 'tr');
          if (eq(startRow, rows[0])) {
            return seekLeft$1(table, function (element) {
              return last$1(element).isSome();
            }, isRoot).map(function (last) {
              var lastOffset = getEnd(last);
              return Response.create(Option.some(Util.makeSitus(last, lastOffset, last, lastOffset)), true);
            });
          } else {
            return Option.none();
          }
        });
      });
    };
    var lastDownCheck = function (initial, isRoot) {
      return closest$1(initial, 'tr', isRoot).bind(function (startRow) {
        return closest$1(startRow, 'table', isRoot).bind(function (table) {
          var rows = descendants$1(table, 'tr');
          if (eq(startRow, rows[rows.length - 1])) {
            return seekRight$1(table, function (element) {
              return first(element).isSome();
            }, isRoot).map(function (first) {
              return Response.create(Option.some(Util.makeSitus(first, 0, first, 0)), true);
            });
          } else {
            return Option.none();
          }
        });
      });
    };
    var select = function (bridge, container, isRoot, direction, initial, anchor, selectRange) {
      return simulate(bridge, isRoot, direction, initial, anchor).bind(function (info) {
        return KeySelection.detect(container, isRoot, info.start(), info.finish(), selectRange);
      });
    };
    var VerticalMovement = {
      navigate: navigate,
      select: select,
      firstUpCheck: firstUpCheck,
      lastDownCheck: lastDownCheck
    };

    var findCell = function (target, isRoot) {
      return closest$1(target, 'td,th', isRoot);
    };
    function MouseSelection (bridge, container, isRoot, annotations) {
      var cursor = Option.none();
      var clearState = function () {
        cursor = Option.none();
      };
      var mousedown = function (event) {
        annotations.clear(container);
        cursor = findCell(event.target(), isRoot);
      };
      var mouseover = function (event) {
        cursor.each(function (start) {
          annotations.clear(container);
          findCell(event.target(), isRoot).each(function (finish) {
            CellSelection.identify(start, finish, isRoot).each(function (cellSel) {
              var boxes = cellSel.boxes().getOr([]);
              if (boxes.length > 1 || boxes.length === 1 && !eq(start, finish)) {
                annotations.selectRange(container, boxes, cellSel.start(), cellSel.finish());
                bridge.selectContents(finish);
              }
            });
          });
        });
      };
      var mouseup = function (_event) {
        cursor.each(clearState);
      };
      return {
        mousedown: mousedown,
        mouseover: mouseover,
        mouseup: mouseup
      };
    }

    var down = {
      traverse: nextSibling,
      gather: after$5,
      relative: Situ.before,
      otherRetry: Retries.tryDown,
      ieRetry: Retries.ieTryDown,
      failure: BeforeAfter.failedDown
    };
    var up = {
      traverse: prevSibling,
      gather: before$4,
      relative: Situ.before,
      otherRetry: Retries.tryUp,
      ieRetry: Retries.ieTryUp,
      failure: BeforeAfter.failedUp
    };
    var KeyDirection = {
      down: down,
      up: up
    };

    var isKey = function (key) {
      return function (keycode) {
        return keycode === key;
      };
    };
    var isUp = isKey(38);
    var isDown = isKey(40);
    var isNavigation = function (keycode) {
      return keycode >= 37 && keycode <= 40;
    };
    var SelectionKeys = {
      ltr: {
        isBackward: isKey(37),
        isForward: isKey(39)
      },
      rtl: {
        isBackward: isKey(39),
        isForward: isKey(37)
      },
      isUp: isUp,
      isDown: isDown,
      isNavigation: isNavigation
    };

    var toRaw = function (sr) {
      return {
        left: sr.left(),
        top: sr.top(),
        right: sr.right(),
        bottom: sr.bottom(),
        width: sr.width(),
        height: sr.height()
      };
    };
    var Rect = { toRaw: toRaw };

    var isSafari = PlatformDetection$1.detect().browser.isSafari();
    var get$a = function (_DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : domGlobals.document;
      var x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
      var y = doc.body.scrollTop || doc.documentElement.scrollTop;
      return Position(x, y);
    };
    var by = function (x, y, _DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : domGlobals.document;
      var win = doc.defaultView;
      win.scrollBy(x, y);
    };

    var WindowBridge = function (win) {
      var elementFromPoint = function (x, y) {
        return Element.fromPoint(Element.fromDom(win.document), x, y);
      };
      var getRect = function (element) {
        return element.dom().getBoundingClientRect();
      };
      var getRangedRect = function (start, soffset, finish, foffset) {
        var sel = Selection.exact(start, soffset, finish, foffset);
        return getFirstRect$1(win, sel).map(Rect.toRaw);
      };
      var getSelection = function () {
        return get$9(win).map(function (exactAdt) {
          return Util.convertToRange(win, exactAdt);
        });
      };
      var fromSitus = function (situs) {
        var relative = Selection.relative(situs.start(), situs.finish());
        return Util.convertToRange(win, relative);
      };
      var situsFromPoint = function (x, y) {
        return getAtPoint(win, x, y).map(function (exact) {
          return Situs.create(exact.start(), exact.soffset(), exact.finish(), exact.foffset());
        });
      };
      var clearSelection = function () {
        clear(win);
      };
      var selectContents = function (element) {
        setToElement(win, element);
      };
      var setSelection = function (sel) {
        setExact(win, sel.start(), sel.soffset(), sel.finish(), sel.foffset());
      };
      var setRelativeSelection = function (start, finish) {
        setRelative(win, start, finish);
      };
      var getInnerHeight = function () {
        return win.innerHeight;
      };
      var getScrollY = function () {
        var pos = get$a(Element.fromDom(win.document));
        return pos.top();
      };
      var scrollBy = function (x, y) {
        by(x, y, Element.fromDom(win.document));
      };
      return {
        elementFromPoint: elementFromPoint,
        getRect: getRect,
        getRangedRect: getRangedRect,
        getSelection: getSelection,
        fromSitus: fromSitus,
        situsFromPoint: situsFromPoint,
        clearSelection: clearSelection,
        setSelection: setSelection,
        setRelativeSelection: setRelativeSelection,
        selectContents: selectContents,
        getInnerHeight: getInnerHeight,
        getScrollY: getScrollY,
        scrollBy: scrollBy
      };
    };

    var rc = Immutable('rows', 'cols');
    var mouse = function (win, container, isRoot, annotations) {
      var bridge = WindowBridge(win);
      var handlers = MouseSelection(bridge, container, isRoot, annotations);
      return {
        mousedown: handlers.mousedown,
        mouseover: handlers.mouseover,
        mouseup: handlers.mouseup
      };
    };
    var keyboard = function (win, container, isRoot, annotations) {
      var bridge = WindowBridge(win);
      var clearToNavigate = function () {
        annotations.clear(container);
        return Option.none();
      };
      var keydown = function (event, start, soffset, finish, foffset, direction) {
        var realEvent = event.raw();
        var keycode = realEvent.which;
        var shiftKey = realEvent.shiftKey === true;
        var handler = CellSelection.retrieve(container, annotations.selectedSelector()).fold(function () {
          if (SelectionKeys.isDown(keycode) && shiftKey) {
            return curry(VerticalMovement.select, bridge, container, isRoot, KeyDirection.down, finish, start, annotations.selectRange);
          } else if (SelectionKeys.isUp(keycode) && shiftKey) {
            return curry(VerticalMovement.select, bridge, container, isRoot, KeyDirection.up, finish, start, annotations.selectRange);
          } else if (SelectionKeys.isDown(keycode)) {
            return curry(VerticalMovement.navigate, bridge, isRoot, KeyDirection.down, finish, start, VerticalMovement.lastDownCheck);
          } else if (SelectionKeys.isUp(keycode)) {
            return curry(VerticalMovement.navigate, bridge, isRoot, KeyDirection.up, finish, start, VerticalMovement.firstUpCheck);
          } else {
            return Option.none;
          }
        }, function (selected) {
          var update = function (attempts) {
            return function () {
              var navigation = findMap(attempts, function (delta) {
                return KeySelection.update(delta.rows(), delta.cols(), container, selected, annotations);
              });
              return navigation.fold(function () {
                return CellSelection.getEdges(container, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(function (edges) {
                  var relative = SelectionKeys.isDown(keycode) || direction.isForward(keycode) ? Situ.after : Situ.before;
                  bridge.setRelativeSelection(Situ.on(edges.first(), 0), relative(edges.table()));
                  annotations.clear(container);
                  return Response.create(Option.none(), true);
                });
              }, function (_) {
                return Option.some(Response.create(Option.none(), true));
              });
            };
          };
          if (SelectionKeys.isDown(keycode) && shiftKey) {
            return update([rc(+1, 0)]);
          } else if (SelectionKeys.isUp(keycode) && shiftKey) {
            return update([rc(-1, 0)]);
          } else if (direction.isBackward(keycode) && shiftKey) {
            return update([
              rc(0, -1),
              rc(-1, 0)
            ]);
          } else if (direction.isForward(keycode) && shiftKey) {
            return update([
              rc(0, +1),
              rc(+1, 0)
            ]);
          } else if (SelectionKeys.isNavigation(keycode) && shiftKey === false) {
            return clearToNavigate;
          } else {
            return Option.none;
          }
        });
        return handler();
      };
      var keyup = function (event, start, soffset, finish, foffset) {
        return CellSelection.retrieve(container, annotations.selectedSelector()).fold(function () {
          var realEvent = event.raw();
          var keycode = realEvent.which;
          var shiftKey = realEvent.shiftKey === true;
          if (shiftKey === false) {
            return Option.none();
          }
          if (SelectionKeys.isNavigation(keycode)) {
            return KeySelection.sync(container, isRoot, start, soffset, finish, foffset, annotations.selectRange);
          } else {
            return Option.none();
          }
        }, Option.none);
      };
      return {
        keydown: keydown,
        keyup: keyup
      };
    };
    var InputHandlers = {
      mouse: mouse,
      keyboard: keyboard
    };

    var remove$7 = function (element, classes) {
      each(classes, function (x) {
        remove$5(element, x);
      });
    };

    var addClass = function (clazz) {
      return function (element) {
        add$2(element, clazz);
      };
    };
    var removeClasses = function (classes) {
      return function (element) {
        remove$7(element, classes);
      };
    };

    var byClass = function (ephemera) {
      var addSelectionClass = addClass(ephemera.selected());
      var removeSelectionClasses = removeClasses([
        ephemera.selected(),
        ephemera.lastSelected(),
        ephemera.firstSelected()
      ]);
      var clear = function (container) {
        var sels = descendants$1(container, ephemera.selectedSelector());
        each(sels, removeSelectionClasses);
      };
      var selectRange = function (container, cells, start, finish) {
        clear(container);
        each(cells, addSelectionClass);
        add$2(start, ephemera.firstSelected());
        add$2(finish, ephemera.lastSelected());
      };
      return {
        clear: clear,
        selectRange: selectRange,
        selectedSelector: ephemera.selectedSelector,
        firstSelectedSelector: ephemera.firstSelectedSelector,
        lastSelectedSelector: ephemera.lastSelectedSelector
      };
    };
    var byAttr = function (ephemera) {
      var removeSelectionAttributes = function (element) {
        remove(element, ephemera.selected());
        remove(element, ephemera.firstSelected());
        remove(element, ephemera.lastSelected());
      };
      var addSelectionAttribute = function (element) {
        set(element, ephemera.selected(), '1');
      };
      var clear = function (container) {
        var sels = descendants$1(container, ephemera.selectedSelector());
        each(sels, removeSelectionAttributes);
      };
      var selectRange = function (container, cells, start, finish) {
        clear(container);
        each(cells, addSelectionAttribute);
        set(start, ephemera.firstSelected(), '1');
        set(finish, ephemera.lastSelected(), '1');
      };
      return {
        clear: clear,
        selectRange: selectRange,
        selectedSelector: ephemera.selectedSelector,
        firstSelectedSelector: ephemera.firstSelectedSelector,
        lastSelectedSelector: ephemera.lastSelectedSelector
      };
    };
    var SelectionAnnotation = {
      byClass: byClass,
      byAttr: byAttr
    };

    var hasInternalTarget = function (e) {
      return has$1(Element.fromDom(e.target), 'ephox-snooker-resizer-bar') === false;
    };
    function CellSelection$1 (editor, lazyResize) {
      var handlerStruct = MixedBag([
        'mousedown',
        'mouseover',
        'mouseup',
        'keyup',
        'keydown'
      ], []);
      var handlers = Option.none();
      var annotations = SelectionAnnotation.byAttr(Ephemera);
      editor.on('init', function (e) {
        var win = editor.getWin();
        var body = getBody$1(editor);
        var isRoot = getIsRoot(editor);
        var syncSelection = function () {
          var sel = editor.selection;
          var start = Element.fromDom(sel.getStart());
          var end = Element.fromDom(sel.getEnd());
          var shared = DomParent.sharedOne(TableLookup.table, [
            start,
            end
          ]);
          shared.fold(function () {
            annotations.clear(body);
          }, noop);
        };
        var mouseHandlers = InputHandlers.mouse(win, body, isRoot, annotations);
        var keyHandlers = InputHandlers.keyboard(win, body, isRoot, annotations);
        var hasShiftKey = function (event) {
          return event.raw().shiftKey === true;
        };
        var handleResponse = function (event, response) {
          if (!hasShiftKey(event)) {
            return;
          }
          if (response.kill()) {
            event.kill();
          }
          response.selection().each(function (ns) {
            var relative = Selection.relative(ns.start(), ns.finish());
            var rng = asLtrRange(win, relative);
            editor.selection.setRng(rng);
          });
        };
        var keyup = function (event) {
          var wrappedEvent = wrapEvent(event);
          if (wrappedEvent.raw().shiftKey && SelectionKeys.isNavigation(wrappedEvent.raw().which)) {
            var rng = editor.selection.getRng();
            var start = Element.fromDom(rng.startContainer);
            var end = Element.fromDom(rng.endContainer);
            keyHandlers.keyup(wrappedEvent, start, rng.startOffset, end, rng.endOffset).each(function (response) {
              handleResponse(wrappedEvent, response);
            });
          }
        };
        var keydown = function (event) {
          var wrappedEvent = wrapEvent(event);
          lazyResize().each(function (resize) {
            resize.hideBars();
          });
          var rng = editor.selection.getRng();
          var startContainer = Element.fromDom(editor.selection.getStart());
          var start = Element.fromDom(rng.startContainer);
          var end = Element.fromDom(rng.endContainer);
          var direction = Direction.directionAt(startContainer).isRtl() ? SelectionKeys.rtl : SelectionKeys.ltr;
          keyHandlers.keydown(wrappedEvent, start, rng.startOffset, end, rng.endOffset, direction).each(function (response) {
            handleResponse(wrappedEvent, response);
          });
          lazyResize().each(function (resize) {
            resize.showBars();
          });
        };
        var isMouseEvent = function (event) {
          return event.hasOwnProperty('x') && event.hasOwnProperty('y');
        };
        var wrapEvent = function (event) {
          var target = Element.fromDom(event.target);
          var stop = function () {
            event.stopPropagation();
          };
          var prevent = function () {
            event.preventDefault();
          };
          var kill = compose(prevent, stop);
          return {
            target: constant(target),
            x: constant(isMouseEvent(event) ? event.x : null),
            y: constant(isMouseEvent(event) ? event.y : null),
            stop: stop,
            prevent: prevent,
            kill: kill,
            raw: constant(event)
          };
        };
        var isLeftMouse = function (raw) {
          return raw.button === 0;
        };
        var isLeftButtonPressed = function (raw) {
          if (raw.buttons === undefined) {
            return true;
          }
          return (raw.buttons & 1) !== 0;
        };
        var mouseDown = function (e) {
          if (isLeftMouse(e) && hasInternalTarget(e)) {
            mouseHandlers.mousedown(wrapEvent(e));
          }
        };
        var mouseOver = function (e) {
          if (isLeftButtonPressed(e) && hasInternalTarget(e)) {
            mouseHandlers.mouseover(wrapEvent(e));
          }
        };
        var mouseUp = function (e) {
          if (isLeftMouse(e) && hasInternalTarget(e)) {
            mouseHandlers.mouseup(wrapEvent(e));
          }
        };
        editor.on('mousedown', mouseDown);
        editor.on('mouseover', mouseOver);
        editor.on('mouseup', mouseUp);
        editor.on('keyup', keyup);
        editor.on('keydown', keydown);
        editor.on('nodechange', syncSelection);
        handlers = Option.some(handlerStruct({
          mousedown: mouseDown,
          mouseover: mouseOver,
          mouseup: mouseUp,
          keyup: keyup,
          keydown: keydown
        }));
      });
      var destroy = function () {
        handlers.each(function (handlers) {
        });
      };
      return {
        clear: annotations.clear,
        destroy: destroy
      };
    }

    var Selections = function (editor) {
      var get = function () {
        var body = getBody$1(editor);
        return TableSelection.retrieve(body, Ephemera.selectedSelector()).fold(function () {
          if (editor.selection.getStart() === undefined) {
            return SelectionTypes.none();
          } else {
            return SelectionTypes.single(editor.selection);
          }
        }, function (cells) {
          return SelectionTypes.multiple(cells);
        });
      };
      return { get: get };
    };

    var each$4 = global$1.each;
    var addButtons = function (editor) {
      var menuItems = [];
      each$4('inserttable tableprops deletetable | cell row column'.split(' '), function (name) {
        if (name === '|') {
          menuItems.push({ text: '-' });
        } else {
          menuItems.push(editor.menuItems[name]);
        }
      });
      editor.addButton('table', {
        type: 'menubutton',
        title: 'Table',
        menu: menuItems
      });
      function cmd(command) {
        return function () {
          editor.execCommand(command);
        };
      }
      editor.addButton('tableprops', {
        title: 'Table properties',
        onclick: cmd('mceTableProps'),
        icon: 'table'
      });
      editor.addButton('tabledelete', {
        title: 'Delete table',
        onclick: cmd('mceTableDelete')
      });
      editor.addButton('tablecellprops', {
        title: 'Cell properties',
        onclick: cmd('mceTableCellProps')
      });
      editor.addButton('tablemergecells', {
        title: 'Merge cells',
        onclick: cmd('mceTableMergeCells')
      });
      editor.addButton('tablesplitcells', {
        title: 'Split cell',
        onclick: cmd('mceTableSplitCells')
      });
      editor.addButton('tableinsertrowbefore', {
        title: 'Insert row before',
        onclick: cmd('mceTableInsertRowBefore')
      });
      editor.addButton('tableinsertrowafter', {
        title: 'Insert row after',
        onclick: cmd('mceTableInsertRowAfter')
      });
      editor.addButton('tabledeleterow', {
        title: 'Delete row',
        onclick: cmd('mceTableDeleteRow')
      });
      editor.addButton('tablerowprops', {
        title: 'Row properties',
        onclick: cmd('mceTableRowProps')
      });
      editor.addButton('tablecutrow', {
        title: 'Cut row',
        onclick: cmd('mceTableCutRow')
      });
      editor.addButton('tablecopyrow', {
        title: 'Copy row',
        onclick: cmd('mceTableCopyRow')
      });
      editor.addButton('tablepasterowbefore', {
        title: 'Paste row before',
        onclick: cmd('mceTablePasteRowBefore')
      });
      editor.addButton('tablepasterowafter', {
        title: 'Paste row after',
        onclick: cmd('mceTablePasteRowAfter')
      });
      editor.addButton('tableinsertcolbefore', {
        title: 'Insert column before',
        onclick: cmd('mceTableInsertColBefore')
      });
      editor.addButton('tableinsertcolafter', {
        title: 'Insert column after',
        onclick: cmd('mceTableInsertColAfter')
      });
      editor.addButton('tabledeletecol', {
        title: 'Delete column',
        onclick: cmd('mceTableDeleteCol')
      });
    };
    var addToolbars = function (editor) {
      var isTable = function (table) {
        var selectorMatched = editor.dom.is(table, 'table') && editor.getBody().contains(table);
        return selectorMatched;
      };
      var toolbar = getToolbar(editor);
      if (toolbar.length > 0) {
        editor.addContextToolbar(isTable, toolbar.join(' '));
      }
    };
    var Buttons = {
      addButtons: addButtons,
      addToolbars: addToolbars
    };

    var addMenuItems = function (editor, selections) {
      var targets = Option.none();
      var tableCtrls = [];
      var cellCtrls = [];
      var mergeCtrls = [];
      var unmergeCtrls = [];
      var noTargetDisable = function (ctrl) {
        ctrl.disabled(true);
      };
      var ctrlEnable = function (ctrl) {
        ctrl.disabled(false);
      };
      var pushTable = function () {
        var self = this;
        tableCtrls.push(self);
        targets.fold(function () {
          noTargetDisable(self);
        }, function (targets) {
          ctrlEnable(self);
        });
      };
      var pushCell = function () {
        var self = this;
        cellCtrls.push(self);
        targets.fold(function () {
          noTargetDisable(self);
        }, function (targets) {
          ctrlEnable(self);
        });
      };
      var pushMerge = function () {
        var self = this;
        mergeCtrls.push(self);
        targets.fold(function () {
          noTargetDisable(self);
        }, function (targets) {
          self.disabled(targets.mergable().isNone());
        });
      };
      var pushUnmerge = function () {
        var self = this;
        unmergeCtrls.push(self);
        targets.fold(function () {
          noTargetDisable(self);
        }, function (targets) {
          self.disabled(targets.unmergable().isNone());
        });
      };
      var setDisabledCtrls = function () {
        targets.fold(function () {
          each(tableCtrls, noTargetDisable);
          each(cellCtrls, noTargetDisable);
          each(mergeCtrls, noTargetDisable);
          each(unmergeCtrls, noTargetDisable);
        }, function (targets) {
          each(tableCtrls, ctrlEnable);
          each(cellCtrls, ctrlEnable);
          each(mergeCtrls, function (mergeCtrl) {
            mergeCtrl.disabled(targets.mergable().isNone());
          });
          each(unmergeCtrls, function (unmergeCtrl) {
            unmergeCtrl.disabled(targets.unmergable().isNone());
          });
        });
      };
      editor.on('init', function () {
        editor.on('nodechange', function (e) {
          var cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
          targets = cellOpt.bind(function (cellDom) {
            var cell = Element.fromDom(cellDom);
            var table = TableLookup.table(cell);
            return table.map(function (table) {
              return TableTargets.forMenu(selections, table, cell);
            });
          });
          setDisabledCtrls();
        });
      });
      var generateTableGrid = function () {
        var html = '';
        html = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';
        for (var y = 0; y < 10; y++) {
          html += '<tr>';
          for (var x = 0; x < 10; x++) {
            html += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (y * 10 + x) + '" href="#" ' + 'data-mce-x="' + x + '" data-mce-y="' + y + '"></a></td>';
          }
          html += '</tr>';
        }
        html += '</table>';
        html += '<div class="mce-text-center" role="presentation">1 x 1</div>';
        return html;
      };
      var selectGrid = function (editor, tx, ty, control) {
        var table = control.getEl().getElementsByTagName('table')[0];
        var x, y, focusCell, cell, active;
        var rtl = control.isRtl() || control.parent().rel === 'tl-tr';
        table.nextSibling.innerHTML = tx + 1 + ' x ' + (ty + 1);
        if (rtl) {
          tx = 9 - tx;
        }
        for (y = 0; y < 10; y++) {
          for (x = 0; x < 10; x++) {
            cell = table.rows[y].childNodes[x].firstChild;
            active = (rtl ? x >= tx : x <= tx) && y <= ty;
            editor.dom.toggleClass(cell, 'mce-active', active);
            if (active) {
              focusCell = cell;
            }
          }
        }
        return focusCell.parentNode;
      };
      var insertTable = hasTableGrid(editor) === false ? {
        text: 'Table',
        icon: 'table',
        context: 'table',
        onclick: cmd('mceInsertTable')
      } : {
        text: 'Table',
        icon: 'table',
        context: 'table',
        ariaHideMenu: true,
        onclick: function (e) {
          if (e.aria) {
            this.parent().hideAll();
            e.stopImmediatePropagation();
            editor.execCommand('mceInsertTable');
          }
        },
        onshow: function () {
          selectGrid(editor, 0, 0, this.menu.items()[0]);
        },
        onhide: function () {
          var elements = this.menu.items()[0].getEl().getElementsByTagName('a');
          editor.dom.removeClass(elements, 'mce-active');
          editor.dom.addClass(elements[0], 'mce-active');
        },
        menu: [{
            type: 'container',
            html: generateTableGrid(),
            onPostRender: function () {
              this.lastX = this.lastY = 0;
            },
            onmousemove: function (e) {
              var target = e.target;
              var x, y;
              if (target.tagName.toUpperCase() === 'A') {
                x = parseInt(target.getAttribute('data-mce-x'), 10);
                y = parseInt(target.getAttribute('data-mce-y'), 10);
                if (this.isRtl() || this.parent().rel === 'tl-tr') {
                  x = 9 - x;
                }
                if (x !== this.lastX || y !== this.lastY) {
                  selectGrid(editor, x, y, e.control);
                  this.lastX = x;
                  this.lastY = y;
                }
              }
            },
            onclick: function (e) {
              var self = this;
              if (e.target.tagName.toUpperCase() === 'A') {
                e.preventDefault();
                e.stopPropagation();
                self.parent().cancel();
                editor.undoManager.transact(function () {
                  InsertTable.insert(editor, self.lastX + 1, self.lastY + 1);
                });
                editor.addVisual();
              }
            }
          }]
      };
      function cmd(command) {
        return function () {
          editor.execCommand(command);
        };
      }
      var tableProperties = {
        text: 'Table properties',
        context: 'table',
        onPostRender: pushTable,
        onclick: cmd('mceTableProps')
      };
      var deleteTable = {
        text: 'Delete table',
        context: 'table',
        onPostRender: pushTable,
        cmd: 'mceTableDelete'
      };
      var row = {
        text: 'Row',
        context: 'table',
        menu: [
          {
            text: 'Insert row before',
            onclick: cmd('mceTableInsertRowBefore'),
            onPostRender: pushCell
          },
          {
            text: 'Insert row after',
            onclick: cmd('mceTableInsertRowAfter'),
            onPostRender: pushCell
          },
          {
            text: 'Delete row',
            onclick: cmd('mceTableDeleteRow'),
            onPostRender: pushCell
          },
          {
            text: 'Row properties',
            onclick: cmd('mceTableRowProps'),
            onPostRender: pushCell
          },
          { text: '-' },
          {
            text: 'Cut row',
            onclick: cmd('mceTableCutRow'),
            onPostRender: pushCell
          },
          {
            text: 'Copy row',
            onclick: cmd('mceTableCopyRow'),
            onPostRender: pushCell
          },
          {
            text: 'Paste row before',
            onclick: cmd('mceTablePasteRowBefore'),
            onPostRender: pushCell
          },
          {
            text: 'Paste row after',
            onclick: cmd('mceTablePasteRowAfter'),
            onPostRender: pushCell
          }
        ]
      };
      var column = {
        text: 'Column',
        context: 'table',
        menu: [
          {
            text: 'Insert column before',
            onclick: cmd('mceTableInsertColBefore'),
            onPostRender: pushCell
          },
          {
            text: 'Insert column after',
            onclick: cmd('mceTableInsertColAfter'),
            onPostRender: pushCell
          },
          {
            text: 'Delete column',
            onclick: cmd('mceTableDeleteCol'),
            onPostRender: pushCell
          }
        ]
      };
      var cell = {
        separator: 'before',
        text: 'Cell',
        context: 'table',
        menu: [
          {
            text: 'Cell properties',
            onclick: cmd('mceTableCellProps'),
            onPostRender: pushCell
          },
          {
            text: 'Merge cells',
            onclick: cmd('mceTableMergeCells'),
            onPostRender: pushMerge
          },
          {
            text: 'Split cell',
            onclick: cmd('mceTableSplitCells'),
            onPostRender: pushUnmerge
          }
        ]
      };
      editor.addMenuItem('inserttable', insertTable);
      editor.addMenuItem('tableprops', tableProperties);
      editor.addMenuItem('deletetable', deleteTable);
      editor.addMenuItem('row', row);
      editor.addMenuItem('column', column);
      editor.addMenuItem('cell', cell);
    };
    var MenuItems = { addMenuItems: addMenuItems };

    var getClipboardRows = function (clipboardRows) {
      return clipboardRows.get().fold(function () {
        return;
      }, function (rows) {
        return map(rows, function (row) {
          return row.dom();
        });
      });
    };
    var setClipboardRows = function (rows, clipboardRows) {
      var sugarRows = map(rows, Element.fromDom);
      clipboardRows.set(Option.from(sugarRows));
    };
    var getApi = function (editor, clipboardRows) {
      return {
        insertTable: function (columns, rows) {
          return InsertTable.insert(editor, columns, rows);
        },
        setClipboardRows: function (rows) {
          return setClipboardRows(rows, clipboardRows);
        },
        getClipboardRows: function () {
          return getClipboardRows(clipboardRows);
        }
      };
    };

    function Plugin(editor) {
      var resizeHandler = ResizeHandler(editor);
      var cellSelection = CellSelection$1(editor, resizeHandler.lazyResize);
      var actions = TableActions(editor, resizeHandler.lazyWire);
      var selections = Selections(editor);
      var clipboardRows = Cell(Option.none());
      Commands.registerCommands(editor, actions, cellSelection, selections, clipboardRows);
      Clipboard.registerEvents(editor, selections, actions, cellSelection);
      MenuItems.addMenuItems(editor, selections);
      Buttons.addButtons(editor);
      Buttons.addToolbars(editor);
      editor.on('PreInit', function () {
        editor.serializer.addTempAttr(Ephemera.firstSelected());
        editor.serializer.addTempAttr(Ephemera.lastSelected());
      });
      if (hasTabNavigation(editor)) {
        editor.on('keydown', function (e) {
          TabContext.handle(e, editor, actions, resizeHandler.lazyWire);
        });
      }
      editor.on('remove', function () {
        resizeHandler.destroy();
        cellSelection.destroy();
      });
      return getApi(editor, clipboardRows);
    }
    global.add('table', Plugin);
    function Plugin$1 () {
    }

    return Plugin$1;

}(window));
})();


/***/ }),

/***/ "./node_modules/tinymce/themes/modern/theme.js":
/*!*****************************************************!*\
  !*** ./node_modules/tinymce/themes/modern/theme.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
var modern = (function (domGlobals) {
    'use strict';

    var global = tinymce.util.Tools.resolve('tinymce.ThemeManager');

    var global$1 = tinymce.util.Tools.resolve('tinymce.EditorManager');

    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var isBrandingEnabled = function (editor) {
      return editor.getParam('branding', true, 'boolean');
    };
    var hasMenubar = function (editor) {
      return getMenubar(editor) !== false;
    };
    var getMenubar = function (editor) {
      return editor.getParam('menubar');
    };
    var hasStatusbar = function (editor) {
      return editor.getParam('statusbar', true, 'boolean');
    };
    var getToolbarSize = function (editor) {
      return editor.getParam('toolbar_items_size');
    };
    var isReadOnly = function (editor) {
      return editor.getParam('readonly', false, 'boolean');
    };
    var getFixedToolbarContainer = function (editor) {
      return editor.getParam('fixed_toolbar_container');
    };
    var getInlineToolbarPositionHandler = function (editor) {
      return editor.getParam('inline_toolbar_position_handler');
    };
    var getMenu = function (editor) {
      return editor.getParam('menu');
    };
    var getRemovedMenuItems = function (editor) {
      return editor.getParam('removed_menuitems', '');
    };
    var getMinWidth = function (editor) {
      return editor.getParam('min_width', 100, 'number');
    };
    var getMinHeight = function (editor) {
      return editor.getParam('min_height', 100, 'number');
    };
    var getMaxWidth = function (editor) {
      return editor.getParam('max_width', 65535, 'number');
    };
    var getMaxHeight = function (editor) {
      return editor.getParam('max_height', 65535, 'number');
    };
    var isSkinDisabled = function (editor) {
      return editor.settings.skin === false;
    };
    var isInline = function (editor) {
      return editor.getParam('inline', false, 'boolean');
    };
    var getResize = function (editor) {
      var resize = editor.getParam('resize', 'vertical');
      if (resize === false) {
        return 'none';
      } else if (resize === 'both') {
        return 'both';
      } else {
        return 'vertical';
      }
    };
    var getSkinUrl = function (editor) {
      var settings = editor.settings;
      var skin = settings.skin;
      var skinUrl = settings.skin_url;
      if (skin !== false) {
        var skinName = skin ? skin : 'lightgray';
        if (skinUrl) {
          skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
        } else {
          skinUrl = global$1.baseURL + '/skins/' + skinName;
        }
      }
      return skinUrl;
    };
    var getIndexedToolbars = function (settings, defaultToolbar) {
      var toolbars = [];
      for (var i = 1; i < 10; i++) {
        var toolbar = settings['toolbar' + i];
        if (!toolbar) {
          break;
        }
        toolbars.push(toolbar);
      }
      var mainToolbar = settings.toolbar ? [settings.toolbar] : [defaultToolbar];
      return toolbars.length > 0 ? toolbars : mainToolbar;
    };
    var getToolbars = function (editor) {
      var toolbar = editor.getParam('toolbar');
      var defaultToolbar = 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image';
      if (toolbar === false) {
        return [];
      } else if (global$2.isArray(toolbar)) {
        return global$2.grep(toolbar, function (toolbar) {
          return toolbar.length > 0;
        });
      } else {
        return getIndexedToolbars(editor.settings, defaultToolbar);
      }
    };

    var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var global$4 = tinymce.util.Tools.resolve('tinymce.ui.Factory');

    var global$5 = tinymce.util.Tools.resolve('tinymce.util.I18n');

    var fireSkinLoaded = function (editor) {
      return editor.fire('SkinLoaded');
    };
    var fireResizeEditor = function (editor) {
      return editor.fire('ResizeEditor');
    };
    var fireBeforeRenderUI = function (editor) {
      return editor.fire('BeforeRenderUI');
    };
    var Events = {
      fireSkinLoaded: fireSkinLoaded,
      fireResizeEditor: fireResizeEditor,
      fireBeforeRenderUI: fireBeforeRenderUI
    };

    var focus = function (panel, type) {
      return function () {
        var item = panel.find(type)[0];
        if (item) {
          item.focus(true);
        }
      };
    };
    var addKeys = function (editor, panel) {
      editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
      editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
      editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
      panel.on('cancel', function () {
        editor.focus();
      });
    };
    var A11y = { addKeys: addKeys };

    var global$6 = tinymce.util.Tools.resolve('tinymce.geom.Rect');

    var global$7 = tinymce.util.Tools.resolve('tinymce.util.Delay');

    var noop = function () {
    };
    var constant = function (value) {
      return function () {
        return value;
      };
    };
    var never = constant(false);
    var always = constant(true);

    var never$1 = never;
    var always$1 = always;
    var none = function () {
      return NONE;
    };
    var NONE = function () {
      var eq = function (o) {
        return o.isNone();
      };
      var call = function (thunk) {
        return thunk();
      };
      var id = function (n) {
        return n;
      };
      var noop = function () {
      };
      var nul = function () {
        return null;
      };
      var undef = function () {
        return undefined;
      };
      var me = {
        fold: function (n, s) {
          return n();
        },
        is: never$1,
        isSome: never$1,
        isNone: always$1,
        getOr: id,
        getOrThunk: call,
        getOrDie: function (msg) {
          throw new Error(msg || 'error: getOrDie called on none.');
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: none,
        ap: none,
        each: noop,
        bind: none,
        flatten: none,
        exists: never$1,
        forall: always$1,
        filter: none,
        equals: eq,
        equals_: eq,
        toArray: function () {
          return [];
        },
        toString: constant('none()')
      };
      if (Object.freeze) {
        Object.freeze(me);
      }
      return me;
    }();
    var some = function (a) {
      var constant_a = function () {
        return a;
      };
      var self = function () {
        return me;
      };
      var map = function (f) {
        return some(f(a));
      };
      var bind = function (f) {
        return f(a);
      };
      var me = {
        fold: function (n, s) {
          return s(a);
        },
        is: function (v) {
          return a === v;
        },
        isSome: always$1,
        isNone: never$1,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function (optfab) {
          return optfab.fold(none, function (fab) {
            return some(fab(a));
          });
        },
        each: function (f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function (f) {
          return f(a) ? me : NONE;
        },
        equals: function (o) {
          return o.is(a);
        },
        equals_: function (o, elementEq) {
          return o.fold(never$1, function (b) {
            return elementEq(a, b);
          });
        },
        toArray: function () {
          return [a];
        },
        toString: function () {
          return 'some(' + a + ')';
        }
      };
      return me;
    };
    var from = function (value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: none,
      from: from
    };

    var getUiContainerDelta = function (ctrl) {
      var uiContainer = getUiContainer(ctrl);
      if (uiContainer && global$3.DOM.getStyle(uiContainer, 'position', true) !== 'static') {
        var containerPos = global$3.DOM.getPos(uiContainer);
        var dx = uiContainer.scrollLeft - containerPos.x;
        var dy = uiContainer.scrollTop - containerPos.y;
        return Option.some({
          x: dx,
          y: dy
        });
      } else {
        return Option.none();
      }
    };
    var setUiContainer = function (editor, ctrl) {
      var uiContainer = global$3.DOM.select(editor.settings.ui_container)[0];
      ctrl.getRoot().uiContainer = uiContainer;
    };
    var getUiContainer = function (ctrl) {
      return ctrl ? ctrl.getRoot().uiContainer : null;
    };
    var inheritUiContainer = function (fromCtrl, toCtrl) {
      return toCtrl.uiContainer = getUiContainer(fromCtrl);
    };
    var UiContainer = {
      getUiContainerDelta: getUiContainerDelta,
      setUiContainer: setUiContainer,
      getUiContainer: getUiContainer,
      inheritUiContainer: inheritUiContainer
    };

    var createToolbar = function (editor, items, size) {
      var toolbarItems = [];
      var buttonGroup;
      if (!items) {
        return;
      }
      global$2.each(items.split(/[ ,]/), function (item) {
        var itemName;
        var bindSelectorChanged = function () {
          var selection = editor.selection;
          if (item.settings.stateSelector) {
            selection.selectorChanged(item.settings.stateSelector, function (state) {
              item.active(state);
            }, true);
          }
          if (item.settings.disabledStateSelector) {
            selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
              item.disabled(state);
            });
          }
        };
        if (item === '|') {
          buttonGroup = null;
        } else {
          if (!buttonGroup) {
            buttonGroup = {
              type: 'buttongroup',
              items: []
            };
            toolbarItems.push(buttonGroup);
          }
          if (editor.buttons[item]) {
            itemName = item;
            item = editor.buttons[itemName];
            if (typeof item === 'function') {
              item = item();
            }
            item.type = item.type || 'button';
            item.size = size;
            item = global$4.create(item);
            buttonGroup.items.push(item);
            if (editor.initialized) {
              bindSelectorChanged();
            } else {
              editor.on('init', bindSelectorChanged);
            }
          }
        }
      });
      return {
        type: 'toolbar',
        layout: 'flow',
        items: toolbarItems
      };
    };
    var createToolbars = function (editor, size) {
      var toolbars = [];
      var addToolbar = function (items) {
        if (items) {
          toolbars.push(createToolbar(editor, items, size));
        }
      };
      global$2.each(getToolbars(editor), function (toolbar) {
        addToolbar(toolbar);
      });
      if (toolbars.length) {
        return {
          type: 'panel',
          layout: 'stack',
          classes: 'toolbar-grp',
          ariaRoot: true,
          ariaRemember: true,
          items: toolbars
        };
      }
    };
    var Toolbar = {
      createToolbar: createToolbar,
      createToolbars: createToolbars
    };

    var DOM = global$3.DOM;
    var toClientRect = function (geomRect) {
      return {
        left: geomRect.x,
        top: geomRect.y,
        width: geomRect.w,
        height: geomRect.h,
        right: geomRect.x + geomRect.w,
        bottom: geomRect.y + geomRect.h
      };
    };
    var hideAllFloatingPanels = function (editor) {
      global$2.each(editor.contextToolbars, function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.hide();
        }
      });
    };
    var movePanelTo = function (panel, pos) {
      panel.moveTo(pos.left, pos.top);
    };
    var togglePositionClass = function (panel, relPos, predicate) {
      relPos = relPos ? relPos.substr(0, 2) : '';
      global$2.each({
        t: 'down',
        b: 'up'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
      });
      global$2.each({
        l: 'left',
        r: 'right'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
      });
    };
    var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
      panelRect = toClientRect({
        x: x,
        y: y,
        w: panelRect.w,
        h: panelRect.h
      });
      if (handler) {
        panelRect = handler({
          elementRect: toClientRect(elementRect),
          contentAreaRect: toClientRect(contentAreaRect),
          panelRect: panelRect
        });
      }
      return panelRect;
    };
    var addContextualToolbars = function (editor) {
      var scrollContainer;
      var getContextToolbars = function () {
        return editor.contextToolbars || [];
      };
      var getElementRect = function (elm) {
        var pos, targetRect, root;
        pos = DOM.getPos(editor.getContentAreaContainer());
        targetRect = editor.dom.getRect(elm);
        root = editor.dom.getRoot();
        if (root.nodeName === 'BODY') {
          targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
          targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
        }
        targetRect.x += pos.x;
        targetRect.y += pos.y;
        return targetRect;
      };
      var reposition = function (match, shouldShow) {
        var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
        var handler = getInlineToolbarPositionHandler(editor);
        if (editor.removed) {
          return;
        }
        if (!match || !match.toolbar.panel) {
          hideAllFloatingPanels(editor);
          return;
        }
        testPositions = [
          'bc-tc',
          'tc-bc',
          'tl-bl',
          'bl-tl',
          'tr-br',
          'br-tr'
        ];
        panel = match.toolbar.panel;
        if (shouldShow) {
          panel.show();
        }
        elementRect = getElementRect(match.element);
        panelRect = DOM.getRect(panel.getEl());
        contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
        var delta = UiContainer.getUiContainerDelta(panel).getOr({
          x: 0,
          y: 0
        });
        elementRect.x += delta.x;
        elementRect.y += delta.y;
        panelRect.x += delta.x;
        panelRect.y += delta.y;
        contentAreaRect.x += delta.x;
        contentAreaRect.y += delta.y;
        smallElementWidthThreshold = 25;
        if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
          var clientRect = match.element.getBoundingClientRect();
          elementRect.w = clientRect.width;
          elementRect.h = clientRect.height;
        }
        if (!editor.inline) {
          contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
        }
        if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
          elementRect = global$6.inflate(elementRect, 0, 8);
        }
        relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
        elementRect = global$6.clamp(elementRect, contentAreaRect);
        if (relPos) {
          relRect = global$6.relativePosition(panelRect, elementRect, relPos);
          movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
        } else {
          contentAreaRect.h += panelRect.h;
          elementRect = global$6.intersect(contentAreaRect, elementRect);
          if (elementRect) {
            relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
              'bc-tc',
              'bl-tl',
              'br-tr'
            ]);
            if (relPos) {
              relRect = global$6.relativePosition(panelRect, elementRect, relPos);
              movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
            } else {
              movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
            }
          } else {
            panel.hide();
          }
        }
        togglePositionClass(panel, relPos, function (pos1, pos2) {
          return pos1 === pos2;
        });
      };
      var repositionHandler = function (show) {
        return function () {
          var execute = function () {
            if (editor.selection) {
              reposition(findFrontMostMatch(editor.selection.getNode()), show);
            }
          };
          global$7.requestAnimationFrame(execute);
        };
      };
      var bindScrollEvent = function (panel) {
        if (!scrollContainer) {
          var reposition_1 = repositionHandler(true);
          var uiContainer_1 = UiContainer.getUiContainer(panel);
          scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
          DOM.bind(scrollContainer, 'scroll', reposition_1);
          DOM.bind(uiContainer_1, 'scroll', reposition_1);
          editor.on('remove', function () {
            DOM.unbind(scrollContainer, 'scroll', reposition_1);
            DOM.unbind(uiContainer_1, 'scroll', reposition_1);
          });
        }
      };
      var showContextToolbar = function (match) {
        var panel;
        if (match.toolbar.panel) {
          match.toolbar.panel.show();
          reposition(match);
          return;
        }
        panel = global$4.create({
          type: 'floatpanel',
          role: 'dialog',
          classes: 'tinymce tinymce-inline arrow',
          ariaLabel: 'Inline toolbar',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: true,
          border: 1,
          items: Toolbar.createToolbar(editor, match.toolbar.items),
          oncancel: function () {
            editor.focus();
          }
        });
        UiContainer.setUiContainer(editor, panel);
        bindScrollEvent(panel);
        match.toolbar.panel = panel;
        panel.renderTo().reflow();
        reposition(match);
      };
      var hideAllContextToolbars = function () {
        global$2.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.hide();
          }
        });
      };
      var findFrontMostMatch = function (targetElm) {
        var i, y, parentsAndSelf;
        var toolbars = getContextToolbars();
        parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
        for (i = parentsAndSelf.length - 1; i >= 0; i--) {
          for (y = toolbars.length - 1; y >= 0; y--) {
            if (toolbars[y].predicate(parentsAndSelf[i])) {
              return {
                toolbar: toolbars[y],
                element: parentsAndSelf[i]
              };
            }
          }
        }
        return null;
      };
      editor.on('click keyup setContent ObjectResized', function (e) {
        if (e.type === 'setcontent' && !e.selection) {
          return;
        }
        global$7.setEditorTimeout(editor, function () {
          var match;
          match = findFrontMostMatch(editor.selection.getNode());
          if (match) {
            hideAllContextToolbars();
            showContextToolbar(match);
          } else {
            hideAllContextToolbars();
          }
        });
      });
      editor.on('blur hide contextmenu', hideAllContextToolbars);
      editor.on('ObjectResizeStart', function () {
        var match = findFrontMostMatch(editor.selection.getNode());
        if (match && match.toolbar.panel) {
          match.toolbar.panel.hide();
        }
      });
      editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
      editor.on('nodeChange', repositionHandler(false));
      editor.on('remove', function () {
        global$2.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.remove();
          }
        });
        editor.contextToolbars = {};
      });
      editor.shortcuts.add('ctrl+F9', '', function () {
        var match = findFrontMostMatch(editor.selection.getNode());
        if (match && match.toolbar.panel) {
          match.toolbar.panel.items()[0].focus();
        }
      });
    };
    var ContextToolbars = { addContextualToolbars: addContextualToolbars };

    var typeOf = function (x) {
      if (x === null) {
        return 'null';
      }
      var t = typeof x;
      if (t === 'object' && (Array.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'Array')) {
        return 'array';
      }
      if (t === 'object' && (String.prototype.isPrototypeOf(x) || x.constructor && x.constructor.name === 'String')) {
        return 'string';
      }
      return t;
    };
    var isType = function (type) {
      return function (value) {
        return typeOf(value) === type;
      };
    };
    var isArray = isType('array');
    var isFunction = isType('function');
    var isNumber = isType('number');

    var slice = Array.prototype.slice;
    var rawIndexOf = function () {
      var pIndexOf = Array.prototype.indexOf;
      var fastIndex = function (xs, x) {
        return pIndexOf.call(xs, x);
      };
      var slowIndex = function (xs, x) {
        return slowIndexOf(xs, x);
      };
      return pIndexOf === undefined ? slowIndex : fastIndex;
    }();
    var indexOf = function (xs, x) {
      var r = rawIndexOf(xs, x);
      return r === -1 ? Option.none() : Option.some(r);
    };
    var exists = function (xs, pred) {
      return findIndex(xs, pred).isSome();
    };
    var map = function (xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var each = function (xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var filter = function (xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var foldl = function (xs, f, acc) {
      each(xs, function (x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var find = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var findIndex = function (xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(i);
        }
      }
      return Option.none();
    };
    var slowIndexOf = function (xs, x) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    };
    var push = Array.prototype.push;
    var flatten = function (xs) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (!isArray(xs[i])) {
          throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
        }
        push.apply(r, xs[i]);
      }
      return r;
    };
    var from$1 = isFunction(Array.from) ? Array.from : function (x) {
      return slice.call(x);
    };

    var defaultMenus = {
      file: {
        title: 'File',
        items: 'newdocument restoredraft | preview | print'
      },
      edit: {
        title: 'Edit',
        items: 'undo redo | cut copy paste pastetext | selectall'
      },
      view: {
        title: 'View',
        items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'
      },
      insert: {
        title: 'Insert',
        items: 'image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime'
      },
      format: {
        title: 'Format',
        items: 'bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat'
      },
      tools: {
        title: 'Tools',
        items: 'spellchecker spellcheckerlanguage | a11ycheck code'
      },
      table: { title: 'Table' },
      help: { title: 'Help' }
    };
    var delimiterMenuNamePair = function () {
      return {
        name: '|',
        item: { text: '|' }
      };
    };
    var createMenuNameItemPair = function (name, item) {
      var menuItem = item ? {
        name: name,
        item: item
      } : null;
      return name === '|' ? delimiterMenuNamePair() : menuItem;
    };
    var hasItemName = function (namedMenuItems, name) {
      return findIndex(namedMenuItems, function (namedMenuItem) {
        return namedMenuItem.name === name;
      }).isSome();
    };
    var isSeparator = function (namedMenuItem) {
      return namedMenuItem && namedMenuItem.item.text === '|';
    };
    var cleanupMenu = function (namedMenuItems, removedMenuItems) {
      var menuItemsPass1 = filter(namedMenuItems, function (namedMenuItem) {
        return removedMenuItems.hasOwnProperty(namedMenuItem.name) === false;
      });
      var menuItemsPass2 = filter(menuItemsPass1, function (namedMenuItem, i, namedMenuItems) {
        return !isSeparator(namedMenuItem) || !isSeparator(namedMenuItems[i - 1]);
      });
      return filter(menuItemsPass2, function (namedMenuItem, i, namedMenuItems) {
        return !isSeparator(namedMenuItem) || i > 0 && i < namedMenuItems.length - 1;
      });
    };
    var createMenu = function (editorMenuItems, menus, removedMenuItems, context) {
      var menuButton, menu, namedMenuItems, isUserDefined;
      if (menus) {
        menu = menus[context];
        isUserDefined = true;
      } else {
        menu = defaultMenus[context];
      }
      if (menu) {
        menuButton = { text: menu.title };
        namedMenuItems = [];
        global$2.each((menu.items || '').split(/[ ,]/), function (name) {
          var namedMenuItem = createMenuNameItemPair(name, editorMenuItems[name]);
          if (namedMenuItem) {
            namedMenuItems.push(namedMenuItem);
          }
        });
        if (!isUserDefined) {
          global$2.each(editorMenuItems, function (item, name) {
            if (item.context === context && !hasItemName(namedMenuItems, name)) {
              if (item.separator === 'before') {
                namedMenuItems.push(delimiterMenuNamePair());
              }
              if (item.prependToContext) {
                namedMenuItems.unshift(createMenuNameItemPair(name, item));
              } else {
                namedMenuItems.push(createMenuNameItemPair(name, item));
              }
              if (item.separator === 'after') {
                namedMenuItems.push(delimiterMenuNamePair());
              }
            }
          });
        }
        menuButton.menu = map(cleanupMenu(namedMenuItems, removedMenuItems), function (menuItem) {
          return menuItem.item;
        });
        if (!menuButton.menu.length) {
          return null;
        }
      }
      return menuButton;
    };
    var getDefaultMenubar = function (editor) {
      var name;
      var defaultMenuBar = [];
      var menu = getMenu(editor);
      if (menu) {
        for (name in menu) {
          defaultMenuBar.push(name);
        }
      } else {
        for (name in defaultMenus) {
          defaultMenuBar.push(name);
        }
      }
      return defaultMenuBar;
    };
    var createMenuButtons = function (editor) {
      var menuButtons = [];
      var defaultMenuBar = getDefaultMenubar(editor);
      var removedMenuItems = global$2.makeMap(getRemovedMenuItems(editor).split(/[ ,]/));
      var menubar = getMenubar(editor);
      var enabledMenuNames = typeof menubar === 'string' ? menubar.split(/[ ,]/) : defaultMenuBar;
      for (var i = 0; i < enabledMenuNames.length; i++) {
        var menuItems = enabledMenuNames[i];
        var menu = createMenu(editor.menuItems, getMenu(editor), removedMenuItems, menuItems);
        if (menu) {
          menuButtons.push(menu);
        }
      }
      return menuButtons;
    };
    var Menubar = { createMenuButtons: createMenuButtons };

    var DOM$1 = global$3.DOM;
    var getSize = function (elm) {
      return {
        width: elm.clientWidth,
        height: elm.clientHeight
      };
    };
    var resizeTo = function (editor, width, height) {
      var containerElm, iframeElm, containerSize, iframeSize;
      containerElm = editor.getContainer();
      iframeElm = editor.getContentAreaContainer().firstChild;
      containerSize = getSize(containerElm);
      iframeSize = getSize(iframeElm);
      if (width !== null) {
        width = Math.max(getMinWidth(editor), width);
        width = Math.min(getMaxWidth(editor), width);
        DOM$1.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
        DOM$1.setStyle(iframeElm, 'width', width);
      }
      height = Math.max(getMinHeight(editor), height);
      height = Math.min(getMaxHeight(editor), height);
      DOM$1.setStyle(iframeElm, 'height', height);
      Events.fireResizeEditor(editor);
    };
    var resizeBy = function (editor, dw, dh) {
      var elm = editor.getContentAreaContainer();
      resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
    };
    var Resize = {
      resizeTo: resizeTo,
      resizeBy: resizeBy
    };

    var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

    var api = function (elm) {
      return {
        element: function () {
          return elm;
        }
      };
    };
    var trigger = function (sidebar, panel, callbackName) {
      var callback = sidebar.settings[callbackName];
      if (callback) {
        callback(api(panel.getEl('body')));
      }
    };
    var hidePanels = function (name, container, sidebars) {
      global$2.each(sidebars, function (sidebar) {
        var panel = container.items().filter('#' + sidebar.name)[0];
        if (panel && panel.visible() && sidebar.name !== name) {
          trigger(sidebar, panel, 'onhide');
          panel.visible(false);
        }
      });
    };
    var deactivateButtons = function (toolbar) {
      toolbar.items().each(function (ctrl) {
        ctrl.active(false);
      });
    };
    var findSidebar = function (sidebars, name) {
      return global$2.grep(sidebars, function (sidebar) {
        return sidebar.name === name;
      })[0];
    };
    var showPanel = function (editor, name, sidebars) {
      return function (e) {
        var btnCtrl = e.control;
        var container = btnCtrl.parents().filter('panel')[0];
        var panel = container.find('#' + name)[0];
        var sidebar = findSidebar(sidebars, name);
        hidePanels(name, container, sidebars);
        deactivateButtons(btnCtrl.parent());
        if (panel && panel.visible()) {
          trigger(sidebar, panel, 'onhide');
          panel.hide();
          btnCtrl.active(false);
        } else {
          if (panel) {
            panel.show();
            trigger(sidebar, panel, 'onshow');
          } else {
            panel = global$4.create({
              type: 'container',
              name: name,
              layout: 'stack',
              classes: 'sidebar-panel',
              html: ''
            });
            container.prepend(panel);
            trigger(sidebar, panel, 'onrender');
            trigger(sidebar, panel, 'onshow');
          }
          btnCtrl.active(true);
        }
        Events.fireResizeEditor(editor);
      };
    };
    var isModernBrowser = function () {
      return !global$8.ie || global$8.ie >= 11;
    };
    var hasSidebar = function (editor) {
      return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
    };
    var createSidebar = function (editor) {
      var buttons = global$2.map(editor.sidebars, function (sidebar) {
        var settings = sidebar.settings;
        return {
          type: 'button',
          icon: settings.icon,
          image: settings.image,
          tooltip: settings.tooltip,
          onclick: showPanel(editor, sidebar.name, editor.sidebars)
        };
      });
      return {
        type: 'panel',
        name: 'sidebar',
        layout: 'stack',
        classes: 'sidebar',
        items: [{
            type: 'toolbar',
            layout: 'stack',
            classes: 'sidebar-toolbar',
            items: buttons
          }]
      };
    };
    var Sidebar = {
      hasSidebar: hasSidebar,
      createSidebar: createSidebar
    };

    var fireSkinLoaded$1 = function (editor) {
      var done = function () {
        editor._skinLoaded = true;
        Events.fireSkinLoaded(editor);
      };
      return function () {
        if (editor.initialized) {
          done();
        } else {
          editor.on('init', done);
        }
      };
    };
    var SkinLoaded = { fireSkinLoaded: fireSkinLoaded$1 };

    var DOM$2 = global$3.DOM;
    var switchMode = function (panel) {
      return function (e) {
        panel.find('*').disabled(e.mode === 'readonly');
      };
    };
    var editArea = function (border) {
      return {
        type: 'panel',
        name: 'iframe',
        layout: 'stack',
        classes: 'edit-area',
        border: border,
        html: ''
      };
    };
    var editAreaContainer = function (editor) {
      return {
        type: 'panel',
        layout: 'stack',
        classes: 'edit-aria-container',
        border: '1 0 0 0',
        items: [
          editArea('0'),
          Sidebar.createSidebar(editor)
        ]
      };
    };
    var render = function (editor, theme, args) {
      var panel, resizeHandleCtrl, startSize;
      if (isSkinDisabled(editor) === false && args.skinUiCss) {
        DOM$2.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      } else {
        SkinLoaded.fireSkinLoaded(editor)();
      }
      panel = theme.panel = global$4.create({
        type: 'panel',
        role: 'application',
        classes: 'tinymce',
        style: 'visibility: hidden',
        layout: 'stack',
        border: 1,
        items: [
          {
            type: 'container',
            classes: 'top-part',
            items: [
              hasMenubar(editor) === false ? null : {
                type: 'menubar',
                border: '0 0 1 0',
                items: Menubar.createMenuButtons(editor)
              },
              Toolbar.createToolbars(editor, getToolbarSize(editor))
            ]
          },
          Sidebar.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
        ]
      });
      UiContainer.setUiContainer(editor, panel);
      if (getResize(editor) !== 'none') {
        resizeHandleCtrl = {
          type: 'resizehandle',
          direction: getResize(editor),
          onResizeStart: function () {
            var elm = editor.getContentAreaContainer().firstChild;
            startSize = {
              width: elm.clientWidth,
              height: elm.clientHeight
            };
          },
          onResize: function (e) {
            if (getResize(editor) === 'both') {
              Resize.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
            } else {
              Resize.resizeTo(editor, null, startSize.height + e.deltaY);
            }
          }
        };
      }
      if (hasStatusbar(editor)) {
        var linkHtml = '<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">Tiny</a>';
        var html = global$5.translate([
          'Powered by {0}',
          linkHtml
        ]);
        var brandingLabel = isBrandingEnabled(editor) ? {
          type: 'label',
          classes: 'branding',
          html: ' ' + html
        } : null;
        panel.add({
          type: 'panel',
          name: 'statusbar',
          classes: 'statusbar',
          layout: 'flow',
          border: '1 0 0 0',
          ariaRoot: true,
          items: [
            {
              type: 'elementpath',
              editor: editor
            },
            resizeHandleCtrl,
            brandingLabel
          ]
        });
      }
      Events.fireBeforeRenderUI(editor);
      editor.on('SwitchMode', switchMode(panel));
      panel.renderBefore(args.targetNode).reflow();
      if (isReadOnly(editor)) {
        editor.setMode('readonly');
      }
      if (args.width) {
        DOM$2.setStyle(panel.getEl(), 'width', args.width);
      }
      editor.on('remove', function () {
        panel.remove();
        panel = null;
      });
      A11y.addKeys(editor, panel);
      ContextToolbars.addContextualToolbars(editor);
      return {
        iframeContainer: panel.find('#iframe')[0].getEl(),
        editorContainer: panel.getEl()
      };
    };
    var Iframe = { render: render };

    var global$9 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

    var count = 0;
    var funcs = {
      id: function () {
        return 'mceu_' + count++;
      },
      create: function (name, attrs, children) {
        var elm = domGlobals.document.createElement(name);
        global$3.DOM.setAttribs(elm, attrs);
        if (typeof children === 'string') {
          elm.innerHTML = children;
        } else {
          global$2.each(children, function (child) {
            if (child.nodeType) {
              elm.appendChild(child);
            }
          });
        }
        return elm;
      },
      createFragment: function (html) {
        return global$3.DOM.createFragment(html);
      },
      getWindowSize: function () {
        return global$3.DOM.getViewPort();
      },
      getSize: function (elm) {
        var width, height;
        if (elm.getBoundingClientRect) {
          var rect = elm.getBoundingClientRect();
          width = Math.max(rect.width || rect.right - rect.left, elm.offsetWidth);
          height = Math.max(rect.height || rect.bottom - rect.bottom, elm.offsetHeight);
        } else {
          width = elm.offsetWidth;
          height = elm.offsetHeight;
        }
        return {
          width: width,
          height: height
        };
      },
      getPos: function (elm, root) {
        return global$3.DOM.getPos(elm, root || funcs.getContainer());
      },
      getContainer: function () {
        return global$8.container ? global$8.container : domGlobals.document.body;
      },
      getViewPort: function (win) {
        return global$3.DOM.getViewPort(win);
      },
      get: function (id) {
        return domGlobals.document.getElementById(id);
      },
      addClass: function (elm, cls) {
        return global$3.DOM.addClass(elm, cls);
      },
      removeClass: function (elm, cls) {
        return global$3.DOM.removeClass(elm, cls);
      },
      hasClass: function (elm, cls) {
        return global$3.DOM.hasClass(elm, cls);
      },
      toggleClass: function (elm, cls, state) {
        return global$3.DOM.toggleClass(elm, cls, state);
      },
      css: function (elm, name, value) {
        return global$3.DOM.setStyle(elm, name, value);
      },
      getRuntimeStyle: function (elm, name) {
        return global$3.DOM.getStyle(elm, name, true);
      },
      on: function (target, name, callback, scope) {
        return global$3.DOM.bind(target, name, callback, scope);
      },
      off: function (target, name, callback) {
        return global$3.DOM.unbind(target, name, callback);
      },
      fire: function (target, name, args) {
        return global$3.DOM.fire(target, name, args);
      },
      innerHtml: function (elm, html) {
        global$3.DOM.setHTML(elm, html);
      }
    };

    var isStatic = function (elm) {
      return funcs.getRuntimeStyle(elm, 'position') === 'static';
    };
    var isFixed = function (ctrl) {
      return ctrl.state.get('fixed');
    };
    function calculateRelativePosition(ctrl, targetElm, rel) {
      var ctrlElm, pos, x, y, selfW, selfH, targetW, targetH, viewport, size;
      viewport = getWindowViewPort();
      pos = funcs.getPos(targetElm, UiContainer.getUiContainer(ctrl));
      x = pos.x;
      y = pos.y;
      if (isFixed(ctrl) && isStatic(domGlobals.document.body)) {
        x -= viewport.x;
        y -= viewport.y;
      }
      ctrlElm = ctrl.getEl();
      size = funcs.getSize(ctrlElm);
      selfW = size.width;
      selfH = size.height;
      size = funcs.getSize(targetElm);
      targetW = size.width;
      targetH = size.height;
      rel = (rel || '').split('');
      if (rel[0] === 'b') {
        y += targetH;
      }
      if (rel[1] === 'r') {
        x += targetW;
      }
      if (rel[0] === 'c') {
        y += Math.round(targetH / 2);
      }
      if (rel[1] === 'c') {
        x += Math.round(targetW / 2);
      }
      if (rel[3] === 'b') {
        y -= selfH;
      }
      if (rel[4] === 'r') {
        x -= selfW;
      }
      if (rel[3] === 'c') {
        y -= Math.round(selfH / 2);
      }
      if (rel[4] === 'c') {
        x -= Math.round(selfW / 2);
      }
      return {
        x: x,
        y: y,
        w: selfW,
        h: selfH
      };
    }
    var getUiContainerViewPort = function (customUiContainer) {
      return {
        x: 0,
        y: 0,
        w: customUiContainer.scrollWidth - 1,
        h: customUiContainer.scrollHeight - 1
      };
    };
    var getWindowViewPort = function () {
      var win = domGlobals.window;
      var x = Math.max(win.pageXOffset, domGlobals.document.body.scrollLeft, domGlobals.document.documentElement.scrollLeft);
      var y = Math.max(win.pageYOffset, domGlobals.document.body.scrollTop, domGlobals.document.documentElement.scrollTop);
      var w = win.innerWidth || domGlobals.document.documentElement.clientWidth;
      var h = win.innerHeight || domGlobals.document.documentElement.clientHeight;
      return {
        x: x,
        y: y,
        w: w,
        h: h
      };
    };
    var getViewPortRect = function (ctrl) {
      var customUiContainer = UiContainer.getUiContainer(ctrl);
      return customUiContainer && !isFixed(ctrl) ? getUiContainerViewPort(customUiContainer) : getWindowViewPort();
    };
    var Movable = {
      testMoveRel: function (elm, rels) {
        var viewPortRect = getViewPortRect(this);
        for (var i = 0; i < rels.length; i++) {
          var pos = calculateRelativePosition(this, elm, rels[i]);
          if (isFixed(this)) {
            if (pos.x > 0 && pos.x + pos.w < viewPortRect.w && pos.y > 0 && pos.y + pos.h < viewPortRect.h) {
              return rels[i];
            }
          } else {
            if (pos.x > viewPortRect.x && pos.x + pos.w < viewPortRect.w + viewPortRect.x && pos.y > viewPortRect.y && pos.y + pos.h < viewPortRect.h + viewPortRect.y) {
              return rels[i];
            }
          }
        }
        return rels[0];
      },
      moveRel: function (elm, rel) {
        if (typeof rel !== 'string') {
          rel = this.testMoveRel(elm, rel);
        }
        var pos = calculateRelativePosition(this, elm, rel);
        return this.moveTo(pos.x, pos.y);
      },
      moveBy: function (dx, dy) {
        var self = this, rect = self.layoutRect();
        self.moveTo(rect.x + dx, rect.y + dy);
        return self;
      },
      moveTo: function (x, y) {
        var self = this;
        function constrain(value, max, size) {
          if (value < 0) {
            return 0;
          }
          if (value + size > max) {
            value = max - size;
            return value < 0 ? 0 : value;
          }
          return value;
        }
        if (self.settings.constrainToViewport) {
          var viewPortRect = getViewPortRect(this);
          var layoutRect = self.layoutRect();
          x = constrain(x, viewPortRect.w + viewPortRect.x, layoutRect.w);
          y = constrain(y, viewPortRect.h + viewPortRect.y, layoutRect.h);
        }
        var uiContainer = UiContainer.getUiContainer(self);
        if (uiContainer && isStatic(uiContainer) && !isFixed(self)) {
          x -= uiContainer.scrollLeft;
          y -= uiContainer.scrollTop;
        }
        if (uiContainer) {
          x += 1;
          y += 1;
        }
        if (self.state.get('rendered')) {
          self.layoutRect({
            x: x,
            y: y
          }).repaint();
        } else {
          self.settings.x = x;
          self.settings.y = y;
        }
        self.fire('move', {
          x: x,
          y: y
        });
        return self;
      }
    };

    var global$a = tinymce.util.Tools.resolve('tinymce.util.Class');

    var global$b = tinymce.util.Tools.resolve('tinymce.util.EventDispatcher');

    var BoxUtils = {
      parseBox: function (value) {
        var len;
        var radix = 10;
        if (!value) {
          return;
        }
        if (typeof value === 'number') {
          value = value || 0;
          return {
            top: value,
            left: value,
            bottom: value,
            right: value
          };
        }
        value = value.split(' ');
        len = value.length;
        if (len === 1) {
          value[1] = value[2] = value[3] = value[0];
        } else if (len === 2) {
          value[2] = value[0];
          value[3] = value[1];
        } else if (len === 3) {
          value[3] = value[1];
        }
        return {
          top: parseInt(value[0], radix) || 0,
          right: parseInt(value[1], radix) || 0,
          bottom: parseInt(value[2], radix) || 0,
          left: parseInt(value[3], radix) || 0
        };
      },
      measureBox: function (elm, prefix) {
        function getStyle(name) {
          var defaultView = elm.ownerDocument.defaultView;
          if (defaultView) {
            var computedStyle = defaultView.getComputedStyle(elm, null);
            if (computedStyle) {
              name = name.replace(/[A-Z]/g, function (a) {
                return '-' + a;
              });
              return computedStyle.getPropertyValue(name);
            } else {
              return null;
            }
          }
          return elm.currentStyle[name];
        }
        function getSide(name) {
          var val = parseFloat(getStyle(name));
          return isNaN(val) ? 0 : val;
        }
        return {
          top: getSide(prefix + 'TopWidth'),
          right: getSide(prefix + 'RightWidth'),
          bottom: getSide(prefix + 'BottomWidth'),
          left: getSide(prefix + 'LeftWidth')
        };
      }
    };

    function noop$1() {
    }
    function ClassList(onchange) {
      this.cls = [];
      this.cls._map = {};
      this.onchange = onchange || noop$1;
      this.prefix = '';
    }
    global$2.extend(ClassList.prototype, {
      add: function (cls) {
        if (cls && !this.contains(cls)) {
          this.cls._map[cls] = true;
          this.cls.push(cls);
          this._change();
        }
        return this;
      },
      remove: function (cls) {
        if (this.contains(cls)) {
          var i = void 0;
          for (i = 0; i < this.cls.length; i++) {
            if (this.cls[i] === cls) {
              break;
            }
          }
          this.cls.splice(i, 1);
          delete this.cls._map[cls];
          this._change();
        }
        return this;
      },
      toggle: function (cls, state) {
        var curState = this.contains(cls);
        if (curState !== state) {
          if (curState) {
            this.remove(cls);
          } else {
            this.add(cls);
          }
          this._change();
        }
        return this;
      },
      contains: function (cls) {
        return !!this.cls._map[cls];
      },
      _change: function () {
        delete this.clsValue;
        this.onchange.call(this);
      }
    });
    ClassList.prototype.toString = function () {
      var value;
      if (this.clsValue) {
        return this.clsValue;
      }
      value = '';
      for (var i = 0; i < this.cls.length; i++) {
        if (i > 0) {
          value += ' ';
        }
        value += this.prefix + this.cls[i];
      }
      return value;
    };

    function unique(array) {
      var uniqueItems = [];
      var i = array.length, item;
      while (i--) {
        item = array[i];
        if (!item.__checked) {
          uniqueItems.push(item);
          item.__checked = 1;
        }
      }
      i = uniqueItems.length;
      while (i--) {
        delete uniqueItems[i].__checked;
      }
      return uniqueItems;
    }
    var expression = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i;
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var whiteSpace = /^\s*|\s*$/g;
    var Collection;
    var Selector = global$a.extend({
      init: function (selector) {
        var match = this.match;
        function compileNameFilter(name) {
          if (name) {
            name = name.toLowerCase();
            return function (item) {
              return name === '*' || item.type === name;
            };
          }
        }
        function compileIdFilter(id) {
          if (id) {
            return function (item) {
              return item._name === id;
            };
          }
        }
        function compileClassesFilter(classes) {
          if (classes) {
            classes = classes.split('.');
            return function (item) {
              var i = classes.length;
              while (i--) {
                if (!item.classes.contains(classes[i])) {
                  return false;
                }
              }
              return true;
            };
          }
        }
        function compileAttrFilter(name, cmp, check) {
          if (name) {
            return function (item) {
              var value = item[name] ? item[name]() : '';
              return !cmp ? !!check : cmp === '=' ? value === check : cmp === '*=' ? value.indexOf(check) >= 0 : cmp === '~=' ? (' ' + value + ' ').indexOf(' ' + check + ' ') >= 0 : cmp === '!=' ? value !== check : cmp === '^=' ? value.indexOf(check) === 0 : cmp === '$=' ? value.substr(value.length - check.length) === check : false;
            };
          }
        }
        function compilePsuedoFilter(name) {
          var notSelectors;
          if (name) {
            name = /(?:not\((.+)\))|(.+)/i.exec(name);
            if (!name[1]) {
              name = name[2];
              return function (item, index, length) {
                return name === 'first' ? index === 0 : name === 'last' ? index === length - 1 : name === 'even' ? index % 2 === 0 : name === 'odd' ? index % 2 === 1 : item[name] ? item[name]() : false;
              };
            }
            notSelectors = parseChunks(name[1], []);
            return function (item) {
              return !match(item, notSelectors);
            };
          }
        }
        function compile(selector, filters, direct) {
          var parts;
          function add(filter) {
            if (filter) {
              filters.push(filter);
            }
          }
          parts = expression.exec(selector.replace(whiteSpace, ''));
          add(compileNameFilter(parts[1]));
          add(compileIdFilter(parts[2]));
          add(compileClassesFilter(parts[3]));
          add(compileAttrFilter(parts[4], parts[5], parts[6]));
          add(compilePsuedoFilter(parts[7]));
          filters.pseudo = !!parts[7];
          filters.direct = direct;
          return filters;
        }
        function parseChunks(selector, selectors) {
          var parts = [];
          var extra, matches, i;
          do {
            chunker.exec('');
            matches = chunker.exec(selector);
            if (matches) {
              selector = matches[3];
              parts.push(matches[1]);
              if (matches[2]) {
                extra = matches[3];
                break;
              }
            }
          } while (matches);
          if (extra) {
            parseChunks(extra, selectors);
          }
          selector = [];
          for (i = 0; i < parts.length; i++) {
            if (parts[i] !== '>') {
              selector.push(compile(parts[i], [], parts[i - 1] === '>'));
            }
          }
          selectors.push(selector);
          return selectors;
        }
        this._selectors = parseChunks(selector, []);
      },
      match: function (control, selectors) {
        var i, l, si, sl, selector, fi, fl, filters, index, length, siblings, count, item;
        selectors = selectors || this._selectors;
        for (i = 0, l = selectors.length; i < l; i++) {
          selector = selectors[i];
          sl = selector.length;
          item = control;
          count = 0;
          for (si = sl - 1; si >= 0; si--) {
            filters = selector[si];
            while (item) {
              if (filters.pseudo) {
                siblings = item.parent().items();
                index = length = siblings.length;
                while (index--) {
                  if (siblings[index] === item) {
                    break;
                  }
                }
              }
              for (fi = 0, fl = filters.length; fi < fl; fi++) {
                if (!filters[fi](item, index, length)) {
                  fi = fl + 1;
                  break;
                }
              }
              if (fi === fl) {
                count++;
                break;
              } else {
                if (si === sl - 1) {
                  break;
                }
              }
              item = item.parent();
            }
          }
          if (count === sl) {
            return true;
          }
        }
        return false;
      },
      find: function (container) {
        var matches = [], i, l;
        var selectors = this._selectors;
        function collect(items, selector, index) {
          var i, l, fi, fl, item;
          var filters = selector[index];
          for (i = 0, l = items.length; i < l; i++) {
            item = items[i];
            for (fi = 0, fl = filters.length; fi < fl; fi++) {
              if (!filters[fi](item, i, l)) {
                fi = fl + 1;
                break;
              }
            }
            if (fi === fl) {
              if (index === selector.length - 1) {
                matches.push(item);
              } else {
                if (item.items) {
                  collect(item.items(), selector, index + 1);
                }
              }
            } else if (filters.direct) {
              return;
            }
            if (item.items) {
              collect(item.items(), selector, index);
            }
          }
        }
        if (container.items) {
          for (i = 0, l = selectors.length; i < l; i++) {
            collect(container.items(), selectors[i], 0);
          }
          if (l > 1) {
            matches = unique(matches);
          }
        }
        if (!Collection) {
          Collection = Selector.Collection;
        }
        return new Collection(matches);
      }
    });

    var Collection$1, proto;
    var push$1 = Array.prototype.push, slice$1 = Array.prototype.slice;
    proto = {
      length: 0,
      init: function (items) {
        if (items) {
          this.add(items);
        }
      },
      add: function (items) {
        var self = this;
        if (!global$2.isArray(items)) {
          if (items instanceof Collection$1) {
            self.add(items.toArray());
          } else {
            push$1.call(self, items);
          }
        } else {
          push$1.apply(self, items);
        }
        return self;
      },
      set: function (items) {
        var self = this;
        var len = self.length;
        var i;
        self.length = 0;
        self.add(items);
        for (i = self.length; i < len; i++) {
          delete self[i];
        }
        return self;
      },
      filter: function (selector) {
        var self = this;
        var i, l;
        var matches = [];
        var item, match;
        if (typeof selector === 'string') {
          selector = new Selector(selector);
          match = function (item) {
            return selector.match(item);
          };
        } else {
          match = selector;
        }
        for (i = 0, l = self.length; i < l; i++) {
          item = self[i];
          if (match(item)) {
            matches.push(item);
          }
        }
        return new Collection$1(matches);
      },
      slice: function () {
        return new Collection$1(slice$1.apply(this, arguments));
      },
      eq: function (index) {
        return index === -1 ? this.slice(index) : this.slice(index, +index + 1);
      },
      each: function (callback) {
        global$2.each(this, callback);
        return this;
      },
      toArray: function () {
        return global$2.toArray(this);
      },
      indexOf: function (ctrl) {
        var self = this;
        var i = self.length;
        while (i--) {
          if (self[i] === ctrl) {
            break;
          }
        }
        return i;
      },
      reverse: function () {
        return new Collection$1(global$2.toArray(this).reverse());
      },
      hasClass: function (cls) {
        return this[0] ? this[0].classes.contains(cls) : false;
      },
      prop: function (name, value) {
        var self = this;
        var item;
        if (value !== undefined) {
          self.each(function (item) {
            if (item[name]) {
              item[name](value);
            }
          });
          return self;
        }
        item = self[0];
        if (item && item[name]) {
          return item[name]();
        }
      },
      exec: function (name) {
        var self = this, args = global$2.toArray(arguments).slice(1);
        self.each(function (item) {
          if (item[name]) {
            item[name].apply(item, args);
          }
        });
        return self;
      },
      remove: function () {
        var i = this.length;
        while (i--) {
          this[i].remove();
        }
        return this;
      },
      addClass: function (cls) {
        return this.each(function (item) {
          item.classes.add(cls);
        });
      },
      removeClass: function (cls) {
        return this.each(function (item) {
          item.classes.remove(cls);
        });
      }
    };
    global$2.each('fire on off show hide append prepend before after reflow'.split(' '), function (name) {
      proto[name] = function () {
        var args = global$2.toArray(arguments);
        this.each(function (ctrl) {
          if (name in ctrl) {
            ctrl[name].apply(ctrl, args);
          }
        });
        return this;
      };
    });
    global$2.each('text name disabled active selected checked visible parent value data'.split(' '), function (name) {
      proto[name] = function (value) {
        return this.prop(name, value);
      };
    });
    Collection$1 = global$a.extend(proto);
    Selector.Collection = Collection$1;
    var Collection$2 = Collection$1;

    var Binding = function (settings) {
      this.create = settings.create;
    };
    Binding.create = function (model, name) {
      return new Binding({
        create: function (otherModel, otherName) {
          var bindings;
          var fromSelfToOther = function (e) {
            otherModel.set(otherName, e.value);
          };
          var fromOtherToSelf = function (e) {
            model.set(name, e.value);
          };
          otherModel.on('change:' + otherName, fromOtherToSelf);
          model.on('change:' + name, fromSelfToOther);
          bindings = otherModel._bindings;
          if (!bindings) {
            bindings = otherModel._bindings = [];
            otherModel.on('destroy', function () {
              var i = bindings.length;
              while (i--) {
                bindings[i]();
              }
            });
          }
          bindings.push(function () {
            model.off('change:' + name, fromSelfToOther);
          });
          return model.get(name);
        }
      });
    };

    var global$c = tinymce.util.Tools.resolve('tinymce.util.Observable');

    function isNode(node) {
      return node.nodeType > 0;
    }
    function isEqual(a, b) {
      var k, checked;
      if (a === b) {
        return true;
      }
      if (a === null || b === null) {
        return a === b;
      }
      if (typeof a !== 'object' || typeof b !== 'object') {
        return a === b;
      }
      if (global$2.isArray(b)) {
        if (a.length !== b.length) {
          return false;
        }
        k = a.length;
        while (k--) {
          if (!isEqual(a[k], b[k])) {
            return false;
          }
        }
      }
      if (isNode(a) || isNode(b)) {
        return a === b;
      }
      checked = {};
      for (k in b) {
        if (!isEqual(a[k], b[k])) {
          return false;
        }
        checked[k] = true;
      }
      for (k in a) {
        if (!checked[k] && !isEqual(a[k], b[k])) {
          return false;
        }
      }
      return true;
    }
    var ObservableObject = global$a.extend({
      Mixins: [global$c],
      init: function (data) {
        var name, value;
        data = data || {};
        for (name in data) {
          value = data[name];
          if (value instanceof Binding) {
            data[name] = value.create(this, name);
          }
        }
        this.data = data;
      },
      set: function (name, value) {
        var key, args;
        var oldValue = this.data[name];
        if (value instanceof Binding) {
          value = value.create(this, name);
        }
        if (typeof name === 'object') {
          for (key in name) {
            this.set(key, name[key]);
          }
          return this;
        }
        if (!isEqual(oldValue, value)) {
          this.data[name] = value;
          args = {
            target: this,
            name: name,
            value: value,
            oldValue: oldValue
          };
          this.fire('change:' + name, args);
          this.fire('change', args);
        }
        return this;
      },
      get: function (name) {
        return this.data[name];
      },
      has: function (name) {
        return name in this.data;
      },
      bind: function (name) {
        return Binding.create(this, name);
      },
      destroy: function () {
        this.fire('destroy');
      }
    });

    var dirtyCtrls = {}, animationFrameRequested;
    var ReflowQueue = {
      add: function (ctrl) {
        var parent = ctrl.parent();
        if (parent) {
          if (!parent._layout || parent._layout.isNative()) {
            return;
          }
          if (!dirtyCtrls[parent._id]) {
            dirtyCtrls[parent._id] = parent;
          }
          if (!animationFrameRequested) {
            animationFrameRequested = true;
            global$7.requestAnimationFrame(function () {
              var id, ctrl;
              animationFrameRequested = false;
              for (id in dirtyCtrls) {
                ctrl = dirtyCtrls[id];
                if (ctrl.state.get('rendered')) {
                  ctrl.reflow();
                }
              }
              dirtyCtrls = {};
            }, domGlobals.document.body);
          }
        }
      },
      remove: function (ctrl) {
        if (dirtyCtrls[ctrl._id]) {
          delete dirtyCtrls[ctrl._id];
        }
      }
    };

    var hasMouseWheelEventSupport = 'onmousewheel' in domGlobals.document;
    var hasWheelEventSupport = false;
    var classPrefix = 'mce-';
    var Control, idCounter = 0;
    var proto$1 = {
      Statics: { classPrefix: classPrefix },
      isRtl: function () {
        return Control.rtl;
      },
      classPrefix: classPrefix,
      init: function (settings) {
        var self = this;
        var classes, defaultClasses;
        function applyClasses(classes) {
          var i;
          classes = classes.split(' ');
          for (i = 0; i < classes.length; i++) {
            self.classes.add(classes[i]);
          }
        }
        self.settings = settings = global$2.extend({}, self.Defaults, settings);
        self._id = settings.id || 'mceu_' + idCounter++;
        self._aria = { role: settings.role };
        self._elmCache = {};
        self.$ = global$9;
        self.state = new ObservableObject({
          visible: true,
          active: false,
          disabled: false,
          value: ''
        });
        self.data = new ObservableObject(settings.data);
        self.classes = new ClassList(function () {
          if (self.state.get('rendered')) {
            self.getEl().className = this.toString();
          }
        });
        self.classes.prefix = self.classPrefix;
        classes = settings.classes;
        if (classes) {
          if (self.Defaults) {
            defaultClasses = self.Defaults.classes;
            if (defaultClasses && classes !== defaultClasses) {
              applyClasses(defaultClasses);
            }
          }
          applyClasses(classes);
        }
        global$2.each('title text name visible disabled active value'.split(' '), function (name) {
          if (name in settings) {
            self[name](settings[name]);
          }
        });
        self.on('click', function () {
          if (self.disabled()) {
            return false;
          }
        });
        self.settings = settings;
        self.borderBox = BoxUtils.parseBox(settings.border);
        self.paddingBox = BoxUtils.parseBox(settings.padding);
        self.marginBox = BoxUtils.parseBox(settings.margin);
        if (settings.hidden) {
          self.hide();
        }
      },
      Properties: 'parent,name',
      getContainerElm: function () {
        var uiContainer = UiContainer.getUiContainer(this);
        return uiContainer ? uiContainer : funcs.getContainer();
      },
      getParentCtrl: function (elm) {
        var ctrl;
        var lookup = this.getRoot().controlIdLookup;
        while (elm && lookup) {
          ctrl = lookup[elm.id];
          if (ctrl) {
            break;
          }
          elm = elm.parentNode;
        }
        return ctrl;
      },
      initLayoutRect: function () {
        var self = this;
        var settings = self.settings;
        var borderBox, layoutRect;
        var elm = self.getEl();
        var width, height, minWidth, minHeight, autoResize;
        var startMinWidth, startMinHeight, initialSize;
        borderBox = self.borderBox = self.borderBox || BoxUtils.measureBox(elm, 'border');
        self.paddingBox = self.paddingBox || BoxUtils.measureBox(elm, 'padding');
        self.marginBox = self.marginBox || BoxUtils.measureBox(elm, 'margin');
        initialSize = funcs.getSize(elm);
        startMinWidth = settings.minWidth;
        startMinHeight = settings.minHeight;
        minWidth = startMinWidth || initialSize.width;
        minHeight = startMinHeight || initialSize.height;
        width = settings.width;
        height = settings.height;
        autoResize = settings.autoResize;
        autoResize = typeof autoResize !== 'undefined' ? autoResize : !width && !height;
        width = width || minWidth;
        height = height || minHeight;
        var deltaW = borderBox.left + borderBox.right;
        var deltaH = borderBox.top + borderBox.bottom;
        var maxW = settings.maxWidth || 65535;
        var maxH = settings.maxHeight || 65535;
        self._layoutRect = layoutRect = {
          x: settings.x || 0,
          y: settings.y || 0,
          w: width,
          h: height,
          deltaW: deltaW,
          deltaH: deltaH,
          contentW: width - deltaW,
          contentH: height - deltaH,
          innerW: width - deltaW,
          innerH: height - deltaH,
          startMinWidth: startMinWidth || 0,
          startMinHeight: startMinHeight || 0,
          minW: Math.min(minWidth, maxW),
          minH: Math.min(minHeight, maxH),
          maxW: maxW,
          maxH: maxH,
          autoResize: autoResize,
          scrollW: 0
        };
        self._lastLayoutRect = {};
        return layoutRect;
      },
      layoutRect: function (newRect) {
        var self = this;
        var curRect = self._layoutRect, lastLayoutRect, size, deltaWidth, deltaHeight, repaintControls;
        if (!curRect) {
          curRect = self.initLayoutRect();
        }
        if (newRect) {
          deltaWidth = curRect.deltaW;
          deltaHeight = curRect.deltaH;
          if (newRect.x !== undefined) {
            curRect.x = newRect.x;
          }
          if (newRect.y !== undefined) {
            curRect.y = newRect.y;
          }
          if (newRect.minW !== undefined) {
            curRect.minW = newRect.minW;
          }
          if (newRect.minH !== undefined) {
            curRect.minH = newRect.minH;
          }
          size = newRect.w;
          if (size !== undefined) {
            size = size < curRect.minW ? curRect.minW : size;
            size = size > curRect.maxW ? curRect.maxW : size;
            curRect.w = size;
            curRect.innerW = size - deltaWidth;
          }
          size = newRect.h;
          if (size !== undefined) {
            size = size < curRect.minH ? curRect.minH : size;
            size = size > curRect.maxH ? curRect.maxH : size;
            curRect.h = size;
            curRect.innerH = size - deltaHeight;
          }
          size = newRect.innerW;
          if (size !== undefined) {
            size = size < curRect.minW - deltaWidth ? curRect.minW - deltaWidth : size;
            size = size > curRect.maxW - deltaWidth ? curRect.maxW - deltaWidth : size;
            curRect.innerW = size;
            curRect.w = size + deltaWidth;
          }
          size = newRect.innerH;
          if (size !== undefined) {
            size = size < curRect.minH - deltaHeight ? curRect.minH - deltaHeight : size;
            size = size > curRect.maxH - deltaHeight ? curRect.maxH - deltaHeight : size;
            curRect.innerH = size;
            curRect.h = size + deltaHeight;
          }
          if (newRect.contentW !== undefined) {
            curRect.contentW = newRect.contentW;
          }
          if (newRect.contentH !== undefined) {
            curRect.contentH = newRect.contentH;
          }
          lastLayoutRect = self._lastLayoutRect;
          if (lastLayoutRect.x !== curRect.x || lastLayoutRect.y !== curRect.y || lastLayoutRect.w !== curRect.w || lastLayoutRect.h !== curRect.h) {
            repaintControls = Control.repaintControls;
            if (repaintControls) {
              if (repaintControls.map && !repaintControls.map[self._id]) {
                repaintControls.push(self);
                repaintControls.map[self._id] = true;
              }
            }
            lastLayoutRect.x = curRect.x;
            lastLayoutRect.y = curRect.y;
            lastLayoutRect.w = curRect.w;
            lastLayoutRect.h = curRect.h;
          }
          return self;
        }
        return curRect;
      },
      repaint: function () {
        var self = this;
        var style, bodyStyle, bodyElm, rect, borderBox;
        var borderW, borderH, lastRepaintRect, round, value;
        round = !domGlobals.document.createRange ? Math.round : function (value) {
          return value;
        };
        style = self.getEl().style;
        rect = self._layoutRect;
        lastRepaintRect = self._lastRepaintRect || {};
        borderBox = self.borderBox;
        borderW = borderBox.left + borderBox.right;
        borderH = borderBox.top + borderBox.bottom;
        if (rect.x !== lastRepaintRect.x) {
          style.left = round(rect.x) + 'px';
          lastRepaintRect.x = rect.x;
        }
        if (rect.y !== lastRepaintRect.y) {
          style.top = round(rect.y) + 'px';
          lastRepaintRect.y = rect.y;
        }
        if (rect.w !== lastRepaintRect.w) {
          value = round(rect.w - borderW);
          style.width = (value >= 0 ? value : 0) + 'px';
          lastRepaintRect.w = rect.w;
        }
        if (rect.h !== lastRepaintRect.h) {
          value = round(rect.h - borderH);
          style.height = (value >= 0 ? value : 0) + 'px';
          lastRepaintRect.h = rect.h;
        }
        if (self._hasBody && rect.innerW !== lastRepaintRect.innerW) {
          value = round(rect.innerW);
          bodyElm = self.getEl('body');
          if (bodyElm) {
            bodyStyle = bodyElm.style;
            bodyStyle.width = (value >= 0 ? value : 0) + 'px';
          }
          lastRepaintRect.innerW = rect.innerW;
        }
        if (self._hasBody && rect.innerH !== lastRepaintRect.innerH) {
          value = round(rect.innerH);
          bodyElm = bodyElm || self.getEl('body');
          if (bodyElm) {
            bodyStyle = bodyStyle || bodyElm.style;
            bodyStyle.height = (value >= 0 ? value : 0) + 'px';
          }
          lastRepaintRect.innerH = rect.innerH;
        }
        self._lastRepaintRect = lastRepaintRect;
        self.fire('repaint', {}, false);
      },
      updateLayoutRect: function () {
        var self = this;
        self.parent()._lastRect = null;
        funcs.css(self.getEl(), {
          width: '',
          height: ''
        });
        self._layoutRect = self._lastRepaintRect = self._lastLayoutRect = null;
        self.initLayoutRect();
      },
      on: function (name, callback) {
        var self = this;
        function resolveCallbackName(name) {
          var callback, scope;
          if (typeof name !== 'string') {
            return name;
          }
          return function (e) {
            if (!callback) {
              self.parentsAndSelf().each(function (ctrl) {
                var callbacks = ctrl.settings.callbacks;
                if (callbacks && (callback = callbacks[name])) {
                  scope = ctrl;
                  return false;
                }
              });
            }
            if (!callback) {
              e.action = name;
              this.fire('execute', e);
              return;
            }
            return callback.call(scope, e);
          };
        }
        getEventDispatcher(self).on(name, resolveCallbackName(callback));
        return self;
      },
      off: function (name, callback) {
        getEventDispatcher(this).off(name, callback);
        return this;
      },
      fire: function (name, args, bubble) {
        var self = this;
        args = args || {};
        if (!args.control) {
          args.control = self;
        }
        args = getEventDispatcher(self).fire(name, args);
        if (bubble !== false && self.parent) {
          var parent = self.parent();
          while (parent && !args.isPropagationStopped()) {
            parent.fire(name, args, false);
            parent = parent.parent();
          }
        }
        return args;
      },
      hasEventListeners: function (name) {
        return getEventDispatcher(this).has(name);
      },
      parents: function (selector) {
        var self = this;
        var ctrl, parents = new Collection$2();
        for (ctrl = self.parent(); ctrl; ctrl = ctrl.parent()) {
          parents.add(ctrl);
        }
        if (selector) {
          parents = parents.filter(selector);
        }
        return parents;
      },
      parentsAndSelf: function (selector) {
        return new Collection$2(this).add(this.parents(selector));
      },
      next: function () {
        var parentControls = this.parent().items();
        return parentControls[parentControls.indexOf(this) + 1];
      },
      prev: function () {
        var parentControls = this.parent().items();
        return parentControls[parentControls.indexOf(this) - 1];
      },
      innerHtml: function (html) {
        this.$el.html(html);
        return this;
      },
      getEl: function (suffix) {
        var id = suffix ? this._id + '-' + suffix : this._id;
        if (!this._elmCache[id]) {
          this._elmCache[id] = global$9('#' + id)[0];
        }
        return this._elmCache[id];
      },
      show: function () {
        return this.visible(true);
      },
      hide: function () {
        return this.visible(false);
      },
      focus: function () {
        try {
          this.getEl().focus();
        } catch (ex) {
        }
        return this;
      },
      blur: function () {
        this.getEl().blur();
        return this;
      },
      aria: function (name, value) {
        var self = this, elm = self.getEl(self.ariaTarget);
        if (typeof value === 'undefined') {
          return self._aria[name];
        }
        self._aria[name] = value;
        if (self.state.get('rendered')) {
          elm.setAttribute(name === 'role' ? name : 'aria-' + name, value);
        }
        return self;
      },
      encode: function (text, translate) {
        if (translate !== false) {
          text = this.translate(text);
        }
        return (text || '').replace(/[&<>"]/g, function (match) {
          return '&#' + match.charCodeAt(0) + ';';
        });
      },
      translate: function (text) {
        return Control.translate ? Control.translate(text) : text;
      },
      before: function (items) {
        var self = this, parent = self.parent();
        if (parent) {
          parent.insert(items, parent.items().indexOf(self), true);
        }
        return self;
      },
      after: function (items) {
        var self = this, parent = self.parent();
        if (parent) {
          parent.insert(items, parent.items().indexOf(self));
        }
        return self;
      },
      remove: function () {
        var self = this;
        var elm = self.getEl();
        var parent = self.parent();
        var newItems, i;
        if (self.items) {
          var controls = self.items().toArray();
          i = controls.length;
          while (i--) {
            controls[i].remove();
          }
        }
        if (parent && parent.items) {
          newItems = [];
          parent.items().each(function (item) {
            if (item !== self) {
              newItems.push(item);
            }
          });
          parent.items().set(newItems);
          parent._lastRect = null;
        }
        if (self._eventsRoot && self._eventsRoot === self) {
          global$9(elm).off();
        }
        var lookup = self.getRoot().controlIdLookup;
        if (lookup) {
          delete lookup[self._id];
        }
        if (elm && elm.parentNode) {
          elm.parentNode.removeChild(elm);
        }
        self.state.set('rendered', false);
        self.state.destroy();
        self.fire('remove');
        return self;
      },
      renderBefore: function (elm) {
        global$9(elm).before(this.renderHtml());
        this.postRender();
        return this;
      },
      renderTo: function (elm) {
        global$9(elm || this.getContainerElm()).append(this.renderHtml());
        this.postRender();
        return this;
      },
      preRender: function () {
      },
      render: function () {
      },
      renderHtml: function () {
        return '<div id="' + this._id + '" class="' + this.classes + '"></div>';
      },
      postRender: function () {
        var self = this;
        var settings = self.settings;
        var elm, box, parent, name, parentEventsRoot;
        self.$el = global$9(self.getEl());
        self.state.set('rendered', true);
        for (name in settings) {
          if (name.indexOf('on') === 0) {
            self.on(name.substr(2), settings[name]);
          }
        }
        if (self._eventsRoot) {
          for (parent = self.parent(); !parentEventsRoot && parent; parent = parent.parent()) {
            parentEventsRoot = parent._eventsRoot;
          }
          if (parentEventsRoot) {
            for (name in parentEventsRoot._nativeEvents) {
              self._nativeEvents[name] = true;
            }
          }
        }
        bindPendingEvents(self);
        if (settings.style) {
          elm = self.getEl();
          if (elm) {
            elm.setAttribute('style', settings.style);
            elm.style.cssText = settings.style;
          }
        }
        if (self.settings.border) {
          box = self.borderBox;
          self.$el.css({
            'border-top-width': box.top,
            'border-right-width': box.right,
            'border-bottom-width': box.bottom,
            'border-left-width': box.left
          });
        }
        var root = self.getRoot();
        if (!root.controlIdLookup) {
          root.controlIdLookup = {};
        }
        root.controlIdLookup[self._id] = self;
        for (var key in self._aria) {
          self.aria(key, self._aria[key]);
        }
        if (self.state.get('visible') === false) {
          self.getEl().style.display = 'none';
        }
        self.bindStates();
        self.state.on('change:visible', function (e) {
          var state = e.value;
          var parentCtrl;
          if (self.state.get('rendered')) {
            self.getEl().style.display = state === false ? 'none' : '';
            self.getEl().getBoundingClientRect();
          }
          parentCtrl = self.parent();
          if (parentCtrl) {
            parentCtrl._lastRect = null;
          }
          self.fire(state ? 'show' : 'hide');
          ReflowQueue.add(self);
        });
        self.fire('postrender', {}, false);
      },
      bindStates: function () {
      },
      scrollIntoView: function (align) {
        function getOffset(elm, rootElm) {
          var x, y, parent = elm;
          x = y = 0;
          while (parent && parent !== rootElm && parent.nodeType) {
            x += parent.offsetLeft || 0;
            y += parent.offsetTop || 0;
            parent = parent.offsetParent;
          }
          return {
            x: x,
            y: y
          };
        }
        var elm = this.getEl(), parentElm = elm.parentNode;
        var x, y, width, height, parentWidth, parentHeight;
        var pos = getOffset(elm, parentElm);
        x = pos.x;
        y = pos.y;
        width = elm.offsetWidth;
        height = elm.offsetHeight;
        parentWidth = parentElm.clientWidth;
        parentHeight = parentElm.clientHeight;
        if (align === 'end') {
          x -= parentWidth - width;
          y -= parentHeight - height;
        } else if (align === 'center') {
          x -= parentWidth / 2 - width / 2;
          y -= parentHeight / 2 - height / 2;
        }
        parentElm.scrollLeft = x;
        parentElm.scrollTop = y;
        return this;
      },
      getRoot: function () {
        var ctrl = this, rootControl;
        var parents = [];
        while (ctrl) {
          if (ctrl.rootControl) {
            rootControl = ctrl.rootControl;
            break;
          }
          parents.push(ctrl);
          rootControl = ctrl;
          ctrl = ctrl.parent();
        }
        if (!rootControl) {
          rootControl = this;
        }
        var i = parents.length;
        while (i--) {
          parents[i].rootControl = rootControl;
        }
        return rootControl;
      },
      reflow: function () {
        ReflowQueue.remove(this);
        var parent = this.parent();
        if (parent && parent._layout && !parent._layout.isNative()) {
          parent.reflow();
        }
        return this;
      }
    };
    global$2.each('text title visible disabled active value'.split(' '), function (name) {
      proto$1[name] = function (value) {
        if (arguments.length === 0) {
          return this.state.get(name);
        }
        if (typeof value !== 'undefined') {
          this.state.set(name, value);
        }
        return this;
      };
    });
    Control = global$a.extend(proto$1);
    function getEventDispatcher(obj) {
      if (!obj._eventDispatcher) {
        obj._eventDispatcher = new global$b({
          scope: obj,
          toggleEvent: function (name, state) {
            if (state && global$b.isNative(name)) {
              if (!obj._nativeEvents) {
                obj._nativeEvents = {};
              }
              obj._nativeEvents[name] = true;
              if (obj.state.get('rendered')) {
                bindPendingEvents(obj);
              }
            }
          }
        });
      }
      return obj._eventDispatcher;
    }
    function bindPendingEvents(eventCtrl) {
      var i, l, parents, eventRootCtrl, nativeEvents, name;
      function delegate(e) {
        var control = eventCtrl.getParentCtrl(e.target);
        if (control) {
          control.fire(e.type, e);
        }
      }
      function mouseLeaveHandler() {
        var ctrl = eventRootCtrl._lastHoverCtrl;
        if (ctrl) {
          ctrl.fire('mouseleave', { target: ctrl.getEl() });
          ctrl.parents().each(function (ctrl) {
            ctrl.fire('mouseleave', { target: ctrl.getEl() });
          });
          eventRootCtrl._lastHoverCtrl = null;
        }
      }
      function mouseEnterHandler(e) {
        var ctrl = eventCtrl.getParentCtrl(e.target), lastCtrl = eventRootCtrl._lastHoverCtrl, idx = 0, i, parents, lastParents;
        if (ctrl !== lastCtrl) {
          eventRootCtrl._lastHoverCtrl = ctrl;
          parents = ctrl.parents().toArray().reverse();
          parents.push(ctrl);
          if (lastCtrl) {
            lastParents = lastCtrl.parents().toArray().reverse();
            lastParents.push(lastCtrl);
            for (idx = 0; idx < lastParents.length; idx++) {
              if (parents[idx] !== lastParents[idx]) {
                break;
              }
            }
            for (i = lastParents.length - 1; i >= idx; i--) {
              lastCtrl = lastParents[i];
              lastCtrl.fire('mouseleave', { target: lastCtrl.getEl() });
            }
          }
          for (i = idx; i < parents.length; i++) {
            ctrl = parents[i];
            ctrl.fire('mouseenter', { target: ctrl.getEl() });
          }
        }
      }
      function fixWheelEvent(e) {
        e.preventDefault();
        if (e.type === 'mousewheel') {
          e.deltaY = -1 / 40 * e.wheelDelta;
          if (e.wheelDeltaX) {
            e.deltaX = -1 / 40 * e.wheelDeltaX;
          }
        } else {
          e.deltaX = 0;
          e.deltaY = e.detail;
        }
        e = eventCtrl.fire('wheel', e);
      }
      nativeEvents = eventCtrl._nativeEvents;
      if (nativeEvents) {
        parents = eventCtrl.parents().toArray();
        parents.unshift(eventCtrl);
        for (i = 0, l = parents.length; !eventRootCtrl && i < l; i++) {
          eventRootCtrl = parents[i]._eventsRoot;
        }
        if (!eventRootCtrl) {
          eventRootCtrl = parents[parents.length - 1] || eventCtrl;
        }
        eventCtrl._eventsRoot = eventRootCtrl;
        for (l = i, i = 0; i < l; i++) {
          parents[i]._eventsRoot = eventRootCtrl;
        }
        var eventRootDelegates = eventRootCtrl._delegates;
        if (!eventRootDelegates) {
          eventRootDelegates = eventRootCtrl._delegates = {};
        }
        for (name in nativeEvents) {
          if (!nativeEvents) {
            return false;
          }
          if (name === 'wheel' && !hasWheelEventSupport) {
            if (hasMouseWheelEventSupport) {
              global$9(eventCtrl.getEl()).on('mousewheel', fixWheelEvent);
            } else {
              global$9(eventCtrl.getEl()).on('DOMMouseScroll', fixWheelEvent);
            }
            continue;
          }
          if (name === 'mouseenter' || name === 'mouseleave') {
            if (!eventRootCtrl._hasMouseEnter) {
              global$9(eventRootCtrl.getEl()).on('mouseleave', mouseLeaveHandler).on('mouseover', mouseEnterHandler);
              eventRootCtrl._hasMouseEnter = 1;
            }
          } else if (!eventRootDelegates[name]) {
            global$9(eventRootCtrl.getEl()).on(name, delegate);
            eventRootDelegates[name] = true;
          }
          nativeEvents[name] = false;
        }
      }
    }
    var Control$1 = Control;

    var hasTabstopData = function (elm) {
      return elm.getAttribute('data-mce-tabstop') ? true : false;
    };
    function KeyboardNavigation (settings) {
      var root = settings.root;
      var focusedElement, focusedControl;
      function isElement(node) {
        return node && node.nodeType === 1;
      }
      try {
        focusedElement = domGlobals.document.activeElement;
      } catch (ex) {
        focusedElement = domGlobals.document.body;
      }
      focusedControl = root.getParentCtrl(focusedElement);
      function getRole(elm) {
        elm = elm || focusedElement;
        if (isElement(elm)) {
          return elm.getAttribute('role');
        }
        return null;
      }
      function getParentRole(elm) {
        var role, parent = elm || focusedElement;
        while (parent = parent.parentNode) {
          if (role = getRole(parent)) {
            return role;
          }
        }
      }
      function getAriaProp(name) {
        var elm = focusedElement;
        if (isElement(elm)) {
          return elm.getAttribute('aria-' + name);
        }
      }
      function isTextInputElement(elm) {
        var tagName = elm.tagName.toUpperCase();
        return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
      }
      function canFocus(elm) {
        if (isTextInputElement(elm) && !elm.hidden) {
          return true;
        }
        if (hasTabstopData(elm)) {
          return true;
        }
        if (/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(getRole(elm))) {
          return true;
        }
        return false;
      }
      function getFocusElements(elm) {
        var elements = [];
        function collect(elm) {
          if (elm.nodeType !== 1 || elm.style.display === 'none' || elm.disabled) {
            return;
          }
          if (canFocus(elm)) {
            elements.push(elm);
          }
          for (var i = 0; i < elm.childNodes.length; i++) {
            collect(elm.childNodes[i]);
          }
        }
        collect(elm || root.getEl());
        return elements;
      }
      function getNavigationRoot(targetControl) {
        var navigationRoot, controls;
        targetControl = targetControl || focusedControl;
        controls = targetControl.parents().toArray();
        controls.unshift(targetControl);
        for (var i = 0; i < controls.length; i++) {
          navigationRoot = controls[i];
          if (navigationRoot.settings.ariaRoot) {
            break;
          }
        }
        return navigationRoot;
      }
      function focusFirst(targetControl) {
        var navigationRoot = getNavigationRoot(targetControl);
        var focusElements = getFocusElements(navigationRoot.getEl());
        if (navigationRoot.settings.ariaRemember && 'lastAriaIndex' in navigationRoot) {
          moveFocusToIndex(navigationRoot.lastAriaIndex, focusElements);
        } else {
          moveFocusToIndex(0, focusElements);
        }
      }
      function moveFocusToIndex(idx, elements) {
        if (idx < 0) {
          idx = elements.length - 1;
        } else if (idx >= elements.length) {
          idx = 0;
        }
        if (elements[idx]) {
          elements[idx].focus();
        }
        return idx;
      }
      function moveFocus(dir, elements) {
        var idx = -1;
        var navigationRoot = getNavigationRoot();
        elements = elements || getFocusElements(navigationRoot.getEl());
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === focusedElement) {
            idx = i;
          }
        }
        idx += dir;
        navigationRoot.lastAriaIndex = moveFocusToIndex(idx, elements);
      }
      function left() {
        var parentRole = getParentRole();
        if (parentRole === 'tablist') {
          moveFocus(-1, getFocusElements(focusedElement.parentNode));
        } else if (focusedControl.parent().submenu) {
          cancel();
        } else {
          moveFocus(-1);
        }
      }
      function right() {
        var role = getRole(), parentRole = getParentRole();
        if (parentRole === 'tablist') {
          moveFocus(1, getFocusElements(focusedElement.parentNode));
        } else if (role === 'menuitem' && parentRole === 'menu' && getAriaProp('haspopup')) {
          enter();
        } else {
          moveFocus(1);
        }
      }
      function up() {
        moveFocus(-1);
      }
      function down() {
        var role = getRole(), parentRole = getParentRole();
        if (role === 'menuitem' && parentRole === 'menubar') {
          enter();
        } else if (role === 'button' && getAriaProp('haspopup')) {
          enter({ key: 'down' });
        } else {
          moveFocus(1);
        }
      }
      function tab(e) {
        var parentRole = getParentRole();
        if (parentRole === 'tablist') {
          var elm = getFocusElements(focusedControl.getEl('body'))[0];
          if (elm) {
            elm.focus();
          }
        } else {
          moveFocus(e.shiftKey ? -1 : 1);
        }
      }
      function cancel() {
        focusedControl.fire('cancel');
      }
      function enter(aria) {
        aria = aria || {};
        focusedControl.fire('click', {
          target: focusedElement,
          aria: aria
        });
      }
      root.on('keydown', function (e) {
        function handleNonTabOrEscEvent(e, handler) {
          if (isTextInputElement(focusedElement) || hasTabstopData(focusedElement)) {
            return;
          }
          if (getRole(focusedElement) === 'slider') {
            return;
          }
          if (handler(e) !== false) {
            e.preventDefault();
          }
        }
        if (e.isDefaultPrevented()) {
          return;
        }
        switch (e.keyCode) {
        case 37:
          handleNonTabOrEscEvent(e, left);
          break;
        case 39:
          handleNonTabOrEscEvent(e, right);
          break;
        case 38:
          handleNonTabOrEscEvent(e, up);
          break;
        case 40:
          handleNonTabOrEscEvent(e, down);
          break;
        case 27:
          cancel();
          break;
        case 14:
        case 13:
        case 32:
          handleNonTabOrEscEvent(e, enter);
          break;
        case 9:
          tab(e);
          e.preventDefault();
          break;
        }
      });
      root.on('focusin', function (e) {
        focusedElement = e.target;
        focusedControl = e.control;
      });
      return { focusFirst: focusFirst };
    }

    var selectorCache = {};
    var Container = Control$1.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        settings = self.settings;
        if (settings.fixed) {
          self.state.set('fixed', true);
        }
        self._items = new Collection$2();
        if (self.isRtl()) {
          self.classes.add('rtl');
        }
        self.bodyClasses = new ClassList(function () {
          if (self.state.get('rendered')) {
            self.getEl('body').className = this.toString();
          }
        });
        self.bodyClasses.prefix = self.classPrefix;
        self.classes.add('container');
        self.bodyClasses.add('container-body');
        if (settings.containerCls) {
          self.classes.add(settings.containerCls);
        }
        self._layout = global$4.create((settings.layout || '') + 'layout');
        if (self.settings.items) {
          self.add(self.settings.items);
        } else {
          self.add(self.render());
        }
        self._hasBody = true;
      },
      items: function () {
        return this._items;
      },
      find: function (selector) {
        selector = selectorCache[selector] = selectorCache[selector] || new Selector(selector);
        return selector.find(this);
      },
      add: function (items) {
        var self = this;
        self.items().add(self.create(items)).parent(self);
        return self;
      },
      focus: function (keyboard) {
        var self = this;
        var focusCtrl, keyboardNav, items;
        if (keyboard) {
          keyboardNav = self.keyboardNav || self.parents().eq(-1)[0].keyboardNav;
          if (keyboardNav) {
            keyboardNav.focusFirst(self);
            return;
          }
        }
        items = self.find('*');
        if (self.statusbar) {
          items.add(self.statusbar.items());
        }
        items.each(function (ctrl) {
          if (ctrl.settings.autofocus) {
            focusCtrl = null;
            return false;
          }
          if (ctrl.canFocus) {
            focusCtrl = focusCtrl || ctrl;
          }
        });
        if (focusCtrl) {
          focusCtrl.focus();
        }
        return self;
      },
      replace: function (oldItem, newItem) {
        var ctrlElm;
        var items = this.items();
        var i = items.length;
        while (i--) {
          if (items[i] === oldItem) {
            items[i] = newItem;
            break;
          }
        }
        if (i >= 0) {
          ctrlElm = newItem.getEl();
          if (ctrlElm) {
            ctrlElm.parentNode.removeChild(ctrlElm);
          }
          ctrlElm = oldItem.getEl();
          if (ctrlElm) {
            ctrlElm.parentNode.removeChild(ctrlElm);
          }
        }
        newItem.parent(this);
      },
      create: function (items) {
        var self = this;
        var settings;
        var ctrlItems = [];
        if (!global$2.isArray(items)) {
          items = [items];
        }
        global$2.each(items, function (item) {
          if (item) {
            if (!(item instanceof Control$1)) {
              if (typeof item === 'string') {
                item = { type: item };
              }
              settings = global$2.extend({}, self.settings.defaults, item);
              item.type = settings.type = settings.type || item.type || self.settings.defaultType || (settings.defaults ? settings.defaults.type : null);
              item = global$4.create(settings);
            }
            ctrlItems.push(item);
          }
        });
        return ctrlItems;
      },
      renderNew: function () {
        var self = this;
        self.items().each(function (ctrl, index) {
          var containerElm;
          ctrl.parent(self);
          if (!ctrl.state.get('rendered')) {
            containerElm = self.getEl('body');
            if (containerElm.hasChildNodes() && index <= containerElm.childNodes.length - 1) {
              global$9(containerElm.childNodes[index]).before(ctrl.renderHtml());
            } else {
              global$9(containerElm).append(ctrl.renderHtml());
            }
            ctrl.postRender();
            ReflowQueue.add(ctrl);
          }
        });
        self._layout.applyClasses(self.items().filter(':visible'));
        self._lastRect = null;
        return self;
      },
      append: function (items) {
        return this.add(items).renderNew();
      },
      prepend: function (items) {
        var self = this;
        self.items().set(self.create(items).concat(self.items().toArray()));
        return self.renderNew();
      },
      insert: function (items, index, before) {
        var self = this;
        var curItems, beforeItems, afterItems;
        items = self.create(items);
        curItems = self.items();
        if (!before && index < curItems.length - 1) {
          index += 1;
        }
        if (index >= 0 && index < curItems.length) {
          beforeItems = curItems.slice(0, index).toArray();
          afterItems = curItems.slice(index).toArray();
          curItems.set(beforeItems.concat(items, afterItems));
        }
        return self.renderNew();
      },
      fromJSON: function (data) {
        var self = this;
        for (var name in data) {
          self.find('#' + name).value(data[name]);
        }
        return self;
      },
      toJSON: function () {
        var self = this, data = {};
        self.find('*').each(function (ctrl) {
          var name = ctrl.name(), value = ctrl.value();
          if (name && typeof value !== 'undefined') {
            data[name] = value;
          }
        });
        return data;
      },
      renderHtml: function () {
        var self = this, layout = self._layout, role = this.settings.role;
        self.preRender();
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '"' + (role ? ' role="' + this.settings.role + '"' : '') + '>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        var box;
        self.items().exec('postRender');
        self._super();
        self._layout.postRender(self);
        self.state.set('rendered', true);
        if (self.settings.style) {
          self.$el.css(self.settings.style);
        }
        if (self.settings.border) {
          box = self.borderBox;
          self.$el.css({
            'border-top-width': box.top,
            'border-right-width': box.right,
            'border-bottom-width': box.bottom,
            'border-left-width': box.left
          });
        }
        if (!self.parent()) {
          self.keyboardNav = KeyboardNavigation({ root: self });
        }
        return self;
      },
      initLayoutRect: function () {
        var self = this, layoutRect = self._super();
        self._layout.recalc(self);
        return layoutRect;
      },
      recalc: function () {
        var self = this;
        var rect = self._layoutRect;
        var lastRect = self._lastRect;
        if (!lastRect || lastRect.w !== rect.w || lastRect.h !== rect.h) {
          self._layout.recalc(self);
          rect = self.layoutRect();
          self._lastRect = {
            x: rect.x,
            y: rect.y,
            w: rect.w,
            h: rect.h
          };
          return true;
        }
      },
      reflow: function () {
        var i;
        ReflowQueue.remove(this);
        if (this.visible()) {
          Control$1.repaintControls = [];
          Control$1.repaintControls.map = {};
          this.recalc();
          i = Control$1.repaintControls.length;
          while (i--) {
            Control$1.repaintControls[i].repaint();
          }
          if (this.settings.layout !== 'flow' && this.settings.layout !== 'stack') {
            this.repaint();
          }
          Control$1.repaintControls = [];
        }
        return this;
      }
    });

    function getDocumentSize(doc) {
      var documentElement, body, scrollWidth, clientWidth;
      var offsetWidth, scrollHeight, clientHeight, offsetHeight;
      var max = Math.max;
      documentElement = doc.documentElement;
      body = doc.body;
      scrollWidth = max(documentElement.scrollWidth, body.scrollWidth);
      clientWidth = max(documentElement.clientWidth, body.clientWidth);
      offsetWidth = max(documentElement.offsetWidth, body.offsetWidth);
      scrollHeight = max(documentElement.scrollHeight, body.scrollHeight);
      clientHeight = max(documentElement.clientHeight, body.clientHeight);
      offsetHeight = max(documentElement.offsetHeight, body.offsetHeight);
      return {
        width: scrollWidth < offsetWidth ? clientWidth : scrollWidth,
        height: scrollHeight < offsetHeight ? clientHeight : scrollHeight
      };
    }
    function updateWithTouchData(e) {
      var keys, i;
      if (e.changedTouches) {
        keys = 'screenX screenY pageX pageY clientX clientY'.split(' ');
        for (i = 0; i < keys.length; i++) {
          e[keys[i]] = e.changedTouches[0][keys[i]];
        }
      }
    }
    function DragHelper (id, settings) {
      var $eventOverlay;
      var doc = settings.document || domGlobals.document;
      var downButton;
      var start, stop, drag, startX, startY;
      settings = settings || {};
      var handleElement = doc.getElementById(settings.handle || id);
      start = function (e) {
        var docSize = getDocumentSize(doc);
        var handleElm, cursor;
        updateWithTouchData(e);
        e.preventDefault();
        downButton = e.button;
        handleElm = handleElement;
        startX = e.screenX;
        startY = e.screenY;
        if (domGlobals.window.getComputedStyle) {
          cursor = domGlobals.window.getComputedStyle(handleElm, null).getPropertyValue('cursor');
        } else {
          cursor = handleElm.runtimeStyle.cursor;
        }
        $eventOverlay = global$9('<div></div>').css({
          position: 'absolute',
          top: 0,
          left: 0,
          width: docSize.width,
          height: docSize.height,
          zIndex: 2147483647,
          opacity: 0.0001,
          cursor: cursor
        }).appendTo(doc.body);
        global$9(doc).on('mousemove touchmove', drag).on('mouseup touchend', stop);
        settings.start(e);
      };
      drag = function (e) {
        updateWithTouchData(e);
        if (e.button !== downButton) {
          return stop(e);
        }
        e.deltaX = e.screenX - startX;
        e.deltaY = e.screenY - startY;
        e.preventDefault();
        settings.drag(e);
      };
      stop = function (e) {
        updateWithTouchData(e);
        global$9(doc).off('mousemove touchmove', drag).off('mouseup touchend', stop);
        $eventOverlay.remove();
        if (settings.stop) {
          settings.stop(e);
        }
      };
      this.destroy = function () {
        global$9(handleElement).off();
      };
      global$9(handleElement).on('mousedown touchstart', start);
    }

    var Scrollable = {
      init: function () {
        var self = this;
        self.on('repaint', self.renderScroll);
      },
      renderScroll: function () {
        var self = this, margin = 2;
        function repaintScroll() {
          var hasScrollH, hasScrollV, bodyElm;
          function repaintAxis(axisName, posName, sizeName, contentSizeName, hasScroll, ax) {
            var containerElm, scrollBarElm, scrollThumbElm;
            var containerSize, scrollSize, ratio, rect;
            var posNameLower, sizeNameLower;
            scrollBarElm = self.getEl('scroll' + axisName);
            if (scrollBarElm) {
              posNameLower = posName.toLowerCase();
              sizeNameLower = sizeName.toLowerCase();
              global$9(self.getEl('absend')).css(posNameLower, self.layoutRect()[contentSizeName] - 1);
              if (!hasScroll) {
                global$9(scrollBarElm).css('display', 'none');
                return;
              }
              global$9(scrollBarElm).css('display', 'block');
              containerElm = self.getEl('body');
              scrollThumbElm = self.getEl('scroll' + axisName + 't');
              containerSize = containerElm['client' + sizeName] - margin * 2;
              containerSize -= hasScrollH && hasScrollV ? scrollBarElm['client' + ax] : 0;
              scrollSize = containerElm['scroll' + sizeName];
              ratio = containerSize / scrollSize;
              rect = {};
              rect[posNameLower] = containerElm['offset' + posName] + margin;
              rect[sizeNameLower] = containerSize;
              global$9(scrollBarElm).css(rect);
              rect = {};
              rect[posNameLower] = containerElm['scroll' + posName] * ratio;
              rect[sizeNameLower] = containerSize * ratio;
              global$9(scrollThumbElm).css(rect);
            }
          }
          bodyElm = self.getEl('body');
          hasScrollH = bodyElm.scrollWidth > bodyElm.clientWidth;
          hasScrollV = bodyElm.scrollHeight > bodyElm.clientHeight;
          repaintAxis('h', 'Left', 'Width', 'contentW', hasScrollH, 'Height');
          repaintAxis('v', 'Top', 'Height', 'contentH', hasScrollV, 'Width');
        }
        function addScroll() {
          function addScrollAxis(axisName, posName, sizeName, deltaPosName, ax) {
            var scrollStart;
            var axisId = self._id + '-scroll' + axisName, prefix = self.classPrefix;
            global$9(self.getEl()).append('<div id="' + axisId + '" class="' + prefix + 'scrollbar ' + prefix + 'scrollbar-' + axisName + '">' + '<div id="' + axisId + 't" class="' + prefix + 'scrollbar-thumb"></div>' + '</div>');
            self.draghelper = new DragHelper(axisId + 't', {
              start: function () {
                scrollStart = self.getEl('body')['scroll' + posName];
                global$9('#' + axisId).addClass(prefix + 'active');
              },
              drag: function (e) {
                var ratio, hasScrollH, hasScrollV, containerSize;
                var layoutRect = self.layoutRect();
                hasScrollH = layoutRect.contentW > layoutRect.innerW;
                hasScrollV = layoutRect.contentH > layoutRect.innerH;
                containerSize = self.getEl('body')['client' + sizeName] - margin * 2;
                containerSize -= hasScrollH && hasScrollV ? self.getEl('scroll' + axisName)['client' + ax] : 0;
                ratio = containerSize / self.getEl('body')['scroll' + sizeName];
                self.getEl('body')['scroll' + posName] = scrollStart + e['delta' + deltaPosName] / ratio;
              },
              stop: function () {
                global$9('#' + axisId).removeClass(prefix + 'active');
              }
            });
          }
          self.classes.add('scroll');
          addScrollAxis('v', 'Top', 'Height', 'Y', 'Width');
          addScrollAxis('h', 'Left', 'Width', 'X', 'Height');
        }
        if (self.settings.autoScroll) {
          if (!self._hasScroll) {
            self._hasScroll = true;
            addScroll();
            self.on('wheel', function (e) {
              var bodyEl = self.getEl('body');
              bodyEl.scrollLeft += (e.deltaX || 0) * 10;
              bodyEl.scrollTop += e.deltaY * 10;
              repaintScroll();
            });
            global$9(self.getEl('body')).on('scroll', repaintScroll);
          }
          repaintScroll();
        }
      }
    };

    var Panel = Container.extend({
      Defaults: {
        layout: 'fit',
        containerCls: 'panel'
      },
      Mixins: [Scrollable],
      renderHtml: function () {
        var self = this;
        var layout = self._layout;
        var innerHtml = self.settings.html;
        self.preRender();
        layout.preRender(self);
        if (typeof innerHtml === 'undefined') {
          innerHtml = '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>';
        } else {
          if (typeof innerHtml === 'function') {
            innerHtml = innerHtml.call(self);
          }
          self._hasBody = false;
        }
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1" role="group">' + (self._preBodyHtml || '') + innerHtml + '</div>';
      }
    });

    var Resizable = {
      resizeToContent: function () {
        this._layoutRect.autoResize = true;
        this._lastRect = null;
        this.reflow();
      },
      resizeTo: function (w, h) {
        if (w <= 1 || h <= 1) {
          var rect = funcs.getWindowSize();
          w = w <= 1 ? w * rect.w : w;
          h = h <= 1 ? h * rect.h : h;
        }
        this._layoutRect.autoResize = false;
        return this.layoutRect({
          minW: w,
          minH: h,
          w: w,
          h: h
        }).reflow();
      },
      resizeBy: function (dw, dh) {
        var self = this, rect = self.layoutRect();
        return self.resizeTo(rect.w + dw, rect.h + dh);
      }
    };

    var documentClickHandler, documentScrollHandler, windowResizeHandler;
    var visiblePanels = [];
    var zOrder = [];
    var hasModal;
    function isChildOf(ctrl, parent) {
      while (ctrl) {
        if (ctrl === parent) {
          return true;
        }
        ctrl = ctrl.parent();
      }
    }
    function skipOrHidePanels(e) {
      var i = visiblePanels.length;
      while (i--) {
        var panel = visiblePanels[i], clickCtrl = panel.getParentCtrl(e.target);
        if (panel.settings.autohide) {
          if (clickCtrl) {
            if (isChildOf(clickCtrl, panel) || panel.parent() === clickCtrl) {
              continue;
            }
          }
          e = panel.fire('autohide', { target: e.target });
          if (!e.isDefaultPrevented()) {
            panel.hide();
          }
        }
      }
    }
    function bindDocumentClickHandler() {
      if (!documentClickHandler) {
        documentClickHandler = function (e) {
          if (e.button === 2) {
            return;
          }
          skipOrHidePanels(e);
        };
        global$9(domGlobals.document).on('click touchstart', documentClickHandler);
      }
    }
    function bindDocumentScrollHandler() {
      if (!documentScrollHandler) {
        documentScrollHandler = function () {
          var i;
          i = visiblePanels.length;
          while (i--) {
            repositionPanel(visiblePanels[i]);
          }
        };
        global$9(domGlobals.window).on('scroll', documentScrollHandler);
      }
    }
    function bindWindowResizeHandler() {
      if (!windowResizeHandler) {
        var docElm_1 = domGlobals.document.documentElement;
        var clientWidth_1 = docElm_1.clientWidth, clientHeight_1 = docElm_1.clientHeight;
        windowResizeHandler = function () {
          if (!domGlobals.document.all || clientWidth_1 !== docElm_1.clientWidth || clientHeight_1 !== docElm_1.clientHeight) {
            clientWidth_1 = docElm_1.clientWidth;
            clientHeight_1 = docElm_1.clientHeight;
            FloatPanel.hideAll();
          }
        };
        global$9(domGlobals.window).on('resize', windowResizeHandler);
      }
    }
    function repositionPanel(panel) {
      var scrollY = funcs.getViewPort().y;
      function toggleFixedChildPanels(fixed, deltaY) {
        var parent;
        for (var i = 0; i < visiblePanels.length; i++) {
          if (visiblePanels[i] !== panel) {
            parent = visiblePanels[i].parent();
            while (parent && (parent = parent.parent())) {
              if (parent === panel) {
                visiblePanels[i].fixed(fixed).moveBy(0, deltaY).repaint();
              }
            }
          }
        }
      }
      if (panel.settings.autofix) {
        if (!panel.state.get('fixed')) {
          panel._autoFixY = panel.layoutRect().y;
          if (panel._autoFixY < scrollY) {
            panel.fixed(true).layoutRect({ y: 0 }).repaint();
            toggleFixedChildPanels(true, scrollY - panel._autoFixY);
          }
        } else {
          if (panel._autoFixY > scrollY) {
            panel.fixed(false).layoutRect({ y: panel._autoFixY }).repaint();
            toggleFixedChildPanels(false, panel._autoFixY - scrollY);
          }
        }
      }
    }
    function addRemove(add, ctrl) {
      var i, zIndex = FloatPanel.zIndex || 65535, topModal;
      if (add) {
        zOrder.push(ctrl);
      } else {
        i = zOrder.length;
        while (i--) {
          if (zOrder[i] === ctrl) {
            zOrder.splice(i, 1);
          }
        }
      }
      if (zOrder.length) {
        for (i = 0; i < zOrder.length; i++) {
          if (zOrder[i].modal) {
            zIndex++;
            topModal = zOrder[i];
          }
          zOrder[i].getEl().style.zIndex = zIndex;
          zOrder[i].zIndex = zIndex;
          zIndex++;
        }
      }
      var modalBlockEl = global$9('#' + ctrl.classPrefix + 'modal-block', ctrl.getContainerElm())[0];
      if (topModal) {
        global$9(modalBlockEl).css('z-index', topModal.zIndex - 1);
      } else if (modalBlockEl) {
        modalBlockEl.parentNode.removeChild(modalBlockEl);
        hasModal = false;
      }
      FloatPanel.currentZIndex = zIndex;
    }
    var FloatPanel = Panel.extend({
      Mixins: [
        Movable,
        Resizable
      ],
      init: function (settings) {
        var self = this;
        self._super(settings);
        self._eventsRoot = self;
        self.classes.add('floatpanel');
        if (settings.autohide) {
          bindDocumentClickHandler();
          bindWindowResizeHandler();
          visiblePanels.push(self);
        }
        if (settings.autofix) {
          bindDocumentScrollHandler();
          self.on('move', function () {
            repositionPanel(this);
          });
        }
        self.on('postrender show', function (e) {
          if (e.control === self) {
            var $modalBlockEl_1;
            var prefix_1 = self.classPrefix;
            if (self.modal && !hasModal) {
              $modalBlockEl_1 = global$9('#' + prefix_1 + 'modal-block', self.getContainerElm());
              if (!$modalBlockEl_1[0]) {
                $modalBlockEl_1 = global$9('<div id="' + prefix_1 + 'modal-block" class="' + prefix_1 + 'reset ' + prefix_1 + 'fade"></div>').appendTo(self.getContainerElm());
              }
              global$7.setTimeout(function () {
                $modalBlockEl_1.addClass(prefix_1 + 'in');
                global$9(self.getEl()).addClass(prefix_1 + 'in');
              });
              hasModal = true;
            }
            addRemove(true, self);
          }
        });
        self.on('show', function () {
          self.parents().each(function (ctrl) {
            if (ctrl.state.get('fixed')) {
              self.fixed(true);
              return false;
            }
          });
        });
        if (settings.popover) {
          self._preBodyHtml = '<div class="' + self.classPrefix + 'arrow"></div>';
          self.classes.add('popover').add('bottom').add(self.isRtl() ? 'end' : 'start');
        }
        self.aria('label', settings.ariaLabel);
        self.aria('labelledby', self._id);
        self.aria('describedby', self.describedBy || self._id + '-none');
      },
      fixed: function (state) {
        var self = this;
        if (self.state.get('fixed') !== state) {
          if (self.state.get('rendered')) {
            var viewport = funcs.getViewPort();
            if (state) {
              self.layoutRect().y -= viewport.y;
            } else {
              self.layoutRect().y += viewport.y;
            }
          }
          self.classes.toggle('fixed', state);
          self.state.set('fixed', state);
        }
        return self;
      },
      show: function () {
        var self = this;
        var i;
        var state = self._super();
        i = visiblePanels.length;
        while (i--) {
          if (visiblePanels[i] === self) {
            break;
          }
        }
        if (i === -1) {
          visiblePanels.push(self);
        }
        return state;
      },
      hide: function () {
        removeVisiblePanel(this);
        addRemove(false, this);
        return this._super();
      },
      hideAll: function () {
        FloatPanel.hideAll();
      },
      close: function () {
        var self = this;
        if (!self.fire('close').isDefaultPrevented()) {
          self.remove();
          addRemove(false, self);
        }
        return self;
      },
      remove: function () {
        removeVisiblePanel(this);
        this._super();
      },
      postRender: function () {
        var self = this;
        if (self.settings.bodyRole) {
          this.getEl('body').setAttribute('role', self.settings.bodyRole);
        }
        return self._super();
      }
    });
    FloatPanel.hideAll = function () {
      var i = visiblePanels.length;
      while (i--) {
        var panel = visiblePanels[i];
        if (panel && panel.settings.autohide) {
          panel.hide();
          visiblePanels.splice(i, 1);
        }
      }
    };
    function removeVisiblePanel(panel) {
      var i;
      i = visiblePanels.length;
      while (i--) {
        if (visiblePanels[i] === panel) {
          visiblePanels.splice(i, 1);
        }
      }
      i = zOrder.length;
      while (i--) {
        if (zOrder[i] === panel) {
          zOrder.splice(i, 1);
        }
      }
    }

    var isFixed$1 = function (inlineToolbarContainer, editor) {
      return !!(inlineToolbarContainer && !editor.settings.ui_container);
    };
    var render$1 = function (editor, theme, args) {
      var panel, inlineToolbarContainer;
      var DOM = global$3.DOM;
      var fixedToolbarContainer = getFixedToolbarContainer(editor);
      if (fixedToolbarContainer) {
        inlineToolbarContainer = DOM.select(fixedToolbarContainer)[0];
      }
      var reposition = function () {
        if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
          var scrollContainer = editor.selection.getScrollContainer(), body = editor.getBody();
          var deltaX = 0, deltaY = 0;
          if (scrollContainer) {
            var bodyPos = DOM.getPos(body), scrollContainerPos = DOM.getPos(scrollContainer);
            deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x);
            deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y);
          }
          panel.fixed(false).moveRel(body, editor.rtl ? [
            'tr-br',
            'br-tr'
          ] : [
            'tl-bl',
            'bl-tl',
            'tr-br'
          ]).moveBy(deltaX, deltaY);
        }
      };
      var show = function () {
        if (panel) {
          panel.show();
          reposition();
          DOM.addClass(editor.getBody(), 'mce-edit-focus');
        }
      };
      var hide = function () {
        if (panel) {
          panel.hide();
          FloatPanel.hideAll();
          DOM.removeClass(editor.getBody(), 'mce-edit-focus');
        }
      };
      var render = function () {
        if (panel) {
          if (!panel.visible()) {
            show();
          }
          return;
        }
        panel = theme.panel = global$4.create({
          type: inlineToolbarContainer ? 'panel' : 'floatpanel',
          role: 'application',
          classes: 'tinymce tinymce-inline',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: isFixed$1(inlineToolbarContainer, editor),
          border: 1,
          items: [
            hasMenubar(editor) === false ? null : {
              type: 'menubar',
              border: '0 0 1 0',
              items: Menubar.createMenuButtons(editor)
            },
            Toolbar.createToolbars(editor, getToolbarSize(editor))
          ]
        });
        UiContainer.setUiContainer(editor, panel);
        Events.fireBeforeRenderUI(editor);
        if (inlineToolbarContainer) {
          panel.renderTo(inlineToolbarContainer).reflow();
        } else {
          panel.renderTo().reflow();
        }
        A11y.addKeys(editor, panel);
        show();
        ContextToolbars.addContextualToolbars(editor);
        editor.on('nodeChange', reposition);
        editor.on('ResizeWindow', reposition);
        editor.on('activate', show);
        editor.on('deactivate', hide);
        editor.nodeChanged();
      };
      editor.settings.content_editable = true;
      editor.on('focus', function () {
        if (isSkinDisabled(editor) === false && args.skinUiCss) {
          DOM.styleSheetLoader.load(args.skinUiCss, render, render);
        } else {
          render();
        }
      });
      editor.on('blur hide', hide);
      editor.on('remove', function () {
        if (panel) {
          panel.remove();
          panel = null;
        }
      });
      if (isSkinDisabled(editor) === false && args.skinUiCss) {
        DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      } else {
        SkinLoaded.fireSkinLoaded(editor)();
      }
      return {};
    };
    var Inline = { render: render$1 };

    function Throbber (elm, inline) {
      var self = this;
      var state;
      var classPrefix = Control$1.classPrefix;
      var timer;
      self.show = function (time, callback) {
        function render() {
          if (state) {
            global$9(elm).append('<div class="' + classPrefix + 'throbber' + (inline ? ' ' + classPrefix + 'throbber-inline' : '') + '"></div>');
            if (callback) {
              callback();
            }
          }
        }
        self.hide();
        state = true;
        if (time) {
          timer = global$7.setTimeout(render, time);
        } else {
          render();
        }
        return self;
      };
      self.hide = function () {
        var child = elm.lastChild;
        global$7.clearTimeout(timer);
        if (child && child.className.indexOf('throbber') !== -1) {
          child.parentNode.removeChild(child);
        }
        state = false;
        return self;
      };
    }

    var setup = function (editor, theme) {
      var throbber;
      editor.on('ProgressState', function (e) {
        throbber = throbber || new Throbber(theme.panel.getEl('body'));
        if (e.state) {
          throbber.show(e.time);
        } else {
          throbber.hide();
        }
      });
    };
    var ProgressState = { setup: setup };

    var renderUI = function (editor, theme, args) {
      var skinUrl = getSkinUrl(editor);
      if (skinUrl) {
        args.skinUiCss = skinUrl + '/skin.min.css';
        editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
      }
      ProgressState.setup(editor, theme);
      return isInline(editor) ? Inline.render(editor, theme, args) : Iframe.render(editor, theme, args);
    };
    var Render = { renderUI: renderUI };

    var Tooltip = Control$1.extend({
      Mixins: [Movable],
      Defaults: { classes: 'widget tooltip tooltip-n' },
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        return '<div id="' + self._id + '" class="' + self.classes + '" role="presentation">' + '<div class="' + prefix + 'tooltip-arrow"></div>' + '<div class="' + prefix + 'tooltip-inner">' + self.encode(self.state.get('text')) + '</div>' + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl().lastChild.innerHTML = self.encode(e.value);
        });
        return self._super();
      },
      repaint: function () {
        var self = this;
        var style, rect;
        style = self.getEl().style;
        rect = self._layoutRect;
        style.left = rect.x + 'px';
        style.top = rect.y + 'px';
        style.zIndex = 65535 + 65535;
      }
    });

    var Widget = Control$1.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        settings = self.settings;
        self.canFocus = true;
        if (settings.tooltip && Widget.tooltips !== false) {
          self.on('mouseenter', function (e) {
            var tooltip = self.tooltip().moveTo(-65535);
            if (e.control === self) {
              var rel = tooltip.text(settings.tooltip).show().testMoveRel(self.getEl(), [
                'bc-tc',
                'bc-tl',
                'bc-tr'
              ]);
              tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
              tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
              tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
              tooltip.moveRel(self.getEl(), rel);
            } else {
              tooltip.hide();
            }
          });
          self.on('mouseleave mousedown click', function () {
            self.tooltip().remove();
            self._tooltip = null;
          });
        }
        self.aria('label', settings.ariaLabel || settings.tooltip);
      },
      tooltip: function () {
        if (!this._tooltip) {
          this._tooltip = new Tooltip({ type: 'tooltip' });
          UiContainer.inheritUiContainer(this, this._tooltip);
          this._tooltip.renderTo();
        }
        return this._tooltip;
      },
      postRender: function () {
        var self = this, settings = self.settings;
        self._super();
        if (!self.parent() && (settings.width || settings.height)) {
          self.initLayoutRect();
          self.repaint();
        }
        if (settings.autofocus) {
          self.focus();
        }
      },
      bindStates: function () {
        var self = this;
        function disable(state) {
          self.aria('disabled', state);
          self.classes.toggle('disabled', state);
        }
        function active(state) {
          self.aria('pressed', state);
          self.classes.toggle('active', state);
        }
        self.state.on('change:disabled', function (e) {
          disable(e.value);
        });
        self.state.on('change:active', function (e) {
          active(e.value);
        });
        if (self.state.get('disabled')) {
          disable(true);
        }
        if (self.state.get('active')) {
          active(true);
        }
        return self._super();
      },
      remove: function () {
        this._super();
        if (this._tooltip) {
          this._tooltip.remove();
          this._tooltip = null;
        }
      }
    });

    var Progress = Widget.extend({
      Defaults: { value: 0 },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('progress');
        if (!self.settings.filter) {
          self.settings.filter = function (value) {
            return Math.round(value);
          };
        }
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = this.classPrefix;
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div class="' + prefix + 'bar-container">' + '<div class="' + prefix + 'bar"></div>' + '</div>' + '<div class="' + prefix + 'text">0%</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.value(self.settings.value);
        return self;
      },
      bindStates: function () {
        var self = this;
        function setValue(value) {
          value = self.settings.filter(value);
          self.getEl().lastChild.innerHTML = value + '%';
          self.getEl().firstChild.firstChild.style.width = value + '%';
        }
        self.state.on('change:value', function (e) {
          setValue(e.value);
        });
        setValue(self.state.get('value'));
        return self._super();
      }
    });

    var updateLiveRegion = function (ctx, text) {
      ctx.getEl().lastChild.textContent = text + (ctx.progressBar ? ' ' + ctx.progressBar.value() + '%' : '');
    };
    var Notification = Control$1.extend({
      Mixins: [Movable],
      Defaults: { classes: 'widget notification' },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.maxWidth = settings.maxWidth;
        if (settings.text) {
          self.text(settings.text);
        }
        if (settings.icon) {
          self.icon = settings.icon;
        }
        if (settings.color) {
          self.color = settings.color;
        }
        if (settings.type) {
          self.classes.add('notification-' + settings.type);
        }
        if (settings.timeout && (settings.timeout < 0 || settings.timeout > 0) && !settings.closeButton) {
          self.closeButton = false;
        } else {
          self.classes.add('has-close');
          self.closeButton = true;
        }
        if (settings.progressBar) {
          self.progressBar = new Progress();
        }
        self.on('click', function (e) {
          if (e.target.className.indexOf(self.classPrefix + 'close') !== -1) {
            self.close();
          }
        });
      },
      renderHtml: function () {
        var self = this;
        var prefix = self.classPrefix;
        var icon = '', closeButton = '', progressBar = '', notificationStyle = '';
        if (self.icon) {
          icon = '<i class="' + prefix + 'ico' + ' ' + prefix + 'i-' + self.icon + '"></i>';
        }
        notificationStyle = ' style="max-width: ' + self.maxWidth + 'px;' + (self.color ? 'background-color: ' + self.color + ';"' : '"');
        if (self.closeButton) {
          closeButton = '<button type="button" class="' + prefix + 'close" aria-hidden="true">\xD7</button>';
        }
        if (self.progressBar) {
          progressBar = self.progressBar.renderHtml();
        }
        return '<div id="' + self._id + '" class="' + self.classes + '"' + notificationStyle + ' role="presentation">' + icon + '<div class="' + prefix + 'notification-inner">' + self.state.get('text') + '</div>' + progressBar + closeButton + '<div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;"' + ' aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        global$7.setTimeout(function () {
          self.$el.addClass(self.classPrefix + 'in');
          updateLiveRegion(self, self.state.get('text'));
        }, 100);
        return self._super();
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl().firstChild.innerHTML = e.value;
          updateLiveRegion(self, e.value);
        });
        if (self.progressBar) {
          self.progressBar.bindStates();
          self.progressBar.state.on('change:value', function (e) {
            updateLiveRegion(self, self.state.get('text'));
          });
        }
        return self._super();
      },
      close: function () {
        var self = this;
        if (!self.fire('close').isDefaultPrevented()) {
          self.remove();
        }
        return self;
      },
      repaint: function () {
        var self = this;
        var style, rect;
        style = self.getEl().style;
        rect = self._layoutRect;
        style.left = rect.x + 'px';
        style.top = rect.y + 'px';
        style.zIndex = 65535 - 1;
      }
    });

    function NotificationManagerImpl (editor) {
      var getEditorContainer = function (editor) {
        return editor.inline ? editor.getElement() : editor.getContentAreaContainer();
      };
      var getContainerWidth = function () {
        var container = getEditorContainer(editor);
        return funcs.getSize(container).width;
      };
      var prePositionNotifications = function (notifications) {
        each(notifications, function (notification) {
          notification.moveTo(0, 0);
        });
      };
      var positionNotifications = function (notifications) {
        if (notifications.length > 0) {
          var firstItem = notifications.slice(0, 1)[0];
          var container = getEditorContainer(editor);
          firstItem.moveRel(container, 'tc-tc');
          each(notifications, function (notification, index) {
            if (index > 0) {
              notification.moveRel(notifications[index - 1].getEl(), 'bc-tc');
            }
          });
        }
      };
      var reposition = function (notifications) {
        prePositionNotifications(notifications);
        positionNotifications(notifications);
      };
      var open = function (args, closeCallback) {
        var extendedArgs = global$2.extend(args, { maxWidth: getContainerWidth() });
        var notif = new Notification(extendedArgs);
        notif.args = extendedArgs;
        if (extendedArgs.timeout > 0) {
          notif.timer = setTimeout(function () {
            notif.close();
            closeCallback();
          }, extendedArgs.timeout);
        }
        notif.on('close', function () {
          closeCallback();
        });
        notif.renderTo();
        return notif;
      };
      var close = function (notification) {
        notification.close();
      };
      var getArgs = function (notification) {
        return notification.args;
      };
      return {
        open: open,
        close: close,
        reposition: reposition,
        getArgs: getArgs
      };
    }

    var windows = [];
    var oldMetaValue = '';
    function toggleFullScreenState(state) {
      var noScaleMetaValue = 'width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0';
      var viewport = global$9('meta[name=viewport]')[0], contentValue;
      if (global$8.overrideViewPort === false) {
        return;
      }
      if (!viewport) {
        viewport = domGlobals.document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        domGlobals.document.getElementsByTagName('head')[0].appendChild(viewport);
      }
      contentValue = viewport.getAttribute('content');
      if (contentValue && typeof oldMetaValue !== 'undefined') {
        oldMetaValue = contentValue;
      }
      viewport.setAttribute('content', state ? noScaleMetaValue : oldMetaValue);
    }
    function toggleBodyFullScreenClasses(classPrefix, state) {
      if (checkFullscreenWindows() && state === false) {
        global$9([
          domGlobals.document.documentElement,
          domGlobals.document.body
        ]).removeClass(classPrefix + 'fullscreen');
      }
    }
    function checkFullscreenWindows() {
      for (var i = 0; i < windows.length; i++) {
        if (windows[i]._fullscreen) {
          return true;
        }
      }
      return false;
    }
    function handleWindowResize() {
      if (!global$8.desktop) {
        var lastSize_1 = {
          w: domGlobals.window.innerWidth,
          h: domGlobals.window.innerHeight
        };
        global$7.setInterval(function () {
          var w = domGlobals.window.innerWidth, h = domGlobals.window.innerHeight;
          if (lastSize_1.w !== w || lastSize_1.h !== h) {
            lastSize_1 = {
              w: w,
              h: h
            };
            global$9(domGlobals.window).trigger('resize');
          }
        }, 100);
      }
      function reposition() {
        var i;
        var rect = funcs.getWindowSize();
        var layoutRect;
        for (i = 0; i < windows.length; i++) {
          layoutRect = windows[i].layoutRect();
          windows[i].moveTo(windows[i].settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2), windows[i].settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2));
        }
      }
      global$9(domGlobals.window).on('resize', reposition);
    }
    var Window = FloatPanel.extend({
      modal: true,
      Defaults: {
        border: 1,
        layout: 'flex',
        containerCls: 'panel',
        role: 'dialog',
        callbacks: {
          submit: function () {
            this.fire('submit', { data: this.toJSON() });
          },
          close: function () {
            this.close();
          }
        }
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        if (self.isRtl()) {
          self.classes.add('rtl');
        }
        self.classes.add('window');
        self.bodyClasses.add('window-body');
        self.state.set('fixed', true);
        if (settings.buttons) {
          self.statusbar = new Panel({
            layout: 'flex',
            border: '1 0 0 0',
            spacing: 3,
            padding: 10,
            align: 'center',
            pack: self.isRtl() ? 'start' : 'end',
            defaults: { type: 'button' },
            items: settings.buttons
          });
          self.statusbar.classes.add('foot');
          self.statusbar.parent(self);
        }
        self.on('click', function (e) {
          var closeClass = self.classPrefix + 'close';
          if (funcs.hasClass(e.target, closeClass) || funcs.hasClass(e.target.parentNode, closeClass)) {
            self.close();
          }
        });
        self.on('cancel', function () {
          self.close();
        });
        self.on('move', function (e) {
          if (e.control === self) {
            FloatPanel.hideAll();
          }
        });
        self.aria('describedby', self.describedBy || self._id + '-none');
        self.aria('label', settings.title);
        self._fullscreen = false;
      },
      recalc: function () {
        var self = this;
        var statusbar = self.statusbar;
        var layoutRect, width, x, needsRecalc;
        if (self._fullscreen) {
          self.layoutRect(funcs.getWindowSize());
          self.layoutRect().contentH = self.layoutRect().innerH;
        }
        self._super();
        layoutRect = self.layoutRect();
        if (self.settings.title && !self._fullscreen) {
          width = layoutRect.headerW;
          if (width > layoutRect.w) {
            x = layoutRect.x - Math.max(0, width / 2);
            self.layoutRect({
              w: width,
              x: x
            });
            needsRecalc = true;
          }
        }
        if (statusbar) {
          statusbar.layoutRect({ w: self.layoutRect().innerW }).recalc();
          width = statusbar.layoutRect().minW + layoutRect.deltaW;
          if (width > layoutRect.w) {
            x = layoutRect.x - Math.max(0, width - layoutRect.w);
            self.layoutRect({
              w: width,
              x: x
            });
            needsRecalc = true;
          }
        }
        if (needsRecalc) {
          self.recalc();
        }
      },
      initLayoutRect: function () {
        var self = this;
        var layoutRect = self._super();
        var deltaH = 0, headEl;
        if (self.settings.title && !self._fullscreen) {
          headEl = self.getEl('head');
          var size = funcs.getSize(headEl);
          layoutRect.headerW = size.width;
          layoutRect.headerH = size.height;
          deltaH += layoutRect.headerH;
        }
        if (self.statusbar) {
          deltaH += self.statusbar.layoutRect().h;
        }
        layoutRect.deltaH += deltaH;
        layoutRect.minH += deltaH;
        layoutRect.h += deltaH;
        var rect = funcs.getWindowSize();
        layoutRect.x = self.settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2);
        layoutRect.y = self.settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2);
        return layoutRect;
      },
      renderHtml: function () {
        var self = this, layout = self._layout, id = self._id, prefix = self.classPrefix;
        var settings = self.settings;
        var headerHtml = '', footerHtml = '', html = settings.html;
        self.preRender();
        layout.preRender(self);
        if (settings.title) {
          headerHtml = '<div id="' + id + '-head" class="' + prefix + 'window-head">' + '<div id="' + id + '-title" class="' + prefix + 'title">' + self.encode(settings.title) + '</div>' + '<div id="' + id + '-dragh" class="' + prefix + 'dragh"></div>' + '<button type="button" class="' + prefix + 'close" aria-hidden="true">' + '<i class="mce-ico mce-i-remove"></i>' + '</button>' + '</div>';
        }
        if (settings.url) {
          html = '<iframe src="' + settings.url + '" tabindex="-1"></iframe>';
        }
        if (typeof html === 'undefined') {
          html = layout.renderHtml(self);
        }
        if (self.statusbar) {
          footerHtml = self.statusbar.renderHtml();
        }
        return '<div id="' + id + '" class="' + self.classes + '" hidefocus="1">' + '<div class="' + self.classPrefix + 'reset" role="application">' + headerHtml + '<div id="' + id + '-body" class="' + self.bodyClasses + '">' + html + '</div>' + footerHtml + '</div>' + '</div>';
      },
      fullscreen: function (state) {
        var self = this;
        var documentElement = domGlobals.document.documentElement;
        var slowRendering;
        var prefix = self.classPrefix;
        var layoutRect;
        if (state !== self._fullscreen) {
          global$9(domGlobals.window).on('resize', function () {
            var time;
            if (self._fullscreen) {
              if (!slowRendering) {
                time = new Date().getTime();
                var rect = funcs.getWindowSize();
                self.moveTo(0, 0).resizeTo(rect.w, rect.h);
                if (new Date().getTime() - time > 50) {
                  slowRendering = true;
                }
              } else {
                if (!self._timer) {
                  self._timer = global$7.setTimeout(function () {
                    var rect = funcs.getWindowSize();
                    self.moveTo(0, 0).resizeTo(rect.w, rect.h);
                    self._timer = 0;
                  }, 50);
                }
              }
            }
          });
          layoutRect = self.layoutRect();
          self._fullscreen = state;
          if (!state) {
            self.borderBox = BoxUtils.parseBox(self.settings.border);
            self.getEl('head').style.display = '';
            layoutRect.deltaH += layoutRect.headerH;
            global$9([
              documentElement,
              domGlobals.document.body
            ]).removeClass(prefix + 'fullscreen');
            self.classes.remove('fullscreen');
            self.moveTo(self._initial.x, self._initial.y).resizeTo(self._initial.w, self._initial.h);
          } else {
            self._initial = {
              x: layoutRect.x,
              y: layoutRect.y,
              w: layoutRect.w,
              h: layoutRect.h
            };
            self.borderBox = BoxUtils.parseBox('0');
            self.getEl('head').style.display = 'none';
            layoutRect.deltaH -= layoutRect.headerH + 2;
            global$9([
              documentElement,
              domGlobals.document.body
            ]).addClass(prefix + 'fullscreen');
            self.classes.add('fullscreen');
            var rect = funcs.getWindowSize();
            self.moveTo(0, 0).resizeTo(rect.w, rect.h);
          }
        }
        return self.reflow();
      },
      postRender: function () {
        var self = this;
        var startPos;
        setTimeout(function () {
          self.classes.add('in');
          self.fire('open');
        }, 0);
        self._super();
        if (self.statusbar) {
          self.statusbar.postRender();
        }
        self.focus();
        this.dragHelper = new DragHelper(self._id + '-dragh', {
          start: function () {
            startPos = {
              x: self.layoutRect().x,
              y: self.layoutRect().y
            };
          },
          drag: function (e) {
            self.moveTo(startPos.x + e.deltaX, startPos.y + e.deltaY);
          }
        });
        self.on('submit', function (e) {
          if (!e.isDefaultPrevented()) {
            self.close();
          }
        });
        windows.push(self);
        toggleFullScreenState(true);
      },
      submit: function () {
        return this.fire('submit', { data: this.toJSON() });
      },
      remove: function () {
        var self = this;
        var i;
        self.dragHelper.destroy();
        self._super();
        if (self.statusbar) {
          this.statusbar.remove();
        }
        toggleBodyFullScreenClasses(self.classPrefix, false);
        i = windows.length;
        while (i--) {
          if (windows[i] === self) {
            windows.splice(i, 1);
          }
        }
        toggleFullScreenState(windows.length > 0);
      },
      getContentWindow: function () {
        var ifr = this.getEl().getElementsByTagName('iframe')[0];
        return ifr ? ifr.contentWindow : null;
      }
    });
    handleWindowResize();

    var MessageBox = Window.extend({
      init: function (settings) {
        settings = {
          border: 1,
          padding: 20,
          layout: 'flex',
          pack: 'center',
          align: 'center',
          containerCls: 'panel',
          autoScroll: true,
          buttons: {
            type: 'button',
            text: 'Ok',
            action: 'ok'
          },
          items: {
            type: 'label',
            multiline: true,
            maxWidth: 500,
            maxHeight: 200
          }
        };
        this._super(settings);
      },
      Statics: {
        OK: 1,
        OK_CANCEL: 2,
        YES_NO: 3,
        YES_NO_CANCEL: 4,
        msgBox: function (settings) {
          var buttons;
          var callback = settings.callback || function () {
          };
          function createButton(text, status, primary) {
            return {
              type: 'button',
              text: text,
              subtype: primary ? 'primary' : '',
              onClick: function (e) {
                e.control.parents()[1].close();
                callback(status);
              }
            };
          }
          switch (settings.buttons) {
          case MessageBox.OK_CANCEL:
            buttons = [
              createButton('Ok', true, true),
              createButton('Cancel', false)
            ];
            break;
          case MessageBox.YES_NO:
          case MessageBox.YES_NO_CANCEL:
            buttons = [
              createButton('Yes', 1, true),
              createButton('No', 0)
            ];
            if (settings.buttons === MessageBox.YES_NO_CANCEL) {
              buttons.push(createButton('Cancel', -1));
            }
            break;
          default:
            buttons = [createButton('Ok', true, true)];
            break;
          }
          return new Window({
            padding: 20,
            x: settings.x,
            y: settings.y,
            minWidth: 300,
            minHeight: 100,
            layout: 'flex',
            pack: 'center',
            align: 'center',
            buttons: buttons,
            title: settings.title,
            role: 'alertdialog',
            items: {
              type: 'label',
              multiline: true,
              maxWidth: 500,
              maxHeight: 200,
              text: settings.text
            },
            onPostRender: function () {
              this.aria('describedby', this.items()[0]._id);
            },
            onClose: settings.onClose,
            onCancel: function () {
              callback(false);
            }
          }).renderTo(domGlobals.document.body).reflow();
        },
        alert: function (settings, callback) {
          if (typeof settings === 'string') {
            settings = { text: settings };
          }
          settings.callback = callback;
          return MessageBox.msgBox(settings);
        },
        confirm: function (settings, callback) {
          if (typeof settings === 'string') {
            settings = { text: settings };
          }
          settings.callback = callback;
          settings.buttons = MessageBox.OK_CANCEL;
          return MessageBox.msgBox(settings);
        }
      }
    });

    function WindowManagerImpl (editor) {
      var open = function (args, params, closeCallback) {
        var win;
        args.title = args.title || ' ';
        args.url = args.url || args.file;
        if (args.url) {
          args.width = parseInt(args.width || 320, 10);
          args.height = parseInt(args.height || 240, 10);
        }
        if (args.body) {
          args.items = {
            defaults: args.defaults,
            type: args.bodyType || 'form',
            items: args.body,
            data: args.data,
            callbacks: args.commands
          };
        }
        if (!args.url && !args.buttons) {
          args.buttons = [
            {
              text: 'Ok',
              subtype: 'primary',
              onclick: function () {
                win.find('form')[0].submit();
              }
            },
            {
              text: 'Cancel',
              onclick: function () {
                win.close();
              }
            }
          ];
        }
        win = new Window(args);
        win.on('close', function () {
          closeCallback(win);
        });
        if (args.data) {
          win.on('postRender', function () {
            this.find('*').each(function (ctrl) {
              var name = ctrl.name();
              if (name in args.data) {
                ctrl.value(args.data[name]);
              }
            });
          });
        }
        win.features = args || {};
        win.params = params || {};
        win = win.renderTo(domGlobals.document.body).reflow();
        return win;
      };
      var alert = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.alert(message, function () {
          choiceCallback();
        });
        win.on('close', function () {
          closeCallback(win);
        });
        return win;
      };
      var confirm = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.confirm(message, function (state) {
          choiceCallback(state);
        });
        win.on('close', function () {
          closeCallback(win);
        });
        return win;
      };
      var close = function (window) {
        window.close();
      };
      var getParams = function (window) {
        return window.params;
      };
      var setParams = function (window, params) {
        window.params = params;
      };
      return {
        open: open,
        alert: alert,
        confirm: confirm,
        close: close,
        getParams: getParams,
        setParams: setParams
      };
    }

    var get = function (editor) {
      var renderUI = function (args) {
        return Render.renderUI(editor, this, args);
      };
      var resizeTo = function (w, h) {
        return Resize.resizeTo(editor, w, h);
      };
      var resizeBy = function (dw, dh) {
        return Resize.resizeBy(editor, dw, dh);
      };
      var getNotificationManagerImpl = function () {
        return NotificationManagerImpl(editor);
      };
      var getWindowManagerImpl = function () {
        return WindowManagerImpl();
      };
      return {
        renderUI: renderUI,
        resizeTo: resizeTo,
        resizeBy: resizeBy,
        getNotificationManagerImpl: getNotificationManagerImpl,
        getWindowManagerImpl: getWindowManagerImpl
      };
    };
    var ThemeApi = { get: get };

    var Layout = global$a.extend({
      Defaults: {
        firstControlClass: 'first',
        lastControlClass: 'last'
      },
      init: function (settings) {
        this.settings = global$2.extend({}, this.Defaults, settings);
      },
      preRender: function (container) {
        container.bodyClasses.add(this.settings.containerClass);
      },
      applyClasses: function (items) {
        var self = this;
        var settings = self.settings;
        var firstClass, lastClass, firstItem, lastItem;
        firstClass = settings.firstControlClass;
        lastClass = settings.lastControlClass;
        items.each(function (item) {
          item.classes.remove(firstClass).remove(lastClass).add(settings.controlClass);
          if (item.visible()) {
            if (!firstItem) {
              firstItem = item;
            }
            lastItem = item;
          }
        });
        if (firstItem) {
          firstItem.classes.add(firstClass);
        }
        if (lastItem) {
          lastItem.classes.add(lastClass);
        }
      },
      renderHtml: function (container) {
        var self = this;
        var html = '';
        self.applyClasses(container.items());
        container.items().each(function (item) {
          html += item.renderHtml();
        });
        return html;
      },
      recalc: function () {
      },
      postRender: function () {
      },
      isNative: function () {
        return false;
      }
    });

    var AbsoluteLayout = Layout.extend({
      Defaults: {
        containerClass: 'abs-layout',
        controlClass: 'abs-layout-item'
      },
      recalc: function (container) {
        container.items().filter(':visible').each(function (ctrl) {
          var settings = ctrl.settings;
          ctrl.layoutRect({
            x: settings.x,
            y: settings.y,
            w: settings.w,
            h: settings.h
          });
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      },
      renderHtml: function (container) {
        return '<div id="' + container._id + '-absend" class="' + container.classPrefix + 'abs-end"></div>' + this._super(container);
      }
    });

    var Button = Widget.extend({
      Defaults: {
        classes: 'widget btn',
        role: 'button'
      },
      init: function (settings) {
        var self = this;
        var size;
        self._super(settings);
        settings = self.settings;
        size = self.settings.size;
        self.on('click mousedown', function (e) {
          e.preventDefault();
        });
        self.on('touchstart', function (e) {
          self.fire('click', e);
          e.preventDefault();
        });
        if (settings.subtype) {
          self.classes.add(settings.subtype);
        }
        if (size) {
          self.classes.add('btn-' + size);
        }
        if (settings.icon) {
          self.icon(settings.icon);
        }
      },
      icon: function (icon) {
        if (!arguments.length) {
          return this.state.get('icon');
        }
        this.state.set('icon', icon);
        return this;
      },
      repaint: function () {
        var btnElm = this.getEl().firstChild;
        var btnStyle;
        if (btnElm) {
          btnStyle = btnElm.style;
          btnStyle.width = btnStyle.height = '100%';
        }
        this._super();
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix;
        var icon = self.state.get('icon'), image;
        var text = self.state.get('text');
        var textHtml = '';
        var ariaPressed;
        var settings = self.settings;
        image = settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = domGlobals.window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        if (text) {
          self.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
        }
        icon = icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
        return '<div id="' + id + '" class="' + self.classes + '" tabindex="-1"' + ariaPressed + '>' + '<button id="' + id + '-button" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '</div>';
      },
      bindStates: function () {
        var self = this, $ = self.$, textCls = self.classPrefix + 'txt';
        function setButtonText(text) {
          var $span = $('span.' + textCls, self.getEl());
          if (text) {
            if (!$span[0]) {
              $('button:first', self.getEl()).append('<span class="' + textCls + '"></span>');
              $span = $('span.' + textCls, self.getEl());
            }
            $span.html(self.encode(text));
          } else {
            $span.remove();
          }
          self.classes.toggle('btn-has-text', !!text);
        }
        self.state.on('change:text', function (e) {
          setButtonText(e.value);
        });
        self.state.on('change:icon', function (e) {
          var icon = e.value;
          var prefix = self.classPrefix;
          self.settings.icon = icon;
          icon = icon ? prefix + 'ico ' + prefix + 'i-' + self.settings.icon : '';
          var btnElm = self.getEl().firstChild;
          var iconElm = btnElm.getElementsByTagName('i')[0];
          if (icon) {
            if (!iconElm || iconElm !== btnElm.firstChild) {
              iconElm = domGlobals.document.createElement('i');
              btnElm.insertBefore(iconElm, btnElm.firstChild);
            }
            iconElm.className = icon;
          } else if (iconElm) {
            btnElm.removeChild(iconElm);
          }
          setButtonText(self.state.get('text'));
        });
        return self._super();
      }
    });

    var BrowseButton = Button.extend({
      init: function (settings) {
        var self = this;
        settings = global$2.extend({
          text: 'Browse...',
          multiple: false,
          accept: null
        }, settings);
        self._super(settings);
        self.classes.add('browsebutton');
        if (settings.multiple) {
          self.classes.add('multiple');
        }
      },
      postRender: function () {
        var self = this;
        var input = funcs.create('input', {
          type: 'file',
          id: self._id + '-browse',
          accept: self.settings.accept
        });
        self._super();
        global$9(input).on('change', function (e) {
          var files = e.target.files;
          self.value = function () {
            if (!files.length) {
              return null;
            } else if (self.settings.multiple) {
              return files;
            } else {
              return files[0];
            }
          };
          e.preventDefault();
          if (files.length) {
            self.fire('change', e);
          }
        });
        global$9(input).on('click', function (e) {
          e.stopPropagation();
        });
        global$9(self.getEl('button')).on('click touchstart', function (e) {
          e.stopPropagation();
          input.click();
          e.preventDefault();
        });
        self.getEl().appendChild(input);
      },
      remove: function () {
        global$9(this.getEl('button')).off();
        global$9(this.getEl('input')).off();
        this._super();
      }
    });

    var ButtonGroup = Container.extend({
      Defaults: {
        defaultType: 'button',
        role: 'group'
      },
      renderHtml: function () {
        var self = this, layout = self._layout;
        self.classes.add('btn-group');
        self.preRender();
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      }
    });

    var Checkbox = Widget.extend({
      Defaults: {
        classes: 'checkbox',
        role: 'checkbox',
        checked: false
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.on('click mousedown', function (e) {
          e.preventDefault();
        });
        self.on('click', function (e) {
          e.preventDefault();
          if (!self.disabled()) {
            self.checked(!self.checked());
          }
        });
        self.checked(self.settings.checked);
      },
      checked: function (state) {
        if (!arguments.length) {
          return this.state.get('checked');
        }
        this.state.set('checked', state);
        return this;
      },
      value: function (state) {
        if (!arguments.length) {
          return this.checked();
        }
        return this.checked(state);
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix;
        return '<div id="' + id + '" class="' + self.classes + '" unselectable="on" aria-labelledby="' + id + '-al" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-checkbox"></i>' + '<span id="' + id + '-al" class="' + prefix + 'label">' + self.encode(self.state.get('text')) + '</span>' + '</div>';
      },
      bindStates: function () {
        var self = this;
        function checked(state) {
          self.classes.toggle('checked', state);
          self.aria('checked', state);
        }
        self.state.on('change:text', function (e) {
          self.getEl('al').firstChild.data = self.translate(e.value);
        });
        self.state.on('change:checked change:value', function (e) {
          self.fire('change');
          checked(e.value);
        });
        self.state.on('change:icon', function (e) {
          var icon = e.value;
          var prefix = self.classPrefix;
          if (typeof icon === 'undefined') {
            return self.settings.icon;
          }
          self.settings.icon = icon;
          icon = icon ? prefix + 'ico ' + prefix + 'i-' + self.settings.icon : '';
          var btnElm = self.getEl().firstChild;
          var iconElm = btnElm.getElementsByTagName('i')[0];
          if (icon) {
            if (!iconElm || iconElm !== btnElm.firstChild) {
              iconElm = domGlobals.document.createElement('i');
              btnElm.insertBefore(iconElm, btnElm.firstChild);
            }
            iconElm.className = icon;
          } else if (iconElm) {
            btnElm.removeChild(iconElm);
          }
        });
        if (self.state.get('checked')) {
          checked(true);
        }
        return self._super();
      }
    });

    var global$d = tinymce.util.Tools.resolve('tinymce.util.VK');

    var ComboBox = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        settings = self.settings;
        self.classes.add('combobox');
        self.subinput = true;
        self.ariaTarget = 'inp';
        settings.menu = settings.menu || settings.values;
        if (settings.menu) {
          settings.icon = 'caret';
        }
        self.on('click', function (e) {
          var elm = e.target;
          var root = self.getEl();
          if (!global$9.contains(root, elm) && elm !== root) {
            return;
          }
          while (elm && elm !== root) {
            if (elm.id && elm.id.indexOf('-open') !== -1) {
              self.fire('action');
              if (settings.menu) {
                self.showMenu();
                if (e.aria) {
                  self.menu.items()[0].focus();
                }
              }
            }
            elm = elm.parentNode;
          }
        });
        self.on('keydown', function (e) {
          var rootControl;
          if (e.keyCode === 13 && e.target.nodeName === 'INPUT') {
            e.preventDefault();
            self.parents().reverse().each(function (ctrl) {
              if (ctrl.toJSON) {
                rootControl = ctrl;
                return false;
              }
            });
            self.fire('submit', { data: rootControl.toJSON() });
          }
        });
        self.on('keyup', function (e) {
          if (e.target.nodeName === 'INPUT') {
            var oldValue = self.state.get('value');
            var newValue = e.target.value;
            if (newValue !== oldValue) {
              self.state.set('value', newValue);
              self.fire('autocomplete', e);
            }
          }
        });
        self.on('mouseover', function (e) {
          var tooltip = self.tooltip().moveTo(-65535);
          if (self.statusLevel() && e.target.className.indexOf(self.classPrefix + 'status') !== -1) {
            var statusMessage = self.statusMessage() || 'Ok';
            var rel = tooltip.text(statusMessage).show().testMoveRel(e.target, [
              'bc-tc',
              'bc-tl',
              'bc-tr'
            ]);
            tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
            tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
            tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
            tooltip.moveRel(e.target, rel);
          }
        });
      },
      statusLevel: function (value) {
        if (arguments.length > 0) {
          this.state.set('statusLevel', value);
        }
        return this.state.get('statusLevel');
      },
      statusMessage: function (value) {
        if (arguments.length > 0) {
          this.state.set('statusMessage', value);
        }
        return this.state.get('statusMessage');
      },
      showMenu: function () {
        var self = this;
        var settings = self.settings;
        var menu;
        if (!self.menu) {
          menu = settings.menu || [];
          if (menu.length) {
            menu = {
              type: 'menu',
              items: menu
            };
          } else {
            menu.type = menu.type || 'menu';
          }
          self.menu = global$4.create(menu).parent(self).renderTo(self.getContainerElm());
          self.fire('createmenu');
          self.menu.reflow();
          self.menu.on('cancel', function (e) {
            if (e.control === self.menu) {
              self.focus();
            }
          });
          self.menu.on('show hide', function (e) {
            e.control.items().each(function (ctrl) {
              ctrl.active(ctrl.value() === self.value());
            });
          }).fire('show');
          self.menu.on('select', function (e) {
            self.value(e.control.value());
          });
          self.on('focusin', function (e) {
            if (e.target.tagName.toUpperCase() === 'INPUT') {
              self.menu.hide();
            }
          });
          self.aria('expanded', true);
        }
        self.menu.show();
        self.menu.layoutRect({ w: self.layoutRect().w });
        self.menu.moveRel(self.getEl(), self.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
      },
      focus: function () {
        this.getEl('inp').focus();
      },
      repaint: function () {
        var self = this, elm = self.getEl(), openElm = self.getEl('open'), rect = self.layoutRect();
        var width, lineHeight, innerPadding = 0;
        var inputElm = elm.firstChild;
        if (self.statusLevel() && self.statusLevel() !== 'none') {
          innerPadding = parseInt(funcs.getRuntimeStyle(inputElm, 'padding-right'), 10) - parseInt(funcs.getRuntimeStyle(inputElm, 'padding-left'), 10);
        }
        if (openElm) {
          width = rect.w - funcs.getSize(openElm).width - 10;
        } else {
          width = rect.w - 10;
        }
        var doc = domGlobals.document;
        if (doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
          lineHeight = self.layoutRect().h - 2 + 'px';
        }
        global$9(inputElm).css({
          width: width - innerPadding,
          lineHeight: lineHeight
        });
        self._super();
        return self;
      },
      postRender: function () {
        var self = this;
        global$9(this.getEl('inp')).on('change', function (e) {
          self.state.set('value', e.target.value);
          self.fire('change', e);
        });
        return self._super();
      },
      renderHtml: function () {
        var self = this, id = self._id, settings = self.settings, prefix = self.classPrefix;
        var value = self.state.get('value') || '';
        var icon, text, openBtnHtml = '', extraAttrs = '', statusHtml = '';
        if ('spellcheck' in settings) {
          extraAttrs += ' spellcheck="' + settings.spellcheck + '"';
        }
        if (settings.maxLength) {
          extraAttrs += ' maxlength="' + settings.maxLength + '"';
        }
        if (settings.size) {
          extraAttrs += ' size="' + settings.size + '"';
        }
        if (settings.subtype) {
          extraAttrs += ' type="' + settings.subtype + '"';
        }
        statusHtml = '<i id="' + id + '-status" class="mce-status mce-ico" style="display: none"></i>';
        if (self.disabled()) {
          extraAttrs += ' disabled="disabled"';
        }
        icon = settings.icon;
        if (icon && icon !== 'caret') {
          icon = prefix + 'ico ' + prefix + 'i-' + settings.icon;
        }
        text = self.state.get('text');
        if (icon || text) {
          openBtnHtml = '<div id="' + id + '-open" class="' + prefix + 'btn ' + prefix + 'open" tabIndex="-1" role="button">' + '<button id="' + id + '-action" type="button" hidefocus="1" tabindex="-1">' + (icon !== 'caret' ? '<i class="' + icon + '"></i>' : '<i class="' + prefix + 'caret"></i>') + (text ? (icon ? ' ' : '') + text : '') + '</button>' + '</div>';
          self.classes.add('has-open');
        }
        return '<div id="' + id + '" class="' + self.classes + '">' + '<input id="' + id + '-inp" class="' + prefix + 'textbox" value="' + self.encode(value, false) + '" hidefocus="1"' + extraAttrs + ' placeholder="' + self.encode(settings.placeholder) + '" />' + statusHtml + openBtnHtml + '</div>';
      },
      value: function (value) {
        if (arguments.length) {
          this.state.set('value', value);
          return this;
        }
        if (this.state.get('rendered')) {
          this.state.set('value', this.getEl('inp').value);
        }
        return this.state.get('value');
      },
      showAutoComplete: function (items, term) {
        var self = this;
        if (items.length === 0) {
          self.hideMenu();
          return;
        }
        var insert = function (value, title) {
          return function () {
            self.fire('selectitem', {
              title: title,
              value: value
            });
          };
        };
        if (self.menu) {
          self.menu.items().remove();
        } else {
          self.menu = global$4.create({
            type: 'menu',
            classes: 'combobox-menu',
            layout: 'flow'
          }).parent(self).renderTo();
        }
        global$2.each(items, function (item) {
          self.menu.add({
            text: item.title,
            url: item.previewUrl,
            match: term,
            classes: 'menu-item-ellipsis',
            onclick: insert(item.value, item.title)
          });
        });
        self.menu.renderNew();
        self.hideMenu();
        self.menu.on('cancel', function (e) {
          if (e.control.parent() === self.menu) {
            e.stopPropagation();
            self.focus();
            self.hideMenu();
          }
        });
        self.menu.on('select', function () {
          self.focus();
        });
        var maxW = self.layoutRect().w;
        self.menu.layoutRect({
          w: maxW,
          minW: 0,
          maxW: maxW
        });
        self.menu.repaint();
        self.menu.reflow();
        self.menu.show();
        self.menu.moveRel(self.getEl(), self.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
      },
      hideMenu: function () {
        if (this.menu) {
          this.menu.hide();
        }
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          if (self.getEl('inp').value !== e.value) {
            self.getEl('inp').value = e.value;
          }
        });
        self.state.on('change:disabled', function (e) {
          self.getEl('inp').disabled = e.value;
        });
        self.state.on('change:statusLevel', function (e) {
          var statusIconElm = self.getEl('status');
          var prefix = self.classPrefix, value = e.value;
          funcs.css(statusIconElm, 'display', value === 'none' ? 'none' : '');
          funcs.toggleClass(statusIconElm, prefix + 'i-checkmark', value === 'ok');
          funcs.toggleClass(statusIconElm, prefix + 'i-warning', value === 'warn');
          funcs.toggleClass(statusIconElm, prefix + 'i-error', value === 'error');
          self.classes.toggle('has-status', value !== 'none');
          self.repaint();
        });
        funcs.on(self.getEl('status'), 'mouseleave', function () {
          self.tooltip().hide();
        });
        self.on('cancel', function (e) {
          if (self.menu && self.menu.visible()) {
            e.stopPropagation();
            self.hideMenu();
          }
        });
        var focusIdx = function (idx, menu) {
          if (menu && menu.items().length > 0) {
            menu.items().eq(idx)[0].focus();
          }
        };
        self.on('keydown', function (e) {
          var keyCode = e.keyCode;
          if (e.target.nodeName === 'INPUT') {
            if (keyCode === global$d.DOWN) {
              e.preventDefault();
              self.fire('autocomplete');
              focusIdx(0, self.menu);
            } else if (keyCode === global$d.UP) {
              e.preventDefault();
              focusIdx(-1, self.menu);
            }
          }
        });
        return self._super();
      },
      remove: function () {
        global$9(this.getEl('inp')).off();
        if (this.menu) {
          this.menu.remove();
        }
        this._super();
      }
    });

    var ColorBox = ComboBox.extend({
      init: function (settings) {
        var self = this;
        settings.spellcheck = false;
        if (settings.onaction) {
          settings.icon = 'none';
        }
        self._super(settings);
        self.classes.add('colorbox');
        self.on('change keyup postrender', function () {
          self.repaintColor(self.value());
        });
      },
      repaintColor: function (value) {
        var openElm = this.getEl('open');
        var elm = openElm ? openElm.getElementsByTagName('i')[0] : null;
        if (elm) {
          try {
            elm.style.background = value;
          } catch (ex) {
          }
        }
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          if (self.state.get('rendered')) {
            self.repaintColor(e.value);
          }
        });
        return self._super();
      }
    });

    var PanelButton = Button.extend({
      showPanel: function () {
        var self = this, settings = self.settings;
        self.classes.add('opened');
        if (!self.panel) {
          var panelSettings = settings.panel;
          if (panelSettings.type) {
            panelSettings = {
              layout: 'grid',
              items: panelSettings
            };
          }
          panelSettings.role = panelSettings.role || 'dialog';
          panelSettings.popover = true;
          panelSettings.autohide = true;
          panelSettings.ariaRoot = true;
          self.panel = new FloatPanel(panelSettings).on('hide', function () {
            self.classes.remove('opened');
          }).on('cancel', function (e) {
            e.stopPropagation();
            self.focus();
            self.hidePanel();
          }).parent(self).renderTo(self.getContainerElm());
          self.panel.fire('show');
          self.panel.reflow();
        } else {
          self.panel.show();
        }
        var rtlRels = [
          'bc-tc',
          'bc-tl',
          'bc-tr'
        ];
        var ltrRels = [
          'bc-tc',
          'bc-tr',
          'bc-tl',
          'tc-bc',
          'tc-br',
          'tc-bl'
        ];
        var rel = self.panel.testMoveRel(self.getEl(), settings.popoverAlign || (self.isRtl() ? rtlRels : ltrRels));
        self.panel.classes.toggle('start', rel.substr(-1) === 'l');
        self.panel.classes.toggle('end', rel.substr(-1) === 'r');
        var isTop = rel.substr(0, 1) === 't';
        self.panel.classes.toggle('bottom', !isTop);
        self.panel.classes.toggle('top', isTop);
        self.panel.moveRel(self.getEl(), rel);
      },
      hidePanel: function () {
        var self = this;
        if (self.panel) {
          self.panel.hide();
        }
      },
      postRender: function () {
        var self = this;
        self.aria('haspopup', true);
        self.on('click', function (e) {
          if (e.control === self) {
            if (self.panel && self.panel.visible()) {
              self.hidePanel();
            } else {
              self.showPanel();
              self.panel.focus(!!e.aria);
            }
          }
        });
        return self._super();
      },
      remove: function () {
        if (this.panel) {
          this.panel.remove();
          this.panel = null;
        }
        return this._super();
      }
    });

    var DOM$3 = global$3.DOM;
    var ColorButton = PanelButton.extend({
      init: function (settings) {
        this._super(settings);
        this.classes.add('splitbtn');
        this.classes.add('colorbutton');
      },
      color: function (color) {
        if (color) {
          this._color = color;
          this.getEl('preview').style.backgroundColor = color;
          return this;
        }
        return this._color;
      },
      resetColor: function () {
        this._color = null;
        this.getEl('preview').style.backgroundColor = null;
        return this;
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix, text = self.state.get('text');
        var icon = self.settings.icon ? prefix + 'ico ' + prefix + 'i-' + self.settings.icon : '';
        var image = self.settings.image ? ' style="background-image: url(\'' + self.settings.image + '\')"' : '';
        var textHtml = '';
        if (text) {
          self.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
        }
        return '<div id="' + id + '" class="' + self.classes + '" role="button" tabindex="-1" aria-haspopup="true">' + '<button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + '<span id="' + id + '-preview" class="' + prefix + 'preview"></span>' + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self = this, onClickHandler = self.settings.onclick;
        self.on('click', function (e) {
          if (e.aria && e.aria.key === 'down') {
            return;
          }
          if (e.control === self && !DOM$3.getParent(e.target, '.' + self.classPrefix + 'open')) {
            e.stopImmediatePropagation();
            onClickHandler.call(self, e);
          }
        });
        delete self.settings.onclick;
        return self._super();
      }
    });

    var global$e = tinymce.util.Tools.resolve('tinymce.util.Color');

    var ColorPicker = Widget.extend({
      Defaults: { classes: 'widget colorpicker' },
      init: function (settings) {
        this._super(settings);
      },
      postRender: function () {
        var self = this;
        var color = self.color();
        var hsv, hueRootElm, huePointElm, svRootElm, svPointElm;
        hueRootElm = self.getEl('h');
        huePointElm = self.getEl('hp');
        svRootElm = self.getEl('sv');
        svPointElm = self.getEl('svp');
        function getPos(elm, event) {
          var pos = funcs.getPos(elm);
          var x, y;
          x = event.pageX - pos.x;
          y = event.pageY - pos.y;
          x = Math.max(0, Math.min(x / elm.clientWidth, 1));
          y = Math.max(0, Math.min(y / elm.clientHeight, 1));
          return {
            x: x,
            y: y
          };
        }
        function updateColor(hsv, hueUpdate) {
          var hue = (360 - hsv.h) / 360;
          funcs.css(huePointElm, { top: hue * 100 + '%' });
          if (!hueUpdate) {
            funcs.css(svPointElm, {
              left: hsv.s + '%',
              top: 100 - hsv.v + '%'
            });
          }
          svRootElm.style.background = global$e({
            s: 100,
            v: 100,
            h: hsv.h
          }).toHex();
          self.color().parse({
            s: hsv.s,
            v: hsv.v,
            h: hsv.h
          });
        }
        function updateSaturationAndValue(e) {
          var pos;
          pos = getPos(svRootElm, e);
          hsv.s = pos.x * 100;
          hsv.v = (1 - pos.y) * 100;
          updateColor(hsv);
          self.fire('change');
        }
        function updateHue(e) {
          var pos;
          pos = getPos(hueRootElm, e);
          hsv = color.toHsv();
          hsv.h = (1 - pos.y) * 360;
          updateColor(hsv, true);
          self.fire('change');
        }
        self._repaint = function () {
          hsv = color.toHsv();
          updateColor(hsv);
        };
        self._super();
        self._svdraghelper = new DragHelper(self._id + '-sv', {
          start: updateSaturationAndValue,
          drag: updateSaturationAndValue
        });
        self._hdraghelper = new DragHelper(self._id + '-h', {
          start: updateHue,
          drag: updateHue
        });
        self._repaint();
      },
      rgb: function () {
        return this.color().toRgb();
      },
      value: function (value) {
        var self = this;
        if (arguments.length) {
          self.color().parse(value);
          if (self._rendered) {
            self._repaint();
          }
        } else {
          return self.color().toHex();
        }
      },
      color: function () {
        if (!this._color) {
          this._color = global$e();
        }
        return this._color;
      },
      renderHtml: function () {
        var self = this;
        var id = self._id;
        var prefix = self.classPrefix;
        var hueHtml;
        var stops = '#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000';
        function getOldIeFallbackHtml() {
          var i, l, html = '', gradientPrefix, stopsList;
          gradientPrefix = 'filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=';
          stopsList = stops.split(',');
          for (i = 0, l = stopsList.length - 1; i < l; i++) {
            html += '<div class="' + prefix + 'colorpicker-h-chunk" style="' + 'height:' + 100 / l + '%;' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ');' + '-ms-' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ')' + '"></div>';
          }
          return html;
        }
        var gradientCssText = 'background: -ms-linear-gradient(top,' + stops + ');' + 'background: linear-gradient(to bottom,' + stops + ');';
        hueHtml = '<div id="' + id + '-h" class="' + prefix + 'colorpicker-h" style="' + gradientCssText + '">' + getOldIeFallbackHtml() + '<div id="' + id + '-hp" class="' + prefix + 'colorpicker-h-marker"></div>' + '</div>';
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-sv" class="' + prefix + 'colorpicker-sv">' + '<div class="' + prefix + 'colorpicker-overlay1">' + '<div class="' + prefix + 'colorpicker-overlay2">' + '<div id="' + id + '-svp" class="' + prefix + 'colorpicker-selector1">' + '<div class="' + prefix + 'colorpicker-selector2"></div>' + '</div>' + '</div>' + '</div>' + '</div>' + hueHtml + '</div>';
      }
    });

    var DropZone = Widget.extend({
      init: function (settings) {
        var self = this;
        settings = global$2.extend({
          height: 100,
          text: 'Drop an image here',
          multiple: false,
          accept: null
        }, settings);
        self._super(settings);
        self.classes.add('dropzone');
        if (settings.multiple) {
          self.classes.add('multiple');
        }
      },
      renderHtml: function () {
        var self = this;
        var attrs, elm;
        var cfg = self.settings;
        attrs = {
          id: self._id,
          hidefocus: '1'
        };
        elm = funcs.create('div', attrs, '<span>' + this.translate(cfg.text) + '</span>');
        if (cfg.height) {
          funcs.css(elm, 'height', cfg.height + 'px');
        }
        if (cfg.width) {
          funcs.css(elm, 'width', cfg.width + 'px');
        }
        elm.className = self.classes;
        return elm.outerHTML;
      },
      postRender: function () {
        var self = this;
        var toggleDragClass = function (e) {
          e.preventDefault();
          self.classes.toggle('dragenter');
          self.getEl().className = self.classes;
        };
        var filter = function (files) {
          var accept = self.settings.accept;
          if (typeof accept !== 'string') {
            return files;
          }
          var re = new RegExp('(' + accept.split(/\s*,\s*/).join('|') + ')$', 'i');
          return global$2.grep(files, function (file) {
            return re.test(file.name);
          });
        };
        self._super();
        self.$el.on('dragover', function (e) {
          e.preventDefault();
        });
        self.$el.on('dragenter', toggleDragClass);
        self.$el.on('dragleave', toggleDragClass);
        self.$el.on('drop', function (e) {
          e.preventDefault();
          if (self.state.get('disabled')) {
            return;
          }
          var files = filter(e.dataTransfer.files);
          self.value = function () {
            if (!files.length) {
              return null;
            } else if (self.settings.multiple) {
              return files;
            } else {
              return files[0];
            }
          };
          if (files.length) {
            self.fire('change', e);
          }
        });
      },
      remove: function () {
        this.$el.off();
        this._super();
      }
    });

    var Path = Widget.extend({
      init: function (settings) {
        var self = this;
        if (!settings.delimiter) {
          settings.delimiter = '\xBB';
        }
        self._super(settings);
        self.classes.add('path');
        self.canFocus = true;
        self.on('click', function (e) {
          var index;
          var target = e.target;
          if (index = target.getAttribute('data-index')) {
            self.fire('select', {
              value: self.row()[index],
              index: index
            });
          }
        });
        self.row(self.settings.row);
      },
      focus: function () {
        var self = this;
        self.getEl().firstChild.focus();
        return self;
      },
      row: function (row) {
        if (!arguments.length) {
          return this.state.get('row');
        }
        this.state.set('row', row);
        return this;
      },
      renderHtml: function () {
        var self = this;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + self._getDataPathHtml(self.state.get('row')) + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:row', function (e) {
          self.innerHtml(self._getDataPathHtml(e.value));
        });
        return self._super();
      },
      _getDataPathHtml: function (data) {
        var self = this;
        var parts = data || [];
        var i, l, html = '';
        var prefix = self.classPrefix;
        for (i = 0, l = parts.length; i < l; i++) {
          html += (i > 0 ? '<div class="' + prefix + 'divider" aria-hidden="true"> ' + self.settings.delimiter + ' </div>' : '') + '<div role="button" class="' + prefix + 'path-item' + (i === l - 1 ? ' ' + prefix + 'last' : '') + '" data-index="' + i + '" tabindex="-1" id="' + self._id + '-' + i + '" aria-level="' + (i + 1) + '">' + parts[i].name + '</div>';
        }
        if (!html) {
          html = '<div class="' + prefix + 'path-item">\xA0</div>';
        }
        return html;
      }
    });

    var ElementPath = Path.extend({
      postRender: function () {
        var self = this, editor = self.settings.editor;
        function isHidden(elm) {
          if (elm.nodeType === 1) {
            if (elm.nodeName === 'BR' || !!elm.getAttribute('data-mce-bogus')) {
              return true;
            }
            if (elm.getAttribute('data-mce-type') === 'bookmark') {
              return true;
            }
          }
          return false;
        }
        if (editor.settings.elementpath !== false) {
          self.on('select', function (e) {
            editor.focus();
            editor.selection.select(this.row()[e.index].element);
            editor.nodeChanged();
          });
          editor.on('nodeChange', function (e) {
            var outParents = [];
            var parents = e.parents;
            var i = parents.length;
            while (i--) {
              if (parents[i].nodeType === 1 && !isHidden(parents[i])) {
                var args = editor.fire('ResolveName', {
                  name: parents[i].nodeName.toLowerCase(),
                  target: parents[i]
                });
                if (!args.isDefaultPrevented()) {
                  outParents.push({
                    name: args.name,
                    element: parents[i]
                  });
                }
                if (args.isPropagationStopped()) {
                  break;
                }
              }
            }
            self.row(outParents);
          });
        }
        return self._super();
      }
    });

    var FormItem = Container.extend({
      Defaults: {
        layout: 'flex',
        align: 'center',
        defaults: { flex: 1 }
      },
      renderHtml: function () {
        var self = this, layout = self._layout, prefix = self.classPrefix;
        self.classes.add('formitem');
        layout.preRender(self);
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<div id="' + self._id + '-title" class="' + prefix + 'title">' + self.settings.title + '</div>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
      }
    });

    var Form = Container.extend({
      Defaults: {
        containerCls: 'form',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        flex: 1,
        padding: 15,
        labelGap: 30,
        spacing: 10,
        callbacks: {
          submit: function () {
            this.submit();
          }
        }
      },
      preRender: function () {
        var self = this, items = self.items();
        if (!self.settings.formItemDefaults) {
          self.settings.formItemDefaults = {
            layout: 'flex',
            autoResize: 'overflow',
            defaults: { flex: 1 }
          };
        }
        items.each(function (ctrl) {
          var formItem;
          var label = ctrl.settings.label;
          if (label) {
            formItem = new FormItem(global$2.extend({
              items: {
                type: 'label',
                id: ctrl._id + '-l',
                text: label,
                flex: 0,
                forId: ctrl._id,
                disabled: ctrl.disabled()
              }
            }, self.settings.formItemDefaults));
            formItem.type = 'formitem';
            ctrl.aria('labelledby', ctrl._id + '-l');
            if (typeof ctrl.settings.flex === 'undefined') {
              ctrl.settings.flex = 1;
            }
            self.replace(ctrl, formItem);
            formItem.add(ctrl);
          }
        });
      },
      submit: function () {
        return this.fire('submit', { data: this.toJSON() });
      },
      postRender: function () {
        var self = this;
        self._super();
        self.fromJSON(self.settings.data);
      },
      bindStates: function () {
        var self = this;
        self._super();
        function recalcLabels() {
          var maxLabelWidth = 0;
          var labels = [];
          var i, labelGap, items;
          if (self.settings.labelGapCalc === false) {
            return;
          }
          if (self.settings.labelGapCalc === 'children') {
            items = self.find('formitem');
          } else {
            items = self.items();
          }
          items.filter('formitem').each(function (item) {
            var labelCtrl = item.items()[0], labelWidth = labelCtrl.getEl().clientWidth;
            maxLabelWidth = labelWidth > maxLabelWidth ? labelWidth : maxLabelWidth;
            labels.push(labelCtrl);
          });
          labelGap = self.settings.labelGap || 0;
          i = labels.length;
          while (i--) {
            labels[i].settings.minWidth = maxLabelWidth + labelGap;
          }
        }
        self.on('show', recalcLabels);
        recalcLabels();
      }
    });

    var FieldSet = Form.extend({
      Defaults: {
        containerCls: 'fieldset',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        flex: 1,
        padding: '25 15 5 15',
        labelGap: 30,
        spacing: 10,
        border: 1
      },
      renderHtml: function () {
        var self = this, layout = self._layout, prefix = self.classPrefix;
        self.preRender();
        layout.preRender(self);
        return '<fieldset id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<legend id="' + self._id + '-title" class="' + prefix + 'fieldset-title">' + self.settings.title + '</legend>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</fieldset>';
      }
    });

    var unique$1 = 0;
    var generate = function (prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1000000000);
      unique$1++;
      return prefix + '_' + random + unique$1 + String(time);
    };

    var fromHtml = function (html, scope) {
      var doc = scope || domGlobals.document;
      var div = doc.createElement('div');
      div.innerHTML = html;
      if (!div.hasChildNodes() || div.childNodes.length > 1) {
        domGlobals.console.error('HTML does not have a single root node', html);
        throw new Error('HTML must have a single root node');
      }
      return fromDom(div.childNodes[0]);
    };
    var fromTag = function (tag, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createElement(tag);
      return fromDom(node);
    };
    var fromText = function (text, scope) {
      var doc = scope || domGlobals.document;
      var node = doc.createTextNode(text);
      return fromDom(node);
    };
    var fromDom = function (node) {
      if (node === null || node === undefined) {
        throw new Error('Node cannot be null or undefined');
      }
      return { dom: constant(node) };
    };
    var fromPoint = function (docElm, x, y) {
      var doc = docElm.dom();
      return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
    };
    var Element = {
      fromHtml: fromHtml,
      fromTag: fromTag,
      fromText: fromText,
      fromDom: fromDom,
      fromPoint: fromPoint
    };

    var cached = function (f) {
      var called = false;
      var r;
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!called) {
          called = true;
          r = f.apply(null, args);
        }
        return r;
      };
    };

    var ATTRIBUTE = domGlobals.Node.ATTRIBUTE_NODE;
    var CDATA_SECTION = domGlobals.Node.CDATA_SECTION_NODE;
    var COMMENT = domGlobals.Node.COMMENT_NODE;
    var DOCUMENT = domGlobals.Node.DOCUMENT_NODE;
    var DOCUMENT_TYPE = domGlobals.Node.DOCUMENT_TYPE_NODE;
    var DOCUMENT_FRAGMENT = domGlobals.Node.DOCUMENT_FRAGMENT_NODE;
    var ELEMENT = domGlobals.Node.ELEMENT_NODE;
    var TEXT = domGlobals.Node.TEXT_NODE;
    var PROCESSING_INSTRUCTION = domGlobals.Node.PROCESSING_INSTRUCTION_NODE;
    var ENTITY_REFERENCE = domGlobals.Node.ENTITY_REFERENCE_NODE;
    var ENTITY = domGlobals.Node.ENTITY_NODE;
    var NOTATION = domGlobals.Node.NOTATION_NODE;

    var Global = typeof domGlobals.window !== 'undefined' ? domGlobals.window : Function('return this;')();

    var path = function (parts, scope) {
      var o = scope !== undefined && scope !== null ? scope : Global;
      for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i) {
        o = o[parts[i]];
      }
      return o;
    };
    var resolve = function (p, scope) {
      var parts = p.split('.');
      return path(parts, scope);
    };

    var unsafe = function (name, scope) {
      return resolve(name, scope);
    };
    var getOrDie = function (name, scope) {
      var actual = unsafe(name, scope);
      if (actual === undefined || actual === null) {
        throw new Error(name + ' not available on this browser');
      }
      return actual;
    };
    var Global$1 = { getOrDie: getOrDie };

    var Immutable = function () {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
          throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
        }
        var struct = {};
        each(fields, function (name, i) {
          struct[name] = constant(values[i]);
        });
        return struct;
      };
    };

    var node = function () {
      var f = Global$1.getOrDie('Node');
      return f;
    };
    var compareDocumentPosition = function (a, b, match) {
      return (a.compareDocumentPosition(b) & match) !== 0;
    };
    var documentPositionPreceding = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
    };
    var documentPositionContainedBy = function (a, b) {
      return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
    };
    var Node = {
      documentPositionPreceding: documentPositionPreceding,
      documentPositionContainedBy: documentPositionContainedBy
    };

    var firstMatch = function (regexes, s) {
      for (var i = 0; i < regexes.length; i++) {
        var x = regexes[i];
        if (x.test(s)) {
          return x;
        }
      }
      return undefined;
    };
    var find$1 = function (regexes, agent) {
      var r = firstMatch(regexes, agent);
      if (!r) {
        return {
          major: 0,
          minor: 0
        };
      }
      var group = function (i) {
        return Number(agent.replace(r, '$' + i));
      };
      return nu(group(1), group(2));
    };
    var detect = function (versionRegexes, agent) {
      var cleanedAgent = String(agent).toLowerCase();
      if (versionRegexes.length === 0) {
        return unknown();
      }
      return find$1(versionRegexes, cleanedAgent);
    };
    var unknown = function () {
      return nu(0, 0);
    };
    var nu = function (major, minor) {
      return {
        major: major,
        minor: minor
      };
    };
    var Version = {
      nu: nu,
      detect: detect,
      unknown: unknown
    };

    var edge = 'Edge';
    var chrome = 'Chrome';
    var ie = 'IE';
    var opera = 'Opera';
    var firefox = 'Firefox';
    var safari = 'Safari';
    var isBrowser = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$1 = function () {
      return nu$1({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$1 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isEdge: isBrowser(edge, current),
        isChrome: isBrowser(chrome, current),
        isIE: isBrowser(ie, current),
        isOpera: isBrowser(opera, current),
        isFirefox: isBrowser(firefox, current),
        isSafari: isBrowser(safari, current)
      };
    };
    var Browser = {
      unknown: unknown$1,
      nu: nu$1,
      edge: constant(edge),
      chrome: constant(chrome),
      ie: constant(ie),
      opera: constant(opera),
      firefox: constant(firefox),
      safari: constant(safari)
    };

    var windows$1 = 'Windows';
    var ios = 'iOS';
    var android = 'Android';
    var linux = 'Linux';
    var osx = 'OSX';
    var solaris = 'Solaris';
    var freebsd = 'FreeBSD';
    var isOS = function (name, current) {
      return function () {
        return current === name;
      };
    };
    var unknown$2 = function () {
      return nu$2({
        current: undefined,
        version: Version.unknown()
      });
    };
    var nu$2 = function (info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isWindows: isOS(windows$1, current),
        isiOS: isOS(ios, current),
        isAndroid: isOS(android, current),
        isOSX: isOS(osx, current),
        isLinux: isOS(linux, current),
        isSolaris: isOS(solaris, current),
        isFreeBSD: isOS(freebsd, current)
      };
    };
    var OperatingSystem = {
      unknown: unknown$2,
      nu: nu$2,
      windows: constant(windows$1),
      ios: constant(ios),
      android: constant(android),
      linux: constant(linux),
      osx: constant(osx),
      solaris: constant(solaris),
      freebsd: constant(freebsd)
    };

    var DeviceType = function (os, browser, userAgent) {
      var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
      var isiPhone = os.isiOS() && !isiPad;
      var isAndroid3 = os.isAndroid() && os.version.major === 3;
      var isAndroid4 = os.isAndroid() && os.version.major === 4;
      var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
      var isTouch = os.isiOS() || os.isAndroid();
      var isPhone = isTouch && !isTablet;
      var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
      return {
        isiPad: constant(isiPad),
        isiPhone: constant(isiPhone),
        isTablet: constant(isTablet),
        isPhone: constant(isPhone),
        isTouch: constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: constant(iOSwebview)
      };
    };

    var detect$1 = function (candidates, userAgent) {
      var agent = String(userAgent).toLowerCase();
      return find(candidates, function (candidate) {
        return candidate.search(agent);
      });
    };
    var detectBrowser = function (browsers, userAgent) {
      return detect$1(browsers, userAgent).map(function (browser) {
        var version = Version.detect(browser.versionRegexes, userAgent);
        return {
          current: browser.name,
          version: version
        };
      });
    };
    var detectOs = function (oses, userAgent) {
      return detect$1(oses, userAgent).map(function (os) {
        var version = Version.detect(os.versionRegexes, userAgent);
        return {
          current: os.name,
          version: version
        };
      });
    };
    var UaString = {
      detectBrowser: detectBrowser,
      detectOs: detectOs
    };

    var contains = function (str, substr) {
      return str.indexOf(substr) !== -1;
    };

    var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
    var checkContains = function (target) {
      return function (uastring) {
        return contains(uastring, target);
      };
    };
    var browsers = [
      {
        name: 'Edge',
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function (uastring) {
          return contains(uastring, 'edge/') && contains(uastring, 'chrome') && contains(uastring, 'safari') && contains(uastring, 'applewebkit');
        }
      },
      {
        name: 'Chrome',
        versionRegexes: [
          /.*?chrome\/([0-9]+)\.([0-9]+).*/,
          normalVersionRegex
        ],
        search: function (uastring) {
          return contains(uastring, 'chrome') && !contains(uastring, 'chromeframe');
        }
      },
      {
        name: 'IE',
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/
        ],
        search: function (uastring) {
          return contains(uastring, 'msie') || contains(uastring, 'trident');
        }
      },
      {
        name: 'Opera',
        versionRegexes: [
          normalVersionRegex,
          /.*?opera\/([0-9]+)\.([0-9]+).*/
        ],
        search: checkContains('opera')
      },
      {
        name: 'Firefox',
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: checkContains('firefox')
      },
      {
        name: 'Safari',
        versionRegexes: [
          normalVersionRegex,
          /.*?cpu os ([0-9]+)_([0-9]+).*/
        ],
        search: function (uastring) {
          return (contains(uastring, 'safari') || contains(uastring, 'mobile/')) && contains(uastring, 'applewebkit');
        }
      }
    ];
    var oses = [
      {
        name: 'Windows',
        search: checkContains('win'),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'iOS',
        search: function (uastring) {
          return contains(uastring, 'iphone') || contains(uastring, 'ipad');
        },
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/
        ]
      },
      {
        name: 'Android',
        search: checkContains('android'),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: 'OSX',
        search: checkContains('os x'),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: 'Linux',
        search: checkContains('linux'),
        versionRegexes: []
      },
      {
        name: 'Solaris',
        search: checkContains('sunos'),
        versionRegexes: []
      },
      {
        name: 'FreeBSD',
        search: checkContains('freebsd'),
        versionRegexes: []
      }
    ];
    var PlatformInfo = {
      browsers: constant(browsers),
      oses: constant(oses)
    };

    var detect$2 = function (userAgent) {
      var browsers = PlatformInfo.browsers();
      var oses = PlatformInfo.oses();
      var browser = UaString.detectBrowser(browsers, userAgent).fold(Browser.unknown, Browser.nu);
      var os = UaString.detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
      var deviceType = DeviceType(os, browser, userAgent);
      return {
        browser: browser,
        os: os,
        deviceType: deviceType
      };
    };
    var PlatformDetection = { detect: detect$2 };

    var detect$3 = cached(function () {
      var userAgent = domGlobals.navigator.userAgent;
      return PlatformDetection.detect(userAgent);
    });
    var PlatformDetection$1 = { detect: detect$3 };

    var ELEMENT$1 = ELEMENT;
    var DOCUMENT$1 = DOCUMENT;
    var bypassSelector = function (dom) {
      return dom.nodeType !== ELEMENT$1 && dom.nodeType !== DOCUMENT$1 || dom.childElementCount === 0;
    };
    var all = function (selector, scope) {
      var base = scope === undefined ? domGlobals.document : scope.dom();
      return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), Element.fromDom);
    };
    var one = function (selector, scope) {
      var base = scope === undefined ? domGlobals.document : scope.dom();
      return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(Element.fromDom);
    };

    var regularContains = function (e1, e2) {
      var d1 = e1.dom();
      var d2 = e2.dom();
      return d1 === d2 ? false : d1.contains(d2);
    };
    var ieContains = function (e1, e2) {
      return Node.documentPositionContainedBy(e1.dom(), e2.dom());
    };
    var browser = PlatformDetection$1.detect().browser;
    var contains$1 = browser.isIE() ? ieContains : regularContains;

    var spot = Immutable('element', 'offset');

    var descendants = function (scope, selector) {
      return all(selector, scope);
    };

    var trim = global$2.trim;
    var hasContentEditableState = function (value) {
      return function (node) {
        if (node && node.nodeType === 1) {
          if (node.contentEditable === value) {
            return true;
          }
          if (node.getAttribute('data-mce-contenteditable') === value) {
            return true;
          }
        }
        return false;
      };
    };
    var isContentEditableTrue = hasContentEditableState('true');
    var isContentEditableFalse = hasContentEditableState('false');
    var create = function (type, title, url, level, attach) {
      return {
        type: type,
        title: title,
        url: url,
        level: level,
        attach: attach
      };
    };
    var isChildOfContentEditableTrue = function (node) {
      while (node = node.parentNode) {
        var value = node.contentEditable;
        if (value && value !== 'inherit') {
          return isContentEditableTrue(node);
        }
      }
      return false;
    };
    var select = function (selector, root) {
      return map(descendants(Element.fromDom(root), selector), function (element) {
        return element.dom();
      });
    };
    var getElementText = function (elm) {
      return elm.innerText || elm.textContent;
    };
    var getOrGenerateId = function (elm) {
      return elm.id ? elm.id : generate('h');
    };
    var isAnchor = function (elm) {
      return elm && elm.nodeName === 'A' && (elm.id || elm.name);
    };
    var isValidAnchor = function (elm) {
      return isAnchor(elm) && isEditable(elm);
    };
    var isHeader = function (elm) {
      return elm && /^(H[1-6])$/.test(elm.nodeName);
    };
    var isEditable = function (elm) {
      return isChildOfContentEditableTrue(elm) && !isContentEditableFalse(elm);
    };
    var isValidHeader = function (elm) {
      return isHeader(elm) && isEditable(elm);
    };
    var getLevel = function (elm) {
      return isHeader(elm) ? parseInt(elm.nodeName.substr(1), 10) : 0;
    };
    var headerTarget = function (elm) {
      var headerId = getOrGenerateId(elm);
      var attach = function () {
        elm.id = headerId;
      };
      return create('header', getElementText(elm), '#' + headerId, getLevel(elm), attach);
    };
    var anchorTarget = function (elm) {
      var anchorId = elm.id || elm.name;
      var anchorText = getElementText(elm);
      return create('anchor', anchorText ? anchorText : '#' + anchorId, '#' + anchorId, 0, noop);
    };
    var getHeaderTargets = function (elms) {
      return map(filter(elms, isValidHeader), headerTarget);
    };
    var getAnchorTargets = function (elms) {
      return map(filter(elms, isValidAnchor), anchorTarget);
    };
    var getTargetElements = function (elm) {
      var elms = select('h1,h2,h3,h4,h5,h6,a:not([href])', elm);
      return elms;
    };
    var hasTitle = function (target) {
      return trim(target.title).length > 0;
    };
    var find$2 = function (elm) {
      var elms = getTargetElements(elm);
      return filter(getHeaderTargets(elms).concat(getAnchorTargets(elms)), hasTitle);
    };
    var LinkTargets = { find: find$2 };

    var getActiveEditor = function () {
      return window.tinymce ? window.tinymce.activeEditor : global$1.activeEditor;
    };
    var history = {};
    var HISTORY_LENGTH = 5;
    var clearHistory = function () {
      history = {};
    };
    var toMenuItem = function (target) {
      return {
        title: target.title,
        value: {
          title: { raw: target.title },
          url: target.url,
          attach: target.attach
        }
      };
    };
    var toMenuItems = function (targets) {
      return global$2.map(targets, toMenuItem);
    };
    var staticMenuItem = function (title, url) {
      return {
        title: title,
        value: {
          title: title,
          url: url,
          attach: noop
        }
      };
    };
    var isUniqueUrl = function (url, targets) {
      var foundTarget = exists(targets, function (target) {
        return target.url === url;
      });
      return !foundTarget;
    };
    var getSetting = function (editorSettings, name, defaultValue) {
      var value = name in editorSettings ? editorSettings[name] : defaultValue;
      return value === false ? null : value;
    };
    var createMenuItems = function (term, targets, fileType, editorSettings) {
      var separator = { title: '-' };
      var fromHistoryMenuItems = function (history) {
        var historyItems = history.hasOwnProperty(fileType) ? history[fileType] : [];
        var uniqueHistory = filter(historyItems, function (url) {
          return isUniqueUrl(url, targets);
        });
        return global$2.map(uniqueHistory, function (url) {
          return {
            title: url,
            value: {
              title: url,
              url: url,
              attach: noop
            }
          };
        });
      };
      var fromMenuItems = function (type) {
        var filteredTargets = filter(targets, function (target) {
          return target.type === type;
        });
        return toMenuItems(filteredTargets);
      };
      var anchorMenuItems = function () {
        var anchorMenuItems = fromMenuItems('anchor');
        var topAnchor = getSetting(editorSettings, 'anchor_top', '#top');
        var bottomAchor = getSetting(editorSettings, 'anchor_bottom', '#bottom');
        if (topAnchor !== null) {
          anchorMenuItems.unshift(staticMenuItem('<top>', topAnchor));
        }
        if (bottomAchor !== null) {
          anchorMenuItems.push(staticMenuItem('<bottom>', bottomAchor));
        }
        return anchorMenuItems;
      };
      var join = function (items) {
        return foldl(items, function (a, b) {
          var bothEmpty = a.length === 0 || b.length === 0;
          return bothEmpty ? a.concat(b) : a.concat(separator, b);
        }, []);
      };
      if (editorSettings.typeahead_urls === false) {
        return [];
      }
      return fileType === 'file' ? join([
        filterByQuery(term, fromHistoryMenuItems(history)),
        filterByQuery(term, fromMenuItems('header')),
        filterByQuery(term, anchorMenuItems())
      ]) : filterByQuery(term, fromHistoryMenuItems(history));
    };
    var addToHistory = function (url, fileType) {
      var items = history[fileType];
      if (!/^https?/.test(url)) {
        return;
      }
      if (items) {
        if (indexOf(items, url).isNone()) {
          history[fileType] = items.slice(0, HISTORY_LENGTH).concat(url);
        }
      } else {
        history[fileType] = [url];
      }
    };
    var filterByQuery = function (term, menuItems) {
      var lowerCaseTerm = term.toLowerCase();
      var result = global$2.grep(menuItems, function (item) {
        return item.title.toLowerCase().indexOf(lowerCaseTerm) !== -1;
      });
      return result.length === 1 && result[0].title === term ? [] : result;
    };
    var getTitle = function (linkDetails) {
      var title = linkDetails.title;
      return title.raw ? title.raw : title;
    };
    var setupAutoCompleteHandler = function (ctrl, editorSettings, bodyElm, fileType) {
      var autocomplete = function (term) {
        var linkTargets = LinkTargets.find(bodyElm);
        var menuItems = createMenuItems(term, linkTargets, fileType, editorSettings);
        ctrl.showAutoComplete(menuItems, term);
      };
      ctrl.on('autocomplete', function () {
        autocomplete(ctrl.value());
      });
      ctrl.on('selectitem', function (e) {
        var linkDetails = e.value;
        ctrl.value(linkDetails.url);
        var title = getTitle(linkDetails);
        if (fileType === 'image') {
          ctrl.fire('change', {
            meta: {
              alt: title,
              attach: linkDetails.attach
            }
          });
        } else {
          ctrl.fire('change', {
            meta: {
              text: title,
              attach: linkDetails.attach
            }
          });
        }
        ctrl.focus();
      });
      ctrl.on('click', function (e) {
        if (ctrl.value().length === 0 && e.target.nodeName === 'INPUT') {
          autocomplete('');
        }
      });
      ctrl.on('PostRender', function () {
        ctrl.getRoot().on('submit', function (e) {
          if (!e.isDefaultPrevented()) {
            addToHistory(ctrl.value(), fileType);
          }
        });
      });
    };
    var statusToUiState = function (result) {
      var status = result.status, message = result.message;
      if (status === 'valid') {
        return {
          status: 'ok',
          message: message
        };
      } else if (status === 'unknown') {
        return {
          status: 'warn',
          message: message
        };
      } else if (status === 'invalid') {
        return {
          status: 'warn',
          message: message
        };
      } else {
        return {
          status: 'none',
          message: ''
        };
      }
    };
    var setupLinkValidatorHandler = function (ctrl, editorSettings, fileType) {
      var validatorHandler = editorSettings.filepicker_validator_handler;
      if (validatorHandler) {
        var validateUrl_1 = function (url) {
          if (url.length === 0) {
            ctrl.statusLevel('none');
            return;
          }
          validatorHandler({
            url: url,
            type: fileType
          }, function (result) {
            var uiState = statusToUiState(result);
            ctrl.statusMessage(uiState.message);
            ctrl.statusLevel(uiState.status);
          });
        };
        ctrl.state.on('change:value', function (e) {
          validateUrl_1(e.value);
        });
      }
    };
    var FilePicker = ComboBox.extend({
      Statics: { clearHistory: clearHistory },
      init: function (settings) {
        var self = this, editor = getActiveEditor(), editorSettings = editor.settings;
        var actionCallback, fileBrowserCallback, fileBrowserCallbackTypes;
        var fileType = settings.filetype;
        settings.spellcheck = false;
        fileBrowserCallbackTypes = editorSettings.file_picker_types || editorSettings.file_browser_callback_types;
        if (fileBrowserCallbackTypes) {
          fileBrowserCallbackTypes = global$2.makeMap(fileBrowserCallbackTypes, /[, ]/);
        }
        if (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType]) {
          fileBrowserCallback = editorSettings.file_picker_callback;
          if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
            actionCallback = function () {
              var meta = self.fire('beforecall').meta;
              meta = global$2.extend({ filetype: fileType }, meta);
              fileBrowserCallback.call(editor, function (value, meta) {
                self.value(value).fire('change', { meta: meta });
              }, self.value(), meta);
            };
          } else {
            fileBrowserCallback = editorSettings.file_browser_callback;
            if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
              actionCallback = function () {
                fileBrowserCallback(self.getEl('inp').id, self.value(), fileType, window);
              };
            }
          }
        }
        if (actionCallback) {
          settings.icon = 'browse';
          settings.onaction = actionCallback;
        }
        self._super(settings);
        self.classes.add('filepicker');
        setupAutoCompleteHandler(self, editorSettings, editor.getBody(), fileType);
        setupLinkValidatorHandler(self, editorSettings, fileType);
      }
    });

    var FitLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var contLayoutRect = container.layoutRect(), paddingBox = container.paddingBox;
        container.items().filter(':visible').each(function (ctrl) {
          ctrl.layoutRect({
            x: paddingBox.left,
            y: paddingBox.top,
            w: contLayoutRect.innerW - paddingBox.right - paddingBox.left,
            h: contLayoutRect.innerH - paddingBox.top - paddingBox.bottom
          });
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      }
    });

    var FlexLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var i, l, items, contLayoutRect, contPaddingBox, contSettings, align, pack, spacing, totalFlex, availableSpace, direction;
        var ctrl, ctrlLayoutRect, ctrlSettings, flex;
        var maxSizeItems = [];
        var size, maxSize, ratio, rect, pos, maxAlignEndPos;
        var sizeName, minSizeName, posName, maxSizeName, beforeName, innerSizeName, deltaSizeName, contentSizeName;
        var alignAxisName, alignInnerSizeName, alignSizeName, alignMinSizeName, alignBeforeName, alignAfterName;
        var alignDeltaSizeName, alignContentSizeName;
        var max = Math.max, min = Math.min;
        items = container.items().filter(':visible');
        contLayoutRect = container.layoutRect();
        contPaddingBox = container.paddingBox;
        contSettings = container.settings;
        direction = container.isRtl() ? contSettings.direction || 'row-reversed' : contSettings.direction;
        align = contSettings.align;
        pack = container.isRtl() ? contSettings.pack || 'end' : contSettings.pack;
        spacing = contSettings.spacing || 0;
        if (direction === 'row-reversed' || direction === 'column-reverse') {
          items = items.set(items.toArray().reverse());
          direction = direction.split('-')[0];
        }
        if (direction === 'column') {
          posName = 'y';
          sizeName = 'h';
          minSizeName = 'minH';
          maxSizeName = 'maxH';
          innerSizeName = 'innerH';
          beforeName = 'top';
          deltaSizeName = 'deltaH';
          contentSizeName = 'contentH';
          alignBeforeName = 'left';
          alignSizeName = 'w';
          alignAxisName = 'x';
          alignInnerSizeName = 'innerW';
          alignMinSizeName = 'minW';
          alignAfterName = 'right';
          alignDeltaSizeName = 'deltaW';
          alignContentSizeName = 'contentW';
        } else {
          posName = 'x';
          sizeName = 'w';
          minSizeName = 'minW';
          maxSizeName = 'maxW';
          innerSizeName = 'innerW';
          beforeName = 'left';
          deltaSizeName = 'deltaW';
          contentSizeName = 'contentW';
          alignBeforeName = 'top';
          alignSizeName = 'h';
          alignAxisName = 'y';
          alignInnerSizeName = 'innerH';
          alignMinSizeName = 'minH';
          alignAfterName = 'bottom';
          alignDeltaSizeName = 'deltaH';
          alignContentSizeName = 'contentH';
        }
        availableSpace = contLayoutRect[innerSizeName] - contPaddingBox[beforeName] - contPaddingBox[beforeName];
        maxAlignEndPos = totalFlex = 0;
        for (i = 0, l = items.length; i < l; i++) {
          ctrl = items[i];
          ctrlLayoutRect = ctrl.layoutRect();
          ctrlSettings = ctrl.settings;
          flex = ctrlSettings.flex;
          availableSpace -= i < l - 1 ? spacing : 0;
          if (flex > 0) {
            totalFlex += flex;
            if (ctrlLayoutRect[maxSizeName]) {
              maxSizeItems.push(ctrl);
            }
            ctrlLayoutRect.flex = flex;
          }
          availableSpace -= ctrlLayoutRect[minSizeName];
          size = contPaddingBox[alignBeforeName] + ctrlLayoutRect[alignMinSizeName] + contPaddingBox[alignAfterName];
          if (size > maxAlignEndPos) {
            maxAlignEndPos = size;
          }
        }
        rect = {};
        if (availableSpace < 0) {
          rect[minSizeName] = contLayoutRect[minSizeName] - availableSpace + contLayoutRect[deltaSizeName];
        } else {
          rect[minSizeName] = contLayoutRect[innerSizeName] - availableSpace + contLayoutRect[deltaSizeName];
        }
        rect[alignMinSizeName] = maxAlignEndPos + contLayoutRect[alignDeltaSizeName];
        rect[contentSizeName] = contLayoutRect[innerSizeName] - availableSpace;
        rect[alignContentSizeName] = maxAlignEndPos;
        rect.minW = min(rect.minW, contLayoutRect.maxW);
        rect.minH = min(rect.minH, contLayoutRect.maxH);
        rect.minW = max(rect.minW, contLayoutRect.startMinWidth);
        rect.minH = max(rect.minH, contLayoutRect.startMinHeight);
        if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
          rect.w = rect.minW;
          rect.h = rect.minH;
          container.layoutRect(rect);
          this.recalc(container);
          if (container._lastRect === null) {
            var parentCtrl = container.parent();
            if (parentCtrl) {
              parentCtrl._lastRect = null;
              parentCtrl.recalc();
            }
          }
          return;
        }
        ratio = availableSpace / totalFlex;
        for (i = 0, l = maxSizeItems.length; i < l; i++) {
          ctrl = maxSizeItems[i];
          ctrlLayoutRect = ctrl.layoutRect();
          maxSize = ctrlLayoutRect[maxSizeName];
          size = ctrlLayoutRect[minSizeName] + ctrlLayoutRect.flex * ratio;
          if (size > maxSize) {
            availableSpace -= ctrlLayoutRect[maxSizeName] - ctrlLayoutRect[minSizeName];
            totalFlex -= ctrlLayoutRect.flex;
            ctrlLayoutRect.flex = 0;
            ctrlLayoutRect.maxFlexSize = maxSize;
          } else {
            ctrlLayoutRect.maxFlexSize = 0;
          }
        }
        ratio = availableSpace / totalFlex;
        pos = contPaddingBox[beforeName];
        rect = {};
        if (totalFlex === 0) {
          if (pack === 'end') {
            pos = availableSpace + contPaddingBox[beforeName];
          } else if (pack === 'center') {
            pos = Math.round(contLayoutRect[innerSizeName] / 2 - (contLayoutRect[innerSizeName] - availableSpace) / 2) + contPaddingBox[beforeName];
            if (pos < 0) {
              pos = contPaddingBox[beforeName];
            }
          } else if (pack === 'justify') {
            pos = contPaddingBox[beforeName];
            spacing = Math.floor(availableSpace / (items.length - 1));
          }
        }
        rect[alignAxisName] = contPaddingBox[alignBeforeName];
        for (i = 0, l = items.length; i < l; i++) {
          ctrl = items[i];
          ctrlLayoutRect = ctrl.layoutRect();
          size = ctrlLayoutRect.maxFlexSize || ctrlLayoutRect[minSizeName];
          if (align === 'center') {
            rect[alignAxisName] = Math.round(contLayoutRect[alignInnerSizeName] / 2 - ctrlLayoutRect[alignSizeName] / 2);
          } else if (align === 'stretch') {
            rect[alignSizeName] = max(ctrlLayoutRect[alignMinSizeName] || 0, contLayoutRect[alignInnerSizeName] - contPaddingBox[alignBeforeName] - contPaddingBox[alignAfterName]);
            rect[alignAxisName] = contPaddingBox[alignBeforeName];
          } else if (align === 'end') {
            rect[alignAxisName] = contLayoutRect[alignInnerSizeName] - ctrlLayoutRect[alignSizeName] - contPaddingBox.top;
          }
          if (ctrlLayoutRect.flex > 0) {
            size += ctrlLayoutRect.flex * ratio;
          }
          rect[sizeName] = size;
          rect[posName] = pos;
          ctrl.layoutRect(rect);
          if (ctrl.recalc) {
            ctrl.recalc();
          }
          pos += size + spacing;
        }
      }
    });

    var FlowLayout = Layout.extend({
      Defaults: {
        containerClass: 'flow-layout',
        controlClass: 'flow-layout-item',
        endClass: 'break'
      },
      recalc: function (container) {
        container.items().filter(':visible').each(function (ctrl) {
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        });
      },
      isNative: function () {
        return true;
      }
    });

    var descendant = function (scope, selector) {
      return one(selector, scope);
    };

    var toggleFormat = function (editor, fmt) {
      return function () {
        editor.execCommand('mceToggleFormat', false, fmt);
      };
    };
    var addFormatChangedListener = function (editor, name, changed) {
      var handler = function (state) {
        changed(state, name);
      };
      if (editor.formatter) {
        editor.formatter.formatChanged(name, handler);
      } else {
        editor.on('init', function () {
          editor.formatter.formatChanged(name, handler);
        });
      }
    };
    var postRenderFormatToggle = function (editor, name) {
      return function (e) {
        addFormatChangedListener(editor, name, function (state) {
          e.control.active(state);
        });
      };
    };

    var register = function (editor) {
      var alignFormats = [
        'alignleft',
        'aligncenter',
        'alignright',
        'alignjustify'
      ];
      var defaultAlign = 'alignleft';
      var alignMenuItems = [
        {
          text: 'Left',
          icon: 'alignleft',
          onclick: toggleFormat(editor, 'alignleft')
        },
        {
          text: 'Center',
          icon: 'aligncenter',
          onclick: toggleFormat(editor, 'aligncenter')
        },
        {
          text: 'Right',
          icon: 'alignright',
          onclick: toggleFormat(editor, 'alignright')
        },
        {
          text: 'Justify',
          icon: 'alignjustify',
          onclick: toggleFormat(editor, 'alignjustify')
        }
      ];
      editor.addMenuItem('align', {
        text: 'Align',
        menu: alignMenuItems
      });
      editor.addButton('align', {
        type: 'menubutton',
        icon: defaultAlign,
        menu: alignMenuItems,
        onShowMenu: function (e) {
          var menu = e.control.menu;
          global$2.each(alignFormats, function (formatName, idx) {
            menu.items().eq(idx).each(function (item) {
              return item.active(editor.formatter.match(formatName));
            });
          });
        },
        onPostRender: function (e) {
          var ctrl = e.control;
          global$2.each(alignFormats, function (formatName, idx) {
            addFormatChangedListener(editor, formatName, function (state) {
              ctrl.icon(defaultAlign);
              if (state) {
                ctrl.icon(formatName);
              }
            });
          });
        }
      });
      global$2.each({
        alignleft: [
          'Align left',
          'JustifyLeft'
        ],
        aligncenter: [
          'Align center',
          'JustifyCenter'
        ],
        alignright: [
          'Align right',
          'JustifyRight'
        ],
        alignjustify: [
          'Justify',
          'JustifyFull'
        ],
        alignnone: [
          'No alignment',
          'JustifyNone'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          active: false,
          tooltip: item[0],
          cmd: item[1],
          onPostRender: postRenderFormatToggle(editor, name)
        });
      });
    };
    var Align = { register: register };

    var getFirstFont = function (fontFamily) {
      return fontFamily ? fontFamily.split(',')[0] : '';
    };
    var findMatchingValue = function (items, fontFamily) {
      var font = fontFamily ? fontFamily.toLowerCase() : '';
      var value;
      global$2.each(items, function (item) {
        if (item.value.toLowerCase() === font) {
          value = item.value;
        }
      });
      global$2.each(items, function (item) {
        if (!value && getFirstFont(item.value).toLowerCase() === getFirstFont(font).toLowerCase()) {
          value = item.value;
        }
      });
      return value;
    };
    var createFontNameListBoxChangeHandler = function (editor, items) {
      return function () {
        var self = this;
        self.state.set('value', null);
        editor.on('init nodeChange', function (e) {
          var fontFamily = editor.queryCommandValue('FontName');
          var match = findMatchingValue(items, fontFamily);
          self.value(match ? match : null);
          if (!match && fontFamily) {
            self.text(getFirstFont(fontFamily));
          }
        });
      };
    };
    var createFormats = function (formats) {
      formats = formats.replace(/;$/, '').split(';');
      var i = formats.length;
      while (i--) {
        formats[i] = formats[i].split('=');
      }
      return formats;
    };
    var getFontItems = function (editor) {
      var defaultFontsFormats = 'Andale Mono=andale mono,monospace;' + 'Arial=arial,helvetica,sans-serif;' + 'Arial Black=arial black,sans-serif;' + 'Book Antiqua=book antiqua,palatino,serif;' + 'Comic Sans MS=comic sans ms,sans-serif;' + 'Courier New=courier new,courier,monospace;' + 'Georgia=georgia,palatino,serif;' + 'Helvetica=helvetica,arial,sans-serif;' + 'Impact=impact,sans-serif;' + 'Symbol=symbol;' + 'Tahoma=tahoma,arial,helvetica,sans-serif;' + 'Terminal=terminal,monaco,monospace;' + 'Times New Roman=times new roman,times,serif;' + 'Trebuchet MS=trebuchet ms,geneva,sans-serif;' + 'Verdana=verdana,geneva,sans-serif;' + 'Webdings=webdings;' + 'Wingdings=wingdings,zapf dingbats';
      var fonts = createFormats(editor.settings.font_formats || defaultFontsFormats);
      return global$2.map(fonts, function (font) {
        return {
          text: { raw: font[0] },
          value: font[1],
          textStyle: font[1].indexOf('dings') === -1 ? 'font-family:' + font[1] : ''
        };
      });
    };
    var registerButtons = function (editor) {
      editor.addButton('fontselect', function () {
        var items = getFontItems(editor);
        return {
          type: 'listbox',
          text: 'Font Family',
          tooltip: 'Font Family',
          values: items,
          fixedWidth: true,
          onPostRender: createFontNameListBoxChangeHandler(editor, items),
          onselect: function (e) {
            if (e.control.settings.value) {
              editor.execCommand('FontName', false, e.control.settings.value);
            }
          }
        };
      });
    };
    var register$1 = function (editor) {
      registerButtons(editor);
    };
    var FontSelect = { register: register$1 };

    var round = function (number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    };
    var toPt = function (fontSize, precision) {
      if (/[0-9.]+px$/.test(fontSize)) {
        return round(parseInt(fontSize, 10) * 72 / 96, precision || 0) + 'pt';
      }
      return fontSize;
    };
    var findMatchingValue$1 = function (items, pt, px) {
      var value;
      global$2.each(items, function (item) {
        if (item.value === px) {
          value = px;
        } else if (item.value === pt) {
          value = pt;
        }
      });
      return value;
    };
    var createFontSizeListBoxChangeHandler = function (editor, items) {
      return function () {
        var self = this;
        editor.on('init nodeChange', function (e) {
          var px, pt, precision, match;
          px = editor.queryCommandValue('FontSize');
          if (px) {
            for (precision = 3; !match && precision >= 0; precision--) {
              pt = toPt(px, precision);
              match = findMatchingValue$1(items, pt, px);
            }
          }
          self.value(match ? match : null);
          if (!match) {
            self.text(pt);
          }
        });
      };
    };
    var getFontSizeItems = function (editor) {
      var defaultFontsizeFormats = '8pt 10pt 12pt 14pt 18pt 24pt 36pt';
      var fontsizeFormats = editor.settings.fontsize_formats || defaultFontsizeFormats;
      return global$2.map(fontsizeFormats.split(' '), function (item) {
        var text = item, value = item;
        var values = item.split('=');
        if (values.length > 1) {
          text = values[0];
          value = values[1];
        }
        return {
          text: text,
          value: value
        };
      });
    };
    var registerButtons$1 = function (editor) {
      editor.addButton('fontsizeselect', function () {
        var items = getFontSizeItems(editor);
        return {
          type: 'listbox',
          text: 'Font Sizes',
          tooltip: 'Font Sizes',
          values: items,
          fixedWidth: true,
          onPostRender: createFontSizeListBoxChangeHandler(editor, items),
          onclick: function (e) {
            if (e.control.settings.value) {
              editor.execCommand('FontSize', false, e.control.settings.value);
            }
          }
        };
      });
    };
    var register$2 = function (editor) {
      registerButtons$1(editor);
    };
    var FontSizeSelect = { register: register$2 };

    var hideMenuObjects = function (editor, menu) {
      var count = menu.length;
      global$2.each(menu, function (item) {
        if (item.menu) {
          item.hidden = hideMenuObjects(editor, item.menu) === 0;
        }
        var formatName = item.format;
        if (formatName) {
          item.hidden = !editor.formatter.canApply(formatName);
        }
        if (item.hidden) {
          count--;
        }
      });
      return count;
    };
    var hideFormatMenuItems = function (editor, menu) {
      var count = menu.items().length;
      menu.items().each(function (item) {
        if (item.menu) {
          item.visible(hideFormatMenuItems(editor, item.menu) > 0);
        }
        if (!item.menu && item.settings.menu) {
          item.visible(hideMenuObjects(editor, item.settings.menu) > 0);
        }
        var formatName = item.settings.format;
        if (formatName) {
          item.visible(editor.formatter.canApply(formatName));
        }
        if (!item.visible()) {
          count--;
        }
      });
      return count;
    };
    var createFormatMenu = function (editor) {
      var count = 0;
      var newFormats = [];
      var defaultStyleFormats = [
        {
          title: 'Headings',
          items: [
            {
              title: 'Heading 1',
              format: 'h1'
            },
            {
              title: 'Heading 2',
              format: 'h2'
            },
            {
              title: 'Heading 3',
              format: 'h3'
            },
            {
              title: 'Heading 4',
              format: 'h4'
            },
            {
              title: 'Heading 5',
              format: 'h5'
            },
            {
              title: 'Heading 6',
              format: 'h6'
            }
          ]
        },
        {
          title: 'Inline',
          items: [
            {
              title: 'Bold',
              icon: 'bold',
              format: 'bold'
            },
            {
              title: 'Italic',
              icon: 'italic',
              format: 'italic'
            },
            {
              title: 'Underline',
              icon: 'underline',
              format: 'underline'
            },
            {
              title: 'Strikethrough',
              icon: 'strikethrough',
              format: 'strikethrough'
            },
            {
              title: 'Superscript',
              icon: 'superscript',
              format: 'superscript'
            },
            {
              title: 'Subscript',
              icon: 'subscript',
              format: 'subscript'
            },
            {
              title: 'Code',
              icon: 'code',
              format: 'code'
            }
          ]
        },
        {
          title: 'Blocks',
          items: [
            {
              title: 'Paragraph',
              format: 'p'
            },
            {
              title: 'Blockquote',
              format: 'blockquote'
            },
            {
              title: 'Div',
              format: 'div'
            },
            {
              title: 'Pre',
              format: 'pre'
            }
          ]
        },
        {
          title: 'Alignment',
          items: [
            {
              title: 'Left',
              icon: 'alignleft',
              format: 'alignleft'
            },
            {
              title: 'Center',
              icon: 'aligncenter',
              format: 'aligncenter'
            },
            {
              title: 'Right',
              icon: 'alignright',
              format: 'alignright'
            },
            {
              title: 'Justify',
              icon: 'alignjustify',
              format: 'alignjustify'
            }
          ]
        }
      ];
      var createMenu = function (formats) {
        var menu = [];
        if (!formats) {
          return;
        }
        global$2.each(formats, function (format) {
          var menuItem = {
            text: format.title,
            icon: format.icon
          };
          if (format.items) {
            menuItem.menu = createMenu(format.items);
          } else {
            var formatName = format.format || 'custom' + count++;
            if (!format.format) {
              format.name = formatName;
              newFormats.push(format);
            }
            menuItem.format = formatName;
            menuItem.cmd = format.cmd;
          }
          menu.push(menuItem);
        });
        return menu;
      };
      var createStylesMenu = function () {
        var menu;
        if (editor.settings.style_formats_merge) {
          if (editor.settings.style_formats) {
            menu = createMenu(defaultStyleFormats.concat(editor.settings.style_formats));
          } else {
            menu = createMenu(defaultStyleFormats);
          }
        } else {
          menu = createMenu(editor.settings.style_formats || defaultStyleFormats);
        }
        return menu;
      };
      editor.on('init', function () {
        global$2.each(newFormats, function (format) {
          editor.formatter.register(format.name, format);
        });
      });
      return {
        type: 'menu',
        items: createStylesMenu(),
        onPostRender: function (e) {
          editor.fire('renderFormatsMenu', { control: e.control });
        },
        itemDefaults: {
          preview: true,
          textStyle: function () {
            if (this.settings.format) {
              return editor.formatter.getCssText(this.settings.format);
            }
          },
          onPostRender: function () {
            var self = this;
            self.parent().on('show', function () {
              var formatName, command;
              formatName = self.settings.format;
              if (formatName) {
                self.disabled(!editor.formatter.canApply(formatName));
                self.active(editor.formatter.match(formatName));
              }
              command = self.settings.cmd;
              if (command) {
                self.active(editor.queryCommandState(command));
              }
            });
          },
          onclick: function () {
            if (this.settings.format) {
              toggleFormat(editor, this.settings.format)();
            }
            if (this.settings.cmd) {
              editor.execCommand(this.settings.cmd);
            }
          }
        }
      };
    };
    var registerMenuItems = function (editor, formatMenu) {
      editor.addMenuItem('formats', {
        text: 'Formats',
        menu: formatMenu
      });
    };
    var registerButtons$2 = function (editor, formatMenu) {
      editor.addButton('styleselect', {
        type: 'menubutton',
        text: 'Formats',
        menu: formatMenu,
        onShowMenu: function () {
          if (editor.settings.style_formats_autohide) {
            hideFormatMenuItems(editor, this.menu);
          }
        }
      });
    };
    var register$3 = function (editor) {
      var formatMenu = createFormatMenu(editor);
      registerMenuItems(editor, formatMenu);
      registerButtons$2(editor, formatMenu);
    };
    var Formats = { register: register$3 };

    var defaultBlocks = 'Paragraph=p;' + 'Heading 1=h1;' + 'Heading 2=h2;' + 'Heading 3=h3;' + 'Heading 4=h4;' + 'Heading 5=h5;' + 'Heading 6=h6;' + 'Preformatted=pre';
    var createFormats$1 = function (formats) {
      formats = formats.replace(/;$/, '').split(';');
      var i = formats.length;
      while (i--) {
        formats[i] = formats[i].split('=');
      }
      return formats;
    };
    var createListBoxChangeHandler = function (editor, items, formatName) {
      return function () {
        var self = this;
        editor.on('nodeChange', function (e) {
          var formatter = editor.formatter;
          var value = null;
          global$2.each(e.parents, function (node) {
            global$2.each(items, function (item) {
              if (formatName) {
                if (formatter.matchNode(node, formatName, { value: item.value })) {
                  value = item.value;
                }
              } else {
                if (formatter.matchNode(node, item.value)) {
                  value = item.value;
                }
              }
              if (value) {
                return false;
              }
            });
            if (value) {
              return false;
            }
          });
          self.value(value);
        });
      };
    };
    var lazyFormatSelectBoxItems = function (editor, blocks) {
      return function () {
        var items = [];
        global$2.each(blocks, function (block) {
          items.push({
            text: block[0],
            value: block[1],
            textStyle: function () {
              return editor.formatter.getCssText(block[1]);
            }
          });
        });
        return {
          type: 'listbox',
          text: blocks[0][0],
          values: items,
          fixedWidth: true,
          onselect: function (e) {
            if (e.control) {
              var fmt = e.control.value();
              toggleFormat(editor, fmt)();
            }
          },
          onPostRender: createListBoxChangeHandler(editor, items)
        };
      };
    };
    var buildMenuItems = function (editor, blocks) {
      return global$2.map(blocks, function (block) {
        return {
          text: block[0],
          onclick: toggleFormat(editor, block[1]),
          textStyle: function () {
            return editor.formatter.getCssText(block[1]);
          }
        };
      });
    };
    var register$4 = function (editor) {
      var blocks = createFormats$1(editor.settings.block_formats || defaultBlocks);
      editor.addMenuItem('blockformats', {
        text: 'Blocks',
        menu: buildMenuItems(editor, blocks)
      });
      editor.addButton('formatselect', lazyFormatSelectBoxItems(editor, blocks));
    };
    var FormatSelect = { register: register$4 };

    var createCustomMenuItems = function (editor, names) {
      var items, nameList;
      if (typeof names === 'string') {
        nameList = names.split(' ');
      } else if (global$2.isArray(names)) {
        return flatten(global$2.map(names, function (names) {
          return createCustomMenuItems(editor, names);
        }));
      }
      items = global$2.grep(nameList, function (name) {
        return name === '|' || name in editor.menuItems;
      });
      return global$2.map(items, function (name) {
        return name === '|' ? { text: '-' } : editor.menuItems[name];
      });
    };
    var isSeparator$1 = function (menuItem) {
      return menuItem && menuItem.text === '-';
    };
    var trimMenuItems = function (menuItems) {
      var menuItems2 = filter(menuItems, function (menuItem, i, menuItems) {
        return !isSeparator$1(menuItem) || !isSeparator$1(menuItems[i - 1]);
      });
      return filter(menuItems2, function (menuItem, i, menuItems) {
        return !isSeparator$1(menuItem) || i > 0 && i < menuItems.length - 1;
      });
    };
    var createContextMenuItems = function (editor, context) {
      var outputMenuItems = [{ text: '-' }];
      var menuItems = global$2.grep(editor.menuItems, function (menuItem) {
        return menuItem.context === context;
      });
      global$2.each(menuItems, function (menuItem) {
        if (menuItem.separator === 'before') {
          outputMenuItems.push({ text: '|' });
        }
        if (menuItem.prependToContext) {
          outputMenuItems.unshift(menuItem);
        } else {
          outputMenuItems.push(menuItem);
        }
        if (menuItem.separator === 'after') {
          outputMenuItems.push({ text: '|' });
        }
      });
      return outputMenuItems;
    };
    var createInsertMenu = function (editor) {
      var insertButtonItems = editor.settings.insert_button_items;
      if (insertButtonItems) {
        return trimMenuItems(createCustomMenuItems(editor, insertButtonItems));
      } else {
        return trimMenuItems(createContextMenuItems(editor, 'insert'));
      }
    };
    var registerButtons$3 = function (editor) {
      editor.addButton('insert', {
        type: 'menubutton',
        icon: 'insert',
        menu: [],
        oncreatemenu: function () {
          this.menu.add(createInsertMenu(editor));
          this.menu.renderNew();
        }
      });
    };
    var register$5 = function (editor) {
      registerButtons$3(editor);
    };
    var InsertButton = { register: register$5 };

    var registerFormatButtons = function (editor) {
      global$2.each({
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        superscript: 'Superscript'
      }, function (text, name) {
        editor.addButton(name, {
          active: false,
          tooltip: text,
          onPostRender: postRenderFormatToggle(editor, name),
          onclick: toggleFormat(editor, name)
        });
      });
    };
    var registerCommandButtons = function (editor) {
      global$2.each({
        outdent: [
          'Decrease indent',
          'Outdent'
        ],
        indent: [
          'Increase indent',
          'Indent'
        ],
        cut: [
          'Cut',
          'Cut'
        ],
        copy: [
          'Copy',
          'Copy'
        ],
        paste: [
          'Paste',
          'Paste'
        ],
        help: [
          'Help',
          'mceHelp'
        ],
        selectall: [
          'Select all',
          'SelectAll'
        ],
        visualaid: [
          'Visual aids',
          'mceToggleVisualAid'
        ],
        newdocument: [
          'New document',
          'mceNewDocument'
        ],
        removeformat: [
          'Clear formatting',
          'RemoveFormat'
        ],
        remove: [
          'Remove',
          'Delete'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          tooltip: item[0],
          cmd: item[1]
        });
      });
    };
    var registerCommandToggleButtons = function (editor) {
      global$2.each({
        blockquote: [
          'Blockquote',
          'mceBlockQuote'
        ],
        subscript: [
          'Subscript',
          'Subscript'
        ],
        superscript: [
          'Superscript',
          'Superscript'
        ]
      }, function (item, name) {
        editor.addButton(name, {
          active: false,
          tooltip: item[0],
          cmd: item[1],
          onPostRender: postRenderFormatToggle(editor, name)
        });
      });
    };
    var registerButtons$4 = function (editor) {
      registerFormatButtons(editor);
      registerCommandButtons(editor);
      registerCommandToggleButtons(editor);
    };
    var registerMenuItems$1 = function (editor) {
      global$2.each({
        bold: [
          'Bold',
          'Bold',
          'Meta+B'
        ],
        italic: [
          'Italic',
          'Italic',
          'Meta+I'
        ],
        underline: [
          'Underline',
          'Underline',
          'Meta+U'
        ],
        strikethrough: [
          'Strikethrough',
          'Strikethrough'
        ],
        subscript: [
          'Subscript',
          'Subscript'
        ],
        superscript: [
          'Superscript',
          'Superscript'
        ],
        removeformat: [
          'Clear formatting',
          'RemoveFormat'
        ],
        newdocument: [
          'New document',
          'mceNewDocument'
        ],
        cut: [
          'Cut',
          'Cut',
          'Meta+X'
        ],
        copy: [
          'Copy',
          'Copy',
          'Meta+C'
        ],
        paste: [
          'Paste',
          'Paste',
          'Meta+V'
        ],
        selectall: [
          'Select all',
          'SelectAll',
          'Meta+A'
        ]
      }, function (item, name) {
        editor.addMenuItem(name, {
          text: item[0],
          icon: name,
          shortcut: item[2],
          cmd: item[1]
        });
      });
      editor.addMenuItem('codeformat', {
        text: 'Code',
        icon: 'code',
        onclick: toggleFormat(editor, 'code')
      });
    };
    var register$6 = function (editor) {
      registerButtons$4(editor);
      registerMenuItems$1(editor);
    };
    var SimpleControls = { register: register$6 };

    var toggleUndoRedoState = function (editor, type) {
      return function () {
        var self = this;
        var checkState = function () {
          var typeFn = type === 'redo' ? 'hasRedo' : 'hasUndo';
          return editor.undoManager ? editor.undoManager[typeFn]() : false;
        };
        self.disabled(!checkState());
        editor.on('Undo Redo AddUndo TypingUndo ClearUndos SwitchMode', function () {
          self.disabled(editor.readonly || !checkState());
        });
      };
    };
    var registerMenuItems$2 = function (editor) {
      editor.addMenuItem('undo', {
        text: 'Undo',
        icon: 'undo',
        shortcut: 'Meta+Z',
        onPostRender: toggleUndoRedoState(editor, 'undo'),
        cmd: 'undo'
      });
      editor.addMenuItem('redo', {
        text: 'Redo',
        icon: 'redo',
        shortcut: 'Meta+Y',
        onPostRender: toggleUndoRedoState(editor, 'redo'),
        cmd: 'redo'
      });
    };
    var registerButtons$5 = function (editor) {
      editor.addButton('undo', {
        tooltip: 'Undo',
        onPostRender: toggleUndoRedoState(editor, 'undo'),
        cmd: 'undo'
      });
      editor.addButton('redo', {
        tooltip: 'Redo',
        onPostRender: toggleUndoRedoState(editor, 'redo'),
        cmd: 'redo'
      });
    };
    var register$7 = function (editor) {
      registerMenuItems$2(editor);
      registerButtons$5(editor);
    };
    var UndoRedo = { register: register$7 };

    var toggleVisualAidState = function (editor) {
      return function () {
        var self = this;
        editor.on('VisualAid', function (e) {
          self.active(e.hasVisual);
        });
        self.active(editor.hasVisual);
      };
    };
    var registerMenuItems$3 = function (editor) {
      editor.addMenuItem('visualaid', {
        text: 'Visual aids',
        selectable: true,
        onPostRender: toggleVisualAidState(editor),
        cmd: 'mceToggleVisualAid'
      });
    };
    var register$8 = function (editor) {
      registerMenuItems$3(editor);
    };
    var VisualAid = { register: register$8 };

    var setupEnvironment = function () {
      Widget.tooltips = !global$8.iOS;
      Control$1.translate = function (text) {
        return global$1.translate(text);
      };
    };
    var setupUiContainer = function (editor) {
      if (editor.settings.ui_container) {
        global$8.container = descendant(Element.fromDom(domGlobals.document.body), editor.settings.ui_container).fold(constant(null), function (elm) {
          return elm.dom();
        });
      }
    };
    var setupRtlMode = function (editor) {
      if (editor.rtl) {
        Control$1.rtl = true;
      }
    };
    var setupHideFloatPanels = function (editor) {
      editor.on('mousedown progressstate', function () {
        FloatPanel.hideAll();
      });
    };
    var setup$1 = function (editor) {
      setupRtlMode(editor);
      setupHideFloatPanels(editor);
      setupUiContainer(editor);
      setupEnvironment();
      FormatSelect.register(editor);
      Align.register(editor);
      SimpleControls.register(editor);
      UndoRedo.register(editor);
      FontSizeSelect.register(editor);
      FontSelect.register(editor);
      Formats.register(editor);
      VisualAid.register(editor);
      InsertButton.register(editor);
    };
    var FormatControls = { setup: setup$1 };

    var GridLayout = AbsoluteLayout.extend({
      recalc: function (container) {
        var settings, rows, cols, items, contLayoutRect, width, height, rect, ctrlLayoutRect, ctrl, x, y, posX, posY, ctrlSettings, contPaddingBox, align, spacingH, spacingV, alignH, alignV, maxX, maxY;
        var colWidths = [];
        var rowHeights = [];
        var ctrlMinWidth, ctrlMinHeight, availableWidth, availableHeight, reverseRows, idx;
        settings = container.settings;
        items = container.items().filter(':visible');
        contLayoutRect = container.layoutRect();
        cols = settings.columns || Math.ceil(Math.sqrt(items.length));
        rows = Math.ceil(items.length / cols);
        spacingH = settings.spacingH || settings.spacing || 0;
        spacingV = settings.spacingV || settings.spacing || 0;
        alignH = settings.alignH || settings.align;
        alignV = settings.alignV || settings.align;
        contPaddingBox = container.paddingBox;
        reverseRows = 'reverseRows' in settings ? settings.reverseRows : container.isRtl();
        if (alignH && typeof alignH === 'string') {
          alignH = [alignH];
        }
        if (alignV && typeof alignV === 'string') {
          alignV = [alignV];
        }
        for (x = 0; x < cols; x++) {
          colWidths.push(0);
        }
        for (y = 0; y < rows; y++) {
          rowHeights.push(0);
        }
        for (y = 0; y < rows; y++) {
          for (x = 0; x < cols; x++) {
            ctrl = items[y * cols + x];
            if (!ctrl) {
              break;
            }
            ctrlLayoutRect = ctrl.layoutRect();
            ctrlMinWidth = ctrlLayoutRect.minW;
            ctrlMinHeight = ctrlLayoutRect.minH;
            colWidths[x] = ctrlMinWidth > colWidths[x] ? ctrlMinWidth : colWidths[x];
            rowHeights[y] = ctrlMinHeight > rowHeights[y] ? ctrlMinHeight : rowHeights[y];
          }
        }
        availableWidth = contLayoutRect.innerW - contPaddingBox.left - contPaddingBox.right;
        for (maxX = 0, x = 0; x < cols; x++) {
          maxX += colWidths[x] + (x > 0 ? spacingH : 0);
          availableWidth -= (x > 0 ? spacingH : 0) + colWidths[x];
        }
        availableHeight = contLayoutRect.innerH - contPaddingBox.top - contPaddingBox.bottom;
        for (maxY = 0, y = 0; y < rows; y++) {
          maxY += rowHeights[y] + (y > 0 ? spacingV : 0);
          availableHeight -= (y > 0 ? spacingV : 0) + rowHeights[y];
        }
        maxX += contPaddingBox.left + contPaddingBox.right;
        maxY += contPaddingBox.top + contPaddingBox.bottom;
        rect = {};
        rect.minW = maxX + (contLayoutRect.w - contLayoutRect.innerW);
        rect.minH = maxY + (contLayoutRect.h - contLayoutRect.innerH);
        rect.contentW = rect.minW - contLayoutRect.deltaW;
        rect.contentH = rect.minH - contLayoutRect.deltaH;
        rect.minW = Math.min(rect.minW, contLayoutRect.maxW);
        rect.minH = Math.min(rect.minH, contLayoutRect.maxH);
        rect.minW = Math.max(rect.minW, contLayoutRect.startMinWidth);
        rect.minH = Math.max(rect.minH, contLayoutRect.startMinHeight);
        if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
          rect.w = rect.minW;
          rect.h = rect.minH;
          container.layoutRect(rect);
          this.recalc(container);
          if (container._lastRect === null) {
            var parentCtrl = container.parent();
            if (parentCtrl) {
              parentCtrl._lastRect = null;
              parentCtrl.recalc();
            }
          }
          return;
        }
        if (contLayoutRect.autoResize) {
          rect = container.layoutRect(rect);
          rect.contentW = rect.minW - contLayoutRect.deltaW;
          rect.contentH = rect.minH - contLayoutRect.deltaH;
        }
        var flexV;
        if (settings.packV === 'start') {
          flexV = 0;
        } else {
          flexV = availableHeight > 0 ? Math.floor(availableHeight / rows) : 0;
        }
        var totalFlex = 0;
        var flexWidths = settings.flexWidths;
        if (flexWidths) {
          for (x = 0; x < flexWidths.length; x++) {
            totalFlex += flexWidths[x];
          }
        } else {
          totalFlex = cols;
        }
        var ratio = availableWidth / totalFlex;
        for (x = 0; x < cols; x++) {
          colWidths[x] += flexWidths ? flexWidths[x] * ratio : ratio;
        }
        posY = contPaddingBox.top;
        for (y = 0; y < rows; y++) {
          posX = contPaddingBox.left;
          height = rowHeights[y] + flexV;
          for (x = 0; x < cols; x++) {
            if (reverseRows) {
              idx = y * cols + cols - 1 - x;
            } else {
              idx = y * cols + x;
            }
            ctrl = items[idx];
            if (!ctrl) {
              break;
            }
            ctrlSettings = ctrl.settings;
            ctrlLayoutRect = ctrl.layoutRect();
            width = Math.max(colWidths[x], ctrlLayoutRect.startMinWidth);
            ctrlLayoutRect.x = posX;
            ctrlLayoutRect.y = posY;
            align = ctrlSettings.alignH || (alignH ? alignH[x] || alignH[0] : null);
            if (align === 'center') {
              ctrlLayoutRect.x = posX + width / 2 - ctrlLayoutRect.w / 2;
            } else if (align === 'right') {
              ctrlLayoutRect.x = posX + width - ctrlLayoutRect.w;
            } else if (align === 'stretch') {
              ctrlLayoutRect.w = width;
            }
            align = ctrlSettings.alignV || (alignV ? alignV[x] || alignV[0] : null);
            if (align === 'center') {
              ctrlLayoutRect.y = posY + height / 2 - ctrlLayoutRect.h / 2;
            } else if (align === 'bottom') {
              ctrlLayoutRect.y = posY + height - ctrlLayoutRect.h;
            } else if (align === 'stretch') {
              ctrlLayoutRect.h = height;
            }
            ctrl.layoutRect(ctrlLayoutRect);
            posX += width + spacingH;
            if (ctrl.recalc) {
              ctrl.recalc();
            }
          }
          posY += height + spacingV;
        }
      }
    });

    var Iframe$1 = Widget.extend({
      renderHtml: function () {
        var self = this;
        self.classes.add('iframe');
        self.canFocus = false;
        return '<iframe id="' + self._id + '" class="' + self.classes + '" tabindex="-1" src="' + (self.settings.url || 'javascript:\'\'') + '" frameborder="0"></iframe>';
      },
      src: function (src) {
        this.getEl().src = src;
      },
      html: function (html, callback) {
        var self = this, body = this.getEl().contentWindow.document.body;
        if (!body) {
          global$7.setTimeout(function () {
            self.html(html);
          });
        } else {
          body.innerHTML = html;
          if (callback) {
            callback();
          }
        }
        return this;
      }
    });

    var InfoBox = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('widget').add('infobox');
        self.canFocus = false;
      },
      severity: function (level) {
        this.classes.remove('error');
        this.classes.remove('warning');
        this.classes.remove('success');
        this.classes.add(level);
      },
      help: function (state) {
        this.state.set('help', state);
      },
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + self.encode(self.state.get('text')) + '<button role="button" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-help"></i>' + '</button>' + '</div>' + '</div>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.getEl('body').firstChild.data = self.encode(e.value);
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        self.state.on('change:help', function (e) {
          self.classes.toggle('has-help', e.value);
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        return self._super();
      }
    });

    var Label = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('widget').add('label');
        self.canFocus = false;
        if (settings.multiline) {
          self.classes.add('autoscroll');
        }
        if (settings.strong) {
          self.classes.add('strong');
        }
      },
      initLayoutRect: function () {
        var self = this, layoutRect = self._super();
        if (self.settings.multiline) {
          var size = funcs.getSize(self.getEl());
          if (size.width > layoutRect.maxW) {
            layoutRect.minW = layoutRect.maxW;
            self.classes.add('multiline');
          }
          self.getEl().style.width = layoutRect.minW + 'px';
          layoutRect.startMinH = layoutRect.h = layoutRect.minH = Math.min(layoutRect.maxH, funcs.getSize(self.getEl()).height);
        }
        return layoutRect;
      },
      repaint: function () {
        var self = this;
        if (!self.settings.multiline) {
          self.getEl().style.lineHeight = self.layoutRect().h + 'px';
        }
        return self._super();
      },
      severity: function (level) {
        this.classes.remove('error');
        this.classes.remove('warning');
        this.classes.remove('success');
        this.classes.add(level);
      },
      renderHtml: function () {
        var self = this;
        var targetCtrl, forName, forId = self.settings.forId;
        var text = self.settings.html ? self.settings.html : self.encode(self.state.get('text'));
        if (!forId && (forName = self.settings.forName)) {
          targetCtrl = self.getRoot().find('#' + forName)[0];
          if (targetCtrl) {
            forId = targetCtrl._id;
          }
        }
        if (forId) {
          return '<label id="' + self._id + '" class="' + self.classes + '"' + (forId ? ' for="' + forId + '"' : '') + '>' + text + '</label>';
        }
        return '<span id="' + self._id + '" class="' + self.classes + '">' + text + '</span>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:text', function (e) {
          self.innerHtml(self.encode(e.value));
          if (self.state.get('rendered')) {
            self.updateLayoutRect();
          }
        });
        return self._super();
      }
    });

    var Toolbar$1 = Container.extend({
      Defaults: {
        role: 'toolbar',
        layout: 'flow'
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('toolbar');
      },
      postRender: function () {
        var self = this;
        self.items().each(function (ctrl) {
          ctrl.classes.add('toolbar-item');
        });
        return self._super();
      }
    });

    var MenuBar = Toolbar$1.extend({
      Defaults: {
        role: 'menubar',
        containerCls: 'menubar',
        ariaRoot: true,
        defaults: { type: 'menubutton' }
      }
    });

    function isChildOf$1(node, parent) {
      while (node) {
        if (parent === node) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
    var MenuButton = Button.extend({
      init: function (settings) {
        var self = this;
        self._renderOpen = true;
        self._super(settings);
        settings = self.settings;
        self.classes.add('menubtn');
        if (settings.fixedWidth) {
          self.classes.add('fixed-width');
        }
        self.aria('haspopup', true);
        self.state.set('menu', settings.menu || self.render());
      },
      showMenu: function (toggle) {
        var self = this;
        var menu;
        if (self.menu && self.menu.visible() && toggle !== false) {
          return self.hideMenu();
        }
        if (!self.menu) {
          menu = self.state.get('menu') || [];
          self.classes.add('opened');
          if (menu.length) {
            menu = {
              type: 'menu',
              animate: true,
              items: menu
            };
          } else {
            menu.type = menu.type || 'menu';
            menu.animate = true;
          }
          if (!menu.renderTo) {
            self.menu = global$4.create(menu).parent(self).renderTo();
          } else {
            self.menu = menu.parent(self).show().renderTo();
          }
          self.fire('createmenu');
          self.menu.reflow();
          self.menu.on('cancel', function (e) {
            if (e.control.parent() === self.menu) {
              e.stopPropagation();
              self.focus();
              self.hideMenu();
            }
          });
          self.menu.on('select', function () {
            self.focus();
          });
          self.menu.on('show hide', function (e) {
            if (e.type === 'hide' && e.control.parent() === self) {
              self.classes.remove('opened-under');
            }
            if (e.control === self.menu) {
              self.activeMenu(e.type === 'show');
              self.classes.toggle('opened', e.type === 'show');
            }
            self.aria('expanded', e.type === 'show');
          }).fire('show');
        }
        self.menu.show();
        self.menu.layoutRect({ w: self.layoutRect().w });
        self.menu.repaint();
        self.menu.moveRel(self.getEl(), self.isRtl() ? [
          'br-tr',
          'tr-br'
        ] : [
          'bl-tl',
          'tl-bl'
        ]);
        var menuLayoutRect = self.menu.layoutRect();
        var selfBottom = self.$el.offset().top + self.layoutRect().h;
        if (selfBottom > menuLayoutRect.y && selfBottom < menuLayoutRect.y + menuLayoutRect.h) {
          self.classes.add('opened-under');
        }
        self.fire('showmenu');
      },
      hideMenu: function () {
        var self = this;
        if (self.menu) {
          self.menu.items().each(function (item) {
            if (item.hideMenu) {
              item.hideMenu();
            }
          });
          self.menu.hide();
        }
      },
      activeMenu: function (state) {
        this.classes.toggle('active', state);
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix;
        var icon = self.settings.icon, image;
        var text = self.state.get('text');
        var textHtml = '';
        image = self.settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = domGlobals.window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        if (text) {
          self.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
        }
        icon = self.settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        self.aria('role', self.parent() instanceof MenuBar ? 'menuitem' : 'button');
        return '<div id="' + id + '" class="' + self.classes + '" tabindex="-1" aria-labelledby="' + id + '">' + '<button id="' + id + '-open" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self.on('click', function (e) {
          if (e.control === self && isChildOf$1(e.target, self.getEl())) {
            self.focus();
            self.showMenu(!e.aria);
            if (e.aria) {
              self.menu.items().filter(':visible')[0].focus();
            }
          }
        });
        self.on('mouseenter', function (e) {
          var overCtrl = e.control;
          var parent = self.parent();
          var hasVisibleSiblingMenu;
          if (overCtrl && parent && overCtrl instanceof MenuButton && overCtrl.parent() === parent) {
            parent.items().filter('MenuButton').each(function (ctrl) {
              if (ctrl.hideMenu && ctrl !== overCtrl) {
                if (ctrl.menu && ctrl.menu.visible()) {
                  hasVisibleSiblingMenu = true;
                }
                ctrl.hideMenu();
              }
            });
            if (hasVisibleSiblingMenu) {
              overCtrl.focus();
              overCtrl.showMenu();
            }
          }
        });
        return self._super();
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:menu', function () {
          if (self.menu) {
            self.menu.remove();
          }
          self.menu = null;
        });
        return self._super();
      },
      remove: function () {
        this._super();
        if (this.menu) {
          this.menu.remove();
        }
      }
    });

    var Menu = FloatPanel.extend({
      Defaults: {
        defaultType: 'menuitem',
        border: 1,
        layout: 'stack',
        role: 'application',
        bodyRole: 'menu',
        ariaRoot: true
      },
      init: function (settings) {
        var self = this;
        settings.autohide = true;
        settings.constrainToViewport = true;
        if (typeof settings.items === 'function') {
          settings.itemsFactory = settings.items;
          settings.items = [];
        }
        if (settings.itemDefaults) {
          var items = settings.items;
          var i = items.length;
          while (i--) {
            items[i] = global$2.extend({}, settings.itemDefaults, items[i]);
          }
        }
        self._super(settings);
        self.classes.add('menu');
        if (settings.animate && global$8.ie !== 11) {
          self.classes.add('animate');
        }
      },
      repaint: function () {
        this.classes.toggle('menu-align', true);
        this._super();
        this.getEl().style.height = '';
        this.getEl('body').style.height = '';
        return this;
      },
      cancel: function () {
        var self = this;
        self.hideAll();
        self.fire('select');
      },
      load: function () {
        var self = this;
        var time, factory;
        function hideThrobber() {
          if (self.throbber) {
            self.throbber.hide();
            self.throbber = null;
          }
        }
        factory = self.settings.itemsFactory;
        if (!factory) {
          return;
        }
        if (!self.throbber) {
          self.throbber = new Throbber(self.getEl('body'), true);
          if (self.items().length === 0) {
            self.throbber.show();
            self.fire('loading');
          } else {
            self.throbber.show(100, function () {
              self.items().remove();
              self.fire('loading');
            });
          }
          self.on('hide close', hideThrobber);
        }
        self.requestTime = time = new Date().getTime();
        self.settings.itemsFactory(function (items) {
          if (items.length === 0) {
            self.hide();
            return;
          }
          if (self.requestTime !== time) {
            return;
          }
          self.getEl().style.width = '';
          self.getEl('body').style.width = '';
          hideThrobber();
          self.items().remove();
          self.getEl('body').innerHTML = '';
          self.add(items);
          self.renderNew();
          self.fire('loaded');
        });
      },
      hideAll: function () {
        var self = this;
        this.find('menuitem').exec('hideMenu');
        return self._super();
      },
      preRender: function () {
        var self = this;
        self.items().each(function (ctrl) {
          var settings = ctrl.settings;
          if (settings.icon || settings.image || settings.selectable) {
            self._hasIcons = true;
            return false;
          }
        });
        if (self.settings.itemsFactory) {
          self.on('postrender', function () {
            if (self.settings.itemsFactory) {
              self.load();
            }
          });
        }
        self.on('show hide', function (e) {
          if (e.control === self) {
            if (e.type === 'show') {
              global$7.setTimeout(function () {
                self.classes.add('in');
              }, 0);
            } else {
              self.classes.remove('in');
            }
          }
        });
        return self._super();
      }
    });

    var ListBox = MenuButton.extend({
      init: function (settings) {
        var self = this;
        var values, selected, selectedText, lastItemCtrl;
        function setSelected(menuValues) {
          for (var i = 0; i < menuValues.length; i++) {
            selected = menuValues[i].selected || settings.value === menuValues[i].value;
            if (selected) {
              selectedText = selectedText || menuValues[i].text;
              self.state.set('value', menuValues[i].value);
              return true;
            }
            if (menuValues[i].menu) {
              if (setSelected(menuValues[i].menu)) {
                return true;
              }
            }
          }
        }
        self._super(settings);
        settings = self.settings;
        self._values = values = settings.values;
        if (values) {
          if (typeof settings.value !== 'undefined') {
            setSelected(values);
          }
          if (!selected && values.length > 0) {
            selectedText = values[0].text;
            self.state.set('value', values[0].value);
          }
          self.state.set('menu', values);
        }
        self.state.set('text', settings.text || selectedText);
        self.classes.add('listbox');
        self.on('select', function (e) {
          var ctrl = e.control;
          if (lastItemCtrl) {
            e.lastControl = lastItemCtrl;
          }
          if (settings.multiple) {
            ctrl.active(!ctrl.active());
          } else {
            self.value(e.control.value());
          }
          lastItemCtrl = ctrl;
        });
      },
      value: function (value) {
        if (arguments.length === 0) {
          return this.state.get('value');
        }
        if (typeof value === 'undefined') {
          return this;
        }
        function valueExists(values) {
          return exists(values, function (a) {
            return a.menu ? valueExists(a.menu) : a.value === value;
          });
        }
        if (this.settings.values) {
          if (valueExists(this.settings.values)) {
            this.state.set('value', value);
          } else if (value === null) {
            this.state.set('value', null);
          }
        } else {
          this.state.set('value', value);
        }
        return this;
      },
      bindStates: function () {
        var self = this;
        function activateMenuItemsByValue(menu, value) {
          if (menu instanceof Menu) {
            menu.items().each(function (ctrl) {
              if (!ctrl.hasMenus()) {
                ctrl.active(ctrl.value() === value);
              }
            });
          }
        }
        function getSelectedItem(menuValues, value) {
          var selectedItem;
          if (!menuValues) {
            return;
          }
          for (var i = 0; i < menuValues.length; i++) {
            if (menuValues[i].value === value) {
              return menuValues[i];
            }
            if (menuValues[i].menu) {
              selectedItem = getSelectedItem(menuValues[i].menu, value);
              if (selectedItem) {
                return selectedItem;
              }
            }
          }
        }
        self.on('show', function (e) {
          activateMenuItemsByValue(e.control, self.value());
        });
        self.state.on('change:value', function (e) {
          var selectedItem = getSelectedItem(self.state.get('menu'), e.value);
          if (selectedItem) {
            self.text(selectedItem.text);
          } else {
            self.text(self.settings.text);
          }
        });
        return self._super();
      }
    });

    var toggleTextStyle = function (ctrl, state) {
      var textStyle = ctrl._textStyle;
      if (textStyle) {
        var textElm = ctrl.getEl('text');
        textElm.setAttribute('style', textStyle);
        if (state) {
          textElm.style.color = '';
          textElm.style.backgroundColor = '';
        }
      }
    };
    var MenuItem = Widget.extend({
      Defaults: {
        border: 0,
        role: 'menuitem'
      },
      init: function (settings) {
        var self = this;
        var text;
        self._super(settings);
        settings = self.settings;
        self.classes.add('menu-item');
        if (settings.menu) {
          self.classes.add('menu-item-expand');
        }
        if (settings.preview) {
          self.classes.add('menu-item-preview');
        }
        text = self.state.get('text');
        if (text === '-' || text === '|') {
          self.classes.add('menu-item-sep');
          self.aria('role', 'separator');
          self.state.set('text', '-');
        }
        if (settings.selectable) {
          self.aria('role', 'menuitemcheckbox');
          self.classes.add('menu-item-checkbox');
          settings.icon = 'selected';
        }
        if (!settings.preview && !settings.selectable) {
          self.classes.add('menu-item-normal');
        }
        self.on('mousedown', function (e) {
          e.preventDefault();
        });
        if (settings.menu && !settings.ariaHideMenu) {
          self.aria('haspopup', true);
        }
      },
      hasMenus: function () {
        return !!this.settings.menu;
      },
      showMenu: function () {
        var self = this;
        var settings = self.settings;
        var menu;
        var parent = self.parent();
        parent.items().each(function (ctrl) {
          if (ctrl !== self) {
            ctrl.hideMenu();
          }
        });
        if (settings.menu) {
          menu = self.menu;
          if (!menu) {
            menu = settings.menu;
            if (menu.length) {
              menu = {
                type: 'menu',
                items: menu
              };
            } else {
              menu.type = menu.type || 'menu';
            }
            if (parent.settings.itemDefaults) {
              menu.itemDefaults = parent.settings.itemDefaults;
            }
            menu = self.menu = global$4.create(menu).parent(self).renderTo();
            menu.reflow();
            menu.on('cancel', function (e) {
              e.stopPropagation();
              self.focus();
              menu.hide();
            });
            menu.on('show hide', function (e) {
              if (e.control.items) {
                e.control.items().each(function (ctrl) {
                  ctrl.active(ctrl.settings.selected);
                });
              }
            }).fire('show');
            menu.on('hide', function (e) {
              if (e.control === menu) {
                self.classes.remove('selected');
              }
            });
            menu.submenu = true;
          } else {
            menu.show();
          }
          menu._parentMenu = parent;
          menu.classes.add('menu-sub');
          var rel = menu.testMoveRel(self.getEl(), self.isRtl() ? [
            'tl-tr',
            'bl-br',
            'tr-tl',
            'br-bl'
          ] : [
            'tr-tl',
            'br-bl',
            'tl-tr',
            'bl-br'
          ]);
          menu.moveRel(self.getEl(), rel);
          menu.rel = rel;
          rel = 'menu-sub-' + rel;
          menu.classes.remove(menu._lastRel).add(rel);
          menu._lastRel = rel;
          self.classes.add('selected');
          self.aria('expanded', true);
        }
      },
      hideMenu: function () {
        var self = this;
        if (self.menu) {
          self.menu.items().each(function (item) {
            if (item.hideMenu) {
              item.hideMenu();
            }
          });
          self.menu.hide();
          self.aria('expanded', false);
        }
        return self;
      },
      renderHtml: function () {
        var self = this;
        var id = self._id;
        var settings = self.settings;
        var prefix = self.classPrefix;
        var text = self.state.get('text');
        var icon = self.settings.icon, image = '', shortcut = settings.shortcut;
        var url = self.encode(settings.url), iconHtml = '';
        function convertShortcut(shortcut) {
          var i, value, replace = {};
          if (global$8.mac) {
            replace = {
              alt: '&#x2325;',
              ctrl: '&#x2318;',
              shift: '&#x21E7;',
              meta: '&#x2318;'
            };
          } else {
            replace = { meta: 'Ctrl' };
          }
          shortcut = shortcut.split('+');
          for (i = 0; i < shortcut.length; i++) {
            value = replace[shortcut[i].toLowerCase()];
            if (value) {
              shortcut[i] = value;
            }
          }
          return shortcut.join('+');
        }
        function escapeRegExp(str) {
          return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        function markMatches(text) {
          var match = settings.match || '';
          return match ? text.replace(new RegExp(escapeRegExp(match), 'gi'), function (match) {
            return '!mce~match[' + match + ']mce~match!';
          }) : text;
        }
        function boldMatches(text) {
          return text.replace(new RegExp(escapeRegExp('!mce~match['), 'g'), '<b>').replace(new RegExp(escapeRegExp(']mce~match!'), 'g'), '</b>');
        }
        if (icon) {
          self.parent().classes.add('menu-has-icons');
        }
        if (settings.image) {
          image = ' style="background-image: url(\'' + settings.image + '\')"';
        }
        if (shortcut) {
          shortcut = convertShortcut(shortcut);
        }
        icon = prefix + 'ico ' + prefix + 'i-' + (self.settings.icon || 'none');
        iconHtml = text !== '-' ? '<i class="' + icon + '"' + image + '></i>\xA0' : '';
        text = boldMatches(self.encode(markMatches(text)));
        url = boldMatches(self.encode(markMatches(url)));
        return '<div id="' + id + '" class="' + self.classes + '" tabindex="-1">' + iconHtml + (text !== '-' ? '<span id="' + id + '-text" class="' + prefix + 'text">' + text + '</span>' : '') + (shortcut ? '<div id="' + id + '-shortcut" class="' + prefix + 'menu-shortcut">' + shortcut + '</div>' : '') + (settings.menu ? '<div class="' + prefix + 'caret"></div>' : '') + (url ? '<div class="' + prefix + 'menu-item-link">' + url + '</div>' : '') + '</div>';
      },
      postRender: function () {
        var self = this, settings = self.settings;
        var textStyle = settings.textStyle;
        if (typeof textStyle === 'function') {
          textStyle = textStyle.call(this);
        }
        if (textStyle) {
          var textElm = self.getEl('text');
          if (textElm) {
            textElm.setAttribute('style', textStyle);
            self._textStyle = textStyle;
          }
        }
        self.on('mouseenter click', function (e) {
          if (e.control === self) {
            if (!settings.menu && e.type === 'click') {
              self.fire('select');
              global$7.requestAnimationFrame(function () {
                self.parent().hideAll();
              });
            } else {
              self.showMenu();
              if (e.aria) {
                self.menu.focus(true);
              }
            }
          }
        });
        self._super();
        return self;
      },
      hover: function () {
        var self = this;
        self.parent().items().each(function (ctrl) {
          ctrl.classes.remove('selected');
        });
        self.classes.toggle('selected', true);
        return self;
      },
      active: function (state) {
        toggleTextStyle(this, state);
        if (typeof state !== 'undefined') {
          this.aria('checked', state);
        }
        return this._super(state);
      },
      remove: function () {
        this._super();
        if (this.menu) {
          this.menu.remove();
        }
      }
    });

    var Radio = Checkbox.extend({
      Defaults: {
        classes: 'radio',
        role: 'radio'
      }
    });

    var ResizeHandle = Widget.extend({
      renderHtml: function () {
        var self = this, prefix = self.classPrefix;
        self.classes.add('resizehandle');
        if (self.settings.direction === 'both') {
          self.classes.add('resizehandle-both');
        }
        self.canFocus = false;
        return '<div id="' + self._id + '" class="' + self.classes + '">' + '<i class="' + prefix + 'ico ' + prefix + 'i-resize"></i>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.resizeDragHelper = new DragHelper(this._id, {
          start: function () {
            self.fire('ResizeStart');
          },
          drag: function (e) {
            if (self.settings.direction !== 'both') {
              e.deltaX = 0;
            }
            self.fire('Resize', e);
          },
          stop: function () {
            self.fire('ResizeEnd');
          }
        });
      },
      remove: function () {
        if (this.resizeDragHelper) {
          this.resizeDragHelper.destroy();
        }
        return this._super();
      }
    });

    function createOptions(options) {
      var strOptions = '';
      if (options) {
        for (var i = 0; i < options.length; i++) {
          strOptions += '<option value="' + options[i] + '">' + options[i] + '</option>';
        }
      }
      return strOptions;
    }
    var SelectBox = Widget.extend({
      Defaults: {
        classes: 'selectbox',
        role: 'selectbox',
        options: []
      },
      init: function (settings) {
        var self = this;
        self._super(settings);
        if (self.settings.size) {
          self.size = self.settings.size;
        }
        if (self.settings.options) {
          self._options = self.settings.options;
        }
        self.on('keydown', function (e) {
          var rootControl;
          if (e.keyCode === 13) {
            e.preventDefault();
            self.parents().reverse().each(function (ctrl) {
              if (ctrl.toJSON) {
                rootControl = ctrl;
                return false;
              }
            });
            self.fire('submit', { data: rootControl.toJSON() });
          }
        });
      },
      options: function (state) {
        if (!arguments.length) {
          return this.state.get('options');
        }
        this.state.set('options', state);
        return this;
      },
      renderHtml: function () {
        var self = this;
        var options, size = '';
        options = createOptions(self._options);
        if (self.size) {
          size = ' size = "' + self.size + '"';
        }
        return '<select id="' + self._id + '" class="' + self.classes + '"' + size + '>' + options + '</select>';
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:options', function (e) {
          self.getEl().innerHTML = createOptions(e.value);
        });
        return self._super();
      }
    });

    function constrain(value, minVal, maxVal) {
      if (value < minVal) {
        value = minVal;
      }
      if (value > maxVal) {
        value = maxVal;
      }
      return value;
    }
    function setAriaProp(el, name, value) {
      el.setAttribute('aria-' + name, value);
    }
    function updateSliderHandle(ctrl, value) {
      var maxHandlePos, shortSizeName, sizeName, stylePosName, styleValue, handleEl;
      if (ctrl.settings.orientation === 'v') {
        stylePosName = 'top';
        sizeName = 'height';
        shortSizeName = 'h';
      } else {
        stylePosName = 'left';
        sizeName = 'width';
        shortSizeName = 'w';
      }
      handleEl = ctrl.getEl('handle');
      maxHandlePos = (ctrl.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
      styleValue = maxHandlePos * ((value - ctrl._minValue) / (ctrl._maxValue - ctrl._minValue)) + 'px';
      handleEl.style[stylePosName] = styleValue;
      handleEl.style.height = ctrl.layoutRect().h + 'px';
      setAriaProp(handleEl, 'valuenow', value);
      setAriaProp(handleEl, 'valuetext', '' + ctrl.settings.previewFilter(value));
      setAriaProp(handleEl, 'valuemin', ctrl._minValue);
      setAriaProp(handleEl, 'valuemax', ctrl._maxValue);
    }
    var Slider = Widget.extend({
      init: function (settings) {
        var self = this;
        if (!settings.previewFilter) {
          settings.previewFilter = function (value) {
            return Math.round(value * 100) / 100;
          };
        }
        self._super(settings);
        self.classes.add('slider');
        if (settings.orientation === 'v') {
          self.classes.add('vertical');
        }
        self._minValue = isNumber(settings.minValue) ? settings.minValue : 0;
        self._maxValue = isNumber(settings.maxValue) ? settings.maxValue : 100;
        self._initValue = self.state.get('value');
      },
      renderHtml: function () {
        var self = this, id = self._id, prefix = self.classPrefix;
        return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-handle" class="' + prefix + 'slider-handle" role="slider" tabindex="-1"></div>' + '</div>';
      },
      reset: function () {
        this.value(this._initValue).repaint();
      },
      postRender: function () {
        var self = this;
        var minValue, maxValue, screenCordName, stylePosName, sizeName, shortSizeName;
        function toFraction(min, max, val) {
          return (val + min) / (max - min);
        }
        function fromFraction(min, max, val) {
          return val * (max - min) - min;
        }
        function handleKeyboard(minValue, maxValue) {
          function alter(delta) {
            var value;
            value = self.value();
            value = fromFraction(minValue, maxValue, toFraction(minValue, maxValue, value) + delta * 0.05);
            value = constrain(value, minValue, maxValue);
            self.value(value);
            self.fire('dragstart', { value: value });
            self.fire('drag', { value: value });
            self.fire('dragend', { value: value });
          }
          self.on('keydown', function (e) {
            switch (e.keyCode) {
            case 37:
            case 38:
              alter(-1);
              break;
            case 39:
            case 40:
              alter(1);
              break;
            }
          });
        }
        function handleDrag(minValue, maxValue, handleEl) {
          var startPos, startHandlePos, maxHandlePos, handlePos, value;
          self._dragHelper = new DragHelper(self._id, {
            handle: self._id + '-handle',
            start: function (e) {
              startPos = e[screenCordName];
              startHandlePos = parseInt(self.getEl('handle').style[stylePosName], 10);
              maxHandlePos = (self.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
              self.fire('dragstart', { value: value });
            },
            drag: function (e) {
              var delta = e[screenCordName] - startPos;
              handlePos = constrain(startHandlePos + delta, 0, maxHandlePos);
              handleEl.style[stylePosName] = handlePos + 'px';
              value = minValue + handlePos / maxHandlePos * (maxValue - minValue);
              self.value(value);
              self.tooltip().text('' + self.settings.previewFilter(value)).show().moveRel(handleEl, 'bc tc');
              self.fire('drag', { value: value });
            },
            stop: function () {
              self.tooltip().hide();
              self.fire('dragend', { value: value });
            }
          });
        }
        minValue = self._minValue;
        maxValue = self._maxValue;
        if (self.settings.orientation === 'v') {
          screenCordName = 'screenY';
          stylePosName = 'top';
          sizeName = 'height';
          shortSizeName = 'h';
        } else {
          screenCordName = 'screenX';
          stylePosName = 'left';
          sizeName = 'width';
          shortSizeName = 'w';
        }
        self._super();
        handleKeyboard(minValue, maxValue);
        handleDrag(minValue, maxValue, self.getEl('handle'));
      },
      repaint: function () {
        this._super();
        updateSliderHandle(this, this.value());
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          updateSliderHandle(self, e.value);
        });
        return self._super();
      }
    });

    var Spacer = Widget.extend({
      renderHtml: function () {
        var self = this;
        self.classes.add('spacer');
        self.canFocus = false;
        return '<div id="' + self._id + '" class="' + self.classes + '"></div>';
      }
    });

    var SplitButton = MenuButton.extend({
      Defaults: {
        classes: 'widget btn splitbtn',
        role: 'button'
      },
      repaint: function () {
        var self = this;
        var elm = self.getEl();
        var rect = self.layoutRect();
        var mainButtonElm, menuButtonElm;
        self._super();
        mainButtonElm = elm.firstChild;
        menuButtonElm = elm.lastChild;
        global$9(mainButtonElm).css({
          width: rect.w - funcs.getSize(menuButtonElm).width,
          height: rect.h - 2
        });
        global$9(menuButtonElm).css({ height: rect.h - 2 });
        return self;
      },
      activeMenu: function (state) {
        var self = this;
        global$9(self.getEl().lastChild).toggleClass(self.classPrefix + 'active', state);
      },
      renderHtml: function () {
        var self = this;
        var id = self._id;
        var prefix = self.classPrefix;
        var image;
        var icon = self.state.get('icon');
        var text = self.state.get('text');
        var settings = self.settings;
        var textHtml = '', ariaPressed;
        image = settings.image;
        if (image) {
          icon = 'none';
          if (typeof image !== 'string') {
            image = domGlobals.window.getSelection ? image[0] : image[1];
          }
          image = ' style="background-image: url(\'' + image + '\')"';
        } else {
          image = '';
        }
        icon = settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
        if (text) {
          self.classes.add('btn-has-text');
          textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
        }
        ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
        return '<div id="' + id + '" class="' + self.classes + '" role="button"' + ariaPressed + ' tabindex="-1">' + '<button type="button" hidefocus="1" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + (self._menuBtnText ? (icon ? '\xA0' : '') + self._menuBtnText : '') + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
      },
      postRender: function () {
        var self = this, onClickHandler = self.settings.onclick;
        self.on('click', function (e) {
          var node = e.target;
          if (e.control === this) {
            while (node) {
              if (e.aria && e.aria.key !== 'down' || node.nodeName === 'BUTTON' && node.className.indexOf('open') === -1) {
                e.stopImmediatePropagation();
                if (onClickHandler) {
                  onClickHandler.call(this, e);
                }
                return;
              }
              node = node.parentNode;
            }
          }
        });
        delete self.settings.onclick;
        return self._super();
      }
    });

    var StackLayout = FlowLayout.extend({
      Defaults: {
        containerClass: 'stack-layout',
        controlClass: 'stack-layout-item',
        endClass: 'break'
      },
      isNative: function () {
        return true;
      }
    });

    var TabPanel = Panel.extend({
      Defaults: {
        layout: 'absolute',
        defaults: { type: 'panel' }
      },
      activateTab: function (idx) {
        var activeTabElm;
        if (this.activeTabId) {
          activeTabElm = this.getEl(this.activeTabId);
          global$9(activeTabElm).removeClass(this.classPrefix + 'active');
          activeTabElm.setAttribute('aria-selected', 'false');
        }
        this.activeTabId = 't' + idx;
        activeTabElm = this.getEl('t' + idx);
        activeTabElm.setAttribute('aria-selected', 'true');
        global$9(activeTabElm).addClass(this.classPrefix + 'active');
        this.items()[idx].show().fire('showtab');
        this.reflow();
        this.items().each(function (item, i) {
          if (idx !== i) {
            item.hide();
          }
        });
      },
      renderHtml: function () {
        var self = this;
        var layout = self._layout;
        var tabsHtml = '';
        var prefix = self.classPrefix;
        self.preRender();
        layout.preRender(self);
        self.items().each(function (ctrl, i) {
          var id = self._id + '-t' + i;
          ctrl.aria('role', 'tabpanel');
          ctrl.aria('labelledby', id);
          tabsHtml += '<div id="' + id + '" class="' + prefix + 'tab" ' + 'unselectable="on" role="tab" aria-controls="' + ctrl._id + '" aria-selected="false" tabIndex="-1">' + self.encode(ctrl.settings.title) + '</div>';
        });
        return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + '<div id="' + self._id + '-head" class="' + prefix + 'tabs" role="tablist">' + tabsHtml + '</div>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>' + '</div>';
      },
      postRender: function () {
        var self = this;
        self._super();
        self.settings.activeTab = self.settings.activeTab || 0;
        self.activateTab(self.settings.activeTab);
        this.on('click', function (e) {
          var targetParent = e.target.parentNode;
          if (targetParent && targetParent.id === self._id + '-head') {
            var i = targetParent.childNodes.length;
            while (i--) {
              if (targetParent.childNodes[i] === e.target) {
                self.activateTab(i);
              }
            }
          }
        });
      },
      initLayoutRect: function () {
        var self = this;
        var rect, minW, minH;
        minW = funcs.getSize(self.getEl('head')).width;
        minW = minW < 0 ? 0 : minW;
        minH = 0;
        self.items().each(function (item) {
          minW = Math.max(minW, item.layoutRect().minW);
          minH = Math.max(minH, item.layoutRect().minH);
        });
        self.items().each(function (ctrl) {
          ctrl.settings.x = 0;
          ctrl.settings.y = 0;
          ctrl.settings.w = minW;
          ctrl.settings.h = minH;
          ctrl.layoutRect({
            x: 0,
            y: 0,
            w: minW,
            h: minH
          });
        });
        var headH = funcs.getSize(self.getEl('head')).height;
        self.settings.minWidth = minW;
        self.settings.minHeight = minH + headH;
        rect = self._super();
        rect.deltaH += headH;
        rect.innerH = rect.h - rect.deltaH;
        return rect;
      }
    });

    var TextBox = Widget.extend({
      init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('textbox');
        if (settings.multiline) {
          self.classes.add('multiline');
        } else {
          self.on('keydown', function (e) {
            var rootControl;
            if (e.keyCode === 13) {
              e.preventDefault();
              self.parents().reverse().each(function (ctrl) {
                if (ctrl.toJSON) {
                  rootControl = ctrl;
                  return false;
                }
              });
              self.fire('submit', { data: rootControl.toJSON() });
            }
          });
          self.on('keyup', function (e) {
            self.state.set('value', e.target.value);
          });
        }
      },
      repaint: function () {
        var self = this;
        var style, rect, borderBox, borderW, borderH = 0, lastRepaintRect;
        style = self.getEl().style;
        rect = self._layoutRect;
        lastRepaintRect = self._lastRepaintRect || {};
        var doc = domGlobals.document;
        if (!self.settings.multiline && doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
          style.lineHeight = rect.h - borderH + 'px';
        }
        borderBox = self.borderBox;
        borderW = borderBox.left + borderBox.right + 8;
        borderH = borderBox.top + borderBox.bottom + (self.settings.multiline ? 8 : 0);
        if (rect.x !== lastRepaintRect.x) {
          style.left = rect.x + 'px';
          lastRepaintRect.x = rect.x;
        }
        if (rect.y !== lastRepaintRect.y) {
          style.top = rect.y + 'px';
          lastRepaintRect.y = rect.y;
        }
        if (rect.w !== lastRepaintRect.w) {
          style.width = rect.w - borderW + 'px';
          lastRepaintRect.w = rect.w;
        }
        if (rect.h !== lastRepaintRect.h) {
          style.height = rect.h - borderH + 'px';
          lastRepaintRect.h = rect.h;
        }
        self._lastRepaintRect = lastRepaintRect;
        self.fire('repaint', {}, false);
        return self;
      },
      renderHtml: function () {
        var self = this;
        var settings = self.settings;
        var attrs, elm;
        attrs = {
          id: self._id,
          hidefocus: '1'
        };
        global$2.each([
          'rows',
          'spellcheck',
          'maxLength',
          'size',
          'readonly',
          'min',
          'max',
          'step',
          'list',
          'pattern',
          'placeholder',
          'required',
          'multiple'
        ], function (name) {
          attrs[name] = settings[name];
        });
        if (self.disabled()) {
          attrs.disabled = 'disabled';
        }
        if (settings.subtype) {
          attrs.type = settings.subtype;
        }
        elm = funcs.create(settings.multiline ? 'textarea' : 'input', attrs);
        elm.value = self.state.get('value');
        elm.className = self.classes.toString();
        return elm.outerHTML;
      },
      value: function (value) {
        if (arguments.length) {
          this.state.set('value', value);
          return this;
        }
        if (this.state.get('rendered')) {
          this.state.set('value', this.getEl().value);
        }
        return this.state.get('value');
      },
      postRender: function () {
        var self = this;
        self.getEl().value = self.state.get('value');
        self._super();
        self.$el.on('change', function (e) {
          self.state.set('value', e.target.value);
          self.fire('change', e);
        });
      },
      bindStates: function () {
        var self = this;
        self.state.on('change:value', function (e) {
          if (self.getEl().value !== e.value) {
            self.getEl().value = e.value;
          }
        });
        self.state.on('change:disabled', function (e) {
          self.getEl().disabled = e.value;
        });
        return self._super();
      },
      remove: function () {
        this.$el.off();
        this._super();
      }
    });

    var getApi = function () {
      return {
        Selector: Selector,
        Collection: Collection$2,
        ReflowQueue: ReflowQueue,
        Control: Control$1,
        Factory: global$4,
        KeyboardNavigation: KeyboardNavigation,
        Container: Container,
        DragHelper: DragHelper,
        Scrollable: Scrollable,
        Panel: Panel,
        Movable: Movable,
        Resizable: Resizable,
        FloatPanel: FloatPanel,
        Window: Window,
        MessageBox: MessageBox,
        Tooltip: Tooltip,
        Widget: Widget,
        Progress: Progress,
        Notification: Notification,
        Layout: Layout,
        AbsoluteLayout: AbsoluteLayout,
        Button: Button,
        ButtonGroup: ButtonGroup,
        Checkbox: Checkbox,
        ComboBox: ComboBox,
        ColorBox: ColorBox,
        PanelButton: PanelButton,
        ColorButton: ColorButton,
        ColorPicker: ColorPicker,
        Path: Path,
        ElementPath: ElementPath,
        FormItem: FormItem,
        Form: Form,
        FieldSet: FieldSet,
        FilePicker: FilePicker,
        FitLayout: FitLayout,
        FlexLayout: FlexLayout,
        FlowLayout: FlowLayout,
        FormatControls: FormatControls,
        GridLayout: GridLayout,
        Iframe: Iframe$1,
        InfoBox: InfoBox,
        Label: Label,
        Toolbar: Toolbar$1,
        MenuBar: MenuBar,
        MenuButton: MenuButton,
        MenuItem: MenuItem,
        Throbber: Throbber,
        Menu: Menu,
        ListBox: ListBox,
        Radio: Radio,
        ResizeHandle: ResizeHandle,
        SelectBox: SelectBox,
        Slider: Slider,
        Spacer: Spacer,
        SplitButton: SplitButton,
        StackLayout: StackLayout,
        TabPanel: TabPanel,
        TextBox: TextBox,
        DropZone: DropZone,
        BrowseButton: BrowseButton
      };
    };
    var appendTo = function (target) {
      if (target.ui) {
        global$2.each(getApi(), function (ref, key) {
          target.ui[key] = ref;
        });
      } else {
        target.ui = getApi();
      }
    };
    var registerToFactory = function () {
      global$2.each(getApi(), function (ref, key) {
        global$4.add(key, ref);
      });
    };
    var Api = {
      appendTo: appendTo,
      registerToFactory: registerToFactory
    };

    Api.registerToFactory();
    Api.appendTo(window.tinymce ? window.tinymce : {});
    global.add('modern', function (editor) {
      FormatControls.setup(editor);
      return ThemeApi.get(editor);
    });
    function Theme () {
    }

    return Theme;

}(window));
})();


/***/ }),

/***/ "./node_modules/tinymce/tinymce.min.js":
/*!*********************************************!*\
  !*** ./node_modules/tinymce/tinymce.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 4.9.6 (2019-09-02)

/***/ }),

/***/ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExtTinymceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceRoutingModule", function() { return ExtTinymceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ext-tinymce.component */ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.ts");




var routes = [
    {
        path: '',
        component: _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_3__["ExtTinymceComponent"]
    }
];
var ExtTinymceRoutingModule = /** @class */ (function () {
    function ExtTinymceRoutingModule() {
    }
    ExtTinymceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExtTinymceRoutingModule);
    return ExtTinymceRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Tinymce Editor\" [options]=\"false\">\n      <app-tinymce [(ngModel)]='basicContent' #tinymce='tinymce'></app-tinymce>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0ZW5zaW9uL2VkaXRvci9leHQtdGlueW1jZS9leHQtdGlueW1jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExtTinymceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceComponent", function() { return ExtTinymceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/tinymce/tinymce.min.js */ "./node_modules/tinymce/tinymce.min.js");
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_2__);



var ExtTinymceComponent = /** @class */ (function () {
    function ExtTinymceComponent() {
    }
    ExtTinymceComponent.prototype.ngOnInit = function () {
        this.basicContent = '<p>Hello...</p>';
    };
    ExtTinymceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ext-tinymce',
            template: __webpack_require__(/*! ./ext-tinymce.component.html */ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.html"),
            styles: [__webpack_require__(/*! ./ext-tinymce.component.scss */ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtTinymceComponent);
    return ExtTinymceComponent;
}());



/***/ }),

/***/ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExtTinymceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceModule", function() { return ExtTinymceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ext-tinymce-routing.module */ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts");
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ext-tinymce.component */ "./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-tinymce */ "./node_modules/angular2-tinymce/fesm5/angular2-tinymce.js");







var ExtTinymceModule = /** @class */ (function () {
    function ExtTinymceModule() {
    }
    ExtTinymceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExtTinymceRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_tinymce__WEBPACK_IMPORTED_MODULE_6__["TinymceModule"]
            ],
            declarations: [_ext_tinymce_component__WEBPACK_IMPORTED_MODULE_4__["ExtTinymceComponent"]]
        })
    ], ExtTinymceModule);
    return ExtTinymceModule;
}());



/***/ })

}]);
//# sourceMappingURL=ext-tinymce-ext-tinymce-module.js.map