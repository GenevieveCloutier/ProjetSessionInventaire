import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Locations } from './locations.model.js';

export const Amandes = sequelize.define("amandes", {
    id_location: {
        type: DataTypes.INTEGER,
        references: {
            model: Locations,
            key: "id"
        },
        allowNull: false
    },
    montant: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statut_amande: {
        type: DataTypes.ENUM('Payé', 'Non payé'),
        allowNull: false
    }
});

// je n'ai pas regarder la video encore, je ne sais pas quoi faire avec cette partie
//Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
//Roles.hasMany(Users, { foreignKey: 'role_id', as: 'users' });

sequelize.sync({force:true}).then(() => {
    console.log('Amandes table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});