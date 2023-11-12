import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";


export default function Home() {
    return (
        
        <Box bg='green.100' h='100vh' textAlign='center' paddingTop={150}>
            <Text
                as='h2'
                fontSize={50}
                fontWeight={900} textAlign='center'
                fontFamily='cursive'
                color='#e81c8c'
                marginBottom={20}>
                Create your phonebook
            </Text>
            <PhoneIcon boxSize={200} border='2px solid #e81c8c' borderRadius='50%' p={2} color='#e81c8c' />
        </Box>
            
    )
    
}