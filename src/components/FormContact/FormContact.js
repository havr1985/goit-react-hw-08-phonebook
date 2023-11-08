import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormStyle, InputField, Error, AddBtn } from './FormContact.styled';
import { addContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts.selector';
import toast from 'react-hot-toast';

const contactsSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Please, enter only letter')
        .min(3, 'Too short!')
        .required('This field is required!'),
    number: Yup.string()
        .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, 'Format: 066-123-45-67')
        .required('This field is required!'),
})

export const FormContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    return (
        
            <Formik
                initialValues={{
                    name: '',
                    number:'',
        
            }}
            validationSchema={contactsSchema}
            onSubmit={(values, actions) => {
                const check = contacts.some(({ name }) => name === values.name);
            if (check) {
                toast.error(`${values.name} is already in contacts`);
                return;
            };
                const newContact = {
                    name: values.name,
                    phone: values.number
                    }
                    dispatch(addContacts(newContact));
                    actions.resetForm();
            }}>
            
                <FormStyle>
                    <label>
                    <InputField name="name" type="text" placeholder="Enter name" />
                    <Error name='name' component='div'/>
                    </label>

                    <label>
                    <InputField name="number" type="tel" placeholder="Enter number format: 066-123-45-67" />
                    <Error name='number' component='div'/>
                    </label>

                    <AddBtn type="submit">Add contact</AddBtn>
                </FormStyle>
            </Formik>
        
    )
}
