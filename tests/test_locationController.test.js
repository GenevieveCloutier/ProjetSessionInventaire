

const { newLocation } = require("../src/lib/db/controllers/locations.controller.js");


initDB();

test('créer une nouvelle location', () => {
    expect("2024-08-30T00:00", "2024-09-01T00:00", "NULL", "en cours", "73b59e4e-43d7-4369-b279-b1ce2d75a6bd", "3").toBe({
    id: 23,
    date_emprunt: "2024-08-30T00:00:00.000Z",
    date_retour_prevue: "2024-09-01T00:00:00.000Z",
    date_retour_effective: '',
    statut_location: 'En cours',
    user_id: '73b59e4e-43d7-4369-b279-b1ce2d75a6bd',
    item_id: '3',
    updatedAt: "",
    createdAt: ""
     });
});

// J'ai des problèmes à cause de l'authentification sequelize



  
