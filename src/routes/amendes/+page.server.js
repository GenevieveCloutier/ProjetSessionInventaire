import { findAll } from "$lib/db/controllers/amendes.controller";


export async function load() {
    const amendes = await findAll();
    return { amendes:amendes };
}
