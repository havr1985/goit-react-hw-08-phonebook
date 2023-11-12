import { Box, Container, Flex, Text} from "@chakra-ui/react";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigations } from "components/Navigations/Navigations";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux"
import { selectAuthAuthenticated } from "redux/auth.selector"

export const AppBar = () => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return (
        <Box as="header" bg='#0db59f'>
            <Container maxW='1280px'>
                <Flex p={7}  justifyContent="space-between" alignItems='center'>
                    <Navigations />
                    <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                          bgClip='text'
                          fontSize='6xl'
                        fontWeight='extrabold'>Phonebook</Text>
                {authenticated ? <UserMenu /> : <AuthNav />}
                </Flex>
            </Container>
        </Box>
    )
};