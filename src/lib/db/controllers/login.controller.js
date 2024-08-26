import { Login } from '../models/login.model.js';
import bcrypt from 'bcrypt';

export async function authenticate(username, password) {
    const user = await Login.findOne({ where: { username } });
    if (!user) throw 'Utilisateur non trouvé';
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw 'Mot de passe incorrect';
    return user;
}
