const express = require('express');
const { calculateExpression } = require('../utils/calculate');

const router = express.Router();

router.post('/', (req, res) => {
    const { expressao } = req.body;
    if (!expressao) return res.status(400).json({ erro: 'Nenhuma expressão foi enviada' });

    const result = calculateExpression(expressao);

    if (result.erro) return res.status(400).json({ erro: result.erro });

    res.json({ resultado: result.resultado });
});

module.exports = router;
