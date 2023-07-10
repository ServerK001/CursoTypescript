//? typescript já inferindo a tipagem nele, não é possivel add novas chaves
const A = {
    chaveA: "Valor A",
    chaveB: "Valor B",
};

// ? Pré-definido
const C: {
    readonly chaveC: string; // o valor da chave não pode ser alterado
    chaveA: string;
    chaveB: string;
    [key: string]: unknown; //add chaves
} = {
    chaveA: "Valor A",
    chaveB: "Valor B",
    chaveC: "valor C",
};
// ? O valor da chave não pode ser alterado
// C.chaveC = "Outro objt";
console.log(C.chaveA, A.chaveA);
