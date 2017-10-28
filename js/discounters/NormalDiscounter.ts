class NormalDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        var total = price * qty;
        if (total >= 1000 && qty > 3) {
            return total * 0.85;
        }
        return total;
    }
}