const infoButtons = document.querySelectorAll(".price-deet-btn");

infoButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        const tooltip = button.nextElementSibling;

        tooltip.classList.toggle("show");
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".price-info")) {
        document.querySelectorAll(".tool-tip-info.show").forEach((tooltip) => {
            tooltip.classList.remove("show");
        });
    }
});