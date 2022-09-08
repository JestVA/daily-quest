class OrderManager {
  constructor() {
    this.orders = []
  }

  execute(command, ...args) {
    // command is an instance of the Command class, which has an execute method which holds the function passed when instantiating the command class via the order functions
    console.log(this.orders)
    return command.execute(this.orders, ...args)
  }

  getInventory() {
    console.log(this.orders)
  }
}

class Command {
  // execute is a function
  constructor(execute) {
    this.execute = execute
  }
}

function PlaceOrderCommand(order, id) {
  return new Command(orders => {
    orders.push(id)
  }) // binds to the execute method in the Command class
}

function CancelOrderCommand(id) {
  return new Command(orders => {
    let idx = orders.indexOf(id)
    if(idx > -1) {
      orders.splice(idx, 1)
    }
  })
}

function TrackOrderCommand(id) {
  return new Command((orders) => {
    orders.includes(id) ? console.log("order found with id: ", id) :console.log("order not found with id: ", id)
  })
}

const manager = new OrderManager()

manager.execute(PlaceOrderCommand("Pad Thai", "1234"))
manager.execute(PlaceOrderCommand("Mua Dhib", "5678"))
manager.execute(CancelOrderCommand("5678"))
manager.execute(TrackOrderCommand("1234"))
manager.execute(TrackOrderCommand("5678"))