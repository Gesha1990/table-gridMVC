import { createElement, EventEmitter } from "./helpers";

class View extends EventEmitter {
  constructor() {
    super();
    this.filterUsersByName = document.querySelector(".name");
    this.filterUsersByUserName = document.querySelector(".userName");
    this.filterUsersByUserEmail = document.querySelector(".email");
    this.filterUsersByUserEmail = document.querySelector(".email");
    this.filterUsersByUserWebsite = document.querySelector(".website");
    this.table = document.querySelector("table");
    this.table.addEventListener("click", this.showModalWindow.bind(this));
    this.close = document.querySelector(".close");
    this.close.addEventListener("click", this.closeModalWindow.bind(this));
    this.filterUsersByName.addEventListener("click", this.sortUsers.bind(this));
    this.filterUsersByUserName.addEventListener(
      "click",
      this.sortUsers.bind(this)
    );
    this.filterUsersByUserEmail.addEventListener(
      "click",
      this.sortUsers.bind(this)
    );
    this.filterUsersByUserWebsite.addEventListener(
      "click",
      this.sortUsers.bind(this)
    );
  }

  showModalWindow(e) {
    if (e.target.dataset.id) {
      this.trigger("showModal", e.target.dataset.id);
    }
  }
  closeModalWindow(e) {
    const modalWindow = document.querySelector(".modal-window");
    const modalBody = document.querySelector(".modal-window__content-text");
    modalWindow.classList.toggle("active");
    modalBody.innerHTML = "";
  }
  sortUsers(e) {
    this.trigger("sortUsers", e.target.className);
  }

  renderTable(users) {
    const tableBody = document.getElementById("tableData");
    let dataHtml = "";

    for (let user of users) {
      dataHtml += `<tr><td data-id=${user.id}>${user.name}</td><td data-id=${user.id}>${user.username}</td><td data-id=${user.id}>${user.email}</td><td data-id=${user.id}>${user.website}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
  }
  renderModalWindow(user) {
    const tableBody = document.querySelector(".modal-window__content-text");
    const name = createElement("div", "userName", `name: ${user.name}`);
    const company = createElement(
      "div",
      "company",
      `company: ${user.company.name}`
    );
    const phone = createElement("div", "phone", `phone: ${user.phone}`);
    const address = createElement(
      "div",
      "address",
	  `address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`
	  
    );
    tableBody.innerHTML += name.outerHTML + company.outerHTML + phone.outerHTML + address.outerHTML;
  }
}
export default View;
