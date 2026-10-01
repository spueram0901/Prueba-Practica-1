let precioProd = 0;
let cantidadProd = 0;
let importe = 1;
let importeIVA = 0;
let importeFinal = 0;
let decision;
let operacionesRealizadas = 0;
let gastoMedio = 0;
let mayor = 0;
let menor = Infinity;


do{
precioProd = parseInt(window.prompt("Introduzca el precio del producto : "));
cantidadProd = parseInt(window.prompt("Introduzca la cantidad : "));

if(precioProd >= 0 && cantidadProd >= 0){

importe = calcularImporte(precioProd,cantidadProd);
importeIVA = calcularIVA(importe);

decision = window.confirm("¿Desea realizar otra operacion?");

operacionesRealizadas ++;
importeFinal = importeFinal + importeIVA;

if(importeIVA > mayor){
    mayor = importeIVA;
}

if(importeIVA < menor){
    menor = importeIVA;
}




} else {
    console.log("Datos no válidos");
    decision = true;
}



} while(decision == true);

console.log("Operaciones realizadas : " + operacionesRealizadas);
console.log("Importe total : " + importeFinal);
console.log("El gasto medio es de : " + importeFinal / operacionesRealizadas);
console.log("El mayor gasto fue : " + mayor);
console.log("El menor gasto fue : " + menor);



function calcularImporte(precioProd,cantidadProd){

    importe = precioProd * cantidadProd;
    

    if(importe >= 50 && importe <= 99.99){
        importe = importe * 0.95;
        
    }else if(importe >= 100 && importe <= 199.99){
        importe = importe * 0.90;
        
    }else if(importe >= 200){
        importe = importe * 0.85;
        
    }

    return importe;
}


function calcularIVA(importe){

    return importe * 1.21;
    
}


