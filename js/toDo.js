const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector(".todo__input")
const toDoAddBtn = document.querySelector(".todo__submit")
const toDoList = document.querySelector("#todo-list")

let toDosArr = []
const TODOS_KEY = "todos"

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArr))
}

function removeToDo(event) {
  const listEl = event.target.parentElement
  listEl.remove()
  toDosArr = toDosArr.filter(item => item.id !== parseInt(listEl.id))
  saveToDo()
}

function addNewToDo(toDoValue) {
  const listEl = document.createElement("li")
  const content = document.createElement("span")
  listEl.appendChild(content)
  listEl.id = toDoValue.id
  content.innerText = toDoValue.text
  // 리스트 삭제버튼
  const removeBtn = document.createElement("button")
  removeBtn.className = "material-symbols-rounded"
  removeBtn.innerText = "delete"
  listEl.append(removeBtn)
  removeBtn.addEventListener("click", removeToDo)
  // 리스트 클릭시 밑줄 생성
  listEl.addEventListener("click", function() {
    content.classList.toggle("line-through")
  })
  // 리스트 최대 갯수 제한
  if (toDoList.childElementCount < 8) {
    toDoList.appendChild(listEl)
  } else {
    alert("일정은 최대 8개까지 등록 가능합니다.")
  }
}

function handleToDoList(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  addNewToDo(newToDoObj)
  // TODO 배열 생성
  toDosArr.push(newToDoObj)
  saveToDo()
}

toDoForm.addEventListener("submit", handleToDoList)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos)
  toDosArr = parseToDos
  parseToDos.forEach(addNewToDo);
}