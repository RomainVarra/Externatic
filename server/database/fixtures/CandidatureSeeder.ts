import AbstractSeeder from "./AbstractSeeder";

class CandidatureSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "candidature", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeCandidature = {
        statut: this.faker.helpers.arrayElement(["Accepté", "Rejeté"]),
        is_refused: this.faker.datatype.boolean(),
        candidate_id: this.faker.number.int({ min: 1, max: 10 }),
        offer_id: this.faker.number.int({ min: 1, max: 10 }),
      };

      this.insert(fakeCandidature);
    }
  }
}

export default CandidatureSeeder;
