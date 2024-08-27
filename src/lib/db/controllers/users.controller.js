import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Op } from 'sequelize';


/**
 * Création d'un nouvel utilisateur
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_prenom
 * @param {Number} p_role_id
 * @param {String} p_password
 */
export async function newUser(p_nom, p_prenom,p_email,p_telephone,p_password,p_role_id,p_statut_user){
    Users.create({
        nom: p_nom,
        prenom: p_prenom,
        email: p_email,
        telephone: p_telephone,
        password: p_password,
        role_id: p_role_id,
        statut_user: p_statut_user 
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}


/**
 * Mise à jour du profil utilisateur
 *
 * @export
 * @param {Number} p_id
 * @param {String} p_nom
 * @param {String} p_prenom
 * @param {String} p_telephone
 * @param {String} p_email

 */

export async function updateUser(p_id, p_prenom, p_nom, p_telephone, p_email, p_role_id, p_statut_user){
     await Users.update(
        {
        prenom: p_prenom,
        nom: p_nom,
        telephone: p_telephone,
        email: p_email,
        role_id: p_role_id,
        statut_user: p_statut_user
    },
    {
        where: {
            id: p_id,
        }
    }
)
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
};
/**
 * Mise à jour du profil utilisateur
 *
 * @export
 * @param {Number} p_id
 * @param {String} p_statut_user


 */
//malgré le  nom, l'utilisateur n'est pas supprimé mais plutôt archivé comme étant supprimé pour ne pas compromettre l'intégrité des donnesé
//seuls les utilisateurs dont le statut n'est pas "supprimé" seront affichés dans la route /users
export async function deleteUser(p_id, p_statut_user){
    await Users.update(
       {
       statut_user: p_statut_user,
   },
   {
       where: {
           id: p_id,
       }
   }
)
   .then(resultat => {
       return resultat.dataValues;
   })
   .catch((error)=>{
       throw error;
   });
};
/**
 * Changement de mot de passe
 *
 * @export
 * @param {Number} p_id
 * @param {String} p_password
 */

export async function updatePassword(p_id, p_password){
    await Users.update(
       {
       password: p_password,
   },
   {
       where: {
           id: p_id,
       },
       individualHooks: true,
   }
)
   .then(resultat => {
       return resultat.dataValues;
   })
   .catch((error)=>{
       throw error;
   });
}


/**
 * Va chercher tous les utilisateurs dont le statut n'est pas égal à supprime 
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Users.findAll({
        include: [
            { model: Roles, as: "role" }
        ],
        where: {
            statut_user:{
                [Op.not]: "supprime",
            }
            
        },
    }).then(resultat => {
        if(resultat.length === 0){
            console.log("Pas de résultat à afficher")
        }
        return resultat.map(user => ({
            ...user.dataValues,
            role: user.role ? user.role.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find User
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Users.findOne({ where: p_where, include: [{
        model: Roles,
        as: 'role'
    }]})
    .then(res => {
        return {
            ...res.dataValues,
            role: res.role ? res.role.dataValues : null
        };
    }).catch((error) => {
        throw error;
    });
}

/**
 * Authentification
 *
 * @export
 * @async
 * @param {String} email
 * @param {String} p_password
 * @returns {Object}
 */
//export async function authenticate(p_email, p_password){
    export async function authenticate(p_email, p_password){

    //Trouver l'utilisateur :
   // const user = await findOne({ email: p_email });
       const user = await findOne({ email: p_email, });
        console.log 
    if(!user) throw "Utilisateur non trouvé";

    const goodPassword = await bcrypt.compare(p_password, user.password);

    if(!goodPassword) throw "Mot de passe invalide";

    return user;
};

