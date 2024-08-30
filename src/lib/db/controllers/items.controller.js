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
 * @param {String} p_image
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
            statut_item: p_statut_item,
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
     return await Items.findAll({
        where: {
           statut_item: {
            [Op.not]: "Supprimé"
           }
        }
     }).then(resultat => {
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
export async function findOne(p_where) {
    try {
        const item = await Items.findOne({
            where: p_where
        });

        if (!item) {
            throw new Error('Item not found');
        }

        return item.dataValues;
    } catch (error) {
        throw error;
    }
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

export async function findAllItemsWithoutImage() {
    try {

        const items = await Items.findAll({
            attributes: ['id','nom', 'description', 'categorie', 'quantite', 'statut_item']
        });
        return items.map(item => item.dataValues);
    } catch (error) {
        throw error;
    }
}

export async function removeItem(itemId) {
    try {
        console.log("Item id is = " + itemId);
        const item = await Items.findByPk(itemId);
        if (item) {
            item.statut_item = 'Supprimé';
            await item.save(); 
            return { success: true };
        } else {
            throw new Error('Item not found');
        }
    } catch (error) {
        throw error;
    }
}


export async function updateItem(updatedItem) {
    try {
        const { id, nom, description, categorie, quantite, statut_item } = updatedItem;

        const [updated] = await Items.update(
            { nom, description, categorie, quantite, statut_item, updatedAt: new Date() },
            { where: { id } }
        );

        if (updated) {
            return { success: true };
        } else {
            return { success: false, error: 'Item not found or no changes made' };
        }
    } catch (error) {
        console.error('Error updating item:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Updates the statut_item of an item to 'Disponible'
 *
 * @export
 * @param {Number} itemId
 * @returns {Object}
 */
export async function markItemAsAvailable(itemId) {
    try {
        const item = await Items.findByPk(itemId);
        if (item) {
            item.statut_item = 'Disponible';
            await item.save();
            return { success: true };
        } else {
            throw new Error('Item not found');
        }
    } catch (error) {
        throw error;
    }
}

