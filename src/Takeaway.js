function Takeaway() {
  this.basket = []
  this.cost = 0
  this.menu = {
    'Margherita': 6,
    'Funghi': 6,
    'Fiorentina': 6,
    'Formaggi': 6,
    'Giardino': 6,
    'Tropicali': 7,
    'Reine': 7,
    'Marino': 7,
    'Pepporoni': 7,
    'Carne': 7,
  }
}

Takeaway.prototype.order = function(item, quantity) {
  if (item in this.menu) {
    this.basket.push([item, quantity]);
  }
  else {
    throw 'Sorry, that item is not on the menu, please select another item from the menu';
  }
};

Takeaway.prototype.calculateCost = function() {
  for(i = 0; i < this.basket.length; i++){
    var itemArray = this.basket[i]
    this.cost += (this.menu[itemArray[0]] * itemArray[1]);
  }
};
