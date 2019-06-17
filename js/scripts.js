

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

