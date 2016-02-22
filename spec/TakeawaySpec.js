describe("Takeaway", function(){

  var takeaway;

  beforeEach(function(){
    takeaway = new Takeaway();
  });

// As a customer
// So that I can check if I want to order something
// I would like to see a list of dishes with prices
  describe("Menu", function(){

    it ("has a menu that can be accessed", function(){
      expect(takeaway.showMenu()).toEqual(jasmine.objectContaining({"Fiorentina": 6}));
    });

  });

});
