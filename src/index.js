const frameSum = (frame) => frame.reduce((prev, cur) => prev + cur, 0)

class Game {
  constructor () {
    this.frames = [[]]
  }

  lastFrame () {
    return this.frames[this.frames.length - 1]
  }

  scoreWithBouns (idx) {
    let total = frameSum(this.frames[idx])

    return total
  }

  score () {
    const self = this

    return this.frames.reduce((prev, curr, idx) => {
      return prev + self.scoreWithBouns(idx)
    }, 0)
  }

  roll (pins) {
    if (pins < 0) {
      throw new Error('Can\'t roll less than 0')
    } else if (pins > 10) {
      throw new Error('Can\'t roll more than 10')
    }

    this.lastFrame().push(pins)

    if (this.lastFrame().length === 2 || pins === 10) {
      this.frames.push([])
    }
  }
}

export default Game
