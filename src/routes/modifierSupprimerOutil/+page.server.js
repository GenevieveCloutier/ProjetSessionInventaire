import { findAllItemsWithoutImage, removeItem, updateItem } from '$lib/db/controllers/items.controller';

export async function load() {
    try {
        const items = await findAllItemsWithoutImage();
        return { items };
    } catch (error) {
        console.error('Error fetching items:', error);
        return { items: [] };
    }
}


export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const action = formData.get('action');
            console.log("Action is " + action);
            if (action === 'remove' && id) {
                console.log("Entering remove condition");
                return await removeItem(id);
            } else if (action === 'update') {
                console.log("Entering update condition");
                const updatedItem = {
                    id: formData.get('id'),
                    nom: formData.get('nom'),
                    description: formData.get('description'),
                    categorie: formData.get('categorie'),
                    quantite: formData.get('quantite'),
                    statut_item: formData.get('statut_item')
                };
                console.log("Updated item is " + updatedItem);
                return await updateItem(updatedItem);
            } else {
                return { success: false, error: 'Invalid request' };
            }
        } catch (error) {
            console.error('Error handling request:', error);
            return { success: false, error: error.message };
        }
    }
};

