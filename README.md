# Login Vulnerable a NoSQL Injection

Esta actividad es una aplicación web **vulnerable a inyecciones NoSQL**.

---

## Tecnologías usadas

- Node.js
- Express
- MongoDB (MongoDB Atlas)
- HTML / CSS básico

---

## 🚀 Para la ejecución:

### 1. Clona el repositorio
```bash
git clone https://github.com/YaelDuarte/InyeccionNoSQLActividad
cd InyeccionNoSQLActividad
```

### 2. Instalar las dependencias de JSON
```bash
npm install
```

### 3. Ejecutar el sript para poder insertar usuarios de prueba a la BD, gracias a la clase seed.js
```bash
node seed.js
```

### 4. Iniciamos el servidor para poder ver la actividad
```bash
npm start
```

### 5. Visitamos la URL que se nos da 
```bash
http://localhost:8000
```

## Inyecciones de ejemplo

Se puedne probar estas entradas para poder verificar la vulnerabilidad del sistema 

** DEBEN PONERSE TANTO EN EL APARTADO DE USUARIO COMO EN LA CONTRASEÑA **
{ "$ne": null }
{ "$gt": "" }
{ "$exists": true }
{ "$regex": ".*" }
