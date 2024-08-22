
import { newItem } from "$lib/db/controllers/items.controller";

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newItem(data.get("nom"), data.get("description"), data.get("categorie"), data.get("quantite"), data.get("image"), data.get("statut_item"));

        console.log(res);
    }
}