//pour bloquer la route confirmation si on est pas connecté et retourner le id de user si connecté

import { redirect } from '@sveltejs/kit';
import { findOne } from '../../lib/db/controllers/users.controller';

export const load = async ({ cookies }) => {
    const session = cookies.get('session');
    if (!session) {
        // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }

    const user = await findOne({userAuthToken : session});

    if (!user) {
        throw redirect(303, '/login');
    }

    return {
        user 
    };
};