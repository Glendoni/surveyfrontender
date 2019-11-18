(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-maps-google-maps-module"],{

/***/ "./src/app/demo/pages/core-maps/google-maps/google-maps-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/google-maps/google-maps-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: GoogleMapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsRoutingModule", function() { return GoogleMapsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-maps.component */ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.ts");




var routes = [
    {
        path: '',
        component: _google_maps_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsComponent"]
    }
];
var GoogleMapsRoutingModule = /** @class */ (function () {
    function GoogleMapsRoutingModule() {
    }
    GoogleMapsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GoogleMapsRoutingModule);
    return GoogleMapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/google-maps/google-maps.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Basic\" [options]=\"false\">\n      <agm-map [latitude]=\"21.217319\" [longitude]=\"72.866472\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Markers\" [options]=\"false\">\n      <agm-map [latitude]=\"21.2334329\" [longitude]=\"72.866472\" [zoom]=\"6\">\n        <agm-marker [latitude]=\"21.2334329\" [longitude]=\"72.866472\"></agm-marker>\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\"></agm-marker>\n        <agm-marker [latitude]=\"22.3220876\" [longitude]=\"73.1030464\"></agm-marker>\n        <agm-marker [latitude]=\"23.0201818\" [longitude]=\"72.4396587\"></agm-marker>\n        <agm-marker [latitude]=\"22.2734719\" [longitude]=\"70.7512565\"></agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Style\" [options]=\"false\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\"></agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Polylines\" [options]=\"false\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\n        <agm-polyline>\n          <agm-polyline-point [latitude]=\"lat\" [longitude]=\"lng\">\n          </agm-polyline-point>\n          <agm-polyline-point [latitude]=\"latA\" [longitude]=\"lngA\">\n          </agm-polyline-point>\n        </agm-polyline>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Info Window\" [options]=\"false\">\n      <agm-map [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"8\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\n        <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\n          <agm-info-window><h3>Codedthemes</h3> <br/> <p>Buy Now at <a href=\"https://themeforest.net/user/Codedthemes/portfolio\" target=\"_blank\">Themeforest</a></p></agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card cardTitle=\"Circle\" [options]=\"false\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-circle\n          [latitude]=\"lat + 0.3\"\n          [longitude]=\"lng\"\n          [radius]=\"50000\"\n          [fillColor]=\"'red'\"\n          [circleDraggable]=\"true\"\n          [editable]=\"true\"></agm-circle>\n      </agm-map>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/google-maps/google-maps.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hcHAvZGVtby9wYWdlcy9jb3JlLW1hcHMvZ29vZ2xlLW1hcHMvZ29vZ2xlLW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2NvcmUtbWFwcy9nb29nbGUtbWFwcy9nb29nbGUtbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/google-maps/google-maps.component.ts ***!
  \***************************************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
        this.lat = 21.1591857;
        this.lng = 72.7522563;
        this.latA = 21.7613308;
        this.lngA = 71.6753074;
        this.zoom = 8;
        this.styles = [{
                featureType: 'all',
                stylers: [{
                        saturation: -80
                    }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                        hue: '#00ffee'
                    }, {
                        saturation: 50
                    }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                        visibility: 'off'
                    }]
            }];
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    GoogleMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-maps',
            template: __webpack_require__(/*! ./google-maps.component.html */ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./google-maps.component.scss */ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-maps/google-maps/google-maps.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/google-maps/google-maps.module.ts ***!
  \************************************************************************/
/*! exports provided: GoogleMapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function() { return GoogleMapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _google_maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-maps-routing.module */ "./src/app/demo/pages/core-maps/google-maps/google-maps-routing.module.ts");
/* harmony import */ var _google_maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-maps.component */ "./src/app/demo/pages/core-maps/google-maps/google-maps.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");







var GoogleMapsModule = /** @class */ (function () {
    function GoogleMapsModule() {
    }
    GoogleMapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _google_maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [_google_maps_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsComponent"]]
        })
    ], GoogleMapsModule);
    return GoogleMapsModule;
}());



/***/ })

}]);
//# sourceMappingURL=google-maps-google-maps-module.js.map