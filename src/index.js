import View from "./view";
import Model from "./model";
import Controller from "./controller";
import { load, save } from "./helpers";

function getDataRequest() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const model = new Model(response || []);
      const view = new View();
      const controller = new Controller(view, model);
    });
}
getDataRequest();
