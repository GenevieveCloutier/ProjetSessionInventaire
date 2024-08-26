import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Login = sequelize.define('login', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('Login table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
