import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputPhoneField from './FormikInputPhoneField';

export default function FormikParentFormFuncComp() {
    const [phone, setPhone] = useState('')
    const [isValidPhone, setIsValidPhone] = useState(false)
    
    const handlePhoneNumberChange = (value, isValid) => {
        console.log(value);
        console.log(isValid);
        setPhone(value)
        setIsValidPhone(isValid)        
    }

    const handleFormSubmit = () => {
        var data = {
          Phone: formik.values.phone,                     
        }
        alert(JSON.stringify(data, null, 2));
    }
      
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const validationSchema = yup.object({
    phone: yup
        .string('Enter your phone number')
        .matches(phoneRegExp, 'Phone number must have 10 digiits')
        .required('Phone is required'),  
    });

    const formik = useFormik({
        initialValues: {
          phone: '',
        },
        validationSchema: validationSchema ,    
        onSubmit: values => {     
            // Handle Submit
            handleFormSubmit()
        },
    });

    return (
        <>
        <Box sx={{ marginTop: '40px' }}>
            <InputPhoneField placeholder=""
                formik={formik}
                helperText="(Required)"
                label="Phone"
                fieldName="Phone"
                handleChange={handlePhoneNumberChange}
                value={phone} />

            <Button variant="contained" color="primary" onClick={formik.handleSubmit}>
                Submit
            </Button>

        </Box>
        </>
    );

}
