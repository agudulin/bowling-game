export const frameSum = (frame) => frame.reduce((prev, cur) => prev + cur, 0)
export const isStrike = (frame) => frame[0] === 10
export const isSpare = (frame) => frame[0] + frame[1] === 10
