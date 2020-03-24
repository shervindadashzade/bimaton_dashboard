import { userService } from "../services"

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status : { loggedIn : true, user } } : { status :{loggedIn : false, user : null } };

const actions = {
	sendSMS({ dispatch },{ phone }){
		dispatch('alert/loading',null,{root:true});
		return userService.sendSMS(phone).then(()=>{
			return dispatch('alert/clear',null,{root:true});
		}).catch(()=>{
			return dispatch('alert/error',{message:'مشکل در ارسال اس ام اس'},{root:true});
		})
	},
	checkCode({ dispatch },{phone,code}){
		dispatch('alert/loading',null,{root:true});
		return userService.checkCode(phone,code).then( ()=>{
			return dispatch('alert/clear',null,{root:true});
		} ).catch( ()=>{
			return dispatch('alert/error',{message:'کد وارد شده صحیح نمی باشد'},{root:true})
		} );
	}
}


export const account = {
	namespaced : true,
	state,
	actions
}