/** @type {import('@sveltejs/kit').Handle} */
import { findOne } from './lib/db/controllers/users.controller'

    export const handle = async ({ event, resolve }) => {
        const session = event.cookies.get('session')
        if (!session){
            return await resolve(event)
        };

        const user = await findOne({userAuthToken : session}) ;
        if(user){
            event.locals.user = {
                id: user.id,
                name:user.nom,
                role:user.role.nom, 
                statut_user:user.statut_user
            } 
        }

    return await resolve(event)
}

// import { redirect } from '@sveltejs/kit';

// export async function handle({ event, resolve }) {
//     const session = event.cookies.get('session');
    
//     if (!session) {
//         // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
//         throw redirect(303, '/login');
//     }

//     const user = await findOne(session);

//     // Logique pour restreindre l'accès à certaines routes
//     if (event.url.pathname.startsWith('/items/new') && user.role !== 'admin') {
//         // Redirige vers /items si l'utilisateur n'est pas administrateur
//         throw redirect(303, '/items');
//     }

//     return resolve(event);
// }