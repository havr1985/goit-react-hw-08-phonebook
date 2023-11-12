
import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {

    return (
        <Flex justifyContent='end' gap='4'>      
            <Button as={NavLink}
                to='/register'
                colorScheme='pink'
                _activeLink={{ bg: "white", color: '#e81c8c' }}>
                Sign Up
            </Button>
            <Button as={NavLink}
                to='/login' colorScheme='pink'
                _activeLink={{ bg: "white", color: '#e81c8c' }}>
                Sign In
            </Button>      
        </Flex>
    )
}