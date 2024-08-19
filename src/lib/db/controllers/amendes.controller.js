import { Amendes } from "../models/amendes.modele";
import { Locations } from "../models/locations.model";

/**
 * Va chercher toutes les amendes
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Amendes.findAll({
        include: [
            { model: Locations, as: "location" }
        ]
    }).then(resultat => {
        return resultat.map(amende => ({
            ...amende.dataValues,
            location: amende.location ? amende.location.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    });
}
