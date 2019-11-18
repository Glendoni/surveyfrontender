(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-google-chart-crt-google-chart-module"],{

/***/ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js ***!
  \***************************************************************************/
/*! exports provided: ChartHTMLTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
var ChartHTMLTooltip = /** @class */ (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js ***!
  \**************************************************************************/
/*! exports provided: ChartMouseEvent, MouseOverEvent, ChartMouseOverEvent, ChartMouseOutEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseEvent", function() { return ChartMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return MouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return ChartMouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return ChartMouseOutEvent; });
var __extends = (undefined && undefined.__extends) || (function () {
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
var ChartMouseEvent = /** @class */ (function () {
    function ChartMouseEvent() {
    }
    return ChartMouseEvent;
}());

/**
 * @deprecated Use ChartMouseOverEvent instead
 */
var MouseOverEvent = /** @class */ (function (_super) {
    __extends(MouseOverEvent, _super);
    function MouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOverEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOverEvent, _super);
    function ChartMouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOutEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOutEvent, _super);
    function ChartMouseOutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOutEvent;
}(ChartMouseEvent));



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/google-chart.component.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");
/* harmony import */ var _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (!this.data) {
                return;
            }
            this.options = this.data.options;
            this.loaderService.load(this.data.chartType, this.data.apiKey).then(function () {
                if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.unregisterChartEvents();
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.options);
                }
                _this.registerChartWrapperEvents();
                _this.reformat();
                _this.redraw();
            });
        }
    };
    GoogleChartComponent.prototype.redraw = function () {
        this.reformat();
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    /**
     * Applies formatters to data columns, if defined
     */
    GoogleChartComponent.prototype.reformat = function () {
        if (!this.data) {
            return;
        }
        if (this.data.formatters !== undefined) {
            for (var _i = 0, _a = this.data.formatters; _i < _a.length; _i++) {
                var formatterConfig = _a[_i];
                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                var formatter = new formatterConstructor(formatterOptions);
                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                    for (var _b = 0, _c = formatterOptions.ranges; _b < _c.length; _b++) {
                        var range = _c[_b];
                        if (typeof (range.fromBgColor) !== 'undefined' && typeof (range.toBgColor) !== 'undefined') {
                            formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                        }
                        else {
                            formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                        }
                    }
                }
                for (var _d = 0, _e = formatterConfig.columns; _d < _e.length; _d++) {
                    var col = _e[_d];
                    formatter.format(this.wrapper.getDataTable(), col);
                }
            }
        }
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var bar = item.row;
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row === null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__["ChartHTMLTooltip"](tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(item),
            value: this.getValueAtPosition(item),
            columnType: this.getColumnTypeAtPosition(item),
            columnLabel: this.getColumnLabelAtPosition(item)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterChartEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        if (this.mouseOver.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addListener(this.wrapper, 'select', function () {
            var _a;
            var event;
            var selection = _this.wrapper.visualization.getSelection()[0];
            if (selection !== undefined) {
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                if (selection.row !== null) {
                    var dataTable = _this.wrapper.getDataTable();
                    var numberOfColumns = dataTable.getNumberOfColumns();
                    for (var i = 0; i < numberOfColumns; i++) {
                        selectedRowValues.push(dataTable.getValue(selection.row, i));
                        selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                    }
                }
                event = (_a = {
                        message: 'select',
                        row: selection.row,
                        column: selection.column
                    },
                    _a['selectedRowValues'] = selectedRowValues,
                    _a['selectedRowFormattedValues'] = selectedRowFormattedValues,
                    _a);
            }
            else {
                event = {
                    message: 'deselect',
                    row: null,
                    column: null,
                    selectedRowValues: [],
                    selectedRowFormattedValues: []
                };
            }
            _this.chartSelect.emit(event);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleChartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOut", void 0);
    GoogleChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-chart',
            template: '<div></div>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartsLoaderService"]])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts-loader.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts-loader.service.js ***!
  \************************************************************************/
/*! exports provided: GoogleChartsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var GoogleChartsLoaderService = /** @class */ (function () {
    function GoogleChartsLoaderService(localeId) {
        this.chartPackage = {
            AnnotationChart: 'annotationchart',
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            BubbleChart: 'corechart',
            Calendar: 'calendar',
            CandlestickChart: 'corechart',
            ColumnChart: 'corechart',
            ComboChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            OrgChart: 'orgchart',
            Sankey: 'sankey',
            Scatter: 'scatter',
            ScatterChart: 'corechart',
            SteppedAreaChart: 'corechart',
            Table: 'table',
            Timeline: 'timeline',
            TreeMap: 'treemap',
            WordTree: 'wordtree'
        };
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
    }
    GoogleChartsLoaderService.prototype.load = function (chartType, apiKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                var initializer = {
                    packages: [_this.chartPackage[chartType]],
                    language: _this.localeId,
                    callback: resolve
                };
                if (apiKey) {
                    initializer.mapsApiKey = apiKey;
                }
                google.charts.load('45.2', initializer);
            }).catch(function (err) { return reject(); });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    GoogleChartsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], GoogleChartsLoaderService);
    return GoogleChartsLoaderService;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts.module.js ***!
  \****************************************************************/
/*! exports provided: Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Ng2GoogleChartsModule = /** @class */ (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ],
            providers: [
                _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsLoaderService"]
            ],
            exports: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ]
        })
    ], Ng2GoogleChartsModule);
    return Ng2GoogleChartsModule;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-google-charts/index.js ***!
  \*************************************************/
/*! exports provided: ChartHTMLTooltip, ChartMouseOverEvent, ChartMouseOutEvent, MouseOverEvent, Ng2GoogleChartsModule, GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__["GoogleChartComponent"]; });

/* harmony import */ var _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__["ChartHTMLTooltip"]; });

/* harmony import */ var _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart/chart-mouse-event */ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOutEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["MouseOverEvent"]; });

/* harmony import */ var _google_charts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-charts.module */ "./node_modules/ng2-google-charts/google-charts.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return _google_charts_module__WEBPACK_IMPORTED_MODULE_3__["Ng2GoogleChartsModule"]; });







/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CrtGoogleChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtGoogleChartRoutingModule", function() { return CrtGoogleChartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crt_google_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-google-chart.component */ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.ts");




var routes = [
    {
        path: '',
        component: _crt_google_chart_component__WEBPACK_IMPORTED_MODULE_3__["CrtGoogleChartComponent"]
    }
];
var CrtGoogleChartRoutingModule = /** @class */ (function () {
    function CrtGoogleChartRoutingModule() {
    }
    CrtGoogleChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CrtGoogleChartRoutingModule);
    return CrtGoogleChartRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Area Chart\" [options]=\"false\">\n      <google-chart [data]=\"areaChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Stacking Area Chart\" [options]=\"false\">\n      <google-chart [data]=\"stackingAreaChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Bar Chart\" [options]=\"false\">\n      <google-chart [data]=\"barChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Bubble Chart\" [options]=\"false\">\n      <google-chart [data]=\"bubbleChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Exploading A Slice Chart\" [options]=\"false\">\n      <google-chart [data]=\"exploadingChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Donut Chart\" [options]=\"false\">\n      <google-chart [data]=\"donutChartData\"></google-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Combo Chart\" [options]=\"false\">\n      <google-chart [data]=\"comboChartData\"></google-chart>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtZ29vZ2xlLWNoYXJ0L2NydC1nb29nbGUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CrtGoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtGoogleChartComponent", function() { return CrtGoogleChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrtGoogleChartComponent = /** @class */ (function () {
    function CrtGoogleChartComponent() {
    }
    CrtGoogleChartComponent.prototype.ngOnInit = function () {
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                vAxis: { minValue: 0 },
                colors: ['#1de9b6', '#1dc4e9'],
                height: 300
            },
        };
        this.stackingAreaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                isStacked: true,
                height: 300,
                legend: { position: 'top', maxLines: 3 },
                vAxis: { minValue: 0 },
                colors: ['#1de9b6', '#A389D4']
            },
        };
        this.barChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
            ],
            options: {
                height: 300,
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City'
                },
                colors: ['#A389D4', '#04a9f5']
            },
        };
        this.bubbleChartData = {
            chartType: 'BubbleChart',
            dataTable: [
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ],
            options: {
                height: 300,
                title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                hAxis: { title: 'Life Expectancy' },
                vAxis: { title: 'Fertility Rate' },
                bubble: { textStyle: { fontSize: 11 } },
                colors: ['#1de9b6', '#04a9f5', '#A389D4']
            },
        };
        this.comboChartData = {
            chartType: 'ComboChart',
            dataTable: [
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ],
            options: {
                height: 300,
                title: 'Monthly Coffee Production by Country',
                vAxis: {
                    title: 'Cups'
                },
                hAxis: {
                    title: 'Month'
                },
                seriesType: 'bars',
                series: {
                    5: {
                        type: 'line'
                    }
                },
                colors: ['#04a9f5', '#1de9b6', '#f44236', '#1dc4e9', '#A389D4', '#3ebfea']
            },
        };
        this.donutChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                height: 300,
                title: 'My Daily Activities',
                pieHole: 0.4,
                colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
            },
        };
        this.exploadingChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33]
            ],
            options: {
                height: 300,
                title: 'Indian Language Use',
                legend: 'none',
                pieSliceText: 'label',
                slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                },
                colors: ['#04a9f5', '#1de9b6', '#1dc4e9', '#FE8A7D', '#A389D4', '#3ebfea']
            },
        };
    };
    CrtGoogleChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crt-google-chart',
            template: __webpack_require__(/*! ./crt-google-chart.component.html */ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.html"),
            styles: [__webpack_require__(/*! ./crt-google-chart.component.scss */ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrtGoogleChartComponent);
    return CrtGoogleChartComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CrtGoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtGoogleChartModule", function() { return CrtGoogleChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crt_google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-google-chart-routing.module */ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart-routing.module.ts");
/* harmony import */ var _crt_google_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crt-google-chart.component */ "./src/app/demo/pages/core-chart/crt-google-chart/crt-google-chart.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");







var CrtGoogleChartModule = /** @class */ (function () {
    function CrtGoogleChartModule() {
    }
    CrtGoogleChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _crt_google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrtGoogleChartRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"]
            ],
            declarations: [_crt_google_chart_component__WEBPACK_IMPORTED_MODULE_4__["CrtGoogleChartComponent"]]
        })
    ], CrtGoogleChartModule);
    return CrtGoogleChartModule;
}());



/***/ })

}]);
//# sourceMappingURL=crt-google-chart-crt-google-chart-module.js.map