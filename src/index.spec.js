/* global beforeEach, describe, expect, it */
import Game from './'

describe('Bowling game', () => {
  let game

  const roll = (game) => ({ times, pins }) => {
    for (let i = 0; i < times; i++) {
      game.roll(pins)
    }
  }

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

  it('should roll once', () => {
    game.roll(5)

    expect(game.score()).toEqual(5)
  })

  it('should roll twice', () => {
    game.roll(5)
    game.roll(3)

    expect(game.score()).toEqual(8)
  })

  it('checks that spare has no bonus', () => {
    game.roll(5)
    game.roll(5)
    game.roll(0)

    expect(game.score()).toEqual(10)
  })

  it('checks that spare has a bonus', () => {
    game.roll(5)
    game.roll(5)
    game.roll(7)

    expect(game.score()).toEqual(24)
  })

  it('checks the strike', () => {
    game.roll(10)
    game.roll(5)
    game.roll(7)

    expect(game.score()).toEqual(22 + 12)
  })

  it('checks all spares', () => {
    roll(game)({ times: 20, pins: 5 })

    console.log(game.frames)
    expect(game.score()).toEqual(150)
  })

  it('checks all strikes', () => {
    roll(game)({ times: 10, pins: 10 })

    console.log(game.frames)
    expect(game.score()).toEqual(300)
  })
})
