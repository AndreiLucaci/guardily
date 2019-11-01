"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentNotValidError = /** @class */ (function (_super) {
    __extends(ArgumentNotValidError, _super);
    function ArgumentNotValidError(parameterName, message) {
        if (message === void 0) { message = ArgumentNotValidError.defaultMessage; }
        var _this = _super.call(this, message + " Parameter: " + parameterName) || this;
        _this.parameterName = parameterName;
        _this.message = message;
        _this.name = "ArgumentNotValidError";
        _this.stack = new Error().stack;
        return _this;
    }
    ArgumentNotValidError.defaultMessage = "The given argument is not valid.";
    return ArgumentNotValidError;
}(Error));
exports.ArgumentNotValidError = ArgumentNotValidError;
