function escreve(nome,sobrenome){
    console.log(`${nome} ${sobrenome}`)
    const a = sobrenome;
    if (a === null)
    {
        console.log('a é nulo');
        console.log('Valor de a',a, '\n');
        console.log('valor de sobrenome',sobrenome, '\n');
        
    }
}

//função nominal que retona valor
function soma(a ,b)
{
    return Number(a) + Number(b)
}
escreve('Rafael');

function quemEoThis(){
    console.log(this === window);
}

function quemEoThisEstrito(){
    // qunado queremos usar o JS na versão mais polida, o 'use strict' deve ser informado no início.
    'use strict';
    console.log('strict');
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function exibe2(){
    this.a=50;
}

const novoObjeto = new exibe2();
console.log(novoObjeto.a)

//objeto global
//this sozinho objeto global
let empresa = this; //window


//estrito - this é undefined.
console.log('quem é o this no contexto global', empresa);


// this dentro de uma função - também, é um objeto global

function globalObjt()
{
    //"use strict"; // this vira undefined;
    return this;
}

document.write("<h2>Escrevendo no body</h2>");
document.write(globalObjt());

//globalObjt().alert("Vai Conrinthians!");

//quando criamos um objeto, criamos um escopo.
//quando usamos o this dentro de um objeto, o this é o objeto.
const aluno={
    nome:'rafael',
    matricula:123,
    executar: function()
    {
        return this.nome;
    },
};
console.log(aluno.executar());


// Arrow Function - Função de seta, ela é mais curta, não tem o própio contexto.
const novaFuncao = (a,b) =>{
    console.log('chamando de dentro de uma arrow function');
    //Interpolção de variaveis é chamas uma variável dentro de uma string; template String.
    console.log(`Exibindo o valor de ${a}`);
    console.log('Exibindo o total de caracteres'+ b.length);
}

const funcao3 = a => console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3('Rafael giandoso');

// novo JavaScript ES2017

//spread operator ...
const carros = (primeiro, segundo, ...restante)=> 
{
    console.log(`Os carros informados foram: ${primeiro}, ${segundo} - ${restante[5]}. Todos os demais sao ${restante.join(', ')}`);
};

carros(
    "Delrey",
    'Brasilia',
    'Belina',
    'Fusca',
    'Variant',
    'Parati',
    'Monza',
    'Scort',
    'Fiat 147'
)

const frutas = ['Guaraná', 'Cupuaçu', 'acaí'];
const todasFrutas = [ ...frutas, 'banana', 'abacaxi']

console.log('todas as frutas', todasFrutas);

// destructuring assignmet
// atirubuição por desestruturação.

console.log('\n');

let a = 50;
let b =100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log(   'Exibindo o primeiro: ', primeiro)
console.log('Exibindo o resto ', resto)

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(', '));

// const [ p, s, t, q] = meuArray;
//const [ p, s, t, q] = meuArray;
//console.log('Exibindo o quarto elemento',q);

const[q, ...p] = meuArray.reverser();
console.log(meuArray.reveser());
