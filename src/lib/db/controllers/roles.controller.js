import { Roles } from "../models/roles.model";


/**
 * Création d'un nouveau role
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_description
 */
export async function newRole(p_nom, p_description){
    Roles.create({
        nom: p_nom,
        description: p_description,
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tous les roles
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Roles.findAll().then(resultat => {
        return resultat.map(role => role.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find Item
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Roles.findOne({ where: p_where })
    .then(res => {
        return res.dataValues;
    }).catch((error) => {
        throw error;
    });
};


/**
 * Mise à jour d'un rôle
 *
 * @export
 * @param {Number} p_id
 * @param {String} p_nom
 * @param {String} p_description
 */

export async function updateRole(p_id, p_nom, p_description,){
    await Roles.update(
       {
       nom: p_nom,
       description: p_description
   },
   {
       where: {
           id: p_id,
       }
   }
)
   .then(resultat => {
       return resultat.dataValues;
   })
   .catch((error)=>{
       throw error;
   });
};
