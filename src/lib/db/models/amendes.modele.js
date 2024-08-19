import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Locations } from './locations.model.js';

export const Amendes = sequelize.define("amendes", {
    montant: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statut_amende: {
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

Amendes.belongsTo(Locations, { foreignKey: 'location_id', as: 'location' });
Locations.hasOne(Amendes, { foreignKey: 'location_id', as: 'amende' });

sequelize.sync().then(() => {
    console.log('Amendes table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});