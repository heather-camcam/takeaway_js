function Takeaway() {
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

Takeaway.prototype.showMenu = function(){
  return this.menu;
};
