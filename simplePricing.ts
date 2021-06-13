type Price = number // Float to 2 decimal places


interface UnitOfSale  {
  constraint(quantity: number): boolean
}

class Can implements UnitOfSale {
  constraint(quantity: number): boolean {
    return true;
  }

}

class Pound implements UnitOfSale {
  constraint(quantity: number): boolean {
    return true;
  }
}


interface Item {
  name: string,
  unit: UnitOfSale
  price: Price
  promotion: Discount

}

type Discount = SingleItemDiscount | BulkDiscount | BuyXGetYFreeDiscount | NoDiscount

interface SingleItemDiscount {
  minimumQuantity: 1
  numberOfDiscounted: number
  discount: number// float
}

interface BulkDiscount {
  minimumQuantity: number
  numberOfDiscountedItems: number
  discount: number // float 0.0 to 1.0
}

interface BuyXGetYFreeDiscount {
  minimumQuantity: number, // x + y
  numberOfDiscountedItems: number, //1
  discount: 1.0
}

interface NoDiscount {
  minimumQuantity: typeof Infinity,
  numberDiscountedItems: 0
  discount: 0.0
}

interface DiscountedItem extends Item {
  originalPrice: Price
}

interface CheckoutPriceCalculator {
  calculateItemPrice(cartItem: CartItem): Array<Item | DiscountedItem>
  // if minimumQuanity then numberOfDiscoutedItems is promotions.price * discount.discount(DiscountedItem); CartItem.quanity - numberOfDiscountedItems is item.price(Item)
}

interface CartItem {
  item:  Item | DiscountedItem,
  quantity: number
}

interface Cart {
  items: Array<CartItem>
  subtotal: Price
  checkoutPriceCalculator: CheckoutPriceCalculator
  addItem(item: Item): Cart
  calculateSubTotal(items: Array<CartItem>): Cart
}


class CannedItem implements Item {
  name = 'Beans'
  unit = new Can()
  price = 0.5
  promotion: Discount
}

class BulkItem implements Item {
  name = 'Dry Beans'
  unit = new Pound()
  price = 1.99
  promotion: Discount
}



