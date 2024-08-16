import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Locations } from './locations.model.js';

export const Amandes = sequelize.define("amandes", {
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
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Locations,
            key: "id"
        },
        allowNull: false
    }
});

Amandes.belongsTo(Locations, { foreignKey: 'location_id', as: 'location' });
Locations.hasOne(Amandes, { foreignKey: 'location_id', as: 'amande' });

sequelize.sync().then(() => {
    console.log('Amandes table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});