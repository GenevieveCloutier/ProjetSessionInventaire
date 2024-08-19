Je fait des test pour cree un nouveau mot de passe et l envoyer par courriel
/*
import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail(to, newPassword) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilise un service de messagerie, par exemple Gmail
    auth: {
      user: 'tonemail@gmail.com', // Remplace par ton adresse e-mail
      pass: 'tonmotdepasse', // Remplace par ton mot de passe (ou mieux, utilise une variable d'environnement)
    },
  });

  const mailOptions = {
    from: 'tonemail@gmail.com',
    to: to,
    subject: 'Réinitialisation de votre mot de passe',
    text: `Votre nouveau mot de passe est : ${newPassword}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
}