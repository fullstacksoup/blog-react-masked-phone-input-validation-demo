import React from 'react';
import Button from '@mui/material/Button';
import InputPhoneField from './InputPhoneField';
import { Box } from '@mui/system';

export default class ParentFormClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Phone: '',
            IsValidPhone: false,
        };
        this.handlePhoneNumberChange.bind(this);
    }

    handlePhoneNumberChange = (value, isValid) => {
        this.setState({ Phone: value, IsValidPhone: isValid });
    }

    handleSubmitForm = (event) => {        
        alert(JSON.stringify(this.state, null, 2));
    }

    render() {
        return (
            <Box sx={{ marginTop: '40px' }}>                
                <InputPhoneField placeholder=""                    
                    helperText="(Required)"
                    label="Phone"
                    fieldName="Phone"
                    handleChange={this.handlePhoneNumberChange}
                    value={this.state.Phone} />
                    {this.state.IsValidPhone === true ?
                        <Button variant="contained" color="primary" onClick={this.handleSubmitForm}>
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
}
