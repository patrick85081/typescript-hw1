"use strict";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
$(document).ready(function () {
    $("#calculate").click(function () {
        var result = new ShoppingCart().Calculate(new ShoppingModel());
        //console.log($("#result"));
        $("#result").html("\u7E3D\u5171 " + result + " \u5143");
    });
});
//# sourceMappingURL=app.js.map