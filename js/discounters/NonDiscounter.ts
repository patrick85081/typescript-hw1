class NonDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        var total = price * qty;
        return total;
    }
}