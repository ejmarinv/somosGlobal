import { AUTHE_ENVIRONMENT } from "./environment.local";

  export interface User {
    username: string;
    password: string;
  }

  export interface Environment {
    url: string;
    apiUrl: string;
    currentUser?: User,
    users: {
      user1: User,
      user2: User,
    }  
  }
  
  export function currentEnvironment() {
    const env = `${process.env.NODE_ENV}`.trim();
  
    let environment: Environment;
    switch (env) {
      default: environment = AUTHE_ENVIRONMENT; break;
    }
  
    return environment;
  }
  