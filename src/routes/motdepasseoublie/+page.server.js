import { findOne, updatePassword } from "../../lib/db/controllers/users.controller";
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        try {
            const data = await request.formData();
            const email = data.get('email');

            // Rechercher l'utilisateur par email
            const user = await findOne({ email });

            if (!user) {
                return fail(404, { error: 'Utilisateur non trouvé.' });
            }

            // Générer un nouveau mot de passe aléatoire
            const newPassword = Math.random().toString(36).slice(-8);

            // Hacher le nouveau mot de passe
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Mettre à jour le mot de passe de l'utilisateur dans la base de données
            await updatePassword(user.id, hashedPassword);

            // Configurer Nodemailer pour envoyer un email
            const transporter = nodemailer.createTransport({
                service: 'gmail', // ou tout autre service email
                auth: {
                    user: 'votre.email@gmail.com', // votre adresse email
                    pass: 'votre.mot.de.passe' // votre mot de passe email
                }
            });

            // Envoyer l'email avec le nouveau mot de passe
            const mailOptions = {
                from: 'votre.email@gmail.com',
                to: email,
                subject: 'Votre nouveau mot de passe',
                text: `Votre nouveau mot de passe est : ${newPassword}`
            };

            await transporter.sendMail(mailOptions);

            // Rediriger vers la page de connexion après succès
            throw redirect(302, '/login');
        } catch (error) {
            console.error('Erreur lors de la réinitialisation du mot de passe :', error);
            return fail(500, { error: 'Une erreur est survenue lors de la réinitialisation du mot de passe.' });
        }
    }
};



/**import { findOne } from '$lib/db/controllers/users.controller'; // Assurez-vous que `findOne` peut rechercher un utilisateur par email ou nom d'utilisateur

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

*/