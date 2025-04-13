import AbstractSeeder from "./AbstractSeeder";

class TagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "tag", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeTag = {
        name: this.faker.lorem.words(5),
      };

      this.insert(fakeTag);
    }
  }
}

export default TagSeeder;
