const { body, validationResult } = require('express-validator');

const registerValidation = [
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome é obrigatório.')
        .isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres.'),
    body('email')
        .trim()
        .isEmail().withMessage('Informe um e-mail válido.')
        .normalizeEmail(),
    body('senha')
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres.')
];

const loginValidation = [
    body('email').trim().isEmail().withMessage('Informe um e-mail válido.'),
    body('senha').notEmpty().withMessage('A senha é obrigatória.')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            mensagem: 'Erros de validação encontrados.',
            erros: errors.array().map(err => err.msg)
        });
    }
    next();
};

module.exports = {
    registerValidation,
    loginValidation,
    validate
};