
import { FormContact } from "components/FormContact/FormContact"; 
import { ContactList } from "components/ContactList/ContactList"; 
import { SearchFilter } from "components/SearchFilter/SearchFilter"; 
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsSlice";  
import { Toaster } from 'react-hot-toast';


export default function Contacts() {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
    <div>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contact List</h2>
      <SearchFilter />
      <ContactList />
      <Toaster
      position="top-right"
      reverseOrder={false}/>
    </div>
    )

};