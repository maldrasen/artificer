global.Order = class Order extends Form {

  static forClient() {
    return Object.keys(Order.instances).filter(code => {
      return Flag.lookup(`order.${code}`) == 'Y'
    }).map(code => Order.lookup(code).properties);
  }

}
