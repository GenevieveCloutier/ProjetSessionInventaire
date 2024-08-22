import { findOne } from "$lib/db/controllers/items.controller.js";
import { error } from '@sveltejs/kit';

export async function load({ params }){
    const idItem = params.id;
    const item = await findOne({id:params.id});

    if (!idItem) {
		error(404, {
			message: 'Page non trouvée'
		})
    } 

    return { item:item };
}



