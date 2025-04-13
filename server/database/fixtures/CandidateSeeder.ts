import AbstractSeeder from "./AbstractSeeder";

class CandidateSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "candidate", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeCandidate = {
        user_id: this.faker.number.int({ min: 1, max: 10 }),
        cv: "jean-paul-tartonflon.pdf",
        photo:
          "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg",
        is_disabled: this.faker.datatype.boolean(),
      };

      this.insert(fakeCandidate);
    }
  }
}

export default CandidateSeeder;
