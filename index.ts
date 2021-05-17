

enum Unit {
  Can,
  Bottle,
  Pound,
  Ounce
}


interface SKU {
  unit: Unit,
  description: String,

}

type Money = Float // rounded to two decimals


interface Item {
  price: Money,
  sku: SKU,
  quantity: PositiveInteger
}
interface Promotion {


}


interface FixedAmountQuantityDiscount {
  quantify: PositiveInteger,
  item: Item,
  calculateNewPrice(items: Item[]),
  limit: PositiveInteger
}
interface PercentageQuantityDiscount {
  minimumQuantity: PositiveInteger,
  item: Item,
  percentage: Float
}
interface CheckoutItem {
  item: Item,
  checkoutPrice: Money,
  promotion: promotion
}

interface Cart {

  addToCart(pricing: Item): Cart,
  currentTotal(items: CheckoutItem[], discount?: ): Money

}
interface Checkout {
  cart: Cart

  subtotal(items: CheckoutItem[]): Money

}


interface ItemStore {
  items: Item[],
  quantifyOfItem(item: Item): Number,
  addItem(item: item): ItemStore

}