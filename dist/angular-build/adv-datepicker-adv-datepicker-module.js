(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adv-datepicker-adv-datepicker-module"],{

/***/ "./node_modules/ic-datepicker/ic-datepicker.umd.js":
/*!*********************************************************!*\
  !*** ./node_modules/ic-datepicker/ic-datepicker.umd.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! moment */ "./node_modules/moment/moment.js")) :
	undefined;
}(this, (function (exports,core,common,forms,moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

var defaultDayQuickOptions = [
    {
        label: 'Today',
        date: moment()
    },
    {
        label: 'Tomorrow',
        date: moment().add(1, 'day')
    }
];
var IcDatepickerOptions = (function () {
    /**
     * @param {?} options
     * @param {?} icDatepickerService
     */
    function IcDatepickerOptions(options, icDatepickerService) {
        this.icDatepickerService = icDatepickerService;
        this.defaults = {
            attrs: {
                id: null,
                name: null,
                placeholder: null,
                readonly: true,
                tabindex: null
            },
            clearInvalidDates: true,
            closeOnSelect: true,
            customDayClasses: [],
            dayQuickOptions: defaultDayQuickOptions,
            defaultToYearSelect: false,
            disableDayFn: function () { return false; },
            disableWeekends: false,
            displayFormat: 'L',
            icons: {
                nextMonth: { classes: ['chevron', 'chevron-right'] },
                nextYears: { classes: ['chevron', 'chevron-down'] },
                previousMonth: { classes: ['chevron', 'chevron-left'] },
                previousYears: { classes: ['chevron', 'chevron-up'] }
            },
            inputClasses: [],
            maxDate: undefined,
            minDate: undefined,
            modelType: 'moment',
            position: 'bottom',
            showAdjacentMonthDays: true,
            showDayQuickOptions: true,
            showEmptyRow: true,
            stringModelFormat: 'YYYY-MM-DD'
        };
        if (options.attrs) {
            this.attrs = {
                id: options.attrs.id || this.defaults.attrs.id,
                name: options.attrs.name || this.defaults.attrs.name,
                placeholder: options.attrs.placeholder || this.defaults.attrs.placeholder,
                readonly: options.attrs.readonly || this.defaults.attrs.readonly,
                tabindex: options.attrs.tabindex || this.defaults.attrs.tabindex
            };
        }
        else {
            this.attrs = this.defaults.attrs;
        }
        if (options.icons) {
            this.icons = {
                nextMonth: options.icons.nextMonth || this.defaults.icons.nextMonth,
                nextYears: options.icons.nextYears || this.defaults.icons.nextYears,
                previousMonth: options.icons.previousMonth || this.defaults.icons.previousMonth,
                previousYears: options.icons.previousYears || this.defaults.icons.previousYears
            };
        }
        else {
            this.icons = this.defaults.icons;
        }
        this.clearInvalidDates = (null == options.clearInvalidDates) ? this.defaults.clearInvalidDates : options.clearInvalidDates;
        this.closeOnSelect = (null == options.closeOnSelect) ? this.defaults.closeOnSelect : options.closeOnSelect;
        this.customDayClasses = options.customDayClasses || this.defaults.customDayClasses;
        this.defaultToYearSelect = options.defaultToYearSelect || this.defaults.defaultToYearSelect;
        this.disableDayFn = options.disableDayFn || this.defaults.disableDayFn;
        this.disableWeekends = (null == options.disableWeekends) ? this.defaults.disableWeekends : options.disableWeekends;
        this.displayFormat = options.displayFormat || this.defaults.displayFormat;
        this.inputClasses = options.inputClasses || this.defaults.inputClasses;
        this.maxDate = options.maxDate || this.defaults.maxDate;
        this.minDate = options.minDate || this.defaults.minDate;
        this.modelType = options.modelType || this.defaults.modelType;
        this.position = options.position || this.defaults.position;
        this.showAdjacentMonthDays = (null == options.showAdjacentMonthDays) ? this.defaults.showAdjacentMonthDays : options.showAdjacentMonthDays;
        this.showDayQuickOptions = (null == options.showDayQuickOptions) ? this.defaults.showDayQuickOptions : options.showDayQuickOptions;
        this.showEmptyRow = (null == options.showEmptyRow) ? this.defaults.showEmptyRow : options.showEmptyRow;
        this.stringModelFormat = options.stringModelFormat || this.defaults.stringModelFormat;
        this.dayQuickOptions = this.buildDayQuickOptions(options.dayQuickOptions || this.defaults.dayQuickOptions);
    }
    /**
     * Converts an array of quick day selection options into Datepicker Day instances
     *
     * @param {?} options
     * @return {?}
     */
    IcDatepickerOptions.prototype.buildDayQuickOptions = function (options) {
        var _this = this;
        options.map(function (option) {
            option.isDisabled = _this.disableDayFn(option.date) ||
                (_this.disableWeekends && [6, 7].indexOf(option.date.isoWeekday()) > -1);
            option.datepickerDay = _this.icDatepickerService.buildDatepickerDay(option.date, _this, option.date);
        });
        return options;
    };
    return IcDatepickerOptions;
}());

var IcDatepickerService = (function () {
    function IcDatepickerService() {
    }
    /**
     * Builds a single Datepicker day instance based on the provided moment object
     *
     * @param {?} day
     * @param {?} options
     * @param {?=} selectedDayMoment
     * @return {?}
     */
    IcDatepickerService.prototype.buildDatepickerDay = function (day, options, selectedDayMoment) {
        if (selectedDayMoment === void 0) { selectedDayMoment = null; }
        var /** @type {?} */ isToday = day.isSame(moment(), 'day');
        var /** @type {?} */ isWeekend = ([6, 7].indexOf(day.isoWeekday()) > -1);
        var /** @type {?} */ isDisabled = options.disableDayFn(day);
        var /** @type {?} */ isSelected = (!!selectedDayMoment && day.isSame(selectedDayMoment, 'day'));
        var /** @type {?} */ classes = [];
        if (!isDisabled && options.minDate) {
            isDisabled = day.isBefore(options.minDate);
        }
        if (!isDisabled && options.maxDate) {
            isDisabled = day.isAfter(options.maxDate);
        }
        options.customDayClasses.forEach(function (customDayClass) {
            var /** @type {?} */ applyClass = customDayClass.callback(day);
            if (applyClass) {
                classes = classes.concat(customDayClass.classes);
            }
        });
        return {
            classes: classes,
            formattedDate: day.format(options.displayFormat),
            isDisabled: isDisabled,
            isSelected: isSelected,
            isToday: isToday,
            isWeekend: isWeekend,
            moment: day.clone()
        };
    };
    /**
     * Returns an array of Day objects representing the month of the provided Moment instance
     *
     * @param {?} month
     * @param {?} options
     * @param {?=} selectedDayMoment
     * @return {?}
     */
    IcDatepickerService.prototype.buildCalendarMonth = function (month, options, selectedDayMoment) {
        if (selectedDayMoment === void 0) { selectedDayMoment = null; }
        var /** @type {?} */ period = month.clone().startOf('month');
        var /** @type {?} */ periodDays = [];
        var /** @type {?} */ periodEnd = period.clone().endOf('month');
        var /** @type {?} */ dayNumber = period.isoWeekday();
        var /** @type {?} */ endDays;
        periodDays = periodDays.concat(this.buildPlaceholderDays(dayNumber - 1));
        while (period.isSameOrBefore(periodEnd)) {
            periodDays.push(this.buildDatepickerDay(period, options, selectedDayMoment));
            period.add(1, 'day');
        }
        endDays = 7 - period.subtract(1, 'day').isoWeekday();
        /*
         * If the showEmptyRow config option is true, and If the number of rendered weeks is 5, pad the datepicker with
         * an extra week to maintain a consistent component height. This is more important when the datepicker is
         * positioned top, to ensure that the month toggle buttons do not move during use.
         */
        if (options.showEmptyRow) {
            var /** @type {?} */ numRows = Math.ceil(periodDays.length / 7);
            if (numRows < 6) {
                endDays += (6 - numRows) * 7;
            }
        }
        periodDays = periodDays.concat(this.buildPlaceholderDays(endDays));
        return periodDays;
    };
    /**
     * Builds the day label headers for the datepicker columns
     *
     * @return {?}
     */
    IcDatepickerService.prototype.buildDayLabels = function () {
        var /** @type {?} */ labels = [];
        var /** @type {?} */ momentObj = moment().startOf('isoWeek');
        for (var /** @type {?} */ i = 0; i < 7; i++) {
            labels.push(momentObj.format('dd'));
            momentObj.add(1, 'day');
        }
        return labels;
    };
    /**
     * Returns a boolean representing whether the provided date is valid
     *
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    IcDatepickerService.prototype.dateIsValid = function (date, options) {
        var /** @type {?} */ isValid = date.isValid();
        if (isValid && options.minDate) {
            isValid = date.isSameOrAfter(options.minDate, 'day');
        }
        if (isValid && options.maxDate) {
            isValid = date.isSameOrBefore(options.maxDate, 'day');
        }
        return isValid;
    };
    /**
     * Build the provided number of placeholder days
     *
     * @param {?} quantity
     * @return {?}
     */
    IcDatepickerService.prototype.buildPlaceholderDays = function (quantity) {
        var /** @type {?} */ placeholderDays = [];
        for (var /** @type {?} */ i = 0; i < quantity; i++) {
            placeholderDays.push({
                isPlaceholder: true,
                moment: moment()
            });
        }
        return placeholderDays;
    };
    return IcDatepickerService;
}());
IcDatepickerService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
IcDatepickerService.ctorParameters = function () { return []; };

var IcDatepickerComponent = (function () {
    /**
     * IcDatepickerComponent Constructor
     *
     * @param {?} icDatepickerService
     * @param {?} renderer
     * @param {?} element
     */
    function IcDatepickerComponent(icDatepickerService, renderer, element) {
        var _this = this;
        this.icDatepickerService = icDatepickerService;
        this.renderer = renderer;
        this.element = element;
        this.options = {};
        this.dateChange = new core.EventEmitter();
        this.monthChange = new core.EventEmitter();
        this.opened = new core.EventEmitter();
        this.closed = new core.EventEmitter();
        this.initialised = false;
        this.isDisabled = false;
        // Context variables provided to custom input templates
        this.templateContext = {
            getInputValue: function () {
                return _this.getInputValue();
            }
        };
        this.propagateTouch = function () { };
        this.propagateChange = function () { };
    }
    /**
     * On Component init
     * @return {?}
     */
    IcDatepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mergedOptions = new IcDatepickerOptions(this.options, this.icDatepickerService);
        // @todo: calculate whether the selected month should display based on min/max dates. Set the initial view appropriately
        this.selectedDay = null;
        this.setCurrentPeriod(moment());
        this.datepickerIsOpen = false;
        this.dayLabels = this.icDatepickerService.buildDayLabels();
        this.yearSelectMode = this.mergedOptions.defaultToYearSelect;
        this.yearOptions = this.buildYearOptions();
        this.toggleMonthToggles(this.currentPeriod);
        this.documentClickEvent = this.renderer.listenGlobal('document', 'click', function (event) {
            event.stopPropagation();
            var /** @type {?} */ closeDatepicker = true;
            var /** @type {?} */ isTarget = _this.element.nativeElement === event.target;
            var /** @type {?} */ containsTarget = _this.element.nativeElement.contains(event.target);
            if (!event.target || isTarget || containsTarget) {
                closeDatepicker = false;
            }
            if (closeDatepicker) {
                _this.closeDatepicker();
            }
        });
        this.initialised = true;
    };
    /**
     * On \@Input() changes
     *
     * @param {?} changes
     * @return {?}
     */
    IcDatepickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialised) {
            this.mergedOptions = new IcDatepickerOptions(changes['options'].currentValue, this.icDatepickerService);
            this.setCurrentPeriod(this.currentPeriod);
            if (this.selectedDay) {
                this.selectedDay = this.icDatepickerService.buildDatepickerDay(this.selectedDay.moment, this.mergedOptions, this.selectedDay.moment);
                this.emitModelChange(this.selectedDay);
            }
            this.toggleMonthToggles(this.currentPeriod);
        }
    };
    /**
     * On Component destroy
     * @return {?}
     */
    IcDatepickerComponent.prototype.ngOnDestroy = function () {
        // Remove the body click event to prevent memory leaks
        if (this.documentClickEvent) {
            this.documentClickEvent();
        }
    };
    /**
     * Keyboard events
     *
     * @param {?} event
     * @return {?}
     */
    IcDatepickerComponent.prototype.onKeyboardInput = function (event) {
        var /** @type {?} */ month;
        // Only allow keyboard navigation if the datepicker popup is open
        if (!this.datepickerIsOpen) {
            return;
        }
        switch (event.keyCode) {
            // Esc
            case 27:
                this.closeDatepicker();
                break;
            // Left
            case 37:
                month = this.currentPeriod.clone().subtract(1, 'month');
                if (this.monthIsValid(month)) {
                    this.showMonth('previous');
                }
                break;
            // Right
            case 39:
                month = this.currentPeriod.clone().add(1, 'month');
                if (this.monthIsValid(month)) {
                    this.showMonth('next');
                }
                break;
        }
    };
    /**
     * Update the selected day when the model value is changed externally
     *
     * @param {?} value
     * @return {?}
     */
    IcDatepickerComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (!value) {
            this.selectedDay = null;
            return;
        }
        if (value !== this.selectedDay) {
            if ('string' === typeof value) {
                value = moment(value, this.mergedOptions.stringModelFormat);
            }
            if (value.isValid()) {
                var /** @type {?} */ selectedMoment = this.selectedDay ? this.selectedDay.moment : null;
                value = this.icDatepickerService.buildDatepickerDay(value, this.mergedOptions, selectedMoment);
            }
            else {
                console.warn("Invalid model value " + value + " provided to the IcDatepickerComponent");
                return false;
            }
            var /** @type {?} */ isValid = true;
            if (this.mergedOptions.minDate && value.moment.isBefore(this.mergedOptions.minDate)) {
                isValid = false;
            }
            if (isValid) {
                if (this.mergedOptions.maxDate && value.moment.isAfter(this.mergedOptions.maxDate)) {
                    isValid = false;
                }
            }
            if (!isValid) {
                console.warn('Initial date falls beyond the configured minimum/maximum date');
                if (this.mergedOptions.clearInvalidDates) {
                    this.selectedDay = null;
                    setTimeout(function () {
                        _this.emitModelChange(null);
                    });
                }
                return false;
            }
            this.selectedDay = value;
            this.setCurrentPeriod(value.moment);
            this.toggleMonthToggles(value.moment);
            if (!isValid) {
                console.warn('Date falls beyond the configured minimum/maximum date');
                return false;
            }
        }
    };
    /**
     * Register an On Change callback
     *
     * @param {?} fn
     * @return {?}
     */
    IcDatepickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Register an On Touch callback
     *
     * @param {?} fn
     * @return {?}
     */
    IcDatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    /**
     * Toggle the disabled state of the component
     *
     * @param {?} isDisabled
     * @return {?}
     */
    IcDatepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * Returns the value for display in the input field
     *
     * @return {?}
     */
    IcDatepickerComponent.prototype.getInputValue = function () {
        var /** @type {?} */ value = '';
        if (this.selectedDay && this.selectedDay.formattedDate) {
            value = this.selectedDay.formattedDate;
        }
        return value;
    };
    /**
     * Toggles the open state of the datepicker
     * @return {?}
     */
    IcDatepickerComponent.prototype.toggleDatepicker = function () {
        this.datepickerIsOpen = !this.datepickerIsOpen;
        var /** @type {?} */ event = this.datepickerIsOpen ? this.opened : this.closed;
        event.emit();
    };
    /**
     * Closes the Datepicker
     * @return {?}
     */
    IcDatepickerComponent.prototype.closeDatepicker = function () {
        this.datepickerIsOpen = false;
        this.closed.emit();
    };
    /**
     * Toggles the displayed month
     *
     * @param {?} direction
     * @return {?}
     */
    IcDatepickerComponent.prototype.showMonth = function (direction) {
        var /** @type {?} */ originalValue = this.currentPeriod.clone();
        var /** @type {?} */ updatedPeriod;
        if ('next' === direction) {
            updatedPeriod = this.currentPeriod.clone().add(1, 'month');
        }
        else {
            updatedPeriod = this.currentPeriod.clone().subtract(1, 'month');
        }
        this.setCurrentPeriod(updatedPeriod);
        this.toggleMonthToggles(updatedPeriod);
        this.monthChange.emit({
            previous: originalValue.startOf('month'),
            value: updatedPeriod.clone().startOf('month')
        });
    };
    /**
     *
     * @param {?} direction
     * @return {?}
     */
    IcDatepickerComponent.prototype.showYears = function (direction) {
        var /** @type {?} */ currentLastYear;
        if ('next' === direction) {
            currentLastYear = this.yearOptions[this.yearOptions.length - 1].moment.add(1, 'year');
        }
        else {
            currentLastYear = this.yearOptions[0].moment.subtract(25, 'years');
        }
        this.yearOptions = this.buildYearOptions(currentLastYear);
    };
    /**
     * Shows the Year selection panel
     * @return {?}
     */
    IcDatepickerComponent.prototype.showYearSelectMode = function () {
        this.yearOptions = this.buildYearOptions();
        this.yearSelectMode = true;
    };
    /**
     * Hides the Year selection panel
     * @return {?}
     */
    IcDatepickerComponent.prototype.hideYearSelectMode = function () {
        this.yearSelectMode = false;
    };
    /**
     * Sets the internally tracked selected day to equal the provided day
     *
     * @param {?} day
     * @param {?=} $event
     * @return {?}
     */
    IcDatepickerComponent.prototype.setSelectedDay = function (day, $event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        if (this.isDisabled || day.isPlaceholder || day.isDisabled) {
            return false;
        }
        if (this.selectedDay && this.selectedDay.moment && day.moment && day.moment.isSame(this.selectedDay.moment)) {
            return false;
        }
        if (!this.icDatepickerService.dateIsValid(day.moment, this.mergedOptions)) {
            return false;
        }
        this.selectedDay = day;
        if (day.moment) {
            this.setCurrentPeriod(day.moment);
        }
        if (this.mergedOptions.closeOnSelect) {
            this.closeDatepicker();
        }
        this.emitModelChange(day);
    };
    /**
     *
     * @param {?} year
     * @return {?}
     */
    IcDatepickerComponent.prototype.setSelectedYear = function (year) {
        var _this = this;
        var /** @type {?} */ newDate = this.currentPeriod.format('DD/MM') + '/' + year.moment.format('YYYY');
        var /** @type {?} */ newDateMoment = moment(newDate, 'DD/MM/YYYY');
        if (moment.isMoment(this.mergedOptions.minDate) && newDateMoment.isBefore(this.mergedOptions.minDate)) {
            newDateMoment = this.mergedOptions.minDate.clone();
        }
        else if (moment.isMoment(this.mergedOptions.maxDate) && newDateMoment.isAfter(this.mergedOptions.maxDate)) {
            newDateMoment = this.mergedOptions.maxDate.clone();
        }
        this.setCurrentPeriod(newDateMoment);
        this.hideYearSelectMode();
        /*
         Timeout is required to prevent the datepicker from closing when clicking a year due to
         the year element from no longer existing at the point when the element.contains() check
         is evaluated.
         */
        setTimeout(function () {
            _this.yearOptions = _this.buildYearOptions();
        });
    };
    /**
     * Enables or disables the next/previous month toggles based on any provided min or max dates
     *
     * @param {?} updatedPeriod
     * @return {?}
     */
    IcDatepickerComponent.prototype.toggleMonthToggles = function (updatedPeriod) {
        this.previousMonthToggleActive = this.monthIsValid(updatedPeriod.clone().subtract(1, 'month'));
        this.nextMonthToggleActive = this.monthIsValid(updatedPeriod.clone().add(1, 'month'));
    };
    /**
     * Returns whether the provided month is valid based on optionally provided min/max dates
     *
     * @param {?} month
     * @return {?}
     */
    IcDatepickerComponent.prototype.monthIsValid = function (month) {
        var /** @type {?} */ valid = true;
        if (moment.isMoment(this.mergedOptions.minDate)) {
            valid = month.clone()
                .endOf('month')
                .isSameOrAfter(this.mergedOptions
                .minDate
                .clone()
                .startOf('month'));
        }
        if (valid && moment.isMoment(this.mergedOptions.maxDate)) {
            valid = month.clone()
                .startOf('month')
                .isSameOrBefore(this.mergedOptions
                .maxDate
                .clone()
                .startOf('month'));
        }
        return valid;
    };
    /**
     * Sets the currently rendered month period and generates the Day collection within that period
     *
     * @param {?} momentInstance
     * @return {?}
     */
    IcDatepickerComponent.prototype.setCurrentPeriod = function (momentInstance) {
        var /** @type {?} */ selectedDay = null;
        if (this.selectedDay && this.selectedDay.moment) {
            selectedDay = this.selectedDay.moment;
        }
        this.currentPeriod = momentInstance;
        this.periodDays = this.icDatepickerService.buildCalendarMonth(this.currentPeriod.clone(), this.mergedOptions, selectedDay);
        this.toggleMonthToggles(this.currentPeriod);
    };
    /**
     * Builds the list of Year options for the Year select panel
     *
     * @param {?=} year
     * @return {?}
     */
    IcDatepickerComponent.prototype.buildYearOptions = function (year) {
        if (year === void 0) { year = this.currentPeriod.clone().subtract(12, 'years'); }
        var /** @type {?} */ years = [];
        var /** @type {?} */ end = year.clone().add(25, 'years');
        while (year.isBefore(end)) {
            var /** @type {?} */ isDisabled = false;
            var /** @type {?} */ minDate = this.mergedOptions.minDate;
            var /** @type {?} */ maxDate = this.mergedOptions.maxDate;
            if ((minDate && year.isBefore(minDate, 'year')) ||
                (maxDate && year.isAfter(maxDate, 'year'))) {
                isDisabled = true;
            }
            years.push({
                formatted: year.format('YYYY'),
                isDisabled: isDisabled,
                isSelected: year.isSame(this.currentPeriod, 'year'),
                isThisYear: year.isSame(moment(), 'year'),
                moment: year.clone()
            });
            year.add(1, 'year');
        }
        return years;
    };
    /**
     * Emits a model change
     *
     * @param {?} day
     * @return {?}
     */
    IcDatepickerComponent.prototype.emitModelChange = function (day) {
        var /** @type {?} */ originalValue;
        var /** @type {?} */ updatedValue = day;
        switch (this.mergedOptions.modelType) {
            case 'moment':
                originalValue = this.selectedDay ? this.selectedDay.moment : null;
                if (day) {
                    updatedValue = day.moment;
                }
                break;
            case 'IcDatepickerDay':
                originalValue = this.selectedDay;
                if (day) {
                    updatedValue = day;
                }
                break;
            case 'date':
                originalValue = this.selectedDay ? this.selectedDay.moment.toDate() : null;
                if (day) {
                    updatedValue = day.moment.toDate();
                }
                break;
            case 'string':
                originalValue = this.selectedDay ? this.selectedDay.moment.format(this.mergedOptions.stringModelFormat) : null;
                if (day) {
                    updatedValue = day.moment.format(this.mergedOptions.stringModelFormat);
                }
                break;
        }
        // Inform change listeners of the change
        this.propagateChange(updatedValue);
        this.dateChange.emit({
            previous: originalValue,
            value: updatedValue
        });
    };
    return IcDatepickerComponent;
}());
IcDatepickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ic-datepicker',
                template: "<div [class.ic-open]=\"datepickerIsOpen\" class=\"ic-datepicker-container\"> <div (click)=\"closeDatepicker()\" class=\"ic-datepicker-underlay\">&nbsp;</div> <!-- Datepicker toggle --> <div (click)=\"toggleDatepicker()\"> <ng-container *ngTemplateOutlet=\"inputTemplate ? inputTemplate : defaultInput; context: templateContext\" ></ng-container> </div> <!-- Datepicker popup --> <div [style.display]=\"datepickerIsOpen ? 'block' : 'none'\" [ngClass]=\"mergedOptions.position\" class=\"ic-datepicker\"> <div [style.display]=\"yearSelectMode ? 'none' : 'flex'\" class=\"ic-datepicker-header-bar\"> <button (click)=\"showMonth('previous')\" [style.visibility]=\"previousMonthToggleActive ? 'visible' : 'hidden'\" type=\"button\" class=\"cell action previous-month\" > <i [ngClass]=\"mergedOptions.icons.previousMonth.classes\"> {{ mergedOptions.icons.previousMonth.content }} </i> </button> <h3 (click)=\"showYearSelectMode()\" class=\"header-title\"> {{ currentPeriod.format('MMMM YYYY') }} </h3> <button (click)=\"showMonth('next')\" [style.visibility]=\"nextMonthToggleActive ? 'visible' : 'hidden'\" type=\"button\" class=\"cell action next-month\" > <i [ngClass]=\"mergedOptions.icons.nextMonth.classes\"> {{ mergedOptions.icons.nextMonth.content }} </i> </button> </div> <div [style.display]=\"yearSelectMode ? 'flex' : 'none'\" class=\"ic-datepicker-header-bar\"> <h3 class=\"header-title year-title\"> {{ yearOptions[0].formatted }} - {{ yearOptions[yearOptions.length - 1].formatted }} </h3> <button (click)=\"hideYearSelectMode()\" type=\"button\" class=\"cell action close-year-select\"> &times; </button> </div> <div [style.display]=\"yearSelectMode ? 'none' : 'block'\"> <div class=\"ic-datepicker-day-labels\"> <span *ngFor=\"let dayLabel of dayLabels\" class=\"cell day-label\"> {{ dayLabel }} </span> </div> <div class=\"ic-datepicker-dates\"> <button *ngFor=\"let day of periodDays\" (click)=\"setSelectedDay(day, $event)\" [ngClass]=\"day.classes\" [class.today]=\"day.isToday\" [class.selected]=\"day.isSelected\" [class.weekend]=\"day.isWeekend\" [class.placeholder]=\"day.isPlaceholder\" [disabled]=\"isDisabled || day.isPlaceholder || (day.isWeekend && mergedOptions.disableWeekends) || day.isDisabled\" type=\"button\" class=\"cell date\" > <span *ngIf=\"day.isPlaceholder\">&nbsp;</span> <span *ngIf=\"!day.isPlaceholder\"> {{ day.moment.format('D') }} </span> </button> </div> <div *ngIf=\"mergedOptions.showDayQuickOptions\" class=\"quick-options day-quick-options\"> <button *ngFor=\"let option of mergedOptions.dayQuickOptions\" [hidden]=\"option.isDisabled\" (click)=\"setSelectedDay(option.datepickerDay, $event)\" [ngClass]=\"{ selected: (selectedDay && option.date.isSame(selectedDay.moment, 'day')) }\" [disabled]=\"isDisabled\" type=\"button\" class=\"cell quick-option\" > {{ option.label }} </button> </div> </div> <div [style.display]=\"yearSelectMode ? 'block' : 'none'\" class=\"year-list\"> <div class=\"ic-datepicker-dates\"> <button (click)=\"showYears('previous')\" type=\"button\" class=\"cell toggle-years previous\"> <span> <i [ngClass]=\"mergedOptions.icons.previousYears.classes\"> {{ mergedOptions.icons.previousYears.content }} </i> </span> </button> <button *ngFor=\"let year of yearOptions\" (click)=\"setSelectedYear(year)\" [ngClass]=\"{ 'this-year': year.isThisYear, selected: year.isSelected }\" [disabled]=\"year.isDisabled\" type=\"button\" class=\"cell date year\" > {{ year.formatted }} </button> <button (click)=\"showYears('next')\" type=\"button\" class=\"cell toggle-years next\"> <span> <i [ngClass]=\"mergedOptions.icons.nextYears.classes\"> {{ mergedOptions.icons.nextYears.content }} </i> </span> </button> </div> </div> </div> <!-- Default --> <ng-template #defaultInput> <input [value]=\"getInputValue()\" [ngClass]=\"options.inputClasses\" [attr.id]=\"mergedOptions.attrs.id\" [attr.name]=\"mergedOptions.attrs.name\" [attr.placeholder]=\"mergedOptions.attrs.placeholder\" [attr.tabindex]=\"mergedOptions.attrs.tabindex\" [attr.readonly]=\"mergedOptions.attrs.readonly\" class=\"ic-datepicker-input\" type=\"text\" > </ng-template> </div> ",
                styles: [".ic-datepicker-container { position: relative; } .ic-datepicker-underlay { display: none; } @media (max-width: 480px) { .ic-open .ic-datepicker-underlay { display: block; position: fixed; top: 0; left: 0; height: 100vh; width: 100vh; background: rgba(0, 0, 0, 0.3); } } .ic-datepicker { position: absolute; width: 270px; z-index: 1000; -webkit-box-shadow: 0 0 10px 2px rgba(50, 50, 50, 0.3); -moz-box-shadow: 0 0 10px 2px rgba(50, 50, 50, 0.3); box-shadow: 0 0 10px 2px rgba(50, 50, 50, 0.3); } @media (max-width: 480px) { .ic-datepicker { position: fixed; bottom: 0; left: 0; transform-origin: 0 100%; width: 100%; width: 100vw; } } @media only screen and (min-width: 481px) { .ic-datepicker.top { transform-origin: 0 100%; bottom: 48px; } .ic-datepicker.bottom { top: 48px; } } .ic-datepicker .ic-datepicker-input, .ic-datepicker .ic-datepicker-input[readonly] { background-color: #fff; } .ic-datepicker .cell { user-select: none; width: calc(100% / 7); font-size: 14px; height: 38px; display: inline-block; text-align: center; font-weight: 300; border-width: 1px; border-style: solid; border-radius: 0; outline: none; box-sizing: border-box; } @media (max-width: 480px) { .ic-datepicker .cell { height: 44px; height: calc(100vw / 7); } } .ic-datepicker .cell[disabled]:hover { cursor: not-allowed; } .ic-datepicker .cell.year { width: calc(100% / 5); } .ic-datepicker .ic-datepicker-header-bar { display: flex; align-items: center; } .ic-datepicker .ic-datepicker-header-bar .action { background: transparent; border: none; outline: none; padding: 0; display: flex; justify-content: center; align-items: center; } .ic-datepicker .ic-datepicker-header-bar .header-title { text-align: center; text-transform: uppercase; margin: 0; padding-top: 4px; font-size: 15px; font-weight: 400; line-height: 34px; width: calc((100% / 7) * 5); -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .ic-datepicker .ic-datepicker-header-bar .header-title.year-title { margin-left: calc(100% / 7); } .ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar .header-title:not(.year-title):hover, .ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar .cell.action:hover { cursor: pointer; } .ic-datepicker .ic-datepicker-year-select-options .close-year-select { display: block; } .ic-datepicker .ic-datepicker-day-labels .day-label { line-height: 38px; font-size: 12px; font-weight: 300; text-transform: uppercase; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } ic-datepicker .ic-datepicker-dates .date { padding-top: 0; padding-bottom: 0; } .ic-datepicker .ic-datepicker-dates .date span { display: flex; align-content: center; justify-content: center; line-height: 34px; } .ic-datepicker .quick-options { text-align: center; } .ic-datepicker .quick-options .quick-option { width: calc(100% / 2); } .ic-datepicker .year-list .toggle-years { width: 100%; font-weight: 300; outline: none; display: flex; justify-content: center; align-items: center; } .ic-datepicker .year-list .toggle-years:hover { cursor: pointer; } .ic-datepicker .chevron::before { border-style: solid; border-width: 2px 2px 0 0; content: ''; display: inline-block; height: 10px; position: relative; top: 6px; transform: rotate(-45deg); vertical-align: top; width: 10px; } .ic-datepicker .chevron.chevron-up::before { position: relative; top: 8px; } .ic-datepicker .chevron.chevron-right::before { left: -2px; transform: rotate(45deg); } .ic-datepicker .chevron.chevron-down::before { position: relative; top: 3px; transform: rotate(135deg); } .ic-datepicker .chevron.chevron-left::before { left: 3px; transform: rotate(-135deg); } "],
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return IcDatepickerComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
IcDatepickerComponent.ctorParameters = function () { return [
    { type: IcDatepickerService, decorators: [{ type: core.Inject, args: [IcDatepickerService,] },] },
    { type: core.Renderer, decorators: [{ type: core.Inject, args: [core.Renderer,] },] },
    { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] },] },
]; };
IcDatepickerComponent.propDecorators = {
    'inputTemplate': [{ type: core.Input },],
    'options': [{ type: core.Input },],
    'dateChange': [{ type: core.Output },],
    'monthChange': [{ type: core.Output },],
    'opened': [{ type: core.Output },],
    'closed': [{ type: core.Output },],
    'onKeyboardInput': [{ type: core.HostListener, args: ['window:keydown', ['$event'],] },],
};

var IcDatepickerModule = (function () {
    function IcDatepickerModule() {
    }
    /**
     * @return {?}
     */
    IcDatepickerModule.forRoot = function () {
        return {
            ngModule: IcDatepickerModule,
            providers: [IcDatepickerService]
        };
    };
    return IcDatepickerModule;
}());
IcDatepickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    IcDatepickerComponent,
                ],
                exports: [
                    IcDatepickerComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
IcDatepickerModule.ctorParameters = function () { return []; };

exports.IcDatepickerModule = IcDatepickerModule;
exports.IcDatepickerComponent = IcDatepickerComponent;
exports.IcDatepickerService = IcDatepickerService;
exports.defaultDayQuickOptions = defaultDayQuickOptions;
exports.IcDatepickerOptions = IcDatepickerOptions;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/ic-datepicker/themes/theme-default.css":
/*!*************************************************************!*\
  !*** ./node_modules/ic-datepicker/themes/theme-default.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ic-datepicker-container > input[readonly] {\n  background: #fff; }\n\n.ic-datepicker-container .ic-datepicker {\n  background: #fff; }\n\n.ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar {\n    background: #546A76;\n    color: #fff; }\n\n.ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar .header-title:not(.year-title):hover, .ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar .cell.action:hover {\n      background: #3f4f58; }\n\n.ic-datepicker-container .ic-datepicker .ic-datepicker-header-bar .action {\n      color: #fff; }\n\n.ic-datepicker-container .ic-datepicker .cell {\n    background: #fff;\n    color: #484848;\n    border-color: #f0f0f0; }\n\n.ic-datepicker-container .ic-datepicker .cell.selected {\n      background: #546A76;\n      color: #fff; }\n\n.ic-datepicker-container .ic-datepicker .cell:not([disabled]):not(.selected):not(.day-label):hover {\n      background: #3f4f58;\n      color: #fff;\n      cursor: pointer; }\n\n.ic-datepicker-container .ic-datepicker .date.placeholder {\n    background: #fafafa; }\n\n.ic-datepicker-container .ic-datepicker .date[disabled]:not(.placeholder) {\n    background: #f3f3f3;\n    color: #909090; }\n\n.ic-datepicker-container .ic-datepicker .date.today:not(.selected), .ic-datepicker-container .ic-datepicker .date.this-year:not(.selected) {\n    color: #546A76; }\n\n.ic-datepicker-container .ic-datepicker .date.today:not(.selected):not([disabled]), .ic-datepicker-container .ic-datepicker .date.this-year:not(.selected):not([disabled]) {\n      background: #fff; }\n\n.ic-datepicker-container .ic-datepicker .year-list .toggle-years {\n    color: #484848; }\n\n.ic-datepicker-container .ic-datepicker .year-list .toggle-years:hover {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9pYy1kYXRlcGlja2VyL3RoZW1lcy90aGVtZS1kZWZhdWx0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGdCQUFnQixFQUFFOztBQUNsQjtJQUNFLG1CQUFtQjtJQUNuQixXQUFXLEVBQUU7O0FBQ2I7TUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7TUFDRSxXQUFXLEVBQUU7O0FBQ2pCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUIsRUFBRTs7QUFDdkI7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFOztBQUNmO01BQ0UsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxlQUFlLEVBQUU7O0FBQ3JCO0lBQ0UsbUJBQW1CLEVBQUU7O0FBQ3ZCO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWMsRUFBRTs7QUFDbEI7SUFDRSxjQUFjLEVBQUU7O0FBQ2hCO01BQ0UsZ0JBQWdCLEVBQUU7O0FBQ3RCO0lBQ0UsY0FBYyxFQUFFOztBQUNoQjtNQUNFLFlBQVksRUFBRSIsImZpbGUiOiJub2RlX21vZHVsZXMvaWMtZGF0ZXBpY2tlci90aGVtZXMvdGhlbWUtZGVmYXVsdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgPiBpbnB1dFtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5pYy1kYXRlcGlja2VyLWhlYWRlci1iYXIge1xuICAgIGJhY2tncm91bmQ6ICM1NDZBNzY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgICAuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgLmljLWRhdGVwaWNrZXIgLmljLWRhdGVwaWNrZXItaGVhZGVyLWJhciAuaGVhZGVyLXRpdGxlOm5vdCgueWVhci10aXRsZSk6aG92ZXIsIC5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciAuaWMtZGF0ZXBpY2tlci1oZWFkZXItYmFyIC5jZWxsLmFjdGlvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM2Y0ZjU4OyB9XG4gICAgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5pYy1kYXRlcGlja2VyLWhlYWRlci1iYXIgLmFjdGlvbiB7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgLmljLWRhdGVwaWNrZXIgLmNlbGwge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjBmMGYwOyB9XG4gICAgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5jZWxsLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1NDZBNzY7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciAuY2VsbDpub3QoW2Rpc2FibGVkXSk6bm90KC5zZWxlY3RlZCk6bm90KC5kYXktbGFiZWwpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzZjRmNTg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgLmljLWRhdGVwaWNrZXIgLmRhdGUucGxhY2Vob2xkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7IH1cbiAgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5kYXRlW2Rpc2FibGVkXTpub3QoLnBsYWNlaG9sZGVyKSB7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBjb2xvcjogIzkwOTA5MDsgfVxuICAuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgLmljLWRhdGVwaWNrZXIgLmRhdGUudG9kYXk6bm90KC5zZWxlY3RlZCksIC5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciAuZGF0ZS50aGlzLXllYXI6bm90KC5zZWxlY3RlZCkge1xuICAgIGNvbG9yOiAjNTQ2QTc2OyB9XG4gICAgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5kYXRlLnRvZGF5Om5vdCguc2VsZWN0ZWQpOm5vdChbZGlzYWJsZWRdKSwgLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyIC5kYXRlLnRoaXMteWVhcjpub3QoLnNlbGVjdGVkKTpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAuaWMtZGF0ZXBpY2tlci1jb250YWluZXIgLmljLWRhdGVwaWNrZXIgLnllYXItbGlzdCAudG9nZ2xlLXllYXJzIHtcbiAgICBjb2xvcjogIzQ4NDg0ODsgfVxuICAgIC5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciAueWVhci1saXN0IC50b2dnbGUteWVhcnM6aG92ZXIge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdvDatepickerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvDatepickerRoutingModule", function() { return AdvDatepickerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adv_datepicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-datepicker.component */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.ts");




var routes = [
    {
        path: '',
        component: _adv_datepicker_component__WEBPACK_IMPORTED_MODULE_3__["AdvDatepickerComponent"]
    }
];
var AdvDatepickerRoutingModule = /** @class */ (function () {
    function AdvDatepickerRoutingModule() {
    }
    AdvDatepickerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvDatepickerRoutingModule);
    return AdvDatepickerRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Datepicker\" [options]=\"false\">\n      <div *ngIf=\"exampleDatepickerConfig\">\n        <div class=\"align-items-center full-height\">\n          <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <form [formGroup]=\"exampleDatepickerForm\" (ngSubmit)=\"onSubmit(exampleDatepickerForm)\" [ngSwitch]=\"exampleDatepickerConfig.inputTemplate\">\n                <ic-datepicker *ngSwitchCase=\"'bootstrap'\" formControlName=\"datepicker\" [inputTemplate]=\"bootstrapInputTemplate\" [options]=\"exampleDatepickerConfig\"></ic-datepicker>\n                <ic-datepicker *ngSwitchCase=\"'html'\" formControlName=\"datepicker\" [inputTemplate]=\"htmlInputTemplate\" [options]=\"exampleDatepickerConfig\"></ic-datepicker>\n                <ic-datepicker *ngSwitchDefault formControlName=\"datepicker\" [options]=\"exampleDatepickerConfig\"></ic-datepicker>\n                <button (click)=\"clearDatepicker()\" type=\"button\" class=\"btn btn-block btn-secondary mt-2\">Clear</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"config-form-wrapper\">\n        <app-datepicker-config-form [exampleDatepickerConfig]=\"exampleDatepickerConfig\" (onConfigChanged)=\"onConfigChanged($event)\"></app-datepicker-config-form>\n      </div>\n\n      <div class=\"row\">\n        <!-- Bootstrap  -->\n        <ng-template #bootstrapInputTemplate let-inputValue=\"getInputValue()\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input [value]=\"inputValue\" id=\"my-datepicker\" type=\"text\" class=\"form-control\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n\n        <!-- Non-Input -->\n        <ng-template #htmlInputTemplate let-inputValue=\"getInputValue()\">\n          <p class=\"alert alert-success text-center\">\n            <span *ngIf=\"inputValue\">\n              You have selected: {{ inputValue }}\n            </span>\n            <span *ngIf=\"!inputValue\">Click to select a date</span>\n          </p>\n        </ng-template>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ic-datepicker-container .ic-datepicker.bottom {\n  top: 40px !important; }\n\n.ic-datepicker-container .ic-datepicker .cell.even {\n  background: #1dd5d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1hZHYvYWR2LWRhdGVwaWNrZXIvYWR2LWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1kYXRlcGlja2VyL2Fkdi1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljLWRhdGVwaWNrZXItY29udGFpbmVyIC5pYy1kYXRlcGlja2VyLmJvdHRvbSB7XHJcbiAgdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pYy1kYXRlcGlja2VyLWNvbnRhaW5lciAuaWMtZGF0ZXBpY2tlciAuY2VsbC5ldmVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMWRkNWQyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdvDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvDatepickerComponent", function() { return AdvDatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var AdvDatepickerComponent = /** @class */ (function () {
    function AdvDatepickerComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.iconSets = {
            svg: {
                nextMonth: { classes: ['chevron', 'chevron-right'] },
                nextYears: { classes: ['chevron', 'chevron-down'] },
                previousMonth: { classes: ['chevron', 'chevron-left'] },
                previousYears: { classes: ['chevron', 'chevron-up'] }
            },
            fontAwesome: {
                nextMonth: { classes: ['fa', 'fa-chevron-right'] },
                nextYears: { classes: ['fa', 'fa-chevron-down'] },
                previousMonth: { classes: ['fa', 'fa-chevron-left'] },
                previousYears: { classes: ['fa', 'fa-chevron-up'] }
            },
            material: {
                nextMonth: {
                    classes: ['material-icons'],
                    content: 'chevron_right'
                },
                nextYears: {
                    classes: ['material-icons'],
                    content: 'keyboard_arrow_down'
                },
                previousMonth: {
                    classes: ['material-icons'],
                    content: 'chevron_left'
                },
                previousYears: {
                    classes: ['material-icons'],
                    content: 'keyboard_arrow_up'
                }
            }
        };
    }
    AdvDatepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleDatepickerConfig = {
            attrs: {
                id: 'example-datepicker'
            },
            clearInvalidDates: true,
            closeOnSelect: true,
            customDayClasses: [],
            disableWeekends: false,
            displayFormat: 'L',
            iconSet: 'svg',
            inputClasses: [],
            inputTemplate: 'bootstrap',
            maxDate: moment__WEBPACK_IMPORTED_MODULE_3__().add(6, 'month'),
            minDate: moment__WEBPACK_IMPORTED_MODULE_3__().subtract(6, 'month'),
            modelType: 'string',
            position: 'bottom',
            showDayQuickOptions: true,
            showEmptyRow: true,
            stringModelFormat: 'YYYY-MM-DD'
        };
        this.exampleDatepickerForm = this.formBuilder.group({
            datepicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'months').format('YYYY-MM-DD'),
                disabled: false
            })
        });
        var dateChange$ = this.exampleDatepickerForm.get('datepicker').valueChanges;
        dateChange$.subscribe(function (date) {
            _this.displayDate = date;
        });
    };
    AdvDatepickerComponent.prototype.onConfigChanged = function ($event) {
        var _this = this;
        setTimeout(function () {
            var datepicker = _this.exampleDatepickerForm.get('datepicker');
            var config = _this.buildEventConfig($event.config);
            if (config.disableDatepicker) {
                datepicker.disable();
            }
            else {
                datepicker.enable();
            }
            if (config.highlightEvenDays) {
                config.customDayClasses = [{
                        classes: ['even'],
                        callback: function (momentInstance) {
                            return (parseInt(momentInstance.format('DD'), 10) % 2) === 0;
                        }
                    }];
            }
            _this.exampleDatepickerConfig = config;
        });
    };
    AdvDatepickerComponent.prototype.buildEventConfig = function (config) {
        var icons = this.iconSets.svg;
        if (this.iconSets[config.iconSet]) {
            icons = this.iconSets[config.iconSet];
        }
        config.icons = icons;
        return config;
    };
    AdvDatepickerComponent.prototype.onSubmit = function (form) {
    };
    AdvDatepickerComponent.prototype.clearDatepicker = function () {
        this.exampleDatepickerForm.patchValue({
            datepicker: null
        });
    };
    AdvDatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-datepicker',
            template: __webpack_require__(/*! ./adv-datepicker.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./adv-datepicker.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.scss"), __webpack_require__(/*! ../../../../../../node_modules/ic-datepicker/themes/theme-default.css */ "./node_modules/ic-datepicker/themes/theme-default.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdvDatepickerComponent);
    return AdvDatepickerComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvDatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvDatepickerModule", function() { return AdvDatepickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adv_datepicker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-datepicker-routing.module */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker-routing.module.ts");
/* harmony import */ var _adv_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv-datepicker.component */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/adv-datepicker.component.ts");
/* harmony import */ var ic_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ic-datepicker */ "./node_modules/ic-datepicker/ic-datepicker.umd.js");
/* harmony import */ var ic_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ic_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _datepicker_config_form_datepicker_config_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-config-form/datepicker-config-form.component */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.ts");










var AdvDatepickerModule = /** @class */ (function () {
    function AdvDatepickerModule() {
    }
    AdvDatepickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adv_datepicker_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvDatepickerRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ic_datepicker__WEBPACK_IMPORTED_MODULE_5__["IcDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"]
            ],
            declarations: [_adv_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["AdvDatepickerComponent"], _datepicker_config_form_datepicker_config_form_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerConfigFormComponent"]],
            providers: [ic_datepicker__WEBPACK_IMPORTED_MODULE_5__["IcDatepickerService"]]
        })
    ], AdvDatepickerModule);
    return AdvDatepickerModule;
}());



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"configForm\" [formGroup]=\"configForm\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label col-form-label-sm\">Input Template</label>\n        <div class=\"col-sm-9\">\n          <div class=\"radio d-inline\" *ngFor=\"let template of inputTemplateOptions\">\n            <input type=\"radio\" checked formControlName=\"inputTemplate\" [value]=\"template.value\" id=\"template-{{ template.value }}\">\n            <label for=\"template-{{ template.value }}\" class=\"cr\">{{ template.label }}</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label col-form-label-sm\">Icons</label>\n        <div class=\"col-sm-9\">\n          <div class=\"radio d-inline\" *ngFor=\"let iconSet of iconSets\">\n            <input type=\"radio\" checked formControlName=\"iconSet\" [value]=\"iconSet.value\" id=\"icons-{{ iconSet.value }}\">\n            <label for=\"icons-{{ iconSet.value }}\" class=\"cr\">{{ iconSet.label }}</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"closeOnSelect\" id=\"checkbox-1\" checked>\n          <label for=\"checkbox-1\" class=\"cr\">Close when a date is selected</label>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"disableWeekends\" id=\"checkbox-2\" checked>\n          <label for=\"checkbox-2\" class=\"cr\">Disable selection of weekend days</label>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"highlightEvenDays\" id=\"checkbox-3\" checked>\n          <label for=\"checkbox-3\" class=\"cr\">Highlight even days</label>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"disableDatepicker\" id=\"checkbox-4\" checked>\n          <label for=\"checkbox-4\" class=\"cr\">Toggle disabled</label>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"showDayQuickOptions\" id=\"checkbox-5\" checked>\n          <label for=\"checkbox-5\" class=\"cr\">Show Quick Day Options</label>\n        </div>\n      </div>\n\n      <div class=\"form-group mt-3\">\n        <div class=\"checkbox d-inline\">\n          <input type=\"checkbox\" formControlName=\"showEmptyRow\" id=\"checkbox-6\" checked>\n          <label for=\"checkbox-6\" class=\"cr\">Show Empty Row</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\">Display Format</label>\n        <div class=\"col-sm-10\">\n          <select  class=\"form-control\" formControlName=\"displayFormat\" name=\"display-format\" id=\"display-format\">\n            <option *ngFor=\"let option of displayFormatOptions\" [value]=\"option\">\n              {{ option }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\">Datepicker Position</label>\n        <div class=\"col-sm-10\">\n          <select  class=\"form-control\" formControlName=\"position\" name=\"position\" id=\"position\">\n            <option *ngFor=\"let option of positionOptions\" [value]=\"option\">\n              {{ option }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col\">\n          <label>\n            Min (Earliest) Date<br>\n          </label>\n          <ic-datepicker formControlName=\"minDate\" [options]=\"minDateOptions\"></ic-datepicker>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col\">\n          <label>\n            Max (Latest) Date<br>\n          </label>\n          <ic-datepicker formControlName=\"maxDate\" [options]=\"maxDateOptions\"></ic-datepicker>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYWR2L2Fkdi1kYXRlcGlja2VyL2RhdGVwaWNrZXItY29uZmlnLWZvcm0vZGF0ZXBpY2tlci1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DatepickerConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfigFormComponent", function() { return DatepickerConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DatepickerConfigFormComponent = /** @class */ (function () {
    function DatepickerConfigFormComponent() {
        this.onConfigChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayFormatOptions = ['L', 'LL', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];
        this.iconSets = [{
                value: 'svg',
                label: 'Default (SVG)'
            }, {
                value: 'fontAwesome',
                label: 'Font Awesome'
            }];
        this.inputTemplateOptions = [{
                value: 'bootstrap',
                label: 'Bootstrap'
            }, {
                value: 'html',
                label: 'HTML Element'
            }, {
                value: null,
                label: 'Default (Unstyled)'
            }];
    }
    DatepickerConfigFormComponent.prototype.ngOnInit = function () {
        this.minDateOptions = {
            attrs: {
                id: 'min-date',
                placeholder: 'None Set'
            },
            inputClasses: ['form-control']
        };
        this.maxDateOptions = {
            attrs: {
                id: 'max-date',
                placeholder: 'None Set'
            },
            inputClasses: ['form-control']
        };
        this.positionOptions = ['top', 'bottom'];
    };
    DatepickerConfigFormComponent.prototype.ngOnChanges = function (changes) {
        var datepickerConfig = changes['exampleDatepickerConfig'].currentValue;
        this.configForm = this.buildConfigForm(datepickerConfig);
        this.subscribeToFormChanges();
    };
    DatepickerConfigFormComponent.prototype.buildConfigForm = function (value) {
        var configForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            closeOnSelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            disableDatepicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            disableWeekends: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            displayFormat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            iconSet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            inputTemplate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            highlightEvenDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            maxDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            showDayQuickOptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            showEmptyRow: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            stringModelFormat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        configForm.patchValue(value);
        return configForm;
    };
    DatepickerConfigFormComponent.prototype.subscribeToFormChanges = function () {
        var _this = this;
        var formChanges$ = this.configForm.valueChanges;
        formChanges$.subscribe(function (formData) {
            _this.onConfigChanged.emit({
                config: formData
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatepickerConfigFormComponent.prototype, "exampleDatepickerConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatepickerConfigFormComponent.prototype, "onConfigChanged", void 0);
    DatepickerConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker-config-form',
            template: __webpack_require__(/*! ./datepicker-config-form.component.html */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.html"),
            styles: [__webpack_require__(/*! ./datepicker-config-form.component.scss */ "./src/app/demo/ui-elements/ui-adv/adv-datepicker/datepicker-config-form/datepicker-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatepickerConfigFormComponent);
    return DatepickerConfigFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=adv-datepicker-adv-datepicker-module.js.map