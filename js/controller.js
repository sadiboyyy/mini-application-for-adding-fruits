function handleAddFruit(fruitText) {

  if (fruitText === '') return
  addFruit(fruitText)
  renderUlFruits(fruits)
  fruitText = localStorage.getItem('fruitText')
}

function handleRemoveFruit(fruitText) {
  if (fruitText !== '')
    removeFruit(fruitText)
  renderUlFruits(fruits)
  fruitText = localStorage.removeItem('fruitText')

}

function handleEditNote(newText, oldText) {
  if (newText === '') return
  editFruitText(newText, oldText)
  renderUlFruits(fruits)
}

function handleRemoveList() {

  fruits = localStorage.removeItem('fruits')
  cleanFruits(fruits)
  renderUlFruits(fruits)
}
function handlePage() {
  const fruits = localStorage.getItem('fruits')
  renderUlFruits(fruits)
}
// function handleRemoveFruits() {
//    const fruits = localStorage.removeItem('fruits')
//    renderTextareaFruits(fruits)
//    }

renderUlFruits(fruits)
handlePage()
