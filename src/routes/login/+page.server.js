/** @type {import('./$types').PageServerLoad} */;
import { redirect } from "@sveltejs/kit";
import { authenticate } from "../../lib/db/controllers/users.controller";

export async function load({ cookies, locals }) {
    const session = cookies.get('session');
    console.log(locals)
    
    //si une session est active, rediriger vers la page de compte de l'utilisateur
    if (session) {
        throw redirect(303, `/users/${locals.user.id}`);
    }
    //si pas de session, afficher le formulaire de login
    return {
        user: locals.user,
    };
}

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        //try { le try/catch fait planter
            const auth = await authenticate(data.get("email"), data.get("password"));
                        //aller chercher les informations du formulaire de login et la session, puis créer le cookie 
                        //(stocker la session dans un cookie)
                        cookies.set('session', auth.userAuthToken, {
                            path: '/',
                            httpOnly: true,
                            sameSite: 'strict',
                            secure: process.env.NODE_ENV === 'production', 
                        //effacer la session après un mois
                            maxAge: 60 * 60 * 24 * 30,
                    });
            
                        //redirige au profil utilisateur
                        let profil = auth.id;
                        console.log("========================= " +profil)//ok retourne le id
                        throw redirect(303, `/users/${profil}`);
                }
            //catch (error) {
           // console.log("Erreur lors de la connexion : ", error);
            //Gérer l'erreur ici, par exemple en renvoyant une erreur au formulaire IMPORTANT DE LE FAIRE!
            // Ça redirige à la page d'erreur si le user n'existe pas au lieu d'informer l'utilisateur de ce qui se passe, Isael :)
            
        }
    //}
//};


