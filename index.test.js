import { describe, test, expect } from 'vitest'
import { getWelcomeMessage, getFileNames } from './index.js'

describe('Testing welcome message', () => {
  test('Check message is "Welcome"', () => {
    //Arrange
    const expected = 'Welcome'
    //Act
    const result = getWelcomeMessage()
    //Assert
    expect(expected).toBe(result)
  })
  test('Check message is a string', () => {
    //Arrange
    const expected = 'string'
    //Act
    const result = typeof getWelcomeMessage()
    //Assert
    expect(expected).toBe(result)
  })
})

//test that the file names are correct

describe('Display the different ASCII art', () => {
  test('List of display names is correct', async () => {
    //Arrange
    const expected = [
      'charizard',
      'gryphon',
      'kea',
      'kiwi',
      'manaia',
      'nikau',
      'pohutukawa',
      'sonic',
    ]
    //Act
    const result = await getFileNames()
    //Assert
    expect(result).toStrictEqual(expected)
  })
})

// I need to test to see if i can accessTheFiles  function
