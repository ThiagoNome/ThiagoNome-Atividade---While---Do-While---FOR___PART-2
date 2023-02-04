let situcao = prompt("Você quer cadastrar uma nova peça ? \n 1 -Sim \n 2 -Não");
let pReprovadas = "";
let pTotalAprovadas = 0;
let pTotalReprovadas = 0;
let pTotalPecas = 0;
while (situcao === "1"){
    let numeroPeca = prompt("Digite o número da peças.");
    let situcaoPeca = prompt ("Digite a situação da peça. \n 1-Aprovado \n 2-Reprovado");
    if (situcaoPeca === "2"){
        pReprovadas += numeroPeca + ", "
        pTotalReprovadas++
    }
    if(situcaoPeca === "1"){
        pTotalAprovadas++
    }
    pTotalPecas = pTotalAprovadas + pTotalReprovadas;
    situcao = prompt("Você quer cadastrar uma nova peça ? \n 1 -Sim \n 2 -Não");
}
document.getElementById("pecasReprovadas").innerHTML=pReprovadas;
document.getElementById("totalReprovadas").innerHTML=pTotalReprovadas;
document.getElementById("totalAprovadas").innerHTML=pTotalAprovadas;
document.getElementById("totalPecas").innerHTML=pTotalPecas;