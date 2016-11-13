/* global describe, expect, it */
import { frameSum, isStrike, isSpare } from './frameHelper'

describe('frameHelper', () => {
  it('should calculate correct sum of a frame', () => {
    expect(frameSum([])).toEqual(0)
    expect(frameSum([1])).toEqual(1)
    expect(frameSum([1, 2])).toEqual(3)
  })

  it('should check if it is strike', () => {
    expect(isStrike([10])).toEqual(true)
    expect(isStrike([1, 2])).toEqual(false)
  })

  it('should check if it is spare', () => {
    expect(isSpare([5, 5])).toEqual(true)
    expect(isSpare([1, 9])).toEqual(true)
    expect(isStrike([1, 2])).toEqual(false)
  })
})
