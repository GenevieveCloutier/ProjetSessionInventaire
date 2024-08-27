import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db.js';
import { Roles } from './roles.model.js';
import { v4 as uuidv4 } from 'uuid';

export const Users = sequelize.define("users", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
      userAuthToken: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
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
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statut_user: {
        type: DataTypes.STRING,
        allowNull: false
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
//encrypter le MDP à la première utilisation
Users.addHook('beforeCreate',(async (user, option) => {
    user.password = await bcrypt.hash(user.password, 10);
}));

//encrypter le MPD après modification
Users.addHook('beforeUpdate',(async(user, option)=> {
    user.password = bcrypt.hashSync(user.password,10);
}));

Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
Roles.hasMany(Users, { foreignKey: 'role_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});