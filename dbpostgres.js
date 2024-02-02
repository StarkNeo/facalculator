const { Sequelize, QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config();

const db = {
    dialect: 'postgres',
    user: process.env.USER,
    pass: process.env.PASS,
    port: process.env.PORT,
    database: process.env.DB
}
const mySequelize = new Sequelize(`${db.dialect}://${db.user}:${db.pass}@localhost:${db.port}/${db.database}`)

try {
    mySequelize.authenticate();
    console.log('Connection has been established successfully')
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

module.exports={mySequelize};