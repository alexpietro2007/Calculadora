import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { create } from 'express-handlebars';
import { evaluate } from 'mathjs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hbs = create({ partialsDir: [path.join(__dirname, 'views', 'partials')] });
const app = express();
const log = console.log;
app.use(express.json());  // Certifique-se de que esse middleware esteja configurado antes de suas rotas


// Servir arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configurar Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rota principal
app.get('/', (req, res) => {
    res.render('home');
});

// Rota para calcular a expressão da calculadora
app.post('/calcular', (req, res) => {
    try {
        // Verifique se o corpo da requisição está correto
        if (!req.body || !req.body.expressao) {
            return res.status(400).json({ erro: "Nenhuma expressão foi enviada" });
        }

        const { expressao } = req.body;
        console.log("Expressão recebida:", expressao);

        // Usando math.js para avaliar a expressão
        const resultado = evaluate(expressao);
        console.log("Resultado:", resultado);
        res.json({ resultado });
    } catch (error) {
        console.error("Erro ao calcular:", error);
        res.status(400).json({ erro: "Expressão inválida" });
    }
});



// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App rodando na porta http://localhost:${PORT}`));
