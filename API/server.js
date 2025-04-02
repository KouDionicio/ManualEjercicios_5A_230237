// server.js (Node.js con Express)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let datos = []; // Almacenamiento en memoria (en producción usa una base de datos)

// Endpoint para recibir datos por POST
app.post('/api/datos', (req, res) => {
    const nuevoDato = {
        id: Date.now(),
        ...req.body
    };
    datos.push(nuevoDato);
    res.status(201).json(nuevoDato);
});

// Endpoint para obtener datos por GET
app.get('/api/datos', (req, res) => {
    res.json(datos);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor API en http://localhost:${PORT}`));
