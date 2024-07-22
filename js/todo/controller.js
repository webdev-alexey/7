import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

model.addTask("Заверстать стартовый шаблон");
model.addTask("Написать скрипт");
model.addTask("Записать урок1");
console.log(model);
model.saveToLocalStorage();

view.renderTask(model.tasks[2]);
