//Exportacion del medoto para ser usado en mains.js
export function calculo_de_grados() {
    //Captacion de datos al usuario y declaracion de variables junto a la formula para ser evaluada
    let grados_celsius;
    do{
        grados_celsius = Number(prompt("Ingresa su temperatura a evaluar en número sin símbolo(C°)"));
    }while(isNaN(grados_celsius));
    let resultado_kelvin = grados_celsius + 273.15;
    let resultado_farenheit = (grados_celsius * 9 / 5) + 32;
    //Presentacion de los datos en el HTML
    document.getElementById('muestra-id1').innerHTML = "Los grados en sus respectivos valores con grado Celsius de " + grados_celsius + " son";
    document.getElementById('muestra-id2').innerHTML = "Grados Kelvin: [" + resultado_kelvin + "].";
    document.getElementById('muestra-id3').innerHTML = "Grados Farenheit: [" + resultado_farenheit + "]."
}