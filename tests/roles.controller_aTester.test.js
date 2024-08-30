const { newRole } = require("../src/lib/db/controllers/roles.controller");

test("créer un nouveau rôle", async () => {
    const role = await newRole("Admin", "Peut tout gérer");
    expect(role.nom).toBe("Admin");
    expect(role.description).toBe("Peut tout gérer");
});