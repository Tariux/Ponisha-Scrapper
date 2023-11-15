const request = require('request');

const Functions = require("../../module/Functions");

class Ponisha {


    constructor(username, password) {


        this.username = username;
        this.password = password;

        this.loginUrl = 'https://ponisha.ir/login';

    }


    async login() {

        try {
            let options = {
              'method': 'POST',
              'url': this.loginUrl,
              'headers': {
                'accept': 'application/json, application/json;q=0.8, text/plain;q=0.5, */*;q=0.2',
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                "username": this.username,
                "password": this.password
              }),
              
            
            };
            request(options, function (error, response) {
              if (error) {

                console.log('Please check your internet connection');
                return false;

              };
              let response_data = Functions.isObject(response.body) 
              if (response_data && response_data.action === 'redirect') {
                
                console.log('Authentication was successful');
                return response_data.url;

              } else {

                console.log('The information sent is not valid');
                return false;

              }
            });
            

        } catch (error) {

            console.log('Problem communicating with the server');
            return false;
        }
    }
}

module.exports = Ponisha;
