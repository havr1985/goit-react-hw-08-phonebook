import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts.selector';
import toast from 'react-hot-toast';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, VStack, Box } from '@chakra-ui/react';



export const FormContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const formik = useFormik({
        initialValues:{
            name: '',
             number:'',
        },
    validationSchema: Yup.object().shape({
     name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Please, enter only letter')
        .min(3, 'Too short!')
        .required('This field is required!'),
        number: Yup.string()
         .min(5, 'Too short!')
        .matches(/^[0-9\-+']+$/, 'Only numbers and -')
        .required('This field is required!'),
    }),
            onSubmit: (values, actions) => {
                const check = contacts.some(({ name }) => name === values.name);
            if (check) {
                toast.error(`${values.name} is already in contacts`);
                return;
            };
                const newContact = {
                    name: values.name,
                    number: values.number
                    }
                    dispatch(addContacts(newContact));
                    actions.resetForm();
            },
    })
    return (
        <Flex justify='center'>
            <Box p={6} rounded="md" bgGradient='linear(to-r, green.200, pink.500)'>
            <form onSubmit={formik.handleSubmit}>
                <VStack spacing={6}>
                    <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                        <FormLabel htmlFor='name'>Contact name</FormLabel>
                            <Input name="name"
                                id='name'
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder="Enter name"
                                width={500} />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.touched.number && formik.errors.number}>
                        <FormLabel htmlFor='number'>Contact number</FormLabel>
                            <Input name="number"
                                id='number'
                                type="tel"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number}
                                placeholder="Enter number" />
                            <FormErrorMessage>{formik.errors.number}</FormErrorMessage> 
                        
                    </FormControl> 
                    <Button type="submit" colorScheme='pink' color='white'>Add contact</Button>
                </VStack>
            </form>
             </Box>
        </Flex>
    )
}
