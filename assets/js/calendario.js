export function calculo_calendario(){
    let dias = Number(prompt("Ingresa el numero de dias que quieres transformar"));
    let auxDias = dias;
    let años = 0, semana = 0;
    do{
        if(auxDias >= 365){
            años++;
            auxDias -= 365;
        }else if(auxDias >= 30 && auxDias < 365){
            semana++;
            auxDias -= 30;
        }
    }while(auxDias >= 30)
    document.getElementById('muestra-id1').innerHTML = "El resultado de la desfragmentacion a partir de los dias dados [" + dias + "] son:";
    document.getElementById('muestra-id2').innerHTML = "Años [" + años + "] Semanas [" + semana + "] dias [" + auxDias + "].";
    document.getElementById('muestra-id3').innerHTML = "";
}