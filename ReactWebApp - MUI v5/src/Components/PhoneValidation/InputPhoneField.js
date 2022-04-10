import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputPhoneField(props) {
  
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [isDirtyField, setIsDirtyField] = React.useState(false)
  const [isValid, setIsValid] = React.useState(false)
  
  const handleChange = event => {
    const val = event.target.value;
    
    let count = 0;
    
    for (let i = 0; i < val.length; i++) 
      if (val.charAt(i) in [0,1,2,3,4,5,6,7,8,9]) 
        count++
    
    var isValid = (count === 10) ? true : false;    
    setPhoneNumber(val);
    setIsValid(isValid);
    props.handleChange(val, isValid);
  }

  return (
    <>
     <FormControl variant="standard">
        <InputLabel htmlFor="text-mask-input"></InputLabel>
        <OutlinedInput                  
          helperText={props.helperText}          
          error={isDirtyField && !isValid}
          onChange={handleChange}
          onBlur={() => setIsDirtyField(true)}
          name="phone"
          label=""
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