class DiscounterFactory {
    static GetDiscounter(model: ShoppingModel) :IDiscounter {
        switch (model.level) {
            case Level.Normal:
                return new NormalDiscounter();

            case Level.VIP:
                return new VIPDiscounter();

            default:
                return new NonDiscounter();
        }
    }
}