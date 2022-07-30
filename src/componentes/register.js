import {
    Typography,
    TextField,
    Button,
    Grid
  } from "@mui/material";
  
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { createPet  } from "../actions/pets"
  import { useNavigate  } from 'react-router-dom';
  import uuid from 'react-uuid'

  
  const  Register=()=> {
  
    const initialTutorialState = {
      id:uuid(),
      image:'',
      name:'',
      coord:'',
      description:''
    }
  
    let navigate = useNavigate();

    const [pet, setPet] = useState(initialTutorialState);
  
    const dispatch = useDispatch();
  
    const handleInputChange =event=>{
      const {name,value}=event.target;

      setPet({...pet,[name]:value});
    }
  
    const savePet = ()=>{
      dispatch(createPet(pet)).then(data=>{
        navigate('/');
        newPets();
      }).catch(e=>{
        console.log(" ver error",e);
      })
  
    };
  
    const newPets=()=>{
      setPet(initialTutorialState)
    }

    const handleCancel = ()=>{
          navigate('/');    
      };

   
  
    return (
      <div className="App">
  
        <Typography variant="h5">Register Pet</Typography>


        <Grid
            container
            //spacing={2}
            rowSpacing={2}
            columnSpacing={2}
            columns={1}
            >
        <Grid item xs={12} md={10} lg={12}>
                <form>
          <TextField
            style={{width:'25%',minWidth:300,   margin: "5px" }}
            type="text"
            label="Foto"
            variant="outlined"
            value={pet.image}
            onChange={handleInputChange}
            name="image"
          />
          <br />
          <TextField
            style={{width:'25%',minWidth:300, margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
            value={pet.name}
            onChange={handleInputChange}
            name="name"
          />
          <br />
          <TextField
            style={{width:'25%',minWidth:300, margin: "5px" }}
            type="text"
            label="Coordenada"
            variant="outlined"
            value={pet.coord}
            onChange={handleInputChange}
            name="coord"
          />
          <br />
          <TextField
            style={{width:'25%',minWidth:300,  margin: "5px" }}
            type="text"
            label="Description"
            variant="outlined"
            value={pet.description}
            onChange={handleInputChange}
            name="description"
          />
          <br />
          
          <Button variant="contained" color="primary" style={{margin: "5px" }} onClick={savePet}>
            Guardar
          </Button>
          <Button variant="contained" color="error" onClick={handleCancel}>
            Cancelar
          </Button>
        </form>
                </Grid>
            </Grid>
      </div>
    );
  }
  
  export default Register;