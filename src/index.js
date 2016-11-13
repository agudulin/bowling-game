const frameSum = (frame) => frame.reduce((prev, cur) => prev + cur, 0)
const isStrike = (frame) => frame[0] === 10
const isSpare = (frame) => frame[0] + frame[1] === 10

class Game {
  constructor () {
    this.frames = [[]]
  }

  lastFrame () {
    return this.frames[this.frames.length - 1]
  }

  scoreWithBouns (i) {
    const frame = this.frames[i]
    const nextFrame = this.frames[i + 1] || [0]
    const nextNextFrame = this.frames[i + 2] || [0]

    let total = frameSum(frame)

    if (isStrike(frame)) {
      total += nextFrame[0]

      if (nextFrame.length === 2) {
        total += nextFrame[1]
      } else {
        total += nextNextFrame[0]
      }
    } else if (isSpare(frame)) {
      total += nextFrame[0]
    }

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

    if (this.frames.length !== 10 && (this.lastFrame().length === 2 || pins === 10)) {
      this.frames.push([])
    }
  }
}

export default Game
