//Exporta la funcion para ser usada en el main
export function operacioneSimples(){
    //Declara variables
    let numeros = [0, 0];
    let resultado_suma, resultado_resta, resultado_multiplicacion, resultado_division, resultado_modulo;
    //Loop para obtener los datos del usuario con la comprobacion correspondiente
    do{
        numeros[0] = Number(prompt("Ingresa un numero mayor a 0. Numero 1 actual -> " + numeros[0]));
        numeros[1] = Number(prompt("Ingresa un numero mayor a 0. Numero 2 actual -> " + numeros[1]));
    }while((numeros[0] == numeros[1]) || (numeros[0] <= 0) || (numeros[1] <= 0) || isNaN(numeros[0]) || isNaN(numeros[1]));
    //Resultados de las operaciones guardados en cada variable
    resultado_suma = numeros[0] + numeros[1];
    resultado_resta = numeros[0] - numeros[1];
    resultado_multiplicacion = numeros[0] * numeros[1];
    resultado_division = numeros[0] / numeros[1];
    resultado_modulo = numeros[0] % numeros[1];
    //Presentacion de las operaciones en el HTML
    document.getElementById('muestra-id1').innerHTML = "Las operaciones entre los dos numeros [" + numeros[0] + "][" + numeros[1] + "] son:";
    document.getElementById('muestra-id2').innerHTML = "Suma [" + resultado_suma + "] " + "Resta [" + resultado_resta + "] " + "Multiplicacion [" + resultado_multiplicacion + "] ";
    document.getElementById('muestra-id3').innerHTML = "Division [" + resultado_division + "] " + "Modulo [" + resultado_modulo + "].";
}