import { findAll } from "$lib/db/controllers/locations.controller";
import { error } from '@sveltejs/kit';

export async function load(){
    const locations = await findAll();

    // pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!locations) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 
    return { locations:locations };
}
