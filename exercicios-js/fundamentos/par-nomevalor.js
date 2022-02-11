const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "Falaaa"; // contexto léxico 2
    return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Rafael",
    idade: 16,
    peso: 70,
    endereco: {
        sao_paulo: "Avenida Paulista",
        numero: 133
    }
}

console.log(saudacao);
console.log(exec());