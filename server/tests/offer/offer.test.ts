import express from "express";
import supertest from "supertest";

const app = express();
const router = express.Router();

describe("GET:/api/offers", () => {
  test("GET /api/offers is working", async () => {
    const response = await supertest(app)
      .get("api/offers")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
