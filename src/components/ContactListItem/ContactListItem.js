import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/contactsSlice";
import { ListItem, InfoBox, ContactName, ContactNumber, DelBtn } from "./ContactListItem.styled";

export const ContactListItem = ({ contact: { name, number, id } }) => {
    const dispatch = useDispatch();
    return (
        <ListItem>
            <InfoBox>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{number}</ContactNumber>
            </InfoBox>
            <DelBtn type="button" onClick={() => dispatch(deleteContacts(id))}>Delete</DelBtn>
        </ListItem>
    )
}