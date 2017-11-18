"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_state_1 = require("../states/app-state");
var actions_1 = require("../actions/actions");
function reducerStore(state, action) {
    if (state === void 0) { state = app_state_1.INIT_STATE; }
    switch (action.type) {
        case actions_1.LOADED_USER_ACTION:
            var userData = action;
            var newState = Object.assign({}, state);
            newState.storeData = {
                user: action.payload.user
            };
            return newState;
        default:
            return state;
    }
}
exports.reducerStore = reducerStore;
//# sourceMappingURL=reducer.js.map