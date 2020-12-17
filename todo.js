const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

// 할 일을 지우는 함수
function deleteToDo(event) {
    // 클릭한 삭제 버튼
    const btn = event.target;
    // 클릭한 삭제 버튼의 부모노드 (삭제한 할 일이 어떤 것인지 알기 위함)
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function(toDo) {
        // li.id는 String이기 때문에 숫자로 변환
        return toDo.id !== parseInt(li.id);
    });

    toDoList.removeChild(li);
    toDos = cleanToDos;
    saveToDos();
}

// toDos를 가져와서 로컬에 저장하는 함수
function saveToDos() {
    // JSON.stringfy는 Object를 String으로 바꿈
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();