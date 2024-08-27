
import { findOne } from "$lib/db/controllers/items.controller.js";
import { newLocation } from "../../../lib/db/controllers/locations.controller";
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function load({ params }){
    const idItem = params.id;
    const item = await findOne({id:idItem});
  
    if (!idItem ) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { item:item };
}

export const actions = {
   newLocation: async ({ cookies, request }) => {
      const data = await request.formData();
      const statut = "En cours";

      await newLocation(data.get("date_emprunt"), 
      data.get("date_retour_prevue"), 
      data.get("date_retour_effective"), 
      statut, data.get("user_id"),  
      data.get("item_id"));

      throw redirect(303, '/confirmation');
     }
  } 

  
