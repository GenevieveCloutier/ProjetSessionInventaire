import { findAll } from "../../lib/db/controllers/locations.controller";

export async function load(){
    const locations = await findAll();
    return { locations:locations };
}