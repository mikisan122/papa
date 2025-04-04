require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Configurar CORS para permitir peticiones desde el frontend
app.use(cors());
app.use(express.static("public"));

// Endpoint para obtener noticias
app.get("/news", async (req, res) => {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener noticias" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
