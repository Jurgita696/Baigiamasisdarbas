function calculate(number, delay, callback) {
    // Naudojame setTimeout, kad atidėtume operaciją
    setTimeout(() => {
        callback(number); // Iškviečiame callback su skaičiumi
    }, delay);
}

// Naudojimo pavyzdys:
calculate(42, 2000, (result) => {
    console.log(`Rezultatas po 2 sekundžių: ${result}`);
});
