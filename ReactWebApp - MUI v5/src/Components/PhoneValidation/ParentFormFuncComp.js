import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputPhoneField from './InputPhoneField';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function ParentFormFuncComp()
 {
    const [phone, setPhone] = useState('')
    const [isValidPhone, setIsValidPhone] = useState(false)
    
    const handlePhoneNumberChange = (value, isValid) => {
        setPhone(value)
        setIsValidPhone(isValid)        
    }

    const handleFormSubmit = () => {        
        alert(phone);
    }
          
    
    return (
        <Box sx={{ marginTop: '40px' }}>

            
            <InputPhoneField placeholder=""                    
                helperText="(Required)"
                label="Phone"
                fieldName="Phone"
                handleChange={handlePhoneNumberChange}
                value={phone} />
                {isValidPhone === true ?
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    Submit
                </Button>
                :
                <Button variant="contained" color="primary" disabled>
                    Submit
                </Button>
            }


        </Box>
    );

}
