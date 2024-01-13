function activity1() {
    // Essa função dá boas vindas ao usuário
    let userName = prompt("Qual é seu nome?")
    alert(`Olá, ${userName}, seja bem vindo!`)
}
function activity2() {
    // Essa função soma dois números que o usuário inserir
    let n1 = +prompt("Qual é o primeiro número?")
    let n2 = +prompt("Qual é o segundo número?")
    alert(`A soma desses dois números é ${n1 + n2}`)
}
function activity3() {
    let n1 = +prompt("Qual é seu número?")
    if (n1 < 0) {
        alert(`É um número negativo`)
    } else if (n1 > 0){
        alert(`É um número positivo`)
    } else {
        alert(`É um numero nulo`)
    }
}
function activity4() {
    let n1 = +prompt("Qual é a largura do retângulo (apenas números)?")
    let n2 = +prompt("Qual é a altura do retângulo (apenas números)?")
    alert(`A área do retângulo é ${n1 * n2}`)
}
function activity5() {
    let n1 = +prompt("Qual é o primeiro número?")
    let n2 = +prompt("Qual é o segundo número?")
    let nGhost = n1
    n1 = n2
    n2 = nGhost
    alert(`Valores trocados!`)
}
function activity6() {
    let n1 = +prompt("Qual é seu número?")
    if (n1 % 2) {
        alert(`É um número impar`)
    } else {
        alert(`É um número par`)
    }
}
function activity7() {
    let n1 = +prompt("Qual é a primeira nota?")
    let n2 = +prompt("Qual é a segunda nota?")
    let n3 = +prompt("Qual é a terceira nota?")
    let n4 = +prompt("Qual é a quarta nota?")
    let media = (n1 + n2 + n3 + n4) / 4
    if (media < 60) {
        alert(`Aluno reprovado com a média ${media}`)
    } else {
        alert(`Aluno aprovado com a média ${media}`)
    }
}
function activity8() {
    let numbers = ''
    for (let index = 2; index <= 20; index = index + 2) {
        numbers = `${numbers} ${index}`
    }
    alert(numbers)
}
function activity9() {
    let year = +prompt("Qual é a primeira nota?")
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        alert(`O ano ${year} será bissexto!`)
    } else {
        alert(`O ano ${year} não será bissexto!`)
    }
}
function activity10() {
    let n1 = +prompt("Qual é o primeiro número?")
    let n2 = +prompt("Qual é o segundo número?")
    n1 = n1
    n2 = n2
    if (n1 < n2) {
        alert(`${n1} é maior`)
    } else if (n1 == n2){
        alert(`Os dois números são iguais`)
    } else {
        alert(`${n2} é maior`)
    }
}
function activity11() {
    let n1 = +prompt("Qual é o primeiro lado?")
    let n2 = +prompt("Qual é o segundo lado?")
    let n3 = +prompt("Qual é o terceiro lado?")
    if (n1 == n2 && n1 == n3) {
        alert(`É um triângulo equilátero`)
    } else if (n1 != n2 && n1 != n3 && n2 != n3) {
        alert(`É um triângulo isóceles`)
    } else {
        alert(`É um triângulo escaleno`)
    }
}
function activity12() {
    let randomNumber = Math.floor(Math.random() * 100 + 1) 
    let attempt = +prompt("Tente adivinhar qual número entre 0 e 100 eu escolhi!")
    let attemptCount = 1
    while (attempt != randomNumber) {
        attemptCount++
        if (attempt < randomNumber) {
            attempt = +prompt("Você pensou em um número muito baixo, tente novamente!")
        } else {
            attempt = +prompt("Você pensou em um número muito alto, tente novamente!")
        }
    }
    alert(`Parabéns, você descobriu o número secreto ${attempt} em ${attemptCount} tentativas!`)
}
function activity13() {
    let robotOption = Math.floor(Math.random() * 3 + 1)
    let userOption = prompt('Vamos jogar pedra, papel ou tesoura! Digite 1 para "pedra", 2 para "papel" e 3 para "tesoura"')
    while (userOption != 1 && userOption != 2 && userOption != 3) {
        userOption = prompt('Digite um valor válido: 1 para "pedra", 2 para "papel" e 3 para "tesoura"')
    }
    if (robotOption == userOption) {
        alert("Empatamos! escolhi a mesma opção que você.")
    } else if ((robotOption == 1 && userOption == 3) || (robotOption == 2 && userOption == 1) || (robotOption == 3 && userOption == 2)) {
        alert("Eu venci! hahahhaah NOOB!!")
    } else {
        alert("Você venceu... Parabéns :(")
    }
}