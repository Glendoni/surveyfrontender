(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-app-inline-chat-inline-chat-module"],{

/***/ "./src/app/demo/app/inline-chat/inline-chat-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/app/inline-chat/inline-chat-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: InlineChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineChatRoutingModule", function() { return InlineChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inline_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-chat.component */ "./src/app/demo/app/inline-chat/inline-chat.component.ts");




var routes = [
    {
        path: '',
        component: _inline_chat_component__WEBPACK_IMPORTED_MODULE_3__["InlineChatComponent"]
    }
];
var InlineChatRoutingModule = /** @class */ (function () {
    function InlineChatRoutingModule() {
    }
    InlineChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InlineChatRoutingModule);
    return InlineChatRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/app/inline-chat/inline-chat.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/demo/app/inline-chat/inline-chat.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\" cardClass=\"msg-card mb-0\" blockClass=\"card-body msg-block\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-12\">\n          <div class=\"h-list-header m-b-5\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"msg-friends\" class=\"form-control\" placeholder=\"Search Friend . . .\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\"><i class='feather icon-search'></i></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"h-list-body\">\n            <div class=\"msg-user-list scroll-div\">\n              <div class=\"main-friend-list\">\n                <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-width]=\"'100%'\" [style.max-height]=\"'calc(100vh - 300px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n                  <div *ngFor=\"let friends of friendsList; let i = index\" class=\"media userlist-box\" [ngClass]=\"{'active': i === 1}\" [attr.data-id]=\"friends.id\" [attr.data-status]=\"{'online': friends.status, 'offline': !friends.status}\" [attr.data-username]=\"friends.name\">\n                    <a class=\"media-left\" href=\"javascript:\"><img class=\"media-object img-radius\" src=\"{{friends.photo}}\" alt=\"{{ friends.name }}\"><div class=\"live-status\" *ngIf=\"friends.new\">{{friends.new}}</div></a>\n                    <div class=\"media-body\">\n                      <h6 class=\"chat-header\">{{friends.name}}<small class=\"d-block\" *ngIf=\"friends.time\" [ngClass]=\"{'text-c-green': friends.status, 'text-c-red': !friends.status}\">{{friends.time}}</small></h6>\n                    </div>\n                  </div>\n                </perfect-scrollbar>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-9 col-md-12\">\n          <div class=\"h-list-body\">\n            <div class=\"msg-user-chat scroll-div\">\n              <perfect-scrollbar ngClass=\"datta-scroll\" [style.max-width]=\"'100%'\" [style.max-height]=\"'calc(100vh - 300px)'\" [usePSClass]=\"'datta'\" [disabled]=\"null\" [autoPropagation] =\"true\">\n                <div class=\"main-friend-chat\">\n                  <div class=\"media chat-messages\">\n                    <a class=\"media-left photo-table\" href=\"javascript:\"><img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\"></a>\n                    <div class=\"media-body chat-menu-content\">\n                      <div class=\"\">\n                        <p class=\"chat-cont\">hello Datta! Will you tell me something</p>\n                        <p class=\"chat-cont\">about yourself?</p>\n                      </div>\n                      <p class=\"chat-time\">8:20 a.m.</p>\n                    </div>\n                  </div>\n                  <div class=\"media chat-messages\">\n                    <div class=\"media-body chat-menu-reply\">\n                      <div class=\"\">\n                        <p class=\"chat-cont\">Ohh! very nice</p>\n                      </div>\n                      <p class=\"chat-time\">8:22 a.m.</p>\n                    </div>\n                  </div>\n                  <div class=\"media chat-messages\">\n                    <a class=\"media-left photo-table\" href=\"javascript:\"><img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\"></a>\n                    <div class=\"media-body chat-menu-content\">\n                      <div class=\"\">\n                        <p class=\"chat-cont\">can you help me?</p>\n                      </div>\n                      <p class=\"chat-time\">8:20 a.m.</p>\n                    </div>\n                  </div>\n                  <div #newChat [innerHTML]=\"newReplay\"></div>\n                </div>\n              </perfect-scrollbar>\n            </div>\n          </div>\n          <hr>\n          <div class=\"msg-form\">\n            <div class=\"input-group mb-0\">\n              <input type=\"text\" [(ngModel)]=\"message\" class=\"form-control msg-send-chat\" placeholder=\"Text . . .\" (keyup)=\"sentMsg(1)\" (keyup.enter)=\"sentMsg(0)\">\n              <div class=\"input-group-append\">\n                <input type=\"file\" id=\"imgupload\" style=\"display:none\" />\n                <button id=\"OpenImgUpload\" class=\"btn btn-secondary btn-icon\" type=\"button\" data-toggle=\"tooltip\" title=\"file attachment\"><i class=\"feather icon-paperclip\"></i></button>\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary btn-icon btn-msg-send\" type=\"button\" [ngClass]=\"{'btn-danger': message_error === true}\" (click)=\"sentMsg(0)\"><i class=\"feather icon-play\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/app/inline-chat/inline-chat.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demo/app/inline-chat/inline-chat.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYXBwL2lubGluZS1jaGF0L2lubGluZS1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/app/inline-chat/inline-chat.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/app/inline-chat/inline-chat.component.ts ***!
  \***************************************************************/
/*! exports provided: InlineChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineChatComponent", function() { return InlineChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fack-db/friends-list */ "./src/app/fack-db/friends-list.ts");
/* harmony import */ var _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fack-db/user-chat */ "./src/app/fack-db/user-chat.ts");




var InlineChatComponent = /** @class */ (function () {
    function InlineChatComponent() {
        this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
        this.newReplay = '';
    }
    InlineChatComponent.prototype.ngOnInit = function () {
        this.userChat = _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__["UserChat"].chat;
        this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', 1);
        if (this.chatMessage) {
            var message = findObjectByKeyValue(this.userChat, 'friend_id', 1);
            if (message) {
                this.chatMessage['chat'] = message['messages'];
            }
        }
    };
    InlineChatComponent.prototype.sentMsg = function (flag) {
        var _this = this;
        if (this.message === '' || this.message === undefined) {
            this.message_error = true;
        }
        else {
            if (flag === 1) {
                this.message_error = false;
            }
            else {
                this.message_error = false;
                var temp_replay_1 = this.message;
                var html_send = void 0;
                html_send = '<div class="media chat-messages">' +
                    '<div class="media-body chat-menu-reply">' +
                    '<div class="">' +
                    '<p class="chat-cont">' + this.message + '</p>' +
                    '</div>' +
                    '<p class="chat-time">now</p>' +
                    '</div>' +
                    '</div>';
                this.newReplay = this.newReplay + html_send;
                this.message = '';
                this.friendWriting = true;
                setTimeout(function () {
                    _this.friendWriting = false;
                    var html_replay;
                    html_replay = '<div class="media chat-messages">' +
                        '<a class="media-left photo-table" href="javascript:">' +
                        '<img class="media-object img-radius img-radius m-t-5" src="' + _this.chatMessage.photo + '" alt="' + _this.chatMessage.name + '">' +
                        '</a>' +
                        '<div class="media-body chat-menu-content">' +
                        '<div class="">' +
                        '<p class="chat-cont">hello superior personality you write</p>' +
                        '<p class="chat-cont">' + temp_replay_1 + '</p>' +
                        '</div>' +
                        '<p class="chat-time">now</p>' +
                        '</div>' +
                        '</div>';
                    _this.newReplay = _this.newReplay + html_replay;
                }, 3000);
            }
        }
    };
    InlineChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inline-chat',
            template: __webpack_require__(/*! ./inline-chat.component.html */ "./src/app/demo/app/inline-chat/inline-chat.component.html"),
            styles: [__webpack_require__(/*! ./inline-chat.component.scss */ "./src/app/demo/app/inline-chat/inline-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InlineChatComponent);
    return InlineChatComponent;
}());

function findObjectByKeyValue(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return false;
}


/***/ }),

/***/ "./src/app/demo/app/inline-chat/inline-chat.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/app/inline-chat/inline-chat.module.ts ***!
  \************************************************************/
/*! exports provided: InlineChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineChatModule", function() { return InlineChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inline_chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-chat-routing.module */ "./src/app/demo/app/inline-chat/inline-chat-routing.module.ts");
/* harmony import */ var _inline_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-chat.component */ "./src/app/demo/app/inline-chat/inline-chat.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var InlineChatModule = /** @class */ (function () {
    function InlineChatModule() {
    }
    InlineChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inline_chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["InlineChatRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_inline_chat_component__WEBPACK_IMPORTED_MODULE_4__["InlineChatComponent"]]
        })
    ], InlineChatModule);
    return InlineChatModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-app-inline-chat-inline-chat-module.js.map