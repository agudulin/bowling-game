import { frameSum, isStrike, isSpare } from './frameHelper'

class Game {
  constructor () {
    this.frames = [[]]
  }

  lastFrame () {
    return this.frames[this.frames.length - 1]
  }

  scoreWithBonus (i) {
    const frame = this.frames[i]
    const nextFrame = this.frames[i + 1] || [0]
    const nextNextFrame = this.frames[i + 2] || [0]

    let total = frameSum(frame)

    if (isStrike(frame)) {
      if (!isStrike(nextFrame)) {
        total += frameSum(nextFrame)
      } else if (nextFrame.length === 1) {
        total += nextFrame[0] + nextNextFrame[0]
      } else if (nextFrame.length > 1) {
        total += frameSum(nextFrame.slice(0, 2))
      }
    } else if (isSpare(frame)) {
      total += nextFrame[0]
    }

    return total
  }

  score () {
    return this.frames.reduce((prev, curr, idx) => (
      prev + this.scoreWithBonus(idx)
    ), 0)
  }

  roll (pins) {
    if (pins < 0) {
      throw new Error('Can\'t roll less than 0')
    } else if (pins > 10) {
      throw new Error('Can\'t roll more than 10')
    }

    this.lastFrame().push(pins)

    if (this.frames.length < 10 && (this.lastFrame().length === 2 || pins === 10)) {
      this.frames.push([])
    }
  }
}

export default Game
