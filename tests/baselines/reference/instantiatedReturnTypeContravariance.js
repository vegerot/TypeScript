//// [instantiatedReturnTypeContravariance.ts]
interface B<T> {

name: string;

x(): T;

}
 
class c {

foo(): B<void> {

return null;

}

}
 
class d extends c {

foo(): B<number> {

return null;

}

}

 


//// [instantiatedReturnTypeContravariance.js]
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

var c = /** @class */ (function () {
    function c() {
    }c.prototype.foo = function () {

        return null;

    };
    return c;
}());
var d = /** @class */ (function (_super) {
    __extends(d, _super);function d() {
        return _super !== null && _super.apply(this, arguments) || this;
    }d.prototype.foo = function () {

        return null;

    };
    return d;
}(c));
