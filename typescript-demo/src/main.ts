const todoForm = document.getElementById('todoForm') as HTMLFormElement;
const textInput = document.getElementById('textInput') as HTMLInputElement;
const todoList = document.getElementById('todoList') as HTMLUListElement;

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = textInput.value.trim();
    if(!value) return;
    const todoItem = document.createElement('li');
    todoItem.textContent = value
    todoList.appendChild(todoItem);
    textInput.value = '';
    textInput.focus();
});