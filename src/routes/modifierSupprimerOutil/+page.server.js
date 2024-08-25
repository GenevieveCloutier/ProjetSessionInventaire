import { findAllItemsWithoutImage, removeItem } from '$lib/db/controllers/items.controller';

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
            console.log("Item id is = " + id);

            if (action === 'remove' && id) {
                const result = await removeItem(id);
                return result; 
            } else {
                return { success: false, error: 'Invalid request' };
            }
        } catch (error) {
            console.error('Error removing item:', error);
            return { success: false, error: error.message };
        }
    }
};
