//Exportacion del metodo para ser usado en main.js
export function promediar_sumar(){
    //Declaracion de variables
    let numeros = [];
    let resultado_suma = 0, resultado_promedio = 0;

    //Loop definido en 5 iteraciones para obtener datos del usuario
    for(var i = 0; i < 5; i++){
        numeros[i] = Number(prompt("Ingresar el numero al stack para sumar y promediar [" + (Number(i) + 1) + "]."));
        if(isNaN(numeros[i])){
            alert(`¡¡ERROR!! ingrese un numero valido. Dato ingresado [${numeros[i]}]`);
            i--;
        }
    }
    //Asignar una variable para cada resultado
    resultado_suma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    resultado_promedio = resultado_suma / numeros.length;

    //Presentacion de los resultados en el HTML
    document.getElementById('muestra-id1').innerHTML = "Los resultados de los numeros ingresado [" + numeros[0] + "][" + numeros[1] + "][" + numeros[2] + "][" + numeros[3] + "][" + numeros[4] + "] son:";
    document.getElementById('muestra-id2').innerHTML = "Suma: [" + resultado_suma + "].";
    document.getElementById('muestra-id3').innerHTML = "Promedio: [" + resultado_promedio + "].";
}