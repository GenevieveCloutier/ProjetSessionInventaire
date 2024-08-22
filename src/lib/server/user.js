import bcrypt from 'bcrypt';
import db from './db.js';

export async function updatePassword(username, newPassword) {
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  db.run('UPDATE users SET password = ? WHERE username = ?', [hashedPassword, username], function(err) {
    if (err) {
      return console.error('Erreur lors de la mise à jour du mot de passe:', err.message);
    }
    console.log(`Mot de passe mis à jour pour l'utilisateur ${username}`);
  });
}