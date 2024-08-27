import { redirect } from '@sveltejs/kit';
import { findOne } from '../../lib/db/controllers/users.controller';

export const load = async ({ cookies }) => {
    const session = cookies.get('session');
    
    if (!session) {
        // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }
    const user = await findOne({ userAuthToken : session });

    if (user.role_id != 1) { 
        
        // Redirige si l'utilisateur n'est pas administrateur
        throw redirect(303, '/accesRefuse');
    }

    return {
        user
    };
};


