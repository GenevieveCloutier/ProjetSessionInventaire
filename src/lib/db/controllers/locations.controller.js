import { Locations } from "../models/locations.model";
import { Users } from "../models/users.model";
import { Amendes } from "../models/amendes.modele";
import { Items } from "../models/items.model";

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




