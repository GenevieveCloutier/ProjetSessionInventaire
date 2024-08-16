import { Amandes } from "../models/amandes.modele";
import { Locations } from "../models/locations.model";

/**
 * Va chercher toutes les amandes
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Amandes.findAll({
        include: [
            { model: Locations, as: "location" }
        ]
    }).then(resultat => {
        return resultat.map(amande => ({
            ...amande.dataValues,
            location: amande.location ? amande.location.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    });
}
