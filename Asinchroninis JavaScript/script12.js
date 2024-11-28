// Funkcija, kuri priima skaičių, laiką (milisekundėmis) ir callback funkciją
function calculate(number, delay, callback) {
    // Naudojame setTimeout, kad atidėtume operaciją
    setTimeout(() => {
        callback(number); // Iškviečiame callback su skaičiumi
    }, delay);
}

// Callback funkcija, kuri priima rezultatą ir išveda jį į konsolę
function showResult(result) {
    console.log(`Rezultatas: ${result}`);
}

// Naudojimo pavyzdys: iškviečiame funkciją `calculate` su argumentais
calculate(42, 2000, showResult);
