import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

model.addTask("Заверстать стартовый шаблон");
model.addTask("Написать скрипт");
model.addTask("Записать урок");
console.log(model);

view.renderTask(model.tasks[2]);
