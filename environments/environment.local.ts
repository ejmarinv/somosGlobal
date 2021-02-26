import { Environment } from "./environments";

export const AUTHE_ENVIRONMENT: Environment = {

  url: 'http://the-internet.herokuapp.com/login',
  apiUrl: '',
  users: {
    user1: { username: 'tomsmith', password: 'SuperSecretPassword!' },
    user2: { username: 'wrongUSer', password: 'wrongPassword' }
  }
}

export const ADDREMOVE_ENVIRONMENT: Environment = {

  url: 'http://the-internet.herokuapp.com/add_remove_elements/',
  apiUrl: '',
  users: {
    user1: { username: 'FAKEUSER', password: 'FAKEPASSWORD' },
    user2: { username: 'FAKEUSER', password: 'FAKEPASSWORD' }
  }
}