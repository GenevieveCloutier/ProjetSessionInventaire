

import { findAllItemsWithoutImage, markItemAsAvailable } from '$lib/db/controllers/items.controller';


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

            if (id) {
                return await markItemAsAvailable(id);
            } else {
                return { success: false, error: 'Invalid request' };
            }
        } catch (error) {
            console.error('Error updating item status:', error);
            return { success: false, error: error.message };
        }
    }
};
