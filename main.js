function input(num){
    document.form.numberInput.value = document.form.numberInput.value + num;
}
function igual(){
    expect = document.form.numberInput.value;
    if(expect){
        document.form.numberInput.value = eval(expect);
    }
    //Se olharmos em nosso HTML, temos alguns botões que setam operacionais matemáticos
    //em nosso caso temos apenas os operadores básicos (soma, subtração, divisão e multiplicação)
    //a única parte 'mais complexa' do código é a função EVAL que computa um código representado 
    //como uma string, uma expressão, declaração ou sequencia, essa função pode incluir
    //variáveis e propriedades de objetos existentes.
}

function c(){
    document.form.numberInput.value = "";
    //Declaramos que ao executar essa função setamos o valor do input de nome
    // "numberInput" para vazio.
}

function apagar(){
    var expect = document.form.numberInput.value;
    //Transformamos o valor que está dentro do input de nome "numberInput" em uma variável
    document.form.numberInput.value = expect.substring(0, expect.length-1);
    //Substring extrai os caracteres de uma string, passamos dois valores dentro dele
    //o primeiro serve para sabermos de onde estamos partindo da string (primeiro número)
    //o segundo serve para sabermos onde queremos chegar, a Substring vai percorrer essa
    //declaração e retornar algo, no nosso caso como estamos com um número negativo ele
    //vai remover um caractere.
}
