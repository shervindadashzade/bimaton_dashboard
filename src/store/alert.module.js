const state = {
	isLoading:false,
	message:'',
	type:'',
}

const actions = {
	success({ commit },{ message }){
		commit('success',message);
	},
	error({ commit },{message}){
		commit('error',message);
	},
	clear({commit}){
		commit('clear');
	},
	loading({ commit }){
		commit('loading');
	}
}

const mutations = {
	success(state,message){
		state.isLoading = false;
		state.message = message;
		state.type = 'success';
	},
	error(state,message){
		state.isLoading = false;
		state.message = message;
		state.type = 'error';
	},
	clear(state){
		state.isLoading = false;
		state.message = '';
		state.type = '';
	},
	loading(state){
		state.isLoading = true;
	}
}

export const alert = {
	namespaced:true,
	state,
	actions,
	mutations,
}