
class Controller {
	constructor(view, model) {
		this.view = view;
		this.model = model;
		view.on('sortUsers', this.toggleSortUsers.bind(this));
		view.on('showModal', this.openModalWindow.bind(this));
		view.renderTable(model.users || undefined);
	}

	toggleSortUsers(filter) {
		const sortUsers = this.model.sortUsers(filter)
		this.view.renderTable(sortUsers);
	}
	openModalWindow(id){
		const userData = this.model.takeUserData(id)
		const modalWindow = document.querySelector('.modal-window');
		modalWindow.classList.toggle('active')
		this.view.renderModalWindow(userData);
	}
}

export default Controller;