import { redirect } from "@sveltejs/kit";
import { authenticate } from "../../lib/db/controllers/users.controller";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        try {
            const auth = await authenticate(data.get("email"), data.get("password"));
            
            console.log("Connexion réussie : ", auth);
            // Ajoutez ici la logique de redirection ou de traitement après connexion
        } catch (error) {
            console.log("Erreur lors de la connexion : ", error);
            // Gérer l'erreur ici, par exemple en renvoyant une erreur au formulaire
        }
    }
};

/** import { authenticate } from "../../lib/db/controllers/users.controller";

export const actions = {

    login: async({cookies, request}) => {
        const data = await request.formData();
       //console.log("Data : ", data)
        try{
            const auth = await authenticate(data.get("email"), data.get("password"));

            console.log("Connexion réussie : ", auth);
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
        }
    }
}
*/
/**import { authenticate } from "$lib/db/controllers/users.controller";

export const actions = {

    login: async({cookies, request}) => {
        const data = await request.formData();
        console.log("Data : ", data)
        try{
            const auth = await authenticate(data.get("nom"), data.get("prenom"), data.get("password"));

            console.log("Connexion réussie : ", auth);
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
        }
    }
}

*/

