require('dotenv').config();
const express = require('express');
const conn = require('./db/conn');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

conn.sync()
    .then(() => {
        console.log('Conectado ao MySQL via Sequelize!');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar no banco de dados:', err);
    }); 