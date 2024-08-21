
import { findAll } from "$lib/db/controllers/items.controller";

export async function load() {
    const items = await findAll();
    return { items:items };
}