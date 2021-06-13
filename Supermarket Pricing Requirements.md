## Supermarket Pricing Requirements

###  Simple Pricing
- [x] A can of beans cost $0.50
- [x] Dry Beans are $1.99 a pound



### Fractional Pricing
- [x] Dry breans are 1.99 a pound/ 8oz of dry breans - 1.00
- [x] Cans can only be sold in positive intergers
- [x] Pounds can be sold in fractions


### Quantity Discount
- [x] 3 Cans are $1(when each is normally $.5)
  - [x] What happens if you buy 4 cans?
- [x] 3 pounds are $3(when normally $1.99)


### Promotional Discount
-  [x] Buy 3 units item get 1 free(what is the price of the 4th one?)
  - [x] Buy 4, you get 5


### Reflection/Review
- What is the state of our design?
- Do we want to keep going?

### Percentage Discount
- [x] Discount/Sale ex: X% an item


### Quantity Percentage Discount
- [x] Buy x pounds and get x% off



## Questions to consider

- does fractional money exist?
- when (if ever) does rounding take place?
- how do you keep an audit trail of pricing decisions (and do you need to)?
- if a shelf of 100 cans is priced using “buy two, get one free”, how do you value the stock?
- are costs and prices the same class of thing?



- How does UnitOfSale evolves? How does the concrete implementation evolve?
- What would the implementation of pricing floor look like?