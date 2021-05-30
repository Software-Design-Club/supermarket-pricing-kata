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

}

interface QuantityDiscount {
  minimumQuantity: number
  price: Price
}

interface DiscountedItem extends CheckoutItem {
  discountedPrice: Price
}

interface CheckoutItem {
  quantity: number
  item: Item
  price: Price
  promotion: QuantityDiscount | NoDiscount
  createCheckoutItem(quantity: number, item: Item): CheckoutItem | DiscountedItem// validation on quantity

}

interface Checkout {
  calculateTotal(items: CheckoutItem[]): Price
}

class CannedItem implements Item {
  name = 'Beans'
  unit = new Can()
  price = 0.5
}

class BulkItem implements Item {
  name = 'Dry Beans'
  unit = new Pound()
  price = 1.99
}



