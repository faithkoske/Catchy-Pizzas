

//user interface
function loc(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;

    if(email.length < 10){
        alert("Email invalid")
    }
    if(name.length < 2){
        alert("Please enter full name")
    }
    if (location< 2){
        alert("Please enter your location")
    }
    if (email.length > 10 && name.length > 2 && location.length > 2){
        alert("Dear" + name + "we have recieved your location")
    }
};
function Placeorder(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
   }
   var totalOrderPrice = [];
   
   var pizzaSize = ["Small", "Medium", "Large"];
   var pizzaCrust = ["Thin", "Stuffed", "Cheesefilled"];
   var pizzaTopping = ["Pepperoni", "Sausages", "Mushrooms", "Onions","Olives"];
   
   Placeorder.prototype.costOfPizza = function () {
    if (this.size === pizzaSize[0]) {
      this.price += 500;
    } else if (this.size === pizzaSize[1]) {
      this.price += 800;
    } else if (this.size === pizzaSize[2]) {
      this.price += 1000;
    }
    if (this.crust === pizzaCrust[0]) {
      this.price += 50;
    } else if (this.cheese === pizzaCrust[1]) {
      this.price += 100;
    } else if (this.cheese === pizzaCrust[2]) {
      this.price += 200;
    }
    if (this.topping === pizzaTopping[0]) {
      this.price += 100;
    } else if (this.topping === pizzaTopping[1]) {
      this.price += 200;
    } else if (this.topping === pizzaTopping[2]) {
      this.price += 300;
    } else if (this.topping === pizzaTopping[3]) {
      this.price += 50;
    }
      else if (this.topping === pizzaTopping[4]) {
        this.price += 50;
    }
    return this.price;
   }
   
   Placeorder.prototype.costOfDelivery = function () {
    return this.deliveryFee;
   }
   
   
   Placeorder.prototype.totalCost = function () {
    var shoppingCartTotal = 0;
    for (var order = 0; order < totalOrderPrice.length; order++) {
      shoppingCartTotal += totalOrderPrice[order];
    }
    return shoppingCartTotal;
   }
   $(document).ready(function () {
    $("input#cost").click(function (event) {
      event.preventDefault();
      var sizes = $("select#Sizes").val();
      var crusts = $("select#crusts").val();
      var toppings = $("select#toppings").val();
      var newPizzauser = new Placeorder(sizes, crusts, toppings);
      newPizzauser.costOfPizza();
      totalOrderPrice.push(newPizzauser.price);
      $("#type").text("pizza :" + sizes);
      $("#typ").text("crusts  :" + crusts);
      $("#ty").text("topping  :" + toppings);
      $("#t").text("total cost  :" + newPizzauser.totalCost());
    });
   });

