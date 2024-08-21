import { findOne } from "$lib/db/controllers/users.controller";
import { updatePassword } from "../../../../lib/db/controllers/users.controller";
import { error } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";

export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });

    // pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!idUser) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { user:user };
};

export const actions = {
    editerMDP: async ({ cookies, request }) => {
      const data = await request.formData();
      await updatePassword(data.get("user_id"), data.get("password2"));
      throw redirect(303, '/confirmation');
    }
  }