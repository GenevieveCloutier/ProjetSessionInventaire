
// import { findAll } from "$lib/db/controllers/items.controller";

// export async function load({params}) {
//     const items = await findAll();
//     return { items:items};
// }

import { findAll } from "$lib/db/controllers/items.controller";
import { rechercher } from "$lib/db/controllers/items.controller";

export async function load({params, url}) {
    //pour aller chercher tous les items à afficher
    const items = await findAll();

    //pour aller chercher les items de la recherche
    let resultat = url.searchParams.get("resultatRecherche");
    const itemRecherche = await rechercher(resultat);
    return { items:items, itemRecherche:itemRecherche};  
};
