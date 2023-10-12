import prompt from 'prompt'
import { readdir } from 'node:fs/promises'

export function getWelcomeMessage() {
  return 'Welcome'
}

export async function getFileNames() {
  const fileNames = await readdir('./data')
  const fileNamesWithoutTxt = fileNames.map((filename) => {
    return filename.slice(0, filename.length - 4)
  })
  console.log(fileNamesWithoutTxt)
  return fileNamesWithoutTxt
}

;(() => {
  try {
    console.log(getWelcomeMessage())
    getFileNames()
  } catch (error) {
    console.log(error)
  }
})()
