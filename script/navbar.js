const closeButton = document.querySelector(".mobile-side-menu__icon");
const openButton = document.querySelector(".mobile-side-menu__img")
const sideMenu = document.querySelector(".side-menu-mobile");
const overlay = document.querySelector(".overlay")
const unorderedList = document.querySelector(".mobile-side-menu__ul")
//Side openinng

openButton.addEventListener("click", openSideMenu);

function openSideMenu(){
    sideMenu.classList.add("show");
    closeButton.classList.add("show1");
    overlay.style.display = "block";
    unorderedList.style.display = "block";
}

//Side menu closing

closeButton.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

function closeSideMenu(){
    sideMenu.classList.remove("show");
    closeButton.classList.remove("show1");
    overlay.style.display = "none";
    unorderedList.style.display = "none";
}