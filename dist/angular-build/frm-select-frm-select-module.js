(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frm-select-frm-select-module"],{

/***/ "./node_modules/angular-dual-listbox/angular-dual-listbox.es5.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-dual-listbox/angular-dual-listbox.es5.js ***!
  \***********************************************************************/
/*! exports provided: BasicList, DualListComponent, AngularDualListBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicList", function() { return BasicList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualListComponent", function() { return DualListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDualListBoxModule", function() { return AngularDualListBoxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BasicList = /** @class */ (function () {
    /**
     * @param {?} name
     */
    function BasicList(name) {
        this._name = name;
        this.last = null;
        this.picker = '';
        this.dragStart = false;
        this.dragOver = false;
        // Arrays will contain objects of { _id, _name }.
        this.pick = [];
        this.list = [];
        this.sift = [];
    }
    Object.defineProperty(BasicList.prototype, "name", {
        /**
         * @return {?}
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return BasicList;
}());
var nextId = 0;
var DualListComponent = /** @class */ (function () {
    /**
     * @param {?} differs
     */
    function DualListComponent(differs) {
        this.differs = differs;
        this.id = "dual-list-" + nextId++;
        this.key = '_id';
        this.display = '_name';
        this.height = '100px';
        this.filter = false;
        this.format = DualListComponent.DEFAULT_FORMAT;
        this.sort = false;
        this.disabled = false;
        this.destinationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sorter = function (a, b) { return (a._name < b._name) ? -1 : ((a._name > b._name) ? 1 : 0); };
        this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
        this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    DualListComponent.prototype.ngOnChanges = function (changeRecord) {
        if (changeRecord['filter']) {
            if (changeRecord['filter'].currentValue === false) {
                this.clearFilter(this.available);
                this.clearFilter(this.confirmed);
            }
        }
        if (changeRecord['sort']) {
            if (changeRecord['sort'].currentValue === true && this.compare === undefined) {
                this.compare = this.sorter;
            }
            else if (changeRecord['sort'].currentValue === false) {
                this.compare = undefined;
            }
        }
        if (changeRecord['format']) {
            this.format = changeRecord['format'].currentValue;
            if (typeof (this.format.direction) === 'undefined') {
                this.format.direction = DualListComponent.LTR;
            }
            if (typeof (this.format.add) === 'undefined') {
                this.format.add = DualListComponent.DEFAULT_FORMAT.add;
            }
            if (typeof (this.format.remove) === 'undefined') {
                this.format.remove = DualListComponent.DEFAULT_FORMAT.remove;
            }
            if (typeof (this.format.all) === 'undefined') {
                this.format.all = DualListComponent.DEFAULT_FORMAT.all;
            }
            if (typeof (this.format.none) === 'undefined') {
                this.format.none = DualListComponent.DEFAULT_FORMAT.none;
            }
            if (typeof (this.format.draggable) === 'undefined') {
                this.format.draggable = DualListComponent.DEFAULT_FORMAT.draggable;
            }
        }
        if (changeRecord['source']) {
            this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
            this.updatedSource();
            this.updatedDestination();
        }
        if (changeRecord['destination']) {
            this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
            this.updatedDestination();
            this.updatedSource();
        }
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.ngDoCheck = function () {
        if (this.source && this.buildAvailable(this.source)) {
            this.onFilter(this.available);
        }
        if (this.destination && this.buildConfirmed(this.destination)) {
            this.onFilter(this.confirmed);
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.buildAvailable = function (source) {
        var _this = this;
        var /** @type {?} */ sourceChanges = this.sourceDiffer.diff(source);
        if (sourceChanges) {
            sourceChanges.forEachRemovedItem(function (r) {
                var /** @type {?} */ idx = _this.findItemIndex(_this.available.list, r.item, _this.key);
                if (idx !== -1) {
                    _this.available.list.splice(idx, 1);
                }
            });
            sourceChanges.forEachAddedItem(function (r) {
                // Do not add duplicates even if source has duplicates.
                if (_this.findItemIndex(_this.available.list, r.item, _this.key) === -1) {
                    _this.available.list.push({ _id: _this.makeId(r.item), _name: _this.makeName(r.item) });
                }
            });
            if (this.compare !== undefined) {
                this.available.list.sort(this.compare);
            }
            this.available.sift = this.available.list;
            return true;
        }
        return false;
    };
    /**
     * @param {?} destination
     * @return {?}
     */
    DualListComponent.prototype.buildConfirmed = function (destination) {
        var _this = this;
        var /** @type {?} */ moved = false;
        var /** @type {?} */ destChanges = this.destinationDiffer.diff(destination);
        if (destChanges) {
            destChanges.forEachRemovedItem(function (r) {
                var /** @type {?} */ idx = _this.findItemIndex(_this.confirmed.list, r.item, _this.key);
                if (idx !== -1) {
                    if (!_this.isItemSelected(_this.confirmed.pick, _this.confirmed.list[idx])) {
                        _this.selectItem(_this.confirmed.pick, _this.confirmed.list[idx]);
                    }
                    _this.moveItem(_this.confirmed, _this.available, _this.confirmed.list[idx], false);
                    moved = true;
                }
            });
            destChanges.forEachAddedItem(function (r) {
                var /** @type {?} */ idx = _this.findItemIndex(_this.available.list, r.item, _this.key);
                if (idx !== -1) {
                    if (!_this.isItemSelected(_this.available.pick, _this.available.list[idx])) {
                        _this.selectItem(_this.available.pick, _this.available.list[idx]);
                    }
                    _this.moveItem(_this.available, _this.confirmed, _this.available.list[idx], false);
                    moved = true;
                }
            });
            if (this.compare !== undefined) {
                this.confirmed.list.sort(this.compare);
            }
            this.confirmed.sift = this.confirmed.list;
            if (moved) {
                this.trueUp();
            }
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.updatedSource = function () {
        this.available.list.length = 0;
        this.available.pick.length = 0;
        if (this.source !== undefined) {
            this.sourceDiffer = this.differs.find(this.source).create(null);
        }
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.updatedDestination = function () {
        if (this.destination !== undefined) {
            this.destinationDiffer = this.differs.find(this.destination).create(null);
        }
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.direction = function () {
        return this.format.direction === DualListComponent.LTR;
    };
    /**
     * @param {?=} list
     * @return {?}
     */
    DualListComponent.prototype.dragEnd = function (list) {
        if (list === void 0) { list = null; }
        if (list) {
            list.dragStart = false;
        }
        else {
            this.available.dragStart = false;
            this.confirmed.dragStart = false;
        }
        return false;
    };
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    DualListComponent.prototype.drag = function (event, item, list) {
        if (!this.isItemSelected(list.pick, item)) {
            this.selectItem(list.pick, item);
        }
        list.dragStart = true;
        // Set a custom type to be this dual-list's id.
        event.dataTransfer.setData(this.id, item['_id']);
    };
    /**
     * @param {?} event
     * @param {?} list
     * @return {?}
     */
    DualListComponent.prototype.allowDrop = function (event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            if (!list.dragStart) {
                list.dragOver = true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.dragLeave = function () {
        this.available.dragOver = false;
        this.confirmed.dragOver = false;
    };
    /**
     * @param {?} event
     * @param {?} list
     * @return {?}
     */
    DualListComponent.prototype.drop = function (event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            this.dragLeave();
            this.dragEnd();
            if (list === this.available) {
                this.moveItem(this.available, this.confirmed);
            }
            else {
                this.moveItem(this.confirmed, this.available);
            }
        }
    };
    /**
     * @return {?}
     */
    DualListComponent.prototype.trueUp = function () {
        var _this = this;
        var /** @type {?} */ changed = false;
        // Clear removed items.
        var /** @type {?} */ pos = this.destination.length;
        while ((pos -= 1) >= 0) {
            var /** @type {?} */ mv = this.confirmed.list.filter(function (conf) {
                if (typeof _this.destination[pos] === 'object') {
                    return conf._id === _this.destination[pos][_this.key];
                }
                else {
                    return conf._id === _this.destination[pos];
                }
            });
            if (mv.length === 0) {
                // Not found so remove.
                this.destination.splice(pos, 1);
                changed = true;
            }
        }
        var _loop_1 = function (i, len) {
            var /** @type {?} */ mv = this_1.destination.filter(function (d) {
                if (typeof d === 'object') {
                    return (d[_this.key] === _this.confirmed.list[i]._id);
                }
                else {
                    return (d === _this.confirmed.list[i]._id);
                }
            });
            if (mv.length === 0) {
                // Not found so add.
                mv = this_1.source.filter(function (o) {
                    if (typeof o === 'object') {
                        return (o[_this.key] === _this.confirmed.list[i]._id);
                    }
                    else {
                        return (o === _this.confirmed.list[i]._id);
                    }
                });
                if (mv.length > 0) {
                    this_1.destination.push(mv[0]);
                    changed = true;
                }
            }
        };
        var this_1 = this;
        // Push added items.
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = this.confirmed.list.length; i < len; i += 1) {
            _loop_1(/** @type {?} */ i, /** @type {?} */ len);
        }
        if (changed) {
            this.destinationChange.emit(this.destination);
        }
    };
    /**
     * @param {?} list
     * @param {?} item
     * @param {?=} key
     * @return {?}
     */
    DualListComponent.prototype.findItemIndex = function (list, item, key) {
        if (key === void 0) { key = '_id'; }
        var /** @type {?} */ idx = -1;
        /**
         * @param {?} e
         * @return {?}
         */
        function matchObject(e) {
            if (e._id === item[key]) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        function match(e) {
            if (e._id === item) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        // Assumption is that the arrays do not have duplicates.
        if (typeof item === 'object') {
            list.filter(matchObject);
        }
        else {
            list.filter(match);
        }
        return idx;
    };
    /**
     * @param {?} source
     * @param {?} item
     * @return {?}
     */
    DualListComponent.prototype.makeUnavailable = function (source, item) {
        var /** @type {?} */ idx = source.list.indexOf(item);
        if (idx !== -1) {
            source.list.splice(idx, 1);
        }
    };
    /**
     * @param {?} source
     * @param {?} target
     * @param {?=} item
     * @param {?=} trueup
     * @return {?}
     */
    DualListComponent.prototype.moveItem = function (source, target, item, trueup) {
        var _this = this;
        if (item === void 0) { item = null; }
        if (trueup === void 0) { trueup = true; }
        var /** @type {?} */ i = 0;
        var /** @type {?} */ len = source.pick.length;
        if (item) {
            i = source.list.indexOf(item);
            len = i + 1;
        }
        var _loop_2 = function () {
            // Is the pick still in list?
            var /** @type {?} */ mv = [];
            if (item) {
                var /** @type {?} */ idx = this_2.findItemIndex(source.pick, item);
                if (idx !== -1) {
                    mv[0] = source.pick[idx];
                }
            }
            else {
                mv = source.list.filter(function (src) {
                    return (src._id === source.pick[i]._id);
                });
            }
            // Should only ever be 1
            if (mv.length === 1) {
                // Add if not already in target.
                if (target.list.filter(function (trg) { return trg._id === mv[0]._id; }).length === 0) {
                    target.list.push(mv[0]);
                }
                this_2.makeUnavailable(source, mv[0]);
            }
        };
        var this_2 = this;
        for (; i < len; i += 1) {
            _loop_2();
        }
        if (this.compare !== undefined) {
            target.list.sort(this.compare);
        }
        source.pick.length = 0;
        // Update destination
        if (trueup) {
            this.trueUp();
        }
        // Delay ever-so-slightly to prevent race condition.
        setTimeout(function () {
            _this.onFilter(source);
            _this.onFilter(target);
        }, 10);
    };
    /**
     * @param {?} list
     * @param {?} item
     * @return {?}
     */
    DualListComponent.prototype.isItemSelected = function (list, item) {
        if (list.filter(function (e) { return Object.is(e, item); }).length > 0) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} source
     * @param {?} item
     * @return {?}
     */
    DualListComponent.prototype.shiftClick = function (event, index, source, item) {
        if (event.shiftKey && source.last && !Object.is(item, source.last)) {
            var /** @type {?} */ idx = source.sift.indexOf(source.last);
            if (index > idx) {
                for (var /** @type {?} */ i = (idx + 1); i < index; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
            else if (idx !== -1) {
                for (var /** @type {?} */ i = (index + 1); i < idx; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
        }
        source.last = item;
    };
    /**
     * @param {?} list
     * @param {?} item
     * @return {?}
     */
    DualListComponent.prototype.selectItem = function (list, item) {
        var /** @type {?} */ pk = list.filter(function (e) {
            return Object.is(e, item);
        });
        if (pk.length > 0) {
            // Already in list, so deselect.
            for (var /** @type {?} */ i = 0, /** @type {?} */ len = pk.length; i < len; i += 1) {
                var /** @type {?} */ idx = list.indexOf(pk[i]);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
        else {
            list.push(item);
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.selectAll = function (source) {
        source.pick.length = 0;
        source.pick = source.sift.slice(0);
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.selectNone = function (source) {
        source.pick.length = 0;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.isAllSelected = function (source) {
        if (source.list.length === 0 || source.list.length === source.pick.length) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.isAnySelected = function (source) {
        if (source.pick.length > 0) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.unpick = function (source) {
        for (var /** @type {?} */ i = source.pick.length - 1; i >= 0; i -= 1) {
            if (source.sift.indexOf(source.pick[i]) === -1) {
                source.pick.splice(i, 1);
            }
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.clearFilter = function (source) {
        if (source) {
            source.picker = '';
            this.onFilter(source);
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    DualListComponent.prototype.onFilter = function (source) {
        var _this = this;
        if (source.picker.length > 0) {
            try {
                var /** @type {?} */ filtered = source.list.filter(function (item) {
                    if (Object.prototype.toString.call(item) === '[object Object]') {
                        if (item._name !== undefined) {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return item._name.toLocaleLowerCase(_this.format.locale).indexOf(source.picker.toLocaleLowerCase(_this.format.locale)) !== -1;
                        }
                        else {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return JSON.stringify(item).toLocaleLowerCase(_this.format.locale).indexOf(source.picker.toLocaleLowerCase(_this.format.locale)) !== -1;
                        }
                    }
                    else {
                        // @ts-ignore: remove when d.ts has locale as an argument.
                        return item.toLocaleLowerCase(_this.format.locale).indexOf(source.picker.toLocaleLowerCase(_this.format.locale)) !== -1;
                    }
                });
                source.sift = filtered;
                this.unpick(source);
            }
            catch (e) {
                if (e instanceof RangeError) {
                    this.format.locale = undefined;
                }
                source.sift = source.list;
            }
        }
        else {
            source.sift = source.list;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DualListComponent.prototype.makeId = function (item) {
        if (typeof item === 'object') {
            return item[this.key];
        }
        else {
            return item;
        }
    };
    /**
     * @param {?} item
     * @param {?=} separator
     * @return {?}
     */
    DualListComponent.prototype.makeName = function (item, separator) {
        if (separator === void 0) { separator = '_'; }
        var /** @type {?} */ display = this.display;
        /**
         * @param {?} itm
         * @return {?}
         */
        function fallback(itm) {
            switch (Object.prototype.toString.call(itm)) {
                case '[object Number]':
                    return itm;
                case '[object String]':
                    return itm;
                default:
                    if (itm !== undefined) {
                        return itm[display];
                    }
                    else {
                        return 'undefined';
                    }
            }
        }
        var /** @type {?} */ str = '';
        if (this.display !== undefined) {
            switch (Object.prototype.toString.call(this.display)) {
                case '[object Function]':
                    str = this.display(item);
                    break;
                case '[object Array]':
                    for (var /** @type {?} */ i = 0, /** @type {?} */ len = this.display.length; i < len; i += 1) {
                        if (str.length > 0) {
                            str = str + separator;
                        }
                        if (this.display[i].indexOf('.') === -1) {
                            // Simple, just add to string.
                            str = str + item[this.display[i]];
                        }
                        else {
                            // Complex, some action needs to be performed
                            var /** @type {?} */ parts = this.display[i].split('.');
                            var /** @type {?} */ s = item[parts[0]];
                            if (s) {
                                // Use brute force
                                if (parts[1].indexOf('substring') !== -1) {
                                    var /** @type {?} */ nums = (parts[1].substring(parts[1].indexOf('(') + 1, parts[1].indexOf(')'))).split(',');
                                    switch (nums.length) {
                                        case 1:
                                            str = str + s.substring(parseInt(nums[0], 10));
                                            break;
                                        case 2:
                                            str = str + s.substring(parseInt(nums[0], 10), parseInt(nums[1], 10));
                                            break;
                                        default:
                                            str = str + s;
                                            break;
                                    }
                                }
                                else {
                                    // method not approved, so just add s.
                                    str = str + s;
                                }
                            }
                        }
                    }
                    break;
                default:
                    str = fallback(item);
                    break;
            }
        }
        else {
            str = fallback(item);
        }
        return str;
    };
    return DualListComponent;
}());
DualListComponent.AVAILABLE_LIST_NAME = 'available';
DualListComponent.CONFIRMED_LIST_NAME = 'confirmed';
DualListComponent.LTR = 'left-to-right';
DualListComponent.RTL = 'right-to-left';
DualListComponent.DEFAULT_FORMAT = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: undefined
};
DualListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dual-list',
                template: "\n   <div class=\"dual-list\">\n   \t<div class=\"listbox\" [ngStyle]=\"{ 'order' :  direction() ? 1 : 2, 'margin-left' : direction() ? 0 : '10px' }\">\n   \t\t<button type=\"button\" name=\"addBtn\" class=\"btn btn-primary btn-block\"\n   \t\t\t(click)=\"moveItem(available, confirmed)\" [ngClass]=\"direction() ? 'point-right' : 'point-left'\"\n   \t\t\t[disabled]=\"available.pick.length === 0\">{{format.add}}</button>\n\n   \t\t<form *ngIf=\"filter\" class=\"filter\">\n   \t\t\t<input class=\"form-control\" name=\"filterSource\" [(ngModel)]=\"available.picker\" (ngModelChange)=\"onFilter(available)\">\n   \t\t</form>\n\n   \t\t<div class=\"record-picker\">\n   \t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:available.dragOver}\"\n   \t\t\t\t(drop)=\"drop($event, confirmed)\" (dragover)=\"allowDrop($event, available)\" (dragleave)=\"dragLeave()\">\n   \t\t\t\t<li *ngFor=\"let item of available.sift; let idx=index;\"\n   \t\t\t\t\t(click)=\"disabled ? null : selectItem(available.pick, item); shiftClick($event, idx, available, item)\"\n   \t\t\t\t\t[ngClass]=\"{selected: isItemSelected(available.pick, item), disabled: disabled}\"\n   \t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, available)\" (dragend)=\"dragEnd(available)\"\n   \t\t\t\t><label>{{item._name}}</label></li>\n   \t\t\t</ul>\n   \t\t</div>\n\n   \t\t<div class=\"button-bar\">\n   \t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(available)\"\n   \t\t\t\t[disabled]=\"disabled || isAllSelected(available)\">{{format.all}}</button>\n   \t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(available)\"\n   \t\t\t\t[disabled]=\"!isAnySelected(available)\">{{format.none}}</button>\n   \t\t</div>\n   \t</div>\n\n   \t<div class=\"listbox\" [ngStyle]=\"{ 'order' : direction() ? 2 : 1, 'margin-left' : direction() ? '10px' : 0 }\">\n   \t\t<button type=\"button\" name=\"removeBtn\" class=\"btn btn-primary btn-block\"\n   \t\t\t(click)=\"moveItem(confirmed, available)\" [ngClass]=\"direction() ? 'point-left' : 'point-right'\"\n   \t\t\t[disabled]=\"confirmed.pick.length === 0\">{{format.remove}}</button>\n\n   \t\t<form *ngIf=\"filter\" class=\"filter\">\n   \t\t\t<input class=\"form-control\" name=\"filterDestination\" [(ngModel)]=\"confirmed.picker\" (ngModelChange)=\"onFilter(confirmed)\">\n   \t\t</form>\n\n   \t\t<div class=\"record-picker\">\n   \t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:confirmed.dragOver}\"\n   \t\t\t\t(drop)=\"drop($event, available)\" (dragover)=\"allowDrop($event, confirmed)\" (dragleave)=\"dragLeave()\">\n   \t\t\t\t<li #itmConf *ngFor=\"let item of confirmed.sift; let idx=index;\"\n   \t\t\t\t\t(click)=\"disabled ? null : selectItem(confirmed.pick, item); shiftClick($event, idx, confirmed, item)\"\n   \t\t\t\t\t[ngClass]=\"{selected: isItemSelected(confirmed.pick, item), disabled: disabled}\"\n   \t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, confirmed)\" (dragend)=\"dragEnd(confirmed)\"\n   \t\t\t\t><label>{{item._name}}</label></li>\n   \t\t\t</ul>\n   \t\t</div>\n\n   \t\t<div class=\"button-bar\">\n   \t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(confirmed)\"\n   \t\t\t\t[disabled]=\"disabled || isAllSelected(confirmed)\">{{format.all}}</button>\n   \t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(confirmed)\"\n   \t\t\t\t[disabled]=\"!isAnySelected(confirmed)\">{{format.none}}</button>\n   \t\t</div>\n   \t</div>\n   </div>\n\t",
                styles: ["\n   div.record-picker {\n   \toverflow-x: hidden;\n   \toverflow-y: auto;\n   \tborder: 1px solid #ddd;\n   \tborder-radius:8px;\n   \tposition: relative;\n   \tcursor: pointer;\n   }\n\n   /* http://www.ourtuts.com/how-to-customize-browser-scrollbars-using-css3/ */\n   div.record-picker::-webkit-scrollbar {\n   \twidth: 12px;\n   }\n\n   div.record-picker::-webkit-scrollbar-button {\n   \twidth: 0px;\n   \theight: 0px;\n   }\n\n   div.record-picker {\n   \tscrollbar-base-color: #337ab7;\n   \tscrollbar-3dlight-color: #337ab7;\n   \tscrollbar-highlight-color: #337ab7;\n   \tscrollbar-track-color: #eee;\n   \tscrollbar-arrow-color: gray;\n   \tscrollbar-shadow-color: gray;\n   \tscrollbar-dark-shadow-color: gray;\n   }\n\n   div.record-picker::-webkit-scrollbar-track {\n   \tbackground:#eee;\n   \t-webkit-box-shadow: 0px 0px 3px #dfdfdf inset;\n   \t        box-shadow: 0px 0px 3px #dfdfdf inset;\n   \tborder-top-right-radius: 8px;\n   \tborder-bottom-right-radius: 8px;\n   }\n\n   div.record-picker::-webkit-scrollbar-thumb {\n   \tbackground: #337ab7;\n   \tborder: thin solid gray;\n   \tborder-top-right-radius: 8px;\n   \tborder-bottom-right-radius: 8px;\n   }\n\n   div.record-picker::-webkit-scrollbar-thumb:hover {\n   \tbackground: #286090;\n   }\n\n   .record-picker ul {\n   \tmargin: 0;\n   \tpadding: 0 0 1px 0;\n   }\n\n   .record-picker li {\n   \tborder-top: thin solid #ddd;\n   \tborder-bottom: 1px solid #ddd;\n   \tdisplay: block;\n   \tpadding: 2px 2px 2px 10px;\n   \tmargin-bottom: -1px;\n   \tfont-size: 0.85em;\n   \tcursor: pointer;\n   \twhite-space: nowrap;\n   \tmin-height:16px;\n   }\n\n   .record-picker li:hover {\n   \tbackground-color: #f5f5f5;\n   }\n\n   .record-picker li.selected {\n   \tbackground-color: #d9edf7;\n   }\n\n   .record-picker li.selected:hover {\n   \tbackground-color: #c4e3f3;\n   }\n\n   .record-picker li.disabled {\n   \topacity: 0.5;\n   \tcursor: default;\n   \tbackground-color: inherit;\n   }\n\n   .record-picker li:first-child {\n   \tborder-top-left-radius: 8px;\n   \tborder-top-right-radius: 8px;\n   \tborder-top: none;\n   }\n\n   .record-picker li:last-child {\n   \tborder-bottom-left-radius: 8px;\n   \tborder-bottom-right-radius: 8px;\n   \tborder-bottom: none;\n   }\n\n   .record-picker label {\n   \tcursor: pointer;\n   \tfont-weight: inherit;\n   \tfont-size: 14px;\n   \tpadding: 4px;\n   \tmargin-bottom: -1px;\n   \t-webkit-touch-callout: none;\n   \t-webkit-user-select: none;\n   \t-moz-user-select: none;\n   \t-ms-user-select: none;\n   \tuser-select: none;\n   }\n\n   .record-picker ul.over {\n   \tbackground-color:lightgray;\n   }\n\n   .dual-list  {\n   \tdisplay: -webkit-box;\n   \tdisplay: -ms-flexbox;\n   \tdisplay: flex;\n   \t-webkit-box-orient: horizontal;\n   \t-webkit-box-direction: normal;\n   \t    -ms-flex-direction: row;\n   \t        flex-direction: row;\n   \t-ms-flex-line-pack: start;\n   \t    align-content: flex-start;\n   }\n\n   .dual-list .listbox {\n   \twidth: 50%;\n   \tmargin: 0px;\n   }\n\n   .dual-list .button-bar {\n   \tmargin-top: 8px;\n   }\n\n   /* &nbsp;&nbsp;&nbsp;&#9654; */\n   .point-right::after {\n   \tcontent: \"\\25B6\";\n   \tpadding-left: 1em;\n   }\n\n   /* &#9664;&nbsp;&nbsp;&nbsp; */\n   .point-left::before {\n   \tcontent: \"\\25C0\";\n   \tpadding-right: 1em;\n   }\n\n   .dual-list .button-bar button {\n   \twidth: 47%;\n   }\n\n   button.btn-block {\n   \tdisplay: block;\n   \twidth: 100%;\n   \tmargin-bottom: 8px;\n   }\n\n   .filter {\n   \tmargin-bottom: -2.2em;\n   }\n\n   .filter::after {\n   \tcontent:\"o\";\n   \twidth:40px;\n   \tcolor:transparent;\n   \tfont-size:2em;\n   \tbackground-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');\n   \tbackground-repeat:no-repeat;\n   \tbackground-position:center center;\n   \topacity:.2;\n   \ttop: -36px;\n   \tleft: calc(100% - 21px);\n   \tposition:relative;\n   }\n\t"]
            },] },
];
/**
 * @nocollapse
 */
DualListComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], },
]; };
DualListComponent.propDecorators = {
    'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'key': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'display': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'filter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'format': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'sort': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'compare': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'source': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'destination': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'destinationChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var AngularDualListBoxModule = /** @class */ (function () {
    function AngularDualListBoxModule() {
    }
    return AngularDualListBoxModule;
}());
AngularDualListBoxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [DualListComponent],
                exports: [DualListComponent]
            },] },
];
/**
 * @nocollapse
 */
AngularDualListBoxModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-dual-listbox.es5.js.map


/***/ }),

/***/ "./node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css":
/*!**************************************************************************!*\
  !*** ./node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".famfamfam-flags{background:url(famfamfam-flags.png) no-repeat;background-size:224px 199px}.famfamfam-flags.me{width:16px;height:12px;background-position:0 0}.famfamfam-flags.ky{width:16px;height:11px;background-position:-16px 0}.famfamfam-flags.af{width:16px;height:11px;background-position:0 -12px}.famfamfam-flags.ag{width:16px;height:11px;background-position:-16px -12px}.famfamfam-flags.ai{width:16px;height:11px;background-position:-32px 0}.famfamfam-flags.al{width:16px;height:11px;background-position:-32px -11px}.famfamfam-flags.am{width:16px;height:11px;background-position:0 -23px}.famfamfam-flags.an{width:16px;height:11px;background-position:-16px -23px}.famfamfam-flags.ao{width:16px;height:11px;background-position:-32px -23px}.famfamfam-flags.ar{width:16px;height:11px;background-position:0 -34px}.famfamfam-flags.as{width:16px;height:11px;background-position:-16px -34px}.famfamfam-flags.at{width:16px;height:11px;background-position:-32px -34px}.famfamfam-flags.au{width:16px;height:11px;background-position:-48px 0}.famfamfam-flags.aw{width:16px;height:11px;background-position:-48px -11px}.famfamfam-flags.ax{width:16px;height:11px;background-position:-48px -22px}.famfamfam-flags.az{width:16px;height:11px;background-position:-48px -33px}.famfamfam-flags.ba{width:16px;height:11px;background-position:0 -45px}.famfamfam-flags.bb{width:16px;height:11px;background-position:-16px -45px}.famfamfam-flags.bd{width:16px;height:11px;background-position:-32px -45px}.famfamfam-flags.be{width:16px;height:11px;background-position:-48px -45px}.famfamfam-flags.bf{width:16px;height:11px;background-position:-64px 0}.famfamfam-flags.bg{width:16px;height:11px;background-position:-64px -11px}.famfamfam-flags.bh{width:16px;height:11px;background-position:-64px -22px}.famfamfam-flags.bi{width:16px;height:11px;background-position:-64px -33px}.famfamfam-flags.bj{width:16px;height:11px;background-position:-64px -44px}.famfamfam-flags.bm{width:16px;height:11px;background-position:0 -56px}.famfamfam-flags.bn{width:16px;height:11px;background-position:-16px -56px}.famfamfam-flags.bo{width:16px;height:11px;background-position:-32px -56px}.famfamfam-flags.br{width:16px;height:11px;background-position:-48px -56px}.famfamfam-flags.bs{width:16px;height:11px;background-position:-64px -56px}.famfamfam-flags.bt{width:16px;height:11px;background-position:0 -67px}.famfamfam-flags.bv{width:16px;height:11px;background-position:-16px -67px}.famfamfam-flags.bw{width:16px;height:11px;background-position:-32px -67px}.famfamfam-flags.by{width:16px;height:11px;background-position:-48px -67px}.famfamfam-flags.bz{width:16px;height:11px;background-position:-64px -67px}.famfamfam-flags.ca{width:16px;height:11px;background-position:-80px 0}.famfamfam-flags.catalonia{width:16px;height:11px;background-position:-80px -11px}.famfamfam-flags.cc{width:16px;height:11px;background-position:-80px -22px}.famfamfam-flags.cd{width:16px;height:11px;background-position:-80px -33px}.famfamfam-flags.cf{width:16px;height:11px;background-position:-80px -44px}.famfamfam-flags.cg{width:16px;height:11px;background-position:-80px -55px}.famfamfam-flags.zm{width:16px;height:11px;background-position:-80px -66px}.famfamfam-flags.ci{width:16px;height:11px;background-position:0 -78px}.famfamfam-flags.ck{width:16px;height:11px;background-position:-16px -78px}.famfamfam-flags.cl{width:16px;height:11px;background-position:-32px -78px}.famfamfam-flags.cm{width:16px;height:11px;background-position:-48px -78px}.famfamfam-flags.cn{width:16px;height:11px;background-position:-64px -78px}.famfamfam-flags.co{width:16px;height:11px;background-position:-80px -78px}.famfamfam-flags.cr{width:16px;height:11px;background-position:-96px 0}.famfamfam-flags.cs{width:16px;height:11px;background-position:-96px -11px}.famfamfam-flags.cu{width:16px;height:11px;background-position:-96px -22px}.famfamfam-flags.cv{width:16px;height:11px;background-position:-96px -33px}.famfamfam-flags.cx{width:16px;height:11px;background-position:-96px -44px}.famfamfam-flags.cy{width:16px;height:11px;background-position:-96px -55px}.famfamfam-flags.cz{width:16px;height:11px;background-position:-96px -66px}.famfamfam-flags.de{width:16px;height:11px;background-position:-96px -77px}.famfamfam-flags.dj{width:16px;height:11px;background-position:0 -89px}.famfamfam-flags.dk{width:16px;height:11px;background-position:-16px -89px}.famfamfam-flags.dm{width:16px;height:11px;background-position:-32px -89px}.famfamfam-flags.do{width:16px;height:11px;background-position:-48px -89px}.famfamfam-flags.dz{width:16px;height:11px;background-position:-64px -89px}.famfamfam-flags.ec{width:16px;height:11px;background-position:-80px -89px}.famfamfam-flags.ee{width:16px;height:11px;background-position:-96px -89px}.famfamfam-flags.eg{width:16px;height:11px;background-position:0 -100px}.famfamfam-flags.eh{width:16px;height:11px;background-position:-16px -100px}.famfamfam-flags.england{width:16px;height:11px;background-position:-32px -100px}.famfamfam-flags.er{width:16px;height:11px;background-position:-48px -100px}.famfamfam-flags.es{width:16px;height:11px;background-position:-64px -100px}.famfamfam-flags.et{width:16px;height:11px;background-position:-80px -100px}.famfamfam-flags.europeanunion{width:16px;height:11px;background-position:-96px -100px}.famfamfam-flags.fam{width:16px;height:11px;background-position:-112px 0}.famfamfam-flags.fi{width:16px;height:11px;background-position:-112px -11px}.famfamfam-flags.fj{width:16px;height:11px;background-position:-112px -22px}.famfamfam-flags.fk{width:16px;height:11px;background-position:-112px -33px}.famfamfam-flags.fm{width:16px;height:11px;background-position:-112px -44px}.famfamfam-flags.fo{width:16px;height:11px;background-position:-112px -55px}.famfamfam-flags.fr,.famfamfam-flags.gp,.famfamfam-flags.mf,.famfamfam-flags.re,.famfamfam-flags.yt{width:16px;height:11px;background-position:-112px -66px}.famfamfam-flags.ga{width:16px;height:11px;background-position:-112px -77px}.famfamfam-flags.gb{width:16px;height:11px;background-position:-112px -88px}.famfamfam-flags.gd{width:16px;height:11px;background-position:-112px -99px}.famfamfam-flags.ge{width:16px;height:11px;background-position:0 -111px}.famfamfam-flags.gf{width:16px;height:11px;background-position:-16px -111px}.famfamfam-flags.gg{width:16px;height:11px;background-position:-32px -111px}.famfamfam-flags.gh{width:16px;height:11px;background-position:-48px -111px}.famfamfam-flags.gi{width:16px;height:11px;background-position:-64px -111px}.famfamfam-flags.gl{width:16px;height:11px;background-position:-80px -111px}.famfamfam-flags.gm{width:16px;height:11px;background-position:-96px -111px}.famfamfam-flags.gn{width:16px;height:11px;background-position:-112px -111px}.famfamfam-flags.gp{width:16px;height:11px;background-position:-128px 0}.famfamfam-flags.gq{width:16px;height:11px;background-position:-128px -11px}.famfamfam-flags.gr{width:16px;height:11px;background-position:-128px -22px}.famfamfam-flags.gs{width:16px;height:11px;background-position:-128px -33px}.famfamfam-flags.gt{width:16px;height:11px;background-position:-128px -44px}.famfamfam-flags.gu{width:16px;height:11px;background-position:-128px -55px}.famfamfam-flags.gw{width:16px;height:11px;background-position:-128px -66px}.famfamfam-flags.gy{width:16px;height:11px;background-position:-128px -77px}.famfamfam-flags.hk{width:16px;height:11px;background-position:-128px -88px}.famfamfam-flags.hm{width:16px;height:11px;background-position:-128px -99px}.famfamfam-flags.hn{width:16px;height:11px;background-position:-128px -110px}.famfamfam-flags.hr{width:16px;height:11px;background-position:0 -122px}.famfamfam-flags.ht{width:16px;height:11px;background-position:-16px -122px}.famfamfam-flags.hu{width:16px;height:11px;background-position:-32px -122px}.famfamfam-flags.id{width:16px;height:11px;background-position:-48px -122px}.famfamfam-flags.ie{width:16px;height:11px;background-position:-64px -122px}.famfamfam-flags.il{width:16px;height:11px;background-position:-80px -122px}.famfamfam-flags.in{width:16px;height:11px;background-position:-96px -122px}.famfamfam-flags.io{width:16px;height:11px;background-position:-112px -122px}.famfamfam-flags.iq{width:16px;height:11px;background-position:-128px -122px}.famfamfam-flags.ir{width:16px;height:11px;background-position:0 -133px}.famfamfam-flags.is{width:16px;height:11px;background-position:-16px -133px}.famfamfam-flags.it{width:16px;height:11px;background-position:-32px -133px}.famfamfam-flags.je{width:16px;height:11px;background-position:-48px -133px}.famfamfam-flags.jm{width:16px;height:11px;background-position:-64px -133px}.famfamfam-flags.jo{width:16px;height:11px;background-position:-80px -133px}.famfamfam-flags.jp{width:16px;height:11px;background-position:-96px -133px}.famfamfam-flags.ke{width:16px;height:11px;background-position:-112px -133px}.famfamfam-flags.kg{width:16px;height:11px;background-position:-128px -133px}.famfamfam-flags.kh{width:16px;height:11px;background-position:-144px 0}.famfamfam-flags.ki{width:16px;height:11px;background-position:-144px -11px}.famfamfam-flags.km{width:16px;height:11px;background-position:-144px -22px}.famfamfam-flags.kn{width:16px;height:11px;background-position:-144px -33px}.famfamfam-flags.kp{width:16px;height:11px;background-position:-144px -44px}.famfamfam-flags.kr{width:16px;height:11px;background-position:-144px -55px}.famfamfam-flags.kw{width:16px;height:11px;background-position:-144px -66px}.famfamfam-flags.ae{width:16px;height:11px;background-position:-144px -77px}.famfamfam-flags.kz{width:16px;height:11px;background-position:-144px -88px}.famfamfam-flags.la{width:16px;height:11px;background-position:-144px -99px}.famfamfam-flags.lb{width:16px;height:11px;background-position:-144px -110px}.famfamfam-flags.lc{width:16px;height:11px;background-position:-144px -121px}.famfamfam-flags.li{width:16px;height:11px;background-position:-144px -132px}.famfamfam-flags.lk{width:16px;height:11px;background-position:0 -144px}.famfamfam-flags.lr{width:16px;height:11px;background-position:-16px -144px}.famfamfam-flags.ls{width:16px;height:11px;background-position:-32px -144px}.famfamfam-flags.lt{width:16px;height:11px;background-position:-48px -144px}.famfamfam-flags.lu{width:16px;height:11px;background-position:-64px -144px}.famfamfam-flags.lv{width:16px;height:11px;background-position:-80px -144px}.famfamfam-flags.ly{width:16px;height:11px;background-position:-96px -144px}.famfamfam-flags.ma{width:16px;height:11px;background-position:-112px -144px}.famfamfam-flags.mc{width:16px;height:11px;background-position:-128px -144px}.famfamfam-flags.md{width:16px;height:11px;background-position:-144px -144px}.famfamfam-flags.ad{width:16px;height:11px;background-position:-160px 0}.famfamfam-flags.mg{width:16px;height:11px;background-position:-160px -11px}.famfamfam-flags.mh{width:16px;height:11px;background-position:-160px -22px}.famfamfam-flags.mk{width:16px;height:11px;background-position:-160px -33px}.famfamfam-flags.ml{width:16px;height:11px;background-position:-160px -44px}.famfamfam-flags.mm{width:16px;height:11px;background-position:-160px -55px}.famfamfam-flags.mn{width:16px;height:11px;background-position:-160px -66px}.famfamfam-flags.mo{width:16px;height:11px;background-position:-160px -77px}.famfamfam-flags.mp{width:16px;height:11px;background-position:-160px -88px}.famfamfam-flags.mq{width:16px;height:11px;background-position:-160px -99px}.famfamfam-flags.mr{width:16px;height:11px;background-position:-160px -110px}.famfamfam-flags.ms{width:16px;height:11px;background-position:-160px -121px}.famfamfam-flags.mt{width:16px;height:11px;background-position:-160px -132px}.famfamfam-flags.mu{width:16px;height:11px;background-position:-160px -143px}.famfamfam-flags.mv{width:16px;height:11px;background-position:0 -155px}.famfamfam-flags.mw{width:16px;height:11px;background-position:-16px -155px}.famfamfam-flags.mx{width:16px;height:11px;background-position:-32px -155px}.famfamfam-flags.my{width:16px;height:11px;background-position:-48px -155px}.famfamfam-flags.mz{width:16px;height:11px;background-position:-64px -155px}.famfamfam-flags.na{width:16px;height:11px;background-position:-80px -155px}.famfamfam-flags.nc{width:16px;height:11px;background-position:-96px -155px}.famfamfam-flags.ne{width:16px;height:11px;background-position:-112px -155px}.famfamfam-flags.nf{width:16px;height:11px;background-position:-128px -155px}.famfamfam-flags.ng{width:16px;height:11px;background-position:-144px -155px}.famfamfam-flags.ni{width:16px;height:11px;background-position:-160px -155px}.famfamfam-flags.bq,.famfamfam-flags.nl{width:16px;height:11px;background-position:-176px 0}.famfamfam-flags.no{width:16px;height:11px;background-position:-176px -11px}.famfamfam-flags.za{width:16px;height:11px;background-position:-176px -22px}.famfamfam-flags.nr{width:16px;height:11px;background-position:-176px -33px}.famfamfam-flags.nu{width:16px;height:11px;background-position:-176px -44px}.famfamfam-flags.nz{width:16px;height:11px;background-position:-176px -55px}.famfamfam-flags.om{width:16px;height:11px;background-position:-176px -66px}.famfamfam-flags.pa{width:16px;height:11px;background-position:-176px -77px}.famfamfam-flags.pe{width:16px;height:11px;background-position:-176px -88px}.famfamfam-flags.pf{width:16px;height:11px;background-position:-176px -99px}.famfamfam-flags.pg{width:16px;height:11px;background-position:-176px -110px}.famfamfam-flags.ph{width:16px;height:11px;background-position:-176px -121px}.famfamfam-flags.pk{width:16px;height:11px;background-position:-176px -132px}.famfamfam-flags.pl{width:16px;height:11px;background-position:-176px -143px}.famfamfam-flags.pm{width:16px;height:11px;background-position:-176px -154px}.famfamfam-flags.pn{width:16px;height:11px;background-position:0 -166px}.famfamfam-flags.pr{width:16px;height:11px;background-position:-16px -166px}.famfamfam-flags.ps{width:16px;height:11px;background-position:-32px -166px}.famfamfam-flags.pt{width:16px;height:11px;background-position:-48px -166px}.famfamfam-flags.pw{width:16px;height:11px;background-position:-64px -166px}.famfamfam-flags.py{width:16px;height:11px;background-position:-80px -166px}.famfamfam-flags.qa{width:16px;height:11px;background-position:-96px -166px}.famfamfam-flags.re{width:16px;height:11px;background-position:-112px -166px}.famfamfam-flags.ro{width:16px;height:11px;background-position:-128px -166px}.famfamfam-flags.rs{width:16px;height:11px;background-position:-144px -166px}.famfamfam-flags.ru{width:16px;height:11px;background-position:-160px -166px}.famfamfam-flags.rw{width:16px;height:11px;background-position:-176px -166px}.famfamfam-flags.sa{width:16px;height:11px;background-position:0 -177px}.famfamfam-flags.sb{width:16px;height:11px;background-position:-16px -177px}.famfamfam-flags.sc{width:16px;height:11px;background-position:-32px -177px}.famfamfam-flags.scotland{width:16px;height:11px;background-position:-48px -177px}.famfamfam-flags.sd{width:16px;height:11px;background-position:-64px -177px}.famfamfam-flags.se{width:16px;height:11px;background-position:-80px -177px}.famfamfam-flags.sg{width:16px;height:11px;background-position:-96px -177px}.famfamfam-flags.sh{width:16px;height:11px;background-position:-112px -177px}.famfamfam-flags.si{width:16px;height:11px;background-position:-128px -177px}.famfamfam-flags.sj{width:16px;height:11px;background-position:-144px -177px}.famfamfam-flags.sk{width:16px;height:11px;background-position:-160px -177px}.famfamfam-flags.sl{width:16px;height:11px;background-position:-176px -177px}.famfamfam-flags.sm{width:16px;height:11px;background-position:-192px 0}.famfamfam-flags.sn{width:16px;height:11px;background-position:-192px -11px}.famfamfam-flags.so{width:16px;height:11px;background-position:-192px -22px}.famfamfam-flags.sr{width:16px;height:11px;background-position:-192px -33px}.famfamfam-flags.st{width:16px;height:11px;background-position:-192px -44px}.famfamfam-flags.sv{width:16px;height:11px;background-position:-192px -55px}.famfamfam-flags.sy{width:16px;height:11px;background-position:-192px -66px}.famfamfam-flags.sz{width:16px;height:11px;background-position:-192px -77px}.famfamfam-flags.tc{width:16px;height:11px;background-position:-192px -88px}.famfamfam-flags.td{width:16px;height:11px;background-position:-192px -99px}.famfamfam-flags.tf{width:16px;height:11px;background-position:-192px -110px}.famfamfam-flags.tg{width:16px;height:11px;background-position:-192px -121px}.famfamfam-flags.th{width:16px;height:11px;background-position:-192px -132px}.famfamfam-flags.tj{width:16px;height:11px;background-position:-192px -143px}.famfamfam-flags.tk{width:16px;height:11px;background-position:-192px -154px}.famfamfam-flags.tl{width:16px;height:11px;background-position:-192px -165px}.famfamfam-flags.tm{width:16px;height:11px;background-position:-192px -176px}.famfamfam-flags.tn{width:16px;height:11px;background-position:0 -188px}.famfamfam-flags.to{width:16px;height:11px;background-position:-16px -188px}.famfamfam-flags.tr{width:16px;height:11px;background-position:-32px -188px}.famfamfam-flags.tt{width:16px;height:11px;background-position:-48px -188px}.famfamfam-flags.tv{width:16px;height:11px;background-position:-64px -188px}.famfamfam-flags.tw{width:16px;height:11px;background-position:-80px -188px}.famfamfam-flags.tz{width:16px;height:11px;background-position:-96px -188px}.famfamfam-flags.ua{width:16px;height:11px;background-position:-112px -188px}.famfamfam-flags.ug{width:16px;height:11px;background-position:-128px -188px}.famfamfam-flags.um{width:16px;height:11px;background-position:-144px -188px}.famfamfam-flags.us{width:16px;height:11px;background-position:-160px -188px}.famfamfam-flags.uy{width:16px;height:11px;background-position:-176px -188px}.famfamfam-flags.uz{width:16px;height:11px;background-position:-192px -188px}.famfamfam-flags.va{width:16px;height:11px;background-position:-208px 0}.famfamfam-flags.vc{width:16px;height:11px;background-position:-208px -11px}.famfamfam-flags.ve{width:16px;height:11px;background-position:-208px -22px}.famfamfam-flags.vg{width:16px;height:11px;background-position:-208px -33px}.famfamfam-flags.vi{width:16px;height:11px;background-position:-208px -44px}.famfamfam-flags.vn{width:16px;height:11px;background-position:-208px -55px}.famfamfam-flags.vu{width:16px;height:11px;background-position:-208px -66px}.famfamfam-flags.wales{width:16px;height:11px;background-position:-208px -77px}.famfamfam-flags.wf{width:16px;height:11px;background-position:-208px -88px}.famfamfam-flags.ws{width:16px;height:11px;background-position:-208px -99px}.famfamfam-flags.ye{width:16px;height:11px;background-position:-208px -110px}.famfamfam-flags.yt{width:16px;height:11px;background-position:-208px -121px}.famfamfam-flags.zw{width:16px;height:11px;background-position:-208px -132px}.famfamfam-flags.ch{width:11px;height:11px;background-position:-208px -143px}.famfamfam-flags.np{width:9px;height:11px;background-position:-208px -154px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYW1mYW1mYW0tZmxhZ3MvZGlzdC9zcHJpdGUvZmFtZmFtZmFtLWZsYWdzLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLDZDQUE2QyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLHlCQUF5QixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLCtCQUErQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLHFCQUFxQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9HQUFvRyxVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLHdDQUF3QyxVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLDBCQUEwQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixVQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLG9CQUFvQixTQUFTLENBQUMsV0FBVyxDQUFDLGlDQUFpQyIsImZpbGUiOiJub2RlX21vZHVsZXMvZmFtZmFtZmFtLWZsYWdzL2Rpc3Qvc3ByaXRlL2ZhbWZhbWZhbS1mbGFncy5taW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhbWZhbWZhbS1mbGFnc3tiYWNrZ3JvdW5kOnVybChmYW1mYW1mYW0tZmxhZ3MucG5nKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjIyNHB4IDE5OXB4fS5mYW1mYW1mYW0tZmxhZ3MubWV7d2lkdGg6MTZweDtoZWlnaHQ6MTJweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMH0uZmFtZmFtZmFtLWZsYWdzLmt5e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTZweCAwfS5mYW1mYW1mYW0tZmxhZ3MuYWZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTEycHh9LmZhbWZhbWZhbS1mbGFncy5hZ3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2cHggLTEycHh9LmZhbWZhbWZhbS1mbGFncy5haXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTMycHggMH0uZmFtZmFtZmFtLWZsYWdzLmFse3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtMTFweH0uZmFtZmFtZmFtLWZsYWdzLmFte3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC0yM3B4fS5mYW1mYW1mYW0tZmxhZ3MuYW57d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0yM3B4fS5mYW1mYW1mYW0tZmxhZ3MuYW97d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC0yM3B4fS5mYW1mYW1mYW0tZmxhZ3MuYXJ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTM0cHh9LmZhbWZhbWZhbS1mbGFncy5hc3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2cHggLTM0cHh9LmZhbWZhbWZhbS1mbGFncy5hdHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTMycHggLTM0cHh9LmZhbWZhbWZhbS1mbGFncy5hdXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggMH0uZmFtZmFtZmFtLWZsYWdzLmF3e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMTFweH0uZmFtZmFtZmFtLWZsYWdzLmF4e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMjJweH0uZmFtZmFtZmFtLWZsYWdzLmF6e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLmJhe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC00NXB4fS5mYW1mYW1mYW0tZmxhZ3MuYmJ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC00NXB4fS5mYW1mYW1mYW0tZmxhZ3MuYmR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC00NXB4fS5mYW1mYW1mYW0tZmxhZ3MuYmV7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00OHB4IC00NXB4fS5mYW1mYW1mYW0tZmxhZ3MuYmZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IDB9LmZhbWZhbWZhbS1mbGFncy5iZ3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTExcHh9LmZhbWZhbWZhbS1mbGFncy5iaHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTIycHh9LmZhbWZhbWZhbS1mbGFncy5iaXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTMzcHh9LmZhbWZhbWZhbS1mbGFncy5iant3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5ibXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246MCAtNTZweH0uZmFtZmFtZmFtLWZsYWdzLmJue3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTZweCAtNTZweH0uZmFtZmFtZmFtLWZsYWdzLmJve3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtNTZweH0uZmFtZmFtZmFtLWZsYWdzLmJye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtNTZweH0uZmFtZmFtZmFtLWZsYWdzLmJze3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNjRweCAtNTZweH0uZmFtZmFtZmFtLWZsYWdzLmJ0e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC02N3B4fS5mYW1mYW1mYW0tZmxhZ3MuYnZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC02N3B4fS5mYW1mYW1mYW0tZmxhZ3MuYnd7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC02N3B4fS5mYW1mYW1mYW0tZmxhZ3MuYnl7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00OHB4IC02N3B4fS5mYW1mYW1mYW0tZmxhZ3MuYnp7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC02N3B4fS5mYW1mYW1mYW0tZmxhZ3MuY2F7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IDB9LmZhbWZhbWZhbS1mbGFncy5jYXRhbG9uaWF7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xMXB4fS5mYW1mYW1mYW0tZmxhZ3MuY2N7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0yMnB4fS5mYW1mYW1mYW0tZmxhZ3MuY2R7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0zM3B4fS5mYW1mYW1mYW0tZmxhZ3MuY2Z7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC00NHB4fS5mYW1mYW1mYW0tZmxhZ3MuY2d7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC01NXB4fS5mYW1mYW1mYW0tZmxhZ3Muem17d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC02NnB4fS5mYW1mYW1mYW0tZmxhZ3MuY2l7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5ja3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2cHggLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5jbHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTMycHggLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5jbXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5jbnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5jb3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTgwcHggLTc4cHh9LmZhbWZhbWZhbS1mbGFncy5jcnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTk2cHggMH0uZmFtZmFtZmFtLWZsYWdzLmNze3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtMTFweH0uZmFtZmFtZmFtLWZsYWdzLmN1e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtMjJweH0uZmFtZmFtZmFtLWZsYWdzLmN2e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLmN4e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtNDRweH0uZmFtZmFtZmFtLWZsYWdzLmN5e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtNTVweH0uZmFtZmFtZmFtLWZsYWdzLmN6e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLmRle3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtNzdweH0uZmFtZmFtZmFtLWZsYWdzLmRqe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZGt7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZG17d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZG97d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00OHB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZHp7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZWN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZWV7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi05NnB4IC04OXB4fS5mYW1mYW1mYW0tZmxhZ3MuZWd7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTEwMHB4fS5mYW1mYW1mYW0tZmxhZ3MuZWh7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0xMDBweH0uZmFtZmFtZmFtLWZsYWdzLmVuZ2xhbmR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC0xMDBweH0uZmFtZmFtZmFtLWZsYWdzLmVye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMTAwcHh9LmZhbWZhbWZhbS1mbGFncy5lc3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTEwMHB4fS5mYW1mYW1mYW0tZmxhZ3MuZXR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xMDBweH0uZmFtZmFtZmFtLWZsYWdzLmV1cm9wZWFudW5pb257d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi05NnB4IC0xMDBweH0uZmFtZmFtZmFtLWZsYWdzLmZhbXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IDB9LmZhbWZhbWZhbS1mbGFncy5maXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IC0xMXB4fS5mYW1mYW1mYW0tZmxhZ3MuZmp7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtMjJweH0uZmFtZmFtZmFtLWZsYWdzLmZre3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTEycHggLTMzcHh9LmZhbWZhbWZhbS1mbGFncy5mbXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IC00NHB4fS5mYW1mYW1mYW0tZmxhZ3MuZm97d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtNTVweH0uZmFtZmFtZmFtLWZsYWdzLmZyLC5mYW1mYW1mYW0tZmxhZ3MuZ3AsLmZhbWZhbWZhbS1mbGFncy5tZiwuZmFtZmFtZmFtLWZsYWdzLnJlLC5mYW1mYW1mYW0tZmxhZ3MueXR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLmdhe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTEycHggLTc3cHh9LmZhbWZhbWZhbS1mbGFncy5nYnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IC04OHB4fS5mYW1mYW1mYW0tZmxhZ3MuZ2R7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtOTlweH0uZmFtZmFtZmFtLWZsYWdzLmdle3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC0xMTFweH0uZmFtZmFtZmFtLWZsYWdzLmdme3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTZweCAtMTExcHh9LmZhbWZhbWZhbS1mbGFncy5nZ3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTMycHggLTExMXB4fS5mYW1mYW1mYW0tZmxhZ3MuZ2h7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00OHB4IC0xMTFweH0uZmFtZmFtZmFtLWZsYWdzLmdpe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNjRweCAtMTExcHh9LmZhbWZhbWZhbS1mbGFncy5nbHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTgwcHggLTExMXB4fS5mYW1mYW1mYW0tZmxhZ3MuZ217d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi05NnB4IC0xMTFweH0uZmFtZmFtZmFtLWZsYWdzLmdue3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTEycHggLTExMXB4fS5mYW1mYW1mYW0tZmxhZ3MuZ3B7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAwfS5mYW1mYW1mYW0tZmxhZ3MuZ3F7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAtMTFweH0uZmFtZmFtZmFtLWZsYWdzLmdye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI4cHggLTIycHh9LmZhbWZhbWZhbS1mbGFncy5nc3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC0zM3B4fS5mYW1mYW1mYW0tZmxhZ3MuZ3R7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAtNDRweH0uZmFtZmFtZmFtLWZsYWdzLmd1e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI4cHggLTU1cHh9LmZhbWZhbWZhbS1mbGFncy5nd3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC02NnB4fS5mYW1mYW1mYW0tZmxhZ3MuZ3l7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAtNzdweH0uZmFtZmFtZmFtLWZsYWdzLmhre3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI4cHggLTg4cHh9LmZhbWZhbWZhbS1mbGFncy5obXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC05OXB4fS5mYW1mYW1mYW0tZmxhZ3MuaG57d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAtMTEwcHh9LmZhbWZhbWZhbS1mbGFncy5ocnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246MCAtMTIycHh9LmZhbWZhbWZhbS1mbGFncy5odHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2cHggLTEyMnB4fS5mYW1mYW1mYW0tZmxhZ3MuaHV7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC0xMjJweH0uZmFtZmFtZmFtLWZsYWdzLmlke3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMTIycHh9LmZhbWZhbWZhbS1mbGFncy5pZXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTEyMnB4fS5mYW1mYW1mYW0tZmxhZ3MuaWx7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xMjJweH0uZmFtZmFtZmFtLWZsYWdzLmlue3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtMTIycHh9LmZhbWZhbWZhbS1mbGFncy5pb3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IC0xMjJweH0uZmFtZmFtZmFtLWZsYWdzLmlxe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI4cHggLTEyMnB4fS5mYW1mYW1mYW0tZmxhZ3MuaXJ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTEzM3B4fS5mYW1mYW1mYW0tZmxhZ3MuaXN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0xMzNweH0uZmFtZmFtZmFtLWZsYWdzLml0e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtMTMzcHh9LmZhbWZhbWZhbS1mbGFncy5qZXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggLTEzM3B4fS5mYW1mYW1mYW0tZmxhZ3Muam17d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC0xMzNweH0uZmFtZmFtZmFtLWZsYWdzLmpve3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotODBweCAtMTMzcHh9LmZhbWZhbWZhbS1mbGFncy5qcHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTk2cHggLTEzM3B4fS5mYW1mYW1mYW0tZmxhZ3Mua2V7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtMTMzcHh9LmZhbWZhbWZhbS1mbGFncy5rZ3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC0xMzNweH0uZmFtZmFtZmFtLWZsYWdzLmtoe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggMH0uZmFtZmFtZmFtLWZsYWdzLmtpe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTExcHh9LmZhbWZhbWZhbS1mbGFncy5rbXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE0NHB4IC0yMnB4fS5mYW1mYW1mYW0tZmxhZ3Mua257d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDRweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLmtwe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5rcnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE0NHB4IC01NXB4fS5mYW1mYW1mYW0tZmxhZ3Mua3d7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDRweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLmFle3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTc3cHh9LmZhbWZhbWZhbS1mbGFncy5rent3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE0NHB4IC04OHB4fS5mYW1mYW1mYW0tZmxhZ3MubGF7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDRweCAtOTlweH0uZmFtZmFtZmFtLWZsYWdzLmxie3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTExMHB4fS5mYW1mYW1mYW0tZmxhZ3MubGN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDRweCAtMTIxcHh9LmZhbWZhbWZhbS1mbGFncy5saXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE0NHB4IC0xMzJweH0uZmFtZmFtZmFtLWZsYWdzLmxre3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjowIC0xNDRweH0uZmFtZmFtZmFtLWZsYWdzLmxye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTZweCAtMTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5sc3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTMycHggLTE0NHB4fS5mYW1mYW1mYW0tZmxhZ3MubHR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00OHB4IC0xNDRweH0uZmFtZmFtZmFtLWZsYWdzLmx1e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNjRweCAtMTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5sdnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTgwcHggLTE0NHB4fS5mYW1mYW1mYW0tZmxhZ3MubHl7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi05NnB4IC0xNDRweH0uZmFtZmFtZmFtLWZsYWdzLm1he3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTEycHggLTE0NHB4fS5mYW1mYW1mYW0tZmxhZ3MubWN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMjhweCAtMTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5tZHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE0NHB4IC0xNDRweH0uZmFtZmFtZmFtLWZsYWdzLmFke3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggMH0uZmFtZmFtZmFtLWZsYWdzLm1ne3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggLTExcHh9LmZhbWZhbWZhbS1mbGFncy5taHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2MHB4IC0yMnB4fS5mYW1mYW1mYW0tZmxhZ3MubWt7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLm1se3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggLTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5tbXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2MHB4IC01NXB4fS5mYW1mYW1mYW0tZmxhZ3MubW57d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLm1ve3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggLTc3cHh9LmZhbWZhbWZhbS1mbGFncy5tcHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2MHB4IC04OHB4fS5mYW1mYW1mYW0tZmxhZ3MubXF7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtOTlweH0uZmFtZmFtZmFtLWZsYWdzLm1ye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggLTExMHB4fS5mYW1mYW1mYW0tZmxhZ3MubXN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtMTIxcHh9LmZhbWZhbWZhbS1mbGFncy5tdHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2MHB4IC0xMzJweH0uZmFtZmFtZmFtLWZsYWdzLm11e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwcHggLTE0M3B4fS5mYW1mYW1mYW0tZmxhZ3MubXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTE1NXB4fS5mYW1mYW1mYW0tZmxhZ3MubXd7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0xNTVweH0uZmFtZmFtZmFtLWZsYWdzLm14e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtMTU1cHh9LmZhbWZhbWZhbS1mbGFncy5teXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggLTE1NXB4fS5mYW1mYW1mYW0tZmxhZ3MubXp7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC0xNTVweH0uZmFtZmFtZmFtLWZsYWdzLm5he3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotODBweCAtMTU1cHh9LmZhbWZhbWZhbS1mbGFncy5uY3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTk2cHggLTE1NXB4fS5mYW1mYW1mYW0tZmxhZ3MubmV7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtMTU1cHh9LmZhbWZhbWZhbS1mbGFncy5uZnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC0xNTVweH0uZmFtZmFtZmFtLWZsYWdzLm5ne3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTE1NXB4fS5mYW1mYW1mYW0tZmxhZ3Mubml7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtMTU1cHh9LmZhbWZhbWZhbS1mbGFncy5icSwuZmFtZmFtZmFtLWZsYWdzLm5se3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggMH0uZmFtZmFtZmFtLWZsYWdzLm5ve3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTExcHh9LmZhbWZhbWZhbS1mbGFncy56YXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC0yMnB4fS5mYW1mYW1mYW0tZmxhZ3MubnJ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNzZweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLm51e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5uent3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC01NXB4fS5mYW1mYW1mYW0tZmxhZ3Mub217d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNzZweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLnBhe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTc3cHh9LmZhbWZhbWZhbS1mbGFncy5wZXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC04OHB4fS5mYW1mYW1mYW0tZmxhZ3MucGZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNzZweCAtOTlweH0uZmFtZmFtZmFtLWZsYWdzLnBne3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTExMHB4fS5mYW1mYW1mYW0tZmxhZ3MucGh7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNzZweCAtMTIxcHh9LmZhbWZhbWZhbS1mbGFncy5wa3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC0xMzJweH0uZmFtZmFtZmFtLWZsYWdzLnBse3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTE0M3B4fS5mYW1mYW1mYW0tZmxhZ3MucG17d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNzZweCAtMTU0cHh9LmZhbWZhbWZhbS1mbGFncy5wbnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246MCAtMTY2cHh9LmZhbWZhbWZhbS1mbGFncy5wcnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2cHggLTE2NnB4fS5mYW1mYW1mYW0tZmxhZ3MucHN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0zMnB4IC0xNjZweH0uZmFtZmFtZmFtLWZsYWdzLnB0e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotNDhweCAtMTY2cHh9LmZhbWZhbWZhbS1mbGFncy5wd3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTY0cHggLTE2NnB4fS5mYW1mYW1mYW0tZmxhZ3MucHl7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xNjZweH0uZmFtZmFtZmFtLWZsYWdzLnFhe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotOTZweCAtMTY2cHh9LmZhbWZhbWZhbS1mbGFncy5yZXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTExMnB4IC0xNjZweH0uZmFtZmFtZmFtLWZsYWdzLnJve3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI4cHggLTE2NnB4fS5mYW1mYW1mYW0tZmxhZ3MucnN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDRweCAtMTY2cHh9LmZhbWZhbWZhbS1mbGFncy5ydXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE2MHB4IC0xNjZweH0uZmFtZmFtZmFtLWZsYWdzLnJ3e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTc2cHggLTE2NnB4fS5mYW1mYW1mYW0tZmxhZ3Muc2F7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTE3N3B4fS5mYW1mYW1mYW0tZmxhZ3Muc2J7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0xNzdweH0uZmFtZmFtZmFtLWZsYWdzLnNje3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtMTc3cHh9LmZhbWZhbWZhbS1mbGFncy5zY290bGFuZHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggLTE3N3B4fS5mYW1mYW1mYW0tZmxhZ3Muc2R7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC0xNzdweH0uZmFtZmFtZmFtLWZsYWdzLnNle3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotODBweCAtMTc3cHh9LmZhbWZhbWZhbS1mbGFncy5zZ3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTk2cHggLTE3N3B4fS5mYW1mYW1mYW0tZmxhZ3Muc2h7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtMTc3cHh9LmZhbWZhbWZhbS1mbGFncy5zaXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC0xNzdweH0uZmFtZmFtZmFtLWZsYWdzLnNqe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTE3N3B4fS5mYW1mYW1mYW0tZmxhZ3Muc2t7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtMTc3cHh9LmZhbWZhbWZhbS1mbGFncy5zbHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC0xNzdweH0uZmFtZmFtZmFtLWZsYWdzLnNte3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggMH0uZmFtZmFtZmFtLWZsYWdzLnNue3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTExcHh9LmZhbWZhbWZhbS1mbGFncy5zb3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE5MnB4IC0yMnB4fS5mYW1mYW1mYW0tZmxhZ3Muc3J7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xOTJweCAtMzNweH0uZmFtZmFtZmFtLWZsYWdzLnN0e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTQ0cHh9LmZhbWZhbWZhbS1mbGFncy5zdnt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE5MnB4IC01NXB4fS5mYW1mYW1mYW0tZmxhZ3Muc3l7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xOTJweCAtNjZweH0uZmFtZmFtZmFtLWZsYWdzLnN6e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTc3cHh9LmZhbWZhbWZhbS1mbGFncy50Y3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE5MnB4IC04OHB4fS5mYW1mYW1mYW0tZmxhZ3MudGR7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xOTJweCAtOTlweH0uZmFtZmFtZmFtLWZsYWdzLnRme3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTExMHB4fS5mYW1mYW1mYW0tZmxhZ3MudGd7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xOTJweCAtMTIxcHh9LmZhbWZhbWZhbS1mbGFncy50aHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE5MnB4IC0xMzJweH0uZmFtZmFtZmFtLWZsYWdzLnRqe3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTE0M3B4fS5mYW1mYW1mYW0tZmxhZ3MudGt7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xOTJweCAtMTU0cHh9LmZhbWZhbWZhbS1mbGFncy50bHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE5MnB4IC0xNjVweH0uZmFtZmFtZmFtLWZsYWdzLnRte3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTE3NnB4fS5mYW1mYW1mYW0tZmxhZ3MudG57d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgLTE4OHB4fS5mYW1mYW1mYW0tZmxhZ3MudG97d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNnB4IC0xODhweH0uZmFtZmFtZmFtLWZsYWdzLnRye3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzJweCAtMTg4cHh9LmZhbWZhbWZhbS1mbGFncy50dHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTQ4cHggLTE4OHB4fS5mYW1mYW1mYW0tZmxhZ3MudHZ7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi02NHB4IC0xODhweH0uZmFtZmFtZmFtLWZsYWdzLnR3e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotODBweCAtMTg4cHh9LmZhbWZhbWZhbS1mbGFncy50ent3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTk2cHggLTE4OHB4fS5mYW1mYW1mYW0tZmxhZ3MudWF7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMTJweCAtMTg4cHh9LmZhbWZhbWZhbS1mbGFncy51Z3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTEyOHB4IC0xODhweH0uZmFtZmFtZmFtLWZsYWdzLnVte3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQ0cHggLTE4OHB4fS5mYW1mYW1mYW0tZmxhZ3MudXN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjBweCAtMTg4cHh9LmZhbWZhbWZhbS1mbGFncy51eXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTE3NnB4IC0xODhweH0uZmFtZmFtZmFtLWZsYWdzLnV6e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMTkycHggLTE4OHB4fS5mYW1mYW1mYW0tZmxhZ3MudmF7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAwfS5mYW1mYW1mYW0tZmxhZ3MudmN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAtMTFweH0uZmFtZmFtZmFtLWZsYWdzLnZle3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMjA4cHggLTIycHh9LmZhbWZhbWZhbS1mbGFncy52Z3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTIwOHB4IC0zM3B4fS5mYW1mYW1mYW0tZmxhZ3Mudml7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAtNDRweH0uZmFtZmFtZmFtLWZsYWdzLnZue3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMjA4cHggLTU1cHh9LmZhbWZhbWZhbS1mbGFncy52dXt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTIwOHB4IC02NnB4fS5mYW1mYW1mYW0tZmxhZ3Mud2FsZXN7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAtNzdweH0uZmFtZmFtZmFtLWZsYWdzLndme3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMjA4cHggLTg4cHh9LmZhbWZhbWZhbS1mbGFncy53c3t3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTIwOHB4IC05OXB4fS5mYW1mYW1mYW0tZmxhZ3MueWV7d2lkdGg6MTZweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAtMTEwcHh9LmZhbWZhbWZhbS1mbGFncy55dHt3aWR0aDoxNnB4O2hlaWdodDoxMXB4O2JhY2tncm91bmQtcG9zaXRpb246LTIwOHB4IC0xMjFweH0uZmFtZmFtZmFtLWZsYWdzLnp3e3dpZHRoOjE2cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMjA4cHggLTEzMnB4fS5mYW1mYW1mYW0tZmxhZ3MuY2h7d2lkdGg6MTFweDtoZWlnaHQ6MTFweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDhweCAtMTQzcHh9LmZhbWZhbWZhbS1mbGFncy5ucHt3aWR0aDo5cHg7aGVpZ2h0OjExcHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMjA4cHggLTE1NHB4fSJdfQ== */"

/***/ }),

/***/ "./node_modules/ng-select/fesm5/ng-select.js":
/*!***************************************************!*\
  !*** ./node_modules/ng-select/fesm5/ng-select.js ***!
  \***************************************************/
/*! exports provided: SELECT_VALUE_ACCESSOR, SelectComponent, SelectModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_VALUE_ACCESSOR", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SelectDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        /** @type {?} */
        var match = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            return _this.DIACRITICS[a] || a;
        });
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptionList = /** @class */ (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        }));
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "hasShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value === value;
        }));
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.value; }));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                option.selected = v.indexOf(option.value) > -1;
            }));
            this.updateHasSelected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.selected; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
        this.updateHasSelected();
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.selected = false;
        }));
        this._hasSelected = false;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.updateHasSelected = /**
     * @private
     * @return {?}
     */
    function () {
        this._hasSelected = this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.selected; }));
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.shown; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "filteredEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.shown && !option.disabled; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.shown = true;
        }));
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /** Util. **/
    /**
     * Util. *
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * Util. *
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.shown && option.selected;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) {
            return v === b[i];
        }));
    };
    return OptionList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(hostElement) {
        this.hostElement = hostElement;
        this.optionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionsListClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionsListClick.emit(null);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this.singleFilterFocus.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted) {
            /** @type {?} */
            var style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        /** @type {?} */
        var listHeight = list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'select-dropdown',
                    template: "<div\n    [ngClass]=\"{'below': isBelow, 'above': !isBelow}\"\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            autocomplete=\"off\"\n            [placeholder]=\"placeholder\"\n            (click)=\"onSingleFilterClick()\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\"\n            (focus)=\"onSingleFilterFocus()\">\n    </div>\n\n    <div class=\"options\"\n        (click)=\"onOptionsListClick()\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["select-dropdown,select-dropdown *{box-sizing:border-box}select-dropdown>div{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;position:absolute;z-index:1}select-dropdown>div.above{border-bottom:none}select-dropdown>div.below{border-top:none}select-dropdown>div .filter{padding:3px;width:100%}select-dropdown>div .filter input{border:1px solid #eee;box-sizing:border-box;padding:4px;width:100%}select-dropdown>div .options{max-height:200px;overflow-y:auto}select-dropdown>div .options ul{list-style:none;margin:0;padding:0}select-dropdown>div .options ul li{padding:4px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}select-dropdown .selected{background-color:#e0e0e0}select-dropdown .highlighted,select-dropdown .selected.highlighted{background-color:#2196f3;color:#fff}select-dropdown .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optionList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isBelow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optionClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        optionsListClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput', { static: false },] }],
        optionsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['optionsList', { static: true },] }]
    };
    return SelectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return SelectComponent; })),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.noOptionsFound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = [];
        this.optionList = new OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Keys. *
         */
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.handleInputChanges(changes);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowBlur = /**
     * @return {?}
     */
    function () {
        this._blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = /**
     * @return {?}
     */
    function () {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionListClicked = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterInputChanged.emit(term);
        this.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown(false);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Input change handling. **/
    /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.handleInputChanges = /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var optionsChanged = changes.hasOwnProperty('options');
        /** @type {?} */
        var noFilterChanged = changes.hasOwnProperty('noFilter');
        /** @type {?} */
        var placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
            this.updateState();
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterEnabled = /**
     * @private
     * @return {?}
     */
    function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateFilterWidth();
        }));
    };
    /** Select. **/
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.wrappedOption; })));
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            this.isOpen = true;
            this.updateWidth();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updatePosition();
                if (_this.multiple && _this.filterEnabled) {
                    _this.filterInput.nativeElement.focus();
                }
                _this.opened.emit(null);
            }));
        }
    };
    /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.filter = /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.openDropdown(); }));
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype._blur = /**
     * View. *
     * @return {?}
     */
    function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focus = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focusSelectContainer = /**
     * @return {?}
     */
    function () {
        this.selectionSpan.nativeElement.focus();
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.dropdown !== 'undefined') {
            /** @type {?} */
            var hostRect = this.hostElement.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var dropRect = this.dropdown.hostElement.nativeElement.firstElementChild.getBoundingClientRect();
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var top_1 = spanRect.top - hostRect.top;
            /** @type {?} */
            var bottom = hostRect.bottom + dropRect.height;
            this.isBelow = bottom < windowHeight;
            this.left = spanRect.left - hostRect.left;
            this.top = this.isBelow ? top_1 + spanRect.height : top_1 - dropRect.height;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<label\n    *ngIf=\"label !== ''\">\n    {{label}}\n</label>\n<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'above': !isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected\">\n            <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: optionList.selection[0].wrappedOption, onDeselectOptionClick: onDeselectOptionClick}\"></ng-container>\n            <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && optionList.hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            autocomplete=\"off\"\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onFilterInput($event.target.value)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"\n            (focus)=\"onMultipleFilterFocus()\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [placeholder]=\"filterPlaceholder\"\n    [isBelow]=\"isBelow\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    [optionTemplate]=\"optionTemplate\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (optionsListClick)=\"onOptionsListClick()\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterFocus)=\"onSingleFilterFocus()\"\n    (singleFilterInput)=\"onFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n",
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["ng-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}ng-select *{box-sizing:border-box}ng-select>div{border:1px solid #ddd;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}ng-select>div.disabled{background-color:#eee;color:#aaa;cursor:default;pointer-events:none}ng-select>div>div.single{display:flex;height:30px;width:100%}ng-select>div>div.single>div.placeholder,ng-select>div>div.single>div.value{flex:1;line-height:30px;overflow:hidden;padding:0 10px;white-space:nowrap}ng-select>div>div.single>div.placeholder{color:#757575}ng-select>div>div.single>div.clear,ng-select>div>div.single>div.toggle{color:#aaa;line-height:30px;text-align:center;width:30px}ng-select>div>div.single>div.clear:hover,ng-select>div>div.single>div.toggle:hover{background-color:#ececec}ng-select>div>div.single>div.clear{font-size:18px}ng-select>div>div.single>div.toggle{font-size:14px}ng-select>div>div.multiple{display:flex;flex-flow:row wrap;height:100%;min-height:30px;padding:0 10px;width:100%}ng-select>div>div.multiple>div.option{background-color:#eee;border:1px solid #aaa;border-radius:4px;color:#333;cursor:default;display:inline-block;flex-shrink:0;font-size:14px;line-height:22px;margin:3px 5px 3px 0;padding:0 4px}ng-select>div>div.multiple>div.option span.deselect-option{color:#aaa;cursor:pointer;font-size:14px;height:20px;line-height:20px}ng-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}ng-select>div>div.multiple input{background-color:transparent;border:none;cursor:pointer;height:30px;line-height:30px;padding:0}ng-select>div>div.multiple input:focus{outline:0}ng-select label{color:rgba(0,0,0,.38);display:block;font-size:13px;padding:4px 0}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        noFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        noOptionsFound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        filterInputChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectionSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['selection', { static: true },] }],
        dropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dropdown', { static: false },] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput', { static: false },] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['optionTemplate', { static: false },] }],
        onWindowBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:blur',] }],
        onWindowClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:click',] }],
        onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        SelectComponent,
                        SelectDropdownComponent
                    ],
                    exports: [
                        SelectComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                    ]
                },] }
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-select.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debounceTime = _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"];
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.distinctUntilChanged = _operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"];
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/do.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/do.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/do */ "./node_modules/rxjs-compat/_esm5/operator/do.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/first.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/first.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/first */ "./node_modules/rxjs-compat/_esm5/operator/first.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.first = _operator_first__WEBPACK_IMPORTED_MODULE_1__["first"];
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/debounceTime.js ***!
  \*****************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/distinctUntilChanged.js ***!
  \*************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return distinctUntilChanged; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function distinctUntilChanged(compare, keySelector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/do.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/do.js ***!
  \*******************************************************/
/*! exports provided: _do */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_do", function() { return _do; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _do(nextOrObserver, error, complete) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/first.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/first.js ***!
  \**********************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"].apply(void 0, args)(this);
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/switchMap.js ***!
  \**************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/demo/pages/form-elements/frm-select/frm-select-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/frm-select/frm-select-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: FrmSelectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmSelectRoutingModule", function() { return FrmSelectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frm_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frm-select.component */ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.ts");




var routes = [
    {
        path: '',
        component: _frm_select_component__WEBPACK_IMPORTED_MODULE_3__["FrmSelectComponent"]
    }
];
var FrmSelectRoutingModule = /** @class */ (function () {
    function FrmSelectRoutingModule() {
    }
    FrmSelectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FrmSelectRoutingModule);
    return FrmSelectRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/frm-select/frm-select.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Default select start -->\n    <app-card cardTitle=\"Default Select\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Default Select</h4>\n          <select name=\"select\" class=\"form-control form-control-default\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Primary Select</h4>\n          <select name=\"select\" class=\"form-control form-control-primary\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Success Select</h4>\n          <select name=\"select\" class=\"form-control form-control-success\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Info Select</h4>\n          <select name=\"select\" class=\"form-control form-control-info\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-3 m-b-30 \">\n          <h4 class=\"sub-title\">Warning Select</h4>\n          <select name=\"select\" class=\"form-control form-control-warning\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Danger Select</h4>\n          <select name=\"select\" class=\"form-control form-control-danger\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 \">\n          <h4 class=\"sub-title\">Inverse Select</h4>\n          <select name=\"select\" class=\"form-control form-control-inverse\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n      </div>\n    </app-card>\n\n    <app-card cardTitle=\"Default Select\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Single Select</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"> </ng-select>\n          <p class=\"m-t-10\"><code>ng-select</code> can take a regular select box like this...</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Multi Select</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [multiple]=\"true\"></ng-select>\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>multiple</code> attribute</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">With Placeholder</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [secondaryPlaceholder]=\"'Select your nice name'\" [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\"><code>tag-input</code> uses the <code>secondaryPlaceholder and placeholder</code> attribute on multiple select boxes</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Tagging Support</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the <code>tag-input and tag-input-dropdown</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">DIACRITICS SUPPORT</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">RTL Support</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the class<code>.tag-input-rtl</code></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">LIMITING THE NUMBER OF SELECTIONS</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [maxItems]=\"3\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input<code>maxItems</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">LOADING WITH ARRAY</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Select With Icon</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountry\">\n            <ng-template #optionTemplate let-option=\"option\">\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\n              {{option?.label}}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"col-sm-12 col-xl-6\">\n          <h4 class=\"sub-title\">Multiple Select With Icon</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [multiple]=\"true\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountries\">\n            <ng-template #optionTemplate let-option=\"option\">\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\n              {{option?.label}}\n            </ng-template>\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Loading options</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"characters\" [(ngModel)]=\"selectedCharacter\"></ng-select>\n          <p class=\"m-t-10\"><code>ng-select</code> with loading options</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Allow clear</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [allowClear]=\"true\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"></ng-select>\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>allowClear</code> attribute</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">With Placeholder</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [disabled]=\"isDisabled\" [(ngModel)]=\"selectedOption\"></ng-select>\n          <button [ngClass]=\"'btn btn-primary m-t-10'\" (click)=\"isDisabled = !isDisabled\">\n            <span *ngIf=\"!isDisabled\">Disable</span>\n            <span *ngIf=\"isDisabled\">Enable</span>\n          </button>\n          <p class=\"m-t-10\"><code>ng-select</code> uses the <code>disabled</code> attribute on multiple select boxes</p>\n        </div>\n      </div>\n    </app-card>\n\n    <app-card cardTitle=\"Multi-select\" [options]=\"false\">\n        <dual-list [sort]=\"keepSorted\" [source]=\"source\" [key]=\"key\" [display]=\"display\" [filter]=\"filter\"\n                   [(destination)]=\"confirmed\" height=\"265px\" [format]=\"format\" [disabled]=\"disabled\"></dual-list>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/frm-select/frm-select.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9mcm0tc2VsZWN0L2ZybS1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/frm-select/frm-select.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FrmSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmSelectComponent", function() { return FrmSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/angular-dual-listbox.es5.js");
/* harmony import */ var _theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/shared/components/select/select-option.service */ "./src/app/theme/shared/components/select/select-option.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm5/add/operator/first.js");












var FrmSelectComponent = /** @class */ (function () {
    function FrmSelectComponent(selectOptionService) {
        this.selectOptionService = selectOptionService;
        this.tab = 1;
        this.keepSorted = true;
        this.filter = false;
        this.userAdd = '';
        this.disabled = false;
        this.sourceLeft = true;
        this.format = angular_dual_listbox__WEBPACK_IMPORTED_MODULE_2__["DualListComponent"].DEFAULT_FORMAT;
        this.arrayType = [
            { name: 'Rio Grande', detail: '(object array)', value: 'station' },
            { name: 'Chessmen', detail: '(object array)', value: 'chess' },
            { name: 'Underground', detail: '(string array)', value: 'tube' }
        ];
        this.type = this.arrayType[0].value;
        this.stations = [
            { key: 1, station: 'Antonito', state: 'CO' },
            { key: 2, station: 'Big Horn', state: 'NM' },
            { key: 3, station: 'Sublette', state: 'NM' },
            { key: 4, station: 'Toltec', state: 'NM' },
            { key: 5, station: 'Osier', state: 'CO' },
            { key: 6, station: 'Chama', state: 'NM' },
            { key: 7, station: 'Monero', state: 'NM' },
            { key: 8, station: 'Lumberton', state: 'NM' },
            { key: 9, station: 'Duice', state: 'NM' },
            { key: 10, station: 'Navajo', state: 'NM' },
            { key: 11, station: 'Juanita', state: 'CO' },
            { key: 12, station: 'Pagosa Jct', state: 'CO' },
            { key: 13, station: 'Carracha', state: 'CO' },
            { key: 14, station: 'Arboles', state: 'CO' },
            { key: 15, station: 'Solidad', state: 'CO' },
            { key: 16, station: 'Tiffany', state: 'CO' },
            { key: 17, station: 'La Boca', state: 'CO' },
            { key: 18, station: 'Ignacio', state: 'CO' },
            { key: 19, station: 'Oxford', state: 'CO' },
            { key: 20, station: 'Florida', state: 'CO' },
            { key: 21, station: 'Bocea', state: 'CO' },
            { key: 22, station: 'Carbon Jct', state: 'CO' },
            { key: 23, station: 'Durango', state: 'CO' },
            { key: 24, station: 'Home Ranch', state: 'CO' },
            { key: 25, station: 'Trimble Springs', state: 'CO' },
            { key: 26, station: 'Hermosa', state: 'CO' },
            { key: 27, station: 'Rockwood', state: 'CO' },
            { key: 28, station: 'Tacoma', state: 'CO' },
            { key: 29, station: 'Needleton', state: 'CO' },
            { key: 30, station: 'Elk Park', state: 'CO' },
            { key: 31, station: 'Silverton', state: 'CO' },
            { key: 32, station: 'Eureka', state: 'CO' }
        ];
        this.chessmen = [
            { _id: 1, name: 'Pawn' },
            { _id: 2, name: 'Rook' },
            { _id: 3, name: 'Knight' },
            { _id: 4, name: 'Bishop' },
            { _id: 5, name: 'Queen' },
            { _id: 6, name: 'King' }
        ];
        this.tube = [
            'Harrow & Wealdstone',
            'Kenton',
            'South Kenton',
            'North Wembley',
            'Wembley Central',
            'Stonebridge Park',
            'Harlesden',
            'Willesden Junction',
            'Kensal Green',
            'Queens Park',
            'Kilburn Park',
            'Maida Vale',
            'Warwick Avenue',
            'Paddington',
            'Edgware Road',
            'Marylebone',
            'Baker Street',
            'Regents Park',
            'Oxford Circus',
            'Piccadilly Circus',
            'Charing Cross',
            'Embankment',
            'Waterloo',
            'Lambeth North',
            'Elephant & Castle'
        ];
        this.simpleOption = this.selectOptionService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.countries = this.selectOptionService.getCountries();
        this.selectedCountry = 'IN';
        this.selectedCountries = ['IN', 'BE', 'LU', 'NL'];
        this.dataSub = null;
        this.autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
        this.autocompleteItemsAsObjects = [
            { value: 'Alabama', id: 0 },
            { value: 'Wyoming', id: 1 },
            { value: 'Coming', id: 2 },
            { value: 'Josephin Doe', id: 3 },
            { value: 'Henry Die', id: 4 },
            { value: 'Lary Doe', id: 5 },
            { value: 'Alice', id: 6 },
            { value: 'Alia', id: 7 },
            { value: 'Suzen', id: 8 },
            { value: 'Michael Scofield', id: 9 },
            { value: 'Irina Shayk', id: 10 },
            { value: 'Sara Tancredi', id: 11 },
            { value: 'Daizy Mendize', id: 12 },
            { value: 'Loren Scofield', id: 13 },
            { value: 'Shayk', id: 14 },
            { value: 'Sara', id: 15 },
            { value: 'Doe', id: 16 },
            { value: 'Lary', id: 17 },
            { value: 'Roni Sommerfield', id: 18 },
            { value: 'Mickey Amavisca', id: 19 },
            { value: 'Dorethea Hennigan', id: 20 },
            { value: 'Marisha Haughey', id: 21 },
            { value: 'Justin Czajkowski', id: 22 },
            { value: 'Reyes Hodges', id: 23 },
            { value: 'Vicky Hadley', id: 24 },
            { value: 'Lezlie Baumert', id: 25 },
            { value: 'Otha Vanorden', id: 26 },
            { value: 'Glayds Inabinet', id: 27 },
            { value: 'Hang Owsley', id: 28 },
            { value: 'Carlotta Buttner', id: 29 },
            { value: 'Randa Vanloan', id: 30 },
            { value: 'Elana Fulk', id: 31 },
            { value: 'Amos Spearman', id: 32 },
            { value: 'Samon', id: 33 },
            { value: 'John Doe', id: 34 }
        ];
    }
    FrmSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doReset();
        this.runTimer();
        this.dataSub = this.selectOptionService.loadCharacters().subscribe(function (options) {
            _this.characters = options;
        });
    };
    FrmSelectComponent.prototype.ngOnDestroy = function () {
        if (this.dataSub !== null) {
            this.dataSub.unsubscribe();
        }
    };
    FrmSelectComponent.prototype.runTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            _this.timeLeft -= 1;
            if (_this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
    FrmSelectComponent.prototype.stationLabel = function (item) {
        return item.station + ', ' + item.state;
    };
    FrmSelectComponent.prototype.useStations = function () {
        this.key = 'key';
        this.display = this.stationLabel;
        this.keepSorted = true;
        this.source = this.sourceStations;
        this.confirmed = this.confirmedStations;
    };
    FrmSelectComponent.prototype.useChessmen = function () {
        this.key = '_id';
        this.display = 'name';
        this.keepSorted = false;
        this.source = this.sourceChessmen;
        this.confirmed = this.confirmedChessmen;
    };
    FrmSelectComponent.prototype.useTube = function () {
        this.key = undefined;
        this.display = undefined;
        this.keepSorted = false;
        this.source = this.sourceTube;
        this.confirmed = this.confirmedTube;
    };
    FrmSelectComponent.prototype.swapSource = function () {
        switch (this.type) {
            case this.arrayType[0].value:
                this.useStations();
                break;
            case this.arrayType[1].value:
                this.useChessmen();
                break;
            case this.arrayType[2].value:
                this.useTube();
                break;
        }
    };
    FrmSelectComponent.prototype.doReset = function () {
        this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
        this.sourceStations = JSON.parse(JSON.stringify(this.stations));
        this.sourceTube = JSON.parse(JSON.stringify(this.tube));
        this.confirmedChessmen = new Array();
        this.confirmedStations = new Array();
        this.confirmedTube = new Array();
        // Preconfirm some items.
        this.confirmedStations.push(this.stations[31]);
        this.confirmedTube.push(this.tube[13]);
        this.confirmedTube.push(this.tube[23]);
        switch (this.type) {
            case this.arrayType[0].value:
                this.useStations();
                break;
            case this.arrayType[1].value:
                this.useChessmen();
                break;
            case this.arrayType[2].value:
                this.useTube();
                break;
        }
    };
    FrmSelectComponent.prototype.doDelete = function () {
        if (this.source.length > 0) {
            this.source.splice(0, 1);
        }
    };
    FrmSelectComponent.prototype.doCreate = function () {
        if (typeof this.source[0] === 'object') {
            var o = {};
            o[this.key] = this.source.length + 1;
            o[this.display] = this.userAdd;
            this.source.push(o);
        }
        else {
            this.source.push(this.userAdd);
        }
        this.userAdd = '';
    };
    FrmSelectComponent.prototype.doAdd = function () {
        var _loop_1 = function (i, len) {
            var o = this_1.source[i];
            var found = this_1.confirmed.find(function (e) { return e === o; });
            if (!found) {
                this_1.confirmed.push(o);
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0, len = this.source.length; i < len; i += 1) {
            var state_1 = _loop_1(i, len);
            if (state_1 === "break")
                break;
        }
    };
    FrmSelectComponent.prototype.doRemove = function () {
        if (this.confirmed.length > 0) {
            this.confirmed.splice(0, 1);
        }
    };
    FrmSelectComponent.prototype.doFilter = function () {
        this.filter = !this.filter;
    };
    FrmSelectComponent.prototype.filterBtn = function () {
        return (this.filter ? 'Hide Filter' : 'Show Filter');
    };
    FrmSelectComponent.prototype.doDisable = function () {
        this.disabled = !this.disabled;
    };
    FrmSelectComponent.prototype.disableBtn = function () {
        return (this.disabled ? 'Enable' : 'Disabled');
    };
    FrmSelectComponent.prototype.swapDirection = function () {
        this.sourceLeft = !this.sourceLeft;
        this.format.direction = this.sourceLeft ? angular_dual_listbox__WEBPACK_IMPORTED_MODULE_2__["DualListComponent"].LTR : angular_dual_listbox__WEBPACK_IMPORTED_MODULE_2__["DualListComponent"].RTL;
    };
    FrmSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frm-select',
            template: __webpack_require__(/*! ./frm-select.component.html */ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.html"),
            styles: [__webpack_require__(/*! ./frm-select.component.scss */ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.scss"), __webpack_require__(/*! ../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css */ "./node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__["SelectOptionService"]])
    ], FrmSelectComponent);
    return FrmSelectComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/form-elements/frm-select/frm-select.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/frm-select/frm-select.module.ts ***!
  \**************************************************************************/
/*! exports provided: FrmSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmSelectModule", function() { return FrmSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frm_select_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frm-select-routing.module */ "./src/app/demo/pages/form-elements/frm-select/frm-select-routing.module.ts");
/* harmony import */ var _frm_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frm-select.component */ "./src/app/demo/pages/form-elements/frm-select/frm-select.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/angular-dual-listbox.es5.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../theme/shared/components/select/select-option.service */ "./src/app/theme/shared/components/select/select-option.service.ts");










var FrmSelectModule = /** @class */ (function () {
    function FrmSelectModule() {
    }
    FrmSelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _frm_select_routing_module__WEBPACK_IMPORTED_MODULE_3__["FrmSelectRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__["AngularDualListBoxModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                ng_select__WEBPACK_IMPORTED_MODULE_8__["SelectModule"]
            ],
            declarations: [_frm_select_component__WEBPACK_IMPORTED_MODULE_4__["FrmSelectComponent"]],
            providers: [_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_9__["SelectOptionService"]]
        })
    ], FrmSelectModule);
    return FrmSelectModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/select/select-option.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/shared/components/select/select-option.service.ts ***!
  \*************************************************************************/
/*! exports provided: SelectOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionService", function() { return SelectOptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");



var SelectOptionService = /** @class */ (function () {
    function SelectOptionService() {
    }
    SelectOptionService_1 = SelectOptionService;
    SelectOptionService.prototype.getCharacters = function () {
        return this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.loadCharacters = function () {
        return this.loadOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.getCharactersWithDisabled = function () {
        var characters = this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    };
    SelectOptionService.prototype.getCountries = function () {
        return this.cloneOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadCountries = function () {
        return this.loadOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadOptions = function (options) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            setTimeout(function () {
                obs.next(_this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    };
    SelectOptionService.prototype.cloneOptions = function (options) {
        return options.map(function (option) { return ({ value: option.value, label: option.label }); });
    };
    var SelectOptionService_1;
    SelectOptionService.PLAYER_ONE = [
        { value: '0', label: 'Alabama' },
        { value: '1', label: 'Wyoming' },
        { value: '2', label: 'Coming' },
        { value: '3', label: 'Henry Die' },
        { value: '4', label: 'John Doe' }
    ];
    SelectOptionService.COUNTRIES = [
        { value: 'AF', label: 'Afghanistan' },
        { value: 'AX', label: 'Åland Islands' },
        { value: 'AL', label: 'Albania' },
        { value: 'DZ', label: 'Algeria' },
        { value: 'AS', label: 'American Samoa' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguilla' },
        { value: 'AQ', label: 'Antarctica' },
        { value: 'AG', label: 'Antigua and Barbuda' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BY', label: 'Belarus' },
        { value: 'BE', label: 'Belgium' },
        { value: 'BZ', label: 'Belize' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermuda' },
        { value: 'BT', label: 'Bhutan' },
        { value: 'BO', label: 'Bolivia, Plurinational State of' },
        { value: 'BA', label: 'Bosnia and Herzegovina' },
        { value: 'BW', label: 'Botswana' },
        { value: 'BV', label: 'Bouvet Island' },
        { value: 'BR', label: 'Brazil' },
        { value: 'IO', label: 'British Indian Ocean Territory' },
        { value: 'BN', label: 'Brunei Darussalam' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'KH', label: 'Cambodia' },
        { value: 'CM', label: 'Cameroon' },
        { value: 'CA', label: 'Canada' },
        { value: 'CV', label: 'Cape Verde' },
        { value: 'KY', label: 'Cayman Islands' },
        { value: 'CF', label: 'Central African Republic' },
        { value: 'TD', label: 'Chad' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CX', label: 'Christmas Island' },
        { value: 'CC', label: 'Cocos (Keeling) Islands' },
        { value: 'CO', label: 'Colombia' },
        { value: 'KM', label: 'Comoros' },
        { value: 'CG', label: 'Congo' },
        { value: 'CD', label: 'Congo, the Democratic Republic of the' },
        { value: 'CK', label: 'Cook Islands' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'CI', label: 'Côte d\'Ivoire' },
        { value: 'HR', label: 'Croatia' },
        { value: 'CU', label: 'Cuba' },
        { value: 'CY', label: 'Cyprus' },
        { value: 'CZ', label: 'Czech Republic' },
        { value: 'DK', label: 'Denmark' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'DM', label: 'Dominica' },
        { value: 'DO', label: 'Dominican Republic' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egypt' },
        { value: 'SV', label: 'El Salvador' },
        { value: 'GQ', label: 'Equatorial Guinea' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Ethiopia' },
        { value: 'FK', label: 'Falkland Islands (Malvinas)' },
        { value: 'FO', label: 'Faroe Islands' },
        { value: 'FJ', label: 'Fiji' },
        { value: 'FI', label: 'Finland' },
        { value: 'FR', label: 'France' },
        { value: 'GF', label: 'French Guiana' },
        { value: 'PF', label: 'French Polynesia' },
        { value: 'TF', label: 'French Southern Territories' },
        { value: 'GA', label: 'Gabon' },
        { value: 'GM', label: 'Gambia' },
        { value: 'GE', label: 'Georgia' },
        { value: 'DE', label: 'Germany' },
        { value: 'GH', label: 'Ghana' },
        { value: 'GI', label: 'Gibraltar' },
        { value: 'GR', label: 'Greece' },
        { value: 'GL', label: 'Greenland' },
        { value: 'GD', label: 'Grenada' },
        { value: 'GP', label: 'Guadeloupe' },
        { value: 'GU', label: 'Guam' },
        { value: 'GT', label: 'Guatemala' },
        { value: 'GG', label: 'Guernsey' },
        { value: 'GN', label: 'Guinea' },
        { value: 'GW', label: 'Guinea-Bissau' },
        { value: 'GY', label: 'Guyana' },
        { value: 'HT', label: 'Haiti' },
        { value: 'HM', label: 'Heard Island and McDonald Islands' },
        { value: 'VA', label: 'Holy See (Vatican City State)' },
        { value: 'HN', label: 'Honduras' },
        { value: 'HK', label: 'Hong Kong' },
        { value: 'HU', label: 'Hungary' },
        { value: 'IS', label: 'Iceland' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IR', label: 'Iran, Islamic Republic of' },
        { value: 'IQ', label: 'Iraq' },
        { value: 'IE', label: 'Ireland' },
        { value: 'IM', label: 'Isle of Man' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italy' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japan' },
        { value: 'JE', label: 'Jersey' },
        { value: 'JO', label: 'Jordan' },
        { value: 'KZ', label: 'Kazakhstan' },
        { value: 'KE', label: 'Kenya' },
        { value: 'KI', label: 'Kiribati' },
        { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
        { value: 'KR', label: 'Korea, Republic of' },
        { value: 'KW', label: 'Kuwait' },
        { value: 'KG', label: 'Kyrgyzstan' },
        { value: 'LA', label: 'Lao People\'s Democratic Republic' },
        { value: 'LV', label: 'Latvia' },
        { value: 'LB', label: 'Lebanon' },
        { value: 'LS', label: 'Lesotho' },
        { value: 'LR', label: 'Liberia' },
        { value: 'LY', label: 'Libyan Arab Jamahiriya' },
        { value: 'LI', label: 'Liechtenstein' },
        { value: 'LT', label: 'Lithuania' },
        { value: 'LU', label: 'Luxembourg' },
        { value: 'MO', label: 'Macao' },
        { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
        { value: 'MG', label: 'Madagascar' },
        { value: 'MW', label: 'Malawi' },
        { value: 'MY', label: 'Malaysia' },
        { value: 'MV', label: 'Maldives' },
        { value: 'ML', label: 'Mali' },
        { value: 'MT', label: 'Malta' },
        { value: 'MH', label: 'Marshall Islands' },
        { value: 'MQ', label: 'Martinique' },
        { value: 'MR', label: 'Mauritania' },
        { value: 'MU', label: 'Mauritius' },
        { value: 'YT', label: 'Mayotte' },
        { value: 'MX', label: 'Mexico' },
        { value: 'FM', label: 'Micronesia, Federated States of' },
        { value: 'MD', label: 'Moldova, Republic of' },
        { value: 'MC', label: 'Monaco' },
        { value: 'MN', label: 'Mongolia' },
        { value: 'ME', label: 'Montenegro' },
        { value: 'MS', label: 'Montserrat' },
        { value: 'MA', label: 'Morocco' },
        { value: 'MZ', label: 'Mozambique' },
        { value: 'MM', label: 'Myanmar' },
        { value: 'NA', label: 'Namibia' },
        { value: 'NR', label: 'Nauru' },
        { value: 'NP', label: 'Nepal' },
        { value: 'NL', label: 'Netherlands' },
        { value: 'AN', label: 'Netherlands Antilles' },
        { value: 'NC', label: 'New Caledonia' },
        { value: 'NZ', label: 'New Zealand' },
        { value: 'NI', label: 'Nicaragua' },
        { value: 'NE', label: 'Niger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'NU', label: 'Niue' },
        { value: 'NF', label: 'Norfolk Island' },
        { value: 'MP', label: 'Northern Mariana Islands' },
        { value: 'NO', label: 'Norway' },
        { value: 'OM', label: 'Oman' },
        { value: 'PK', label: 'Pakistan' },
        { value: 'PW', label: 'Palau' },
        { value: 'PS', label: 'Palestinian Territory, Occupied' },
        { value: 'PA', label: 'Panama' },
        { value: 'PG', label: 'Papua New Guinea' },
        { value: 'PY', label: 'Paraguay' },
        { value: 'PE', label: 'Peru' },
        { value: 'PH', label: 'Philippines' },
        { value: 'PN', label: 'Pitcairn' },
        { value: 'PL', label: 'Poland' },
        { value: 'PT', label: 'Portugal' },
        { value: 'PR', label: 'Puerto Rico' },
        { value: 'QA', label: 'Qatar' },
        { value: 'RE', label: 'R&eacute;union' },
        { value: 'RO', label: 'Romania' },
        { value: 'RU', label: 'Russian Federation' },
        { value: 'RW', label: 'Rwanda' },
        { value: 'BL', label: 'Saint Barth&eacute;lemy' },
        { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
        { value: 'KN', label: 'Saint Kitts and Nevis' },
        { value: 'LC', label: 'Saint Lucia' },
        { value: 'MF', label: 'Saint Martin (French part)' },
        { value: 'PM', label: 'Saint Pierre and Miquelon' },
        { value: 'VC', label: 'Saint Vincent and the Grenadines' },
        { value: 'WS', label: 'Samoa' },
        { value: 'SM', label: 'San Marino' },
        { value: 'ST', label: 'Sao Tome and Principe' },
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'SN', label: 'Senegal' },
        { value: 'RS', label: 'Serbia' },
        { value: 'SC', label: 'Seychelles' },
        { value: 'SL', label: 'Sierra Leone' },
        { value: 'SG', label: 'Singapore' },
        { value: 'SK', label: 'Slovakia' },
        { value: 'SI', label: 'Slovenia' },
        { value: 'SB', label: 'Solomon Islands' },
        { value: 'SO', label: 'Somalia' },
        { value: 'ZA', label: 'South Africa' },
        { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
        { value: 'ES', label: 'Spain' },
        { value: 'LK', label: 'Sri Lanka' },
        { value: 'SD', label: 'Sudan' },
        { value: 'SR', label: 'Suriname' },
        { value: 'SJ', label: 'Svalbard and Jan Mayen' },
        { value: 'SZ', label: 'Swaziland' },
        { value: 'SE', label: 'Sweden' },
        { value: 'CH', label: 'Switzerland' },
        { value: 'SY', label: 'Syrian Arab Republic' },
        { value: 'TW', label: 'Taiwan, Province of China' },
        { value: 'TJ', label: 'Tajikistan' },
        { value: 'TZ', label: 'Tanzania, United Republic of' },
        { value: 'TH', label: 'Thailand' },
        { value: 'TL', label: 'Timor-Leste' },
        { value: 'TG', label: 'Togo' },
        { value: 'TK', label: 'Tokelau' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad and Tobago' },
        { value: 'TN', label: 'Tunisia' },
        { value: 'TR', label: 'Turkey' },
        { value: 'TM', label: 'Turkmenistan' },
        { value: 'TC', label: 'Turks and Caicos Islands' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UG', label: 'Uganda' },
        { value: 'UA', label: 'Ukraine' },
        { value: 'AE', label: 'United Arab Emirates' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'US', label: 'United States' },
        { value: 'UM', label: 'United States Minor Outlying Islands' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistan' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
        { value: 'VN', label: 'Viet Nam' },
        { value: 'VG', label: 'Virgin Islands, British' },
        { value: 'VI', label: 'Virgin Islands, U.S.' },
        { value: 'WF', label: 'Wallis and Futuna' },
        { value: 'EH', label: 'Western Sahara' },
        { value: 'YE', label: 'Yemen' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabwe' }
    ];
    SelectOptionService = SelectOptionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SelectOptionService);
    return SelectOptionService;
}());



/***/ })

}]);
//# sourceMappingURL=frm-select-frm-select-module.js.map