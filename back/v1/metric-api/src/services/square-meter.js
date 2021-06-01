const squareMeterModel = require("../models/square-meter");

/**
 * Stores a new product into the database. TODO: rework docs
 * @param {Object} sqmeter product object to create.
 * @throws {Error} If the product is not provided.
 */
module.exports.create = async (sqmeter) => {
  if (!sqmeter || !sqmeter.value) throw new Error("No value is defined!");

  await squareMeterModel.create(sqmeter);
};

module.exports.read = async (id) => {
  return await squareMeterModel.findById(id);
};
