import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ParentFormClassComp from './Components/PhoneValidation/ParentFormClassComp';
import ParentFormFuncComp from './Components/PhoneValidation/ParentFormFuncComp';
import FormikParentFormFuncComp from './Components/FormikPhoneValidation/FormikParentFormFuncComp';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

class App extends Component {  
  render() {    
    return (      
      <>       
       <Container maxWidth="lg" component="div">
          <Paper  elevation={3} padding={5} sx={{padding: '20px', marginTop: '40px'}}>
            <Grid container spacing={2} sx={{marginTop: '10px'}}>        
              <Grid item xs={5} align="center">
                <Typography variant="h5">
                  Class Comp 
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5} align="center">
                <Typography variant="h5">
                  Functional Comp with Formik
                </Typography>          
              </Grid>
              <Grid item xs={1}></Grid>        
              <Grid item xs={5} align="center">
                <ParentFormClassComp />                  
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5} align="center">
                <FormikParentFormFuncComp/>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={5} align="center">
                <Typography variant="h5">
                    Functional Comp 
                  </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
             <Grid item xs={5} align="center">
              </Grid>
              <Grid item xs={1}></Grid>        
              <Grid item xs={5} align="center">
              <ParentFormFuncComp />                  
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5} align="center">
                
              </Grid>
              <Grid item xs={1}></Grid>

            </Grid>              
          </Paper>                        
        </Container>
      </>       
    );
  }
}

export default App;
