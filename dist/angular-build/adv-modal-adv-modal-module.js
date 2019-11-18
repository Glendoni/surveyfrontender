(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-modal-adv-modal-module"],{

/***/ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdvModalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvModalRoutingModule", function() { return AdvModalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-modal.component */ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.ts");




var routes = [
    {
        path: '',
        component: _adv_modal_component__WEBPACK_IMPORTED_MODULE_3__["AdvModalComponent"]
    }
];
var AdvModalRoutingModule = /** @class */ (function () {
    function AdvModalRoutingModule() {
    }
    AdvModalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvModalRoutingModule);
    return AdvModalRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Animeted Model\">\n      <div class=\"main clearfix\">\n        <div class=\"column\">\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-1\" (click)=\"openMyModal('modal-1')\">Fade in &amp; Scale</button>\n          <app-animation-modal [modalID]=\"'modal-1'\" [modalClass]=\"'md-effect-1'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-2\" (click)=\"openMyModal('modal-2')\">Slide in (right)</button>\n          <app-animation-modal [modalID]=\"'modal-2'\" [modalClass]=\"'md-effect-2'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-3\" (click)=\"openMyModal('modal-3')\">Slide in (bottom)</button>\n          <app-animation-modal [modalID]=\"'modal-3'\" [modalClass]=\"'md-effect-3'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-4\" (click)=\"openMyModal('modal-4')\">Newspaper</button>\n          <app-animation-modal [modalID]=\"'modal-4'\" [modalClass]=\"'md-effect-4'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-5\" (click)=\"openMyModal('modal-5')\">Fall</button>\n          <app-animation-modal [modalID]=\"'modal-5'\" [modalClass]=\"'md-effect-5'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-6\" (click)=\"openMyModal('modal-6')\">Side Fall</button>\n          <app-animation-modal [modalID]=\"'modal-6'\" [modalClass]=\"'md-effect-6'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-7\" (click)=\"openMyModal('modal-7')\">Sticky Up</button>\n          <app-animation-modal [modalID]=\"'modal-7'\" [modalClass]=\"'md-effect-7'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-8\" (click)=\"openMyModal('modal-8')\">3D Flip (horizontal)</button>\n          <app-animation-modal [modalID]=\"'modal-8'\" [modalClass]=\"'md-effect-8'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-9\" (click)=\"openMyModal('modal-9')\">3D Flip (vertical)</button>\n          <app-animation-modal [modalID]=\"'modal-9'\" [modalClass]=\"'md-effect-9'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-10\" (click)=\"openMyModal('modal-10')\">3D Sign</button>\n          <app-animation-modal [modalID]=\"'modal-10'\" [modalClass]=\"'md-effect-10'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-11\" (click)=\"openMyModal('modal-11')\">Super Scaled</button>\n          <app-animation-modal [modalID]=\"'modal-11'\" [modalClass]=\"'md-effect-11'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-12\" (click)=\"openMyModal('modal-12')\">Just Me</button>\n          <app-animation-modal [modalID]=\"'modal-12'\" [modalClass]=\"'md-effect-12'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-13\" (click)=\"openMyModal('modal-13')\">3D Slit</button>\n          <app-animation-modal [modalID]=\"'modal-13'\" [modalClass]=\"'md-effect-13'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-14\" (click)=\"openMyModal('modal-14')\">3D Rotate Bottom</button>\n          <app-animation-modal [modalID]=\"'modal-14'\" [modalClass]=\"'md-effect-14'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-15\" (click)=\"openMyModal('modal-15')\">3D Rotate In Left</button>\n          <app-animation-modal [modalID]=\"'modal-15'\" [modalClass]=\"'md-effect-15'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-16\" (click)=\"openMyModal('modal-16')\">Blur</button>\n          <app-animation-modal [modalID]=\"'modal-16'\" [modalClass]=\"'md-effect-16'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-17\" (click)=\"openMyModal('modal-17')\">Let me in</button>\n          <app-animation-modal [modalID]=\"'modal-17'\" [modalClass]=\"'md-effect-17'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-18\" (click)=\"openMyModal('modal-18')\">Make way!</button>\n          <app-animation-modal [modalID]=\"'modal-18'\" [modalClass]=\"'md-effect-18'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n\n          <button class=\"btn btn-primary md-trigger\" data-modal=\"modal-19\" (click)=\"openMyModal('modal-19')\">Slip from top</button>\n          <app-animation-modal [modalID]=\"'modal-19'\" [modalClass]=\"'md-effect-19'\">\n            <h3 class=\"theme-bg2\">Modal Dialog</h3>\n            <div>\n              <p>This is a modal window. You can do the following things with it:</p>\n              <ul>\n                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n                <li><strong>Close:</strong> click on the button below to close the modal.</li>\n              </ul>\n              <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n            </div>\n          </app-animation-modal>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1tb2RhbC9hZHYtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdvModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvModalComponent", function() { return AdvModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdvModalComponent = /** @class */ (function () {
    function AdvModalComponent() {
    }
    AdvModalComponent.prototype.ngOnInit = function () {
    };
    AdvModalComponent.prototype.openMyModal = function (event) {
        document.querySelector('#' + event).classList.add('md-show');
    };
    AdvModalComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    AdvModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-modal',
            template: __webpack_require__(/*! ./adv-modal.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.html"),
            styles: [__webpack_require__(/*! ./adv-modal.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvModalComponent);
    return AdvModalComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdvModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvModalModule", function() { return AdvModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-modal-routing.module */ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal-routing.module.ts");
/* harmony import */ var _adv_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv-modal.component */ "./src/app/demo/ui-elements/ui-adv/adv-modal/adv-modal.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AdvModalModule = /** @class */ (function () {
    function AdvModalModule() {
    }
    AdvModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adv_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvModalRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_adv_modal_component__WEBPACK_IMPORTED_MODULE_4__["AdvModalComponent"]]
        })
    ], AdvModalModule);
    return AdvModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=adv-modal-adv-modal-module.js.map