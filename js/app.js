"use strict";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
var Level;
(function (Level) {
    Level[Level["Normal"] = 1] = "Normal";
    Level[Level["VIP"] = 2] = "VIP";
})(Level || (Level = {}));
var ShoppingModel = /** @class */ (function () {
    function ShoppingModel() {
        this.price = 0;
        this.qty = 0;
        this.price = $("#price").val();
        this.qty = $("#qty").val();
        this.level = +$("#level").val();
    }
    return ShoppingModel;
}());
var VIPDiscount = /** @class */ (function () {
    function VIPDiscount() {
    }
    VIPDiscount.prototype.Calculate = function (model) {
        var total = model.price * model.qty;
        if (total >= 500) {
            return total * 0.8;
        }
        return total;
    };
    return VIPDiscount;
}());
var NormalDiscount = /** @class */ (function () {
    function NormalDiscount() {
    }
    NormalDiscount.prototype.Calculate = function (model) {
        var total = model.price * model.qty;
        if (total >= 1000 && model.qty > 3) {
            return total * 0.85;
        }
        return total;
    };
    return NormalDiscount;
}());
var NonDiscount = /** @class */ (function () {
    function NonDiscount() {
    }
    NonDiscount.prototype.Calculate = function (model) {
        var total = model.price * model.qty;
        return total;
    };
    return NonDiscount;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    ShoppingCart.Calculate = function (model) {
        var discount;
        switch (model.level) {
            case Level.Normal:
                discount = new NormalDiscount();
                break;
            case Level.VIP:
                discount = new VIPDiscount();
                break;
            default:
                discount = new NonDiscount();
                break;
        }
        return discount.Calculate(model);
    };
    return ShoppingCart;
}());
$(document).ready(function () {
    $("#calculate").click(function () {
        var result = ShoppingCart.Calculate(new ShoppingModel());
        //console.log($("#result"));
        $("#result").html("\u7E3D\u5171 " + result + " \u5143");
    });
});
//# sourceMappingURL=app.js.map