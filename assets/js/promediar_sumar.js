export function promediar_sumar(){
    let numeros = [];
    let resultado_suma = 0, resultado_promedio = 0;

    for(var i = 0; i < 5; i++){
        numeros[i] = Number(prompt("Ingresar el numero al stack para sumar y promediar [" + (Number(i) + 1) + "]."));
    }
    resultado_suma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    resultado_promedio = resultado_suma / numeros.length;

    document.getElementById('muestra-id1').innerHTML = "Los resultados de los numeros ingresado [" + numeros[0] + "][" + numeros[1] + "][" + numeros[2] + "][" + numeros[3] + "][" + numeros[4] + "] son:";
    document.getElementById('muestra-id2').innerHTML = "Suma: [" + resultado_suma + "].";
    document.getElementById('muestra-id3').innerHTML = "Promedio: [" + resultado_promedio + "].";
}