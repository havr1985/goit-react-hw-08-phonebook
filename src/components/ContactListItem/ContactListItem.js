import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/contactsSlice";
import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const ContactListItem = ({ contact: { name, number, id } }) => {
    const dispatch = useDispatch();
    return (
        <Card as='li' w='100%' bg='#0db59f'>
            <CardBody display='flex' justifyContent='space-between' alignItems='center'>
                <Text color='white' fontWeight='700' fontSize={30}>{name}:</Text>
                <Box display='flex' gap={7}>
                    <Text fontWeight='700' fontSize={30}>{number}</Text>
                    <Button type="button" onClick={() => dispatch(deleteContacts(id))} colorScheme='pink'>
                        <DeleteIcon/>
                    </Button>
                </Box>
            </CardBody>
        </Card>
    )
}