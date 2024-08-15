import { Locations } from "../models/locations.model";
import { Users } from "../models/users.model";
import { Amandes } from "../models/amandes.modele";

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
            { model: Amandes, as: "amande" }
        ]
    }).then(resultat => {
        return resultat.map(location => ({
            ...location.dataValues,
            user: location.user ? location.user.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    });
}