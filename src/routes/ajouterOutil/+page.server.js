import { newItem } from "$lib/db/controllers/items.controller"; 


export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();

            const nom = formData.get('nom');
            const description = formData.get('description');
            const categorie = formData.get('categorie');
            const quantite = formData.get('quantite');
            const image = formData.get('image'); 
            //const buffer = Buffer.from(await image.arrayBuffer());

            console.log("Form Data Received:", { nom, description, categorie, quantite });

            if (!nom || !description || !categorie || !quantite) {
                console.error("Missing required fields");
                return { success: false, error: "Missing required fields" };
            }
            const blob = new Blob([image], { type: image.type });
            const result = await newItem(nom, description, categorie, quantite, blob,'Disponible');

            console.log("New item added successfully:", result);


            return { success: true };

        } catch (error) {
            console.error("Error while creating a new item:", error);
            return { success: false, error: error.message };
        }

        
    }
};
