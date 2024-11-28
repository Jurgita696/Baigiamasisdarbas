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

// iškviečiame funkciją `calculate` su skaiciumi 5, 1000 ms ir callback funkcija
calculate(5, 1000, showResult);
