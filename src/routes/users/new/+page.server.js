
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";
import { redirect } from "@sveltejs/kit";


export async function load({locals}){

    if(locals.user){
        console.log("register - SANS locals")
    }
    if(locals.user){
        console.log("register - avec locals")
    }
}


export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newUser(data.get("nom"), data.get("prenom"), data.get("email"), data.get("role"), data.get("password"));

        console.log(res);
    }

}