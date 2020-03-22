import config from '../config.js';
import { authHeader } from "../helpers"

export const userService{
	sendSMS,
	checkCode,
	
};

function sendSMS(phone){
	const requestOptions = {
		method : "POST",
		headers : {"Content-Type" : "application/json" },
		body : JSON.stringify({ phone })
	};

	return fetch('${config.apiUrl}/users/sendSMS',requestOptions).then(handleResponse);
}

function checkCode(phone,code){
	const requestOptinos{
		method : "POST",
		headers : {"Content-Type" : "application/json"},
		body : JSON.stringify({phone,code});
	};

	return fetch('${config.apiUrl}/users/checkCode',requestOptions).then(handleResponse);
}

function handleResponse(response){
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok){
			//TODO:: check if unauthrozied reload to login page

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;	
	});
}


