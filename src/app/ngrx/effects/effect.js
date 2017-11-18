"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/switchMap");
var actions_1 = require("../actions/actions");
var user_service_1 = require("../../shared/services/user.service");
var LoadUserEffects = (function () {
    function LoadUserEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.userAcc$ = this.actions$
            .ofType(actions_1.USER_ACTION)
            .switchMap(function () { return _this.userService.getUser(); })
            .map(function (useData) { return new actions_1.LoadedUserAction(useData); });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], LoadUserEffects.prototype, "userAcc$", void 0);
    LoadUserEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, user_service_1.UserService])
    ], LoadUserEffects);
    return LoadUserEffects;
}());
exports.LoadUserEffects = LoadUserEffects;
//# sourceMappingURL=effect.js.map