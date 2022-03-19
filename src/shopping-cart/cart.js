import { find, remove } from 'loadash';

export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) remove(this.items, itemToFind);
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }
}
