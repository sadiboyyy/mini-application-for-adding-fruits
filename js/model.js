let fruits = []

function addFruit(fruit) {
  fruits.push(fruit)
}

function cleanFruits() {
  fruits = []
}

function removeFruit(fruit) {
  const idx = getIndexByFruitText(fruit)
  fruits.splice(idx, 1)
}

function editFruitText(newText, oldText) {
  const idx = getIndexByFruitText(oldText)
  fruits.splice(idx, 1, newText)
}

function getIndexByFruitText(fruitText) {
  if (!fruits.includes(fruitText)) return
  return fruits.indexOf(fruitText)
}

// addFruit('mango')
// fruits
// removeFruit('mango')
// fruits
// cleanFruits(fruits)
// fruits
// editFruitText('gg')
// fruits
