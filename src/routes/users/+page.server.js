import { redirect } from '@sveltejs/kit';
import { findOne, findAll } from '$lib/db/controllers/users.controller.js';

export async function load({ params, cookies }) {
// vérifier la session
    const session = cookies.get('session');

    if (!session) {
// rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }

    const user = await findOne({ userAuthToken: session });

// empecher l'accès si l'utilisateur n'est pas admininstrateur
const roleAuth = [1];

if (!roleAuth.includes(user.role_id)) {
    throw redirect(303, '/accesRefuse');
}

// aller chercher tous les utilisateurs de la BD
    const users = await findAll(); 

    return { 
        user: user, // utilisateur de la session
        users: users  //tous les utilisateurs
    };
}
