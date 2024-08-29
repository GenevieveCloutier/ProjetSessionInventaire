import { findOne } from "$lib/db/controllers/users.controller";
import { updateUser } from "../../../../lib/db/controllers/users.controller";
import { deleteUser } from "../../../../lib/db/controllers/users.controller";
import { error } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";

export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser })

// pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!idUser) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { user:user };
};

export const actions = {
  
  editerProfilAdmin: async ({ cookies, request }) => {
    const data = await request.formData();
    await updateUser(data.get("idUser"), data.get("prenom"), data.get("nom"), data.get("telephone"), data.get("email"), data.get("role_id"), data.get("statut_user"));
    throw redirect(303, '/users');
  },
  supprimerUser: async ({ cookies, request }) => {
    const data = await request.formData();
    await deleteUser(data.get("idUser"), data.get("statut_user"))
    throw redirect(303, "/users")
  }
} 

