const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: true
});

module.exports = User;