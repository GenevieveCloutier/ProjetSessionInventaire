
// import { newItem } from "$lib/db/controllers/items.controller";

// export const actions = {

//     new: async({ cookies, request })=>{
//         const data = await request.formData();
//         const image = data.get('image');
//         const buffer = Buffer.from(await image.arrayBuffer());
//         let res = await newItem(data.get("nom"), data.get("description"), data.get("categorie"), data.get("quantite"), buffer, data.get("statut_item"));

//         console.log(res);
//     }
// }