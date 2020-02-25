function airlineBooking(){
    
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var origin = document.getElementById("origin").value;
    var dest = document.getElementById("dest").value;
    var depDate = document.getElementById("depDate").value;
    var retDate = document.getElementById("retDate").value;
    
    if (!lastname || !firstname || !gender || !email || !origin || !dest || !depDate || !retDate){
        document.getElementById("output").innerHTML = "Please fill in the information completely. It is required.";
    }
    else if (!email.includes("@")){
        document.getElementById("output").innerHTML = "The email address you have input is invalid. Please try again.";
    }
    else if (retDate<=depDate){
        document.getElementById("output").innerHTML = "Your departure date is later than your return date, which is invalid. Please try again.";
    }
    else{
        document.getElementById("output").innerHTML = "You have booked successfully!" + "<br/>" + "Last Name: " + lastname + "<br/>" + "First Name: " + firstname + "<br/>" + "Gender: " + gender + "<br/>" + "Email Address: " + email + "<br/>" + "Origin: " + origin + "<br/>" + "Destination: " + dest + "<br/>" + "Departure Date: " + depDate + "<br/>" + "Return Date: " + retDate;
    }

}