import { NewUser } from "../models/newUser.model.js";

/**
 * Création d'un nouvel utilisateur
 *
 * @param {String} nom
 * @param {String} prenom
 * @param {Number} role_id
 * @param {String} password
 * @returns {Object} L'utilisateur créé
 */
export async function createNewUser(nom, prenom, role_id, password) {
    try {
        const result = await NewUser.create({
            nom: nom,
            prenom: prenom,
            role_id: role_id,
            password: password,
            statut_user: 'actif' // Statut par défaut
        });
        return result.dataValues;
    } catch (error) {
        throw error;
    }
}
