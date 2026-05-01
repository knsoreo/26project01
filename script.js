const menuButton = document.querySelector(".hamburger-btn");
const closeButton = document.querySelector("#drawer-close");
const overlay = document.querySelector("#drawer-overlay");

const openDrawer = () => {
    document.body.classList.add("drawer-open");
    menuButton.setAttribute("aria-expanded", "true");
};

const closeDrawer = () => {
    document.body.classList.remove("drawer-open");
    menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", openDrawer);
closeButton.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDrawer();
    }
});
