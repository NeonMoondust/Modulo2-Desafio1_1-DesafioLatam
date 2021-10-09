//Exportacion del metodo para ser usado en el main.js
export function calculo_calendario(){
    //Declaracion de variables, junto con un prompt que pedira un ingreso de valor al usuario
    let dias;
    do{
        dias = Number(prompt("Ingresa el numero de dias que quieres transformar"));
    }while (dias < 0 || isNaN(dias));
    
    let auxDias = dias;
    let años = 0, semana = 0;
    //Loop que transformara los dias en Años/Semanas
    do{
        if(auxDias >= 365){
            años++;
            auxDias -= 365;
        }else if(auxDias >= 7 && auxDias < 365){
            semana++;
            auxDias -= 7;
        }
    }while(auxDias >= 7)
    //Presentacion del resultado fragmentado en el HTML
    document.getElementById('muestra-id1').innerHTML = "El resultado de la desfragmentacion a partir de los dias dados [" + dias + "] son:";
    document.getElementById('muestra-id2').innerHTML = "Años [" + años + "] Semanas [" + semana + "] dias [" + auxDias + "].";
    document.getElementById('muestra-id3').innerHTML = "";
}