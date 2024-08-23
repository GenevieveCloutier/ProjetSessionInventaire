
import { findAll } from "$lib/db/controllers/items.controller";
import { rechercher } from "$lib/db/controllers/items.controller";

export async function load() {
    const items = await findAll();
    const itemRecherche = await rechercher("pelle"); // changer Pelle pour le résultat de recherche
    return { items:items, itemRecherche:itemRecherche};
}

// pour aller chercher les données dans le formulaire de recheche du component <Recherche />
export const actions = {
    recherche: async ({ cookies, request}) => {
        const data = await request.formData();
        console.log("resultat recheche " + data.get("recherche")) 
    }
      
}
