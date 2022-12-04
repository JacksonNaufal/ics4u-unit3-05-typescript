/**
 * The program is the classic
 * what magic square program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-11-26
 */

import promptSync from 'prompt-sync'

const MAGIC_NUM = 15
const POSSIBLE_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * program checks for duplicates
 *
 * @param {number[]} arrOne - array to be checked.
 * @returns {boolean} T/F for if sqrArray has duplicates or not.
 */
function hasDuplicates(arrOne: number[]): boolean {
  const sortedArrOne = arrOne.slice().sort(function (a, b) {
    return a - b
  })

  const results = []
  for (let count = 0; count < sortedArrOne.length - 1; count++) {
    if (sorteArrOne[count + 1] === sortedArrOne[count]) {
      results.push(sortedArrOne[count])
    }
  }
  return results.length !== 0
}

/**
 * Check if Square is Magic.
 *
 * @param {number[]} sqrArray - array to be checked.
 * @returns {boolean} T/F for if sqrArray is magic or not.
 */
function isMagic(arrOne: number[]): boolean {
  if (hasDuplicates(arrOne)) {
    return false
  } else {
    // define rows
    const row1 = arrOne[0] + arrOne[1] + arrOne[2]
    const row2 = arrOne[3] + arrOne[4] + arrOne[5]
    const row3 = arrOne[6] + arrOne[7] + arrOne[8]
    // define columns
    const col1 = sqrArray[0] + arrOne[3] + arrOne[6]
    const col2 = sqrArray[1] + arrOne[4] + arrOne[7]
    const col3 = sqrArray[2] + arrOne[5] + arrOne[8]
    // define diagonals
    const diag1 = sqrArray[0] + sqrArray[4] + sqrArray[8]
    const diag2 = sqrArray[2] + sqrArray[4] + sqrArray[6]

    return (
      row1 === row2 &&
      row2 === row3 &&
      row3 === col1 &&
      col1 === col2 &&
      col2 === col3 &&
      col3 === diag1 &&
      diag1 === diag2 &&
      diag2 === MAGIC_NUM
    )
  }
}

/**
 * Magic Square Printing Function.
 *
 * @param {number[]} arr - array to be printed.
 */
function printSquare(arr: number[]): void {
  console.log(
    `${arr[0]}` +
      ' ' +
      `${arr[1]}` +
      ' ' +
      `${arr[2]}` +
      '\n' +
      `${arr[3]}` +
      ' ' +
      `${arr[4]}` +
      ' ' +
      `${arr[5]}` +
      '\n' +
      `${arr[6]}` +
      ' ' +
      `${arr[7]}` +
      ' ' +
      `${arr[8]}` +
      '\n'
  )
}

/**
 * Generates Magic Squares.
 *
 * @param {number[]} pNum - possible numbers to be added to a magic square.
 * @param {number[]} sqrArray - array to be filled with pNum.
 * @param {number} index - current index of sqrArray to add pNum to.
 */
function generateSquare(
  pNum: number[],
  arrOne: number[],
  index: number
): void {
  // prints valid magic squares
  if (index === 9 && isMagic(arrOne)) {
    printSquare(sqrArray)
  } else {
    // run through each number for each index
    if (index !== 9) {
      for (let count = 0; count < 9; count++) {
        sqrArray[index] = pNum[count]
        generateSquare(pNum, sqrArray, index + 1)
      }
    }
  }
}

const arrOne: number[] = []

console.log('All Possible Magic Squares (3x3):\n')
generateSquare(POSSIBLE_NUM, sqrArray, 0)

console.log('Done.')
