import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db.js';
import { Roles } from './roles.model.js';

export const NewUser = sequelize.define("users", {
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
        allowNull: true // ou false selon votre besoin
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true // ou false selon votre besoin
    },
    statut_user: {
        type: DataTypes.ENUM('actif', 'inactif'),
        allowNull: false,
        defaultValue: 'actif' // Valeur par défaut pour le statut utilisateur
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

NewUser.addHook('beforeCreate', async (user, options) => {
    user.password = await bcrypt.hash(user.password, 10);
});

NewUser.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
Roles.hasMany(NewUser, { foreignKey: 'role_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
