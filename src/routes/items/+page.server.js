
import { findAll } from "$lib/db/controllers/items.controller";

export async function load({params, url}) {
    const items = await findAll();
    return { items:items};
}
