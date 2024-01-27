const Password = document.querySelector("#txtpassword");
const CheckBox = document.querySelector("#show");

CheckBox.addEventListener('click',function(){
    const type = Password.getAttribute("type") === "password" ? "text" : "password" ;
    Password.setAttribute("type",type);
});

