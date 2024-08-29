import { redirect } from '@sveltejs/kit';
import { findOne } from '../../../../lib/db/controllers/users.controller';

export const load = async ({ cookies }) => {
    const session = cookies.get('session');
    
    if (!session) {
//redirige vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }
    const user = await findOne({ userAuthToken : session });

//empecher l'accès si l'utilisateur n'est pas admininstrateur
    const roleAuth = [1];

// pour s'assurer qu'un user supprimé n'a pas accès à l'application
    if (user.statut_user === 'supprime') {
        throw redirect(303, '/login?error=account_deleted');
    }

if (!roleAuth.includes(user.role_id)) {
    throw redirect(303, '/accesRefuse');
}

    return {
        user
    };
};