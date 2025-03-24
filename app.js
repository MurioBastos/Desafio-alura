alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while enquanto tiver rolando
while(chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 1 e 10');
   // se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas` );
} else {
    if(chute > numeroSecreto) {
        alert(`o numero é menor que o ${chute} `);
    }else {
        alert(`o numero é maior que o ${chute}`);

    }
    // tenativas = tenetavi + 1
    tentativas++
}
}