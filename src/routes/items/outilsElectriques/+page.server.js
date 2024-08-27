

import { findAll } from "$lib/db/controllers/items.controller";
import { rechercher } from "$lib/db/controllers/items.controller";

export async function load({params, url}) {
    const items = await findAll();
    let resultat = url.searchParams.get("resultatRecherche");
    const itemRecherche = await rechercher(resultat);
    return { items:items, itemRecherche:itemRecherche};  
};
