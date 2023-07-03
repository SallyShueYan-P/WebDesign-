function validateForm() {
    var fName = document.forms["myForm"]["fName"].value; 
    var lName = document.forms["myForm"]["lName"].value; 
    var email = document.forms["myForm"]["email"].value; 
    var phone = document.forms["myForm"]["phone"].value; 

    var model = document.forms["myForm"]["model"].value; 
    var lPlateNum = document.forms["myForm"]["lPlateNum"].value; 

    var date = document.forms["myForm"]["date"].value; 


    if (fName == "") {
        alert("First Name must be filled out");
        return false; 
    }

    if (lName == "") {
        alert("Last Name must be filled out");
        return false; 
    }

    if (email == "") {
        alert("Email must be filled out"); 
        return false;
    } 

    if (phone == "") {
        alert("Phone number must be filled out"); 
        return false;
    } 

    if (model == "") {
        alert("Model must be filled out");
        return false; 
    }

    if (lPlateNum == "") {
        alert("License Plate Number must be filled out"); 
        return false;
    } 

    if (date == "") {
        alert("Date must be filled out"); 
        return false;
    } 
}