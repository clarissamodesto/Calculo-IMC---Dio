//variáreis

let altura = 1.62;
let peso = 78;
let imc = peso / (altura * altura);

console.log(imc);

if (imc <= 18.5){
    console.log("Abaixo do Peso");
}else if (imc > 18.5 && imc <= 25){
    console.log("Peso Normal");
}else if (imc > 25 && imc <= 30){
    console.log ("Acima do Peso");
} else if (imc > 30 && imc <= 40){
    console.log ("Obesidade");
} else {
    console.log ("Obesidade Grave")
}
