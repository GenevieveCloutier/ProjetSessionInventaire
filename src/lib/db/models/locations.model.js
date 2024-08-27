import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Users } from './users.model.js';
import { Items } from './items.model.js';

export const Locations = sequelize.define("locations", {
    date_emprunt: {
        type: DataTypes.DATE, // est-ce qu'on met un champs date à la place?
        allowNull: false
    },
    date_retour_prevue: {
        type: DataTypes.DATE, // est-ce qu'on met un champs date à la place?
        allowNull: false
    },
    date_retour_effective: {
        type: DataTypes.DATE, // est-ce qu'on met un champs date à la place?
        allowNull: true
    },
    statut_location: {
        type: DataTypes.ENUM('En cours', 'Terminé'),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Items,
            key: "id"
        },
        allowNull: false
    }

});


Locations.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
Users.hasMany(Locations, { foreignKey: 'user_id', as: 'locations' });

Locations.belongsTo(Items, { foreignKey: 'item_id', as: 'item' });
Items.hasMany(Locations, { foreignKey: 'item_id', as: 'locations' });


sequelize.sync().then(() => {
    console.log('Locations table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});