Gestión de Inventario - Frontend

Este es el **frontend** del proyecto **Gestión de Inventario**, una aplicación que permite al personal **añadir, eliminar y modificar productos** dentro de un inventario.  
Está construido con **React 19** usando **Create React App (CRA)** y sigue una arquitectura de componentes organizada en carpetas.

---

 🚀 Características

- Interfaz sencilla e intuitiva para la gestión de productos.
- Funcionalidades **CRUD** completas (Crear, Leer, Actualizar, Eliminar).
- Navegación con **React Router DOM**.
- Conexión a un backend mediante **Axios**.
- Preparado para pruebas con **React Testing Library**.
- Mide el rendimiento con **web-vitals**.

---

 🛠️ Tecnologías utilizadas

- [React 19](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Testing Library](https://testing-library.com/) (jest-dom, user-event, react)
- JavaScript (ES6+)
- CSS3
- HTML5

---

 📂 Estructura del proyecto
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.jsx
│   ├── components/       # Componentes reutilizables (Botones, Inputs, etc.)
│   ├── pages/            # Páginas principales (Inventario, Detalle, etc.)
│   ├── Styles/           # Archivos de estilos
│   ├── index.js          # Punto de entrada de la app
│   └── reportWebVitals.js
└── package.json

---

## ⚙️ Instalación y uso

Clona el repositorio e instala las dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/gestion-inventario-frontend.git

# Entrar al proyecto
cd gestion-inventario-frontend

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm start

# Build de producción
npm run build

# Ejecutar tests
npm test
```
La aplicación correrá en:
👉 http://localhost:3000

---
Gestión de Inventario — Backend (Node.js + Express + MongoDB)

API backend para el proyecto **Gestión de Inventario**. Expone endpoints para gestionar productos (CRUD) y se conecta a **MongoDB**. Usa **Express**, **Mongoose**, **CORS** y **dotenv**.

---

⚙️ Stack y dependencias

- **Node.js + Express**
- **Mongoose** (MongoDB)
- **CORS**
- **dotenv** (recomendado para variables de entorno)
- **nodemon** (dev)

> Scripts disponibles: `start` y `dev` (con nodemon).  [oai_citation:0‡package.json](file-service://file-DpMct2y9KX7n8Wnrn94sgm)

---

## 🗂️ Estructura (resumen)
.
├── package.json
├── server.js
└── src
├── app.js
├── controllers/
├── models/
└── routes/

- El servidor instancia **Express**, habilita **CORS**, parsea **JSON** y monta las rutas de **productos** bajo `/api/products`.  
- La conexión a **MongoDB (local)** está configurada a `mongodb://localhost:27017/mi-base-de-datos`.  
- El servidor se inicia en el **puerto 3000**.  [oai_citation:1‡server.js](file-service://file-WGFVzNi69zYcPtXay63Lrr)

---

## 🚀 Puesta en marcha

```bash
# 1) Instalar dependencias
npm install

# 2) Entorno de desarrollo (con recarga)
npm run dev

# 3) Producción
npm start
```
•	Por defecto, el servidor corre en http://localhost:3000.
 ---
🔒 CORS y JSON
	•	CORS está habilitado de forma global.
	•	Express está configurado para parsear cuerpo JSON en las requests.  ￼

---

🧪 Scripts (package.json)
	•	npm run dev – Levanta el servidor con nodemon.
	•	npm start – Levanta el servidor con node.  ￼
---
🗃️ Base de datos
	•	MongoDB local: mongodb://localhost:27017/mi-base-de-datos￼
