document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".number");
    const igual = document.getElementById("igual");
    const deletar = document.getElementById("deletar");
    const limpar = document.getElementById("limpar");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            // Evita colocar "=" no display diretamente
            if (value !== '=' && value !== '⌫' && value !== 'C') {
                display.textContent += value;
            }
        });
    });

    igual?.addEventListener("click", () => {
        const valor = display.textContent.trim();

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
            display.textContent = data.resultado;
        })
        .catch(error => console.error("Erro ao calcular:", error.message));
    });

    deletar?.addEventListener("click", () => {
        display.textContent = display.textContent.slice(0, -1);
    });

    limpar?.addEventListener("click", () => {
        display.textContent = "";
    });
});
