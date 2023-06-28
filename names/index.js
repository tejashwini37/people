const name = require("../country/state/city/index");

const firstName = require("../utilities/utils/index");

const getPeopleInCity = (name) => {
  return firstName(name);
};
module.exports = getPeopleInCity;
