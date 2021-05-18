import axios from "axios";
import { User } from "./swagger";

export default class AccountApi {
    static login(login: string, password: string) {
        return axios.post('auth/login', {password, login})
            .then(response => response.data);
    }

    static getUser(): Promise<User> {
        return axios.get('auth/me')
            .then(response => response.data);
    }

    static logout() {
        return axios.post('auth/logout');
    }
}