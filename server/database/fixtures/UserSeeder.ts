import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(),
        hashed_password: this.faker.internet.password(),
        address: this.faker.location.streetAddress(),
        postal_code: this.faker.location.zipCode("#####"),
        city: this.faker.location.city(),
        tel: this.faker.phone.number({ style: "international" }),
        role_id: this.faker.number.int({ min: 1, max: 3 }),
        is_active: this.faker.datatype.boolean(),
        is_role: this.faker.datatype.boolean(),
        updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      };

      this.insert(fakeUser);
    }
  }
}

export default UserSeeder;
