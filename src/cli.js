import meow from 'meow'
import Game from './'

const cli = meow(`
  Examples:
    $ bowling --random
`)

if (cli.flags.random) {
  const game = new Game()
  for (let i = 0; i < 20; i++) {
    game.roll(parseInt(Math.random() * 11, 10))
  }
  console.log('🎳  Frames:\n')
  console.log(game.frames)

  console.log('\n')
  console.log(`🏁  Score: ${game.score()}`)
  console.log('\n')
}
