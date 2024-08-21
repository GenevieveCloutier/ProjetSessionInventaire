import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db.js';
import { Roles } from './roles.model.js';

export const Users = sequelize.define("users", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true //remettre false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true //remettre false
    },
    statut_user: {
        type: DataTypes.ENUM('actif', 'inactif'),
        allowNull: true //remettre false
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: "id"
        },
        allowNull: false
    },
});

Users.addHook('beforeCreate',(async (user, option) => {
    user.password = await bcrypt.hash(user.password, 10);
}));

// user.password = undefined, donc il ne le crypte pas... :(
Users.addHook('beforeBulkUpdate',(async(user, option)=> {
    if (user.password) {
        console.log(user.password + "mot de passe bycrypt" )
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
        }
    }
));

Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
Roles.hasMany(Users, { foreignKey: 'role_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});