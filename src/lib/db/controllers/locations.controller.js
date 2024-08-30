import { Locations } from "../models/locations.model";
import { Users } from "../models/users.model";
import { Amendes } from "../models/amendes.modele";
import { Items } from "../models/items.model";

/**
 * Création d'un nouvelle location
 *
 * @export
 * @param {DATE} p_date_emprunt
 * @param {DATE} p_date_retour_prevue
 * @param {DATE} p_date_retour_effective
 * @param {ENUM} p_statut_location
 * @param {Number} p_user_id
 * @param {Number} p_item_id
 */
export async function newLocation(p_date_emprunt, p_date_retour_prevue, p_date_retour_effective, p_statut_location, p_user_id, p_item_id){
    try{
        const resultat = await Locations.create({
        date_emprunt: p_date_emprunt,
        date_retour_prevue: p_date_retour_prevue,
        date_retour_effective: p_date_retour_effective,
        statut_location: p_statut_location,
        user_id: p_user_id,
        item_id: p_item_id
        });
    
        const item = await Items.findOne({ where : { id: p_item_id } });

        if (item && item.quantite > 0) {
            await Items.update(
                { quantite: item.quantite - 1 },
                { where: { id: p_item_id }}
            );
            console.log(item.quantite);
        }
        else {

            console.log("quantité insuffisante"); 
            //j'aimerais faire afficher un message d'erreur mais ça ne fonctionne pas
            // const messageErreurElement = document.getElementById("messageErreur");
            // messageErreurElement.textContent = "Quantité insuffisante"; 
            // messageErreurElement.hidden = false;
        }
        console.log(resultat.dataValues);
        return resultat.dataValues;
       
    } catch (error) {
            throw error;
        }
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
        console.log(location.dataValues);
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
        console.log(location.dataValues);
    })
    .catch((error)=>{
        throw error;
    }); 
};


