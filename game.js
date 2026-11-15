let attemptedWords = []
let selectedInput = 0
const maxLetters = 4
let startIndex = 0
const boxes = document.getElementsByClassName("input")
const wordGrid = document.getElementById("word-grid")
let alertParagraph = document.getElementById("alert")


function handleKey(value) {
  if (value === "BACKSPACE") {
      if (selectedInput > startIndex) {
        selectedInput--
        boxes[selectedInput].textContent = "" 
  }

  } else if (value === "CONFIRM") {
        checkCurrentWord()
  }

  else if (selectedInput < startIndex + maxLetters) {
    boxes[selectedInput].textContent = value
    selectedInput++
  }
}


function checkCurrentWord() {
  if (selectedInput < startIndex + maxLetters) return 
  let word = ""
  for (let i = startIndex; i < startIndex + maxLetters; i++) {
    word += boxes[i].textContent    
  }

  const previous = attemptedWords[attemptedWords.length - 1]
  const diff = maxLetters - compareWords(word, previous).length

  if (words.includes(word)) {
    if (diff !== 1) {
      alertParagraph.textContent = "You can change only one letter at a time!"
      return
    } 
    alertParagraph.textContent = ""
    attemptedWords.push(word)
    if (word === "GOBA") {
      compareWords(word, "GOBA").forEach(i => {
        boxes[startIndex + i].classList.add("input-match")
    })
    alertParagraph.textContent = "You win!"
    return
    } 
    compareWords(word, "GOBA").forEach(i => {
    boxes[startIndex + i].classList.add("input-match")
    })
      createRow()

    } else {
      alertParagraph.textContent = "Word not in list!"
    }
  }



function compareWords(word1, word2) {
  let matchingIndexes = []
  for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) {
        matchingIndexes.push(i)
      }
    }
    return matchingIndexes  
}




function createRow() {
  const newRow = document.createElement("div")
  newRow.setAttribute("id", "word-row")
  for (let i = 0; i < maxLetters; i++) {
    const newBox = document.createElement("div")
    newBox.setAttribute("id", i)
    newBox.setAttribute("class", "input")
    newRow.appendChild(newBox)
  }
    wordGrid.appendChild(newRow)
    startIndex += maxLetters
    selectedInput = startIndex
}

function startGame() {
  let startingWord = words[Math.floor(Math.random() * (words.length))]
  attemptedWords.push(startingWord)
  const newRow = document.createElement("div")
  newRow.setAttribute("id", "word-row")
  for (let i = 0; i < maxLetters; i++) {
    const newBox = document.createElement("div")
    newBox.setAttribute("id", i)
    newBox.setAttribute("class", "input")
    newBox.textContent = startingWord.charAt(i)
    newRow.appendChild(newBox)
  }
    wordGrid.prepend(newRow)
    compareWords(startingWord, "GOBA").forEach(i => {
    boxes[startIndex + i].classList.add("input-match")
    })
    startIndex += maxLetters
    selectedInput = startIndex
}

startGame()




