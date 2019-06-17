function Cost(sizes,toppings,crust,delivery){
    this.sizes=sizes;
    this.crust=crust;
    this.number=number;
    this.toppings=toppings;
}
function sizes(large,medium,small){
    this.large=2500;
    this.medium=1500;
    this.small=1000;
}
function crust(thin,stuffed,cheesefilled){
    this.thin=500;
    this.stuffed=700;
    this.cheesefilled=900;
}
function toppings(pepperonni,mushrooms,onions,sausage ,olives){
    this.pepperonni=200;
    this.onions=200;
    this.mushrooms=200;
    this.olives=200;
    this.sausage=200;
}
function delivery(Yes,No){
    this.Yes=500;
    this.No=0;
}
Cost.prototype.cost = function() {
    return this.sizes + this.crust+this.toppings+ this.delivery;
}

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

