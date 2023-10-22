import prompt from 'prompt'
import { readdir, readFile } from 'node:fs/promises'

// welcome message function
export function getWelcomeMessage() {
  return 'Welcome'
}

// get the file names and return them
export async function getFileNames() {
  const fileNames = await readdir(`./data`)
  const fileNamesWithoutTxt = fileNames.map((fileName) => {
    return fileName.slice(0, fileName.length - 4)
  })

  console.log(fileNamesWithoutTxt)
  return fileNamesWithoutTxt
}
// const fileNamesWithoutTxt = fileNames.map((filename) => {
//   return filename.slice(0, filename.length - 4)
// Get input function
async function getInput() {
  prompt.message = ''
  prompt.delimiter = ': '
  prompt.start()

  const choice = {
    name: 'choice',
    hidden: false,
    message: 'Please type the artwork you want to see',
  }
  return await prompt.get(choice)
}
// general things working and catching errors
async function main() {
  try {
    console.log(getWelcomeMessage())
    getFileNames()
    const result = await getInput()
    // console.log('You chose', result.choice)
    console.log(await readsChoice(result.choice))
  } catch (error) {
    console.log('No such file, please choose from the options above')
  }
}
main()

// Need to make the files accessable
// need funcition that sees the choice selects the file with that name,
// console.logs the image from the file
async function readsChoice(userChoice) {
  try {
    return readFile(`./data/${userChoice}.txt`, 'utf-8')
  } catch (e) {
    console.e(e.message)
  }
}
