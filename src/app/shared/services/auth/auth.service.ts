import { Injectable } from '@angular/core';

import { ISession } from '../../interfaces/session.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private session: ISession | undefined;

  constructor() { }

  setSession(session: ISession){
    if(session){
      const { nome,login, token, dataInicio, dataFim } = session;

      this.session = session;

      localStorage.setItem('nome',JSON.stringify(nome));
      localStorage.setItem('login',JSON.stringify(login));
      localStorage.setItem('token',JSON.stringify(token));
      localStorage.setItem('dataInicio',JSON.stringify(dataInicio));
      localStorage.setItem('dataFim',JSON.stringify(dataFim));
    }
  }

  getSession():ISession | undefined {
    if(this.session){
        return this.session;
    }

    if(!this.session){
      const nome = localStorage.getItem('nome')||"";
      const token = localStorage.getItem('token');
      const login = localStorage.getItem('login');
      const dataInicio = localStorage.getItem('dataInicio');
      const dataFim = localStorage.getItem('dataFim');

      if(token && login && dataInicio && dataFim){
        const storedSession: ISession = {
          nome: JSON.parse(nome),
          login: JSON.parse(login),
          token: JSON.parse(token),
          dataInicio: JSON.parse(dataInicio),
          dataFim: JSON.parse(dataFim)
        }

        return storedSession;
      }
    }

    return this.session;
  }

  getToken(){
    return this.getSession()!.token;
  }

  getLogin(){
    return this.getSession()!.login;
  }

  isLogged(): boolean {
    const session = this.getSession();

    if(!session){
        return false;
    }

    const tokenExpiration = new Date(session.dataFim);
    const now = new Date();

    if(tokenExpiration < now){
        return false;
    }

    return true;
  }

  doLogout() {
    delete this.session;
    localStorage.clear();
  }
}
