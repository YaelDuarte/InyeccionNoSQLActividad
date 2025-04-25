// Carga variables del entorno dadas por el archivo env
require("dotenv").config();

// Importamos express para la creacion del servidor
const express = require("express");
const app = express();

// Importamos Mongo para poder hacer las consultas
const { MongoClient } = require("mongodb");
const path = require("path");

// Obtiene la URI del archivo .env y crea un cliente para las consultas en Mongo
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "FrontPub")));

let db;

// Conexion a la BD
client.connect().then(() => {
  db = client.db("vulnerableDB");
  console.log("✅ Conectado a MongoDB");
});

// Intenta parsear los campos como JSON si es posible
function tryParseJSON(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

app.post("/login", async (req, res) => {
  // Parsea manualmente por si el input viene como JSON en texto
  const username = tryParseJSON(req.body.username);
  const password = tryParseJSON(req.body.password);

  console.log("📥 Datos recibidos y parseados:", { username, password });

  // Dentro de este try catch tendremos la validación de la inyección para ver si ha sido vulnerada o no
  try {
    const user = await db.collection("users").findOne({ username, password });

    if (user) {
      res.send("¡Login exitoso! ✅");
    } else {
      res.send("Usuario o contraseña incorrectos ❌");
    }
  } catch (err) {
    // En dado caso de algun problema se nos mostrara la leyenda error tanto en consola como en la pagina
    console.error("Error:", err);
    res.status(500).send("Error en el servidor");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
