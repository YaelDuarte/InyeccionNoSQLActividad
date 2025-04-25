// Script para insertar usuarios de prueba
require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Funcion para la creacion y agregado de los usuarios a la BD
async function seedUsers() {
  try {
    await client.connect();
    const db = client.db("vulnerableDB");
    const users = db.collection("users");

    // Usuarios a ingresar en la BD para la inyeccion posterior.
    await users.deleteMany({});
    await users.insertMany([
      { username: "admin", password: "admin123", role: "admin" },
      { username: "juan", password: "pass123", role: "user" },
      { username: "misho", password: "123456", role: "user" },
      { username: "ana", password: "qwerty", role: "user" }
    ]);


    // Mensajes para ver en la consola si estos usuarios fueron creados o hubo un error en la creacion
    console.log("Usuarios insertados correctamente");
  } catch (err) {
    console.error("Error al insertar:", err);
  } finally {
    await client.close();
  }
}

seedUsers();
