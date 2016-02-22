describe("Takeaway", function(){

  var takeaway;

  beforeEach(function(){
    takeaway = new Takeaway();
  });

  describe("Menu", function(){

    it ("has a menu that can be accessed", function(){
      expect(takeaway.menu).toEqual(jasmine.objectContaining({"Fiorentina": 6}));
    });

  });

  describe("Order", function(){

    it ("can add one order to basket", function(){
      takeaway.order("Fiorentina", 2);
      expect(takeaway.basket).toContain(["Fiorentina", 2])
    });

    it ("can add multiple orders to basket", function(){
      takeaway.order("Fiorentina", 2);
      takeaway.order("Funghi", 1);
      takeaway.order("Tropicali", 3);
      expect(takeaway.basket).toEqual([["Fiorentina", 2], ["Funghi", 1], ["Tropicali", 3]])
    });

    it ("throws error if item that is not on the menu is ordered", function(){
      expect(function(){takeaway.order("Big Mac", 1);}).toThrow("Sorry, that item is not on the menu, please select another item from the menu")
    });

  });

  describe("Calculate total cost of basket", function(){

    it("can calculate the basket cost of multiple orders", function(){
      takeaway.order("Fiorentina", 2);
      takeaway.order("Funghi", 1);
      takeaway.calculateCost();
      expect(takeaway.cost).toEqual(18)
    });

    it ("can calculate the basket cost with one order", function(){
      takeaway.order("Fiorentina", 2);
      takeaway.calculateCost();
      expect(takeaway.cost).toEqual(12)
    });



  });

});
