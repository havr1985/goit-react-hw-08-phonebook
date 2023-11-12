
import { FormContact } from "components/FormContact/FormContact"; 
import { ContactList } from "components/ContactList/ContactList"; 
import { SearchFilter } from "components/SearchFilter/SearchFilter"; 
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsSlice";  
import { Toaster } from 'react-hot-toast';
import { Box, Text } from "@chakra-ui/react";


export default function Contacts() {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
      <Box bg='green.100'h='100vh'>
        <Text as='h1'
        fontSize={40}
        fontWeight={900} textAlign='center'
        fontFamily='cursive'
        color='#e81c8c'
        mb={7}
        pt={7}>
          Add contact
        </Text>
        <FormContact />
        <Text as='h1'
        fontSize={40}
        fontWeight={900} textAlign='center'
        fontFamily='cursive'
        color='#e81c8c'
        mb={7}
        pt={7}>Contact List</Text>
        <SearchFilter />
        <ContactList />
        <Toaster
          position="top-right"
          reverseOrder={false}/>
      </Box>
    )

};