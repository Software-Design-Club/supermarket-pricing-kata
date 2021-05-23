var Can = /** @class */ (function () {
    function Can() {
        this.divisible = false;
    }
    return Can;
}());
var Bulk = /** @class */ (function () {
    function Bulk() {
        this.divisible = false;
    }
    return Bulk;
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
        this.unit = new Bulk();
        this.price = 1.99;
    }
    return BulkItem;
}());
