'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let guides = await queryInterface.bulkInsert("Guides", [
      { name: "Food Trip" },
      { name: "Shopping Spree" },
    ]);

    let reviews = await queryInterface.bulkInsert("Reviews", [
      { title: "This trip hit all the spots!", guideId: 1 },
      { title: "I shopped till I dropped", guideId: 2 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Zac Benckendorf" },
      { name: "Jensen Mink" },
    ]);

    let userGuides = await queryInterface.bulkInsert("UserGuides", [
      { userId: 1, guideId: 1 },
      { userId: 2, guideId: 2 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
