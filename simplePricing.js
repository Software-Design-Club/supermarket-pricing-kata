var Can = /** @class */ (function () {
    function Can() {
    }
    Can.prototype.constraint = function (quantity) {
        return true;
    };
    return Can;
}());
var Pound = /** @class */ (function () {
    function Pound() {
    }
    Pound.prototype.constraint = function (quantity) {
        return true;
    };
    return Pound;
}());
var CannedItem = /** @class */ (function () {
    function CannedItem() {
        this.name = 'Beans';
        this.unit = new Can();
        this.price = 0.5;
    }
    return CannedItem;
}());
var BulkItem = /** @class */ (function () {
    function BulkItem() {
        this.name = 'Dry Beans';
        this.unit = new Pound();
        this.price = 1.99;
    }
    return BulkItem;
}());
