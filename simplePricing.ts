type Price = number // Float to 2 decimal places

interface UnitOfSale {
  divisible: boolean
}

class Can implements UnitOfSale {
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

class Beans implements Item {
  name = 'Beans'
  unit = new Can()
  price = 0.5
}
