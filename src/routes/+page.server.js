// import { redirect } from '@sveltejs/kit';

// export const load = async ({ cookies }) => {
//     const session = cookies.get('session');
//     if (!session) {
//         // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
//         throw redirect(303, '/login');
//     }

//     // Vous pouvez renvoyer des données supplémentaires ici si nécessaire
//     return {
//         user: { id: session } // Supposons que `session` contient l'ID utilisateur
//     };
// };

//probablement inutile, je pense que ça empĉhait l'accès à la page "/"