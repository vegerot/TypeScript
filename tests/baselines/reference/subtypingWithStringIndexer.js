//// [subtypingWithStringIndexer.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: string]: Base;
}

class B extends A {
    [x: string]: Derived; // ok
}

class B2 extends A {
    [x: string]: Derived2; // ok
}

module Generics {
    class A<T extends Base> {
        [x: string]: T;
    }

    class B extends A<Base> {
        [x: string]: Derived; // ok
    }

    class B2 extends A<Base> {
        [x: string]: Derived2; // ok
    }

    class B3<T extends Base> extends A<T> {
        [x: string]: Derived; // error
    }

    class B4<T extends Base> extends A<T> {
        [x: string]: Derived2; // error
    }
}


//// [subtypingWithStringIndexer.js]
// Derived type indexer must be subtype of base type indexer
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


var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var B2 = /** @class */ (function (_super) {
    __extends(B2, _super);function B2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B2;
}(A));
var Generics;
(function (Generics) {
    var A = /** @class */ (function () {
        function A() {
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B;
    }(A));
    var B2 = /** @class */ (function (_super) {
        __extends(B2, _super);function B2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B2;
    }(A));
    var B3 = /** @class */ (function (_super) {
        __extends(B3, _super);function B3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B3;
    }(A));
    var B4 = /** @class */ (function (_super) {
        __extends(B4, _super);function B4() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B4;
    }(A));
})(Generics || (Generics = {}));
