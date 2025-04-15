const elButtonAddFruit = document.querySelector('#addFruitButton')
const elButtonRemoveList = document.querySelector('#remove-List-Fruits')

elButtonAddFruit.onclick = onClickButtonAdd
elButtonRemoveList.onclick = onClickButtonRemoveList

function generateLiFruit(fruit) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elButton = document.createElement('button')
  elInput.value = fruit
  elInput.oldValue = fruit
  elButton.textContent = 'удалить'
  elButton.setAttribute('class', 'deleteButton')
  elLi.appendChild(elInput)
  elLi.appendChild(elButton)
  elButton.onclick = onClickButtonRemove
  elInput.onchange = onChangeInput
  return elLi
}

function renderUlFruits(fruits) {
  const elUl = document.querySelector('ul')
  elUl.innerHTML = ''
  for (const fruit of fruits) {
    const elUl = document.querySelector('ul')
    const elLi = generateLiFruit(fruit)
    elUl.appendChild(elLi)
  }
}

function onClickButtonRemove(e) {
  const elButton = e.target
  const elLi = elButton.closest('li')
  const elInput = elLi.querySelector('input')
  const text = elInput.value
  localStorage.setItem('text', text)
  handleRemoveFruit(text)
  console.log(text)
}

function onChangeInput(e) {
  handleEditNote(e.target.value, e.target.oldValue)
  e.target.oldValue = e.target.value
  const fruitsOldValue = e.target.oldValue
  localStorage.setItem('fruitsOldValue', fruitsOldValue)
}

function onClickButtonAdd() {
  const elInput = document.querySelector('#taskInput')
  handleAddFruit(elInput.value)
  elInput.value = ''
  const fruits = elInput.value
  elInput.focus()
  localStorage.setItem('fruits', fruits)
}

function onClickButtonRemoveList(e) {
  const removeFruitList = e.target.value
  handleRemoveList(fruits)
  localStorage.setItem('removeFruitList', removeFruitList)
  console.log(removeFruitList)
}
