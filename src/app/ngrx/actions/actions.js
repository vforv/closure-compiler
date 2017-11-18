"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOADED_USER_ACTION = 'LOADED_USER_ACTION';
exports.USER_ACTION = 'USER_ACTION';
var UserAction = (function () {
    function UserAction() {
        this.type = exports.USER_ACTION;
    }
    return UserAction;
}());
exports.UserAction = UserAction;
var LoadedUserAction = (function () {
    function LoadedUserAction(payload) {
        this.payload = payload;
        this.type = exports.LOADED_USER_ACTION;
    }
    return LoadedUserAction;
}());
exports.LoadedUserAction = LoadedUserAction;
//# sourceMappingURL=actions.js.map