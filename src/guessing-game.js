class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minValue = min;
      this.maxValue = max;
    }

    guess() {
      return this.Middle = Math.round((this.minValue + this.maxValue) / 2);
    }

    lower() {
      this.maxValue = this.Middle;
    }

    greater() {
      this.minValue = this.Middle;
    }
}

module.exports = GuessingGame;