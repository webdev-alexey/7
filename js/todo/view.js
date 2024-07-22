export default class View {
  constructor() {}

  elements = {
    input: document.getElementById("newTask"),
    form: document.getElementById("form"),
    tasksList: document.getElementById("tasksList"),
  };

  renderTask(taskObject) {
    const taskHTML = `
        <li class="todo-item">
            <label class="todo-item-label">
                <input class="checkbox" type="checkbox" />
                <span>${taskObject.text}</span>
                <button class="btn btn-secondary btn-sm">Удалить</button>
            </label>
        </li>
    `;
    this.elements.tasksList.insertAdjacentHTML("beforeend", taskHTML);
  }
}
