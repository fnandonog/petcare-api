const jwt = require('jsonwebtoken');
const getToken = require('./get-token');

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ mensagem: 'Acesso negado! Token não fornecido.' });
    }

    const token = getToken(req);

    if (!token) {
        return res.status(401).json({ mensagem: 'Formato do token inválido! Use "Bearer <TOKEN>".' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(403).json({ mensagem: 'Token inválido ou expirado!' });
    }
};

module.exports = verifyToken;