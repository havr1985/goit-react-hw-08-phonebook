import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authSlice';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from '@chakra-ui/react';


export default function Register() {
  const dispatch = useDispatch()  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be minimum 3 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(7, 'Must be minimum 7 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, actions) => {
        dispatch(registerThunk(values));
        actions.resetForm()
    },
  });
  
  return (
    <Flex bg="green.100" align="center" justify="center" h="100vh">
      <Box bgGradient='linear(to-r, green.200, pink.500)' p={6} rounded="md" w={400} >
        <Text as='h2' textAlign='center' fontSize={30} fontWeight={700} mb={4} color='white'>SIGN UP</Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={10} align="flex-start">
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            
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

            <Button type="submit" colorScheme='pink' color='white' width='full' >SIGN UP</Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};