import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUserData } from "redux/auth.selector";
import { logOutThunk } from "redux/authSlice";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectAuthUserData);

    const onLogOut = () => {
        dispatch(logOutThunk());
    };

    return (
        <Box>
            <Text color='white' fontWeight='700'>Welcome, {user.name}</Text>
            <Button
                type="button"
                onClick={onLogOut}
                colorScheme='pink'
                _activeLink={{ bg: "white", color: '#e81c8c' }}
                marginLeft={4}>Log Out
            </Button>
        </Box>
        
    )
} 