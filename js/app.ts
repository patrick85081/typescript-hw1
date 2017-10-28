/// <reference path="../node_modules/@types/jquery/index.d.ts" />

$(document).ready(() => {
    $("#calculate").click(() => {
        var result = new ShoppingCart().Calculate(new ShoppingModel());
        //console.log($("#result"));
        $("#result").html(`總共 ${result} 元`);
    });
});