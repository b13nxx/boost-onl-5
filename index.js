// your playground

import fs from 'fs/promises'

;(async () => {
  try {
    const promiseOne = fs.readFile('file1.txt', 'utf8') // 2s
    const promiseTwo = fs.readFile('file2.txt', 'utf8') // 5s
  
    const contentOne = await promiseOne
    const contentTwo = await promiseTwo
  
    const contentThree = await fs.readFile('file3.txt', 'utf8')
  
    console.log('contentOne', contentOne)
    console.log('contentTwo', contentTwo)
    console.log('contentThree', contentThree)
  } catch (e) {
    console.log('error', e)
  }

  console.log('program running')
})()
