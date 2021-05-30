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

interface CheckoutItem {
  quantity: number
  item: Item
  createCheckoutItem(quantity: number, item: Item): CheckoutItem // validation on quantity
  price(quantity: number, item: Item): Price
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



