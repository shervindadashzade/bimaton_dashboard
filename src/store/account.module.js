import { userService } from "../services"

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status : { loggedIn : true, user } } : { status :{loggedIn : false, user : null } };

const actions = {
	sendSMS(phone){
		userService.sendSMS(phone).then(text =>{
			console.log(text);
		}).catch(text =>{
			console.log(text);
		})
	}
}

export const account = {
	namespaced : true,
	state,
	actions
}