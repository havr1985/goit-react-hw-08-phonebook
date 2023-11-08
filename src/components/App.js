import { FormContact } from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContactList";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Container, MainTitle, Title } from "./App.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsSlice";  
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      <Title>Contact List</Title>
      <SearchFilter />
      <ContactList />
      <Toaster
      position="top-right"
      reverseOrder={false}/>
    </Container>
  )
};

