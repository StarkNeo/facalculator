const { QueryTypes } = require("sequelize");
const { mySequelize } = require("./dbpostgres");

//SEARCH FOR INDEX IN TABLE INDICES FROM INDEX DATABASE
const consulta = async (par1, par2) => {
    try {
        let respuesta = await mySequelize.query(`SELECT * FROM indices WHERE mes=${par1} AND ejercicio =${par2}`, { type: QueryTypes.SELECT });
        console.log(respuesta[0])
        if (respuesta[0] !== undefined) {
            return respuesta[0].indice
        } else {
            return 1;
        }
    } catch (error) {
        return error
    }

}



module.exports = { consulta };


