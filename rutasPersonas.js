const express = require('express')
const service = require('./service')
const app = express.Router();

// GET /api/personas
app.get('/', async(req, res) => {
  try {
    const respuesta = await service.personasList();
    res.json(respuesta);
  } catch(e) {
    console.log(e)
    res.status(422).send('error')
  }
})

// GET /api/personas/5
app.get('/:id', async(req, res) => {
  try {
    //
  } catch(e) {
    console.log(e)
    res.status(422).send('error')
  }
})

module.exports = app;
