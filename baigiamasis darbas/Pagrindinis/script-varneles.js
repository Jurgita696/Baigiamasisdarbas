document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", () => {
        const isVisible = menu.style.display === "block";
        menu.style.display = isVisible ? "none" : "block";
    });

    // Uždarome meniu, jei paspaudžiama ne ant jo
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});