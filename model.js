const mysql = require('mysql');
const util = require('util');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'diplomatura',
});
conexion.connect();
const query = util.promisify(conexion.query).bind(conexion);


async function personasList() {
  const respuesta = await query('select id, nombre, apellido, edad from persona');
  return respuesta;
}

function personasGet(id) {

}

function personasAdd(persona) {

}

function personasUpdate(persona) {

}

function personasRemove(id) {

}


module.exports = {
    personasList,
    personasGet,
    personasAdd,
    personasUpdate,
    personasRemove,
}
