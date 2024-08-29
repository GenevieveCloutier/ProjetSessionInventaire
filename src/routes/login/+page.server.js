/** @type {import('./$types').PageServerLoad} */;
import { redirect } from "@sveltejs/kit";
import { authenticate } from "../../lib/db/controllers/users.controller";


export async function load({ cookies, locals, url}) {
    const session = cookies.get('session');
    const error = url.searchParams.get('error');
    
    //si une session est active, rediriger vers la page de compte de l'utilisateur
    if (session) {
        throw redirect(303, `/users/${locals.user.id}`);
    }
    //si pas de session, afficher le formulaire de login
    return {
        user: locals.user, 
        error
    }
} 

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
            const auth = await authenticate(data.get("email"), data.get("password"));

            //empêcher un utilisateur "supprimé" de se connecter
            if( auth.statut_user === "supprime" ){
                throw redirect(303, `/login?error=${'compte_supprime'}`)
            }
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
                    throw redirect(303, `/users/${profil}`);    
                }   
        }


