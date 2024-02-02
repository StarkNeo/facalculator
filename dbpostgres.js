const { Sequelize, QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config();

const db = {
    dialect: 'postgres',
    user: dotenv.parsed.USER,
    pass: dotenv.parsed.PASS,
    port: dotenv.parsed.PORT,
    database: dotenv.parsed.DB
}
const mySequelize = new Sequelize(`${db.dialect}://${db.user}:${db.pass}@${db.port}/${db.database}`)

try {
    mySequelize.authenticate();
    console.log('Connection has been established successfully')
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

module.exports={mySequelize};