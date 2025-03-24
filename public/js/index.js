const { response } = require("express");

const display = document.getElementById("display");
const sectionNumbers = document.getElementById("numeros");
const operacoes = [...sectionNumbers.querySelectorAll(".number")].filter(operacao => operacao.id);

// Seleciona apenas os elementos que têm SOMENTE a classe "number" e não possuem ID
const numbers = [...sectionNumbers.querySelectorAll(".number")].filter(number => !number.id);
const print = console.log;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

operacoes.forEach(icon =>{
    icon.addEventListener("click",() =>{
        if(icon.id === 'deletar'){
            display.textContent = display.textContent.slice(0, -1)
        }
    })
})

fetch("http://localhost:3000/").then(console.log(response))

