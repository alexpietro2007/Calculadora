document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const sectionNumbers = document.getElementById("numeros");
    const igual = document.getElementById("igual");

    // Seleciona todos os botões numéricos e operadores (exceto os de controle como limpar)
    const buttons = [...sectionNumbers.querySelectorAll(".number")].filter(button =>
        !["deletar", "limpar", "apagar", "armazenar", "igual"].includes(button.id)
    );

    // Adiciona eventos de clique nos números e operadores
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
        });
    });

    // Evento para o botão igual
    igual.addEventListener("click", () => {
        const valor = display.textContent.trim(); // Remove espaços extras
        console.log("Enviando expressão:", valor); // Verifique o valor antes de enviar
    
        if (!valor) {
            console.error("Erro: Nenhuma expressão foi digitada.");
            return;
        }
    
        fetch("http://localhost:3000/calcular", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ expressao: valor })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.erro || "Erro desconhecido") });
            }
            return response.json();
        })
        .then(data => {
            display.textContent = data.resultado; // Atualiza o display com o resultado
        })
        .catch(error => console.error("Erro ao calcular:", error.message));
    });
    
    // Evento para deletar o último caractere
    document.getElementById("deletar")?.addEventListener("click", () => {
        display.textContent = display.textContent.slice(0, -1);
    });

    // Evento para limpar o display
    document.getElementById("limpar")?.addEventListener("click", () => {
        display.textContent = "";
    });
});
