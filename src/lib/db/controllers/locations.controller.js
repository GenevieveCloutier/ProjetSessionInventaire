import { Locations } from "../models/locations.model";
import { Users } from "../models/users.model";
import { Amendes } from "../models/amendes.modele";
import { Items } from "../models/items.model";


/**
 * Création d'un nouvelle location
 *
 * @export
 * @param {String} p_date_emprunt
 * @param {String} p_date_retour_prevue
 * @param {String} p_date_retour_effective
 * @param {ENUM} p_statut_location
 * @param {Number} p_user_id
 * @param {Number} p_item_id
 */
export async function newLocation(p_date_emprunt, p_date_retour_prevue, p_date_retour_effective, p_statut_location, p_user_id, p_item_id){
    Items.create({
        date_emprunt: p_date_emprunt,
        date_retour_prevue: p_date_retour_prevue,
        date_retour_effective: p_date_retour_effective,
        statut_location: p_statut_location,
        user_id: p_user_id,
        p_item_id: p_item_id
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}


/**
 * Va chercher toutes les locations
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Locations.findAll({
        include: [
            { model: Users, as: "user" },
            { model: Amendes, as: "amende" },
            { model : Items, as: "item" }
        ],
    }).then(resultat => {
        return resultat.map(location => ({
            ...location.dataValues,
            //si location.user existe, retourne le sinon, retourne null
            user: location.user ? location.user.dataValues : null,
            amende: location.amende ? location.amende.dataValues : null,
            item : location.item ? location.item.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    }); 
}

/**
 * Va chercher toutes les locations d'un utilisateur
 *
 * @export
 * @async
 * @returns {Object}
 * @param {Object} p_where
 */
export async function locationUser(p_where){
    return await Locations.findAll({
        include: [
            { model: Users, as: "user" },
            { model: Amendes, as: "amende" },
            { model : Items, as: "item" }
        ],
        where:{
            user_id: p_where 
         },
    }).then(resultat => {
        return resultat.map(location => ({
            ...location.dataValues,
            //si location.user existe, retourne le sinon, retourne null
            user: location.user ? location.user.dataValues : null,
            amende: location.amende ? location.amende.dataValues : null,
            item : location.item ? location.item.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    }); 
};




