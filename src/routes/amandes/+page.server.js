import { findAll } from "../../lib/db/controllers/amandes.controller";

export async function load() {
    const amandes = await findAll();
    return { amandes:amandes };
}
