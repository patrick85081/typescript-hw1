/// <reference path="../node_modules/@types/jquery/index.d.ts" />

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