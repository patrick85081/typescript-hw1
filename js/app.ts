/// <reference path="../node_modules/@types/jquery/index.d.ts" />

enum Level {
    Normal = 1,
    VIP = 2,
}

class ShoppingModel {
    constructor() {
        this.price = $("#price").val() as number;
        this.qty = $("#qty").val() as number;
        this.level = +($("#level").val() as string);
    }
    price: number = 0;
    qty: number = 0;
    level: Level;
}

interface IDiscount {
    Calculate(model: ShoppingModel): number;
}

class VIPDiscount implements IDiscount {
    Calculate(model: ShoppingModel): number {
        var total = model.price * model.qty;
        if (total >= 500) {
            return total * 0.8;
        }
        return total;
    }
}

class NormalDiscount implements IDiscount {
    Calculate(model: ShoppingModel): number {
        var total = model.price * model.qty;
        if (total >= 1000 && model.qty > 3) {
            return total * 0.85;
        }
        return total;
    }
}

class NonDiscount implements IDiscount {
    Calculate(model: ShoppingModel): number {
        var total = model.price * model.qty;
        return total;
    }
}

class ShoppingCart {
    static Calculate(model: ShoppingModel): number {
        var discount: IDiscount;
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
    }
}

$(document).ready(() => {
    $("#calculate").click(() => {
        var result = ShoppingCart.Calculate(new ShoppingModel());
        //console.log($("#result"));
        $("#result").html(`總共 ${result} 元`);
    });
});


