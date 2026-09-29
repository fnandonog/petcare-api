const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class UserController {
    static async register(req, res) {
        try {
            const { nome, email, senha } = req.body;

            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return res.status(422).json({ mensagem: 'Este e-mail já está cadastrado.' });
            }

            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(senha, salt);

            const user = await User.create({
                nome,
                email,
                senha: passwordHash
            });

            return res.status(201).json({
                mensagem: 'Usuário cadastrado com sucesso!',
                usuario: { id: user.id, nome: user.nome, email: user.email }
            });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno no servidor.', erro: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, senha } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            const checkPassword = await bcrypt.compare(senha, user.senha);
            if (!checkPassword) {
                return res.status(401).json({ mensagem: 'Senha incorreta!' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            return res.status(200).json({
                mensagem: 'Login realizado com sucesso!',
                token
            });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno no servidor.', erro: error.message });
        }
    }

    static async getPerfil(req, res) {
        try {
            const user = await User.findByPk(req.user.id, {
                attributes: { exclude: ['senha'] }
            });

            if (!user) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar perfil.', erro: error.message });
        }
    }
}

module.exports = UserController;