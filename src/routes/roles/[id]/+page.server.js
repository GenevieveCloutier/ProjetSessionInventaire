import { findOne } from "$lib/db/controllers/roles.controller.js";
import { updateRole } from "../../../lib/db/controllers/roles.controller";
import { redirect } from "@sveltejs/kit";

export async function load({ params }){
    console.log(params)
    const role = await findOne({id:params.id});
    return { role:role }
}

export const actions = {
    editerRole: async ({ cookies, request }) => {
      const data = await request.formData();
      await updateRole(data.get("idRole"), data.get("nom"), data.get("description"));
      throw redirect(303, '/confirmation');
    }
  } 