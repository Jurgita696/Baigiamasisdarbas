// Funkcija, kuri priima asinchroninį sąrašą ir callback funkciją
function processList(list, callback) {
    let index = 0;

    // Asinchroninis apdorojimas su setTimeout
    function processNext() {
        // Patikrinti, ar sąrašas baigtas
        if (index < list.length) {
            console.log(`Apdorojamas elementas: ${list[index]}`);
            
            // Naudoti setTimeout, kad apdorotume elementą asinchroniškai
            setTimeout(() => {
                // Pereiti prie kito elemento
                index++;
                // Rekursyviai iškviesti, kol nepasieksime sąrašo pabaigos
                processNext();
            }, 1000); // 1 sekundės laukimas tarp apdorojimo
        } else {
            // Kai visi elementai apdoroti, iškviečiame callback
            callback('Sąrašas apdorotas');
        }
    }

    // Pradėti apdorojimą nuo pirmo elemento
    processNext();
}

// Callback funkcija, kuri bus iškviesta po apdorojimo
function onProcessComplete(message) {
    console.log(message);
}

// Naudojimo pavyzdys: sąrašas su 3 elementais
const list = [1, 2, 3, 4, 5, 6, 7, 8];
processList(list, onProcessComplete);
