import { findOne } from "../../../lib/db/controllers/users.controller";
import { error } from '@sveltejs/kit';

export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });

    if (!idUser) {
		error(404, {
			message: 'Not found'
		})
    } 

    return { user:user };
}