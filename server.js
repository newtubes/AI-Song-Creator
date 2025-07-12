const express = require('express');
const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public')); // Servir archivos estáticos (index.html)

app.post('/generate-speech', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send('Falta el texto.');

  const gtts = new gTTS(text, 'es');
  const outputPath = path.join(__dirname, 'public', 'output.mp3');
  
  gtts.save(outputPath, (err) => {
    if (err) return res.status(500).send('Error al generar audio: ' + err.message);
    res.json({ audioUrl: '/output.mp3' });
  });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));