const { Pool } = require('pg');
//para coectarnos a postgres

const pool = new Pool({
    host:   'localhost',
    user:   'postgres',
    password:   'passwordetuusuariopg',
    database: 'UsuariosAPI',
    port:   '5432'   
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
    // muestra por consola al ejecutar en terminal npm run dev
    // console.log(response.rows);
    // res.send('users');
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

// crear un nuevo usuario enviado en formato json
// {
// 	"name": "Eze",
// 	"email": "eze@gmail.com"
// }
const createUser = async (req, res) => {
    const { name, email } = req.body;
    // console.log(req.body);

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'Usuario agregado exitosamente',
        body: {
            user: {name, email}
        }
    });
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.send('Usuario actualizado exitosamente');
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`Usuario ${id} borrado exitosamente`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}