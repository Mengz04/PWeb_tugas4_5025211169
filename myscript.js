const form = document.querySelector("window-container");
const link_login = document.querySelector(".window-container");
link_login.href = "index.html";

function create_account(){
    var n=document.getElementById("n1").value;
    var e=document.getElementById("e1").value;
    var p=document.getElementById("p1").value;
    var cp=document.getElementById("p2").value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(n=='' || e==''|| p==''|| cp==''){
        alert("Enter each details correctly");
    }
    else if(!letters.test(n)){
        alert("Name is incorrect must contain alphabets only");
    }
    else if(!email_val.test(e)){
        alert("Invalid email format please enter valid email");
    }
    else if(p != cp){
        alert("Password not matching");
    }
    else if(document.getElementById("p1").value.length < 6){
        alert("Password minimum length is 6");
    }
    else{
        alert("Your account has been created successfully... Redirecting to JavaTpoint.com");
        window.location="index.html";
    }
}