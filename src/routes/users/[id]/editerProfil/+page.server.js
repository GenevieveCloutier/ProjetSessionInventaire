import { findOne } from "$lib/db/controllers/users.controller";
import { locationUser } from "$lib/db/controllers/locations.controller";
import { error } from '@sveltejs/kit';

export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });
    const locations = await locationUser(idUser);

// pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!idUser) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { user:user, locations:locations };
};

// fonctionne mais ne met pas les modifs dans la BD
export const actions = {
  editerProfil: async ({ cookies, request }) => {
    const data = await request.formData();
  }
} 