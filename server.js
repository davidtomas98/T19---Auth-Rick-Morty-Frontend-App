const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Importar el módulo cors

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS
app.use(express.static('src/assets'));


// Ruta para obtener los personajes
app.get('/characters', (req, res) => {
  const data = fs.readFileSync('src/assets/data/database.json', 'utf8');
  const characters = JSON.parse(data).characters;
  res.json(characters);
});

// Ruta para crear un nuevo personaje
app.post('/characters', (req, res) => {
  const data = fs.readFileSync('src/assets/data/database.json', 'utf8');
  const characters = JSON.parse(data).characters;

  const newCharacter = req.body;
  newCharacter.id = characters.length + 1;

  characters.push(newCharacter);

  fs.writeFileSync('src/assets/data/database.json', JSON.stringify({ characters }, null, 2));

  res.json(newCharacter);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
