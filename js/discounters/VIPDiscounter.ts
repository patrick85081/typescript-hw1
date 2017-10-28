class VIPDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        var total = price * qty;
        if (total >= 500) {
            return total * 0.8;
        }
        return total;
    }
}