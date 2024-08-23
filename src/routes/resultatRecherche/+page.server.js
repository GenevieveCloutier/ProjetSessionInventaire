import { findAll } from "$lib/db/controllers/items.controller";
import { rechercher } from "$lib/db/controllers/items.controller";
//import { redirect } from "@sveltejs/kit";

export async function load({params, url}) {
    const items = await findAll();
    let resultat = url.searchParams.get("resultatRecherche");
    const itemRecherche = await rechercher(resultat);

    console.log(itemRecherche)
    return { items:items, itemRecherche:itemRecherche};
}

export const actions = {
    recherche: async ({ cookies, request}) => {
        const data = await request.formData();
        //throw redirect(303, '/confirmation'); 
    }
}