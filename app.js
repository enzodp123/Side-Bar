const  open = document.querySelector("#abrir");
const nav = document.querySelector(".nav-bar");
const item = document.querySelector(".menu-item");

open.addEventListener("click", ()=>{
    //CLASSLIST TOGGLE ON S
    open.classList.toggle("on");
    nav.classList.toggle("on-nav");
    //CLASSLIST ALL QUERYALL
    document.querySelectorAll("#avi").forEach((textHeader) =>{
    textHeader.classList.toggle("on-text")
    })
    //MENU ITEM 
    item.classList.toggle("on-item");
})




