import supertest from "supertest";
const request = supertest("http://localhost:8090");
import { expect } from "chai";

describe("PRODUCTS /api/pokedex/", () => {
  describe("Get product stock", () => {
    it("✅ Mocha get pokedex json success!", async () => {
      const res = await request.get("/api/pokedex/");
      expect(res.status).to.eql(200);
      expect(res.body).to.be.a("array");
    });
  });


});
