import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { List } from "./ContactList.styled";
import { selectVisibleContacts, selectIsLoading, selectError } from "redux/contacts.selector";
import { Loader } from "components/Loader";
import { ErrorMsg } from "components/ErrorMessage/ErrorMessage";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
        <List>
            {isLoading && <Loader />}
            {error && <ErrorMsg />}
            {contacts.map(contact => {
                return (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}/>   
                )
            })}
        </List>
    )
}