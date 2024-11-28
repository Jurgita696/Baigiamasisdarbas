document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product"); // Visi produktai
    const paginationLinks = document.querySelectorAll(".pagination a"); // Puslapių nuorodos
    const itemsPerPage = 3; // Kiek produktų rodyti per puslapį

    function showPage(pageNumber) {
        // Paslėpti visus produktus
        products.forEach((product, index) => {
            product.style.display = "none";
        });
        // Rodyti tik pasirinktą puslapį
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        products.forEach((product, index) => {
            if (index >= start && index < end) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Pridėti paspaudimo įvykius puslapiams
    paginationLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Sustabdyti nuorodos veikimą

            // Pažymėti aktyvų puslapį
            paginationLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Atvaizduoti pasirinktą puslapį
            showPage(index + 1);
        });
    });

    // Inicializuoti pirmą puslapį
    showPage(1);
});

// Spalvos pasirinkimas

document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.querySelector(".filters button:nth-child(2)");  // Spalvos mygtukas
    const colorList = document.getElementById("filters");

    // Paspaudus spalvų mygtuką, rodyti / slėpti spalvų sąrašą
    filterButton.addEventListener("click", function () {
        colorList.classList.toggle("active");
    });

    // Filtruoti pagal pasirinktą spalvą
    const colorButtons = document.querySelectorAll("#filters button");

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedColor = button.getAttribute("data-color");

            const products = document.querySelectorAll(".product");
            products.forEach(product => {
                if (selectedColor === "all" || product.getAttribute("data-color") === selectedColor) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });

            // Paslėpti spalvų sąrašą po filtro pasirinkimo
            colorList.classList.remove("active");
        });
    });
});