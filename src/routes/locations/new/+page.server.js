import { findOne } from "$lib/db/controllers/items.controller.js";
import { findOne } from "$lib/db/controllers/users.controller.js";
import { newLocation} from "$lib/db/controllers/location.controller.js";


export async function load({ params }){
    console.log(params)
    const item = await findOne({id:params.id});
    return { item:item }
}
export async function load({ params }){
    console.log(params)
    const user = await findOne({id:params.id});
    return { user:user }
}
// Je dois comprendre comment faire, je regarde ça plus tard
/*
export async function load({ params }) {
    console.log(params)
    const location = await 
}*/
