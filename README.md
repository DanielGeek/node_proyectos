# Nodejs
Proyecto API en Nodejs con PostgreSql, Sequelize, babel,
comandos para que funcione el proyecto
npm install
npm run dev

para usar la api puedes bajar un programa rest como Insomnia o Postman
crear nueva request y pasar la url a consultar, por ejemplo http://localhost:4000/api/projects

# What is this?
This is a simple REST API using Javascript Technologies and PostgreSQL.
- nodejs
- express
- postgreSQL
- sequelize
- babel 

# Estructura del proyecto
```
    .
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── sql
    │   └── db.sql
    └── src
        ├── app.js
        ├── controllers
        │   ├── project.controller.js
        │   └── task.controller.js
        ├── database
        │   |── database.js
        │   └── postgres.sql
        ├── index.js
        ├── models
        │   ├── Project.js
        │   └── Task.js
        └── routes
            ├── projects.js
            └── tasks.js

    6 directories, 13 files
```