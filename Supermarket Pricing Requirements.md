## Supermarket Pricing Requirements

###  Simple Pricing
- A can of beans cost $0.50
- Dry Beans are $1.99 a pound

  #### Question
  How does UnitOfSale evolves? How does the concrete implementation evolve.

### Fractional Pricing
- Item is $X a weight unit
- fractional unit is $X/fraction


### Quantity Discount
- X cans of item are $X
  - If you buy X+1 is the original price


### Promotional Discount
- Buy X units item  get Y free
  - X+1 is charged at original price

### Reflection/Review
- What is the state of our design?
- Do we want to keep going?

### Percentage Discount
- Discount/Sale ex: X% an item


### Quantity Percentage Discount
- Buy x pounds and get x% off



## Questions to consider

- does fractional money exist?
- when (if ever) does rounding take place?
- how do you keep an audit trail of pricing decisions (and do you need to)?
- are costs and prices the same class of thing?
- if a shelf of 100 cans is priced using “buy two, get one free”, how do you value the stock?

