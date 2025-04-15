let fruits = ['banane', 'apple', 'pineapple']

function addFruit(fruit) {
  fruits.push(fruit)
}

function removeFruit(fruit) {
  if (!fruits.includes(fruit)) return
  const idx = fruits.indexOf(fruit)
  fruits.splice(idx, 1)
}

function cleanFruits() {
  fruits = []
}

function editFruitText(newText, oldText) {
  if (!fruits.includes(oldText)) return
  const idx = fruits.indexOf(oldText)
  fruits.splice(idx, 1, newText)
}

addFruit('mango')
fruits
removeFruit('mango')
fruits
cleanFruits(fruits)
fruits
editFruitText('gg')
fruits
