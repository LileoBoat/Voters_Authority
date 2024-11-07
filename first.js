function myFunction(){
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;

    let voteable;

    if(age >= 18 && country == "Ghana"){
        voteable = "You are eligible to vote";  
    }

    else if(age >= 18 && country != "Ghana"){
        voteable = "You can vote when you become a Ghanaian citizen";
    }

    else if(age < 18 && country == "Ghana"){
        voteable = "You are not eligible to vote";
    }

    else{
        voteable = "You are not eligible to vote";
    }

    document.getElementById("demo").innerHTML = voteable;
    
}