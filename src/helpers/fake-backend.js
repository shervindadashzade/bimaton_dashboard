let users = JSON.parse(localStorage.getItem('users')) || [];
// configure fake backend for test
export function configureFakeBackend(){
    let realFetch = window.fetch;
    window.fetch = function(url,options){
        return new this.Promise((resolve,reject)=>{

        })
    }
}