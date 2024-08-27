
import { newUser } from "$lib/db/controllers/users.controller.js";
import { redirect } from "@sveltejs/kit";

export const actions = {

    new: async({ cookies, request })=>{
      
        const data = await request.formData();
        let res = await newUser(data.get("nom"), data.get("prenom"), data.get("email"), data.get("telephone"), data.get("password"),data.get("role"), data.get("statut_user"));
        throw redirect(303, `/users/`)
    }
}

