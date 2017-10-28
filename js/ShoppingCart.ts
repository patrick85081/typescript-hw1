class ShoppingCart {
    Calculate(model: ShoppingModel): number {
        var [price, qty] = [model.price, model.qty];
        return DiscounterFactory.GetDiscounter(model).Calculate(price, qty);
    }
}