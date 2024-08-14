import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Users } from './users.model.js';
import { Items } from './items.model.js';

export const Locations = sequelize.define("locations", {
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    },
    id_item: {
        type: DataTypes.INTEGER,
        references: {
            model: Items,
            key: "id"
        },
        allowNull: false
    },
    
    date_emprunt: {
        type: DataTypes.STRING, // est-ce qu'on met un champs date à la place?
        allowNull: false
    },
    date_retour_prevue: {
        type: DataTypes.STRING, // est-ce qu'on met un champs date à la place?
        allowNull: false
    },
    date_retour_effective: {
        type: DataTypes.STRING, // est-ce qu'on met un champs date à la place?
        allowNull: false
    },
    statut_location: {
        type: DataTypes.ENUM('En cours', 'Terminé'),
        allowNull: false
    },

});

// je n'ai pas regarder la video encore, je ne sais pas quoi faire avec cette partie
//Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
//Roles.hasMany(Users, { foreignKey: 'role_id', as: 'users' });


sequelize.sync({force:true}).then(() => {
    console.log('Locations table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});