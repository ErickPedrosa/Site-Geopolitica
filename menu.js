
icon = document.querySelector(".menu-icon");
menu = document.querySelector(".menu-lateral");


icon.addEventListener("click", () => {
    if (menu.style.visibility == "visible") {
        menu.style.visibility = "hidden"
    }else{
        menu.style.visibility = "visible"
    }
    

});
