/** @type {import('./$types').PageServerLoad} */;
import { authenticate } from "$lib/db/controllers/users.controller";
import { redirect } from '@sveltejs/kit';

export async function load({ cookies, locals }) {
    const session = cookies.get('session');
    
    //si une session est active, rediriger vers la page de compte de l'utilisateur
    if (session) {
        throw redirect(303, `/users/${locals.user.id}`);
    }
    //si pas de session, afficher le formulaire de login
    return {
        user: locals.user,
    };
}

//aller chercher les informations du formulaire de login et la session, puis créer le cookie (stocker la session dans un cookie)
export const actions = {
    login: async({ cookies, request }) => {
        const data = await request.formData();

            const auth = await authenticate(data.get("email"), data.get("password"));

            // stocker la session dans un cookie
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