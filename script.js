/*
soma = 1
multiplicacao = 2
subtracao = 3
divisao = 4
*/
//Numeros

var valordaconta = 0;
function somar(){
    valordaconta = 1;
    document.getElementById('label2').textContent = '+';
}
function dividir(){
    valordaconta = 4;
    document.getElementById('label2').textContent = '/';
}
function multiplicar(){
    valordaconta = 2;
    document.getElementById('label2').textContent = 'X';
}
function subtrair(){
    valordaconta = 3;
    document.getElementById('label2').textContent = '-';
}
function resetar(){
    document.getElementById('label1').textContent = '';
    valordaconta = 0;
    document.getElementById('label2').textContent = '';
    document.getElementById('label3').textContent = '';
}
var virgulul = 0;
var virgulul2 = 0;
function virgula(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0 && virgulul === 0){
        var label1 = document.getElementById('label1').textContent + '.';
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
        virgulul = 1;
        console.log(virgulul);
    }else if(NumConvertido > 0 && valordaconta > 0 && virgulul2 === 0){
        var label3 = document.getElementById('label3').textContent + '.';
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
        virgulul2 = 3;    
    }
}
function resultado(){
    var numero1 = document.getElementById('label1').textContent;
    var numero2 = document.getElementById('label3').textContent;
    var num1 = Number(numero1);
    var num2 = Number(numero2);
    document.getElementById('label1').textContent = '';
    document.getElementById('label3').textContent = '';
    switch(valordaconta){
        case 1:
            var resultado = num1 + num2;
            document.getElementById('label2').textContent = resultado;
            break;
        case 2:
            var resultado = num1 * num2;
            document.getElementById('label2').textContent = resultado;
            break;
        case 3:
            var resultado = num1 - num2;
            document.getElementById('label2').textContent = resultado;
            break;
        case 4:
            var resultado = num1 / num2;
            document.getElementById('label2').textContent = resultado;     
    }
}
function num1(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 1;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 1;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num2(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 2;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 2;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num3(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 3;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 3;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num4(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 4;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 4;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num5(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 5;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 5;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num6(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 6;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 6;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num7(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 7;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 7;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num8(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 8;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 8;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}
function num9(){
    var label1 = document.getElementById('label1').textContent;
    var NumConvertido = Number(label1);
    if(NumConvertido === 0 || valordaconta === 0){
        var label1 = document.getElementById('label1').textContent + 9;
        var resultado = label1;
        document.getElementById('label1').textContent = resultado;
    }else{
        var label3 = document.getElementById('label3').textContent + 9;
        var resultado = label3;
        document.getElementById('label3').textContent = resultado;
    }
}

