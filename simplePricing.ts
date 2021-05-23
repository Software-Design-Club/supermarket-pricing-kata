type Price = number // Float to 2 decimal places

interface UnitOfSale {
  divisible: boolean
}

class Can implements UnitOfSale {
  divisible = false
}

class Bulk implements UnitOfSale {
  divisible = false
}


interface Item {
  name: string,
  unit: UnitOfSale
  price: Price

}

interface Checkout {
  calculateTotal(items: Item[]): Price
}

class CannedItem implements Item {
  name = 'Beans'
  unit = new Can()
  price = 0.5
}

class BulkItem implements Item {
  name = 'Dry Beans'
  unit = new Bulk()
  price = 1.99
}
