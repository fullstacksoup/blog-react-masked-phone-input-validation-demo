import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput      
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default function InputPhoneField(props) {
  
  const [phoneNumber, setPhoneNumber] = React.useState(0)
  

  const handleChange = event => {
    const val = event.target.value;
    
    let count = 0;
    
    for (let i = 0; i < val.length; i++) 
      if (val.charAt(i) in [0,1,2,3,4,5,6,7,8,9]) 
          count++
    
    var isValid = (count === 10) ? true : false;
    console.log(val);
    setPhoneNumber(val);
    props.handleChange(val, isValid);
  }


  return (
    <>
      <FormControl  variant="outlined" size={'small'} >
        <InputLabel htmlFor="phone" >Phone</InputLabel>        
        <OutlinedInput                                     
          helperText={props.helperText}          
          onChange={(e) => handleChange(e)}
          name="phone"
          label="Phone"
          size={'small'}          
          value={phoneNumber}
          style={{marginTop: -1}}
          InputLabelProps={{
            shrink: true,
          }}
          inputComponent={TextMaskCustom}
        />
        <FormHelperText id="my-helper-text">{props.helperText}</FormHelperText>
      </FormControl>
    </>
  );
}