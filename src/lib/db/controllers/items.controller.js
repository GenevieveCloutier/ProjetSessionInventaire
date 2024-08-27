import { Items } from "../models/items.model";
import { Op } from 'sequelize';


/**
 * Création d'un nouvel item
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_description
 * @param {String} p_categorie
 * @param {Number} p_quantite
 * @param {file} p_image
 * @param {String} p_statut_item
 */
export async function newItem(p_nom, p_description, p_categorie, p_quantite, p_image, p_statut_item) {
    try {
        const resultat = await Items.create({
            nom: p_nom,
            description: p_description,
            categorie: p_categorie,
            quantite: p_quantite,
            image: p_image,
            statut_item: p_statut_item
        });
        return resultat.dataValues;
    } catch (error) {
        throw error;
    }
}

/**
 * Va chercher tous les items
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Items.findAll().then(resultat => {
        return resultat.map(item => item.dataValues);
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
    return await Items.findOne({ where: p_where })
    .then(res => {
        return res.dataValues;
    }).catch((error) => {
        throw error;
    });
}

/**
 * Va chercher les items correspondant à la recherche
 *
 * @export
 * @async
 * @returns {Object}
 * @param {Object} p_where
 */

export async function rechercher(p_where){
    return await Items.findAll({
        where: {
             [Op.or]:{
                nom : {
                    [Op.substring]: p_where
                },
                description : {
                    [Op.substring]: p_where
                },
                categorie : {
                    [Op.substring]: p_where
                },
             }

        },
    }).then(resultat => {
        return resultat.map(item => item.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

// /**
//  * Va chercher tous les items électriques
//  *
//  * @export
//  * @async
//  * @returns {Object}
//  */
// export async function findAll(){
//     return await Items.findAll().then(resultat => {
//         return resultat.map(item => item.dataValues);
//     })
//     .catch((error)=>{
//         throw error;
//     });
// }
