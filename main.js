document.addEventListener("DOMContentLoaded", () => {
    let burger = document.querySelector(".burger");
    let navigationBar = document.querySelector(".navigation-bar");

    console.log("gg");

    burger.addEventListener("click", () => {
        navigationBar.classList.toggle("active");
    });
});
