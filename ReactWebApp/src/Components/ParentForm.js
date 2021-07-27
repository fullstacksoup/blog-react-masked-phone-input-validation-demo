import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputPhoneField from './InputPhoneField';

export default class OfferSupportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Phone: '',
            IsValidPhone: false,
        };           
        this.handlePhoneNumberChange.bind(this);
    }

    handlePhoneNumberChange = (value, isValid) => {      
        
        console.log(value);
        console.log(isValid);

        this.setState({Phone: value, IsValidPhone: isValid});              
    }

    handleSubmitForm = (event) => {        
        console.log('handleSubmitForm  ', event);
    }

    render() {
        return (                        
            <>            
                <Grid container spacing={1} style={{marginTop: '20px'}}>        
                
                    <Grid sm={4} align="left"></Grid>
                    
                    <Grid sm={1} className="fieldLayoutMT15">                    
                        <InputPhoneField placeholder="" 
                                            helperText="(Required)" 
                                            label="Phone" 
                                            fieldName="Phone" 
                                            handleChange={this.handlePhoneNumberChange} 
                                            value={this.state.Phone} />
                    </Grid>

                    <Grid sm={1} align="right" className="fieldLayoutT25B25R5">                    
                        {this.state.IsValidPhone === true ?
                            <Button variant="contained"  color="primary" onClick={this.handleSubmitForm}>                             
                                Submit
                            </Button>
                            :
                            <Button variant="contained"  color="primary" disabled>                             
                                Submit
                            </Button>
                        }                                                             
                    </Grid>
                            
                </Grid>                                            
            </>
        );
    }
}
