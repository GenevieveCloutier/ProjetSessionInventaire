import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Items = sequelize.define("items", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categorie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    statut_item: {
        type: DataTypes.ENUM('Disponible', 'Emprunté', 'Supprimé'),
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('Items table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});