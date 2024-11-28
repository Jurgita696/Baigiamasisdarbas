 // Asinchroninis sąrašas apdorojimui
 function processList(list, callback) {
    let index = 0;
    let results = []; // Inicijuojame tuščią masyvą, kuriame saugosime apdorotus elementus
    let count = 0;

    function processItem(index) {
        if (index < list.length) {
            console.log(`Apdorojamas elementas: ${list[index]}`);

            // Naudojame setTimeout, kad apdorotume elementą asinchroniškai
            setTimeout(() => {
                // Pridedame apdorotą elementą į results masyvą
                results.push(list[index] * 2);
                count++;
                if (count === list.length) {
                    callback(results); // Iškviesti callback funkciją su galutiniu sąrašu
                } else {
                    processItem(index + 1); // Apdoroti kitą elementą
                }
            }, 1000); // vienos sekundės laukimas
        }
    }
    processItem(0);
}
              // spausdiname sąrašą į konsolę
function showResult(results) {
        console.log('Galutinis sąrašas:', results);
}

// Funkcija su processList su sąrašu ir callback funkcija
    processList([1, 2, 3, 4, 5, 6, 7, 8], showResult);