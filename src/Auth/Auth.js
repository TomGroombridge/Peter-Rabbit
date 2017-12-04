import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'paddington.eu.auth0.com',
    clientID: 'U7TZy4Jgg3_uzhAv4r5eg20gN0alo-dg',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://paddington.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}