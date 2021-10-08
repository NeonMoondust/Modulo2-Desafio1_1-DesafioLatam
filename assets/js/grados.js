export function calculo_de_grados() {
    let grados_celsius = Number(prompt("Ingresa su temperatura a evaluar en número sin símbolo(C°)"))
    let resultado_kelvin = grados_celsius + 273.15;
    let resultado_farenheit = (grados_celsius * 9 / 5) + 32;

    document.getElementById('muestra-id1').innerHTML = "Los grados en sus respectivos valores con grado Celsius de " + grados_celsius + " son";
    document.getElementById('muestra-id2').innerHTML = "Grados Kelvin: [" + resultado_kelvin + "].";
    document.getElementById('muestra-id3').innerHTML = "Grados Farenheit: [" + resultado_farenheit + "]."
}