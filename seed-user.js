//import { newUser } from "./src/lib/db/controllers/users.controller.js";
import { Users } from "./src/lib/db/models/users.model.js";
import { Roles } from "./src/lib/db/models/roles.model.js";
import bcrypt from 'bcrypt';

async function newRole() {
    await Roles.create({
        nom: "Administrateur",
        description: "Administrer"
    });
    console.log('Le rôle Administrateur a été effectuée avec succès!');
}

newRole().catch(err => {
    console.error('Une erreur est survenue lors de la création du role', err);
});

async function newUser() {
    const mpdHash = await bcrypt.hash('1234', 10);
    await Users.create({
        nom: "admin",
        prenom: "admin",
        password: mpdHash,
        email: "admin@admin.com",
        telephone: "000 000 0000",
        statut_user: "actif",
        role_id: 1,
    });
    console.log('L utilisateur Administrateur a été effectuée avec succès!');
}

newUser().catch(err => {
    console.error('Une erreur est survenue lors de la création de l utilisateur', err);
});

//faire l'installation dans le terminal avec la commande node seed-user.js
// mais ça ne fonctionne pas.