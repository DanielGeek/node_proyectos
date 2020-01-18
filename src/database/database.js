import Sequelize from 'sequelize';

 export const sequelize = new Sequelize(
    'postgres', // name_bd
    'postgres', // user_bd
    '123'     , // passwd_bd
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)