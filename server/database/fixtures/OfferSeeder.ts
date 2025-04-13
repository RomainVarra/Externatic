import AbstractSeeder from "./AbstractSeeder";

class OfferSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "offer", truncate: true });
  }

  async run() {
    for (let i = 0; i < 30; i++) {
      const fakeOffer = {
        title: this.faker.helpers.arrayElement([
          "Développeur web",
          "Data Analyst",
          "Product Owner",
        ]),
        logo: "http://ruchetoulousaine.fr/laruche/wp-content/uploads/2017/12/offres-d-emploi.jpg",
        wage: this.faker.number.int({ min: 30000, max: 60000 }),
        description: this.faker.lorem.paragraph(),
        location: this.faker.helpers.arrayElement([
          "Paris",
          "Marseille",
          "Strasbourg",
          "Lyon",
        ]),
        is_teleworking: this.faker.datatype.boolean(),
        contract_type: this.faker.helpers.arrayElement([
          "CDI",
          "CDD",
          "Alternance",
        ]),
        company_id: this.faker.number.int({ min: 1, max: 10 }),
        is_opened_to_disabled: this.faker.datatype.boolean(),
        is_active: this.faker.datatype.boolean(),
      };

      this.insert(fakeOffer);
    }
  }
}

export default OfferSeeder;
