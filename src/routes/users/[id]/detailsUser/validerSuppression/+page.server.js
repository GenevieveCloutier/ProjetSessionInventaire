import { deleteUser } from "../../../../../lib/db/controllers/users.controller";
import { findOne } from "../../../../../lib/db/controllers/users.controller";
import { error } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";

export async function load({ params, locals }){
    const idUser = params.id;
    const user = await findOne({ id: idUser })

// pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!idUser) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { user:user, locals, }; 
};

export const actions = {
  
    supprimerUser: async ({ cookies, request }) => {
      const data = await request.formData();
      await deleteUser(data.get("idUser"), data.get("statut_user"))
      throw redirect(303, "/users")
    }
  } 