import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useLocation  } from 'react-router-dom';
import icon from '../assets/google-maps.png'
import { useNavigate  } from 'react-router-dom';
import {
    Button,
    Grid
  } from "@mui/material";

const MapsPage = () => {

    let navigate = useNavigate();
    const {state} = useLocation();
    const [coord, setCoord] = useState({
        lat: -12.4040422,
        lng: -57.5740311
    })
    
     const { item } = state; // Read values passed on state

      const mapStyles = {        
        height: "100vh",
        width: "100%"};


    useEffect(() => {
    
    const latLong=item.coord.split(',');

    setCoord({
        lat:parseFloat(latLong[0]),
        lng:parseFloat(latLong[1]),
     })

    }, [])

    const handleVolver = ()=>{
        navigate('/');    
    };

    return (
        <div>
        <Grid item xs={12} md={10} lg={12}>

            <Button variant="contained" color="error" onClick={handleVolver}>
                Volver
            </Button>
        
            <LoadScript googleMapsApiKey='AIzaSyAuqtG8XhmKQPGoYpFi9dqZmhZTDWGCxE0'>
                <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom={14}
                center={coord}
                >
                        <Marker 
                            position={coord}
                            zIndex={300}
                            //icon={icon}

                            // onRightClick={() => props.onMarkerRightClick(marker)}
                        />
                        
                </GoogleMap>
            </LoadScript>
        </Grid>
        </div>
    );
};
export default MapsPage;