/**
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";


export async function load({params}){

}


export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newUser(data.get("nom"), data.get("prenom"), data.get("role"), data.get("password"));

        console.log(res);
    }

}
*/
/**
import db from '$lib/server/db';
import bcrypt from 'bcrypt';

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const nom = data.get('nom');
      const prenom = data.get('prenom');
      const email = data.get('email');
      const telephone = data.get('telephone');
      const password = data.get('password');
      const role = data.get('role');

      // Hacher le mot de passe avant de le stocker
      const hashedPassword = await bcrypt.hash(password, 10);

      const statut_user = "Actif";

      // Insertion des données dans la base de données SQLite avec une promesse
      await new Promise((resolve, reject) => {
        db.run(
          `INSERT INTO users (nom, prenom, email, telephone, password, statut_user, role_id, createdAt, updatedAt)
           VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
          [nom, prenom, email, telephone, hashedPassword, statut_user, role],
          function (err) {
            if (err) {
              console.error('Erreur lors de l\'insertion dans la base de données:', err.message);
              reject(err);
            } else {
              console.log(`Nouvel utilisateur ajouté avec l'ID ${this.lastID}`);
              resolve();
            }
          }
        );
      });

      return { success: true };
    } catch (error) {
      console.error('Erreur lors du traitement de la demande:', error);
      return {
        success: false,
        error: 'Une erreur est survenue lors de la création de l\'utilisateur.'
      };
    }
  }
};

*/

import { createUser } from '$lib/db/controllers/users.controller';

export const actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const nom = data.get('nom');
            const prenom = data.get('prenom');
            const email = data.get('email');
            const telephone = data.get('telephone');
            const password = data.get('password');
            const role = data.get('role');

            await createUser({ nom, prenom, email, telephone, password, role });

            return { success: true };
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
            return {
                success: false,
                error: 'Une erreur est survenue lors de la création de l\'utilisateur.'
            };
        }
    }
};