/* eslint-disable */

//Sintaxe de Type Annotations no TypeScript
//colocar : e o tipo
let nome:string = "Luiz"; //Qualquer String
let idade:number = 10; //Qualquer tipo de número, 10 -10 3.14 0xf00b, 0b1010, 0o7744
let adulto:boolean = true // verdadeiro ou falso
let simbolo:symbol = Symbol('qualquer-simbolo')

// Array e Objts

//Array recebe um tipo nos <T>
let ArrayofNumbers:Array<number> = [1,2,3]
let ArrayofStrings:Array<string> = ['a','b','c']
// pode ser usado desasa forma também
let ArrayN: number[] = [1,2,3]
let ArrayS: string[] = ['a','b','c']


//Objetos

//o sinal --> "?" indica que não é obrigatório preecher essa valor
let pessoa:{name:string, idade:number, adulto?:boolean} = {
    idade:25,
    name: 'Mikael Keller'
}

//Funçoes
function Soma(x:number,y:number):number{ // :number informa que o retorno vai ser do tipo number
    return x+y
}

//Arrow function
const soma2 = (x:number,y:number):number =>{ return x+y}
soma2(10,20)


