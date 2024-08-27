import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { newRole } from '../controllers/roles.controller.js';

export const Roles = sequelize.define("roles", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//permet de définir au départ les trois rôles de base du projet
const [administrateur] = await Roles.findOrCreate({
    where: { nom: 'Administrateur' },
    defaults: {
      description: 'Permet de tout faire',
    },
  });
  
const [employe] = await Roles.findOrCreate({
    where: { nom: 'Employe' },
    defaults: {
      description: 'Permet seulement de faire des locations',
    },
  });
  
const [chefEquipe] = await Roles.findOrCreate({
    where: { nom: 'chefEquipe' },
    defaults: {
      description: `Permet de faire des locations, remettre 
//     des outils en stock et de modifier des locations`,
    },
  });

sequelize.sync().then(() => {
    console.log('Roles table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});