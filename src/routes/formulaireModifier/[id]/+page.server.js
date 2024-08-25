
import { findOne, updateItem } from '$lib/db/controllers/items.controller';

export async function load({ params }) {
    const id = params.id;

    try {
        const item = await findOne({ id });
        if (!item) {
            return { status: 404, error: 'Item not found' };
        }

        return { item };
    } catch (error) {
        console.error('Error fetching item:', error);
        return { status: 500, error: 'Failed to fetch item' };
    }
}


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const nom = formData.get('nom');
        const description = formData.get('description');
        const categorie = formData.get('categorie');
        const quantite = formData.get('quantite');
        const statut_item = formData.get('statut_item');

        try {
            const updatedItem = await updateItem(id, {
                nom,
                description,
                categorie,
                quantite,
                statut_item
            });

            if (!updatedItem) {
                return { success: false, error: 'Failed to update item' };
            }

            return { success: true, updatedItem };
        } catch (error) {
            console.error('Error updating item:', error);
            return { success: false, error: error.message };
        }
    }
};
