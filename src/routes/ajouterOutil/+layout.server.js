import { redirect } from '@sveltejs/kit';
import { findOne } from '../../lib/db/controllers/users.controller';

export const load = async ({ cookies }) => {
    const session = cookies.get('session');
    
    if (!session) {
//redirige vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }
    const user = await findOne({ userAuthToken : session });

    if ((user.role_id != 1)) { 
        
//redirige si l'utilisateur n'est pas administrateur ou un chef d'équipe
        throw redirect(303, '/accesRefuse');
    };

    // pour s'assurer qu'un user supprimé n'a pas accès à l'application
    if (user.statut_user === 'supprime') {
        throw redirect(303, '/login?error=account_deleted');
    };

    return {
        user
    };
};