import { findAll } from "$lib/db/controllers/locations.controller";
import { findOne } from "$lib/db/controllers/users.controller";
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load({ params, cookies }) {
//vérifier la session
    const session = cookies.get('session');

    if (!session) {
// rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        throw redirect(303, '/login');
    }

    const user = await findOne({ userAuthToken: session });

//empecher l'accès si l'utilisateur n'est pas admininstrateur ou un chef d'équipe
const roleAuth = [1, 3];

if (!roleAuth.includes(user.role_id)) {
    throw redirect(303, '/accesRefuse');
}

const locations = await findAll();

// pour afficher une page erreur au lieu de planter le serveur si il n'y pas de données
    if (!locations) {
    error(404, {
    message: 'Page non trouvée'
    })
}
    return { 
        user: user, // utilisateur de la session
        locations:locations  //toutes les locations
    };
}

