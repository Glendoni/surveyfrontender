(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-alert-adv-alert-module"],{

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.33.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationMessage) {
      return validationMessage;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  } // DOM element


  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement().then(function () {
        return triggerOnAfterClose(onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4

    /* istanbul ignore next */
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections', 'extraParams'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationMessage(error$$1) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error$$1;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
} // @deprecated

/* istanbul ignore next */

function resetValidationError() {
  warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
  resetValidationMessage.bind(this)();
} // @deprecated

/* istanbul ignore next */

function showValidationError(error$$1) {
  warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
  showValidationMessage.bind(this)(error$$1);
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id,
      started,
      remaining = delay;
  this.running = false;

  this.start = function () {
    if (!this.running) {
      this.running = true;
      started = new Date();
      id = setTimeout(callback, remaining);
    }

    return remaining;
  };

  this.stop = function () {
    if (this.running) {
      this.running = false;
      clearTimeout(id);
      remaining -= new Date() - started;
    }

    return remaining;
  };

  this.increase = function (n) {
    var running = this.running;

    if (running) {
      this.stop();
    }

    remaining += n;

    if (running) {
      this.start();
    }

    return remaining;
  };

  this.getTimerLeft = function () {
    if (this.running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.isRunning = function () {
    return this.running;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // params.extraParams is @deprecated


  if (params.validationMessage) {
    if (_typeof(params.extraParams) !== 'object') {
      params.extraParams = {};
    }

    params.extraParams.validationMessage = params.validationMessage;
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  if (params.customContainerClass) {
    addClass(container, params.customContainerClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationMessage) {
            _this.hideLoading();

            if (validationMessage) {
              _this.showValidationMessage(validationMessage);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    }
                  });
                } else {
                  validationPromise.then(function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    var setInputPlaceholder = function setInputPlaceholder(input) {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else if (!isPromise(innerParams.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(innerParams.inputValue), "\""));
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isPromise(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage,
	resetValidationError: resetValidationError,
	showValidationError: showValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
/* istanbul ignore next */

SweetAlert.noop = function () {};

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.Sweetalert2.version = '7.33.1';  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: 1.0625em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: 2.1875em;\n    left: -.375em;\n    width: 3.125em; }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em; }\n  100% {\n    top: 2.8125em;\n    left: .875em;\n    width: 1.5625em; } }\n\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: 1.0625em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: 2.1875em;\n    left: -.375em;\n    width: 3.125em; }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em; }\n  100% {\n    top: 2.8125em;\n    left: .875em;\n    width: 1.5625em; } }\n\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em; }\n  100% {\n    top: 2.375em;\n    right: .5em;\n    width: 2.9375em; } }\n\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em; }\n  100% {\n    top: 2.375em;\n    right: .5em;\n    width: 2.9375em; } }\n\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent; }\n\nbody.swal2-toast-shown .swal2-container.swal2-shown {\n    background-color: transparent; }\n\nbody.swal2-toast-shown .swal2-container.swal2-top {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n    top: 0;\n    right: 0;\n    bottom: auto;\n    left: auto; }\n\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0; }\n\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\nbody.swal2-toast-shown .swal2-container.swal2-center {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0; }\n\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n    top: auto;\n    right: 0;\n    bottom: 0;\n    left: auto; }\n\nbody.swal2-toast-column .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n\nbody.swal2-toast-column .swal2-toast .swal2-actions {\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-self: stretch;\n    height: 2.2em;\n    margin-top: .3125em; }\n\nbody.swal2-toast-column .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n            justify-content: center; }\n\nbody.swal2-toast-column .swal2-toast .swal2-input {\n    height: 2em;\n    margin: .3125em auto;\n    font-size: 1em; }\n\nbody.swal2-toast-column .swal2-toast .swal2-validation-message {\n    font-size: 1em; }\n\n.swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  box-shadow: 0 0 0.625em #d9d9d9;\n  overflow-y: hidden; }\n\n.swal2-popup.swal2-toast .swal2-header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n\n.swal2-popup.swal2-toast .swal2-title {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    margin: 0 .6em;\n    font-size: 1em; }\n\n.swal2-popup.swal2-toast .swal2-footer {\n    margin: 0.5em 0 0;\n    padding: 0.5em 0 0;\n    font-size: 0.8em; }\n\n.swal2-popup.swal2-toast .swal2-close {\n    position: initial;\n    width: 0.8em;\n    height: 0.8em;\n    line-height: 0.8; }\n\n.swal2-popup.swal2-toast .swal2-content {\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    font-size: 1em; }\n\n.swal2-popup.swal2-toast .swal2-icon {\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n    margin: 0; }\n\n.swal2-popup.swal2-toast .swal2-icon-text {\n      font-size: 2em;\n      font-weight: bold;\n      line-height: 1em; }\n\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 2em;\n      height: 2em; }\n\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: .875em;\n      width: 1.375em; }\n\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: .3125em; }\n\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: .3125em; }\n\n.swal2-popup.swal2-toast .swal2-actions {\n    height: auto;\n    margin: 0 .3125em; }\n\n.swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n\n.swal2-popup.swal2-toast .swal2-styled:focus {\n      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n\n.swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 2em;\n      height: 2.8125em;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -.25em;\n        left: -.9375em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 2em 2em;\n                transform-origin: 2em 2em;\n        border-radius: 4em 0 0 4em; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -.25em;\n        left: .9375em;\n        -webkit-transform-origin: 0 2em;\n                transform-origin: 0 2em;\n        border-radius: 0 4em 4em 0; }\n\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 2em;\n      height: 2em; }\n\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      top: 0;\n      left: .4375em;\n      width: .4375em;\n      height: 2.6875em; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: .3125em; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 1.125em;\n        left: .1875em;\n        width: .75em; }\n\n.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: .9375em;\n        right: .1875em;\n        width: 1.375em; }\n\n.swal2-popup.swal2-toast.swal2-show {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n\n.swal2-popup.swal2-toast.swal2-hide {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n\n.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n    -webkit-animation: animate-toast-success-tip .75s;\n            animation: animate-toast-success-tip .75s; }\n\n.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n    -webkit-animation: animate-toast-success-long .75s;\n            animation: animate-toast-success-long .75s; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    top: .5625em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: .125em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: .625em;\n    left: -.25em;\n    width: 1.625em; }\n  84% {\n    top: 1.0625em;\n    left: .75em;\n    width: .5em; }\n  100% {\n    top: 1.125em;\n    left: .1875em;\n    width: .75em; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    top: .5625em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: .125em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: .625em;\n    left: -.25em;\n    width: 1.625em; }\n  84% {\n    top: 1.0625em;\n    left: .75em;\n    width: .5em; }\n  100% {\n    top: 1.125em;\n    left: .1875em;\n    width: .75em; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0; }\n  65% {\n    top: 1.25em;\n    right: .9375em;\n    width: 0; }\n  84% {\n    top: .9375em;\n    right: 0;\n    width: 1.125em; }\n  100% {\n    top: .9375em;\n    right: .1875em;\n    width: 1.375em; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0; }\n  65% {\n    top: 1.25em;\n    right: .9375em;\n    width: 0; }\n  84% {\n    top: .9375em;\n    right: 0;\n    width: 1.125em; }\n  100% {\n    top: .9375em;\n    right: .1875em;\n    width: 1.375em; } }\n\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden; }\n\nbody.swal2-height-auto {\n  height: auto !important; }\n\nbody.swal2-no-backdrop .swal2-shown {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  background-color: transparent; }\n\nbody.swal2-no-backdrop .swal2-shown > .swal2-modal {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n\nbody.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n    right: 0;\n    bottom: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch; }\n\n.swal2-container.swal2-top {\n    -webkit-box-align: start;\n            align-items: flex-start; }\n\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n\n.swal2-container.swal2-center {\n    -webkit-box-align: center;\n            align-items: center; }\n\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n\n.swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n            align-items: flex-end; }\n\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-self: stretch;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-content: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n              align-items: center; }\n\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n              align-items: flex-start; }\n\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n              align-items: flex-end; }\n\n.swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n              flex: 1;\n      align-content: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n    margin: auto; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n\n.swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n\n.swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  display: none;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  box-sizing: border-box; }\n\n.swal2-popup:focus {\n    outline: none; }\n\n.swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n\n.swal2-popup .swal2-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center; }\n\n.swal2-popup .swal2-title {\n    display: block;\n    position: relative;\n    max-width: 100%;\n    margin: 0 0 0.4em;\n    padding: 0;\n    color: #595959;\n    font-size: 1.875em;\n    font-weight: 600;\n    text-align: center;\n    text-transform: none;\n    word-wrap: break-word; }\n\n.swal2-popup .swal2-actions {\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1.25em auto 0;\n    z-index: 1; }\n\n.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4; }\n\n.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n\n.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n\n.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n      width: 2.5em;\n      height: 2.5em;\n      margin: .46875em;\n      padding: 0;\n      border: .25em solid transparent;\n      border-radius: 100%;\n      border-color: transparent;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      box-sizing: border-box;\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n      margin-right: 30px;\n      margin-left: 30px; }\n\n.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      border: 3px solid #999999;\n      border-radius: 50%;\n      border-right-color: transparent;\n      box-shadow: 1px 1px 1px #fff;\n      content: '';\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n\n.swal2-popup .swal2-styled {\n    margin: .3125em;\n    padding: .625em 2em;\n    font-weight: 500;\n    box-shadow: none; }\n\n.swal2-popup .swal2-styled:not([disabled]) {\n      cursor: pointer; }\n\n.swal2-popup .swal2-styled.swal2-confirm {\n      border: 0;\n      border-radius: 0.25em;\n      background: initial;\n      background-color: #3085d6;\n      color: #fff;\n      font-size: 1.0625em; }\n\n.swal2-popup .swal2-styled.swal2-cancel {\n      border: 0;\n      border-radius: 0.25em;\n      background: initial;\n      background-color: #aaa;\n      color: #fff;\n      font-size: 1.0625em; }\n\n.swal2-popup .swal2-styled:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n\n.swal2-popup .swal2-styled::-moz-focus-inner {\n      border: 0; }\n\n.swal2-popup .swal2-footer {\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1.25em 0 0;\n    padding: 1em 0 0;\n    border-top: 1px solid #eee;\n    color: #545454;\n    font-size: 1em; }\n\n.swal2-popup .swal2-image {\n    max-width: 100%;\n    margin: 1.25em auto; }\n\n.swal2-popup .swal2-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 1.2em;\n    height: 1.2em;\n    padding: 0;\n    -webkit-transition: color 0.1s ease-out;\n    transition: color 0.1s ease-out;\n    border: none;\n    border-radius: 0;\n    outline: initial;\n    background: transparent;\n    color: #cccccc;\n    font-family: serif;\n    font-size: 2.5em;\n    line-height: 1.2;\n    cursor: pointer;\n    overflow: hidden; }\n\n.swal2-popup .swal2-close:hover {\n      -webkit-transform: none;\n              transform: none;\n      color: #f27474; }\n\n.swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n\n.swal2-popup .swal2-content {\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 0;\n    padding: 0;\n    color: #545454;\n    font-size: 1.125em;\n    font-weight: 300;\n    line-height: normal;\n    z-index: 1;\n    word-wrap: break-word; }\n\n.swal2-popup #swal2-content {\n    text-align: center; }\n\n.swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 1em auto; }\n\n.swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    border: 1px solid #d9d9d9;\n    border-radius: 0.1875em;\n    font-size: 1.125em;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    box-sizing: border-box; }\n\n.swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      box-shadow: 0 0 2px #f27474 !important; }\n\n.swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      border: 1px solid #b4dbed;\n      outline: none;\n      box-shadow: 0 0 3px #c4e6f5; }\n\n.swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n\n.swal2-popup .swal2-input::-moz-placeholder,\n    .swal2-popup .swal2-file::-moz-placeholder,\n    .swal2-popup .swal2-textarea::-moz-placeholder {\n      color: #cccccc; }\n\n.swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n\n.swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n\n.swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n\n.swal2-popup .swal2-range input {\n    width: 80%; }\n\n.swal2-popup .swal2-range output {\n    width: 20%;\n    font-weight: 600;\n    text-align: center; }\n\n.swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    height: 2.625em;\n    margin: 1em auto;\n    padding: 0;\n    font-size: 1.125em;\n    line-height: 2.625em; }\n\n.swal2-popup .swal2-input {\n    height: 2.625em;\n    padding: 0 0.75em; }\n\n.swal2-popup .swal2-input[type='number'] {\n      max-width: 10em; }\n\n.swal2-popup .swal2-file {\n    font-size: 1.125em; }\n\n.swal2-popup .swal2-textarea {\n    height: 6.75em;\n    padding: 0.75em; }\n\n.swal2-popup .swal2-select {\n    min-width: 50%;\n    max-width: 100%;\n    padding: .375em .625em;\n    color: #545454;\n    font-size: 1.125em; }\n\n.swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.swal2-popup .swal2-radio label,\n    .swal2-popup .swal2-checkbox label {\n      margin: 0 .6em;\n      font-size: 1.125em; }\n\n.swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-checkbox input {\n      margin: 0 .4em; }\n\n.swal2-popup .swal2-validation-message {\n    display: none;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 0.625em;\n    background: #f0f0f0;\n    color: #666666;\n    font-size: 1em;\n    font-weight: 300;\n    overflow: hidden; }\n\n.swal2-popup .swal2-validation-message::before {\n      display: inline-block;\n      width: 1.5em;\n      min-width: 1.5em;\n      height: 1.5em;\n      margin: 0 .625em;\n      border-radius: 50%;\n      background-color: #f27474;\n      color: #fff;\n      font-weight: 600;\n      line-height: 1.5em;\n      text-align: center;\n      content: '!';\n      zoom: normal; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n\n.swal2-icon {\n  position: relative;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: .25em solid transparent;\n  border-radius: 50%;\n  line-height: 5em;\n  cursor: default;\n  box-sizing: content-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  zoom: normal; }\n\n.swal2-icon-text {\n    font-size: 3.75em; }\n\n.swal2-icon.swal2-error {\n    border-color: #f27474; }\n\n.swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n\n.swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      display: block;\n      position: absolute;\n      top: 2.3125em;\n      width: 2.9375em;\n      height: .3125em;\n      border-radius: .125em;\n      background-color: #f27474; }\n\n.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 1.0625em;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n\n.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 1em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-icon.swal2-warning {\n    border-color: #facea8;\n    color: #f8bb86; }\n\n.swal2-icon.swal2-info {\n    border-color: #9de0f6;\n    color: #3fc3ee; }\n\n.swal2-icon.swal2-question {\n    border-color: #c9dae1;\n    color: #87adbd; }\n\n.swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n\n.swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 3.75em;\n      height: 7.5em;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n\n.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -.4375em;\n        left: -2.0635em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 3.75em 3.75em;\n                transform-origin: 3.75em 3.75em;\n        border-radius: 7.5em 0 0 7.5em; }\n\n.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -.6875em;\n        left: 1.875em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 3.75em;\n                transform-origin: 0 3.75em;\n        border-radius: 0 7.5em 7.5em 0; }\n\n.swal2-icon.swal2-success .swal2-success-ring {\n      position: absolute;\n      top: -.25em;\n      left: -.25em;\n      width: 100%;\n      height: 100%;\n      border: 0.25em solid rgba(165, 220, 134, 0.3);\n      border-radius: 50%;\n      z-index: 2;\n      box-sizing: content-box; }\n\n.swal2-icon.swal2-success .swal2-success-fix {\n      position: absolute;\n      top: .5em;\n      left: 1.625em;\n      width: .4375em;\n      height: 5.625em;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      z-index: 1; }\n\n.swal2-icon.swal2-success [class^='swal2-success-line'] {\n      display: block;\n      position: absolute;\n      height: .3125em;\n      border-radius: .125em;\n      background-color: #a5dc86;\n      z-index: 2; }\n\n.swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 2.875em;\n        left: .875em;\n        width: 1.5625em;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n\n.swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 2.375em;\n        right: .5em;\n        width: 2.9375em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  font-weight: 600; }\n\n.swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n\n.swal2-progresssteps .swal2-progresscircle {\n    width: 2em;\n    height: 2em;\n    border-radius: 2em;\n    background: #3085d6;\n    color: #fff;\n    line-height: 2em;\n    text-align: center;\n    z-index: 20; }\n\n.swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n\n.swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n\n.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n\n.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n\n.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n\n.swal2-progresssteps .swal2-progressline {\n    width: 2.5em;\n    height: .4em;\n    margin: 0 -1px;\n    background: #3085d6;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s; }\n\n.swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards; }\n\n.swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0; }\n\n.swal2-animate-success-icon .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n\n.swal2-animate-error-icon {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s; }\n\n.swal2-animate-error-icon .swal2-x-mark {\n    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n            animation: swal2-animate-error-x-mark 0.5s; }\n\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important; }\n    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {\n      display: none; }\n    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n      position: initial !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvYW5pbWF0aW9ucy5zY3NzIiwiL1VzZXJzL2dsZW5kb25zbWFsbC9EZXNrdG9wL1dCMDI3NTIzOS9UZW1wbGF0ZS9mdWxsLXZlcnNpb24vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy90b2FzdHMuc2NzcyIsIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvZ2xlbmRvbnNtYWxsL0Rlc2t0b3AvV0IwMjc1MjM5L1RlbXBsYXRlL2Z1bGwtdmVyc2lvbi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyLnNjc3MiLCIvVXNlcnMvZ2xlbmRvbnNtYWxsL0Rlc2t0b3AvV0IwMjc1MjM5L1RlbXBsYXRlL2Z1bGwtdmVyc2lvbi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zd2VldGFsZXJ0Mi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSw2QkFBb0I7WUFBcEIscUJBQW9CLEVBQUE7RUFHdEI7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7SUFDRSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFHdkI7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEsRUFBQTs7QUFkdkI7RUFDRTtJQUNFLDZCQUFvQjtZQUFwQixxQkFBb0IsRUFBQTtFQUd0QjtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUd2QjtJQUNF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QixFQUFBO0VBR3pCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0U7SUFNTSw2QkFBNkIsRUFBQTtJQU5uQztNQVNRLGFBQWEsRUFBQTtJQVRyQjtNQWFRLDRCQUE0QixFQUFBLEVBQzdCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVhcmFuY2UgYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHN3YWwyLXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XG4gIH1cblxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLy8gRGlzcHBlYXJhbmNlIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzd2FsMi1oaWRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLy8gU3VjY2VzcyBpY29uIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA3MCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgbGVmdDogLS4zNzVlbTtcbiAgICB3aWR0aDogMy4xMjVlbTtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjgxMjVlbTtcbiAgICBsZWZ0OiAuODc1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxufVxuXG4vLyBFcnJvciBpY29uIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA4MCUge1xuICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsImJvZHkge1xuICAmLnN3YWwyLXRvYXN0LXNob3duIHtcbiAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLnN3YWwyLXNob3duIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi10b2FzdC1jb2x1bW4ge1xuICAgIC5zd2FsMi10b2FzdCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAgIC5zd2FsMi1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjMxMjVlbTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLWxvYWRpbmcge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLWlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xuICAgICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU7XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4uc3dhbDItcG9wdXAge1xuICAmLnN3YWwyLXRvYXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6ICRzd2FsMi10b2FzdC13aWR0aDtcbiAgICBwYWRkaW5nOiAkc3dhbDItdG9hc3QtcGFkZGluZztcbiAgICBib3gtc2hhZG93OiAwIDAgLjYyNWVtICRzd2FsMi1ib3gtc2hhZG93O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAwIC42ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC10aXRsZS1mb250LXNpemU7XG4gICAgfVxuXG4gICAgLnN3YWwyLWZvb3RlciB7XG4gICAgICBtYXJnaW46ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW47XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1jbG9zZSB7XG4gICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgIHdpZHRoOiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC5zd2FsMi1jb250ZW50IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1pY29uIHtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItc3VjY2VzcyB7XG5cbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWVycm9yIHtcblxuICAgICAgICBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcbiAgICAgICAgICB0b3A6IC44NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcblxuICAgICAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICAgICAgbGVmdDogLjMxMjVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgICAgICByaWdodDogLjMxMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItYWN0aW9ucyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4wNjI1ZW0gJHN3YWwyLXdoaXRlLCAwIDAgMCAuMTI1ZW0gJHN3YWwyLWJ1dHRvbi1mb2N1cy1vdXRsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zd2FsMi1zdWNjZXNzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG5cbiAgICAgIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddIHsgLy8gRW11bGF0ZSBtb3ZpbmcgY2lyY3VsYXIgbGluZVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMi44MTI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgICAgIGxlZnQ6IC0uOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAuNDM3NWVtO1xuICAgICAgICB3aWR0aDogLjQzNzVlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjY4NzVlbTtcbiAgICAgIH1cblxuICAgICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgICBoZWlnaHQ6IC4zMTI1ZW07XG5cbiAgICAgICAgJltjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgICB0b3A6IDEuMTI1ZW07XG4gICAgICAgICAgbGVmdDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogLjc1ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgICB0b3A6IC45Mzc1ZW07XG4gICAgICAgICAgcmlnaHQ6IC4xODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiBzaG93U3dlZXRUb2FzdCAuNXM7XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogaGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO1xuICAgIH1cblxuICAgIC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiB7XG4gICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIC43NXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc2hvd1N3ZWV0VG9hc3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG5cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgICBvcGFjaXR5OiAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlU3dlZXRUb2FzdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMzMlIHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IC41NjI1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAuMTI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0b3A6IC42MjVlbTtcbiAgICBsZWZ0OiAtLjI1ZW07XG4gICAgd2lkdGg6IDEuNjI1ZW07XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogLjc1ZW07XG4gICAgd2lkdGg6IC41ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogLjE4NzVlbTtcbiAgICB3aWR0aDogLjc1ZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyB7XG4gIDAlIHtcbiAgICB0b3A6IDEuNjI1ZW07XG4gICAgcmlnaHQ6IDEuMzc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA2NSUge1xuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEuMTI1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IC4xODc1ZW07XG4gICAgd2lkdGg6IDEuMzc1ZW07XG4gIH1cbn1cbiIsIiRzd2FsMi13aGl0ZTogICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRzd2FsMi1ibGFjazogICAgICAgIzAwMCAhZGVmYXVsdDtcblxuLy8gQk9YIE1PREVMXG4kc3dhbDItd2lkdGg6IDMyZW0gIWRlZmF1bHQ7XG4kc3dhbDItcGFkZGluZzogMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlci1yYWRpdXM6IC4zMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQkFDS0dST1VORFxuJHN3YWwyLWJhY2tncm91bmQ6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcblxuLy8gVFlQT0dSQVBIWVxuJHN3YWwyLWZvbnQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4vLyBCQUNLRFJPUFxuJHN3YWwyLWJhY2tkcm9wOiByZ2JhKCRzd2FsMi1ibGFjaywgLjQpICFkZWZhdWx0O1xuXG4vLyBJQ09OU1xuJHN3YWwyLWljb24tc2l6ZTogNWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tbWFyZ2luOiAxLjI1ZW0gYXV0byAxLjg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tem9vbTogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3M6ICNhNWRjODYgIWRlZmF1bHQ7XG4kc3dhbDItc3VjY2Vzcy1ib3JkZXI6IHJnYmEoJHN3YWwyLXN1Y2Nlc3MsIC4zKSAhZGVmYXVsdDtcbiRzd2FsMi1lcnJvcjogI2YyNzQ3NCAhZGVmYXVsdDtcbiRzd2FsMi13YXJuaW5nOiAjZjhiYjg2ICFkZWZhdWx0O1xuJHN3YWwyLWluZm86ICMzZmMzZWUgIWRlZmF1bHQ7XG4kc3dhbDItcXVlc3Rpb246ICM4N2FkYmQgIWRlZmF1bHQ7XG5cbi8vIElNQUdFXG4kc3dhbDItaW1hZ2UtbWFyZ2luOiAxLjI1ZW0gYXV0byAhZGVmYXVsdDtcblxuLy8gVElUTEVcbiRzd2FsMi10aXRsZS1tYXJnaW46IDAgMCAuNGVtICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzUpICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTogMS44NzVlbSAhZGVmYXVsdDtcblxuLy8gQ09OVEVOVFxuJHN3YWwyLWNvbnRlbnQtY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1mb250LXNpemU6IDEuMTI1ZW0gIWRlZmF1bHQ7XG5cbi8vIElOUFVUXG4kc3dhbDItaW5wdXQtbWFyZ2luOiAxZW0gYXV0byAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1oZWlnaHQ6IDIuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtcGFkZGluZzogMCAuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXI6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4NSkgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1czogLjE4NzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXItZm9jdXM6ICNiNGRiZWQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm94LXNoYWRvdzogcmdiYSgkc3dhbDItYmxhY2ssIC4wNikgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm94LXNoYWRvdy1mb2N1czogI2M0ZTZmNSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb250LXNpemU6IDEuMTI1ZW0gIWRlZmF1bHQ7XG5cbi8vIFRFWFRBUkVBIFNQRUNJRklDIFZBUklBQkxFU1xuJHN3YWwyLXRleHRhcmVhLWhlaWdodDogNi43NWVtICFkZWZhdWx0O1xuJHN3YWwyLXRleHRhcmVhLXBhZGRpbmc6IC43NWVtICFkZWZhdWx0O1xuXG4vLyBWQUxJREFUSU9OIE1FU1NBR0VcbiRzd2FsMi12YWxpZGF0aW9uZXJyb3ItanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbmVycm9yLXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uZXJyb3ItYmFja2dyb3VuZDogbGlnaHRlbigkc3dhbDItYmxhY2ssIDk0KSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uZXJyb3ItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA0MCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbmVycm9yLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb25lcnJvci1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb25lcnJvci1pY29uLWJhY2tncm91bmQ6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uZXJyb3ItaWNvbi1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb25lcnJvci1pY29uLXpvb206IG5vcm1hbCAhZGVmYXVsdDtcblxuLy8gUFJPR1JFU1MgU1RFUFNcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1tYXJnaW46IDAgMCAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZGlzdGFuY2U6IDIuNWVtICFkZWZhdWx0O1xuXG4vLyBGT09URVJcbiRzd2FsMi1mb290ZXItbWFyZ2luOiAxLjI1ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1wYWRkaW5nOiAxZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzMpICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3MtbGluZS10aXAtYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1cyAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZy1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cyAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW4gIWRlZmF1bHQ7XG4kc3dhbDItZXJyb3ItaWNvbi1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXMgIWRlZmF1bHQ7XG4kc3dhbDItZXJyb3IteC1tYXJrLWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT05cbiRzd2FsMi1jbG9zZS1idXR0b24td2lkdGg6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDogMS4yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1wb3NpdGlvbjogYWJzb2x1dGUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWdhcDogMCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXI6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU6IGluaXRpYWwgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDgwKSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplOiAyLjVlbSAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OOkhPVkVSXG4kc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcblxuLy8gQUNUSU9OU1xuJHN3YWwyLWFjdGlvbnMtbWFyZ2luOiAxLjI1ZW0gYXV0byAwICFkZWZhdWx0O1xuXG4vLyBDT05GSVJNIEJVVFRPTlxuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ0FOQ0VMIEJVVFRPTlxuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyLXJhZGl1czogLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFhICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTogMS4wNjI1ZW0gIWRlZmF1bHQ7XG5cbi8vIENPTU1PTiBWQVJJQUJMRVMgRk9SIENPTkZJUk0gQU5EIENBTkNFTCBCVVRUT05TXG4kc3dhbDItYnV0dG9uLWRhcmtlbi1ob3ZlcjogcmdiYSgkc3dhbDItYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZTogcmdiYSgkc3dhbDItYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTogcmdiYSg1MCwgMTAwLCAxNTAsIC40KSAhZGVmYXVsdDtcblxuLy8gVE9BU1RTXG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoOiAuOGVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAuOCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC13aWR0aDogYXV0byAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJ1dHRvbnMtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjogLjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLXBhZGRpbmc6IC41ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1mb250LXNpemU6IC44ZW0gIWRlZmF1bHQ7XG4iLCIvLyBTd2VldEFsZXJ0MlxuLy8gZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0MlxuXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnYW5pbWF0aW9ucyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAndG9hc3RzJztcblxuYm9keSB7XG4gICYuc3dhbDItc2hvd24ge1xuICAgIEBpbmNsdWRlIG5vdChcbiAgICAgICcuc3dhbDItbm8tYmFja2Ryb3AnLFxuICAgICAgJy5zd2FsMi10b2FzdC1zaG93bidcbiAgICApIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIG5vdCBvdmVyZmxvdy15IGJlY2F1c2Ugb2YgU2FyYXJpLCAjMTI1M1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvLyAjNzgxICMxMTA3XG4gIH1cblxuICAmLnN3YWwyLW5vLWJhY2tkcm9wIHtcbiAgICAuc3dhbDItc2hvd24ge1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkc3dhbDItYmFja2Ryb3A7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAgICYuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1jb250YWluZXIge1xuICAvLyBjZW50ZXJpbmdcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC8vIGJhY2tkcm9wXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIHotaW5kZXg6IDEwNjA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTA1XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAmLnN3YWwyLXRvcCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3AtZW5kLFxuICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctZnVsbHNjcmVlbiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYuc3dhbDItdG9wLFxuICAgICYuc3dhbDItY2VudGVyLFxuICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgJi5zd2FsMi10b3AtbGVmdCxcbiAgICAmLnN3YWwyLWNlbnRlci1sZWZ0LFxuICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgJi5zd2FsMi10b3AtcmlnaHQsXG4gICAgJi5zd2FsMi1jZW50ZXItcmlnaHQsXG4gICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgZmxleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG5vdChcbiAgICAnLnN3YWwyLXRvcCcsXG4gICAgJy5zd2FsMi10b3Atc3RhcnQnLFxuICAgICcuc3dhbDItdG9wLWVuZCcsXG4gICAgJy5zd2FsMi10b3AtbGVmdCcsXG4gICAgJy5zd2FsMi10b3AtcmlnaHQnLFxuICAgICcuc3dhbDItY2VudGVyLXN0YXJ0JyxcbiAgICAnLnN3YWwyLWNlbnRlci1lbmQnLFxuICAgICcuc3dhbDItY2VudGVyLWxlZnQnLFxuICAgICcuc3dhbDItY2VudGVyLXJpZ2h0JyxcbiAgICAnLnN3YWwyLWJvdHRvbScsXG4gICAgJy5zd2FsMi1ib3R0b20tc3RhcnQnLFxuICAgICcuc3dhbDItYm90dG9tLWVuZCcsXG4gICAgJy5zd2FsMi1ib3R0b20tbGVmdCcsXG4gICAgJy5zd2FsMi1ib3R0b20tcmlnaHQnLFxuICAgICcuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuJ1xuICApIHtcbiAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBpZSB7XG4gICAgLnN3YWwyLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItZmFkZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXM7XG4gIH1cblxuICAmLnN3YWwyLXNob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItYmFja2Ryb3A7XG4gIH1cbn1cblxuXG4uc3dhbDItcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHN3YWwyLXdpZHRoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRzd2FsMi1wYWRkaW5nO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItZm9udDtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9udC1zaXplO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuXG4gIC5zd2FsMi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnN3YWwyLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogJHN3YWwyLXRpdGxlLW1hcmdpbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAkc3dhbDItdGl0bGUtY29sb3I7XG4gICAgZm9udC1zaXplOiAkc3dhbDItdGl0bGUtZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5zd2FsMi1hY3Rpb25zIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46ICRzd2FsMi1hY3Rpb25zLW1hcmdpbjtcbiAgICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIGJ1dHRvbnNcblxuICAgICY6bm90KC5zd2FsMi1sb2FkaW5nKSB7XG4gICAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZSwgJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuc3dhbDItbG9hZGluZyB7XG4gICAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICAgJi5zd2FsMi1jb25maXJtIHtcbiAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICBtYXJnaW46IC40Njg3NWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmLnN3YWwyLWNhbmNlbCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpub3QoLnN3YWwyLXN0eWxlZCkge1xuICAgICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA2MCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggJHN3YWwyLXdoaXRlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3dhbDItc3R5bGVkIHtcbiAgICBtYXJnaW46IC4zMTI1ZW07XG4gICAgcGFkZGluZzogLjYyNWVtIDJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJi5zd2FsMi1jb25maXJtIHtcbiAgICAgIGJvcmRlcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgY29sb3I6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1jb2xvcjtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAmLnN3YWwyLWNhbmNlbCB7XG4gICAgICBib3JkZXI6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIGNvbG9yOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNhbmNlbC1idXR0b24tZm9udC1zaXplO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkc3dhbDItd2hpdGUsIDAgMCAwIDRweCAkc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU7XG4gICAgfVxuXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICB9XG5cbiAgLnN3YWwyLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAkc3dhbDItZm9vdGVyLW1hcmdpbjtcbiAgICBwYWRkaW5nOiAkc3dhbDItZm9vdGVyLXBhZGRpbmc7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yO1xuICAgIGNvbG9yOiAkc3dhbDItZm9vdGVyLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWZvb3Rlci1mb250LXNpemU7XG4gIH1cblxuICAuc3dhbDItaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46ICRzd2FsMi1pbWFnZS1tYXJnaW47XG4gIH1cblxuICAuc3dhbDItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiAkc3dhbDItY2xvc2UtYnV0dG9uLXBvc2l0aW9uO1xuICAgIHRvcDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gICAgcmlnaHQ6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAkc3dhbDItY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgIGhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiAkc3dhbDItY2xvc2UtYnV0dG9uLXRyYW5zaXRpb247XG4gICAgYm9yZGVyOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgb3V0bGluZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1vdXRsaW5lO1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1jbG9zZS1idXR0b24tYmFja2dyb3VuZDtcbiAgICBjb2xvcjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG4gICAgZm9udC1zaXplOiAkc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTtcbiAgICAgIGNvbG9yOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gID4gLnN3YWwyLWlucHV0LFxuICA+IC5zd2FsMi1maWxlLFxuICA+IC5zd2FsMi10ZXh0YXJlYSxcbiAgPiAuc3dhbDItc2VsZWN0LFxuICA+IC5zd2FsMi1yYWRpbyxcbiAgPiAuc3dhbDItY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc3dhbDItY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICRzd2FsMi1jb250ZW50LWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIHRoZSBjb250ZW50XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgI3N3YWwyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zd2FsMi1pbnB1dCxcbiAgLnN3YWwyLWZpbGUsXG4gIC5zd2FsMi10ZXh0YXJlYSxcbiAgLnN3YWwyLXNlbGVjdCxcbiAgLnN3YWwyLXJhZGlvLFxuICAuc3dhbDItY2hlY2tib3gge1xuICAgIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbiAgfVxuXG4gIC5zd2FsMi1pbnB1dCxcbiAgLnN3YWwyLWZpbGUsXG4gIC5zd2FsMi10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHN3YWwyLWlucHV0LWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICRzd2FsMi1pbnB1dC1ib3gtc2hhZG93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmLnN3YWwyLWlucHV0ZXJyb3Ige1xuICAgICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3IgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkc3dhbDItaW5wdXQtYm9yZGVyLWZvY3VzO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggJHN3YWwyLWlucHV0LWJveC1zaGFkb3ctZm9jdXM7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCk7XG4gICAgfVxuICB9XG5cbiAgLnN3YWwyLXJhbmdlIHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIG91dHB1dCB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpbnB1dCxcbiAgICBvdXRwdXQge1xuICAgICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5zd2FsMi1pbnB1dCB7XG4gICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIHBhZGRpbmc6ICRzd2FsMi1pbnB1dC1wYWRkaW5nO1xuXG4gICAgJlt0eXBlPSdudW1iZXInXSB7XG4gICAgICBtYXgtd2lkdGg6IDEwZW07XG4gICAgfVxuICB9XG5cbiAgLnN3YWwyLWZpbGUge1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5zd2FsMi10ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAkc3dhbDItdGV4dGFyZWEtaGVpZ2h0O1xuICAgIHBhZGRpbmc6ICRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nO1xuICB9XG5cbiAgLnN3YWwyLXNlbGVjdCB7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XG4gICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMyk7XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICB9XG5cbiAgLnN3YWwyLXJhZGlvLFxuICAuc3dhbDItY2hlY2tib3gge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW46IDAgLjZlbTtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBtYXJnaW46IDAgLjRlbTtcbiAgICB9XG4gIH1cblxuICAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiAkc3dhbDItdmFsaWRhdGlvbmVycm9yLWp1c3RpZnktY29udGVudDtcbiAgICBwYWRkaW5nOiAkc3dhbDItdmFsaWRhdGlvbmVycm9yLXBhZGRpbmc7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLXZhbGlkYXRpb25lcnJvci1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbmVycm9yLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLXZhbGlkYXRpb25lcnJvci1mb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRzd2FsMi12YWxpZGF0aW9uZXJyb3ItZm9udC13ZWlnaHQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMS41ZW07XG4gICAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgIG1hcmdpbjogMCAuNjI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbmVycm9yLWljb24tYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbmVycm9yLWljb24tY29sb3I7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29udGVudDogJyEnO1xuICAgICAgem9vbTogJHN3YWwyLXZhbGlkYXRpb25lcnJvci1pY29uLXpvb207XG4gICAgfVxuICB9XG59XG5cbi8vIE1pY3Jvc29mdCBFZGdlXG5Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xuICAuc3dhbDItcmFuZ2Uge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgb3V0cHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIElFMTFcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBvdXRwdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmlyZWZveFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnN3YWwyLWNsb3NlIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU7XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi1pY29uLXNpemU7XG4gIGhlaWdodDogJHN3YWwyLWljb24tc2l6ZTtcbiAgbWFyZ2luOiAkc3dhbDItaWNvbi1tYXJnaW47XG4gIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6b29tOiAkc3dhbDItaWNvbi16b29tO1xuXG4gICYtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzLjc1ZW07XG4gIH1cblxuICAmLnN3YWwyLWVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIuMzEyNWVtO1xuICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWVycm9yO1xuXG4gICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgbGVmdDogMS4wNjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICByaWdodDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi13YXJuaW5nLCA3KTtcbiAgICBjb2xvcjogJHN3YWwyLXdhcm5pbmc7XG4gIH1cblxuICAmLnN3YWwyLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItaW5mbywgMjApO1xuICAgIGNvbG9yOiAkc3dhbDItaW5mbztcbiAgfVxuXG4gICYuc3dhbDItcXVlc3Rpb24ge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItcXVlc3Rpb24sIDIwKTtcbiAgICBjb2xvcjogJHN3YWwyLXF1ZXN0aW9uO1xuICB9XG5cbiAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10geyAvLyBFbXVsYXRlIG1vdmluZyBjaXJjdWxhciBsaW5lXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMy43NWVtO1xuICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS40Mzc1ZW07XG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHRvcDogLS42ODc1ZW07XG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7IC8vIFJpbmdcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgbGVmdDogLS4yNWVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IC4yNWVtIHNvbGlkICRzd2FsMi1zdWNjZXNzLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2Vzcy1maXggeyAvLyBIaWRlIGNvcm5lcnMgbGVmdCBmcm9tIGFuaW1hdGlvblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAuNWVtO1xuICAgICAgbGVmdDogMS42MjVlbTtcbiAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgaGVpZ2h0OiA1LjYyNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICZbY2xhc3MkPSd0aXAnXSB7XG4gICAgICAgIHRvcDogMi44NzVlbTtcbiAgICAgICAgbGVmdDogLjg3NWVtO1xuICAgICAgICB3aWR0aDogMS41NjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J2xvbmcnXSB7XG4gICAgICAgIHRvcDogMi4zNzVlbTtcbiAgICAgICAgcmlnaHQ6IC41ZW07XG4gICAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXByb2dyZXNzc3RlcHMge1xuICAkbGlnaHRibHVlOiAjYWRkOGU2O1xuICAkYmx1ZTogIzMwODVkNjtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1tYXJnaW47XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUge1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgIGNvbG9yOiAkc3dhbDItd2hpdGU7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJi5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAge1xuICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG5cbiAgICAgIH4gLnN3YWwyLXByb2dyZXNzY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0Ymx1ZTtcbiAgICAgIH1cblxuICAgICAgfiAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0Ymx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcbiAgICB3aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWRpc3RhbmNlO1xuICAgIGhlaWdodDogLjRlbTtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxufVxuXG5cbi8vIGdpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI2OFxuW2NsYXNzXj0nc3dhbDInXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2FsMi1zaG93IHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItc2hvdy1hbmltYXRpb247XG5cbiAgJi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5cbi5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItaGlkZS1hbmltYXRpb247XG5cbiAgJi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5cblxuLy8gUmlnaHQtdG8tbGVmdCBzdXBwb3J0XG4uc3dhbDItcnRsIHtcbiAgLnN3YWwyLWNsb3NlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWdhcDtcbiAgfVxufVxuXG5cbi8vIFN1Y2Nlc3MgaWNvbiBhbmltYXRpb25cbi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiB7XG4gIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgICBhbmltYXRpb246ICRzd2FsMi1zdWNjZXNzLWxpbmUtdGlwLWFuaW1hdGlvbjtcbiAgfVxuXG4gIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgYW5pbWF0aW9uOiAkc3dhbDItc3VjY2Vzcy1saW5lLWxvbmctYW5pbWF0aW9uO1xuICB9XG5cbiAgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XG4gICAgYW5pbWF0aW9uOiAkc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWFuaW1hdGlvbjtcbiAgfVxufVxuXG4vLyBFcnJvciBpY29uIGFuaW1hdGlvblxuLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIGFuaW1hdGlvbjogJHN3YWwyLWVycm9yLWljb24tYW5pbWF0aW9uO1xuXG4gIC5zd2FsMi14LW1hcmsge1xuICAgIGFuaW1hdGlvbjogJHN3YWwyLWVycm9yLXgtbWFyay1hbmltYXRpb247XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgYm9keSB7XG4gICAgJi5zd2FsMi1zaG93biB7XG4gICAgICBAaW5jbHVkZSBub3QoXG4gICAgICAgICcuc3dhbDItbm8tYmFja2Ryb3AnLFxuICAgICAgICAnLnN3YWwyLXRvYXN0LXNob3duJ1xuICAgICAgKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuXG4gICAgICAgID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDI1MDE2MVxuQG1peGluIG5vdCgkaWdub3ItbGlzdC4uLikge1xuICBAaWYgKGxlbmd0aCgkaWdub3ItbGlzdCkgPT0gMSkge1xuICAgICRpZ25vci1saXN0OiBudGgoJGlnbm9yLWxpc3QsIDEpO1xuICB9XG5cbiAgJG5vdC1vdXRwdXQ6ICcnO1xuICBAZWFjaCAkbm90IGluICRpZ25vci1saXN0IHtcbiAgICAkbm90LW91dHB1dDogJG5vdC1vdXRwdXQgKyAnOm5vdCgjeyRub3R9KSc7XG4gIH1cblxuICAmI3skbm90LW91dHB1dH0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAa2V5ZnJhbWVzIHN3YWwyLXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XG5cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEuMTg3NWVtO1xuICAgIGxlZnQ6IC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7IH1cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IC4xMjVlbTtcbiAgICB3aWR0aDogMDsgfVxuICA3MCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgbGVmdDogLS4zNzVlbTtcbiAgICB3aWR0aDogMy4xMjVlbTsgfVxuICA4NCUge1xuICAgIHRvcDogM2VtO1xuICAgIGxlZnQ6IDEuMzEyNWVtO1xuICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxuICAxMDAlIHtcbiAgICB0b3A6IDIuODEyNWVtO1xuICAgIGxlZnQ6IC44NzVlbTtcbiAgICB3aWR0aDogMS41NjI1ZW07IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07IH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiAyLjkzNzVlbTsgfSB9XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcbiAgMCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDgwJSB7XG4gICAgbWFyZ2luLXRvcDogLS4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IDA7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwOyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20ge1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiBhdXRvOyB9XG5cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGhlaWdodDogMi4yZW07XG4gICAgbWFyZ2luLXRvcDogLjMxMjVlbTsgfVxuICBib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmcge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuXG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAwIC42ZW07XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXIge1xuICAgIG1hcmdpbjogMC41ZW0gMCAwO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAgMDtcbiAgICBmb250LXNpemU6IDAuOGVtOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIHdpZHRoOiAwLjhlbTtcbiAgICBoZWlnaHQ6IDAuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1pbi13aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1hcmdpbjogMDsgfVxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMWVtOyB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgaGVpZ2h0OiAyZW07IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICB0b3A6IC44NzVlbTtcbiAgICAgIHdpZHRoOiAxLjM3NWVtOyB9XG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIGxlZnQ6IC4zMTI1ZW07IH1cbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHJpZ2h0OiAuMzEyNWVtOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCAuMzEyNWVtOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcbiAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICBwYWRkaW5nOiAuMzEyNWVtIC42MjVlbTtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMDYyNWVtICNmZmYsIDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6ICNhNWRjODY7IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMi44MTI1ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgICBsZWZ0OiAtLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07IH1cbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgbGVmdDogLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwOyB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgd2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtOyB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAuNDM3NWVtO1xuICAgICAgd2lkdGg6IC40Mzc1ZW07XG4gICAgICBoZWlnaHQ6IDIuNjg3NWVtOyB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcbiAgICAgIGhlaWdodDogLjMxMjVlbTsgfVxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICB0b3A6IDEuMTI1ZW07XG4gICAgICAgIGxlZnQ6IC4xODc1ZW07XG4gICAgICAgIHdpZHRoOiAuNzVlbTsgfVxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgdG9wOiAuOTM3NWVtO1xuICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgd2lkdGg6IDEuMzc1ZW07IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3cge1xuICAgIGFuaW1hdGlvbjogc2hvd1N3ZWV0VG9hc3QgLjVzOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRlIHtcbiAgICBhbmltYXRpb246IGhpZGVTd2VldFRvYXN0IC4ycyBmb3J3YXJkczsgfVxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgICBhbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1czsgfVxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzOyB9XG5cbkBrZXlmcmFtZXMgc2hvd1N3ZWV0VG9hc3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XG4gICAgb3BhY2l0eTogLjU7IH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gICAgb3BhY2l0eTogLjc7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3Qge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAzMyUge1xuICAgIG9wYWNpdHk6IC41OyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogLjU2MjVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDU0JSB7XG4gICAgdG9wOiAuMTI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDcwJSB7XG4gICAgdG9wOiAuNjI1ZW07XG4gICAgbGVmdDogLS4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtOyB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuNzVlbTtcbiAgICB3aWR0aDogLjVlbTsgfVxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogLjE4NzVlbTtcbiAgICB3aWR0aDogLjc1ZW07IH0gfVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMS42MjVlbTtcbiAgICByaWdodDogMS4zNzVlbTtcbiAgICB3aWR0aDogMDsgfVxuICA2NSUge1xuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAuOTM3NWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDg0JSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxLjEyNWVtOyB9XG4gIDEwMCUge1xuICAgIHRvcDogLjkzNzVlbTtcbiAgICByaWdodDogLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTsgfSB9XG5cbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbmJvZHkuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93biB7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24gPiAuc3dhbDItbW9kYWwge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3Age1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWxlZnQge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWxlZnQge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7IH1cbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7IH1cblxuLnN3YWwyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwNjA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXIsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pID4gLnN3YWwyLW1vZGFsIHtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgfSB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZmFkZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXM7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XG5cbi5zd2FsMi1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLnN3YWwyLXBvcHVwOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5nIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMC40ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzU5NTk1OTtcbiAgICBmb250LXNpemU6IDEuODc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxLjI1ZW0gYXV0byAwO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAuNDsgfVxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKTsgfVxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSk7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgd2lkdGg6IDIuNWVtO1xuICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgIG1hcmdpbjogLjQ2ODc1ZW07XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OTk5OTk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7IH1cbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQge1xuICAgIG1hcmdpbjogLjMxMjVlbTtcbiAgICBwYWRkaW5nOiAuNjI1ZW0gMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEuMDYyNWVtOyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEuMDYyNWVtOyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmLCAwIDAgMCA0cHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICBib3JkZXI6IDA7IH1cbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMS4yNWVtIDAgMDtcbiAgICBwYWRkaW5nOiAxZW0gMCAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIGNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEuMjVlbSBhdXRvOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2U6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgY29sb3I6ICNmMjc0NzQ7IH1cbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWlucHV0LFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItZmlsZSxcbiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLXRleHRhcmVhLFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItc2VsZWN0LFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItcmFkaW8sXG4gIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWNvbnRlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgei1pbmRleDogMTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cbiAgLnN3YWwyLXBvcHVwICNzd2FsMi1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhLFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAxZW0gYXV0bzsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnQ7IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OmZvY3VzLFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTpmb2N1cyxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1OyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogODAlOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQsXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBoZWlnaHQ6IDIuNjI1ZW07XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBsaW5lLWhlaWdodDogMi42MjVlbTsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0IHtcbiAgICBoZWlnaHQ6IDIuNjI1ZW07XG4gICAgcGFkZGluZzogMCAwLjc1ZW07IH1cbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0W3R5cGU9J251bWJlciddIHtcbiAgICAgIG1heC13aWR0aDogMTBlbTsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDYuNzVlbTtcbiAgICBwYWRkaW5nOiAwLjc1ZW07IH1cbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3Qge1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAuMzc1ZW0gLjYyNWVtO1xuICAgIGNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvLFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBsYWJlbCxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGxhYmVsIHtcbiAgICAgIG1hcmdpbjogMCAuNmVtO1xuICAgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBpbnB1dCxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0IHtcbiAgICAgIG1hcmdpbjogMCAuNGVtOyB9XG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC42MjVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICBtYXJnaW46IDAgLjYyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbnRlbnQ6ICchJztcbiAgICAgIHpvb206IG5vcm1hbDsgfVxuXG5Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xuICAuc3dhbDItcmFuZ2UgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cbiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnN3YWwyLWNsb3NlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH0gfVxuXG4uc3dhbDItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogNWVtO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvIDEuODc1ZW07XG4gIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDVlbTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHpvb206IG5vcm1hbDsgfVxuICAuc3dhbDItaWNvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDMuNzVlbTsgfVxuICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0OyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFyayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbGV4LWdyb3c6IDE7IH1cbiAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyLjMxMjVlbTtcbiAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgIGhlaWdodDogLjMxMjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7IH1cbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICBsZWZ0OiAxLjA2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHJpZ2h0OiAxZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cbiAgLnN3YWwyLWljb24uc3dhbDItd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xuICAgIGNvbG9yOiAjZjhiYjg2OyB9XG4gIC5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcbiAgICBjb2xvcjogIzNmYzNlZTsgfVxuICAuc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzlkYWUxO1xuICAgIGNvbG9yOiAjODdhZGJkOyB9XG4gIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogI2E1ZGM4NjsgfVxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDMuNzVlbTtcbiAgICAgIGhlaWdodDogNy41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICB0b3A6IC0uNDM3NWVtO1xuICAgICAgICBsZWZ0OiAtMi4wNjM1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTsgfVxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICB0b3A6IC0uNjg3NWVtO1xuICAgICAgICBsZWZ0OiAxLjg3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA3LjVlbSA3LjVlbSAwOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgbGVmdDogLS4yNWVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCByZ2JhKDE2NSwgMjIwLCAxMzQsIDAuMyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cbiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC41ZW07XG4gICAgICBsZWZ0OiAxLjYyNWVtO1xuICAgICAgd2lkdGg6IC40Mzc1ZW07XG4gICAgICBoZWlnaHQ6IDUuNjI1ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYzg2O1xuICAgICAgei1pbmRleDogMjsgfVxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgdG9wOiAyLjg3NWVtO1xuICAgICAgICBsZWZ0OiAuODc1ZW07XG4gICAgICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgdG9wOiAyLjM3NWVtO1xuICAgICAgICByaWdodDogLjVlbTtcbiAgICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi5zd2FsMi1wcm9ncmVzc3N0ZXBzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMS4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNjAwOyB9XG4gIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgYmFja2dyb3VuZDogIzMwODVkNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyMDsgfVxuICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxuICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAge1xuICAgICAgYmFja2dyb3VuZDogIzMwODVkNjsgfVxuICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7IH1cbiAgICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAgfiAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxuICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgaGVpZ2h0OiAuNGVtO1xuICAgIG1hcmdpbjogMCAtMXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMDg1ZDY7XG4gICAgei1pbmRleDogMTA7IH1cblxuW2NsYXNzXj0nc3dhbDInXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLnN3YWwyLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLXNob3cgMC4zczsgfVxuICAuc3dhbDItc2hvdy5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiBub25lOyB9XG5cbi5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1oaWRlIDAuMTVzIGZvcndhcmRzOyB9XG4gIC5zd2FsMi1oaWRlLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IG5vbmU7IH1cblxuLnN3YWwyLXJ0bCAuc3dhbDItY2xvc2Uge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDsgfVxuXG4uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1czsgfVxuXG4uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzOyB9XG5cbi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47IH1cblxuLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7IH1cbiAgLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuc3dhbDIteC1tYXJrIHtcbiAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIDAuNXM7IH1cblxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQG1lZGlhIHByaW50IHtcbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7IH1cbiAgICBib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50OyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdvAlertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvAlertRoutingModule", function() { return AdvAlertRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-alert.component */ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.ts");




var routes = [
    {
        path: '',
        component: _adv_alert_component__WEBPACK_IMPORTED_MODULE_3__["AdvAlertComponent"]
    }
];
var AdvAlertRoutingModule = /** @class */ (function () {
    function AdvAlertRoutingModule() {
    }
    AdvAlertRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvAlertRoutingModule);
    return AdvAlertRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Alerts\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"basicSwal()\">Basic</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"successSwal()\">Success</button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"warningSwal()\">warning</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"dangerSwal()\">error</button>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"infoSwal()\">info</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmAlert()\">Success or Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"promptAlert()\">Prompt</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"ajaxAlert()\">Ajax</button>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1hbGVydC9hZHYtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdvAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvAlertComponent", function() { return AdvAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var AdvAlertComponent = /** @class */ (function () {
    function AdvAlertComponent() {
    }
    AdvAlertComponent.prototype.ngOnInit = function () {
    };
    AdvAlertComponent.prototype.basicSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('', 'Hello world!');
    };
    AdvAlertComponent.prototype.successSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Good job!', 'You clicked the button!', 'success');
    };
    AdvAlertComponent.prototype.warningSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Good job!', 'You clicked the button!', 'warning');
    };
    AdvAlertComponent.prototype.dangerSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Good job!', 'You clicked the button!', 'error');
    };
    AdvAlertComponent.prototype.infoSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Good job!', 'You clicked the button!', 'info');
    };
    AdvAlertComponent.prototype.confirmAlert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then(function (willDelete) {
            if (willDelete) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('', 'Poof! Your imaginary file has been deleted!', 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('', 'Your imaginary file is safe!', 'error');
            }
        });
    };
    AdvAlertComponent.prototype.promptAlert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            text: 'Write something here:',
            input: 'text',
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('', "You typed: " + result.value);
            }
        });
    };
    AdvAlertComponent.prototype.ajaxAlert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            text: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: function (login) {
                return fetch("//api.github.com/users/" + login)
                    .then(function (response) {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                    .catch(function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showValidationMessage("Request failed: " + error);
                });
            },
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: result.value.login + "'s avatar",
                    imageUrl: result.value.avatar_url
                });
            }
        });
    };
    AdvAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-alert',
            template: __webpack_require__(/*! ./adv-alert.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.html"),
            styles: [__webpack_require__(/*! ./adv-alert.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvAlertComponent);
    return AdvAlertComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdvAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvAlertModule", function() { return AdvAlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-alert-routing.module */ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert-routing.module.ts");
/* harmony import */ var _adv_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv-alert.component */ "./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AdvAlertModule = /** @class */ (function () {
    function AdvAlertModule() {
    }
    AdvAlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adv_alert_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvAlertRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_adv_alert_component__WEBPACK_IMPORTED_MODULE_4__["AdvAlertComponent"]]
        })
    ], AdvAlertModule);
    return AdvAlertModule;
}());



/***/ })

}]);
//# sourceMappingURL=adv-alert-adv-alert-module.js.map