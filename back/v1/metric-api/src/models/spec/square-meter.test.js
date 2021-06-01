// tests/product.test.js

const mongoose = require("mongoose");

const dbHandler = require("../../../kernel/db-handler");
const squareMeterModel = require("../square-meter");
const squareMeterService = require("../../services/square-meter");

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe("SquareMeter", () => {
  it("should be created", async () => {
    const entity = { _id: 1, value: 10 };

    expect(async () => await squareMeterService.create(entity)).not.toThrow();
  });

  it("should be readable", async () => {
    const entity = { _id: 2, value: 10 };
    await squareMeterService.create(entity);

    const document = await squareMeterService.read(2);

    expect(document.id).toBe("2");
    expect(document.value).toBe(10);
    expect(true).toBe(true);
  });

  //TODO: add more tests
});
