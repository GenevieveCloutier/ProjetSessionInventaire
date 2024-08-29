import { redirect } from '@sveltejs/kit';
import { findOne } from '../../lib/db/controllers/users.controller';

export const load = async ({ cookies }) => {
    const session = cookies.get('session');
    
    if (!session) {
//rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }
    const user = await findOne({ userAuthToken : session });

//empecher l'accès si l'utilisateur n'est pas admininstrateur ou un chef d'équipe
const roleAuth = [1, 3];

if (!roleAuth.includes(user.role_id)) {
    throw redirect(303, '/accesRefuse');
}

    return {
        user
    };
};