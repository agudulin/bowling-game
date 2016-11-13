/* global beforeEach, describe, expect, it */
import Game from './'

describe('Bowling game', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  it('should have score: 0 at the beginning', () => {
    expect(game.score()).toEqual(0)
  })

  it('should not roll less than 0 pins', () => {
    expect(() => game.roll(-1)).toThrow(new Error('Can\'t roll less than 0'))
  })

  it('should not roll more than 10 pins', () => {
    expect(() => game.roll(11)).toThrow(new Error('Can\'t roll more than 10'))
  })
})
