# Login Vulnerable a NoSQL Injection

Esta actividad es una aplicación web **vulnerable a inyecciones NoSQL**.

---

## Tecnologías usadas

- Node.js
- Express
- MongoDB (MongoDB Atlas)
- HTML / CSS 

---

## Para la ejecución:

### 1. Clona el repositorio
```bash
git clone https://github.com/YaelDuarte/InyeccionNoSQLActividad
cd InyeccionNoSQLActividad
```

### 2. Instalar las dependencias de JSON
```bash
npm install
```

### 3. Ejecutar el script para poder insertar usuarios de prueba a la BD, gracias a la clase seed.js
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
---

## Inyecciones de ejemplo

Se puedne probar estas entradas para poder verificar la vulnerabilidad del sistema 

DEBEN PONERSE TANTO EN EL APARTADO DE USUARIO COMO EN LA CONTRASEÑA
- { "$ne": null }
- { "$gt": "" }
- { "$exists": true }
- { "$regex": ".*" }

**Como nota, cuando queremos vulnerar la contraseña solamente, podremos hacerlo poniendo el nombre correcto del usuario y poniendo alguno de los ejemplos en la contraseña**
![image](https://github.com/user-attachments/assets/9248bafd-fae8-4c48-be20-afd79185f676)
![image](https://github.com/user-attachments/assets/a6e4d6a1-7e4f-4f08-9461-6a865c3e7164)


