import Cart from './cart';

describe('Cart', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal', () => {
    it('should get the shopping cart total', () => {
      expect(cart.getTotal()).toEqual(0);
    });
  });

  it('should multiply quantity and price and receive the total amount ', () => {
    const item = {
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(1000000);
  });

  it('should update total when a prodcut gets included and removed', () => {});
});
