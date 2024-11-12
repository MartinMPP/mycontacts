/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import HttpClient from './utils/HttpClient';
class ContactsServices {
    constructor() {
        this.httpClient= new HttpClient(`http://localhost:3001`)
    }
    async listContacts(orderBy = 'asc') {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`)

    }
}

export default new ContactsServices();

