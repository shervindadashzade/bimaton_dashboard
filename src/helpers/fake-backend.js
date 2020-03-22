let users = [];
let usersStorage = JSON.parse(localStorage.getItem('users'));
users = usersStorage!=null ? usersStorage : [];

// configure fake backend for test
export function configureFakeBackend() {
    // for other cases use
    let realFetch = window.fetch;

    window.fetch = function (url, options) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // register user 
                if (url.endsWith('/users/register') && options.method === 'POST') {
                    let newUser = JSON.parse(options.body);
                    //check if user already exist
                    let duplicateUser = users.filter(user => { return user.username === newUser.username }).length;
                    if (duplicateUser) {
                        reject('this username is already taken');
                        return;
                    }
                    //save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(newUser));

                    // respond 200 ok
                    resolve({ ok: true});
                    return;
                }

                // send vertifiy sms and return code
                if(url.endsWith('/users/sendSMS') && options.method === 'POST'){
                    let data = JSON.parse(options.body);
                    let checkExist = users.filter(user => { user.phone === data.phone }).length;
                    if(checkExist){
                        reject('this number already exists')
                    }else{
                        resolve({ok:true , text: Promise.resolve('sms sended')})
                    }
                    return ;
                }

                if(url.endsWith('/users/checkCode') && options.method === 'POST'){
                    let data = JSON.parse(options.body);
                    if(data.code === "4979"){
                        resolve({ok:true , text: Promise.resolve('correct code')});
                    }else{
                        reject('invalid code')
                    }
                    return;
                }
                //pass other cases
                realFetch(url,options).then(response=>resolve(response));
            }, 500);
        });
    }
}