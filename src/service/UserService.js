import { api } from './api';
import { HeadersDefaultNoAuth } from './HeadersDefault';

import Utils from '../service/Utils';

const UserService = {
    register: async (data) => {
        await api.post('/usuarios', data, HeadersDefaultNoAuth).then(response =>{
            UserService.setDataInLocalStorage(response.data);
            Utils.redirect_to('dashboard');

        }).catch(error => console.error(error));
    },

    doLogin: async(data) => {
        await api.post('/login', data, HeadersDefaultNoAuth).then(response =>{
            UserService.setDataInLocalStorage(response.data);
            Utils.redirect_to('dashboard');
            console.log('teste')

        })
        .catch(({ response }) => {
            let { codigo, status, error } = response.data;

            if(codigo === "999" && status === 409){
                alert(error);
                location.reload();
            }
        });
    },

    doLogout: () => {
        localStorage.clear();

        Utils.redirect_to('/');
    },

    setDataInLocalStorage: (data) => {
        let { token, usuario: { login }} = data;
        
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('login', JSON.stringify(login));
    }
}

export default UserService;