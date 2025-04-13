import AbstractSeeder from "./AbstractSeeder";

class CompanySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "company", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeCompany = {
        company_name: this.faker.company.name(),
        employee_number: this.faker.number.int({ min: 1, max: 10 }),
        user_id: this.faker.number.int({ min: 1, max: 10 }),
        website_link: this.faker.internet.url(),
        description: this.faker.lorem.text(),
        sector: this.faker.lorem.words(10),
      };

      this.insert(fakeCompany);
    }
  }
}

export default CompanySeeder;
