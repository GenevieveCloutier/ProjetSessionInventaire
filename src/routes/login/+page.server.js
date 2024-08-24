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

import { createUser } from '$lib/db/controllers/users.controller';

export const actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const nom = data.get('nom');
            const prenom = data.get('prenom');
            const email = data.get('email');
            const telephone = data.get('telephone');
            const password = data.get('password');
            const role = data.get('role');

            await createUser({ nom, prenom, email, telephone, password, role });

            return { success: true };
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
            return {
                success: false,
                error: 'Une erreur est survenue lors de la création de l\'utilisateur.'
            };
        }
    }
};