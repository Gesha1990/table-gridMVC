import {save, EventEmitter} from './helpers'

class Model extends EventEmitter {
	constructor(users = []) {
		super();
		this.users = users;
	}
	
	sortUsers(filter) {
		console.log(this.users)
		switch(filter) {
			case 'name':
			const filteredUsersByName = this.users.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
			return filteredUsersByName;
			case 'userName':  
			const filteredUsersByUserName = this.users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
			return filteredUsersByUserName;
			case 'email': 
			const filteredUsersByEmail = this.users.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0))
			return filteredUsersByEmail;
			case 'website': 
			const filteredUsersByWebsite = this.users.sort((a,b) => (a.website > b.website) ? 1 : ((b.website > a.website) ? -1 : 0))
			return filteredUsersByWebsite;
			default:
			 return this.users
		  }
		
	}
	 compare( a, b ) {
		if ( a.last_nom < b.last_nom ){
		  return -1;
		}
		if ( a.last_nom > b.last_nom ){
		  return 1;
		}
		return 0;
	  }
	  
	  takeUserData(id){
		return this.users.filter(user=>user.id === +id)[0]
	}
}

export default Model