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
