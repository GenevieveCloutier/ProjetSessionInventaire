

import { findAll, marquerNonDisponible } from "$lib/db/controllers/items.controller";
import { rechercher } from "$lib/db/controllers/items.controller";


export async function load({params, url}) {
        //pour aller chercher tous les items à afficher
        const items = await findAll();
        console.log(items);
        let resultat = url.searchParams.get("resultatRecherche");
        const itemRecherche = await rechercher(resultat);
        return { items:items, itemRecherche:itemRecherche}; 
};


