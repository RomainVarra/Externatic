import AbstractSeeder from "./AbstractSeeder";

class RoleSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "role", truncate: true });
  }

  async run() {
    const roles = ["Company", "Candidat", "Admin"];
    for (let i = 0; i < 3; i++) {
      const fakeRole = {
        label: [roles[i]],
      };

      this.insert(fakeRole);
    }
  }
}

export default RoleSeeder;
