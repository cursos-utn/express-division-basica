const express = require('express');
const cors = require('cors');
const app = express();
const rutasPersonas = require('./rutasPersonas')

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use('/api/personas', rutasPersonas);

app.listen(PORT, () => {
  console.log('App corriendo en el puerto ' + PORT);
});
