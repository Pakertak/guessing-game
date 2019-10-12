class GuessingGame {
    constructor() {
        this.min=0;
        this.max=0;
        this.center=0;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.center=Math.round((this.min+this.max)/2);
        return this.center;
    }

    lower() {
        this.max=this.center;
    }

    greater() {
        this.min=this.center;
    }
}

module.exports = GuessingGame;
