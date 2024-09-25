const prompt = require("prompt-sync")()

const aluno = "Daniel Porto"
let ponstoSomados = 0
let notasLancadas = 0
let mediaPontos = 0

while (notasLancadas < 12) {
    const nota = Number(prompt(`${notasLancadas + 1}a nota do ${aluno}: `))
    console.log(`A nota inserida foi ${nota}`)
    ponstoSomados = ponstoSomados + nota
    notasLancadas = notasLancadas + 1
    mediaPontos = ponstoSomados / notasLancadas
    console.log(`Media até ${notasLancadas}a nota: ${mediaPontos}`)
}

console.log(`Media final do ${aluno}: ${mediaPontos}`)

if (mediaPontos >= 6) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno reprovado")
}