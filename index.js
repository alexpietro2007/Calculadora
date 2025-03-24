import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { create } from 'express-handlebars';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hbs = create({ partialsDir: [path.join(__dirname, 'views', 'partials')] });
const app = express();
const log = console.log

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Configurar Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Definir rotas
app.get('/', (req, res) => {
    res.render('home')
});

// Ouça na porta fornecida pelo ambiente de execução
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App rodando na porta localhost:${PORT}`));