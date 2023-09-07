//MONEDAS
const dolar = 350;

const criptos = [
    {
        nombre: "Tether",
        precio: 1,
        capMercado: 82895440243,
        ultimoRendimiento: 0,
        sigla: "USDT"
    },
    {
        nombre: "Bitcoin",
        precio: 25437,
        capMercado: 499767002114,
        ultimoRendimiento: 0.28,
        sigla: "BTC"
    },
    {
        nombre: "Ethereum",
        precio: 1618,
        capMercado: 195798480271,
        ultimoRendimiento: 0.12,
        sigla: "ETH"
    },
    {
        nombre: "Cardano",
        precio: 0.256,
        capMercado: 9014039059,
        ultimoRendimiento: 0.16,
        sigla: "ADA"
    },
    {
        nombre: "Dogecoin",
        precio: 0.063,
        capMercado: 8915943853,
        ultimoRendimiento: 0.11,
        sigla: "DOGE"
    },
    {
        nombre: "Solana",
        precio: 19.59,
        capMercado: 8009305318,
        ultimoRendimiento: 0.59,
        sigla: "SOL"
    },
    {
        nombre: "Litecoin",
        precio: 62.98,
        capMercado: 4486663003,
        ultimoRendimiento: 0.20,
        sigla: "LTC"
    }
];


//PAGINA INICIO
//Variables
let op;
let i;
let listCripto = [];
let selecCripto = [];
let buscCripto;
let dinero;

//MENU
do{
    op = parseInt(prompt("Selecciona la opcion:\n\n1. Consultar la cotizacion del dolar\n2. Convertir pesos a dolares\n3. Convertir dolares a pesos\n4. Convertir peso a dolar tarjeta\n5. Consultas sobre criptomonedas.\n0. salir"));

    switch(op){
        //1. Consultar la cotizacion del dolar
        case 1:  
            alert("La cotizacion del dolar es: $" + dolar);
            break;
        //2. Convertir pesos a dolares
        case 2:  
            dinero = parseFloat(prompt("¿Cuantos pesos desea cambiar?"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La conversion seria de $" + (dinero / dolar).toFixed(2) + " dolares");
            break;
        //3. Convertir dolares a pesos
        case 3:  
            dinero = parseFloat(prompt("¿Cuantos dolares desea cambiar?"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La conversion seria de $" + (dinero * dolar).toFixed(2) + " pesos");
            break;
        //4. Convertir peso a dolar tarjeta
        case 4:  
            dinero = parseFloat(prompt("¿Cuanto dolares desea comprar?\n(Se aplicara el 30% de impuesto pais y el 45% de retenciones al dolar oficial.)"));
            if(validarNum(dinero) == 1){
                break;
            }
            alert("La cotizacion del dolar oficial es de: $350\n\n$" + dinero + " le costaria: " + ((dinero * 350)*1.75).toFixed(2));
            break;
        //5. Consultas sobre criptomonedas.
        case 5:  
            op = parseInt(prompt("Ha seleccionado la opcion para criptomonedas\n\n¿Que le interesa saber?\n1. Listado.\n2. La de mayor capitalizacion de mercado.\n3. La que tuvo mejor rendimiento en la ultima semana.\n4. Buscar cripto.\n5. Ordenar de mayor a menor. (Segun su precio).\n6. Regresar."));
            
            //1. Listado.
            if(op === 1){  
                for(i = 0; i < criptos.length; i++){
                    alert("Nombre: " + criptos[i].nombre + " " + criptos[i].sigla + "\nPrecio: $" + criptos[i].precio + "\nTag: " + criptos[i].sigla);
                }
            //2. La de mayor capitalizacion de mercado.
            }else if(op === 2){  
                saveCripto(listCripto, 2);
                
                selecCripto = criptos.filter((criptos) => criptos.capMercado == (Math.max(...listCripto)));
                alert("La criptomoneda con mayor capitalizacion de mercado es: " + selecCripto[0].nombre + "\ncon una capitalizacion de: $" + selecCripto[0].capMercado);
            //3. La que tuvo mejor rendimiento en la ultima semana.
            }else if(op === 3){  
                saveCripto(listCripto, 3);
                
                selecCripto = criptos.filter((criptos) => criptos.ultimoRendimiento == (Math.max(...listCripto)));
                alert("La criptomoneda que tuvo mejor rendimiento en la ultima semana fue: " + selecCripto[0].nombre + "\ncon un rendimiento del " + selecCripto[0].ultimoRendimiento + "%");
            //4. Buscar cripto
            }else if(op === 4){  
                buscCripto = prompt("Ingrese la criptomoneda que desea buscar");

                if((criptos.find((criptos) => criptos.nombre === buscCripto)) === undefined){
                    alert("La criptomoneda que inserto no existe");
                }else{
                    selecCripto = criptos.filter((criptos) => criptos.nombre === buscCripto); 
                    console.log(selecCripto);
                    alert("La criptomoneda que busco fue: " + selecCripto[0].nombre + " " + selecCripto[0].sigla + "\nPrecio: $" + selecCripto[0].precio + "\nCapitalizacion de mercado: $" + selecCripto[0].capMercado);
                }
            //5. Ordenar de mayor a menor.
            }else if(op === 5){  
                criptos.sort((a,b) => b.precio - a.precio);

                for(i = 0; i < criptos.length; i++){
                    alert("Nombre: " + criptos[i].nombre + " " + criptos[i].sigla + "\nPrecio: $" + criptos[i].precio + "\nTag: " + criptos[i].sigla);
                }
            }
            break;
        //0. Salir.
        case 0:
            break;
        default:
            alert("Error. No seleciono una opcion valida\nSeleccione una opcion del 1 al 6");
    }
}while(op != 0);


//FUNCIONES
function validarNum (dinero){
    if(dinero < 0){
        alert("Error. Seleccione un numero valido superior a 0.");
        return 1;
    }else{
        return 0;
    }
}

function saveCripto (listCripto, elemento){
    if(elemento === 2){
        for(i = 0; i < criptos.length; i++){
            listCripto[i] = criptos[i].capMercado;
        }
    }else if(elemento === 3){
        for(i = 0; i < criptos.length; i++){
            listCripto[i] = criptos[i].ultimoRendimiento;
        }
    }
}