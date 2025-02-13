Acordar
Desligar alarme
Levantar da cama
Colocar roupa
Ir a cozinha
Comer
Ir ao banheiro
Escovar os dentes
Lavar o rosto
Descer de elevador
Dirigir até o trabalho
Bater o ponto
Dar bom dia para a equipe
Ligar o computador
Trabalhar 


------


function binary(originalNumber) {
    let binaryNumber = ""
    while (originalNumber !== 1) {
        binaryNumber = `${originalNumber % 2}${binaryNumber}`
        originalNumber = Math.floor(originalNumber/2)
    }
    return `1${binaryNumber}`
}

function invertBinary(binaryNumber) {
    let originalNumber = 0
    binaryNumber = `${binaryNumber}`
    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] == 1) {
            originalNumber += 2**(binaryNumber.length - i - 1)
        }
    }
    return originalNumber
}

function initGame(attempt) {
    let finalNumber = Math.floor(Math.random() * 101)
    let attemptCount = 1
    while (attempt != finalNumber) {
        attemptCount++
        if (attempt < finalNumber) {
            attempt = prompt("Você chutou muito baixo! Tente um número maior")
        } else {
            attempt = prompt("Você chutou muito alto! Tente um número menor")
        }
    }
    alert(`Parabéns! Você acertou o número secreto em ${attemptCount} tentativas. O número era ${finalNumber}`)
}

![image](https://github.com/user-attachments/assets/e6b52dec-5c97-488c-9d82-2a1572f38042)
