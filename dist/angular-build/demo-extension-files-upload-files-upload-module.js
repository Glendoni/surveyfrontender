(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-extension-files-upload-files-upload-module"],{

/***/ "./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js ***!
  \****************************************************************************/
/*! exports provided: FileSizeValidator, FileUploadAttributeComponent, FileUploadComponent, FileUploadControl, FileUploadIconComponent, FileUploadModule, FileUploadService, FileUploadTypes, FileUploadValidators, FilesAcceptDirective, FilesAcceptValidator, FilesLimitValidator, SimpleFileUploadComponent, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizeValidator", function() { return FileSizeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadAttributeComponent", function() { return FileUploadAttributeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadControl", function() { return FileUploadControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadIconComponent", function() { return FileUploadIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadTypes", function() { return FileUploadTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadValidators", function() { return FileUploadValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesAcceptDirective", function() { return FilesAcceptDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesAcceptValidator", function() { return FilesAcceptValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesLimitValidator", function() { return FilesLimitValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFileUploadComponent", function() { return SimpleFileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FileUploadAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ZoomAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return InsertAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FileUploadListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function IsNullOrEmpty(value) {
    return value == null || value.length === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var STATUS = {
    INVALID: 0,
    VALID: 1,
    DISABLED: 2,
};
STATUS[STATUS.INVALID] = 'INVALID';
STATUS[STATUS.VALID] = 'VALID';
STATUS[STATUS.DISABLED] = 'DISABLED';
/** @enum {string} */
var FileEvent = {
    click: 'click',
    focus: 'focus',
    blur: 'blur',
};
var FileUploadControl = /** @class */ (function () {
    function FileUploadControl(validators) {
        this.files = new Set();
        this.listVisible = true;
        this.status = STATUS.VALID;
        this.errors = [];
        this.validators = [];
        this.statusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.eventsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.accept = null;
        this.acceptChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.accept);
        /**
         * track status `VALID`, `INVALID` or `DISABLED`
         */
        this.statusChanges = this.statusChanged.asObservable();
        /**
         * emit an event every time the value of the control
         * changes.
         * Initially returns last value
         */
        this.valueChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /**
         * \@internal
         * used to trigger layout change for list visibility
         */
        this.listVisibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.listVisible);
        /**
         * track changed on accept attribute
         */
        this.acceptChanges = this.acceptChanged.asObservable();
        /**
         * emit an event every time user programmatically ask for certain event
         */
        this.eventsChanges = this.eventsChanged.asObservable();
        this.defineValidators(validators);
    }
    /**
     * set functions that determines the synchronous validity of this control.
     */
    /**
     * set functions that determines the synchronous validity of this control.
     * @template THIS
     * @this {THIS}
     * @param {?} newValidators
     * @return {THIS}
     */
    FileUploadControl.prototype.setValidators = /**
     * set functions that determines the synchronous validity of this control.
     * @template THIS
     * @this {THIS}
     * @param {?} newValidators
     * @return {THIS}
     */
    function (newValidators) {
        (/** @type {?} */ (this)).defineValidators(newValidators);
        (/** @type {?} */ (this)).validate();
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} validators
     * @return {?}
     */
    FileUploadControl.prototype.defineValidators = /**
     * @private
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        if (!IsNullOrEmpty(validators)) {
            this.validators = Array.isArray(validators) ? Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(validators) : [validators];
        }
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} file
     * @return {THIS}
     */
    FileUploadControl.prototype.addFile = /**
     * @template THIS
     * @this {THIS}
     * @param {?} file
     * @return {THIS}
     */
    function (file) {
        (/** @type {?} */ (this)).files.add(file);
        (/** @type {?} */ (this)).validate();
        (/** @type {?} */ (this)).valueChanges.next(Array.from((/** @type {?} */ (this)).files.values()));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} file
     * @return {THIS}
     */
    FileUploadControl.prototype.removeFile = /**
     * @template THIS
     * @this {THIS}
     * @param {?} file
     * @return {THIS}
     */
    function (file) {
        (/** @type {?} */ (this)).files.delete(file);
        (/** @type {?} */ (this)).validate();
        (/** @type {?} */ (this)).valueChanges.next(Array.from((/** @type {?} */ (this)).files.values()));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} files
     * @return {THIS}
     */
    FileUploadControl.prototype.addFiles = /**
     * @template THIS
     * @this {THIS}
     * @param {?} files
     * @return {THIS}
     */
    function (files) {
        (/** @type {?} */ (this)).addMultipleFiles(Array.from(files));
        return (/** @type {?} */ (this));
    };
    /**
     * @internal
     * used to prevent valueChanges emit more times
     * when multiple files are uploaded
     */
    /**
     * \@internal
     * used to prevent valueChanges emit more times
     * when multiple files are uploaded
     * @private
     * @param {?} files
     * @return {?}
     */
    FileUploadControl.prototype.addMultipleFiles = /**
     * \@internal
     * used to prevent valueChanges emit more times
     * when multiple files are uploaded
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        files.forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return _this.files.add(file); }));
        this.validate();
        this.valueChanges.next(Array.from(this.files.values()));
    };
    Object.defineProperty(FileUploadControl.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errors.length === 0 && this.status !== STATUS.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadControl.prototype, "invalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errors.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileUploadControl.prototype.getError = /**
     * @return {?}
     */
    function () {
        return this.errors;
    };
    Object.defineProperty(FileUploadControl.prototype, "size", {
        /**
         * number of uploaded files
         */
        get: /**
         * number of uploaded files
         * @return {?}
         */
        function () {
            return this.files.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadControl.prototype, "value", {
        /**
         * return list of Files
         */
        get: /**
         * return list of Files
         * @return {?}
         */
        function () {
            return Array.from(this.files.values());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} files
     * @return {THIS}
     */
    FileUploadControl.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} files
     * @return {THIS}
     */
    function (files) {
        (/** @type {?} */ (this)).files.clear();
        if (files instanceof Array) {
            (/** @type {?} */ (this)).addMultipleFiles(files);
        }
        else {
            throw Error("FormControl.setValue was provided with wrong argument type, " + files + " was provided instead Array<File>");
        }
        return (/** @type {?} */ (this));
    };
    /**
     * reset the control
     */
    /**
     * reset the control
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    FileUploadControl.prototype.clear = /**
     * reset the control
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).files.clear();
        (/** @type {?} */ (this)).validate();
        (/** @type {?} */ (this)).valueChanges.next(Array.from((/** @type {?} */ (this)).files.values()));
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(FileUploadControl.prototype, "isListVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.listVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isVisible
     * @return {THIS}
     */
    FileUploadControl.prototype.setListVisibility = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isVisible
     * @return {THIS}
     */
    function (isVisible) {
        if (isVisible === void 0) { isVisible = true; }
        (/** @type {?} */ (this)).listVisible = isVisible;
        (/** @type {?} */ (this)).listVisibilityChanges.next((/** @type {?} */ (this)).listVisible);
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(FileUploadControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status === STATUS.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isEnabled
     * @return {THIS}
     */
    FileUploadControl.prototype.enable = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isEnabled
     * @return {THIS}
     */
    function (isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        (/** @type {?} */ (this)).status = isEnabled ? STATUS.VALID : STATUS.DISABLED;
        (/** @type {?} */ (this)).validate();
        (/** @type {?} */ (this)).statusChanged.next((/** @type {?} */ (this)).status);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isDisabled
     * @return {THIS}
     */
    FileUploadControl.prototype.disable = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} isDisabled
     * @return {THIS}
     */
    function (isDisabled) {
        if (isDisabled === void 0) { isDisabled = true; }
        (/** @type {?} */ (this)).status = isDisabled ? STATUS.DISABLED : STATUS.VALID;
        (/** @type {?} */ (this)).validate();
        (/** @type {?} */ (this)).statusChanged.next((/** @type {?} */ (this)).status);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    FileUploadControl.prototype.click = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).eventsChanged.next(FileEvent.click);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    FileUploadControl.prototype.focus = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).eventsChanged.next(FileEvent.focus);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    FileUploadControl.prototype.blur = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).eventsChanged.next(FileEvent.blur);
        return (/** @type {?} */ (this));
    };
    /**
     * specifies the types of files that the server accepts
     *
     * ### Example
     *
     * ```
     * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
     * ```
     *
     * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
     *
     */
    /**
     * specifies the types of files that the server accepts
     *
     * ### Example
     *
     * ```
     * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
     * ```
     *
     * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
     *
     * @template THIS
     * @this {THIS}
     * @param {?} accept
     * @return {THIS}
     */
    FileUploadControl.prototype.acceptFiles = /**
     * specifies the types of files that the server accepts
     *
     * ### Example
     *
     * ```
     * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
     * ```
     *
     * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
     *
     * @template THIS
     * @this {THIS}
     * @param {?} accept
     * @return {THIS}
     */
    function (accept) {
        (/** @type {?} */ (this)).accept = accept;
        (/** @type {?} */ (this)).acceptChanged.next((/** @type {?} */ (this)).accept);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    FileUploadControl.prototype.acceptAll = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).accept = null;
        (/** @type {?} */ (this)).acceptChanged.next((/** @type {?} */ (this)).accept);
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadControl.prototype.validate = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.status !== STATUS.DISABLED) {
            /** @type {?} */
            var currentState = this.valid;
            this.errors = this.validators.map((/**
             * @param {?} validator
             * @return {?}
             */
            function (validator) { return validator(_this); })).filter((/**
             * @param {?} isInvalid
             * @return {?}
             */
            function (isInvalid) { return isInvalid; }));
            if (currentState !== this.valid) {
                this.statusChanged.next(this.valid ? STATUS.VALID : STATUS.INVALID);
            }
        }
        else {
            this.errors.length = 0;
        }
    };
    return FileUploadControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FileUploadTypes = {
    arc: 'application/octet-stream',
    midi: 'audio/midi',
    ts: 'application/typescript',
    woff2: 'font/woff2',
    evy: 'application/envoy',
    fif: 'application/fractals',
    hta: 'application/hta',
    acx: 'application/internet-property-stream',
    dot: 'application/msword',
    dms: 'application/octet-stream',
    eps: 'application/postscript',
    ps: 'application/postscript',
    xla: 'application/vnd.ms-excel',
    xlc: 'application/vnd.ms-excel',
    xlm: 'application/vnd.ms-excel',
    xlt: 'application/vnd.ms-excel',
    xlw: 'application/vnd.ms-excel',
    msg: 'application/vnd.ms-outlook',
    sst: 'application/vnd.ms-pkicertstore',
    pot: 'application/vnd.ms-powerpoint',
    pps: 'application/vnd.ms-powerpoint',
    wcm: 'application/vnd.ms-works',
    wdb: 'application/vnd.ms-works',
    wks: 'application/vnd.ms-works',
    cdf: 'application/x-cdf',
    tgz: 'application/x-compressed',
    dcr: 'application/x-director',
    dxr: 'application/x-director',
    gz: 'application/x-gzip',
    ins: 'application/x-internet-signup',
    isp: 'application/x-internet-signup',
    iii: 'application/x-iphone',
    dll: 'application/x-msdownload',
    m13: 'application/x-msmediaview',
    m14: 'application/x-msmediaview',
    pma: 'application/x-perfmon',
    pmc: 'application/x-perfmon',
    pmr: 'application/x-perfmon',
    pmw: 'application/x-perfmon',
    pfx: 'application/x-pkcs12',
    spc: 'application/x-pkcs7-certificates',
    p7c: 'application/x-pkcs7-mime',
    texi: 'application/x-texinfo',
    roff: 'application/x-troff',
    tr: 'application/x-troff',
    man: 'application/x-troff-man',
    me: 'application/x-troff-me',
    ms: 'application/x-troff-ms',
    crt: 'application/x-x509-ca-cert',
    pko: 'application/ynd.ms-pkipko',
    snd: 'audio/basic',
    rmi: 'audio/mid',
    mp3: 'audio/mpeg',
    aifc: 'audio/x-aiff',
    aiff: 'audio/x-aiff',
    ra: 'audio/x-pn-realaudio',
    jpe: 'image/jpeg',
    jpeg: 'image/jpeg',
    jfif: 'image/pipeg',
    tif: 'image/tiff',
    mht: 'message/rfc822',
    mhtml: 'message/rfc822',
    nws: 'message/rfc822',
    htm: 'text/html',
    stm: 'text/html',
    uls: 'text/iuls',
    sct: 'text/scriptlet',
    htt: 'text/webviewhtml',
    htc: 'text/x-component',
    mp2: 'video/mpeg',
    mpa: 'video/mpeg',
    mpe: 'video/mpeg',
    mpg: 'video/mpeg',
    mpv2: 'video/mpeg',
    mov: 'video/quicktime',
    lsf: 'video/x-la-asf',
    lsx: 'video/x-la-asf',
    asr: 'video/x-ms-asf',
    asx: 'video/x-ms-asf',
    flr: 'x-world/x-vrml',
    vrml: 'x-world/x-vrml',
    wrz: 'x-world/x-vrml',
    xaf: 'x-world/x-vrml',
    xof: 'x-world/x-vrml',
    x3d: 'application/vnd.hzn-3d-crossword',
    '3gp': 'video/3gpp',
    '3g2': 'video/3gpp2',
    mseq: 'application/vnd.mseq',
    pwn: 'application/vnd.3m.post-it-notes',
    plb: 'application/vnd.3gpp.pic-bw-large',
    psb: 'application/vnd.3gpp.pic-bw-small',
    pvb: 'application/vnd.3gpp.pic-bw-var',
    tcap: 'application/vnd.3gpp2.tcap',
    '7z': 'application/x-7z-compressed',
    abw: 'application/x-abiword',
    ace: 'application/x-ace-compressed',
    acc: 'application/vnd.americandynamics.acc',
    acu: 'application/vnd.acucobol',
    atc: 'application/vnd.acucorp',
    adp: 'audio/adpcm',
    aab: 'application/x-authorware-bin',
    aam: 'application/x-authorware-map',
    aas: 'application/x-authorware-seg',
    air: 'application/vnd.adobe.air-application-installer-package+zip',
    swf: 'application/x-shockwave-flash',
    fxp: 'application/vnd.adobe.fxp',
    pdf: 'application/pdf',
    ppd: 'application/vnd.cups-ppd',
    dir: 'application/x-director',
    xdp: 'application/vnd.adobe.xdp+xml',
    xfdf: 'application/vnd.adobe.xfdf',
    aac: 'audio/x-aac',
    ahead: 'application/vnd.ahead.space',
    azf: 'application/vnd.airzip.filesecure.azf',
    azs: 'application/vnd.airzip.filesecure.azs',
    azw: 'application/vnd.amazon.ebook',
    ami: 'application/vnd.amiga.ami',
    apk: 'application/vnd.android.package-archive',
    cii: 'application/vnd.anser-web-certificate-issue-initiation',
    fti: 'application/vnd.anser-web-funds-transfer-initiation',
    atx: 'application/vnd.antix.game-component',
    dmg: 'application/x-apple-diskimage',
    mpkg: 'application/vnd.apple.installer+xml',
    aw: 'application/applixware',
    les: 'application/vnd.hhe.lesson-player',
    swi: 'application/vnd.aristanetworks.swi',
    s: 'text/x-asm',
    atomcat: 'application/atomcat+xml',
    atomsvc: 'application/atomsvc+xml',
    atom: 'application/atom+xml',
    ac: 'application/pkix-attr-cert',
    aif: 'audio/x-aiff',
    avi: 'video/x-msvideo',
    aep: 'application/vnd.audiograph',
    dxf: 'image/vnd.dxf',
    dwf: 'model/vnd.dwf',
    par: 'text/plain-bas',
    bcpio: 'application/x-bcpio',
    bin: 'application/octet-stream',
    bmp: 'image/bmp',
    torrent: 'application/x-bittorrent',
    cod: 'application/vnd.rim.cod',
    mpm: 'application/vnd.blueice.multipass',
    bmi: 'application/vnd.bmi',
    sh: 'application/x-sh',
    btif: 'image/prs.btif',
    rep: 'application/vnd.businessobjects',
    bz: 'application/x-bzip',
    bz2: 'application/x-bzip2',
    csh: 'application/x-csh',
    c: 'text/x-c',
    cdxml: 'application/vnd.chemdraw+xml',
    css: 'text/css',
    cdx: 'chemical/x-cdx',
    cml: 'chemical/x-cml',
    csml: 'chemical/x-csml',
    cdbcmsg: 'application/vnd.contact.cmsg',
    cla: 'application/vnd.claymore',
    c4g: 'application/vnd.clonk.c4group',
    sub: 'image/vnd.dvb.subtitle',
    cdmia: 'application/cdmi-capability',
    cdmic: 'application/cdmi-container',
    cdmid: 'application/cdmi-domain',
    cdmio: 'application/cdmi-object',
    cdmiq: 'application/cdmi-queue',
    c11amc: 'application/vnd.cluetrust.cartomobile-config',
    c11amz: 'application/vnd.cluetrust.cartomobile-config-pkg',
    ras: 'image/x-cmu-raster',
    dae: 'model/vnd.collada+xml',
    csv: 'text/csv',
    cpt: 'application/mac-compactpro',
    wmlc: 'application/vnd.wap.wmlc',
    cgm: 'image/cgm',
    ice: 'x-conference/x-cooltalk',
    cmx: 'image/x-cmx',
    xar: 'application/vnd.xara',
    cmc: 'application/vnd.cosmocaller',
    cpio: 'application/x-cpio',
    clkx: 'application/vnd.crick.clicker',
    clkk: 'application/vnd.crick.clicker.keyboard',
    clkp: 'application/vnd.crick.clicker.palette',
    clkt: 'application/vnd.crick.clicker.template',
    clkw: 'application/vnd.crick.clicker.wordbank',
    wbs: 'application/vnd.criticaltools.wbs+xml',
    cryptonote: 'application/vnd.rig.cryptonote',
    cif: 'chemical/x-cif',
    cmdf: 'chemical/x-cmdf',
    cu: 'application/cu-seeme',
    cww: 'application/prs.cww',
    curl: 'text/vnd.curl',
    dcurl: 'text/vnd.curl.dcurl',
    mcurl: 'text/vnd.curl.mcurl',
    scurl: 'text/vnd.curl.scurl',
    car: 'application/vnd.curl.car',
    pcurl: 'application/vnd.curl.pcurl',
    cmp: 'application/vnd.yellowriver-custom-menu',
    dssc: 'application/dssc+der',
    xdssc: 'application/dssc+xml',
    deb: 'application/x-debian-package',
    uva: 'audio/vnd.dece.audio',
    uvi: 'image/vnd.dece.graphic',
    uvh: 'video/vnd.dece.hd',
    uvm: 'video/vnd.dece.mobile',
    uvu: 'video/vnd.uvvu.mp4',
    uvp: 'video/vnd.dece.pd',
    uvs: 'video/vnd.dece.sd',
    uvv: 'video/vnd.dece.video',
    dvi: 'application/x-dvi',
    seed: 'application/vnd.fdsn.seed',
    dtb: 'application/x-dtbook+xml',
    res: 'application/x-dtbresource+xml',
    ait: 'application/vnd.dvb.ait',
    svc: 'application/vnd.dvb.service',
    eol: 'audio/vnd.digital-winds',
    djvu: 'image/vnd.djvu',
    dtd: 'application/xml-dtd',
    mlp: 'application/vnd.dolby.mlp',
    wad: 'application/x-doom',
    dpg: 'application/vnd.dpgraph',
    dra: 'audio/vnd.dra',
    dfac: 'application/vnd.dreamfactory',
    dts: 'audio/vnd.dts',
    dtshd: 'audio/vnd.dts.hd',
    dwg: 'image/vnd.dwg',
    geo: 'application/vnd.dynageo',
    es: 'application/ecmascript',
    mag: 'application/vnd.ecowin.chart',
    mmr: 'image/vnd.fujixerox.edmics-mmr',
    rlc: 'image/vnd.fujixerox.edmics-rlc',
    exi: 'application/exi',
    mgz: 'application/vnd.proteus.magazine',
    epub: 'application/epub+zip',
    eml: 'message/rfc822',
    nml: 'application/vnd.enliven',
    xpr: 'application/vnd.is-xpr',
    xif: 'image/vnd.xiff',
    xfdl: 'application/vnd.xfdl',
    emma: 'application/emma+xml',
    ez2: 'application/vnd.ezpix-album',
    ez3: 'application/vnd.ezpix-package',
    fst: 'image/vnd.fst',
    fvt: 'video/vnd.fvt',
    fbs: 'image/vnd.fastbidsheet',
    fe_launch: 'application/vnd.denovo.fcselayout-link',
    f4v: 'video/x-f4v',
    flv: 'video/x-flv',
    fpx: 'image/vnd.fpx',
    npx: 'image/vnd.net-fpx',
    flx: 'text/vnd.fmi.flexstor',
    fli: 'video/x-fli',
    ftc: 'application/vnd.fluxtime.clip',
    fdf: 'application/vnd.fdf',
    f: 'text/x-fortran',
    mif: 'application/vnd.mif',
    fm: 'application/vnd.framemaker',
    fh: 'image/x-freehand',
    fsc: 'application/vnd.fsc.weblaunch',
    fnc: 'application/vnd.frogans.fnc',
    ltf: 'application/vnd.frogans.ltf',
    ddd: 'application/vnd.fujixerox.ddd',
    xdw: 'application/vnd.fujixerox.docuworks',
    xbd: 'application/vnd.fujixerox.docuworks.binder',
    oas: 'application/vnd.fujitsu.oasys',
    oa2: 'application/vnd.fujitsu.oasys2',
    oa3: 'application/vnd.fujitsu.oasys3',
    fg5: 'application/vnd.fujitsu.oasysgp',
    bh2: 'application/vnd.fujitsu.oasysprs',
    spl: 'application/x-futuresplash',
    fzs: 'application/vnd.fuzzysheet',
    g3: 'image/g3fax',
    gmx: 'application/vnd.gmx',
    gtw: 'model/vnd.gtw',
    txd: 'application/vnd.genomatix.tuxedo',
    ggb: 'application/vnd.geogebra.file',
    ggt: 'application/vnd.geogebra.tool',
    gdl: 'model/vnd.gdl',
    gex: 'application/vnd.geometry-explorer',
    gxt: 'application/vnd.geonext',
    g2w: 'application/vnd.geoplan',
    g3w: 'application/vnd.geospace',
    gsf: 'application/x-font-ghostscript',
    bdf: 'application/x-font-bdf',
    gtar: 'application/x-gtar',
    texinfo: 'application/x-texinfo',
    gnumeric: 'application/x-gnumeric',
    kml: 'application/vnd.google-earth.kml+xml',
    kmz: 'application/vnd.google-earth.kmz',
    gqf: 'application/vnd.grafeq',
    gif: 'image/gif',
    gv: 'text/vnd.graphviz',
    gac: 'application/vnd.groove-account',
    ghf: 'application/vnd.groove-help',
    gim: 'application/vnd.groove-identity-message',
    grv: 'application/vnd.groove-injector',
    gtm: 'application/vnd.groove-tool-message',
    tpl: 'application/vnd.groove-tool-template',
    vcg: 'application/vnd.groove-vcard',
    h261: 'video/h261',
    h263: 'video/h263',
    h264: 'video/h264',
    hpid: 'application/vnd.hp-hpid',
    hps: 'application/vnd.hp-hps',
    hdf: 'application/x-hdf',
    rip: 'audio/vnd.rip',
    hbci: 'application/vnd.hbci',
    jlt: 'application/vnd.hp-jlyt',
    pcl: 'application/vnd.hp-pcl',
    hpgl: 'application/vnd.hp-hpgl',
    hvs: 'application/vnd.yamaha.hv-script',
    hvd: 'application/vnd.yamaha.hv-dic',
    hvp: 'application/vnd.yamaha.hv-voice',
    'sfd-hdstx': 'application/vnd.hydrostatix.sof-data',
    stk: 'application/hyperstudio',
    hal: 'application/vnd.hal+xml',
    html: 'text/html',
    irm: 'application/vnd.ibm.rights-management',
    sc: 'application/vnd.ibm.secure-container',
    ics: 'text/calendar',
    icc: 'application/vnd.iccprofile',
    ico: 'image/x-icon',
    igl: 'application/vnd.igloader',
    ief: 'image/ief',
    ivp: 'application/vnd.immervision-ivp',
    ivu: 'application/vnd.immervision-ivu',
    rif: 'application/reginfo+xml',
    '3dml': 'text/vnd.in3d.3dml',
    spot: 'text/vnd.in3d.spot',
    igs: 'model/iges',
    i2g: 'application/vnd.intergeo',
    cdy: 'application/vnd.cinderella',
    xpw: 'application/vnd.intercon.formnet',
    fcs: 'application/vnd.isac.fcs',
    ipfix: 'application/ipfix',
    cer: 'application/pkix-cert',
    pki: 'application/pkixcmp',
    crl: 'application/pkix-crl',
    pkipath: 'application/pkix-pkipath',
    igm: 'application/vnd.insors.igm',
    rcprofile: 'application/vnd.ipunplugged.rcprofile',
    irp: 'application/vnd.irepository.package+xml',
    jad: 'text/vnd.sun.j2me.app-descriptor',
    jar: 'application/java-archive',
    class: 'application/java-vm',
    jnlp: 'application/x-java-jnlp-file',
    ser: 'application/java-serialized-object',
    java: 'text/x-java-source,java',
    js: 'application/javascript',
    json: 'application/json',
    joda: 'application/vnd.joost.joda-archive',
    jpm: 'video/jpm',
    jpg: 'image/jpeg',
    pjpeg: 'image/pjpeg',
    jpgv: 'video/jpeg',
    ktz: 'application/vnd.kahootz',
    mmd: 'application/vnd.chipnuts.karaoke-mmd',
    karbon: 'application/vnd.kde.karbon',
    chrt: 'application/vnd.kde.kchart',
    kfo: 'application/vnd.kde.kformula',
    flw: 'application/vnd.kde.kivio',
    kon: 'application/vnd.kde.kontour',
    kpr: 'application/vnd.kde.kpresenter',
    ksp: 'application/vnd.kde.kspread',
    kwd: 'application/vnd.kde.kword',
    htke: 'application/vnd.kenameaapp',
    kia: 'application/vnd.kidspiration',
    kne: 'application/vnd.kinar',
    sse: 'application/vnd.kodak-descriptor',
    lasxml: 'application/vnd.las.las+xml',
    latex: 'application/x-latex',
    lbd: 'application/vnd.llamagraphics.life-balance.desktop',
    lbe: 'application/vnd.llamagraphics.life-balance.exchange+xml',
    jam: 'application/vnd.jam',
    apr: 'application/vnd.lotus-approach',
    pre: 'application/vnd.lotus-freelance',
    nsf: 'application/vnd.lotus-notes',
    org: 'application/vnd.lotus-organizer',
    scm: 'application/vnd.lotus-screencam',
    lwp: 'application/vnd.lotus-wordpro',
    lvp: 'audio/vnd.lucent.voice',
    m3u: 'audio/x-mpegurl',
    m4v: 'video/x-m4v',
    hqx: 'application/mac-binhex40',
    portpkg: 'application/vnd.macports.portpkg',
    mgp: 'application/vnd.osgeo.mapguide.package',
    mrc: 'application/marc',
    mrcx: 'application/marcxml+xml',
    mxf: 'application/mxf',
    nbp: 'application/vnd.wolfram.player',
    ma: 'application/mathematica',
    mathml: 'application/mathml+xml',
    mbox: 'application/mbox',
    mc1: 'application/vnd.medcalcdata',
    mscml: 'application/mediaservercontrol+xml',
    cdkey: 'application/vnd.mediastation.cdkey',
    mwf: 'application/vnd.mfer',
    mfm: 'application/vnd.mfmp',
    msh: 'model/mesh',
    mads: 'application/mads+xml',
    mets: 'application/mets+xml',
    mods: 'application/mods+xml',
    meta4: 'application/metalink4+xml',
    mcd: 'application/vnd.mcd',
    flo: 'application/vnd.micrografx.flo',
    igx: 'application/vnd.micrografx.igx',
    es3: 'application/vnd.eszigno3+xml',
    mdb: 'application/x-msaccess',
    asf: 'video/x-ms-asf',
    exe: 'application/x-msdownload',
    cil: 'application/vnd.ms-artgalry',
    cab: 'application/vnd.ms-cab-compressed',
    ims: 'application/vnd.ms-ims',
    application: 'application/x-ms-application',
    clp: 'application/x-msclip',
    mdi: 'image/vnd.ms-modi',
    eot: 'application/vnd.ms-fontobject',
    xls: 'application/vnd.ms-excel',
    xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
    xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
    xltm: 'application/vnd.ms-excel.template.macroenabled.12',
    xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
    chm: 'application/vnd.ms-htmlhelp',
    crd: 'application/x-mscardfile',
    lrm: 'application/vnd.ms-lrm',
    mvb: 'application/x-msmediaview',
    mny: 'application/x-msmoney',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    sldx: 'application/vnd.openxmlformats-officedocument.presentationml.slide',
    ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    obd: 'application/x-msbinder',
    thmx: 'application/vnd.ms-officetheme',
    onetoc: 'application/onenote',
    pya: 'audio/vnd.ms-playready.media.pya',
    pyv: 'video/vnd.ms-playready.media.pyv',
    ppt: 'application/vnd.ms-powerpoint',
    ppa: 'application/vnd.ms-powerpoint',
    ppam: 'application/vnd.ms-powerpoint.addin.macroenabled.12',
    sldm: 'application/vnd.ms-powerpoint.slide.macroenabled.12',
    pptm: 'application/vnd.ms-powerpoint.presentation.macroenabled.12',
    ppsm: 'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
    potm: 'application/vnd.ms-powerpoint.template.macroenabled.12',
    mpp: 'application/vnd.ms-project',
    pub: 'application/x-mspublisher',
    scd: 'application/x-msschedule',
    xap: 'application/x-silverlight-app',
    stl: 'application/vnd.ms-pki.stl',
    cat: 'application/vnd.ms-pki.seccat',
    vsd: 'application/vnd.visio',
    vsdx: 'application/vnd.visio2013',
    wm: 'video/x-ms-wm',
    wma: 'audio/x-ms-wma',
    wax: 'audio/x-ms-wax',
    wmx: 'video/x-ms-wmx',
    wmd: 'application/x-ms-wmd',
    wpl: 'application/vnd.ms-wpl',
    wmz: 'application/x-ms-wmz',
    wmv: 'video/x-ms-wmv',
    wvx: 'video/x-ms-wvx',
    wmf: 'application/x-msmetafile',
    trm: 'application/x-msterminal',
    doc: 'application/msword',
    docm: 'application/vnd.ms-word.document.macroenabled.12',
    dotm: 'application/vnd.ms-word.template.macroenabled.12',
    wri: 'application/x-mswrite',
    wps: 'application/vnd.ms-works',
    xbap: 'application/x-ms-xbap',
    xps: 'application/vnd.ms-xpsdocument',
    mid: 'audio/midi',
    mpy: 'application/vnd.ibm.minipay',
    afp: 'application/vnd.ibm.modcap',
    rms: 'application/vnd.jcp.javame.midlet-rms',
    tmo: 'application/vnd.tmobile-livetv',
    prc: 'application/x-mobipocket-ebook',
    mbk: 'application/vnd.mobius.mbk',
    dis: 'application/vnd.mobius.dis',
    plc: 'application/vnd.mobius.plc',
    mqy: 'application/vnd.mobius.mqy',
    msl: 'application/vnd.mobius.msl',
    txf: 'application/vnd.mobius.txf',
    daf: 'application/vnd.mobius.daf',
    fly: 'text/vnd.fly',
    mpc: 'application/vnd.mophun.certificate',
    mpn: 'application/vnd.mophun.application',
    mj2: 'video/mj2',
    mpga: 'audio/mpeg',
    mxu: 'video/vnd.mpegurl',
    mpeg: 'video/mpeg',
    m21: 'application/mp21',
    mp4a: 'audio/mp4',
    'mp4': 'video/mp4',
    m3u8: 'application/vnd.apple.mpegurl',
    mus: 'application/vnd.musician',
    msty: 'application/vnd.muvee.style',
    mxml: 'application/xv+xml',
    ngdat: 'application/vnd.nokia.n-gage.data',
    'n-gage': 'application/vnd.nokia.n-gage.symbian.install',
    ncx: 'application/x-dtbncx+xml',
    nc: 'application/x-netcdf',
    nlu: 'application/vnd.neurolanguage.nlu',
    dna: 'application/vnd.dna',
    nnd: 'application/vnd.noblenet-directory',
    nns: 'application/vnd.noblenet-sealer',
    nnw: 'application/vnd.noblenet-web',
    rpst: 'application/vnd.nokia.radio-preset',
    rpss: 'application/vnd.nokia.radio-presets',
    n3: 'text/n3',
    edm: 'application/vnd.novadigm.edm',
    edx: 'application/vnd.novadigm.edx',
    ext: 'application/vnd.novadigm.ext',
    gph: 'application/vnd.flographit',
    ecelp4800: 'audio/vnd.nuera.ecelp4800',
    ecelp7470: 'audio/vnd.nuera.ecelp7470',
    ecelp9600: 'audio/vnd.nuera.ecelp9600',
    oda: 'application/oda',
    ogx: 'application/ogg',
    oga: 'audio/ogg',
    ogv: 'video/ogg',
    dd2: 'application/vnd.oma.dd2+xml',
    oth: 'application/vnd.oasis.opendocument.text-web',
    opf: 'application/oebps-package+xml',
    qbo: 'application/vnd.intu.qbo',
    oxt: 'application/vnd.openofficeorg.extension',
    osf: 'application/vnd.yamaha.openscoreformat',
    weba: 'audio/webm',
    webm: 'video/webm',
    odc: 'application/vnd.oasis.opendocument.chart',
    otc: 'application/vnd.oasis.opendocument.chart-template',
    odb: 'application/vnd.oasis.opendocument.database',
    odf: 'application/vnd.oasis.opendocument.formula',
    odft: 'application/vnd.oasis.opendocument.formula-template',
    odg: 'application/vnd.oasis.opendocument.graphics',
    otg: 'application/vnd.oasis.opendocument.graphics-template',
    odi: 'application/vnd.oasis.opendocument.image',
    oti: 'application/vnd.oasis.opendocument.image-template',
    odp: 'application/vnd.oasis.opendocument.presentation',
    otp: 'application/vnd.oasis.opendocument.presentation-template',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    ots: 'application/vnd.oasis.opendocument.spreadsheet-template',
    odt: 'application/vnd.oasis.opendocument.text',
    odm: 'application/vnd.oasis.opendocument.text-master',
    ott: 'application/vnd.oasis.opendocument.text-template',
    ktx: 'image/ktx',
    sxc: 'application/vnd.sun.xml.calc',
    stc: 'application/vnd.sun.xml.calc.template',
    sxd: 'application/vnd.sun.xml.draw',
    std: 'application/vnd.sun.xml.draw.template',
    sxi: 'application/vnd.sun.xml.impress',
    sti: 'application/vnd.sun.xml.impress.template',
    sxm: 'application/vnd.sun.xml.math',
    sxw: 'application/vnd.sun.xml.writer',
    sxg: 'application/vnd.sun.xml.writer.global',
    stw: 'application/vnd.sun.xml.writer.template',
    otf: 'application/x-font-otf',
    osfpvg: 'application/vnd.yamaha.openscoreformat.osfpvg+xml',
    dp: 'application/vnd.osgi.dp',
    pdb: 'application/vnd.palm',
    p: 'text/x-pascal',
    paw: 'application/vnd.pawaafile',
    pclxl: 'application/vnd.hp-pclxl',
    efif: 'application/vnd.picsel',
    pcx: 'image/x-pcx',
    psd: 'image/vnd.adobe.photoshop',
    prf: 'application/pics-rules',
    pic: 'image/x-pict',
    chat: 'application/x-chat',
    p10: 'application/pkcs10',
    p12: 'application/x-pkcs12',
    p7m: 'application/pkcs7-mime',
    p7s: 'application/pkcs7-signature',
    p7r: 'application/x-pkcs7-certreqresp',
    p7b: 'application/x-pkcs7-certificates',
    p8: 'application/pkcs8',
    plf: 'application/vnd.pocketlearn',
    pnm: 'image/x-portable-anymap',
    pbm: 'image/x-portable-bitmap',
    pcf: 'application/x-font-pcf',
    pfr: 'application/font-tdpfr',
    pgn: 'application/x-chess-pgn',
    pgm: 'image/x-portable-graymap',
    png: 'image/png',
    ppm: 'image/x-portable-pixmap',
    pskcxml: 'application/pskc+xml',
    pml: 'application/vnd.ctc-posml',
    ai: 'application/postscript',
    pfa: 'application/x-font-type1',
    pbd: 'application/vnd.powerbuilder6',
    pgp: 'application/pgp-encrypted',
    box: 'application/vnd.previewsystems.box',
    ptid: 'application/vnd.pvi.ptid1',
    pls: 'application/pls+xml',
    str: 'application/vnd.pg.format',
    ei6: 'application/vnd.pg.osasli',
    dsc: 'text/prs.lines.tag',
    psf: 'application/x-font-linux-psf',
    qps: 'application/vnd.publishare-delta-tree',
    wg: 'application/vnd.pmi.widget',
    qxd: 'application/vnd.quark.quarkxpress',
    esf: 'application/vnd.epson.esf',
    msf: 'application/vnd.epson.msf',
    ssf: 'application/vnd.epson.ssf',
    qam: 'application/vnd.epson.quickanime',
    qfx: 'application/vnd.intu.qfx',
    qt: 'video/quicktime',
    rar: 'application/x-rar-compressed',
    ram: 'audio/x-pn-realaudio',
    rmp: 'audio/x-pn-realaudio-plugin',
    rsd: 'application/rsd+xml',
    rm: 'application/vnd.rn-realmedia',
    bed: 'application/vnd.realvnc.bed',
    mxl: 'application/vnd.recordare.musicxml',
    musicxml: 'application/vnd.recordare.musicxml+xml',
    rnc: 'application/relax-ng-compact-syntax',
    rdz: 'application/vnd.data-vision.rdz',
    rdf: 'application/rdf+xml',
    rp9: 'application/vnd.cloanto.rp9',
    jisp: 'application/vnd.jisp',
    rtf: 'application/rtf',
    rtx: 'text/richtext',
    link66: 'application/vnd.route66.link66+xml',
    rss: 'application/rss+xml,',
    shf: 'application/shf+xml',
    st: 'application/vnd.sailingtracker.track',
    svg: 'image/svg+xml',
    sus: 'application/vnd.sus-calendar',
    sru: 'application/sru+xml',
    setpay: 'application/set-payment-initiation',
    setreg: 'application/set-registration-initiation',
    sema: 'application/vnd.sema',
    semd: 'application/vnd.semd',
    semf: 'application/vnd.semf',
    see: 'application/vnd.seemail',
    snf: 'application/x-font-snf',
    spq: 'application/scvp-vp-request',
    spp: 'application/scvp-vp-response',
    scq: 'application/scvp-cv-request',
    scs: 'application/scvp-cv-response',
    sdp: 'application/sdp',
    etx: 'text/x-setext',
    movie: 'video/x-sgi-movie',
    ifm: 'application/vnd.shana.informed.formdata',
    itp: 'application/vnd.shana.informed.formtemplate',
    iif: 'application/vnd.shana.informed.interchange',
    ipk: 'application/vnd.shana.informed.package',
    tfi: 'application/thraud+xml',
    shar: 'application/x-shar',
    rgb: 'image/x-rgb',
    slt: 'application/vnd.epson.salt',
    aso: 'application/vnd.accpac.simply.aso',
    imp: 'application/vnd.accpac.simply.imp',
    twd: 'application/vnd.simtech-mindmapper',
    csp: 'application/vnd.commonspace',
    saf: 'application/vnd.yamaha.smaf-audio',
    mmf: 'application/vnd.smaf',
    spf: 'application/vnd.yamaha.smaf-phrase',
    teacher: 'application/vnd.smart.teacher',
    svd: 'application/vnd.svd',
    rq: 'application/sparql-query',
    srx: 'application/sparql-results+xml',
    gram: 'application/srgs',
    grxml: 'application/srgs+xml',
    ssml: 'application/ssml+xml',
    skp: 'application/vnd.koan',
    sgml: 'text/sgml',
    sdc: 'application/vnd.stardivision.calc',
    sda: 'application/vnd.stardivision.draw',
    sdd: 'application/vnd.stardivision.impress',
    smf: 'application/vnd.stardivision.math',
    sdw: 'application/vnd.stardivision.writer',
    sgl: 'application/vnd.stardivision.writer-global',
    sm: 'application/vnd.stepmania.stepchart',
    sit: 'application/x-stuffit',
    sitx: 'application/x-stuffitx',
    sdkm: 'application/vnd.solent.sdkm+xml',
    xo: 'application/vnd.olpc-sugar',
    au: 'audio/basic',
    wqd: 'application/vnd.wqd',
    sis: 'application/vnd.symbian.install',
    smi: 'application/smil+xml',
    xsm: 'application/vnd.syncml+xml',
    bdm: 'application/vnd.syncml.dm+wbxml',
    xdm: 'application/vnd.syncml.dm+xml',
    sv4cpio: 'application/x-sv4cpio',
    sv4crc: 'application/x-sv4crc',
    sbml: 'application/sbml+xml',
    tsv: 'text/tab-separated-values',
    tiff: 'image/tiff',
    tao: 'application/vnd.tao.intent-module-archive',
    tar: 'application/x-tar',
    tcl: 'application/x-tcl',
    tex: 'application/x-tex',
    tfm: 'application/x-tex-tfm',
    tei: 'application/tei+xml',
    txt: 'text/plain',
    dxp: 'application/vnd.spotfire.dxp',
    sfs: 'application/vnd.spotfire.sfs',
    tsd: 'application/timestamped-data',
    tpt: 'application/vnd.trid.tpt',
    mxs: 'application/vnd.triscape.mxs',
    t: 'text/troff',
    tra: 'application/vnd.trueapp',
    ttf: 'application/x-font-ttf',
    ttl: 'text/turtle',
    umj: 'application/vnd.umajin',
    uoml: 'application/vnd.uoml+xml',
    unityweb: 'application/vnd.unity',
    ufd: 'application/vnd.ufdl',
    uri: 'text/uri-list',
    utz: 'application/vnd.uiq.theme',
    ustar: 'application/x-ustar',
    uu: 'text/x-uuencode',
    vcs: 'text/x-vcalendar',
    vcf: 'text/x-vcard',
    vcd: 'application/x-cdlink',
    vsf: 'application/vnd.vsf',
    wrl: 'model/vrml',
    vcx: 'application/vnd.vcx',
    mts: 'model/vnd.mts',
    vtu: 'model/vnd.vtu',
    vis: 'application/vnd.visionary',
    viv: 'video/vnd.vivo',
    ccxml: 'application/ccxml+xml,',
    vxml: 'application/voicexml+xml',
    src: 'application/x-wais-source',
    wbxml: 'application/vnd.wap.wbxml',
    wbmp: 'image/vnd.wap.wbmp',
    wav: 'audio/x-wav',
    davmount: 'application/davmount+xml',
    woff: 'application/x-font-woff',
    wspolicy: 'application/wspolicy+xml',
    webp: 'image/webp',
    wtb: 'application/vnd.webturbo',
    wgt: 'application/widget',
    hlp: 'application/winhlp',
    wml: 'text/vnd.wap.wml',
    wmls: 'text/vnd.wap.wmlscript',
    wmlsc: 'application/vnd.wap.wmlscriptc',
    wpd: 'application/vnd.wordperfect',
    stf: 'application/vnd.wt.stf',
    wsdl: 'application/wsdl+xml',
    xbm: 'image/x-xbitmap',
    xpm: 'image/x-xpixmap',
    xwd: 'image/x-xwindowdump',
    der: 'application/x-x509-ca-cert',
    fig: 'application/x-xfig',
    xhtml: 'application/xhtml+xml',
    xml: 'application/xml',
    xdf: 'application/xcap-diff+xml',
    xenc: 'application/xenc+xml',
    xer: 'application/patch-ops-error+xml',
    rl: 'application/resource-lists+xml',
    rs: 'application/rls-services+xml',
    rld: 'application/resource-lists-diff+xml',
    xslt: 'application/xslt+xml',
    xop: 'application/xop+xml',
    xpi: 'application/x-xpinstall',
    xspf: 'application/xspf+xml',
    xul: 'application/vnd.mozilla.xul+xml',
    xyz: 'chemical/x-xyz',
    yaml: 'text/yaml',
    yang: 'application/yang',
    yin: 'application/yin+xml',
    zir: 'application/vnd.zul',
    zip: 'application/zip',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadService = /** @class */ (function () {
    function FileUploadService(renderer) {
        this.renderer = renderer;
        this.extensions = ['B', 'KB', 'MB', 'GB'];
        this.sizeRegex = new RegExp("^(\\d+)(?:\\s{0,1})(" + this.extensions.join('|') + ")?$", 'i');
    }
    /**
     * @return {?}
     */
    FileUploadService.prototype.isFileDragDropAvailable = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = this.renderer.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploadService.prototype.parseSize = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (IsNullOrEmpty(value)) {
            return 0;
        }
        if (typeof value === 'number') {
            return value;
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(value.match(this.sizeRegex) || [null, '0', 'B'], 3), size = _a[1], extension = _a[2];
        /** @type {?} */
        var i = IsNullOrEmpty(extension) ? 0 : this.extensions.indexOf((/** @type {?} */ (extension.toUpperCase())));
        return parseInt(size, 10) * Math.pow(1024, i < 0 ? 0 : i);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    FileUploadService.prototype.formatSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this.calculateSize(size);
    };
    /**
     * @private
     * @param {?} size
     * @param {?=} extensionIndex
     * @return {?}
     */
    FileUploadService.prototype.calculateSize = /**
     * @private
     * @param {?} size
     * @param {?=} extensionIndex
     * @return {?}
     */
    function (size, extensionIndex) {
        if (extensionIndex === void 0) { extensionIndex = 0; }
        if (isNaN(size)) {
            size = 0;
        }
        if (size < 1024) {
            return Math.round(size * 100) / 100 + " " + this.extensions[extensionIndex];
        }
        return this.calculateSize(size / 1024, extensionIndex + 1);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileUploadService.prototype.getFileType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return Object.keys(FileUploadTypes).find((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return FileUploadTypes[key] === file.type; }));
    };
    FileUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    FileUploadService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return FileUploadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var InsertAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('insertAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(30, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
            ])
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(30, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }))
            ])
        ], { optional: true })
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ZoomAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('zoomAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('static => zoomOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate(-50%, -50%) scale(2, 2)', opacity: 0 })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('static => zoomIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':self', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate(-50%, -50%) scale(.2, .2)', opacity: 0, top: '50%', left: '50%', margin: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(50, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate(-50%, -50%) scale(1, 1)', opacity: 1 }))
            ])
        ])
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
FileUploadAbstract = /** @class */ (function () {
    function FileUploadAbstract(hostElementRef, renderer, cdr) {
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.control = null;
        this.hooks = [];
        this.subscriptions = [];
        this.onChange = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    FileUploadAbstract.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
        this.setEvents();
        this.checkAndMarkAsDisabled();
        this.connectToForm();
    };
    /**
     * @return {?}
     */
    FileUploadAbstract.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cdr.detach();
        this.hooks.forEach((/**
         * @param {?} hook
         * @return {?}
         */
        function (hook) { return hook(); }));
        this.hooks.length = 0;
        this.subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
        this.subscriptions.length = 0;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploadAbstract.prototype.setEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.control.statusChanges.subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) { return _this.checkAndMarkAsDisabled(); })));
        this.subscriptions.push(this.control.eventsChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.triggerEvent(event); })));
        this.subscriptions.push(this.control.acceptChanges.subscribe((/**
         * @param {?} accept
         * @return {?}
         */
        function (accept) { return _this.updateAcceptAttr(accept); })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadAbstract.prototype.triggerEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof this.label.nativeElement[event] === 'function') {
            this.label.nativeElement[event]();
        }
    };
    /**
     * @private
     * @param {?} accept
     * @return {?}
     */
    FileUploadAbstract.prototype.updateAcceptAttr = /**
     * @private
     * @param {?} accept
     * @return {?}
     */
    function (accept) {
        if (!IsNullOrEmpty(accept)) {
            this.renderer.setAttribute(this.input.nativeElement, 'accept', accept);
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'accept');
        }
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadAbstract.prototype.checkAndMarkAsDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', false);
        }
    };
    /**
     * ControlValueAccessor implementation
     */
    /**
     * ControlValueAccessor implementation
     * @private
     * @return {?}
     */
    FileUploadAbstract.prototype.connectToForm = /**
     * ControlValueAccessor implementation
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.control.valueChanges.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.onChange(v); })));
    };
    return FileUploadAbstract;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DRAGOVER = 'dragover';
/** @type {?} */
var TOUCHED = 'ng-touched';
var FileUploadComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FileUploadComponent, _super);
    function FileUploadComponent(fileUploadService, hostElementRef, renderer, document, cdr) {
        var _this = _super.call(this, hostElementRef, renderer, cdr) || this;
        _this.fileUploadService = fileUploadService;
        _this.document = document;
        _this.control = null;
        _this.animation = true;
        _this.templateRef = null;
        _this.listItem = null;
        _this.templateContext = {
            $implicit: _this.fileUploadService.isFileDragDropAvailable(),
            isFileDragDropAvailable: _this.fileUploadService.isFileDragDropAvailable()
        };
        /**
         * animation fields
         */
        _this.zoomText = 'static';
        _this.listVisible = false;
        _this.onTouch = (/**
         * @return {?}
         */
        function () {
            _this.renderer.addClass(_this.hostElementRef.nativeElement, TOUCHED);
        });
        return _this;
    }
    Object.defineProperty(FileUploadComponent.prototype, "hasFiles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.isListVisible && this.control.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadComponent.prototype, "isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.control.disabled && this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadComponent.prototype, "isAnimationDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.animation === false || ((/** @type {?} */ (this.animation))) === 'false';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    FileUploadComponent.prototype.setEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.setEvents.call(this);
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.document, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.preventDragEvents(event); })));
        }));
        ['dragover', 'dragenter'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.hostElementRef.nativeElement, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onDragOver(event); })));
        }));
        ['dragleave', 'dragend', 'drop'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.hostElementRef.nativeElement, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onDragLeave(event); })));
        }));
        this.subscriptions.push(this.control.valueChanges.subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.renderView(); })));
        this.subscriptions.push(this.control.listVisibilityChanges.subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) { return _this.toggleListVisibility(); })));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.preventDragEvents = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadComponent.prototype.renderView = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.listVisible) {
            this.zoomText = this.control.isListVisible && this.control.size > 0 ? 'zoomOut' : 'static';
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadComponent.prototype.showList = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.zoomText !== 'static') {
            this.listVisible = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadComponent.prototype.hideList = /**
     * @private
     * @return {?}
     */
    function () {
        this.listVisible = false;
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadComponent.prototype.toggleListVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        this.listVisible = this.control.isListVisible && this.control.size > 0;
        if (this.listVisible) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
            this.zoomText = 'static';
        }
        this.cdr.markForCheck();
    };
    /**
     * on file over add class name
     */
    /**
     * on file over add class name
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.onDragOver = /**
     * on file over add class name
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    };
    /**
     * on mouse out remove class name
     */
    /**
     * on mouse out remove class name
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.onDragLeave = /**
     * on mouse out remove class name
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.control.disabled) {
            return;
        }
        /** @type {?} */
        var files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.onInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = (/** @type {?} */ ((event.target)));
        if (!this.control.disabled && input.files.length > 0) {
            this.control.addFiles(input.files);
            this.clearInputEl();
        }
        this.onTouch();
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadComponent.prototype.clearInputEl = /**
     * @private
     * @return {?}
     */
    function () {
        this.input.nativeElement.value = null;
    };
    /**
     * model -> view changes
     */
    /**
     * model -> view changes
     * @param {?} files
     * @return {?}
     */
    FileUploadComponent.prototype.writeValue = /**
     * model -> view changes
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (files != null) {
            this.control.setValue(files);
        }
    };
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    /**
     * register function which will be called on UI change
     * to update view -> model
     * @param {?} fn
     * @return {?}
     */
    FileUploadComponent.prototype.registerOnChange = /**
     * register function which will be called on UI change
     * to update view -> model
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
    FileUploadComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FileUploadComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.control.disable(isDisabled);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.zoomAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.control.isListVisible && this.control.size > 0) {
            this.showList();
        }
        else {
            this.hideList();
        }
        if (event.fromState === 'static' && event.toState === 'zoomOut') {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        if (event.toState === 'zoomIn') {
            this.zoomText = 'static';
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadComponent.prototype.animationListFinished = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'void') {
            this.zoomText = 'zoomIn';
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'list-visible');
        }
        if (event.fromState === 'void') {
            this.zoomText = 'static';
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
        }
    };
    FileUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "file-upload:not([simple])",
                    template: "<label #labelRef class=\"upload-input\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" [@zoomAnimation]=\"zoomText\" (@zoomAnimation.done)=\"zoomAnimationDone($event)\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate; context: templateContext\"></ng-container>\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable=\"isFileDragDropAvailable\">\r\n        <div class=\"icon\">\r\n            <svg viewBox=\"0 0 96 96\">\r\n                <g>\r\n                    <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                        c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                        c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                        s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                        c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                        c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                        h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                        c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                        c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                </g>\r\n            </svg>\r\n        </div>\r\n    \r\n        <div class=\"upload-text\">\r\n            <ng-container *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\">\r\n                <b>Drag and drop</b> files<br> or click here\r\n            </ng-container>\r\n            <ng-template #isNotDragDropAvailable>\r\n                <b>Click here</b> to<br> choose a files\r\n            </ng-template>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" multiple (change)=\"onInputChange($event)\">\r\n</label>\r\n\r\n<div class=\"upload-list\" *ngIf=\"(control.listVisibilityChanges | async) && control.size > 0 && listVisible\" [@insertAnimation]=\"control.size\" (@insertAnimation.done)=\"animationListFinished($event)\">\r\n    <ng-template ngFor let-file let-i=\"index\" [ngForOf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultItemTemplate let-i=\"index\" let-file=\"file\" let-control=\"control\">\r\n        <file-upload-list-item  [index]=\"i\" [file]=\"file\" [control]=\"control\"></file-upload-list-item>\r\n    </ng-template>\r\n</div>",
                    providers: [
                        FileUploadService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return FileUploadComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        ZoomAnimation,
                        InsertAnimation
                    ],
                    styles: ["@charset \"UTF-8\";:host,:host>*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:#92b0b3 dashed 1px;outline-offset:-10px;position:relative}:host(.dragover){outline-width:2px}:host(.disabled){opacity:.5;cursor:no-drop}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:35px;width:35px;border:1px solid #eaeaea;-webkit-border-radius:4px;border-radius:4px;float:left}.icon svg{fill:#909293}.upload-input:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:0}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{top:20px;left:100%;margin-left:-20px;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);text-align:center}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host(.hide-text) .upload-input{opacity:0}:host(.list-visible) .upload-text{display:none}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:focus,:host(:not(.disabled)) .upload-input:hover{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:focus svg,:host(:not(.disabled)) .upload-input:hover svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadComponent.ctorParameters = function () { return [
        { type: FileUploadService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    FileUploadComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['placeholder', { static: false },] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['item', { static: false },] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputRef', { static: true },] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['labelRef', { static: true },] }],
        hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.has-files',] }],
        isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-invalid',] }],
        isAnimationDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['@.disabled',] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
    };
    return FileUploadComponent;
}(FileUploadAbstract));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadListItemComponent = /** @class */ (function () {
    function FileUploadListItemComponent(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    FileUploadListItemComponent.prototype.removeFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.control.removeFile(file);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    FileUploadListItemComponent.prototype.calculateSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this.fileUploadService.formatSize(size);
    };
    FileUploadListItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "file-upload-list-item",
                    template: "\n    <file-upload-icon [file]=\"file\"></file-upload-icon>\n    <div class=\"file-info\">\n        <span class=\"file-name\">{{ file.name }}</span> ({{ calculateSize( file.size ) }})\n    </div>\n    <div class=\"file-buttons\">\n        <span class=\"remove-btn\" (click)=\"removeFile(file)\">\n        <svg viewBox=\"0 0 96 96\">\n            <g>\n                <path d=\"M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z\"/>\n            </g>\n        </svg> Remove</span>\n    </div>\n    ",
                    styles: ["@charset \"UTF-8\";:host{display:block;font-size:14px;color:#646464}:host:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn{font-size:12px;cursor:pointer}.remove-btn svg{display:inline-block;vertical-align:-20%;height:18px;width:18px}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadListItemComponent.ctorParameters = function () { return [
        { type: FileUploadService }
    ]; };
    FileUploadListItemComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FileUploadListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadIconComponent = /** @class */ (function () {
    function FileUploadIconComponent(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.fileType = 'unknown';
    }
    /**
     * @return {?}
     */
    FileUploadIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.fileType = this.fileUploadService.getFileType(this.file);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    FileUploadIconComponent.prototype.isIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case 'text':
                return this.fileType === 'html' || this.fileType === 'css' ||
                    this.fileType === 'csv' || this.fileType === 'js' ||
                    this.fileType === 'pdf' || this.fileType === 'ppt' ||
                    this.fileType === 'xls' || this.fileType === 'xlsx' ||
                    this.fileType === 'xml' || this.fileType === 'doc' ||
                    this.fileType === 'txt' || this.fileType === 'docx';
            case 'audio':
                return this.fileType === 'aac' || this.fileType === 'midi' ||
                    this.fileType === 'oga' || this.fileType === 'wav' ||
                    this.fileType === 'weba';
            case 'image':
                return this.fileType === 'png' || this.fileType === 'bmp' ||
                    this.fileType === 'gif' || this.fileType === 'jpg' ||
                    this.fileType === 'svg' || this.fileType === 'webp' ||
                    this.fileType === 'ico';
            case 'video':
                return this.fileType === 'avi' || this.fileType === 'mpeg' ||
                    this.fileType === 'ogv' || this.fileType === 'webm' ||
                    this.fileType === '3gp' || this.fileType === '3g2';
        }
    };
    FileUploadIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "file-upload-icon",
                    template: "\r\n\r\n<ng-container [ngSwitch]=\"true\">\r\n\r\n    <svg *ngSwitchDefault viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('image')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r\n                C40.6,51.7,39.1,52.3,37.3,52.3z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('audio')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r\n                C48.9,64.4,49.4,64.6,49.9,64.6z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('text')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('video')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r\n                C64.2,43.7,64.3,43.7,64.5,43.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n</ng-container>",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:block;border:1px solid #eaeaea;-webkit-border-radius:4px;border-radius:4px}:host svg{fill:#909293}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadIconComponent.ctorParameters = function () { return [
        { type: FileUploadService }
    ]; };
    FileUploadIconComponent.propDecorators = {
        file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FileUploadIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadAttributeComponent = /** @class */ (function () {
    function FileUploadAttributeComponent(fileUploadService, hostElementRef, renderer, document) {
        var _this = this;
        this.fileUploadService = fileUploadService;
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.document = document;
        this.control = null;
        this.templateRef = null;
        this.hooks = [];
        this.subscriptions = [];
        this.onTouch = (/**
         * @return {?}
         */
        function () {
            _this.renderer.addClass(_this.hostElementRef.nativeElement, TOUCHED);
        });
    }
    /**
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
    };
    /**
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.fileUploadService.isFileDragDropAvailable()) {
            this.setEvents();
            this.checkAndMarkAsDisabled();
        }
    };
    /**
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hooks.forEach((/**
         * @param {?} hook
         * @return {?}
         */
        function (hook) { return hook(); }));
        this.hooks.length = 0;
        this.subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
        this.subscriptions.length = 0;
    };
    Object.defineProperty(FileUploadAttributeComponent.prototype, "hasFiles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.isListVisible && this.control.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadAttributeComponent.prototype, "isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.control.disabled && this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.setEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.document, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.preventDragEvents(event); })));
        }));
        ['dragover', 'dragenter'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.hostElementRef.nativeElement, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onDragOver(event); })));
        }));
        ['dragleave', 'dragend', 'drop'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.hostElementRef.nativeElement, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (_this.control.disabled && eventName === 'dragleave' || eventName !== 'dragleave') {
                    _this.onDragLeave(event);
                }
            })));
        }));
        ['dragleave'].forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            _this.hooks.push(_this.renderer.listen(_this.overlay.nativeElement, eventName, (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onDragLeave(event); })));
        }));
        this.subscriptions.push(this.control.statusChanges.subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) { return _this.checkAndMarkAsDisabled(); })));
    };
    /**
     * @private
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.checkAndMarkAsDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.preventDragEvents = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * on file over add class name
     */
    /**
     * on file over add class name
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.onDragOver = /**
     * on file over add class name
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    };
    /**
     * on mouse out remove class name
     */
    /**
     * on mouse out remove class name
     * @private
     * @param {?} event
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.onDragLeave = /**
     * on mouse out remove class name
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileUploadAttributeComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.control.disabled) {
            return;
        }
        /** @type {?} */
        var files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    };
    FileUploadAttributeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "[file-drop-zone]",
                    template: "\n        <ng-content></ng-content>\n        <div #overlay class=\"overlay\" *ngIf=\"fileUploadService.isFileDragDropAvailable()\">\n\n            <div class=\"upload-input\">\n                <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate\"></ng-container>\n\n                <ng-template #defaultTemplate>\n                    <div class=\"icon\">\n                        <svg viewBox=\"0 0 96 96\">\n                            <g>\n                                <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                                    c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                                    c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                                    s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                                    c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                                    c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                                    h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                                    c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                                    c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\n                            </g>\n                        </svg>\n                    </div>\n                \n                    <div class=\"upload-text\">\n                        <b>Drop</b> it here\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    ",
                    providers: [
                        FileUploadService
                    ],
                    styles: [":host{position:relative;display:block}:host .overlay{display:none;background:rgba(255,255,255,.8);outline:#92b0b3 dashed 2px;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}:host(.dragover:not(.disabled)) .overlay{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;-webkit-border-radius:4px;border-radius:4px;margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadAttributeComponent.ctorParameters = function () { return [
        { type: FileUploadService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    FileUploadAttributeComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['overlay', { static: false },] }],
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['placeholder', { static: false },] }],
        hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.has-files',] }],
        isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-invalid',] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
    };
    return FileUploadAttributeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleFileUploadComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SimpleFileUploadComponent, _super);
    function SimpleFileUploadComponent(fileUploadService, hostElementRef, renderer, cdr) {
        var _this = _super.call(this, hostElementRef, renderer, cdr) || this;
        _this.fileUploadService = fileUploadService;
        _this.control = null;
        _this.buttonRef = null;
        _this.placeholderRef = null;
        _this.onTouch = (/**
         * @return {?}
         */
        function () {
            _this.renderer.addClass(_this.hostElementRef.nativeElement, TOUCHED);
        });
        return _this;
    }
    Object.defineProperty(SimpleFileUploadComponent.prototype, "hasFiles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.isListVisible && this.control.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFileUploadComponent.prototype, "isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.control.disabled && this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.onInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = (/** @type {?} */ ((event.target)));
        if (!this.control.disabled && input.files.length > 0) {
            this.control.setValue(Array.from(input.files));
            this.clearInputEl();
        }
        this.onTouch();
    };
    /**
     * @private
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.clearInputEl = /**
     * @private
     * @return {?}
     */
    function () {
        this.input.nativeElement.value = null;
    };
    /**
     * model -> view changes
     */
    /**
     * model -> view changes
     * @param {?} files
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.writeValue = /**
     * model -> view changes
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (files != null) {
            this.control.setValue(files);
        }
    };
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    /**
     * register function which will be called on UI change
     * to update view -> model
     * @param {?} fn
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.registerOnChange = /**
     * register function which will be called on UI change
     * to update view -> model
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
    SimpleFileUploadComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.control.disable(isDisabled);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SimpleFileUploadComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    };
    SimpleFileUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "file-upload[simple]",
                    template: "<div class=\"upload-text\">\r\n    <ng-template [ngIf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value[0], control: control, file: control.value[0] }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultPlaceholderTemplate let-file>\r\n        <span *ngIf=\"file; else emptyList\" class=\"file-name\">{{ file.name }}</span>\r\n\r\n        <ng-template #emptyList>\r\n            Select a file...\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class=\"upload-button\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngTemplateOutlet=\"buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }\"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class=\"button\">\r\n            <div class=\"icon\">\r\n                <svg viewBox=\"0 0 96 96\">\r\n                    <g>\r\n                        <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class=\"button-text\">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" (change)=\"onInputChange($event)\">\r\n</label>",
                    providers: [
                        FileUploadService,
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return SimpleFileUploadComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host,:host>*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:inset 0 4px 7px rgba(0,0,0,.05);box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}:host(.disabled){opacity:.5}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:24px;width:24px;display:inline-block}.icon svg{fill:#555}.upload-button{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:0}.upload-text{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text{vertical-align:middle;padding-left:10px}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}"]
                }] }
    ];
    /** @nocollapse */
    SimpleFileUploadComponent.ctorParameters = function () { return [
        { type: FileUploadService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    SimpleFileUploadComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['button', { static: false },] }],
        placeholderRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['placeholder', { static: false },] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputRef', { static: true },] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['labelRef', { static: true },] }],
        hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.has-files',] }],
        isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-invalid',] }]
    };
    return SimpleFileUploadComponent;
}(FileUploadAbstract));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * function used to check file size
 * @type {?}
 */
var checkFileSize = (/**
 * @param {?} file
 * @param {?} maxSize
 * @param {?=} minSize
 * @return {?}
 */
function (file, maxSize, minSize) {
    if (minSize === void 0) { minSize = 0; }
    return (!IsNullOrEmpty(maxSize) && file.size > maxSize) || file.size < minSize ?
        { maxSize: maxSize, minSize: minSize, actual: file.size, file: file } : null;
});
/** @type {?} */
var getFileType = (/**
 * @param {?} file
 * @param {?} fileExtension
 * @return {?}
 */
function (file, fileExtension) {
    /** @type {?} */
    var type = file.type;
    if (!IsNullOrEmpty(type)) {
        return (/** @type {?} */ (type));
    }
    return FileUploadTypes[fileExtension];
});
/** @type {?} */
var FILE_EXT_REG = /(^[.]\w*)$/m;
/**
 * function used to check file type
 *
 * #### allowedTypes
 * file_extension|audio/*|video/*|image/*|media_type
 * @type {?}
 */
var checkFileType = (/**
 * @param {?} file
 * @param {?} allowedTypes
 * @return {?}
 */
function (file, allowedTypes) {
    var e_1, _a;
    /** @type {?} */
    var fileExtension = file.name.split('.').pop().toLowerCase();
    /** @type {?} */
    var fileType = getFileType(file, fileExtension);
    try {
        for (var allowedTypes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(allowedTypes), allowedTypes_1_1 = allowedTypes_1.next(); !allowedTypes_1_1.done; allowedTypes_1_1 = allowedTypes_1.next()) {
            var type = allowedTypes_1_1.value;
            /** @type {?} */
            var isValid = FILE_EXT_REG.test(type) ? type === "." + fileExtension : new RegExp(type).test(fileType);
            if (isValid) {
                return null;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (allowedTypes_1_1 && !allowedTypes_1_1.done && (_a = allowedTypes_1.return)) _a.call(allowedTypes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return { allowedTypes: allowedTypes, actual: file.type, file: file };
});
/** @type {?} */
var checkValueType = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    if (!Array.isArray(value)) {
        throw Error("FormControl.setValue was provided with wrong argument type, " + value + " was provided instead Array<File>");
    }
});
// @dynamic
var  
// @dynamic
FileUploadValidators = /** @class */ (function () {
    function FileUploadValidators() {
    }
    /**
     * Validator that requires controls to have a file maximum size length.
     * Compare the File size in bytes
     * @dynamic
     */
    /**
     * Validator that requires controls to have a file maximum size length.
     * Compare the File size in bytes
     * \@dynamic
     * @param {?} maxSize
     * @return {?}
     */
    FileUploadValidators.fileSize = /**
     * Validator that requires controls to have a file maximum size length.
     * Compare the File size in bytes
     * \@dynamic
     * @param {?} maxSize
     * @return {?}
     */
    function (maxSize) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            /** @type {?} */
            var toLargeFiles = files.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return checkFileSize(file, maxSize); }))
                .filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error; }));
            return toLargeFiles.length > 0 ?
                { 'fileSize': toLargeFiles } : null;
        });
    };
    /**
     * Compare the File size in bytes with max and min size limits
     * @dynamic
     */
    /**
     * Compare the File size in bytes with max and min size limits
     * \@dynamic
     * @param {?} __0
     * @return {?}
     */
    FileUploadValidators.sizeRange = /**
     * Compare the File size in bytes with max and min size limits
     * \@dynamic
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var minSize = _a.minSize, maxSize = _a.maxSize;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            /** @type {?} */
            var sizeMismatch = files.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return checkFileSize(file, maxSize, minSize); }))
                .filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error; }));
            return sizeMismatch.length > 0 ?
                { 'sizeRange': sizeMismatch } : null;
        });
    };
    /**
     * validator that requires control to have limit on files number
     * @dynamic
     */
    /**
     * validator that requires control to have limit on files number
     * \@dynamic
     * @param {?} numFiles
     * @return {?}
     */
    FileUploadValidators.filesLimit = /**
     * validator that requires control to have limit on files number
     * \@dynamic
     * @param {?} numFiles
     * @return {?}
     */
    function (numFiles) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            return files.length > numFiles ?
                { 'filesLimit': { 'max': numFiles, 'actual': files.length } } : null;
        });
    };
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * \@dynamic
     * @param {?} allowedFileTypes
     * @return {?}
     */
    FileUploadValidators.accept = /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * \@dynamic
     * @param {?} allowedFileTypes
     * @return {?}
     */
    function (allowedFileTypes) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            /** @type {?} */
            var notAllowedFiles = files.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return checkFileType(file, allowedFileTypes); }))
                .filter((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return error; }));
            return notAllowedFiles.length > 0 ?
                { 'fileTypes': notAllowedFiles } : null;
        });
    };
    return FileUploadValidators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A Directive that adds the `filesize` validator to controls marked with the
 * `filesize` attribute. The size of the file is in bytes or any other unit
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel filesize="830000"></file-upload>
 * <file-upload name="files" ngModel [filesize]="830000"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="6200"></file-upload>
 * <file-upload name="files" ngModel filesize="123MB"></file-upload>
 * <file-upload name="files" ngModel [filesize]="12 mb"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="324KB"></file-upload>
 * ```
 *
 */
var FileSizeValidator = /** @class */ (function () {
    function FileSizeValidator(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FileSizeValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('filesize' in changes
            || 'maxsize' in changes
            || 'minsize' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    FileSizeValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FileSizeValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    FileSizeValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxSize = null;
        if (!IsNullOrEmpty(this.maxsize)) {
            maxSize = this.fileUploadService.parseSize(this.maxsize);
        }
        else if (!IsNullOrEmpty(this.filesize)) {
            maxSize = this.fileUploadService.parseSize(this.filesize);
        }
        /** @type {?} */
        var minSize = this.fileUploadService.parseSize(this.minsize);
        this.validator = FileUploadValidators.sizeRange({ maxSize: maxSize, minSize: minSize });
    };
    FileSizeValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "[filesize][formControlName],[filesize][formControl],[filesize][ngModel],\n    [minsize][formControlName],[minsize][formControl],[minsize][ngModel],\n    [maxsize][formControlName],[maxsize][formControl],[maxsize][ngModel]",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return FileSizeValidator; })),
                            multi: true
                        }],
                    host: {
                        '[attr.filesize]': 'filesize ? filesize : null',
                        '[attr.minsize]': 'minsize ? minsize : null',
                        '[attr.maxsize]': 'maxsize ? maxsize : null'
                    }
                },] }
    ];
    /** @nocollapse */
    FileSizeValidator.ctorParameters = function () { return [
        { type: FileUploadService }
    ]; };
    FileSizeValidator.propDecorators = {
        filesize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FileSizeValidator;
}());
/**
 * A Directive that adds the `fileslimit` validator to controls marked with the
 * `fileslimit` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel fileslimit="2"></file-upload>
 * <file-upload name="files" ngModel [fileslimit]="2"></file-upload>
 * ```
 *
 */
var FilesLimitValidator = /** @class */ (function () {
    function FilesLimitValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FilesLimitValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('fileslimit' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    FilesLimitValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.fileslimit != null ? this.validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FilesLimitValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    FilesLimitValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this.validator = FileUploadValidators.filesLimit(typeof this.fileslimit === 'string' ? parseInt(this.fileslimit, 10) : this.fileslimit);
    };
    FilesLimitValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fileslimit][formControlName],[fileslimit][formControl],[fileslimit][ngModel]',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return FilesLimitValidator; })),
                            multi: true
                        }],
                    host: { '[attr.fileslimit]': 'fileslimit ? fileslimit : null' }
                },] }
    ];
    FilesLimitValidator.propDecorators = {
        fileslimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FilesLimitValidator;
}());
/**
 * A Directive that adds the `accept` validator to controls marked with the
 * `accept` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel accept="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * <file-upload name="files" ngModel [accept]="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * ```
 *
 * To specify more than one value, separate the values with a comma (e.g. <file-upload accept="audio/*,video/*,image/*"></file-upload>.
 *
 */
var FilesAcceptValidator = /** @class */ (function () {
    function FilesAcceptValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FilesAcceptValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('accept' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    FilesAcceptValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.accept != null ? this.validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FilesAcceptValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    FilesAcceptValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this.validator = FileUploadValidators.accept(this.accept.split(','));
    };
    FilesAcceptValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[accept][formControlName],[accept][formControl],[accept][ngModel]',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return FilesAcceptValidator; })),
                            multi: true
                        }],
                    host: { '[attr.accept]': 'accept ? accept : null' }
                },] }
    ];
    FilesAcceptValidator.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FilesAcceptValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilesAcceptDirective = /** @class */ (function () {
    function FilesAcceptDirective(fileUpload, simpleFileUpload) {
        this.fileUpload = null;
        this.fileUpload = fileUpload || simpleFileUpload;
    }
    /**
     * @return {?}
     */
    FilesAcceptDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setAccept(this.accept);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FilesAcceptDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('accept' in changes && changes['accept'].currentValue !== changes['accept'].previousValue) {
            this.setAccept(this.accept);
        }
    };
    /**
     * @private
     * @param {?} accept
     * @return {?}
     */
    FilesAcceptDirective.prototype.setAccept = /**
     * @private
     * @param {?} accept
     * @return {?}
     */
    function (accept) {
        if (this.fileUpload && this.fileUpload.control) {
            this.fileUpload.control.acceptFiles(accept);
        }
    };
    FilesAcceptDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'file-upload[accept]',
                    host: { '[attr.accept]': 'accept ? accept : null' }
                },] }
    ];
    /** @nocollapse */
    FilesAcceptDirective.ctorParameters = function () { return [
        { type: FileUploadComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
        { type: SimpleFileUploadComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
    ]; };
    FilesAcceptDirective.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FilesAcceptDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule(injector) {
        this.injector = injector;
        // const fileUploadElement = createCustomElement(FileUploadComponent, { injector });
        // customElements.define('file-upload', fileUploadElement);
    }
    /**
     * @return {?}
     */
    FileUploadModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () { };
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                    ],
                    declarations: [
                        FileUploadComponent,
                        FileUploadListItemComponent,
                        FileUploadIconComponent,
                        FileUploadAttributeComponent,
                        FileSizeValidator,
                        FilesLimitValidator,
                        FilesAcceptValidator,
                        FilesAcceptDirective,
                        SimpleFileUploadComponent
                    ],
                    exports: [
                        FileUploadComponent,
                        FileUploadAttributeComponent,
                        FileUploadIconComponent,
                        FileSizeValidator,
                        FilesLimitValidator,
                        FilesAcceptValidator,
                        FilesAcceptDirective,
                        SimpleFileUploadComponent
                    ],
                    entryComponents: [
                        FileUploadComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    FileUploadModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=iplab-ngx-file-upload.js.map


/***/ }),

/***/ "./src/app/demo/extension/files-upload/files-upload-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FilesUploadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesUploadRoutingModule", function() { return FilesUploadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files-upload.component */ "./src/app/demo/extension/files-upload/files-upload.component.ts");




var routes = [
    {
        path: '',
        component: _files_upload_component__WEBPACK_IMPORTED_MODULE_3__["FilesUploadComponent"]
    }
];
var FilesUploadRoutingModule = /** @class */ (function () {
    function FilesUploadRoutingModule() {
    }
    FilesUploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FilesUploadRoutingModule);
    return FilesUploadRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/extension/files-upload/files-upload.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"File Upload\" [options]=\"false\">\n      <form [formGroup]=\"demoForm\">\n        <file-upload formControlName=\"files\"></file-upload>\n      </form>\n      <div class=\"text-center m-t-20\">\n        <button class=\"btn btn-primary\">Upload Now</button>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/extension/files-upload/files-upload.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "file-upload {\n  min-height: 150px;\n  border: 1px solid rgba(42, 42, 42, 0.05);\n  background: rgba(204, 204, 204, 0.15);\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: inset 0 0 5px 0 rgba(43, 43, 43, 0.1);\n  outline: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbGVuZG9uc21hbGwvRGVza3RvcC9XQjAyNzUyMzkvVGVtcGxhdGUvZnVsbC12ZXJzaW9uL3NyYy9hcHAvZGVtby9leHRlbnNpb24vZmlsZXMtdXBsb2FkL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBcUM7RUFDckMscUNBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsaURBQThDO0VBQzlDLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9leHRlbnNpb24vZmlsZXMtdXBsb2FkL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpbGUtdXBsb2FkIHtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLDQyLDQyLDAuMDUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjA0LDIwNCwyMDQsMC4xNSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgcmdiYSg0Myw0Myw0MywwLjEpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCByZ2JhKDQzLDQzLDQzLDAuMSk7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/extension/files-upload/files-upload.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.component.ts ***!
  \***********************************************************************/
/*! exports provided: FilesUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesUploadComponent", function() { return FilesUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iplab/ngx-file-upload */ "./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js");




var FilesUploadComponent = /** @class */ (function () {
    function FilesUploadComponent() {
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadValidators"].filesLimit(2));
        this.demoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            files: this.filesControl
        });
    }
    FilesUploadComponent.prototype.ngOnInit = function () {
    };
    FilesUploadComponent.prototype.toggleStatus = function () {
        this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
    };
    FilesUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files-upload',
            template: __webpack_require__(/*! ./files-upload.component.html */ "./src/app/demo/extension/files-upload/files-upload.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./files-upload.component.scss */ "./src/app/demo/extension/files-upload/files-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilesUploadComponent);
    return FilesUploadComponent;
}());



/***/ }),

/***/ "./src/app/demo/extension/files-upload/files-upload.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.module.ts ***!
  \********************************************************************/
/*! exports provided: FilesUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesUploadModule", function() { return FilesUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _files_upload_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files-upload-routing.module */ "./src/app/demo/extension/files-upload/files-upload-routing.module.ts");
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-upload.component */ "./src/app/demo/extension/files-upload/files-upload.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iplab/ngx-file-upload */ "./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js");








var FilesUploadModule = /** @class */ (function () {
    function FilesUploadModule() {
    }
    FilesUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _files_upload_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilesUploadRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"]
            ],
            declarations: [_files_upload_component__WEBPACK_IMPORTED_MODULE_4__["FilesUploadComponent"]]
        })
    ], FilesUploadModule);
    return FilesUploadModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-extension-files-upload-files-upload-module.js.map