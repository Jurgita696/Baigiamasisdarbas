//funkcija su delay milisekundemis
function delay (ms) {
    return new Promise ((resolve) => {
                //setTimeout imituoti asinchronine operacija
        setTimeout (() => {
         resolve('Laikas baigėsi!');

                //Promise rezultatas Sėkmė!
            }, ms);
        });
    }
    // then metodo naudojimas, promise rezultatui
delay(2000).then((message) => {
    console.log(message); //'Laikas baigėsi'
});