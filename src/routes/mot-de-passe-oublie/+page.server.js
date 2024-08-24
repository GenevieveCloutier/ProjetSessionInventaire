import { findOne } from '$lib/db/controllers/users.controller'; // Assurez-vous que `findOne` peut rechercher un utilisateur par email ou nom d'utilisateur

export const actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const email = data.get('email');
            const username = data.get('username');

            // Rechercher l'utilisateur par email ou nom d'utilisateur
            const user = await findOne({ email: email, nom: username });

            if (!user) {
                return {
                    success: false,
                    error: 'Utilisateur non trouvé.'
                };
            }

            // Ici, vous pouvez implémenter la logique pour envoyer un email avec des instructions de réinitialisation de mot de passe
            // Par exemple, générer un token et l'envoyer par email

            return {
                success: true,
                message: 'Un email avec les instructions de réinitialisation a été envoyé.'
            };
        } catch (error) {
            console.error('Erreur lors de la récupération du mot de passe :', error);
            return {
                success: false,
                error: 'Une erreur est survenue lors de la tentative de récupération du mot de passe.'
            };
        }
    }
};