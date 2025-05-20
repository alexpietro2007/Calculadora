const { evaluate } = require('mathjs');

function calculateExpression(expressao) {
    try {
        if (!expressao) throw new Error('Nenhuma expressão fornecida');

        const resultado = evaluate(expressao);

        if (!isFinite(resultado) || isNaN(resultado)) {
            return { erro: "Expressão inválida" };
        }

        return { resultado };
    } catch (error) {
        console.error("Erro ao calcular:", error);
        return { erro: "Expressão inválida" };
    }
}

module.exports = { calculateExpression };



