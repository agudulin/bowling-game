class Game {
  constructor () {
    this.total = 0
  }

  score () {
    return this.total
  }

  roll (pins) {
    if (pins < 0) {
      throw new Error('Can\'t roll less than 0')
    } else if (pins > 10) {
      throw new Error('Can\'t roll more than 10')
    }

    this.total += pins
  }
}

export default Game
