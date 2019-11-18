(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-landing-landing-module"],{

/***/ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js ***!
  \****************************************************************************************/
/*! exports provided: ScrollToModule, ScrollToService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToModule", function() { return ScrollToModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToService", function() { return ScrollToService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values for Component Input
 */
var /** @type {?} */ DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
/**
 * Easing Colleciton
 */
var /** @type {?} */ EASING = {
    easeInQuad: function (time) {
        return time * time;
    },
    easeOutQuad: function (time) {
        return time * (2 - time);
    },
    easeInOutQuad: function (time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    easeInCubic: function (time) {
        return time * time * time;
    },
    easeOutCubic: function (time) {
        return (--time) * time * time + 1;
    },
    easeInOutCubic: function (time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
    easeInQuart: function (time) {
        return time * time * time * time;
    },
    easeOutQuart: function (time) {
        return 1 - (--time) * time * time * time;
    },
    easeInOutQuart: function (time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
    },
    easeInQuint: function (time) {
        return time * time * time * time * time;
    },
    easeOutQuint: function (time) {
        return 1 + (--time) * time * time * time * time;
    },
    easeInOutQuint: function (time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
    },
    easeOutElastic: function (time) {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
var /** @type {?} */ EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"];
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param {?} value           The given value
 * @return {?} Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Scroll To Animation
 */
var /**
 * Scroll To Animation
 */
ScrollToAnimation = /** @class */ (function () {
    /**
     * Class Constructor.
     *
     * @param _container            The Container
     * @param _listenerTarget       The Element that listens for DOM Events
     * @param _isWindow             Whether or not the listener is the Window
     * @param _to                   Position to scroll to
     * @param _options              Additional options for scrolling
     * @param _isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    function ScrollToAnimation(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        var _this = this;
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation
         */
        this._loop = function () {
            _this._timeLapsed += _this._tick;
            _this._percentage = (_this._timeLapsed / _this._options.duration);
            _this._percentage = (_this._percentage > 1) ? 1 : _this._percentage;
            // Position Update
            // Position Update
            _this._position = _this._startPosition +
                ((_this._startPosition - _this._to <= 0 ? 1 : -1) *
                    _this._distance *
                    EASING[_this._options.easing](_this._percentage));
            if (_this._lastPosition !== null && _this._position === _this._lastPosition) {
                _this.stop();
            }
            else {
                _this._source$.next(_this._position);
                _this._isWindow
                    ? _this._listenerTarget.scrollTo(0, Math.floor(_this._position))
                    : _this._container.scrollTop = Math.floor(_this._position);
                _this._lastPosition = _this._position;
            }
        };
        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this._container) {
            this._startPosition = this._windowScrollTop;
        }
        else {
            this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this._container && !this._isWindow) {
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        }
        // Set Distance
        var /** @type {?} */ directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach(function (value, key) { return _this._mappedOffset = window.innerWidth > key ? value : _this._mappedOffset; });
        }
        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    ScrollToAnimation.prototype.start = /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    function () {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    };
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    ScrollToAnimation.prototype.stop = /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    function () {
        clearInterval(this._interval);
        this._interval = null;
        this._source$.complete();
    };
    return ScrollToAnimation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
var ScrollToService = /** @class */ (function () {
    /**
     * Construct and setup required paratemeters.
     *
     * @param _document         A Reference to the Document
     * @param _platformId       Angular Platform ID
     */
    function ScrollToService(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype.scrollTo = /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    function (options) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this._platformId))
            return new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]().asObservable();
        return this._start(options);
    };
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype._start = /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    function (options) {
        var _this = this;
        // Merge config with default values
        var /** @type {?} */ mergedConfigOptions = /** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, /** @type {?} */ (DEFAULTS), options));
        if (this._animation)
            this._animation.stop();
        var /** @type {?} */ targetNode = this._getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode)
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Target Element');
        var /** @type {?} */ container = this._getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container)
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Container Element');
        var /** @type {?} */ listenerTarget = this._getListenerTarget(container) || window;
        var /** @type {?} */ to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this._platformId));
        var /** @type {?} */ onInterrupt = function () { return _this._animation.stop(); };
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        var /** @type {?} */ animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    };
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    ScrollToService.prototype._subscribeToAnimation = /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    function (animation$, listenerTarget, onInterrupt) {
        var _this = this;
        var /** @type {?} */ subscription = animation$
            .subscribe(function () { }, function () { }, function () {
            _this._removeInterruptiveEventListeners(_this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    };
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    ScrollToService.prototype._getContainer = /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    function (options, targetNode) {
        var /** @type {?} */ container = null;
        if (options.container) {
            container = this._getNode(options.container, true);
        }
        else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
        }
        return container;
    };
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._addInterruptiveEventListeners = /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    function (listenerTarget, handler) {
        var _this = this;
        if (!listenerTarget)
            listenerTarget = window;
        this._interruptiveEvents
            .forEach(function (event) { return listenerTarget
            .addEventListener(event, handler, _this._supportPassive() ? { passive: true } : false); });
    };
    /**
     * Feature-detect support for passive event listeners.
     *
     * @return {?} Whether or not passive event listeners are supported
     */
    ScrollToService.prototype._supportPassive = /**
     * Feature-detect support for passive event listeners.
     *
     * @return {?} Whether or not passive event listeners are supported
     */
    function () {
        var /** @type {?} */ supportsPassive = false;
        try {
            var /** @type {?} */ opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (/** @type {?} */ e) { }
        return supportsPassive;
    };
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._removeInterruptiveEventListeners = /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    function (events, listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        events.forEach(function (event) { return listenerTarget.removeEventListener(event, handler); });
    };
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    ScrollToService.prototype._getFirstScrollableParent = /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    function (nativeElement) {
        var /** @type {?} */ style = window.getComputedStyle(nativeElement);
        var /** @type {?} */ overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed')
            return null;
        for (var /** @type {?} */ parent_1 = nativeElement; parent_1 = parent_1.parentElement; null) {
            style = window.getComputedStyle(parent_1);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent_1.tagName === 'BODY')
                return parent_1;
        }
        return null;
    };
    /**
     * Get the Target Node to scroll to.
     *
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    ScrollToService.prototype._getNode = /**
     * Get the Target Node to scroll to.
     *
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    function (id, allowBodyTag) {
        if (allowBodyTag === void 0) { allowBodyTag = false; }
        var /** @type {?} */ targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    };
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    ScrollToService.prototype._getListenerTarget = /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    function (container) {
        if (!container)
            return null;
        return this._isDocumentBody(container) ? window : container;
    };
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    ScrollToService.prototype._isDocumentBody = /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    function (element) {
        return element.tagName.toUpperCase() === 'BODY';
    };
    ScrollToService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ScrollToService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    return ScrollToService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ScrollToDirective.prototype.ngAfterViewInit = /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    function () {
        var _this = this;
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error("Unsupported Event '" + this.ngxScrollToEvent + "'");
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, function (event) {
            _this._options = {
                target: _this.ngxScrollTo,
                duration: _this.ngxScrollToDuration,
                easing: _this.ngxScrollToEasing,
                offset: _this.ngxScrollToOffset,
                offsetMap: _this.ngxScrollToOffsetMap
            };
            _this._scrollToService.scrollTo(_this._options);
        });
    };
    ScrollToDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngx-scroll-to]'
                },] }
    ];
    /** @nocollapse */
    ScrollToDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollToService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ScrollToDirective.propDecorators = {
        ngxScrollTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to',] }],
        ngxScrollToEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-event',] }],
        ngxScrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-duration',] }],
        ngxScrollToEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-easing',] }],
        ngxScrollToOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-offset',] }],
        ngxScrollToOffsetMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngx-scroll-to-offset-map',] }]
    };
    return ScrollToDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Scroll To Module
 */
var ScrollToModule = /** @class */ (function () {
    function ScrollToModule() {
    }
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return          An Angular Module with Providers
     */
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    ScrollToModule.forRoot = /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    function () {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    };
    ScrollToModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ScrollToDirective
                    ],
                    exports: [
                        ScrollToDirective
                    ]
                },] }
    ];
    return ScrollToModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlja3ktbGVuYWVycy1uZ3gtc2Nyb2xsLXRvLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvL3NyYy9hcHAvbW9kdWxlcy9zY3JvbGwtdG8vc2Nyb2xsLXRvLWhlbHBlcnMudHMiLCJuZzovL0BuaWNreS1sZW5hZXJzL25neC1zY3JvbGwtdG8vc3JjL2FwcC9tb2R1bGVzL3Njcm9sbC10by9zY3JvbGwtdG8tYW5pbWF0aW9uLnRzIiwibmc6Ly9Abmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvL3NyYy9hcHAvbW9kdWxlcy9zY3JvbGwtdG8vc2Nyb2xsLXRvLnNlcnZpY2UudHMiLCJuZzovL0BuaWNreS1sZW5hZXJzL25neC1zY3JvbGwtdG8vc3JjL2FwcC9tb2R1bGVzL3Njcm9sbC10by9zY3JvbGwtdG8uZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvL3NyYy9hcHAvbW9kdWxlcy9zY3JvbGwtdG8vc2Nyb2xsLXRvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTY3JvbGxUb0FuaW1hdGlvbkVhc2luZ0NvbGxlY3Rpb24gfSBmcm9tICcuL3Njcm9sbC10by1lYXNpbmcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9EZWZhdWx0Q29uZmlnT3B0aW9ucyB9IGZyb20gJy4vc2Nyb2xsLXRvLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuLyoqIERlZmF1bHQgdmFsdWVzIGZvciBDb21wb25lbnQgSW5wdXQgKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRTOiBTY3JvbGxUb0RlZmF1bHRDb25maWdPcHRpb25zID0ge1xyXG4gIHRhcmdldDogbnVsbCxcclxuICBhY3Rpb246ICdjbGljaycsXHJcbiAgZHVyYXRpb246IDY1MCxcclxuICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICBvZmZzZXQ6IDAsXHJcbiAgb2Zmc2V0TWFwOiBuZXcgTWFwKClcclxufTtcclxuXHJcbi8qKiBFYXNpbmcgQ29sbGVjaXRvbiAqL1xyXG5leHBvcnQgY29uc3QgRUFTSU5HOiBTY3JvbGxUb0FuaW1hdGlvbkVhc2luZ0NvbGxlY3Rpb24gPSB7XHJcbiAgZWFzZUluUXVhZDogKHRpbWU6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIHRpbWUgKiB0aW1lO1xyXG4gIH0sXHJcbiAgZWFzZU91dFF1YWQ6ICh0aW1lOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB0aW1lICogKDIgLSB0aW1lKTtcclxuICB9LFxyXG4gIGVhc2VJbk91dFF1YWQ6ICh0aW1lOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB0aW1lIDwgMC41ID8gMiAqIHRpbWUgKiB0aW1lIDogLTEgKyAoNCAtIDIgKiB0aW1lKSAqIHRpbWU7XHJcbiAgfSxcclxuICBlYXNlSW5DdWJpYzogKHRpbWU6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIHRpbWUgKiB0aW1lICogdGltZTtcclxuICB9LFxyXG4gIGVhc2VPdXRDdWJpYzogKHRpbWU6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICgtLXRpbWUpICogdGltZSAqIHRpbWUgKyAxO1xyXG4gIH0sXHJcbiAgZWFzZUluT3V0Q3ViaWM6ICh0aW1lOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB0aW1lIDwgMC41ID8gNCAqIHRpbWUgKiB0aW1lICogdGltZSA6ICh0aW1lIC0gMSkgKiAoMiAqIHRpbWUgLSAyKSAqICgyICogdGltZSAtIDIpICsgMTtcclxuICB9LFxyXG4gIGVhc2VJblF1YXJ0OiAodGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdGltZSAqIHRpbWUgKiB0aW1lICogdGltZTtcclxuICB9LFxyXG4gIGVhc2VPdXRRdWFydDogKHRpbWU6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIDEgLSAoLS10aW1lKSAqIHRpbWUgKiB0aW1lICogdGltZTtcclxuICB9LFxyXG4gIGVhc2VJbk91dFF1YXJ0OiAodGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdGltZSA8IDAuNSA/IDggKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lIDogMSAtIDggKiAoLS10aW1lKSAqIHRpbWUgKiB0aW1lICogdGltZTtcclxuICB9LFxyXG4gIGVhc2VJblF1aW50OiAodGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWU7XHJcbiAgfSxcclxuICBlYXNlT3V0UXVpbnQ6ICh0aW1lOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAxICsgKC0tdGltZSkgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lO1xyXG4gIH0sXHJcbiAgZWFzZUluT3V0UXVpbnQ6ICh0aW1lOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiB0aW1lIDwgMC41ID8gMTYgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSA6IDEgKyAxNiAqICgtLXRpbWUpICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZTtcclxuICB9LFxyXG4gIGVhc2VPdXRFbGFzdGljOiAodGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdGltZSkgKiBNYXRoLnNpbigodGltZSAtIDEgLyA0KSAqICgyICogTWF0aC5QSSkgLyAxKSArIDE7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldCBvZiBhbGxvd2VkIGV2ZW50cyBhcyB0cmlnZ2Vyc1xyXG4gKiBmb3IgdGhlIEFuaW1hdGlvbiB0byBzdGFydC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFVkVOVFM6IHN0cmluZ1tdID0gW1xyXG4gICdjbGljaycsXHJcbiAgJ21vdXNlZW50ZXInLFxyXG4gICdtb3VzZW92ZXInLFxyXG4gICdtb3VzZWRvd24nLFxyXG4gICdtb3VzZXVwJyxcclxuICAnZGJsY2xpY2snLFxyXG4gICdjb250ZXh0bWVudScsXHJcbiAgJ3doZWVsJyxcclxuICAnbW91c2VsZWF2ZScsXHJcbiAgJ21vdXNlb3V0J1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIFN0cmlwIGhhc2ggKCMpIGZyb20gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBcdFx0XHRcdFRoZSBnaXZlbiBzdHJpbmcgdmFsdWVcclxuICogQHJldHVybnMgXHRcdFx0XHRcdFRoZSBzdHJpcHBlZCBzdHJpbmcgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEhhc2godmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCAxKSA9PT0gJyMnID8gdmFsdWUuc3Vic3RyaW5nKDEpIDogdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBcdFx0XHRcdFx0VGhlIGdpdmVuIHZhbHVlXHJcbiAqIEByZXR1cm5zIFx0XHRcdFx0XHRcdFdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWU6IGFueSk6IHZhbHVlIGlzIHN0cmluZyB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUZXN0IGlmIGEgZ2l2ZW4gRWxlbWVudCBpcyB0aGUgV2luZG93LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udGFpbmVyIFx0XHRcdFx0VGhlIGdpdmVuIEVsZW1lbnRcclxuICogQHJldHVybnMgXHRcdFx0XHRcdFx0V2hldGhlciB0aGUgZ2l2ZW4gRWxlbWVudCBpcyBXaW5kb3dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvdyhjb250YWluZXI6IGFueSk6IGNvbnRhaW5lciBpcyBXaW5kb3cge1xyXG4gIHJldHVybiBjb250YWluZXIgPT09IHdpbmRvdztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBvZiB0eXBlIEVsZW1lbnRSZWYuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBcdFx0XHRcdFx0VGhlIGdpdmVuIHZhbHVlXHJcbiAqIEByZXR1cm5zICAgICAgICAgICAgICAgV2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRSZWYodmFsdWU6IGFueSk6IHZhbHVlIGlzIEVsZW1lbnRSZWYge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnRSZWY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBOYXRpdmUgRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHZhbHVlICAgICAgICAgICBUaGUgZ2l2ZW4gdmFsdWVcclxuICogQHJldHVybnMgICAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgdmFsdWUgaXMgYSBOYXRpdmUgRWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmF0aXZlRWxlbWVudCh2YWx1ZTogYW55KTogdmFsdWUgaXMgSFRNTEVsZW1lbnQge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogVGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIHR5cGUgbnVtYmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgXHRcdFx0XHRcdFRoZSBnaXZlbiB2YWx1ZVxyXG4gKiBAcmV0dXJucyBcdFx0XHRcdFx0XHRXaGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcy9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBFQVNJTkcgfSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcclxuaW1wb3J0IHtcclxuICBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsXHJcbiAgU2Nyb2xsVG9MaXN0ZW5lclRhcmdldFxyXG59IGZyb20gJy4vc2Nyb2xsLXRvLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuLyoqIFNjcm9sbCBUbyBBbmltYXRpb24gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvQW5pbWF0aW9uIHtcclxuXHJcbiAgLyoqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgZm9yIGVhY2ggVGljayAqL1xyXG4gIHByaXZhdGUgX3RpY2s6IG51bWJlcjtcclxuXHJcbiAgLyoqIEludGVydmFsICovXHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw6IGFueTtcclxuXHJcbiAgLyoqIFRpbWUgTGFwc2VkIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gIHByaXZhdGUgX3RpbWVMYXBzZWQ6IG51bWJlcjtcclxuXHJcbiAgLyoqIFBlcmNlbnRhZ2Ugb2YgdGltZSBsYXBzZWQgKi9cclxuICBwcml2YXRlIF9wZXJjZW50YWdlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgRWxlbWVudCAqL1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKiBMYXN0IEVsZW1lbnQgUG9zaXRpb24gKi9cclxuICBwcml2YXRlIF9sYXN0UG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgLyoqIFN0YXJ0IFBvc2l0aW9uIG9mIHRoZSBFbGVtZW50ICovXHJcbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIERpc3RhbmNlIHRvIHNjcm9sbCAqL1xyXG4gIHByaXZhdGUgX2Rpc3RhbmNlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBPYnNlcnZhYmxlIFNvdXJjZSAqL1xyXG4gIHByaXZhdGUgX3NvdXJjZSQ6IFJlcGxheVN1YmplY3Q8bnVtYmVyPjtcclxuXHJcbiAgLyoqIFNjcm9sbCBUb3Agb2YgdGhlIFdpbmRvdyAqL1xyXG4gIHByaXZhdGUgX3dpbmRvd1Njcm9sbFRvcDogbnVtYmVyO1xyXG5cclxuICAvKiogTWFwcGVkIE9mZnNldCB0YWtlbiBmcm9tIHRoZSBhY3RpdmUgT2Zmc2V0IE1hcCAqL1xyXG4gIHByaXZhdGUgX21hcHBlZE9mZnNldDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBDbGFzcyBDb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBfY29udGFpbmVyICAgICAgICAgICAgVGhlIENvbnRhaW5lclxyXG4gICAqIEBwYXJhbSBfbGlzdGVuZXJUYXJnZXQgICAgICAgVGhlIEVsZW1lbnQgdGhhdCBsaXN0ZW5zIGZvciBET00gRXZlbnRzXHJcbiAgICogQHBhcmFtIF9pc1dpbmRvdyAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgbGlzdGVuZXIgaXMgdGhlIFdpbmRvd1xyXG4gICAqIEBwYXJhbSBfdG8gICAgICAgICAgICAgICAgICAgUG9zaXRpb24gdG8gc2Nyb2xsIHRvXHJcbiAgICogQHBhcmFtIF9vcHRpb25zICAgICAgICAgICAgICBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHNjcm9sbGluZ1xyXG4gICAqIEBwYXJhbSBfaXNCcm93c2VyICAgICAgICAgICAgV2hldGhlciBvciBub3QgZXhlY3V0aW9uIHJ1bnMgaW4gdGhlIGJyb3dzZXJcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcyBvcHBvc2VkIHRvIHRoZSBzZXJ2ZXIpXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBfbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pc1dpbmRvdzogYm9vbGVhbixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3RvOiBudW1iZXIsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsXHJcbiAgICBwcml2YXRlIF9pc0Jyb3dzZXI6IGJvb2xlYW5cclxuICApIHtcclxuICAgIHRoaXMuX3RpY2sgPSAxNjtcclxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcclxuICAgIHRoaXMuX2xhc3RQb3NpdGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLl90aW1lTGFwc2VkID0gMDtcclxuXHJcbiAgICB0aGlzLl93aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xyXG5cclxuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLl93aW5kb3dTY3JvbGxUb3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5faXNXaW5kb3cgPyB0aGlzLl93aW5kb3dTY3JvbGxUb3AgOiB0aGlzLl9jb250YWluZXIuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvcnJlY3Rpb24gZm9yIFN0YXJ0aW5nIFBvc2l0aW9uIG9mIG5lc3RlZCBIVE1MIEVsZW1lbnRzXHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9pc1dpbmRvdykge1xyXG4gICAgICB0aGlzLl90byA9IHRoaXMuX3RvIC0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuX3N0YXJ0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IERpc3RhbmNlXHJcbiAgICBjb25zdCBkaXJlY3Rpb25hbERpc3RhbmNlID0gdGhpcy5fc3RhcnRQb3NpdGlvbiAtIHRoaXMuX3RvO1xyXG4gICAgdGhpcy5fZGlzdGFuY2UgPSB0aGlzLl9jb250YWluZXIgPyBNYXRoLmFicyh0aGlzLl9zdGFydFBvc2l0aW9uIC0gdGhpcy5fdG8pIDogdGhpcy5fdG87XHJcblxyXG4gICAgdGhpcy5fbWFwcGVkT2Zmc2V0ID0gdGhpcy5fb3B0aW9ucy5vZmZzZXQ7XHJcblxyXG4gICAgLy8gU2V0IG9mZnNldCBmcm9tIE9mZnNldCBNYXBcclxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5fb3B0aW9uc1xyXG4gICAgICAgIC5vZmZzZXRNYXBcclxuICAgICAgICAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGhpcy5fbWFwcGVkT2Zmc2V0ID0gd2luZG93LmlubmVyV2lkdGggPiBrZXkgPyB2YWx1ZSA6IHRoaXMuX21hcHBlZE9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGlzdGFuY2UgKz0gdGhpcy5fbWFwcGVkT2Zmc2V0ICogKGRpcmVjdGlvbmFsRGlzdGFuY2UgPD0gMCA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLl9zb3VyY2UkID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBuZXcgU2Nyb2xsIEFuaW1hdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zICAgICAgICAgT2JzZXJ2YWJsZSBjb250YWluaW5nIGEgbnVtYmVyXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcclxuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5fbG9vcCwgdGhpcy5fdGljayk7XHJcbiAgICByZXR1cm4gdGhpcy5fc291cmNlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZWN1cnNpdmVseSBsb29wIG92ZXIgdGhlIFNjcm9sbCBBbmltYXRpb24gKi9cclxuICBwcml2YXRlIF9sb29wID0gKCk6IHZvaWQgPT4ge1xyXG5cclxuICAgIHRoaXMuX3RpbWVMYXBzZWQgKz0gdGhpcy5fdGljaztcclxuICAgIHRoaXMuX3BlcmNlbnRhZ2UgPSAodGhpcy5fdGltZUxhcHNlZCAvIHRoaXMuX29wdGlvbnMuZHVyYXRpb24pO1xyXG4gICAgdGhpcy5fcGVyY2VudGFnZSA9ICh0aGlzLl9wZXJjZW50YWdlID4gMSkgPyAxIDogdGhpcy5fcGVyY2VudGFnZTtcclxuXHJcbiAgICAvLyBQb3NpdGlvbiBVcGRhdGVcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gdGhpcy5fc3RhcnRQb3NpdGlvbiArXHJcbiAgICAgICgodGhpcy5fc3RhcnRQb3NpdGlvbiAtIHRoaXMuX3RvIDw9IDAgPyAxIDogLTEpICpcclxuICAgICAgICB0aGlzLl9kaXN0YW5jZSAqXHJcbiAgICAgICAgRUFTSU5HW3RoaXMuX29wdGlvbnMuZWFzaW5nXSh0aGlzLl9wZXJjZW50YWdlKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2xhc3RQb3NpdGlvbiAhPT0gbnVsbCAmJiB0aGlzLl9wb3NpdGlvbiA9PT0gdGhpcy5fbGFzdFBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc291cmNlJC5uZXh0KHRoaXMuX3Bvc2l0aW9uKTtcclxuICAgICAgdGhpcy5faXNXaW5kb3dcclxuICAgICAgICA/IHRoaXMuX2xpc3RlbmVyVGFyZ2V0LnNjcm9sbFRvKDAsIE1hdGguZmxvb3IodGhpcy5fcG9zaXRpb24pKVxyXG4gICAgICAgIDogdGhpcy5fY29udGFpbmVyLnNjcm9sbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fcG9zaXRpb24pO1xyXG4gICAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSB0aGlzLl9wb3NpdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdGhlIGN1cnJlbnQgU2Nyb2xsIEFuaW1hdGlvbiBMb29wLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvcmNlIFx0XHRcdCAgICBGb3JjZSB0byBzdG9wIHRoZSBBbmltYXRpb24gTG9vcFxyXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgVm9pZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLl9zb3VyY2UkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNjcm9sbFRvQ29uZmlnT3B0aW9ucyxcclxuICBTY3JvbGxUb1RhcmdldCxcclxuICBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0LFxyXG4gIFNjcm9sbFRvQ29uZmlnT3B0aW9uc1RhcmdldFxyXG59IGZyb20gJy4vc2Nyb2xsLXRvLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTY3JvbGxUb0FuaW1hdGlvbiB9IGZyb20gJy4vc2Nyb2xsLXRvLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgc3RyaXBIYXNoLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzRWxlbWVudFJlZixcclxuICBpc1dpbmRvdyxcclxuICBERUZBVUxUUyxcclxuICBpc05hdGl2ZUVsZW1lbnRcclxufSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTY3JvbGwgVG8gU2VydmljZSBoYW5kbGVzIHN0YXJ0aW5nLCBpbnRlcnJ1cHRpbmdcclxuICogYW5kIGVuZGluZyB0aGUgYWN0dWFsIFNjcm9sbCBBbmltYXRpb24uIEl0IHByb3ZpZGVzXHJcbiAqIHNvbWUgdXRpbGl0aWVzIHRvIGZpbmQgdGhlIHByb3BlciBIVE1MIEVsZW1lbnQgb24gYVxyXG4gKiBnaXZlbiBwYWdlIHRvIHNldHVwIEV2ZW50IExpc3RlbmVycyBhbmQgY2FsY3VsYXRlXHJcbiAqIGRpc3RhbmNlcyBmb3IgdGhlIEFuaW1hdGlvbi5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvU2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbmltYXRpb24gdGhhdCBwcm92aWRlcyB0aGUgc2Nyb2xsaW5nXHJcbiAgICogdG8gaGFwcGVuIHNtb290aGx5IG92ZXIgdGltZS4gRGVmaW5pbmcgaXQgaGVyZVxyXG4gICAqIGFsbG93cyBmb3IgdXNhZ2Ugb2YgZS5nLiBgc3RhcnRgIGFuZCBgc3RvcGBcclxuICAgKiBtZXRob2RzIHdpdGhpbiB0aGlzIEFuZ3VsYXIgU2VydmljZS5cclxuICAgKi9cclxuICBwcml2YXRlIF9hbmltYXRpb246IFNjcm9sbFRvQW5pbWF0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJbnRlcnJ1cHRpdmUgRXZlbnRzIGFsbG93IHRvIHNjcm9sbGluZyBhbmltYXRpb25cclxuICAgKiB0byBiZSBpbnRlcnJ1cHRlZCBiZWZvcmUgaXQgaXMgZmluaXNoZWQuIFRoZSBsaXN0XHJcbiAgICogb2YgSW50ZXJydXB0aXZlIEV2ZW50cyByZXByZXNlbnRzIHRob3NlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ludGVycnVwdGl2ZUV2ZW50czogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdCBhbmQgc2V0dXAgcmVxdWlyZWQgcGFyYXRlbWV0ZXJzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIF9kb2N1bWVudCAgICAgICAgIEEgUmVmZXJlbmNlIHRvIHRoZSBEb2N1bWVudFxyXG4gICAqIEBwYXJhbSBfcGxhdGZvcm1JZCAgICAgICBBbmd1bGFyIFBsYXRmb3JtIElEXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZDogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9pbnRlcnJ1cHRpdmVFdmVudHMgPSBbJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAndG91Y2hzdGFydCddO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGFyZ2V0IGFuIEVsZW1lbnQgdG8gc2Nyb2xsIHRvLiBOb3RpY2UgdGhhdCB0aGUgYFRpbWVPdXRgIGRlY29yYXRvclxyXG4gICAqIGVuc3VyZXMgdGhlIGV4ZWN1dGluZyB0byB0YWtlIHBsYWNlIGluIHRoZSBuZXh0IEFuZ3VsYXIgbGlmZWN5Y2xlLlxyXG4gICAqIFRoaXMgYWxsb3dzIGZvciBzY3JvbGxpbmcgdG8gZWxlbWVudHMgdGhhdCBhcmUgZS5nLiBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICogYnkgbWVhbnMgb2YgYCpuZ0lmYCwgYnV0IG91Z2h0IHRvIGJlIHNjcm9sbGVkIHRvIGV2ZW50dWFsbHkuXHJcbiAgICpcclxuICAgKiBAdG9kbyB0eXBlICdhbnknIGluIE9ic2VydmFibGUgc2hvdWxkIGJlY29tZSBjdXN0b20gdHlwZSBsaWtlICdTY3JvbGxUb0V2ZW50JyAoYmFzZSBjbGFzcyksIHNlZSBpc3N1ZSBjb21tZW50OlxyXG4gICAqIFx0LSBodHRwczovL2dpdGh1Yi5jb20vbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvL2lzc3Vlcy8xMCNpc3N1ZWNvbW1lbnQtMzE3MTk4NDgxXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIENvbmZpZ3VyYXRpb24gT2JqZWN0XHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICBPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIHNjcm9sbFRvKG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLl9wbGF0Zm9ybUlkKSkgcmV0dXJuIG5ldyBSZXBsYXlTdWJqZWN0KCkuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgYSBuZXcgQW5pbWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHRvZG8gRW1pdCBwcm9wZXIgZXZlbnRzIGZyb20gc3Vic2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIENvbmZpZ3VyYXRpb24gT2JqZWN0XHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICBPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3RhcnQob3B0aW9uczogU2Nyb2xsVG9Db25maWdPcHRpb25zKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuXHJcbiAgICAvLyBNZXJnZSBjb25maWcgd2l0aCBkZWZhdWx0IHZhbHVlc1xyXG4gICAgY29uc3QgbWVyZ2VkQ29uZmlnT3B0aW9ucyA9IHtcclxuICAgICAgLi4uREVGQVVMVFMgYXMgU2Nyb2xsVG9Db25maWdPcHRpb25zLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9IGFzIFNjcm9sbFRvQ29uZmlnT3B0aW9uc1RhcmdldDtcclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB0aGlzLl9hbmltYXRpb24uc3RvcCgpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLl9nZXROb2RlKG1lcmdlZENvbmZpZ09wdGlvbnMudGFyZ2V0KTtcclxuICAgIGlmIChtZXJnZWRDb25maWdPcHRpb25zLnRhcmdldCAmJiAhdGFyZ2V0Tm9kZSkgcmV0dXJuIHRocm93RXJyb3IoJ1VuYWJsZSB0byBmaW5kIFRhcmdldCBFbGVtZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuX2dldENvbnRhaW5lcihtZXJnZWRDb25maWdPcHRpb25zLCB0YXJnZXROb2RlKTtcclxuICAgIGlmIChtZXJnZWRDb25maWdPcHRpb25zLmNvbnRhaW5lciAmJiAhY29udGFpbmVyKSByZXR1cm4gdGhyb3dFcnJvcignVW5hYmxlIHRvIGZpbmQgQ29udGFpbmVyIEVsZW1lbnQnKTtcclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lclRhcmdldCA9IHRoaXMuX2dldExpc3RlbmVyVGFyZ2V0KGNvbnRhaW5lcikgfHwgd2luZG93O1xyXG5cclxuICAgIGxldCB0byA9IGNvbnRhaW5lciA/IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwO1xyXG5cclxuICAgIGlmICh0YXJnZXROb2RlKSB7XHJcbiAgICAgIHRvID0gaXNXaW5kb3cobGlzdGVuZXJUYXJnZXQpID8gdGFyZ2V0Tm9kZS5vZmZzZXRUb3AgOiB0YXJnZXROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgQW5pbWF0aW9uXHJcbiAgICB0aGlzLl9hbmltYXRpb24gPSBuZXcgU2Nyb2xsVG9BbmltYXRpb24oXHJcbiAgICAgIGNvbnRhaW5lcixcclxuICAgICAgbGlzdGVuZXJUYXJnZXQsXHJcbiAgICAgIGlzV2luZG93KGxpc3RlbmVyVGFyZ2V0KSxcclxuICAgICAgdG8sXHJcbiAgICAgIG1lcmdlZENvbmZpZ09wdGlvbnMsXHJcbiAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25JbnRlcnJ1cHQgPSAoKSA9PiB0aGlzLl9hbmltYXRpb24uc3RvcCgpO1xyXG4gICAgdGhpcy5fYWRkSW50ZXJydXB0aXZlRXZlbnRMaXN0ZW5lcnMobGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcclxuXHJcbiAgICAvLyBTdGFydCBBbmltYXRpb25cclxuICAgIGNvbnN0IGFuaW1hdGlvbiQgPSB0aGlzLl9hbmltYXRpb24uc3RhcnQoKTtcclxuICAgIHRoaXMuX3N1YnNjcmliZVRvQW5pbWF0aW9uKGFuaW1hdGlvbiQsIGxpc3RlbmVyVGFyZ2V0LCBvbkludGVycnVwdCk7XHJcblxyXG4gICAgcmV0dXJuIGFuaW1hdGlvbiQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGV2ZW50cyBlbWl0dGVkIGZyb20gdGhlIFNjcm9sbGluZ1xyXG4gICAqIEFuaW1hdGlvbi4gRXZlbnRzIG1pZ2h0IGJlIHVzZWQgZm9yIGUuZy4gdW5zdWJzY3JpYmluZ1xyXG4gICAqIG9uY2UgZmluaXNoZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYW5pbWF0aW9uJCAgICAgICAgICAgICAgVGhlIEFuaW1hdGlvbiBPYnNlcnZhYmxlXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgICAgICAgIFRoZSBMaXN0ZW5lciBUYXJnZXQgZm9yIGV2ZW50c1xyXG4gICAqIEBwYXJhbSBvbkludGVycnVwdCAgICAgICAgICAgICBUaGUgaGFuZGxlciBmb3IgSW50ZXJydXB0aXZlIEV2ZW50c1xyXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgICAgICAgICBWb2lkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9BbmltYXRpb24oXHJcbiAgICBhbmltYXRpb24kOiBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBsaXN0ZW5lclRhcmdldDogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCxcclxuICAgIG9uSW50ZXJydXB0OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhbmltYXRpb24kXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4geyB9LFxyXG4gICAgICAgICgpID0+IHsgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9yZW1vdmVJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyh0aGlzLl9pbnRlcnJ1cHRpdmVFdmVudHMsIGxpc3RlbmVyVGFyZ2V0LCBvbkludGVycnVwdCk7XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGNvbnRhaW5lciBIVE1MIEVsZW1lbnQgaW4gd2hpY2hcclxuICAgKiB0aGUgc2Nyb2xsaW5nIHNob3VsZCBoYXBwZW4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIFRoZSBNZXJnZWQgQ29uZmlndXJhdGlvbiBPYmplY3RcclxuICAgKiBAcGFyYW0gdGFyZ2V0Tm9kZSAgICB0aGUgdGFyZ2V0ZWQgSFRNTEVsZW1lbnRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX2dldENvbnRhaW5lcihvcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmNvbnRhaW5lcikge1xyXG4gICAgICBjb250YWluZXIgPSB0aGlzLl9nZXROb2RlKG9wdGlvbnMuY29udGFpbmVyLCB0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0Tm9kZSkge1xyXG4gICAgICBjb250YWluZXIgPSB0aGlzLl9nZXRGaXJzdFNjcm9sbGFibGVQYXJlbnQodGFyZ2V0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBBbmltYXRpb24gSW50ZXJydXB0aXZlIEV2ZW50c1xyXG4gICAqIHRvIHRoZSBMaXN0ZW5lciBUYXJnZXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnRzICAgICAgICAgICAgTGlzdCBvZiBldmVudHMgdG8gbGlzdGVuIHRvXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgIFRhcmdldCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIG9uXHJcbiAgICogQHBhcmFtIGhhbmRsZXIgICAgICAgICAgIEhhbmRsZXIgZm9yIHdoZW4gdGhlIGxpc3RlbmVyIGZpcmVzXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFZvaWRcclxuICAgKi9cclxuICBwcml2YXRlIF9hZGRJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyhcclxuICAgIGxpc3RlbmVyVGFyZ2V0OiBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0LFxyXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCk6IHZvaWQge1xyXG5cclxuICAgIGlmICghbGlzdGVuZXJUYXJnZXQpIGxpc3RlbmVyVGFyZ2V0ID0gd2luZG93O1xyXG5cclxuICAgIHRoaXMuX2ludGVycnVwdGl2ZUV2ZW50c1xyXG4gICAgICAuZm9yRWFjaChldmVudCA9PiBsaXN0ZW5lclRhcmdldFxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0aGlzLl9zdXBwb3J0UGFzc2l2ZSgpID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVhdHVyZS1kZXRlY3Qgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAgICAgICBXaGV0aGVyIG9yIG5vdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycyBhcmUgc3VwcG9ydGVkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3VwcG9ydFBhc3NpdmUoKTogYm9vbGVhbiB7XHJcblxyXG4gICAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XHJcbiAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGxpc3RlbmVycyBmb3IgdGhlIEFuaW1hdGlvbiBJbnRlcnJ1cHQgRXZlbnQgZnJvbVxyXG4gICAqIHRoZSBMaXN0ZW5lciBUYXJnZXQuIFNwZWNpZnlpbmcgdGhlIGNvcnJlY3QgaGFuZGxlciBwcmV2ZW50c1xyXG4gICAqIG1lbW9yeSBsZWFrcyBhbmQgbWFrZXMgdGhlIGFsbG9jYXRlZCBtZW1vcnkgYXZhaWxhYmxlIGZvclxyXG4gICAqIEdhcmJhZ2UgQ29sbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBldmVudHMgICAgICAgICAgICBMaXN0IG9mIEludGVycnVwdGl2ZSBFdmVudHMgdG8gcmVtb3ZlXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgIFRhcmdldCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIG9uXHJcbiAgICogQHBhcmFtIGhhbmRsZXIgICAgICAgICAgIEhhbmRsZXIgZm9yIHdoZW4gdGhlIGxpc3RlbmVyIGZpcmVzXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFZvaWRcclxuICAgKi9cclxuICBwcml2YXRlIF9yZW1vdmVJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyhcclxuICAgIGV2ZW50czogc3RyaW5nW10sXHJcbiAgICBsaXN0ZW5lclRhcmdldDogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCxcclxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWxpc3RlbmVyVGFyZ2V0KSBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcclxuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGZpcnN0IHNjcm9sbGFibGUgcGFyZW50IE5vZGUgb2YgYSBnaXZlblxyXG4gICAqIEVsZW1lbnQuIFRoZSBET00gVHJlZSBnZXRzIHNlYXJjaGVkIHVwd2FyZHNcclxuICAgKiB0byBmaW5kIHRoaXMgZmlyc3Qgc2Nyb2xsYWJsZSBwYXJlbnQuIFBhcmVudHMgbWlnaHRcclxuICAgKiBiZSBpZ25vcmVkIGJ5IENTUyBzdHlsZXMgYXBwbGllZCB0byB0aGUgSFRNTCBFbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hdGl2ZUVsZW1lbnQgICAgIFRoZSBFbGVtZW50IHRvIHNlYXJjaCB0aGUgRE9NIFRyZWUgdXB3YXJkcyBmcm9tXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFRoZSBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudCBIVE1MIEVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRGaXJzdFNjcm9sbGFibGVQYXJlbnQobmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmZsb3dSZWdleDogUmVnRXhwID0gLyhhdXRvfHNjcm9sbHxvdmVybGF5KS87XHJcblxyXG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBwYXJlbnQgPSBuYXRpdmVFbGVtZW50OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDsgbnVsbCkge1xyXG5cclxuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnXHJcbiAgICAgICAgfHwgc3R5bGUub3ZlcmZsb3cgPT09ICdoaWRkZW4nXHJcbiAgICAgICAgfHwgc3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykgY29udGludWU7XHJcblxyXG4gICAgICBpZiAob3ZlcmZsb3dSZWdleC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZKVxyXG4gICAgICAgIHx8IHBhcmVudC50YWdOYW1lID09PSAnQk9EWScpIHJldHVybiBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIFRhcmdldCBOb2RlIHRvIHNjcm9sbCB0by5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCAgICAgICAgICAgICAgVGhlIGdpdmVuIElEIG9mIHRoZSBub2RlLCBlaXRoZXIgYSBzdHJpbmcgb3JcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGFuIGVsZW1lbnQgcmVmZXJlbmNlXHJcbiAgICogQHBhcmFtIGFsbG93Qm9keVRhZyAgICBJbmRpY2F0ZSB3aGV0aGVyIG9yIG5vdCB0aGUgRG9jdW1lbnQgQm9keSBpc1xyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY29uc2lkZXJlZCBhIHZhbGlkIFRhcmdldCBOb2RlXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICBUaGUgVGFyZ2V0IE5vZGUgdG8gc2Nyb2xsIHRvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZShpZDogU2Nyb2xsVG9UYXJnZXQsIGFsbG93Qm9keVRhZzogYm9vbGVhbiA9IGZhbHNlKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGxldCB0YXJnZXROb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcoaWQpKSB7XHJcbiAgICAgIGlmIChhbGxvd0JvZHlUYWcgJiYgKGlkID09PSAnYm9keScgfHwgaWQgPT09ICdCT0RZJykpIHtcclxuICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5fZG9jdW1lbnQuYm9keTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyaXBIYXNoKGlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaWQpKSB7XHJcbiAgICAgIHRhcmdldE5vZGUgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChTdHJpbmcoaWQpKTtcclxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50UmVmKGlkKSkge1xyXG4gICAgICB0YXJnZXROb2RlID0gaWQubmF0aXZlRWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAoaXNOYXRpdmVFbGVtZW50KGlkKSkge1xyXG4gICAgICB0YXJnZXROb2RlID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSB0aGUgTGlzdGVuZXIgdGFyZ2V0LiBUaGlzIExpc3RlbmVyIFRhcmdldCBpcyB1c2VkXHJcbiAgICogdG8gYXR0YWNoIEV2ZW50IExpc3RlbmVycyBvbi4gSW4gY2FzZSBvZiB0aGUgdGFyZ2V0IGJlaW5nXHJcbiAgICogdGhlIERvY3VtZW50IEJvZHksIHdlIG5lZWQgdGhlIGFjdHVhbCBgd2luZG93YCB0byBsaXN0ZW5cclxuICAgKiBmb3IgZXZlbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRhaW5lciAgICAgICAgICAgVGhlIEhUTUwgQ29udGFpbmVyIGVsZW1lbnRcclxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgICBUaGUgTGlzdGVuZXIgVGFyZ2V0IHRvIGF0dGFjaCBldmVudHMgb25cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRMaXN0ZW5lclRhcmdldChjb250YWluZXI6IEhUTUxFbGVtZW50KTogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCB7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEb2N1bWVudEJvZHkoY29udGFpbmVyKSA/IHdpbmRvdyA6IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlc3QgaWYgYSBnaXZlbiBIVE1MIEVsZW1lbnQgaXMgdGhlIERvY3VtZW50IEJvZHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCAgICAgICAgICAgICBUaGUgZ2l2ZW4gSFRNTCBFbGVtZW50XHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgICAgV2hldGhlciBvciBub3QgdGhlIEVsZW1lbnQgaXMgdGhlXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQgQm9keSBFbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXNEb2N1bWVudEJvZHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxCb2R5RWxlbWVudCB7XHJcbiAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdCT0RZJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBERUZBVUxUUyxcclxuICBFVkVOVFNcclxufSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcclxuaW1wb3J0IHtcclxuICBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsXHJcbiAgU2Nyb2xsVG9PZmZzZXRNYXAsXHJcbiAgU2Nyb2xsVG9UYXJnZXRcclxufSBmcm9tICcuL3Njcm9sbC10by1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBTY3JvbGxUb0FuaW1hdGlvbkVhc2luZ1xyXG59IGZyb20gJy4vc2Nyb2xsLXRvLWVhc2luZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTY3JvbGxUb0V2ZW50IH0gZnJvbSAnLi9zY3JvbGwtdG8tZXZlbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9TZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtdG8uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3gtc2Nyb2xsLXRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnbmd4LXNjcm9sbC10bycpXHJcbiAgcHVibGljIG5neFNjcm9sbFRvOiBTY3JvbGxUb1RhcmdldCA9IERFRkFVTFRTLnRhcmdldDtcclxuXHJcbiAgQElucHV0KCduZ3gtc2Nyb2xsLXRvLWV2ZW50JylcclxuICBwdWJsaWMgbmd4U2Nyb2xsVG9FdmVudDogU2Nyb2xsVG9FdmVudCA9IERFRkFVTFRTLmFjdGlvbjtcclxuXHJcbiAgQElucHV0KCduZ3gtc2Nyb2xsLXRvLWR1cmF0aW9uJylcclxuICBwdWJsaWMgbmd4U2Nyb2xsVG9EdXJhdGlvbjogbnVtYmVyID0gREVGQVVMVFMuZHVyYXRpb247XHJcblxyXG4gIEBJbnB1dCgnbmd4LXNjcm9sbC10by1lYXNpbmcnKVxyXG4gIHB1YmxpYyBuZ3hTY3JvbGxUb0Vhc2luZzogU2Nyb2xsVG9BbmltYXRpb25FYXNpbmcgPSBERUZBVUxUUy5lYXNpbmc7XHJcblxyXG4gIEBJbnB1dCgnbmd4LXNjcm9sbC10by1vZmZzZXQnKVxyXG4gIHB1YmxpYyBuZ3hTY3JvbGxUb09mZnNldDogbnVtYmVyID0gREVGQVVMVFMub2Zmc2V0O1xyXG5cclxuICBASW5wdXQoJ25neC1zY3JvbGwtdG8tb2Zmc2V0LW1hcCcpXHJcbiAgcHVibGljIG5neFNjcm9sbFRvT2Zmc2V0TWFwOiBTY3JvbGxUb09mZnNldE1hcCA9IERFRkFVTFRTLm9mZnNldE1hcDtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogU2Nyb2xsVG9Db25maWdPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb1NlcnZpY2U6IFNjcm9sbFRvU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW5ndWxhciBMaWZlY3ljbGUgSG9vayAtIEFmdGVyIFZpZXcgSW5pdFxyXG4gICAqXHJcbiAgICogQHRvZG8gSW1wbGVtZW50IFN1YnNjcmlwdGlvbiBmb3IgRXZlbnRzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBUZXN0IEV2ZW50IFN1cHBvcnRcclxuICAgIGlmIChFVkVOVFMuaW5kZXhPZih0aGlzLm5neFNjcm9sbFRvRXZlbnQpID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBFdmVudCAnJHt0aGlzLm5neFNjcm9sbFRvRXZlbnR9J2ApO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgdGhlIHRyaWdnZXIuLi5cclxuICAgIHRoaXMuX3JlbmRlcmVyMi5saXN0ZW4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm5neFNjcm9sbFRvRXZlbnQsXHJcbiAgICAgIChldmVudDogRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHRhcmdldDogdGhpcy5uZ3hTY3JvbGxUbyxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm5neFNjcm9sbFRvRHVyYXRpb24sXHJcbiAgICAgICAgICBlYXNpbmc6IHRoaXMubmd4U2Nyb2xsVG9FYXNpbmcsXHJcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMubmd4U2Nyb2xsVG9PZmZzZXQsXHJcbiAgICAgICAgICBvZmZzZXRNYXA6IHRoaXMubmd4U2Nyb2xsVG9PZmZzZXRNYXBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9zY3JvbGxUb1NlcnZpY2Uuc2Nyb2xsVG8odGhpcy5fb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY3JvbGxUb0RpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsLXRvLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNjcm9sbFRvU2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXRvLnNlcnZpY2UnO1xyXG5cclxuLyoqIFNjcm9sbCBUbyBNb2R1bGUgKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNjcm9sbFRvRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTY3JvbGxUb0RpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvTW9kdWxlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogR3VhcmFudGVlZCBzaW5nbGV0b25zIGZvciBwcm92aWRlZCBTZXJ2aWNlcyBhY3Jvc3MgQXBwLlxyXG4gICAqXHJcbiAgICogQHJldHVybiAgICAgICAgICBBbiBBbmd1bGFyIE1vZHVsZSB3aXRoIFByb3ZpZGVyc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNjcm9sbFRvTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTY3JvbGxUb1NlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19hc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFNQSxBQUFPLHFCQUFNLFFBQVEsR0FBaUM7SUFDcEQsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUUsT0FBTztJQUNmLFFBQVEsRUFBRSxHQUFHO0lBQ2IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsTUFBTSxFQUFFLENBQUM7SUFDVCxTQUFTLEVBQUUsSUFBSSxHQUFHLEVBQUU7Q0FDckIsQ0FBQzs7OztBQUdGLEFBQU8scUJBQU0sTUFBTSxHQUFzQztJQUN2RCxVQUFVLEVBQUUsVUFBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtJQUNELFdBQVcsRUFBRSxVQUFDLElBQVk7UUFD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

/***/ }),

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asapScheduler = asap_1.asap;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.asyncScheduler = async_1.async;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queueScheduler = queue_1.queue;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrameScheduler = animationFrame_1.animationFrame;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/AsyncSubject.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/AsyncSubject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Notification.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Notification.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var empty_1 = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
var of_1 = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/internal/observable/of.js");
var throwError_1 = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/ReplaySubject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var queue_1 = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/internal/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ "./node_modules/rxjs/internal/util/tryCatch.js");
var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/ConnectableObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/ConnectableObservable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var refCount_1 = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/internal/operators/refCount.js");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var of_1 = __webpack_require__(/*! ./of */ "./node_modules/rxjs/internal/observable/of.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var concatAll_1 = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/internal/operators/concatAll.js");
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1 || (observables.length === 2 && isScheduler_1.isScheduler(observables[1]))) {
        return from_1.from(observables[0]);
    }
    return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/defer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/defer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from_1.from(input) : empty_1.empty();
        return source.subscribe(subscriber);
    });
}
exports.defer = defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
exports.emptyScheduled = emptyScheduled;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(map_1.map(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
exports.forkJoin = forkJoin;
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var fromPromise_1 = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/internal/observable/fromPromise.js");
var fromIterable_1 = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/internal/observable/fromIterable.js");
var fromObservable_1 = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/internal/observable/fromObservable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromObservable_1.fromObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return fromPromise_1.fromPromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return fromArray_1.fromArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return fromIterable_1.fromIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromIterable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromIterable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var subscribeToIterable_1 = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[iterator_1.iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
exports.fromIterable = fromIterable;
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromObservable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromObservable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () {
                var observable = input[observable_1.observable]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
exports.fromObservable = fromObservable;
//# sourceMappingURL=fromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromPromise.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromPromise.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToPromise_1 = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () { return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            }); }));
            return sub;
        });
    }
}
exports.fromPromise = fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var mergeAll_1 = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/of.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var scalar_1 = __webpack_require__(/*! ./scalar */ "./node_modules/rxjs/internal/observable/scalar.js");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return empty_1.empty(scheduler);
        case 1:
            return scheduler ? fromArray_1.fromArray(args, scheduler) : scalar_1.scalar(args[0]);
        default:
            return fromArray_1.fromArray(args, scheduler);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/race.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/race.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
}
exports.race = race;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    if (count === void 0) { count = 0; }
    return new Observable_1.Observable(function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/scalar.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/scalar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function scalar(value) {
    var result = new Observable_1.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
exports.scalar = scalar;
//# sourceMappingURL=scalar.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/throwError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/zip.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/zip.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var iterator_1 = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
exports.zip = zip;
var ZipOperator = (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) { values = Object.create(null); }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/concatAll.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/concatAll.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeAll_1 = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/groupBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/groupBy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeAll.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeMap_1 = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeMap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        subscribeToResult_1.subscribeToResult(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/observeOn.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Notification_1 = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/internal/Notification.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/refCount.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/refCount.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
exports.refCount = refCount;
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapAction.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapAction.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Immediate_1 = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/internal/util/Immediate.js");
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapScheduler.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/asap.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/asap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsapAction_1 = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/internal/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js");
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/queue.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/EmptyError.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/EmptyError.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = Object.create(Error.prototype);
exports.EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/Immediate.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/Immediate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/TimeoutError.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/TimeoutError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = Object.create(Error.prototype);
exports.TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/errorObject.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/errorObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (result instanceof Observable_1.Observable) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    if (!subscriber.closed) {
        subscriber.complete();
    }
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) { destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (destination.closed) {
        return;
    }
    return subscribeTo_1.subscribeTo(result)(destination);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/tryCatch.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/tryCatch.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorObject_1 = __webpack_require__(/*! ./errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "./src/app/demo/pages/landing/landing-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/landing/landing-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/demo/pages/landing/landing.component.ts");




var routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper landing\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main\" role=\"navigation\">\n      <div class=\"container\">\n        <a href=\"javascript:\" class=\"navbar-brand page-scroll\" [ngx-scroll-to]=\"'#main'\" (click)=\"this.openMe = false\"><img src=\"assets/landing/logos/logo.png\" alt=\"Datta Able Logo\" /></a>\n        <button (click)=\"this.openMe = !this.openMe\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"this.openMe ? 'show': ''\">\n          <ul class=\"navbar-nav mr-auto\">\n          </ul>\n          <ul class=\"navbar-nav my-2 my-lg-0\">\n            <li class=\"nav-item\">\n              <a href=\"javascript:\" class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#main'\" (click)=\"this.openMe = false\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:\" class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#services'\" (click)=\"this.openMe = false\">Important</a>\n            </li>\n            <li ngbDropdown class=\"nav-item dropdown\">\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"javascript:\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 1</a>\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 2</a>\n                <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"this.openMe = false\">Level 3</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:\" class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#features'\" (click)=\"this.openMe = false\">Benefits</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:\" class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#reviews'\" (click)=\"this.openMe = false\">Testimonials</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:\" class=\"nav-link page-scroll\" [ngx-scroll-to]=\"'#pricing'\" (click)=\"this.openMe = false\">Pricing</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"javascript:\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n  <div class=\"main\" id=\"main\">\n    <div class=\"hero-section app-hero\">\n      <div class=\"container\">\n        <div class=\"hero-content app-hero-content text-center\">\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col-md-10\">\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Datta Able Angular 7+ Admin Template</h1>\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\n                First ever Angular 7+ admin template with Flat UI Interface. <br class=\"hidden-xs\"> Its best choice for your any complex project.\n              </p>\n              <a class=\"btn btn-primary btn-action\" data-wow-delay=\"0.2s\" href=\"javascript:\">Live Preview</a>\n              <a class=\"btn btn-primary btn-action\" data-wow-delay=\"0.2s\" href=\"javascript:\">Buy Now</a>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"hero-image\">\n                <img class=\"img-fluid\" src=\"assets/landing/images/app_hero_1.png\" alt=\"\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"services-section text-center\" id=\"services\">\n      <!-- Services section (small) with icons -->\n      <div class=\"container\">\n        <div class=\"row  justify-content-md-center\">\n          <div class=\"col-md-8\">\n            <div class=\"services-content\">\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">We take care our products for more feature rich</h1>\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\n                Datta Able is one of the finest Admin dashboard template in its category. Premium admin dashboard with high end feature rich possibilities.\n              </p>\n            </div>\n          </div>\n          <div class=\"col-md-12 text-center\">\n            <div class=\"services\">\n              <div class=\"row\">\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                  <div class=\"services-icon\">\n                    <img src=\"assets/landing/logos/icon1.png\" height=\"60\" width=\"60\" alt=\"Service\" />\n                  </div>\n                  <div class=\"services-description\">\n                    <h1>Mega feature rich</h1>\n                    <p>\n                      Datta Able is one of unique dashboard template which come with tons of ready to use feature. We continuous working on it to provide latest updates in digital market.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.3s\">\n                  <div class=\"services-icon\">\n                    <img class=\"icon-2\" src=\"assets/landing/logos/icon2.png\" height=\"60\" width=\"60\" alt=\"Service\" />\n                  </div>\n                  <div class=\"services-description\">\n                    <h1>Fast and Robust</h1>\n                    <p>\n                      We are contantly working on Datta Able and improve its performance too. Your definitely give higher rating to Datta Able for its performance.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\n                  <div class=\"services-icon\">\n                    <img class=\"icon-3\" src=\"assets/landing/logos/icon3.png\" height=\"60\" width=\"60\" alt=\"Service\" />\n                  </div>\n                  <div class=\"services-description\">\n                    <h1>FLAT UI-Interface</h1>\n                    <p>\n                      Datta Able is first ever admin dashboard template which release in Bootstrap 4 framework. Intuitive feature rich design concept and color combination.\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex-features\" id=\"features\">\n      <div class=\"container\">\n        <div class=\"flex-split\">\n          <div class=\"f-left wow fadeInUp\" data-wow-delay=\"0s\">\n            <div class=\"left-content\">\n              <img class=\"img-fluid\" src=\"assets/landing/images/feature_1.png\" alt=\"\" />\n            </div>\n          </div>\n          <div class=\"f-right wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"right-content\">\n              <h2>High performance and flexible code</h2>\n              <p>\n                Datta Able is full flexible solution for your entire project development. You can easily maintain all of its module/components.\n              </p>\n              <ul>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Neat n clean code structure.</li>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Flexible module structure</li>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Copy / Paste and Ready to use</li>\n              </ul>\n              <button class=\"btn btn-primary btn-action btn-fill\">Learn More</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex-split\">\n          <div class=\"f-right\">\n            <div class=\"right-content wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <h2>Included Software Dependencies</h2>\n              <p>\n                Bower - Grunt - Sass Dependencies for easy project flow management.\n              </p>\n              <ul>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Grunt - No need to update plugins manually</li>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Grunt - Less work you have to performance</li>\n                <li><i class=\"ion-android-checkbox-outline\"></i>Sass - Most Powerful CSS extension language</li>\n              </ul>\n              <button class=\"btn btn-primary btn-action btn-fill\">Learn More</button>\n            </div>\n          </div>\n          <div class=\"f-left\">\n            <div class=\"left-content wow fadeInUp\" data-wow-delay=\"0.3s\">\n              <img class=\"img-fluid\" src=\"assets/landing/images/feature_2.png\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"testimonial-section\" id=\"reviews\">\n      <div class=\"container\">\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <div class=\"testimonials\">\n              <ngb-carousel [interval]=\"2000\">\n                <ng-template ngbSlide class=\"bannerStyle\">\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial2.jpg\" alt=\"Client Testimonial\" />\n                    <div class=\"testimonial-text wow fadeInUp\" data-wow-delay=\"0.2s\">\n                      <p>Totally flexible admin template. Easy to use and easy to manage all the elements in entire theme. <br class=\"hidden-xs\"> Great support team behind this product. Low turnaround time with exact support which i needed.\n                      </p>\n                      <h3>Code Quality</h3>\n                      <h3> - amit1134 [Buyer - NZ]</h3><br>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                    </div>\n                  </div>\n                </ng-template>\n                <ng-template ngbSlide class=\"bannerStyle\">\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial1.jpg\" alt=\"Client Testimonoal\" />\n                    <div class=\"testimonial-text\">\n                      <p>The main reason for the Rating for Datta Able admin template is that its is awesome template with tons of ready to use features.<br class=\"hidden-xs\"> - Top quality - Regular updates - PHP version - Clean n Neat code\n                        - Saves lots of developing time\n                      </p>\n                      <h3>Flexibility</h3>\n                      <h3>- vishalmg [Buyer -India]</h3><br>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\n                    </div>\n                  </div>\n                </ng-template>\n                <ng-template ngbSlide class=\"bannerStyle\">\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial3.jpg\" alt=\"Client Testimonoal\" />\n                    <div class=\"testimonial-text\">\n                      <p>5 stars are for the excellent support, that is brilliant! The design is very cool and the quality of code is excellent. <br class=\"hidden-xs\">Compliments!</p>\n                      <h3>Code Quality</h3>\n                      <h3>- ab69aho [Buyer -Italy]</h3><br>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\n                    </div>\n                  </div>\n                </ng-template>\n                <ng-template ngbSlide class=\"bannerStyle\">\n                  <div class=\"testimonial-single\"><img class=\"img-circle\" src=\"assets/landing/images/testimonial2.jpg\" alt=\"Client Testimonoal\" />\n                    <div class=\"testimonial-text\">\n                      <p>The product is high end and high-end specialized assistance in solving problems. <br class=\"hidden-xs\">I would highly recommend.</p>\n                      <h3>Customer Support</h3>\n                      <h3>- donpavulon [Buyer -US]</h3><br>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star text-warning\"></i>\n                      <i class=\"fa fa-star-half-o text-warning\"></i>\n                      <i class=\"fa fa-star-o text-warning\"></i>\n                    </div>\n                  </div>\n                </ng-template>\n              </ngb-carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"feature_huge text-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img class=\"img-fluid wow fadeInUp\" data-wow-delay=\"0.1s\" src=\"assets/landing/images/big_feature.png\" alt=\"\" style=\"max-width:100%\" />\n          </div>\n          <div class=\"col-md-12 feature_list\">\n            <div class=\"row\">\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                <img src=\"assets/landing/logos/feature_icon.png\" alt=\"Feature\" />\n                <h1>Tursted Product</h1>\n                <p>\n                  We increasingly grow our talent and skills in admin dashboard development.\n                </p>\n              </div>\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\n                <img src=\"assets/landing/logos/feature_icon_2.png\" alt=\"Feature\" />\n                <h1>Online Documentation</h1>\n                <p>\n                  Documentation helps you in every steps on your entire project.\n                </p>\n              </div>\n              <div class=\"col-sm-4 wow fadeInUp\" data-wow-delay=\"0.6s\">\n                <img src=\"assets/landing/logos/feature_icon_3.png\" alt=\"Feature\" />\n                <h1>Free Updates & Support</h1>\n                <p>\n                  Fast and accurate outline during support. Low turnaround time.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"counter-section\">\n      <div class=\"container\">\n        <div class=\"row text-center\">\n          <div class=\"col-6 col-md-3\">\n            <div class=\"counter-up\">\n              <div class=\"counter-icon\">\n                <i class=\"ion-android-download\"></i>\n              </div>\n              <h3><span class=\"counter\">250</span>+</h3>\n              <div class=\"counter-text\">\n                <h4>Pages</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-3\">\n            <div class=\"counter-up\">\n              <div class=\"counter-icon\">\n                <i class=\"ion-cube\"></i>\n              </div>\n              <h3><span class=\"counter\">1000</span>+</h3>\n              <div class=\"counter-text\">\n                <h4>UI Elements</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-3\">\n            <div class=\"counter-up\">\n              <div class=\"counter-icon\">\n                <i class=\"ion-ios-people\"></i>\n              </div>\n              <h3><span class=\"counter\">500</span>+</h3>\n              <div class=\"counter-text\">\n                <h4>Form Elements</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-3\">\n            <div class=\"counter-up\">\n              <div class=\"counter-icon\">\n                <i class=\"ion-ios-paper\"></i>\n              </div>\n              <h3><span class=\"counter\">80</span>+</h3>\n              <div class=\"counter-text\">\n                <h4>Widgets</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"features-section\">\n      <!-- Feature section with flex layout -->\n      <div class=\"f-left\">\n        <div class=\"left-content wow fadeInLeft\" data-wow-delay=\"0s\">\n          <h2 class=\"wow fadeInLeft\" data-wow-delay=\"0.1s\">We are available for custom work development</h2>\n          <p class=\"wow fadeInLeft\" data-wow-delay=\"0.2s\">\n            We at Datta Able available for custom work development with High end specialized developer.\n          </p>\n          <button class=\"btn btn-primary btn-action btn-fill wow fadeInLeft\" data-wow-delay=\"0.2s\">Click to send query</button>\n        </div>\n      </div>\n      <div class=\"f-right\">\n      </div>\n    </div>\n    <div class=\"pricing-section no-color text-center\" id=\"pricing\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 col-sm-12 \">\n            <div class=\"pricing-intro\">\n              <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">Pricing Table</h1>\n              <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\n                Loream ipsum dummy text loream ipsum dummy text loream ipsum dummy text <br class=\"hidden-xs\"> loream ipsum dummy text. Get the right plan that suits you.\n              </p>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"table-left wow fadeInUp\" data-wow-delay=\"0.4s\">\n                  <div class=\"icon\">\n                    <img src=\"assets/landing/logos/cart2.png\" alt=\"Icon\" />\n                  </div>\n                  <div class=\"pricing-details\">\n                    <h2>Beginner Plan</h2>\n                    <span>$5.90</span>\n                    <p>\n                      Pay little enjoy the product <br class=\"hidden-xs\"> for life time.\n                    </p>\n                    <ul>\n                      <li>First basic feature </li>\n                      <li>Second feature goes here</li>\n                      <li>Any other third feature</li>\n                      <li>And the last one goes here</li>\n                    </ul>\n                    <button class=\"btn btn-primary btn-action btn-fill\">Get Plan</button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6 \">\n                <div class=\"table-right wow fadeInUp\" data-wow-delay=\"0.6s\">\n                  <div class=\"icon\">\n                    <img src=\"assets/landing/logos/cart1.png\" alt=\"Icon\" />\n                  </div>\n                  <div class=\"pricing-details\">\n                    <h2>Premium Plan</h2>\n                    <span>$19.99</span>\n                    <p>\n                      Pay only for what you use. Flexible <br class=\"hidden-xs\"> payment options.\n                    </p>\n                    <ul>\n                      <li>First premium feature </li>\n                      <li>Second premium one goes here</li>\n                      <li>Third premium feature here</li>\n                      <li>Final premium feature</li>\n                    </ul>\n                    <button class=\"btn btn-primary btn-action btn-fill\">Buy Now</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"client-section\">\n      <div class=\"container text-center\">\n        <div class=\"clients\">\n          <ngb-carousel [interval]=\"2000\">\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo1.png\" alt=\"\"  class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo2.png\" alt=\"\" class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo3.png\" alt=\"\" class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo4.png\" alt=\"\" class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo6.png\" alt=\"\" class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide class=\"bannerStyle\">\n              <div class=\"single\">\n                <img src=\"assets/landing/logos/logo7.png\" alt=\"\" class=\"img-fluid\"/>\n              </div>\n            </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"cta-sub text-center no-color\">\n      <div class=\"container\">\n        <h1 class=\"wow fadeInUp\" data-wow-delay=\"0s\">New product notification subscription</h1>\n        <p class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\n          We sent you daily mail about product updates / releases / version change logs<br class=\"hidden-xs\">Please write accurate email address below.\n        </p>\n        <div class=\"form wow fadeInUp\" data-wow-delay=\"0.3s\">\n          <form class=\"subscribe-form wow zoomIn\" action=\"javascript:\" method=\"post\" accept-charset=\"UTF-8\" enctype=\"application/x-www-form-urlencoded\" autocomplete=\"off\" novalidate>\n            <input class=\"mail\" type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\"><input class=\"submit-button\" type=\"submit\" value=\"Subscribe\">\n          </form>\n          <div class=\"success-message\"></div>\n          <div class=\"error-message\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer landing-footer\">\n      <div class=\"container\">\n        <div class=\"col-md-12 text-center\">\n          <img src=\"assets/landing/logos/logo.png\" alt=\"Datta Able Logo\" />\n          <ul class=\"footer-menu\">\n            <li><a href=\"javascript:\">Site</a></li>\n            <li><a href=\"javascript:\">Support</a></li>\n            <li><a href=\"javascript:\">Terms</a></li>\n            <li><a href=\"javascript:\">Privacy</a></li>\n          </ul>\n          <div class=\"footer-text\">\n            <p>\n              Copyright © 2018 Datta Able. All Rights Reserved.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/landing/landing.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1600px) {\n  .landing .container {\n    max-width: 1140px; } }\n\n@media (max-width: 992px) {\n  .landing .container {\n    max-width: 100%; } }\n\n.landing .navbar-light .navbar-brand {\n  background: transparent; }\n\n.landing .carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.landing .carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.landing .carousel-indicators {\n  bottom: -30px; }\n\n.landing .carousel-indicators li {\n    background-color: #999; }\n\n.landing .carousel-indicators li.active {\n      background-color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hcHAvZGVtby9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFERjtJQUdNLGlCQUFpQixFQUFBLEVBQ2xCOztBQUVIO0VBTkY7SUFRTSxlQUFlLEVBQUEsRUFDaEI7O0FBVEw7RUFZSSx1QkFBdUIsRUFBQTs7QUFaM0I7RUFlSSxnTkFBZ04sRUFBQTs7QUFmcE47RUFrQkksZ05BQWdOLEVBQUE7O0FBbEJwTjtFQXNCSSxhQUFhLEVBQUE7O0FBdEJqQjtJQXdCTSxzQkFBc0IsRUFBQTs7QUF4QjVCO01BMEJRLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwMDAnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwMDAnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgYm90dG9tOiAtMzBweDtcclxuICAgIGxpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/pages/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/pages/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.openMe = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/demo/pages/landing/landing.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/demo/pages/landing/landing.component.scss"), __webpack_require__(/*! ../../../../assets/landing/css/style.scss */ "./src/assets/landing/css/style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/landing/landing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/pages/landing/landing.module.ts ***!
  \******************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/demo/pages/landing/landing-routing.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/demo/pages/landing/landing.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");







var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot()
            ],
            declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/assets/landing/css/style.scss":
/*!*******************************************!*\
  !*** ./src/assets/landing/css/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------\r\nAll Contents\r\n--------------*/\n/*-----------------\r\n1. Reset.css\r\n2. Helper Classes\r\n3. Main and Hero Section Stylings\r\n4. Services Styling\r\n5. Features Split\r\n6. Feature with BG\r\n7. Feature Big\r\n8. Testimonial Stling\r\n9. Pricing Section\r\n10. Call To Action Subscribe\r\n11. Download Section\r\n12. Back to top\r\n------------------*/\n/*----- 1. Reset.css -----*/\n/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-weight: 400; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* --- Common Styles ---*/\nh1 {\n  font-size: 16px; }\n/*----- Helper Classes -----*/\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n  position: fixed;\n  display: block;\n  width: 100%;\n  left: 0; }\n.navbar .dropdown-menu {\n  border-top: 3px solid #999; }\n.navbar .dropdown-menu a {\n    padding: 0.55rem 1.5rem;\n    font-size: .9rem; }\n.navbar .dropdown-menu a:hover {\n      background-color: #f1f1f1; }\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: .8rem;\n    padding-left: .8rem; } }\n@media screen and (max-width: 992px) {\n  .navbar .dropdown-menu a {\n    text-align: center; }\n  .navbar-default .navbar-collapse {\n    text-align: center;\n    background: #FFFFFF !important; }\n  .navbar .dropdown-menu {\n    border: none;\n    width: 80%;\n    margin: 10px auto; }\n    .navbar .dropdown-menu a {\n      border-bottom: 1px solid #f4f7fa; }\n      .navbar .dropdown-menu a:last-child {\n        border-bottom: none; }\n  .navbar-light .navbar-nav .nav-item {\n    border-bottom: 1px solid #f4f7fa;\n    padding: 15px 0; }\n    .navbar-light .navbar-nav .nav-item > a {\n      margin-top: 0;\n      padding: 0; }\n    .navbar-light .navbar-nav .nav-item:last-child {\n      border-bottom: none; }\n    .navbar-light .navbar-nav .nav-item.dropdown.show {\n      padding-bottom: 0; }\n  /* dropdown-menu */ }\n@media screen and (min-width: 992px) {\n  .dropdown:hover .dropdown-menu, .btn-group:hover .dropdown-menu {\n    display: block; }\n  .navbar .dropdown-menu:after {\n    content: \"\";\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 6px solid transparent;\n    border-left-color: #999;\n    border-top-color: #999;\n    position: absolute;\n    top: -7px;\n    left: 25px; } }\nhtml * {\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.img-circle {\n  border-radius: 50%; }\n* {\n  box-sizing: border-box; }\n*:after, *:before {\n    box-sizing: border-box; }\n/*\r\n::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n*/\n::-moz-selection, ::-moz-selection {\n  color: #fff;\n  background: #04a9f5; }\n::-moz-selection, ::selection {\n  color: #fff;\n  background: #04a9f5; }\n.nopadding {\n  padding: 0; }\n.custom-padding {\n  padding-left: 10px;\n  padding-right: 10px; }\n.no-margin {\n  margin-right: 0;\n  margin-left: 0; }\n.sup-title {\n  display: inline-block;\n  font-size: 1em;\n  padding: 4px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #FFFFFF;\n  background: #000000;\n  margin: 0 0 20px 0; }\n.spacer {\n  width: 100%;\n  height: 50px; }\n#loading {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  opacity: 1;\n  background-color: #F2F2F2;\n  z-index: 9999;\n  text-align: center; }\n#loading-image {\n  display: inline;\n  top: 40%;\n  position: relative;\n  z-index: 9999; }\n.spacer {\n  width: 100%;\n  height: 50px; }\n.spacer-big {\n  width: 100%;\n  height: 100px; }\n.error-message {\n  color: #FF3333;\n  margin-top: 5px; }\n.success-message {\n  color: #33cc33;\n  margin-top: 5px; }\n.btn-fill {\n  background: #FFFFFF;\n  color: #04a9f5;\n  border: 2px solid #04a9f5;\n  -webkit-transition: 200ms;\n  transition: 200ms; }\n.btn-fill:hover, .btn-fill:focus {\n    color: #04a9f5;\n    background: transparent;\n    border: 2px solid #04a9f5; }\n/* ------ Navbar Styling Starts ----- */\n.navbar {\n  font-size: 14px;\n  font-weight: 500;\n  padding-top: 25px;\n  letter-spacing: 1px;\n  height: 80px;\n  z-index: 99; }\n.navbar-default {\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n  border-color: transparent;\n  background-color: transparent; }\n.navbar-default .navbar-toggle {\n    border-radius: 0px;\n    border-color: transparent; }\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: transparent; }\n.navbar-default .navbar-toggle .icon-bar {\n      background-color: #111111; }\n.navbar-default .navbar-brand {\n    padding: 0 0;\n    -webkit-transition: 200ms;\n    transition: 200ms; }\n.navbar-default .navbar-brand .navbar-toggle .collapsed {\n      padding: 4px 6px;\n      font-size: 16px;\n      color: #111111; }\n.navbar-default .navbar-brand:hover {\n      -webkit-transition: 1s;\n      transition: 1s; }\n.navbar-default .navbar-nav > li > a {\n    color: #666666;\n    font-weight: 700;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n.navbar-default .navbar-nav > li > a:hover {\n      color: #000000; }\n.navbar-default .navbar-nav > .active > a {\n    background: transparent;\n    color: #FFFFFF; }\n.navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n      background: transparent;\n      color: #FFFFFF; }\n.navbar-default .navbar-collapse {\n    border-color: transparent;\n    background-color: transparent; }\n.navbar-default .navbar-nav .open .dropdown-toggle {\n    color: #111111; }\n.navbar-default .nav-white > li > a {\n    color: #FFFFFF; }\n.navbar-default .nav-white > li > a:hover {\n      color: #999999; }\n/*---------- Media Queries ---------*/\n@media only screen and (max-width: 767px) {\n  .navbar {\n    padding-top: 5px;\n    height: 60px; }\n  .navbar-default {\n    border: 0px;\n    background-color: transparent; }\n    .navbar-default .navbar-collapse {\n      text-align: center;\n      border-color: transparent;\n      background-color: #FFFFFF;\n      border: 0;\n      border-color: transparent; }\n    .navbar-default .navbar-nav > li > a {\n      color: #222222;\n      margin-top: 10px; }\n      .navbar-default .navbar-nav > li > a:hover {\n        color: #222222; }\n    .navbar-default .navbar-brand {\n      color: #FFFFFF;\n      padding: 8px 8px !important; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #111111; } }\n@media only screen and (min-width: 240px) {\n  .navbar.past-main {\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n    height: 50px;\n    background-color: rgba(255, 255, 255, 0.99); }\n  .navbar.effect-main:active {\n    -webkit-transition: height 0.6s;\n    /* For Safari 3.1 to 6.0 */\n    transition: height 0.6s;\n    height: 60px; }\n  .navbar.past-main {\n    font-size: 14px;\n    padding-top: 5px;\n    height: 60px;\n    box-shadow: 0 1px 5px 0 rgba(96, 96, 96, 0.3);\n    -webkit-transition: height 0.6s;\n    /* For Safari 3.1 to 6.0 */\n    transition: height 0.6s; }\n  .navbar-default.past-main .navbar-brand {\n    padding: 8px 0; }\n  .navbar-default.past-main .navbar-toggle .icon-bar {\n    background-color: #111111; }\n  .navbar-default.past-main .navbar-nav > li > a {\n    color: #2c394a;\n    -webkit-transition: color 0.5s;\n    transition: color 0.5s; }\n    .navbar-default.past-main .navbar-nav > li > a:hover {\n      color: #111111; }\n  .navbar-default.past-main .navbar-nav > .active > a {\n    background: transparent;\n    color: #04a9f5; }\n    .navbar-default.past-main .navbar-nav > .active > a:hover, .navbar-default.past-main .navbar-nav > .active > a:focus {\n      background: transparent;\n      color: #222222; } }\n/* ------ Navbar Styling Ends ----- */\n#main {\n  height: 100%; }\n/* ----- Hero Section Styling Starts ----- */\n.hero-section {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.9)), to(rgba(0, 0, 0, 0.1))), url('hero3.jpg');\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url('hero3.jpg');\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  background-position: 50% 60%; }\n.jarallax {\n  position: relative;\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n.hero-content {\n  width: 100%;\n  padding: 200px 0 100px 0;\n  overflow: hidden; }\n.hero-content h1 {\n    font-size: 34px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.3;\n    letter-spacing: -1px;\n    margin-bottom: 20px; }\n.hero-content p {\n    font-size: 14px;\n    color: #111111;\n    line-height: 1.6;\n    letter-spacing: 1px;\n    margin-bottom: 30px; }\n.btn-action {\n  background-color: #04a9f5;\n  border: 2px solid #04a9f5;\n  border-radius: 0;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  line-height: 3;\n  padding: 0 21px;\n  text-transform: uppercase;\n  outline: none;\n  -webkit-transition: 200ms;\n  transition: 200ms; }\n.hero-content .btn-action:hover, .hero-content .btn-action:focus {\n  background: transparent;\n  outline: none;\n  color: #04a9f5;\n  border-color: #04a9f5; }\n.hero-content .btn-action:active {\n  background: transparent;\n  outline: none;\n  color: #04a9f5;\n  border-color: #04a9f5; }\n.hero-content .btn-action:active:focus {\n    background: transparent;\n    outline: none;\n    color: #04a9f5;\n    border-color: #04a9f5; }\n.btn-action:hover, .btn-action:focus {\n  background: transparent;\n  outline: none;\n  color: #04a9f5;\n  border-color: #04a9f5; }\n.btn-action:active {\n  background: transparent;\n  outline: none;\n  color: #04a9f5;\n  border-color: #04a9f5; }\n.btn-action:active:focus {\n    background: transparent;\n    outline: none;\n    color: #04a9f5;\n    border-color: #04a9f5; }\n.txt-white h1, .txt-white p {\n  color: #FFFFFF; }\n.app-hero {\n  background: #f4f7fa; }\n.app-hero-content {\n  overflow: hidden;\n  padding: 150px 0 0 0; }\n.app-hero-content h1, .app-hero-content p {\n    color: #111111; }\n.app-hero-content img {\n    margin-top: 50px; }\n.app-sub {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.6)), to(rgba(255, 255, 200, 0.1))), url('feature_bg.jpg') no-repeat center center;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 200, 0.1)), url('feature_bg.jpg') no-repeat center center;\n  background-size: cover; }\n.app-sub-inner {\n  width: 100%;\n  height: 100%;\n  padding: 100px 0 100px 0;\n  overflow: hidden; }\n.app-sub-content {\n  padding: 100px 0 0 0; }\n.app-sub-content h1 {\n    font-size: 42px;\n    font-weight: 700;\n    color: #111111;\n    line-height: 1.2;\n    margin-bottom: 30px; }\n.app-sub-content p {\n    font-size: 16px;\n    font-weight: 100;\n    color: #111;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n.app-sub-content .subscribe-form {\n    text-align: left; }\n/* ----- Hero Section Styling Ends ----- */\n/* ----- About Section Styling Starts ----- */\n.services-section {\n  background: #FFFFFF; }\n.services-content {\n  padding-top: 100px;\n  padding-bottom: 75px; }\n.services-content h1 {\n    font-size: 24px;\n    color: #111111;\n    font-weight: 600;\n    letter-spacing: 0;\n    line-height: 1.4;\n    margin-bottom: 10px; }\n.services-content p {\n    font-size: 14px;\n    color: #666666;\n    font-weight: 400;\n    letter-spacing: 1px;\n    line-height: 1.4;\n    margin-top: 0px; }\n.services {\n  overflow: hidden;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n.services .services-icon {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    border: 2px solid;\n    border-color: transparent;\n    background: #F6F6F6;\n    margin: 0 auto;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n.services .services-icon img {\n      position: absolute;\n      top: 10%;\n      left: 11%;\n      font-size: 42px; }\n.services .services-description {\n    margin-bottom: 50px; }\n.services .services-description h1 {\n      font-size: 18px;\n      color: #111111;\n      font-weight: 600;\n      letter-spacing: 0;\n      line-height: 1.4;\n      margin-top: 20px;\n      margin-bottom: 20px; }\n.services .services-description p {\n      font-size: 14px;\n      color: #666666;\n      letter-spacing: 1px;\n      line-height: 1.5;\n      margin-top: 0; }\n.services .col-sm-4:hover .services-icon {\n    border-color: #04a9f5; }\n/* ----- Service Section Styling Ends ----- */\n/* -----------------------------------------------\r\n----------- Flex Features Styling Starts ---------\r\n-------------------------------------------------*/\n.flex-features {\n  background: #f4f7fa;\n  padding-top: 0;\n  padding-bottom: 50px; }\n.flex-split {\n  padding-top: 50px;\n  padding-bottom: 0;\n  background: #f4f7fa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.flex-split .f-left {\n    -webkit-box-flex: 1;\n            flex: 1 0 50%;\n    background: #f4f7fa;\n    padding: 10px; }\n.flex-split .f-left img {\n      margin-top: 30px;\n      margin: 0 auto; }\n.flex-split .f-right {\n    -webkit-box-flex: 1;\n            flex: 1 0 50%;\n    background: #f4f7fa;\n    padding: 30px 20px 20px 20px; }\n.flex-split .f-right h2 {\n      font-size: 28px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.6; }\n.flex-split .f-right p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.6;\n      letter-spacing: 1px;\n      margin: 20px 0 20px 0; }\n.flex-split .f-right ul {\n      margin-bottom: 20px; }\n.flex-split .f-right ul i {\n        margin-right: 10px; }\n.flex-split .f-right li {\n      font-size: 14px;\n      color: #111111;\n      line-height: 2; }\n/* -----------------------------------------------\r\n----------- Flex Features Styling Ends -----------\r\n-------------------------------------------------*/\n/* ----- Features Section Styling Starts ----- */\n.features-section {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.features-section .f-left {\n    -webkit-box-flex: 1;\n            flex: 1 0 50%;\n    background: #f4f7fa; }\n.features-section .f-right {\n    -webkit-box-flex: 1;\n            flex: 1 0 50%;\n    background: url('iphone_hand_1.jpg');\n    background-position: 50% 50%;\n    background-size: cover; }\n.features-section .f-right img {\n      margin-top: 0; }\n.features-section .f-left {\n    padding: 30px; }\n.features-section .f-left h2 {\n      font-size: 28px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.3;\n      margin-top: 40px; }\n.features-section .f-left p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 20px;\n      margin-bottom: 30px; }\n.features-section .btn-action {\n    margin-bottom: 20px; }\n/*----- Features Section Styling Ends ----- */\n/* ----- Features Section 2 Styling ----- */\n.features-section-2 {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.99)), to(rgba(255, 255, 255, 0))), url('feature_bg.jpg') no-repeat center center;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0)), url('feature_bg.jpg') no-repeat center center;\n  background-size: cover; }\n.features-section-2 .features-content {\n    padding: 0; }\n.features-section-2 .features-content h2 {\n      font-size: 21px;\n      color: #111111;\n      font-weight: 600;\n      line-height: 1.3;\n      letter-spacing: 0;\n      margin-top: 20px; }\n.features-section-2 .features-content h4 {\n      font-size: 18px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 10px;\n      margin-bottom: 50px; }\n.features-section-2 .features-content p {\n      font-size: 14px;\n      color: #111111;\n      line-height: 1.3;\n      letter-spacing: 1px;\n      margin-top: 10px;\n      margin-bottom: 20px; }\n/* ----- Features Section 2 Styling ----- */\n/* ----- Features Section Styling Ends ----- */\n/* ----- Counter Section Styling Starts -----*/\n.counter-section {\n  width: 100%;\n  padding-top: 100px;\n  padding-bottom: 50px;\n  background: #FFFFFF; }\n.counter-section h3 {\n    font-size: 28px;\n    font-weight: 400;\n    color: #303030; }\n.counter-icon {\n  padding: 15px; }\n.counter-icon i {\n    font-size: 42px;\n    color: #ff642e; }\n.counter-text {\n  margin-top: 10px;\n  margin-bottom: 20px; }\n.counter-text h4 {\n    font-size: 16px;\n    font-weight: 400;\n    padding: 0.5em;\n    color: #111111; }\n/* -------- Counter Section Styling Ends --------- */\n/*------ Feature Big Section Styling Starts ------ */\n.feature_huge {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #f4f7fa; }\n.feature_huge img {\n    margin: 0 auto;\n    margin-bottom: 50px; }\n.feature_huge .feature_list {\n    margin: 0 auto;\n    margin-top: 30px; }\n.feature_huge .feature_list img {\n      width: 60px;\n      height: 60px;\n      margin-bottom: 10px; }\n.feature_huge .feature_list h1 {\n      font-size: 18px;\n      font-weight: 600;\n      padding: 0.5em;\n      color: #111111; }\n.feature_huge .feature_list p {\n      font-size: 12px;\n      font-weight: 400;\n      padding: 0.5em;\n      color: #606060;\n      letter-spacing: 1px;\n      line-height: 1.3;\n      margin-bottom: 20px; }\n/*------ Feature Big Section Styling Ends ------ */\n/* -------- Testimonials Section Starts --------- */\n.testimonial-section {\n  background: #FFFFFF;\n  padding-top: 50px; }\n.testimonial-section h1 {\n    font-size: 34px;\n    font-weight: 500;\n    color: #111111;\n    margin-top: 3em; }\n.testimonial-section .sub {\n    font-size: 16px;\n    color: #111111;\n    line-height: 1.5;\n    margin-top: 30px;\n    letter-spacing: 1px; }\n.testimonials {\n  margin-top: 4em;\n  width: 100%;\n  margin-bottom: 4em; }\n.testimonials-2 {\n  margin-bottom: 5em; }\n.testimonial-single img {\n  width: 80px;\n  height: 80px; }\n.testimonial-text h3 {\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 1.5;\n  color: #000000; }\n.testimonial-text .ion {\n  display: inline-block;\n  margin-top: 20px;\n  font-size: 14px;\n  color: #ff8000; }\n.testimonial-text p {\n  font-size: 14px;\n  padding: 20px 10px 20px 10px;\n  letter-spacing: 1px;\n  line-height: 1.5;\n  color: #111111; }\n/* -------- Testimonials Section -------- */\n/* ------ Download Section Styling------------ */\n.download {\n  width: 100%;\n  height: 100%;\n  background: #f4f7fa; }\n.app-img {\n  display: inline-block;\n  margin-top: 5em; }\n.app-info h3 {\n  font-size: 34px;\n  font-weight: 500;\n  color: #404040;\n  margin-top: 20px; }\n.app-info h4 {\n  font-size: 18px;\n  color: #3C4B5D;\n  margin-top: 20px; }\n.app-info ul {\n  margin-top: 20px; }\n.app-info span {\n  font-size: 12px;\n  font-weight: 400;\n  color: #222222; }\n.app-info .ion {\n  font-size: 1em;\n  color: #ff8000; }\n.download-buttons {\n  margin-top: 3em;\n  margin-bottom: 5em; }\n.download-buttons img {\n    height: 50px;\n    width: 160px; }\n/*------ Download Section Styling Ends ------ */\n/* ----- Pricing Section Styling Starts ----- */\n.pricing-section {\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #f4f7fa; }\n.pricing-intro {\n  padding-bottom: 30px; }\n.pricing-intro h1 {\n    font-size: 28px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.4; }\n.pricing-intro p {\n    font-size: 15px;\n    color: #303030;\n    line-height: 1.4;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    margin-bottom: 50px; }\n.pricing-section .table-left, .pricing-section .table-right {\n  padding: 20px 20px 50px 20px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #EFEFEF;\n  max-width: 400px; }\n.table-left .icon, .table-right .icon {\n  padding: 50px 50px 40px 50px; }\n.table-left .icon img, .table-right .icon img {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto; }\n.table-left .pricing-details span, .table-right .pricing-details span {\n  display: inline-block;\n  font-size: 34px;\n  font-weight: 600;\n  color: #808080;\n  margin-bottom: 20px; }\n.table-left .pricing-details h2, .table-right .pricing-details h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #505050;\n  margin-bottom: 20px; }\n.table-left .pricing-details p, .table-right .pricing-details p {\n  font-size: 14px;\n  color: #505050;\n  letter-spacing: 1px;\n  line-height: 1.4; }\n.table-left .pricing-details ul, .table-right .pricing-details ul {\n  margin-top: 30px;\n  margin-bottom: 50px; }\n.table-left .pricing-details li, .table-right .pricing-details li {\n  font-size: 14px;\n  font-weight: 400;\n  color: #505050;\n  line-height: 1.4;\n  margin-bottom: 10px; }\n.pricing-section .table-left:hover, .pricing-section .table-right:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }\n/* ----- Pricing Section Styling Ends ----- */\n/* ----- CTA Section Styling Starts ----- */\n.cta-sub {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background: #f4f7fa; }\n.cta-sub h1 {\n    font-size: 28px;\n    color: #111111;\n    font-weight: 600;\n    line-height: 1.3;\n    margin-top: 10px;\n    margin-bottom: 0; }\n.cta-sub p {\n    font-size: 16px;\n    color: #303030;\n    line-height: 1.5;\n    margin-top: 20px;\n    margin-bottom: 40px; }\n.subscribe-form {\n  text-align: center; }\n.subscribe-form .mail {\n    background-color: #F9F9F9;\n    border: none;\n    border-radius: 5px 0 0 5px;\n    outline: none;\n    height: 40px;\n    padding: 0 150px 0 20px;\n    box-shadow: none;\n    box-sizing: content-box;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n.subscribe-form input {\n    color: #222222;\n    padding: 0;\n    font-size: 0.9em; }\n.subscribe-form .submit-button {\n    font-size: 0.9em;\n    height: 40px;\n    border: 2px solid;\n    border-radius: 0 5px 5px 0;\n    margin: 0;\n    padding: 0 25px 0 25px;\n    border-color: #04a9f5;\n    background-color: #04a9f5;\n    color: #FFFFFF;\n    box-shadow: 0 0 1px transparent;\n    outline: none; }\n.subscribe-form .submit-button:hover {\n      box-shadow: 0 0 10px #FFFFFF;\n      -webkit-transition: 500ms;\n      transition: 500ms; }\n/* ----- CTA Section Styling Ends ----- */\n/* ----- Client Sectiion Styling ----- */\n.client-section {\n  background-color: #f4f7fa; }\n.clients ul li {\n  display: inline; }\n.clients .single img {\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%); }\n/* ------- Footer Section Styling Starts ------- */\n.footer {\n  background-color: #f4f7fa;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n.footer img {\n    margin-bottom: 20px; }\n.footer-menu ul {\n  list-style-type: none; }\n.footer-menu li {\n  display: inline;\n  line-height: 2;\n  font-size: 14px;\n  padding-right: 15px;\n  text-transform: uppercase; }\n.footer-menu li a {\n    color: #707570;\n    text-decoration: none; }\n.footer-text p {\n  font-size: 14px;\n  color: #707570;\n  line-height: 2;\n  letter-spacing: 1px;\n  margin-top: 10px; }\n/* ------- Footer Section Styling Starts ------- */\n.no-color {\n  background: #FFFFFF; }\n/*---------------------------------------------------\r\n----------- Contact Page Styling Starts -------------\r\n---------------------------------------------------*/\n.contact-section {\n  width: 100%;\n  height: 100%;\n  padding: 150px 0 50px 0;\n  background: #FFF; }\n.contact-section h1 {\n    font-size: 28px;\n    font-weight: 600;\n    color: #111111;\n    line-height: 1.3;\n    margin-bottom: 20px; }\n.contact-section p {\n    font-size: 14px;\n    color: #111111;\n    line-height: 1.4; }\n/* ------------ Contact Form Styling --------*/\n.contact-form {\n  padding-top: 50px; }\nlabel {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-align: left; }\n.form-control {\n  border: 0px;\n  border-radius: 0px;\n  margin-top: 10px;\n  background: transparent;\n  margin-bottom: 40px;\n  border-bottom: 1px solid #999999;\n  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n.form-control:focus {\n    border-color: #04a9f5;\n    box-shadow: none; }\n.form-control::-webkit-input-placeholder, .form-control:-moz-placeholder, .form-control::-moz-placeholder, .form-control:-ms-input-placeholder {\n    font-size: 13px;\n    color: #999999; }\n.text-muted {\n  font-size: 13px;\n  color: #222; }\n.text-muted strong {\n    color: #FF3333; }\n.btn-send {\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  color: #FFFFFF;\n  background: #04a9f5;\n  border-color: #04a9f5;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n.btn-send:hover, .btn-send:focus {\n    color: #FFFFFF;\n    background: #000000;\n    border-color: #111111;\n    outline: none !important; }\n/* -------- Contact Section Styling Ends ---- */\n/* -------------------------------------------------------\r\n----------- Bact-to-Top Styling Starts Here --------------\r\n---------------------------------------------------------*/\n.back-to-top {\n  background: rgba(46, 216, 182, 0.5);\n  margin: 0;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  z-index: 90;\n  display: none;\n  text-decoration: none;\n  color: #0E1729; }\n.back-to-top i {\n    position: relative;\n    left: 13px;\n    top: 8px;\n    font-size: 24px;\n    color: #FFFFFF;\n    -webkit-transition: 200ms;\n    transition: 200ms; }\n.back-to-top:hover {\n    background: rgba(46, 216, 182, 0.9);\n    color: #FFFFFF; }\n.back-to-top:hover i {\n      top: 6px; }\n.back-to-top:focus {\n    color: #FFFFFF; }\n/*---------------------------------------------------\r\n----------- Contact Page Styling Ends -------------\r\n---------------------------------------------------*/\n/*----------------------------------------------------\r\n------------- All ------------------------------------\r\n--------------------- Media --------------------------\r\n------------------------------- Queries --------------\r\n-----------------------------------------------------*/\n@media only screen and (min-width: 767px) {\n  #left, #right {\n    width: 25px; }\n  #top, #bottom {\n    height: 25px; }\n  .custom-padding {\n    padding-left: 80px;\n    padding-right: 80px; }\n  .hero-content {\n    width: 100%;\n    padding: 260px 0 120px 0; }\n    .hero-content h1 {\n      font-size: 64px;\n      font-weight: 600;\n      line-height: 1.2;\n      margin-top: 0;\n      letter-spacing: -2px;\n      margin-bottom: 25px; }\n    .hero-content p {\n      font-size: 14px; }\n  .btn-action {\n    border: 2px solid #04a9f5;\n    font-weight: 500;\n    padding: 0 24px; }\n    .btn-action a {\n      color: #fff; }\n      .btn-action a:hover {\n        color: #04a9f5; }\n  .btn-fill {\n    border: 2px solid #04a9f5;\n    height: 38px; }\n  .app-hero-content {\n    padding: 150px 0 0 0; }\n    .app-hero-content h1 {\n      font-size: 42px;\n      font-weight: 600;\n      line-height: 1.2;\n      letter-spacing: -1px;\n      margin-top: 25px; }\n    .app-hero-content p {\n      font-size: 16px; }\n  .app-sub-inner {\n    padding: 180px 0 100px 0; }\n  .app-sub-content h1 {\n    font-size: 64px;\n    font-weight: 700;\n    margin-bottom: 30px; }\n  .app-sub-content p {\n    font-size: 16px;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n  .cta-small .cta-content span {\n    position: absolute;\n    left: -30px; }\n  .cta-small .cta-content h2 {\n    font-size: 14px; }\n  .services-content h1 {\n    font-size: 28px;\n    line-height: 1.4; }\n  .services-content p {\n    font-size: 14px; }\n  .services .services-description {\n    margin-bottom: 75px; }\n  .flex-features {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n  .flex-split {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n    .flex-split .f-right {\n      padding: 50px 20px 20px 20px; }\n  .features-section {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n    .features-section .f-left {\n      padding: 60px; }\n      .features-section .f-left h2 {\n        font-size: 34px; }\n    .features-section .f-right {\n      -webkit-box-flex: 1;\n              flex: 1 0 50%; }\n  .features-section-2 {\n    padding-top: 50px;\n    padding-bottom: 50px; }\n    .features-section-2 .features-content {\n      padding: 50px; }\n      .features-section-2 .features-content h2 {\n        font-size: 34px;\n        margin-top: 20px; }\n      .features-section-2 .features-content h4 {\n        font-size: 21px; }\n      .features-section-2 .features-content p {\n        font-size: 15px; }\n  .counter-up {\n    margin-bottom: 2em; }\n  .counter-text {\n    margin-bottom: 0; }\n  .counter-section h3 {\n    font-size: 34px; }\n  .counter-text h4 {\n    font-size: 18px; }\n  .feature_huge .feature_list img {\n    width: 65px;\n    height: 65px; }\n  .feature_huge .feature_list h1 {\n    font-size: 18px;\n    font-weight: 600;\n    padding: 0.5em;\n    color: #232323; }\n  .feature_huge .feature_list p {\n    font-size: 14px; }\n  .testimonial-section h1 {\n    font-size: 2em; }\n  .pricing-section .table-left, .pricing-section .table-right {\n    margin: 0 auto; }\n  .contact-section {\n    padding: 200px 0 100px 0; }\n    .contact-section h1 {\n      font-size: 42px; }\n    .contact-section p {\n      font-size: 16px; }\n  .contact-form {\n    padding-top: 100px; } }\n@media screen and (min-width: 400px) and (max-width: 600px) {\n  .subscribe-form .mail {\n    padding: 0 30px 0 20px;\n    border-radius: 5px 0 0 5px; }\n  .subscribe-form .submit-button {\n    padding: 0 5px 0 5px;\n    border-radius: 0 5px 5px 0; } }\n@media screen and (max-width: 399px) {\n  .subscribe-form .mail {\n    text-align: center;\n    padding: 0 0 0 0;\n    border-radius: 5px 0 0 5px; }\n  .subscribe-form .submit-button {\n    padding: 0 5px 0 5px;\n    border-radius: 0 5px 5px 0;\n    margin-top: 15px; }\n  .app-info {\n    margin-bottom: 0em; }\n  .download-buttons img {\n    height: 40px;\n    width: 120px; }\n  .back-to-top {\n    right: 10px; } }\n@media only screen and (min-width: 992px) {\n  .pricing-section .table-left, .pricing-section .table-right {\n    padding: 50px; } }\n@media only screen and (min-width: 767px) and (max-width: 992px) {\n  .app-sub-content h1 {\n    font-size: 34px;\n    margin-bottom: 30px; }\n  .app-sub-content p {\n    font-size: 16px;\n    line-height: 1.4;\n    margin-bottom: 30px; }\n  .pricing-section .table-left {\n    margin-right: 10px; }\n  .pricing-section .table-right {\n    margin-left: 10px; } }\n/* ------ Features Split Section Media Queries ----- */\n@media only screen and (min-width: 769px) {\n  .flex-split {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n    .flex-split .f-right h2 {\n      font-size: 34px; } }\n@media only screen and (min-width: 769px) and (max-width: 1024px) {\n  .flex-split .f-left img {\n    margin-top: 30px; }\n  .flex-split .f-right {\n    padding: 10px 20px 20px 20px; } }\n@media only screen and (min-width: 1024px) and (max-width: 1180px) {\n  .flex-split .f-left img {\n    margin-top: 50px; } }\n@media only screen and (min-width: 1024px) {\n  .flex-split .f-left {\n    padding: 30px 10px 10px 10px; }\n  .flex-split .f-right {\n    padding: 40px 50px 50px 50px; } }\n/* ------ Features Split Section Media Queries Ends  ----- */\n@media only screen and (max-width: 766px) {\n  .features-section .f-right {\n    -webkit-box-flex: 1;\n            flex: 1 0 50%;\n    height: 360px; } }\n@media only screen and (max-width: 1142px) {\n  .features-section-2 .features-content {\n    padding: 0;\n    padding: 10px; }\n    .features-section-2 .features-content h2 {\n      margin-top: 10px; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hc3NldHMvbGFuZGluZy9jc3Mvc3R5bGUuc2NzcyIsInNyYy9hc3NldHMvbGFuZGluZy9jc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7ZUNFZTtBRENmOzs7Ozs7Ozs7Ozs7O21CQ2FtQjtBRENuQiwyQkFBQTtBQUNBOzs7Q0NHQztBREVEO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7QUFHbEIsZ0RBQUE7QUFFQTtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLG9DQUFvQztFQUNwQyxjQUFjLEVBQUE7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBRUksV0FBVztFQUNYLGFBQWEsRUFBQTtBQUlqQjtFQUVJLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFJakI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7QUFHbkIseUJBQUE7QUFFQTtFQUNFLGVBQWUsRUFBQTtBQUdqQiw2QkFBQTtBQUVBO0VBQ0UsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxPQUFPLEVBQUE7QUFHVDtFQUNFLDBCQUEwQixFQUFBO0FBRDVCO0lBR0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBO0FBSnBCO01BTU0seUJBQXlCLEVBQUE7QUFLL0I7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUIsRUFBQSxFQUNwQjtBQUdIO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLGtCQUFrQjtJQUNsQiw4QkFBOEIsRUFBQTtFQUVoQztJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7SUFIbkI7TUFLSSxnQ0FBZ0Ms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QzFCLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0Usa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxZQUFZO0lBQ1osWUFBWSxFQUFBO0VBRWQ7SUFDRSxXQUFXLEVBQUEsRUFDWjtBQUdIO0VBQ0U7SUFFSSxhQUFhLEVBQUEsRUFDZDtBQUlMO0VBQ0U7SUFFSSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFIdkI7SUFNSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBR3ZCO0lBRUksa0JBQWtCLEVBQUE7RUFGdEI7SUFLSSxpQkFBaUIsRUFBQSxFQUNsQjtBQUlMLHNEQUFBO0FBQ0E7RUFDRTtJQUVFLG9CQUFhO0lBQWIsYUFBYTtJQUViLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7SUFKckI7TUFNSSxlQUFlLEVBQUEsRUFDaEI7QUFJTDtFQUNFO0lBRUksZ0JBQWdCLEVBQUE7RUFGcEI7SUFLSSw0QkFBNEIsRUFBQSxFQUM3QjtBQUlMO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQjtBQUdIO0VBQ0U7SUFFSSw0QkFBNEIsRUFBQTtFQUZoQztJQUtJLDRCQUE0QixFQUFBLEVBQzdCO0FBSUwsNERBQUE7QUFDQTtFQUNFO0lBQ0UsbUJBQWE7WUFBYixhQUFhO0lBQ2IsYUFBYSxFQUFBLEVBQ2Q7QUFHSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBQTtJQUZmO01BSUksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2Fzc2V0cy9sYW5kaW5nL2Nzcy9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLVxyXG5BbGwgQ29udGVudHNcclxuLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcbjEuIFJlc2V0LmNzc1xyXG4yLiBIZWxwZXIgQ2xhc3Nlc1xyXG4zLiBNYWluIGFuZCBIZXJvIFNlY3Rpb24gU3R5bGluZ3NcclxuNC4gU2VydmljZXMgU3R5bGluZ1xyXG41LiBGZWF0dXJlcyBTcGxpdFxyXG42LiBGZWF0dXJlIHdpdGggQkdcclxuNy4gRmVhdHVyZSBCaWdcclxuOC4gVGVzdGltb25pYWwgU3RsaW5nXHJcbjkuIFByaWNpbmcgU2VjdGlvblxyXG4xMC4gQ2FsbCBUbyBBY3Rpb24gU3Vic2NyaWJlXHJcbjExLiBEb3dubG9hZCBTZWN0aW9uXHJcbjEyLiBCYWNrIHRvIHRvcFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tIDEuIFJlc2V0LmNzcyAtLS0tLSovXHJcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcblxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLCBxIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnEge1xyXG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiAtLS0gQ29tbW9uIFN0eWxlcyAtLS0qL1xyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyotLS0tLSBIZWxwZXIgQ2xhc3NlcyAtLS0tLSovXHJcblxyXG4ubmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM5OTk7XHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAwLjU1cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuOHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBhIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY3ZmE7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICA+IGEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY3ZmE7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgJi5kcm9wZG93bi5zaG93IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIGRyb3Bkb3duLW1lbnUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUsIC5idG4tZ3JvdXA6aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM5OTk7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbmh0bWwgKiB7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAmOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4qL1xyXG5cclxuOjotbW96LXNlbGVjdGlvbiwgOjpzZWxlY3Rpb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMwNGE5ZjU7XHJcbn1cclxuXHJcbi5ub3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFkZGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnN1cC10aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNsb2FkaW5nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2FkaW5nLWltYWdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNwYWNlci1iaWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI0ZGMzMzMztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjMzNjYzMzO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJ0bi1maWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiAjMDRhOWY1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcztcclxuICAtbW96LXRyYW5zaXRpb246IDIwMG1zO1xyXG4gIC1vLXRyYW5zaXRpb246IDIwMG1zO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwNGE5ZjU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0gTmF2YmFyIFN0eWxpbmcgU3RhcnRzIC0tLS0tICovXHJcblxyXG4ubmF2YmFyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm5hdmJhci1kZWZhdWx0IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLm5hdmJhci10b2dnbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5pY29uLWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgLm5hdmJhci10b2dnbGUgLmNvbGxhcHNlZCB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAyMDBtcztcclxuICAgIC1vLXRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2ID4ge1xyXG4gICAgbGkgPiBhIHtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlID4gYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgfVxyXG4gIC5uYXYtd2hpdGUgPiBsaSA+IGEge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0gTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI0MHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICAmLnBhc3QtbWFpbiB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KTtcclxuICAgIH1cclxuICAgICYuZWZmZWN0LW1haW46YWN0aXZlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC42cztcclxuICAgICAgLyogRm9yIFNhZmFyaSAzLjEgdG8gNi4wICovXHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAmLnBhc3QtbWFpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoOTYsIDk2LCA5NiwgMC4zKTtcclxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDk2LCA5NiwgOTYsIDAuMyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoOTYsIDk2LCA5NiwgMC4zKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC42cztcclxuICAgICAgLyogRm9yIFNhZmFyaSAzLjEgdG8gNi4wICovXHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQucGFzdC1tYWluIHtcclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiA+IHtcclxuICAgICAgbGkgPiBhIHtcclxuICAgICAgICBjb2xvcjogIzJjMzk0YTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWN0aXZlID4gYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwNGE5ZjU7XHJcbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tIE5hdmJhciBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cclxuXHJcbiNtYWluIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC0tLS0tIEhlcm8gU2VjdGlvbiBTdHlsaW5nIFN0YXJ0cyAtLS0tLSAqL1xyXG5cclxuLmhlcm8tc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuOSksIHJnYmEoMCwgMCwgMCwgMC4xKSksIHVybChcIi4uL2ltYWdlcy9oZXJvMy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA2MCU7XHJcbn1cclxuXHJcbi5qYXJhbGxheCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9oZXJvLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxufVxyXG5cclxuLmhlcm8tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjAwcHggMCAxMDBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzExMTExMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhOWY1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG4gIHBhZGRpbmc6IDAgMjFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcztcclxuICAtbW96LXRyYW5zaXRpb246IDIwMG1zO1xyXG4gIC1vLXRyYW5zaXRpb246IDIwMG1zO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG59XHJcblxyXG4uaGVyby1jb250ZW50IC5idG4tYWN0aW9uIHtcclxuICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDRhOWY1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDRhOWY1O1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzA0YTlmNTtcclxuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY29sb3I6ICMwNGE5ZjU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDRhOWY1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDRhOWY1O1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzA0YTlmNTtcclxuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY29sb3I6ICMwNGE5ZjU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50eHQtd2hpdGUge1xyXG4gIGgxLCBwIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxufVxyXG5cclxuLmFwcC1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhO1xyXG59XHJcblxyXG4uYXBwLWhlcm8tY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxNTBweCAwIDAgMDtcclxuICBoMSwgcCB7XHJcbiAgICBjb2xvcjogIzExMTExMTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwLXN1YiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCByZ2JhKDI1NSwgMjU1LCAyMDAsIDAuMSkpLCB1cmwoLi4vaW1hZ2VzL2ZlYXR1cmVfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYXBwLXN1Yi1pbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHggMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYXBwLXN1Yi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLnN1YnNjcmliZS1mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLSBIZXJvIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tICovXHJcbi8qIC0tLS0tIEFib3V0IFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0gKi9cclxuXHJcbi5zZXJ2aWNlcy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uc2VydmljZXMtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgLnNlcnZpY2VzLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMCU7XHJcbiAgICAgIGxlZnQ6IDExJTtcclxuICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VydmljZXMtZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzExMTExMTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbC1zbS00OmhvdmVyIC5zZXJ2aWNlcy1pY29uIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tIFNlcnZpY2UgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0gRmxleCBGZWF0dXJlcyBTdHlsaW5nIFN0YXJ0cyAtLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uZmxleC1mZWF0dXJlcyB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjdmYTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZsZXgtc3BsaXQge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmNGY3ZmE7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLmYtbGVmdCB7XHJcbiAgICBmbGV4OiAxIDAgNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjdmYTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmYtcmlnaHQge1xyXG4gICAgZmxleDogMSAwIDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY3ZmE7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0gRmxleCBGZWF0dXJlcyBTdHlsaW5nIEVuZHMgLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIC0tLS0tIEZlYXR1cmVzIFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0gKi9cclxuXHJcbi5mZWF0dXJlcy1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLmYtbGVmdCB7XHJcbiAgICBmbGV4OiAxIDAgNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjdmYTtcclxuICB9XHJcbiAgLmYtcmlnaHQge1xyXG4gICAgZmxleDogMSAwIDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvaXBob25lX2hhbmRfMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZi1sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzExMTExMTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qLS0tLS0gRmVhdHVyZXMgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cclxuLyogLS0tLS0gRmVhdHVyZXMgU2VjdGlvbiAyIFN0eWxpbmcgLS0tLS0gKi9cclxuXHJcbi5mZWF0dXJlcy1zZWN0aW9uLTIge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIHVybCguLi9pbWFnZXMvZmVhdHVyZV9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLmZlYXR1cmVzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBjb2xvcjogIzExMTExMTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzExMTExMTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tIEZlYXR1cmVzIFNlY3Rpb24gMiBTdHlsaW5nIC0tLS0tICovXHJcbi8qIC0tLS0tIEZlYXR1cmVzIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tICovXHJcbi8qIC0tLS0tIENvdW50ZXIgU2VjdGlvbiBTdHlsaW5nIFN0YXJ0cyAtLS0tLSovXHJcblxyXG4uY291bnRlci1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRlci1pY29uIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6ICNmZjY0MmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRlci10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLSBDb3VudGVyIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tLS0tLSAqL1xyXG4vKi0tLS0tLSBGZWF0dXJlIEJpZyBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tLSAqL1xyXG5cclxuLmZlYXR1cmVfaHVnZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5mZWF0dXJlX2xpc3Qge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLSBGZWF0dXJlIEJpZyBTZWN0aW9uIFN0eWxpbmcgRW5kcyAtLS0tLS0gKi9cclxuLyogLS0tLS0tLS0gVGVzdGltb25pYWxzIFNlY3Rpb24gU3RhcnRzIC0tLS0tLS0tLSAqL1xyXG5cclxuLnRlc3RpbW9uaWFsLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIH1cclxuICAuc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgbWFyZ2luLXRvcDogNGVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy0yIHtcclxuICBtYXJnaW4tYm90dG9tOiA1ZW07XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1zaW5nbGUgaW1nIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC10ZXh0IHtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgLmlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZjgwMDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLSBUZXN0aW1vbmlhbHMgU2VjdGlvbiAtLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0gRG93bmxvYWQgU2VjdGlvbiBTdHlsaW5nLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZG93bmxvYWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhO1xyXG59XHJcblxyXG4uYXBwLWltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG5cclxuLmFwcC1pbmZvIHtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzNDNEI1RDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAuaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICNmZjgwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVlbTtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0gRG93bmxvYWQgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0tICovXHJcbi8qIC0tLS0tIFByaWNpbmcgU2VjdGlvbiBTdHlsaW5nIFN0YXJ0cyAtLS0tLSAqL1xyXG5cclxuLnByaWNpbmctc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjdmYTtcclxufVxyXG5cclxuLnByaWNpbmctaW50cm8ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNpbmctc2VjdGlvbiB7XHJcbiAgLnRhYmxlLWxlZnQsIC50YWJsZS1yaWdodCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1sZWZ0IC5pY29uLCAudGFibGUtcmlnaHQgLmljb24ge1xyXG4gIHBhZGRpbmc6IDUwcHggNTBweCA0MHB4IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1sZWZ0IC5pY29uIGltZywgLnRhYmxlLXJpZ2h0IC5pY29uIGltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIHNwYW4sIC50YWJsZS1yaWdodCAucHJpY2luZy1kZXRhaWxzIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzgwODA4MDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIGgyLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyBoMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRhYmxlLWxlZnQgLnByaWNpbmctZGV0YWlscyBwLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIHVsLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyB1bCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIGxpLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyBsaSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJpY2luZy1zZWN0aW9uIHtcclxuICAudGFibGUtbGVmdDpob3ZlciwgLnRhYmxlLXJpZ2h0OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tIFByaWNpbmcgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cclxuLyogLS0tLS0gQ1RBIFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0gKi9cclxuXHJcbi5jdGEtc3ViIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNGY3ZmE7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN1YnNjcmliZS1mb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLm1haWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTUwcHggMCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxuICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMjVweCAwIDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwNGE5ZjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhOWY1O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjRkZGRkZGO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zO1xyXG4gICAgICB0cmFuc2l0aW9uOiA1MDBtcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tIENUQSBTZWN0aW9uIFN0eWxpbmcgRW5kcyAtLS0tLSAqL1xyXG4vKiAtLS0tLSBDbGllbnQgU2VjdGlpb24gU3R5bGluZyAtLS0tLSAqL1xyXG5cclxuLmNsaWVudC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2ZhO1xyXG59XHJcblxyXG4uY2xpZW50cyB7XHJcbiAgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuc2luZ2xlIGltZyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tIEZvb3RlciBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tLS0gKi9cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLW1lbnUge1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogIzcwNzU3MDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzcwNzU3MDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0gRm9vdGVyIFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0tLSAqL1xyXG5cclxuLm5vLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLSBDb250YWN0IFBhZ2UgU3R5bGluZyBTdGFydHMgLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1MHB4IDAgNTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tIENvbnRhY3QgRm9ybSBTdHlsaW5nIC0tLS0tLS0tKi9cclxuXHJcbi5jb250YWN0LWZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTk5OTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsICY6LW1vei1wbGFjZWhvbGRlciwgJjo6LW1vei1wbGFjZWhvbGRlciwgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI0ZGMzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5idG4tc2VuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiAjMDRhOWY1O1xyXG4gIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMxMTExMTE7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLSBDb250YWN0IFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLSBCYWN0LXRvLVRvcCBTdHlsaW5nIFN0YXJ0cyBIZXJlIC0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYmFjay10by10b3Age1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIxNiwgMTgyLCAwLjUpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogOTA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwRTE3Mjk7XHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMTYsIDE4MiwgMC45KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgaSB7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0gQ29udGFjdCBQYWdlIFN0eWxpbmcgRW5kcyAtLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tIEFsbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1lZGlhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUXVlcmllcyAtLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAjbGVmdCwgI3JpZ2h0IHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gIH1cclxuICAjdG9wLCAjYm90dG9tIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbiAgLmN1c3RvbS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNjBweCAwIDEyMHB4IDA7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLWFjdGlvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDRhOWY1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwNGE5ZjU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi1maWxsIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG4gIC5hcHAtaGVyby1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1MHB4IDAgMCAwO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFwcC1zdWItaW5uZXIge1xyXG4gICAgcGFkZGluZzogMTgwcHggMCAxMDBweCAwO1xyXG4gIH1cclxuICAuYXBwLXN1Yi1jb250ZW50IHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmN0YS1zbWFsbCAuY3RhLWNvbnRlbnQge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlcnZpY2VzLWNvbnRlbnQge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VydmljZXMgLnNlcnZpY2VzLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgfVxyXG4gIC5mbGV4LWZlYXR1cmVzIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5mbGV4LXNwbGl0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAuZi1yaWdodCB7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mZWF0dXJlcy1zZWN0aW9uIHtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAuZi1sZWZ0IHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgfVxyXG4gICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmYtcmlnaHQge1xyXG4gICAgICBmbGV4OiAxIDAgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmVhdHVyZXMtc2VjdGlvbi0yIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAuZmVhdHVyZXMtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY291bnRlci11cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfVxyXG4gIC5jb3VudGVyLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmNvdW50ZXItc2VjdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgfVxyXG4gIC5jb3VudGVyLXRleHQgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuZmVhdHVyZV9odWdlIC5mZWF0dXJlX2xpc3Qge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgIGhlaWdodDogNjVweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGVzdGltb25pYWwtc2VjdGlvbiBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbiAgLnByaWNpbmctc2VjdGlvbiB7XHJcbiAgICAudGFibGUtbGVmdCwgLnRhYmxlLXJpZ2h0IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWN0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMjAwcHggMCAxMDBweCAwO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc3Vic2NyaWJlLWZvcm0ge1xyXG4gICAgLm1haWwge1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHggMCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMCA1cHggMCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcclxuICAuc3Vic2NyaWJlLWZvcm0ge1xyXG4gICAgLm1haWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hcHAtaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1idXR0b25zIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIC5iYWNrLXRvLXRvcCB7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAucHJpY2luZy1zZWN0aW9uIHtcclxuICAgIC50YWJsZS1sZWZ0LCAudGFibGUtcmlnaHQge1xyXG4gICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmFwcC1zdWItY29udGVudCB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmljaW5nLXNlY3Rpb24ge1xyXG4gICAgLnRhYmxlLWxlZnQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtcmlnaHQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLSBGZWF0dXJlcyBTcGxpdCBTZWN0aW9uIE1lZGlhIFF1ZXJpZXMgLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gIC5mbGV4LXNwbGl0IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLmYtcmlnaHQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmZsZXgtc3BsaXQge1xyXG4gICAgLmYtbGVmdCBpbWcge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmYtcmlnaHQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcclxuICAuZmxleC1zcGxpdCAuZi1sZWZ0IGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZmxleC1zcGxpdCB7XHJcbiAgICAuZi1sZWZ0IHtcclxuICAgICAgcGFkZGluZzogMzBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5mLXJpZ2h0IHtcclxuICAgICAgcGFkZGluZzogNDBweCA1MHB4IDUwcHggNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLSBGZWF0dXJlcyBTcGxpdCBTZWN0aW9uIE1lZGlhIFF1ZXJpZXMgRW5kcyAgLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gIC5mZWF0dXJlcy1zZWN0aW9uIC5mLXJpZ2h0IHtcclxuICAgIGZsZXg6IDEgMCA1MCU7XHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQycHgpIHtcclxuICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tXHJcbkFsbCBDb250ZW50c1xyXG4tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcbjEuIFJlc2V0LmNzc1xyXG4yLiBIZWxwZXIgQ2xhc3Nlc1xyXG4zLiBNYWluIGFuZCBIZXJvIFNlY3Rpb24gU3R5bGluZ3NcclxuNC4gU2VydmljZXMgU3R5bGluZ1xyXG41LiBGZWF0dXJlcyBTcGxpdFxyXG42LiBGZWF0dXJlIHdpdGggQkdcclxuNy4gRmVhdHVyZSBCaWdcclxuOC4gVGVzdGltb25pYWwgU3RsaW5nXHJcbjkuIFByaWNpbmcgU2VjdGlvblxyXG4xMC4gQ2FsbCBUbyBBY3Rpb24gU3Vic2NyaWJlXHJcbjExLiBEb3dubG9hZCBTZWN0aW9uXHJcbjEyLiBCYWNrIHRvIHRvcFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyotLS0tLSAxLiBSZXNldC5jc3MgLS0tLS0qL1xuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cclxuICAgdjIuMCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7IH1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7IH1cblxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTsgfVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi8qIC0tLSBDb21tb24gU3R5bGVzIC0tLSovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4vKi0tLS0tIEhlbHBlciBDbGFzc2VzIC0tLS0tKi9cbi5uYXZiYXItZml4ZWQtdG9wIHtcbiAgdG9wOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwOyB9XG5cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzk5OTsgfVxuICAubmF2YmFyIC5kcm9wZG93bi1tZW51IGEge1xuICAgIHBhZGRpbmc6IDAuNTVyZW0gMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07IH1cbiAgICAubmF2YmFyIC5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuOHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IC44cmVtOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItY29sbGFwc2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGICFpbXBvcnRhbnQ7IH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IH1cbiAgICAubmF2YmFyIC5kcm9wZG93bi1tZW51IGEge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY3ZmE7IH1cbiAgICAgIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY3ZmE7XG4gICAgcGFkZGluZzogMTVweCAwOyB9XG4gICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gPiBhIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XG4gICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0uZHJvcGRvd24uc2hvdyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxuICAvKiBkcm9wZG93bi1tZW51ICovIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51LCAuYnRuLWdyb3VwOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAubmF2YmFyIC5kcm9wZG93bi1tZW51OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzk5OTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjOTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMjVweDsgfSB9XG5cbmh0bWwgKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cblxuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XG5cbi5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi8qXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuKi9cbjo6LW1vei1zZWxlY3Rpb24sIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwNGE5ZjU7IH1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLmN1c3RvbS1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbi5zdXAtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwOyB9XG5cbi5zcGFjZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4OyB9XG5cbiNsb2FkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI2xvYWRpbmctaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRvcDogNDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk7IH1cblxuLnNwYWNlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7IH1cblxuLnNwYWNlci1iaWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDsgfVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjRkYzMzMzO1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIGNvbG9yOiAjMzNjYzMzO1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLmJ0bi1maWxsIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY29sb3I6ICMwNGE5ZjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMjAwbXM7XG4gIC1vLXRyYW5zaXRpb246IDIwMG1zO1xuICB0cmFuc2l0aW9uOiAyMDBtczsgfVxuICAuYnRuLWZpbGw6aG92ZXIsIC5idG4tZmlsbDpmb2N1cyB7XG4gICAgY29sb3I6ICMwNGE5ZjU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA0YTlmNTsgfVxuXG4vKiAtLS0tLS0gTmF2YmFyIFN0eWxpbmcgU3RhcnRzIC0tLS0tICovXG4ubmF2YmFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB6LWluZGV4OiA5OTsgfVxuXG4ubmF2YmFyLWRlZmF1bHQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgdHJhbnNpdGlvbjogMjAwbXM7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCAubmF2YmFyLXRvZ2dsZSAuY29sbGFwc2VkIHtcbiAgICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzExMTExMTsgfVxuICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICAgIHRyYW5zaXRpb246IDFzOyB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41czsgfVxuICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwMDAwMDsgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNGRkZGRkY7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMxMTExMTE7IH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXYtd2hpdGUgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAjRkZGRkZGOyB9XG4gICAgLm5hdmJhci1kZWZhdWx0IC5uYXYtd2hpdGUgPiBsaSA+IGE6aG92ZXIge1xuICAgICAgY29sb3I6ICM5OTk5OTk7IH1cblxuLyotLS0tLS0tLS0tIE1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBoZWlnaHQ6IDYwcHg7IH1cbiAgLm5hdmJhci1kZWZhdWx0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyOyB9XG4gICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4ICFpbXBvcnRhbnQ7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI0MHB4KSB7XG4gIC5uYXZiYXIucGFzdC1tYWluIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpOyB9XG4gIC5uYXZiYXIuZWZmZWN0LW1haW46YWN0aXZlIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xuICAgIC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xuICAgIGhlaWdodDogNjBweDsgfVxuICAubmF2YmFyLnBhc3QtbWFpbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSg5NiwgOTYsIDk2LCAwLjMpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSg5NiwgOTYsIDk2LCAwLjMpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoOTYsIDk2LCA5NiwgMC4zKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjZzO1xuICAgIC8qIEZvciBTYWZhcmkgMy4xIHRvIDYuMCAqL1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjZzOyB9XG4gIC5uYXZiYXItZGVmYXVsdC5wYXN0LW1haW4gLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogOHB4IDA7IH1cbiAgLm5hdmJhci1kZWZhdWx0LnBhc3QtbWFpbiAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cbiAgLm5hdmJhci1kZWZhdWx0LnBhc3QtbWFpbiAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgY29sb3I6ICMyYzM5NGE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQucGFzdC1tYWluIC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMTExMTExOyB9XG4gIC5uYXZiYXItZGVmYXVsdC5wYXN0LW1haW4gLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwNGE5ZjU7IH1cbiAgICAubmF2YmFyLWRlZmF1bHQucGFzdC1tYWluIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdC5wYXN0LW1haW4gLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyOyB9IH1cblxuLyogLS0tLS0tIE5hdmJhciBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cbiNtYWluIHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi8qIC0tLS0tIEhlcm8gU2VjdGlvbiBTdHlsaW5nIFN0YXJ0cyAtLS0tLSAqL1xuLmhlcm8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjkpLCByZ2JhKDAsIDAsIDAsIDAuMSkpLCB1cmwoXCIuLi9pbWFnZXMvaGVybzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNjAlOyB9XG5cbi5qYXJhbGxheCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2hlcm8uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyB9XG5cbi5oZXJvLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjAwcHggMCAxMDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5oZXJvLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBjb2xvcjogIzExMTExMTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAuaGVyby1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzExMTExMTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4uYnRuLWFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNGE5ZjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNGE5ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzO1xuICBwYWRkaW5nOiAwIDIxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMjAwbXM7XG4gIC1vLXRyYW5zaXRpb246IDIwMG1zO1xuICB0cmFuc2l0aW9uOiAyMDBtczsgfVxuXG4uaGVyby1jb250ZW50IC5idG4tYWN0aW9uOmhvdmVyLCAuaGVyby1jb250ZW50IC5idG4tYWN0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDRhOWY1O1xuICBib3JkZXItY29sb3I6ICMwNGE5ZjU7IH1cblxuLmhlcm8tY29udGVudCAuYnRuLWFjdGlvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwNGE5ZjU7XG4gIGJvcmRlci1jb2xvcjogIzA0YTlmNTsgfVxuICAuaGVyby1jb250ZW50IC5idG4tYWN0aW9uOmFjdGl2ZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogIzA0YTlmNTtcbiAgICBib3JkZXItY29sb3I6ICMwNGE5ZjU7IH1cblxuLmJ0bi1hY3Rpb246aG92ZXIsIC5idG4tYWN0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDRhOWY1O1xuICBib3JkZXItY29sb3I6ICMwNGE5ZjU7IH1cblxuLmJ0bi1hY3Rpb246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDRhOWY1O1xuICBib3JkZXItY29sb3I6ICMwNGE5ZjU7IH1cbiAgLmJ0bi1hY3Rpb246YWN0aXZlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjMDRhOWY1O1xuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTsgfVxuXG4udHh0LXdoaXRlIGgxLCAudHh0LXdoaXRlIHAge1xuICBjb2xvcjogI0ZGRkZGRjsgfVxuXG4uYXBwLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyB9XG5cbi5hcHAtaGVyby1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTUwcHggMCAwIDA7IH1cbiAgLmFwcC1oZXJvLWNvbnRlbnQgaDEsIC5hcHAtaGVyby1jb250ZW50IHAge1xuICAgIGNvbG9yOiAjMTExMTExOyB9XG4gIC5hcHAtaGVyby1jb250ZW50IGltZyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgfVxuXG4uYXBwLXN1YiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgcmdiYSgyNTUsIDI1NSwgMjAwLCAwLjEpKSwgdXJsKC4uL2ltYWdlcy9mZWF0dXJlX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cblxuLmFwcC1zdWItaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmFwcC1zdWItY29udGVudCB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMCAwOyB9XG4gIC5hcHAtc3ViLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMTExMTExO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAuYXBwLXN1Yi1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGNvbG9yOiAjMTExO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAuYXBwLXN1Yi1jb250ZW50IC5zdWJzY3JpYmUtZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4vKiAtLS0tLSBIZXJvIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tICovXG4vKiAtLS0tLSBBYm91dCBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tICovXG4uc2VydmljZXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7IH1cblxuLnNlcnZpY2VzLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3NXB4OyB9XG4gIC5zZXJ2aWNlcy1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLnNlcnZpY2VzLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi10b3A6IDBweDsgfVxuXG4uc2VydmljZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLnNlcnZpY2VzIC5zZXJ2aWNlcy1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zaXRpb246IDAuNXM7IH1cbiAgICAuc2VydmljZXMgLnNlcnZpY2VzLWljb24gaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAlO1xuICAgICAgbGVmdDogMTElO1xuICAgICAgZm9udC1zaXplOiA0MnB4OyB9XG4gIC5zZXJ2aWNlcyAuc2VydmljZXMtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cbiAgICAuc2VydmljZXMgLnNlcnZpY2VzLWRlc2NyaXB0aW9uIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICAgLnNlcnZpY2VzIC5zZXJ2aWNlcy1kZXNjcmlwdGlvbiBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBtYXJnaW4tdG9wOiAwOyB9XG4gIC5zZXJ2aWNlcyAuY29sLXNtLTQ6aG92ZXIgLnNlcnZpY2VzLWljb24ge1xuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTsgfVxuXG4vKiAtLS0tLSBTZXJ2aWNlIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLSBGbGV4IEZlYXR1cmVzIFN0eWxpbmcgU3RhcnRzIC0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mbGV4LWZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjdmYTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG5cbi5mbGV4LXNwbGl0IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuZmxleC1zcGxpdCAuZi1sZWZ0IHtcbiAgICBmbGV4OiAxIDAgNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmNGY3ZmE7XG4gICAgcGFkZGluZzogMTBweDsgfVxuICAgIC5mbGV4LXNwbGl0IC5mLWxlZnQgaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAuZmxleC1zcGxpdCAuZi1yaWdodCB7XG4gICAgZmxleDogMSAwIDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmN2ZhO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7IH1cbiAgICAuZmxleC1zcGxpdCAuZi1yaWdodCBoMiB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS42OyB9XG4gICAgLmZsZXgtc3BsaXQgLmYtcmlnaHQgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwOyB9XG4gICAgLmZsZXgtc3BsaXQgLmYtcmlnaHQgdWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgICAgLmZsZXgtc3BsaXQgLmYtcmlnaHQgdWwgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuICAgIC5mbGV4LXNwbGl0IC5mLXJpZ2h0IGxpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgbGluZS1oZWlnaHQ6IDI7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0gRmxleCBGZWF0dXJlcyBTdHlsaW5nIEVuZHMgLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLS0tLSBGZWF0dXJlcyBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tICovXG4uZmVhdHVyZXMtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5mZWF0dXJlcy1zZWN0aW9uIC5mLWxlZnQge1xuICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjdmYTsgfVxuICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1yaWdodCB7XG4gICAgZmxleDogMSAwIDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2lwaG9uZV9oYW5kXzEuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1yaWdodCBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogMDsgfVxuICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1sZWZ0IHtcbiAgICBwYWRkaW5nOiAzMHB4OyB9XG4gICAgLmZlYXR1cmVzLXNlY3Rpb24gLmYtbGVmdCBoMiB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDsgfVxuICAgIC5mZWF0dXJlcy1zZWN0aW9uIC5mLWxlZnQgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmZlYXR1cmVzLXNlY3Rpb24gLmJ0bi1hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLyotLS0tLSBGZWF0dXJlcyBTZWN0aW9uIFN0eWxpbmcgRW5kcyAtLS0tLSAqL1xuLyogLS0tLS0gRmVhdHVyZXMgU2VjdGlvbiAyIFN0eWxpbmcgLS0tLS0gKi9cbi5mZWF0dXJlcy1zZWN0aW9uLTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIHVybCguLi9pbWFnZXMvZmVhdHVyZV9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gIC5mZWF0dXJlcy1zZWN0aW9uLTIgLmZlYXR1cmVzLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cbiAgICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICAgIC5mZWF0dXJlcy1zZWN0aW9uLTIgLmZlYXR1cmVzLWNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLyogLS0tLS0gRmVhdHVyZXMgU2VjdGlvbiAyIFN0eWxpbmcgLS0tLS0gKi9cbi8qIC0tLS0tIEZlYXR1cmVzIFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0tICovXG4vKiAtLS0tLSBDb3VudGVyIFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0qL1xuLmNvdW50ZXItc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGOyB9XG4gIC5jb3VudGVyLXNlY3Rpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMzAzMDMwOyB9XG5cbi5jb3VudGVyLWljb24ge1xuICBwYWRkaW5nOiAxNXB4OyB9XG4gIC5jb3VudGVyLWljb24gaSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGNvbG9yOiAjZmY2NDJlOyB9XG5cbi5jb3VudGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gIC5jb3VudGVyLXRleHQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGNvbG9yOiAjMTExMTExOyB9XG5cbi8qIC0tLS0tLS0tIENvdW50ZXIgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0tLS0tICovXG4vKi0tLS0tLSBGZWF0dXJlIEJpZyBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tLSAqL1xuLmZlYXR1cmVfaHVnZSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyB9XG4gIC5mZWF0dXJlX2h1Z2UgaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG4gIC5mZWF0dXJlX2h1Z2UgLmZlYXR1cmVfbGlzdCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDsgfVxuICAgIC5mZWF0dXJlX2h1Z2UgLmZlYXR1cmVfbGlzdCBpbWcge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4gICAgLmZlYXR1cmVfaHVnZSAuZmVhdHVyZV9saXN0IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIGNvbG9yOiAjMTExMTExOyB9XG4gICAgLmZlYXR1cmVfaHVnZSAuZmVhdHVyZV9saXN0IHAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgY29sb3I6ICM2MDYwNjA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLyotLS0tLS0gRmVhdHVyZSBCaWcgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0tICovXG4vKiAtLS0tLS0tLSBUZXN0aW1vbmlhbHMgU2VjdGlvbiBTdGFydHMgLS0tLS0tLS0tICovXG4udGVzdGltb25pYWwtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmctdG9wOiA1MHB4OyB9XG4gIC50ZXN0aW1vbmlhbC1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzExMTExMTtcbiAgICBtYXJnaW4tdG9wOiAzZW07IH1cbiAgLnRlc3RpbW9uaWFsLXNlY3Rpb24gLnN1YiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMTExMTExO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyB9XG5cbi50ZXN0aW1vbmlhbHMge1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0ZW07IH1cblxuLnRlc3RpbW9uaWFscy0yIHtcbiAgbWFyZ2luLWJvdHRvbTogNWVtOyB9XG5cbi50ZXN0aW1vbmlhbC1zaW5nbGUgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDsgfVxuXG4udGVzdGltb25pYWwtdGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDAwMDAwOyB9XG5cbi50ZXN0aW1vbmlhbC10ZXh0IC5pb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjgwMDA7IH1cblxuLnRlc3RpbW9uaWFsLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMxMTExMTE7IH1cblxuLyogLS0tLS0tLS0gVGVzdGltb25pYWxzIFNlY3Rpb24gLS0tLS0tLS0gKi9cbi8qIC0tLS0tLSBEb3dubG9hZCBTZWN0aW9uIFN0eWxpbmctLS0tLS0tLS0tLS0gKi9cbi5kb3dubG9hZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmNGY3ZmE7IH1cblxuLmFwcC1pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVlbTsgfVxuXG4uYXBwLWluZm8gaDMge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi5hcHAtaW5mbyBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzQzRCNUQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLmFwcC1pbmZvIHVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4uYXBwLWluZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMjIyMjI7IH1cblxuLmFwcC1pbmZvIC5pb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmZjgwMDA7IH1cblxuLmRvd25sb2FkLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDVlbTsgfVxuICAuZG93bmxvYWQtYnV0dG9ucyBpbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTYwcHg7IH1cblxuLyotLS0tLS0gRG93bmxvYWQgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0tICovXG4vKiAtLS0tLSBQcmljaW5nIFNlY3Rpb24gU3R5bGluZyBTdGFydHMgLS0tLS0gKi9cbi5wcmljaW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjdmYTsgfVxuXG4ucHJpY2luZy1pbnRybyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XG4gIC5wcmljaW5nLWludHJvIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS40OyB9XG4gIC5wcmljaW5nLWludHJvIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG5cbi5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLWxlZnQsIC5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLXJpZ2h0IHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDUwcHggMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xuICBtYXgtd2lkdGg6IDQwMHB4OyB9XG5cbi50YWJsZS1sZWZ0IC5pY29uLCAudGFibGUtcmlnaHQgLmljb24ge1xuICBwYWRkaW5nOiA1MHB4IDUwcHggNDBweCA1MHB4OyB9XG5cbi50YWJsZS1sZWZ0IC5pY29uIGltZywgLnRhYmxlLXJpZ2h0IC5pY29uIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi50YWJsZS1sZWZ0IC5wcmljaW5nLWRldGFpbHMgc3BhbiwgLnRhYmxlLXJpZ2h0IC5wcmljaW5nLWRldGFpbHMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIGgyLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnRhYmxlLWxlZnQgLnByaWNpbmctZGV0YWlscyBwLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzUwNTA1MDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDsgfVxuXG4udGFibGUtbGVmdCAucHJpY2luZy1kZXRhaWxzIHVsLCAudGFibGUtcmlnaHQgLnByaWNpbmctZGV0YWlscyB1bCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cblxuLnRhYmxlLWxlZnQgLnByaWNpbmctZGV0YWlscyBsaSwgLnRhYmxlLXJpZ2h0IC5wcmljaW5nLWRldGFpbHMgbGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLWxlZnQ6aG92ZXIsIC5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLXJpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi8qIC0tLS0tIFByaWNpbmcgU2VjdGlvbiBTdHlsaW5nIEVuZHMgLS0tLS0gKi9cbi8qIC0tLS0tIENUQSBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tICovXG4uY3RhLXN1YiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyB9XG4gIC5jdGEtc3ViIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAuY3RhLXN1YiBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLnN1YnNjcmliZS1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5zdWJzY3JpYmUtZm9ybSAubWFpbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMCAxNTBweCAwIDIwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxuICAuc3Vic2NyaWJlLWZvcm0gaW5wdXQge1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAwLjllbTsgfVxuICAuc3Vic2NyaWJlLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDI1cHggMCAyNXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhOWY1O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAgIC5zdWJzY3JpYmUtZm9ybSAuc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjRkZGRkZGO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiA1MDBtcztcbiAgICAgIHRyYW5zaXRpb246IDUwMG1zOyB9XG5cbi8qIC0tLS0tIENUQSBTZWN0aW9uIFN0eWxpbmcgRW5kcyAtLS0tLSAqL1xuLyogLS0tLS0gQ2xpZW50IFNlY3RpaW9uIFN0eWxpbmcgLS0tLS0gKi9cbi5jbGllbnQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7IH1cblxuLmNsaWVudHMgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7IH1cblxuLmNsaWVudHMgLnNpbmdsZSBpbWcge1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgfVxuXG4vKiAtLS0tLS0tIEZvb3RlciBTZWN0aW9uIFN0eWxpbmcgU3RhcnRzIC0tLS0tLS0gKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2ZhO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLmZvb3RlciBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLmZvb3Rlci1tZW51IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbi5mb290ZXItbWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAuZm9vdGVyLW1lbnUgbGkgYSB7XG4gICAgY29sb3I6ICM3MDc1NzA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5mb290ZXItdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzcwNzU3MDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLyogLS0tLS0tLSBGb290ZXIgU2VjdGlvbiBTdHlsaW5nIFN0YXJ0cyAtLS0tLS0tICovXG4ubm8tY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tIENvbnRhY3QgUGFnZSBTdHlsaW5nIFN0YXJ0cyAtLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY29udGFjdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTUwcHggMCA1MHB4IDA7XG4gIGJhY2tncm91bmQ6ICNGRkY7IH1cbiAgLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gIC5jb250YWN0LXNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMTExMTExO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7IH1cblxuLyogLS0tLS0tLS0tLS0tIENvbnRhY3QgRm9ybSBTdHlsaW5nIC0tLS0tLS0tKi9cbi5jb250YWN0LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogNTBweDsgfVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk5OTk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41czsgfVxuICAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMwNGE5ZjU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5mb3JtLWNvbnRyb2w6LW1vei1wbGFjZWhvbGRlciwgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciwgLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzk5OTk5OTsgfVxuXG4udGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMyMjI7IH1cbiAgLnRleHQtbXV0ZWQgc3Ryb25nIHtcbiAgICBjb2xvcjogI0ZGMzMzMzsgfVxuXG4uYnRuLXNlbmQge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICMwNGE5ZjU7XG4gIGJvcmRlci1jb2xvcjogIzA0YTlmNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7IH1cbiAgLmJ0bi1zZW5kOmhvdmVyLCAuYnRuLXNlbmQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTExMTExO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4vKiAtLS0tLS0tLSBDb250YWN0IFNlY3Rpb24gU3R5bGluZyBFbmRzIC0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0gQmFjdC10by1Ub3AgU3R5bGluZyBTdGFydHMgSGVyZSAtLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmJhY2stdG8tdG9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgMjE2LCAxODIsIDAuNSk7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDkwO1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMEUxNzI5OyB9XG4gIC5iYWNrLXRvLXRvcCBpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTNweDtcbiAgICB0b3A6IDhweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IDIwMG1zO1xuICAgIC1vLXRyYW5zaXRpb246IDIwMG1zO1xuICAgIHRyYW5zaXRpb246IDIwMG1zOyB9XG4gIC5iYWNrLXRvLXRvcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0NiwgMjE2LCAxODIsIDAuOSk7XG4gICAgY29sb3I6ICNGRkZGRkY7IH1cbiAgICAuYmFjay10by10b3A6aG92ZXIgaSB7XG4gICAgICB0b3A6IDZweDsgfVxuICAuYmFjay10by10b3A6Zm9jdXMge1xuICAgIGNvbG9yOiAjRkZGRkZGOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tIENvbnRhY3QgUGFnZSBTdHlsaW5nIEVuZHMgLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0gQWxsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVkaWEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgI2xlZnQsICNyaWdodCB7XG4gICAgd2lkdGg6IDI1cHg7IH1cbiAgI3RvcCwgI2JvdHRvbSB7XG4gICAgaGVpZ2h0OiAyNXB4OyB9XG4gIC5jdXN0b20tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7IH1cbiAgLmhlcm8tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjYwcHggMCAxMjBweCAwOyB9XG4gICAgLmhlcm8tY29udGVudCBoMSB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cbiAgICAuaGVyby1jb250ZW50IHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5idG4tYWN0aW9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDRhOWY1O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMCAyNHB4OyB9XG4gICAgLmJ0bi1hY3Rpb24gYSB7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgLmJ0bi1hY3Rpb24gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDRhOWY1OyB9XG4gIC5idG4tZmlsbCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA0YTlmNTtcbiAgICBoZWlnaHQ6IDM4cHg7IH1cbiAgLmFwcC1oZXJvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE1MHB4IDAgMCAwOyB9XG4gICAgLmFwcC1oZXJvLWNvbnRlbnQgaDEge1xuICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7IH1cbiAgICAuYXBwLWhlcm8tY29udGVudCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuICAuYXBwLXN1Yi1pbm5lciB7XG4gICAgcGFkZGluZzogMTgwcHggMCAxMDBweCAwOyB9XG4gIC5hcHAtc3ViLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmFwcC1zdWItY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIC5jdGEtc21hbGwgLmN0YS1jb250ZW50IHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzBweDsgfVxuICAuY3RhLXNtYWxsIC5jdGEtY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5zZXJ2aWNlcy1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDsgfVxuICAuc2VydmljZXMtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLnNlcnZpY2VzIC5zZXJ2aWNlcy1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDsgfVxuICAuZmxleC1mZWF0dXJlcyB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLmZsZXgtc3BsaXQge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG4gICAgLmZsZXgtc3BsaXQgLmYtcmlnaHQge1xuICAgICAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggMjBweDsgfVxuICAuZmVhdHVyZXMtc2VjdGlvbiB7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1sZWZ0IHtcbiAgICAgIHBhZGRpbmc6IDYwcHg7IH1cbiAgICAgIC5mZWF0dXJlcy1zZWN0aW9uIC5mLWxlZnQgaDIge1xuICAgICAgICBmb250LXNpemU6IDM0cHg7IH1cbiAgICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1yaWdodCB7XG4gICAgICBmbGV4OiAxIDAgNTAlOyB9XG4gIC5mZWF0dXJlcy1zZWN0aW9uLTIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG4gICAgLmZlYXR1cmVzLXNlY3Rpb24tMiAuZmVhdHVyZXMtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiA1MHB4OyB9XG4gICAgICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gICAgICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4OyB9XG4gICAgICAuZmVhdHVyZXMtc2VjdGlvbi0yIC5mZWF0dXJlcy1jb250ZW50IHAge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7IH1cbiAgLmNvdW50ZXItdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTsgfVxuICAuY291bnRlci10ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIC5jb3VudGVyLXNlY3Rpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMzRweDsgfVxuICAuY291bnRlci10ZXh0IGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7IH1cbiAgLmZlYXR1cmVfaHVnZSAuZmVhdHVyZV9saXN0IGltZyB7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4OyB9XG4gIC5mZWF0dXJlX2h1Z2UgLmZlYXR1cmVfbGlzdCBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgY29sb3I6ICMyMzIzMjM7IH1cbiAgLmZlYXR1cmVfaHVnZSAuZmVhdHVyZV9saXN0IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAudGVzdGltb25pYWwtc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07IH1cbiAgLnByaWNpbmctc2VjdGlvbiAudGFibGUtbGVmdCwgLnByaWNpbmctc2VjdGlvbiAudGFibGUtcmlnaHQge1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gIC5jb250YWN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwMHB4IDAgMTAwcHggMDsgfVxuICAgIC5jb250YWN0LXNlY3Rpb24gaDEge1xuICAgICAgZm9udC1zaXplOiA0MnB4OyB9XG4gICAgLmNvbnRhY3Qtc2VjdGlvbiBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuICAuY29udGFjdC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zdWJzY3JpYmUtZm9ybSAubWFpbCB7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDsgfVxuICAuc3Vic2NyaWJlLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLnN1YnNjcmliZS1mb3JtIC5tYWlsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDsgfVxuICAuc3Vic2NyaWJlLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgLmFwcC1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07IH1cbiAgLmRvd25sb2FkLWJ1dHRvbnMgaW1nIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEyMHB4OyB9XG4gIC5iYWNrLXRvLXRvcCB7XG4gICAgcmlnaHQ6IDEwcHg7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLWxlZnQsIC5wcmljaW5nLXNlY3Rpb24gLnRhYmxlLXJpZ2h0IHtcbiAgICBwYWRkaW5nOiA1MHB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hcHAtc3ViLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIC5hcHAtc3ViLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAucHJpY2luZy1zZWN0aW9uIC50YWJsZS1sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgLnByaWNpbmctc2VjdGlvbiAudGFibGUtcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9IH1cblxuLyogLS0tLS0tIEZlYXR1cmVzIFNwbGl0IFNlY3Rpb24gTWVkaWEgUXVlcmllcyAtLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZmxleC1zcGxpdCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAuZmxleC1zcGxpdCAuZi1yaWdodCBoMiB7XG4gICAgICBmb250LXNpemU6IDM0cHg7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5mbGV4LXNwbGl0IC5mLWxlZnQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyB9XG4gIC5mbGV4LXNwbGl0IC5mLXJpZ2h0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmZsZXgtc3BsaXQgLmYtbGVmdCBpbWcge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZmxleC1zcGxpdCAuZi1sZWZ0IHtcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMTBweCAxMHB4OyB9XG4gIC5mbGV4LXNwbGl0IC5mLXJpZ2h0IHtcbiAgICBwYWRkaW5nOiA0MHB4IDUwcHggNTBweCA1MHB4OyB9IH1cblxuLyogLS0tLS0tIEZlYXR1cmVzIFNwbGl0IFNlY3Rpb24gTWVkaWEgUXVlcmllcyBFbmRzICAtLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuICAuZmVhdHVyZXMtc2VjdGlvbiAuZi1yaWdodCB7XG4gICAgZmxleDogMSAwIDUwJTtcbiAgICBoZWlnaHQ6IDM2MHB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQycHgpIHtcbiAgLmZlYXR1cmVzLXNlY3Rpb24tMiAuZmVhdHVyZXMtY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLmZlYXR1cmVzLXNlY3Rpb24tMiAuZmVhdHVyZXMtY29udGVudCBoMiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9IH1cbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=demo-pages-landing-landing-module.js.map