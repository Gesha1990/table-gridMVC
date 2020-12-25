function createElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
console.log(element)
  return element;
}

class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(type, listener) {
    this.event[type] = [listener];
  }

  trigger(type, args) {
    if (this.event[type]) {
      this.event[type].forEach((listener) => listener(args));
    }
  }
}

function save(todos) {
  const string = JSON.stringify(todos);
  localStorage.setItem("todos", string);
}

function load() {
  const string = localStorage.getItem("todos");
  const todos = JSON.parse(string);
  return todos;
}
export { EventEmitter, createElement};
