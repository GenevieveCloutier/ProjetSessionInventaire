
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
        console.log("resultat recheche " + data.get("recherche")) //fonctionne, affiche le résultat dans le terminal. 
        //comment le retourner ici à la ligne 7 à la place de "pelle"?
        //const resulatRecherche = data.get("recherche");
        //return resulatRecherche // marche pas
    }
}
