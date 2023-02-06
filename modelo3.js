let registro = prompt("Deseja se registrar? \n 1-Sim \n 2-Não");
let experiencia_m = ""
let idade = 0;
let mIdade = Number(0);
let totalIdade = 0;
let totalCandidatos = 0;
let totalExpe = 0;
let msg = "";
let contIdade = 0;
while(registro === "1"){
    let num_candidato = prompt ("Digite o número do candidato.");
    let nome = prompt("Digite o seu nome:");
    idade = Number(prompt("Digite a sua idade:"));
    let sexo = prompt("Digite o seu sexo: \n 1-Masculino \n 2-Feminino");
    let experiencia_m = prompt("Possui experiência na área? \n 1-Sim \n 2-Não");

    ///idade
    totalIdade += idade;
    totalCandidatos++;

    mIdade = totalIdade/totalCandidatos;
    //// sexo do candidato
    let msg_sexo = 0;
    if (sexo === "1"){
        msg_sexo = "Masculino";
    }if (sexo === "2"){
        msg_sexo = "Feminino";
    }
    //// possui experiencia?
    let msg_expe = 0;
    if (experiencia_m === "1"){
        totalExpe++
    }
    if (experiencia_m === "1"){
        msg_expe = "Sim";
    }if (experiencia_m === "2"){
        msg_expe = "Não";
    }experiencia_m
    msg += "#############   ##########################   ##########################   #############" + "</br>";
    msg += "Nome: " + nome + "  ||   Idade: " + idade + "  ||  Sexo: " + msg_sexo + " ||  Número do candidato : " + num_candidato + "  ||  Possui Expêriencia:  " + msg_expe +"</br>";
    registro = prompt("Deseja registrar mais alguma pessoa? \n 1-Sim \n 2-Não");
}
if (registro === "2") {
    alert("Você está deixando a área de registro. \n Aperte F5 para retornar ao início.");
  }
document.getElementById("candidatos_exp").innerHTML=totalExpe;
document.getElementById("mIdade").innerHTML=mIdade;
document.getElementById("candidato").innerHTML=msg;
document.getElementById("totalCandidatos").innerHTML=totalCandidatos;