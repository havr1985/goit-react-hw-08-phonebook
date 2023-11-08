import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/contactsSlice";
import { ListItem, InfoBox, ContactName, ContactNumber, DelBtn } from "./ContactListItem.styled";

export const ContactListItem = ({ contact: { name, phone, id } }) => {
    const dispatch = useDispatch();
    return (
        <ListItem>
            <InfoBox>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{phone}</ContactNumber>
            </InfoBox>
            <DelBtn type="button" onClick={() => dispatch(deleteContacts(id))}>Delete</DelBtn>
        </ListItem>
    )
}