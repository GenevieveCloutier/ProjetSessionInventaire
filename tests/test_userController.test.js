//ca ces la version gpt qui fonctionne pas ces sequelize
import {
    newUser,
    updateUser,
    deleteUser,
    updatePassword,
    findAll,
    findOne,
    authenticate
} from "../src/lib/db/controllers/users.controller.js";

jest.mock('../src/lib/db/models/users.model.js');
jest.mock('../src/lib/db/models/roles.model.js');
jest.mock('bcrypt');

describe('User Controller Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('newUser - should create a new user', async () => {
        const mockUser = {
            dataValues: {
                nom: "Bob",
                prenom: "fortier",
                email: "bob@gmail.com",
                telephone: "8191231234",
                password: "123456789",
                role_id: 1,
                statut_user: "actif"
            }
        };
        Users.create.mockResolvedValue(mockUser);

        const result = await newUser("Bob", "fortier", "bob@gmail.com", "8191231234", "123456789", 1, "actif");

        expect(Users.create).toHaveBeenCalledWith({
            nom: "Bob",
            prenom: "fortier",
            email: "bob@gmail.com",
            telephone: "8191231234",
            password: "123456789",
            role_id: 1,
            statut_user: "actif"
        });
        expect(result).toEqual(mockUser.dataValues);
    });

    test('updateUser - should update user details', async () => {
        Users.update.mockResolvedValue([1]);

        const result = await updateUser(1, "Bob2", "fortier", "8191231234", "bob@gmail.com", 1, "actif");

        expect(Users.update).toHaveBeenCalledWith(
            {
                prenom: "Bob2",
                nom: "fortier",
                telephone: "8191231234",
                email: "bob@gmail.com",
                role_id: 1,
                statut_user: "actif"
            },
            {
                where: { id: 1 },
            }
        );
    });

    test('deleteUser - should archive user', async () => {
        Users.update.mockResolvedValue([1]);

        const result = await deleteUser(1, "inactif");

        expect(Users.update).toHaveBeenCalledWith(
            { statut_user: "inactif" },
            { where: { id: 1 } }
        );
    });

    test('updatePassword - should update the password', async () => {
        Users.update.mockResolvedValue([1]);

        const result = await updatePassword(1, "123456789");

        expect(Users.update).toHaveBeenCalledWith(
            { password: "123456789" },
            { where: { id: 1 }, individualHooks: true }
        );
    });

    test('findAll - should return all active users', async () => {
        const mockUsers = [
            {
                dataValues: { nom: "Bob", prenom: "fortier", email: "bob@gmail.com", telephone: "8191231234", password: "123456789", role_id: 1, statut_user: "actif" },
                role: { dataValues: { name: "Admin" } }
            }
        ];
        Users.findAll.mockResolvedValue(mockUsers);

        const result = await findAll();

        expect(Users.findAll).toHaveBeenCalledWith({
            include: [{ model: Roles, as: "role" }],
            where: { statut_user: { [Op.not]: "supprime" } },
        });
        expect(result).toEqual([
            {
                nom: "Bob",
                prenom: "fortier",
                email: "bob@gmail.com",
                telephone: "8191231234",
                password: "123456789",
                role_id: 1,
                statut_user: "actif",
                role: { name: "Admin" }
            }
        ]);
    });

    test('findOne - should return a single user', async () => {
        const mockUser = {
            dataValues: { nom: "Bob", prenom: "fortier", email: "bob@gmail.com", telephone: "8191231234", password: "123456789", role_id: 1, statut_user: "actif" },
            role: { dataValues: { name: "Admin" } }
        };
        Users.findOne.mockResolvedValue(mockUser);

        const result = await findOne({ email: "bob@gmail.com" });

        expect(Users.findOne).toHaveBeenCalledWith({
            where: { email: "bob@gmail.com" },
            include: [{ model: Roles, as: "role" }]
        });
        expect(result).toEqual({
            nom: "Bob",
            prenom: "fortier",
            email: "bob@gmail.com",
            telephone: "8191231234",
            password: "123456789",
            role_id: 1,
            statut_user: "actif",
            role: { name: "Admin" }
        });
    });

    test('authenticate - should authenticate a user', async () => {
        const mockUser = {
            dataValues: { id: 1, email: "bob@gmail.com", password: "hashedPassword" },
        };
        bcrypt.compare.mockResolvedValue(true);
        Users.findOne.mockResolvedValue(mockUser);

        const result = await authenticate("bob@gmail.com", "password");

        expect(findOne).toHaveBeenCalledWith({ email: "bob@gmail.com" });
        expect(bcrypt.compare).toHaveBeenCalledWith("password", "hashedPassword");
        expect(result).toEqual(mockUser.dataValues);
    });

    test('authenticate - should throw error for incorrect password', async () => {
        const mockUser = {
            dataValues: { id: 1, email: "bob@gmail.com", password: "hashedPassword" },
        };
        bcrypt.compare.mockResolvedValue(false);
        Users.findOne.mockResolvedValue(mockUser);

        await expect(authenticate("bob@gmail.com", "wrongpassword")).rejects.toThrow("Mot de passe invalide");
    });
});
/**
const {newUser} = require("../src/lib/db/controllers/users.controller.js");

    test('additionne un utilisateur', () => {
        expect(newUser("Bob", "fortier", "bob@gmail.com", "8191231234","123456789",1,"actif")).toBe({nom:"Bob", prenom:"fortier", email:"bob@gmail.com", telephone:"8191231234", password:"123456789", role_id:1 ,statut_user:"actif"});
});

const {updateUser} = require("../src/lib/db/controllers/user.controller.js");

    test('modifier un utilisateur' , () => {
        expect(updateUser("Bob2", "fortier", "bob@gmail.com", "8191231234","123456789",1,"actif")).toBe({nom:"Bob", prenom:"fortier", email:"bob@gmail.com", telephone:"8191231234", password:"123456789", role_id:1 ,statut_user:"actif"});
});

const {deleteUser} = require("../src/lib/db/controllers/user.controller.js");
    test('supprimer un utilisateur' , () => {
        expect(deleteUser("Bob3", "fortier", "bob@gmail.com", "8191231234","123456789",1,"inactif")).toBe({nom:"Bob", prenom:"fortier", email:"bob@gmail.com", telephone:"8191231234", password:"123456789", role_id:1 ,statut_user:"inactif"});
    });

const {updatePassword} = require("../src/lib/db/controllers/user.controller.js");
    test('mettre le password a jour' , () => {
        expect(updatePassword("123456789",)).toBe({ password:"123456789"});
    });
    //je sais pas encore comment faire
const {findAll} = require("../src/lib/db/controllers/user.controller.js");
    test('supprimer un utilisateur' , () => {
        expect(findAll("Bob3", "fortier", "bob@gmail.com", "8191231234","123456789",1,"actif")).toBe({nom:"Bob", prenom:"fortier", email:"bob@gmail.com", telephone:"8191231234", password:"123456789", role_id:1 ,statut_user:"actif"});
    });
    //je sais pas encore comment faire
const {findOne} = require("../src/lib/db/controllers/user.controller.js");
    test('supprimer un utilisateur' , () => {
        expect(findOne("Bob3", "fortier", "bob@gmail.com", "8191231234","123456789",1,"actif")).toBe({nom:"Bob", prenom:"fortier", email:"bob@gmail.com", telephone:"8191231234", password:"123456789", role_id:1 ,statut_user:"actif"});
    });
    
const {authenticate} = require("../src/lib/db/controllers/user.controller.js");
    test('supprimer un utilisateur' , () => {
        expect(authenticate("bob@gmail.com", "8191231234")).toEqual({email:"bob@gmail.com", password:"123456789"});
    });
    */