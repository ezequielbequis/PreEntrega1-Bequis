const dolar = 350;

let op;
let dinero;

do{
    op = parseInt(prompt("Selecciona la opcion:\n\n1. Consultar la cotizacion del dolar\n2. Convertir pesos a dolares\n3. Convertir dolares a pesos\n4. Convertir peso a dolar tarjeta\n5. salir"));

    switch(op){
        case 1:
            alert("La cotizacion del dolar es: $" + dolar);
            break;
        case 2:
            dinero = parseFloat(prompt("¿Cuantos pesos desea cambiar?"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La conversion seria de $" + (dinero / dolar).toFixed(2) + " dolares");
            break;
        case 3:
            dinero = parseFloat(prompt("¿Cuantos dolares desea cambiar?"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La conversion seria de $" + (dinero * dolar).toFixed(2) + " pesos");
            break;
        case 4:
            dinero = parseFloat(prompt("¿Cuanto dolares desea comprar?\n(Se aplicara el 30% de impuesto pais y el 45% de retenciones al dolar oficial.)"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La cotizacion del dolar oficial es de: $350\n\n$" + dinero + " le costaria: " + ((dinero * 350)*1.75).toFixed(2));
            break;
        case 5:
            break;
        default:
            alert("Error. No seleciono una opcion valida\nSeleccione una opcion del 1 al 5");
    }
}while(op != 5);

function validarNum (dinero){
    if(dinero < 0){
        alert("Error. Seleccione un numero valido superior a 0.");
        return 1;
    }else{
        return 0;
    }
}