import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://6544f8f15a0b4b04436d5c46.mockapi.io/api',
});

export const requestContacts = async () => {
    const { data } = await contactsInstance.get('/contacts');
    return data;
};

export const requestAddContacts = async (newContact) => {
    const { data } = await contactsInstance.post('/contacts', newContact);
    return data;
};

export const requestDeleteContacts = async (contactId) => {
    const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
    return data;
};
