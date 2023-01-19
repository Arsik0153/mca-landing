// Mobile menu
const open = document.querySelector("#open-menu");
const close = document.querySelector("#close-menu");
const menu = document.querySelector(".mobile-menu");

open.addEventListener("click", () => {
    menu.style.display = "block";
});

close.addEventListener("click", () => {
    menu.style.display = "none";
});
