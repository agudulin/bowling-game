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
})
