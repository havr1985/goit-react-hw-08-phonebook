import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from '@chakra-ui/react';

export default function Register() {
  const dispatch = useDispatch()  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, actions) => {
        dispatch(loginThunk(values));
        actions.resetForm()  
    },
  });
  
  return (
    <Flex bg="green.100" align="center" justify="center" h="100vh">
      <Box bgGradient='linear(to-r, green.200, pink.500)' p={6} rounded="md" w={400} >
        <Text as='h2' textAlign='center' fontSize={30} fontWeight={700} mb={4} color='white'>SIGN IN</Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={10} align="flex-start">

             <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
            
            <FormControl isInvalid={formik.touched.password && formik.errors.password}>    
              <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl> 

            <Button type="submit" colorScheme='pink' color='white' width='full'>SIGN IN</Button>
            </VStack>
        </form>
      </Box>
     </Flex>
  );
};