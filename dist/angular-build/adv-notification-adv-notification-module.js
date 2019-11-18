(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-notification-adv-notification-module"],{

/***/ "./node_modules/ng2-toasty/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-toasty/index.js ***!
  \******************************************/
/*! exports provided: providers, ToastyModule, ToastOptions, ToastData, ToastyConfig, ToastyEventType, ToastyEvent, toastyServiceFactory, ToastyService, ToastyComponent, ToastComponent, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/toasty.service */ "./node_modules/ng2-toasty/src/toasty.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["toastyServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"]; });

/* harmony import */ var _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/toasty.component */ "./node_modules/ng2-toasty/src/toasty.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"]; });

/* harmony import */ var _src_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/toast.component */ "./node_modules/ng2-toasty/src/toast.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return _src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]; });

/* harmony import */ var _src_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/shared */ "./node_modules/ng2-toasty/src/shared.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return _src_shared__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]; });

// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty










var providers = [
    _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"],
    { provide: _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], useFactory: _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["toastyServiceFactory"], deps: [_src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"]] }
];
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"], _src_shared__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]],
                    exports: [_src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"]],
                    providers: providers
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = function () { return []; };
    return ToastyModule;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/shared.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-toasty/src/shared.js ***!
  \***********************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'safeHtml' },] },
    ];
    /** @nocollapse */
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"], },
    ]; };
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toast.component.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toast.component.js ***!
  \********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty

/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-toast',
                    template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        'toast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closeToastEvent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['closeToast',] },],
    };
    return ToastComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.component.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.component.js ***!
  \*********************************************************/
/*! exports provided: ToastyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return ToastyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasty_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasty.utils */ "./node_modules/ng2-toasty/src/toasty.utils.js");
/* harmony import */ var _toasty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasty.service */ "./node_modules/ng2-toasty/src/toasty.service.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty



/**
 * Toasty is container for Toast components
 */
var ToastyComponent = (function () {
    function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent.POSITIONS.length; i++) {
                    if (ToastyComponent.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    ToastyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-toasty',
                    template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    ToastyComponent.ctorParameters = function () { return [
        { type: _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"], },
        { type: _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], },
    ]; };
    ToastyComponent.propDecorators = {
        'position': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ToastyComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.service.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.service.js ***!
  \*******************************************************/
/*! exports provided: ToastOptions, ToastData, ToastyConfig, ToastyEventType, ToastyEvent, toastyServiceFactory, ToastyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return ToastyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return toastyServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return ToastyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasty_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasty.utils */ "./node_modules/ng2-toasty/src/toasty.utils.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty



/**
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastOptions.ctorParameters = function () { return []; };
    return ToastOptions;
}());

/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastData.ctorParameters = function () { return []; };
    return ToastData;
}());

/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastyConfig.ctorParameters = function () { return []; };
    return ToastyConfig;
}());

var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());

function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(options) && options !== '' || Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
            throw new Error('ng2-toasty: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            showClose: showClose,
            type: 'toasty-type-' + type,
            theme: 'toasty-theme-' + theme,
            onAdd: toastyOptions.onAdd && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastyService.ctorParameters = function () { return [
        { type: ToastyConfig, },
    ]; };
    return ToastyService;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.utils.js ***!
  \*****************************************************/
/*! exports provided: isString, isNumber, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
/**
 * Check and return true if an object is type of string
 * @param obj Analyse has to object the string type
 * @return result of analysis
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 * @param obj Analyse has to object the boolean type
 * @return result of analysis
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 * @param obj Analyse has to object the function type
 * @return result of analysis
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdvNotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvNotificationRoutingModule", function() { return AdvNotificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-notification.component */ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.ts");




var routes = [
    {
        path: '',
        component: _adv_notification_component__WEBPACK_IMPORTED_MODULE_3__["AdvNotificationComponent"]
    }
];
var AdvNotificationRoutingModule = /** @class */ (function () {
    function AdvNotificationRoutingModule() {
    }
    AdvNotificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvNotificationRoutingModule);
    return AdvNotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Notification Default\">\n      <p>Notification All Options : <code> (click) with option, title, msg, showClose, timeout, position, theme, type</code></p>\n      <button class=\"btn btn-inverse ripple light\" (click)=\"addToast({title:'Inverse Toasty', msg:'Turning standard Inverse alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'default'})\">Default</button>\n      <button class=\"btn btn-info ripple light\" (click)=\"addToast({title:'Info Toasty', msg:'Turning standard Info alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'info'})\">Info</button>\n      <button class=\"btn btn-success ripple light\" (click)=\"addToast({title:'Success Toasty', msg:'Turning standard Success alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'success'})\">Success</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Primary Toasty', msg:'Turning standard Primary alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n      <button class=\"btn btn-warning ripple\" (click)=\"addToast({title:'Warning Toasty', msg:'Turning standard Warning alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'warning'})\">Warning</button>\n      <button class=\"btn btn-danger ripple light\" (click)=\"addToast({title:'Danger Toasty', msg:'Turning standard Danger alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'error'})\">Danger/Error</button>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Notification Position\">\n      <p>This plugin has layout options where you can display it in any corner of the screen, simply click one layout corners and press the buttons on the other section to see the magic</p>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-left', closeOther:true})\">Top Left</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-right', closeOther:true})\">Top Right</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'top-center', closeOther:true})\">Top Center</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-left', closeOther:true})\">Bottom Left</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-right', closeOther:true})\">Bottom Right</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-center', closeOther:true})\">Bottom Center</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'center-center', closeOther:true})\">Center Center</button>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Notification Bootstrap\">\n      <p>Change data-type : <code> theme=\"bootstrap\"</code> to change notification color</p>\n      <button class=\"btn btn-inverse ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'default'})\">Default</button>\n      <button class=\"btn btn-info ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'info'})\">Info</button>\n      <button class=\"btn btn-success ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'success'})\">Success</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n      <button class=\"btn btn-warning ripple\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'warning'})\">Warning</button>\n      <button class=\"btn btn-danger ripple light\" (click)=\"addToast({title:'Bootstrap Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'bootstrap', position:'bottom-right', type:'error'})\">Danger/Error</button>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Notification Material\">\n      <p>Change data-type : <code> theme=\"material\"</code> to change notification color</p>\n      <button class=\"btn btn-inverse ripple light\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'default'})\">Default</button>\n      <button class=\"btn btn-info ripple light\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'info'})\">Info</button>\n      <button class=\"btn btn-success ripple light\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'success'})\">Success</button>\n      <button class=\"btn btn-primary ripple light\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'wait'})\">Primary/Wait</button>\n      <button class=\"btn btn-warning ripple\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'warning'})\">Warning</button>\n      <button class=\"btn btn-danger ripple light\" (click)=\"addToast({title:'Material Toasty', msg:'Turning standard Material alerts into awesome notifications', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})\">Danger/Error</button>\n    </app-card>\n  </div>\n</div>\n<ng2-toasty [position]=\"position\"></ng2-toasty>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1ub3RpZmljYXRpb24vYWR2LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdvNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvNotificationComponent", function() { return AdvNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");



var AdvNotificationComponent = /** @class */ (function () {
    function AdvNotificationComponent(toastyService) {
        this.toastyService = toastyService;
        this.position = 'bottom-right';
        this.showClose = true;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
    }
    AdvNotificationComponent.prototype.ngOnInit = function () {
    };
    AdvNotificationComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                /* added */
            },
            onRemove: function (toast) {
                /* removed */
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    AdvNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-notification',
            template: __webpack_require__(/*! ./adv-notification.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.html"),
            styles: [__webpack_require__(/*! ./adv-notification.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"]])
    ], AdvNotificationComponent);
    return AdvNotificationComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdvNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvNotificationModule", function() { return AdvNotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-notification-routing.module */ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification-routing.module.ts");
/* harmony import */ var _adv_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv-notification.component */ "./src/app/demo/ui-elements/ui-adv/adv-notification/adv-notification.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");







var AdvNotificationModule = /** @class */ (function () {
    function AdvNotificationModule() {
    }
    AdvNotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adv_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvNotificationRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyModule"].forRoot()
            ],
            declarations: [_adv_notification_component__WEBPACK_IMPORTED_MODULE_4__["AdvNotificationComponent"]]
        })
    ], AdvNotificationModule);
    return AdvNotificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=adv-notification-adv-notification-module.js.map