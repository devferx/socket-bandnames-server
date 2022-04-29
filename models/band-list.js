const Band = require("./band");

class BandList {
  constructor() {
    /**
     * bands
     * @type {Band[]}
     * @public
     */
    this.bands = [
      new Band("Metalica"),
      new Band("Nirvana"),
      new Band("The Beatles"),
      new Band("The Rolling Stones"),
      new Band("The Who"),
    ];
  }

  /**
   * @param {string} name
   */
  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  /**
   * @param {string} id
   */
  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  /**
   * @returns {Band} band list
   */
  getBands() {
    return this.bands;
  }

  /**
   * @param {string} id
   */
  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes += 1;
      }

      return band;
    });
  }

  /**
   * @param {string} id
   * @param {string} newName
   */
  changeName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }

      return band;
    });
  }
}

module.exports = BandList;
