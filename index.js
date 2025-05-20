const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes/calculator'); // usando require para importar router

const app = express();

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({ partialsDir: path.join(__dirname, 'views', 'partials') }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

// Usando a rota importada
app.use('/calcular', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App rodando na porta http://localhost:${PORT}`));

