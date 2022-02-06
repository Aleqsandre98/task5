const button_1=document.getElementById("button_1");

button_1.addEventListener("click",function(){
    let header=document.getElementById("header");
    let header_invisible=document.getElementById("header_invisible");

    header.classList.toggle("header_height");
    header_invisible.classList.toggle("invisible")
})