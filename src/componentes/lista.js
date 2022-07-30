import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useNavigate  } from 'react-router-dom';

import {
    Button
  } from "@mui/material";

import { listPet } from "../actions/pets"
import { useDispatch } from "react-redux";


const ListaPage = () => {

    let navigate = useNavigate();

    const [pets, setPets] = useState([]);

    const dispatch = useDispatch();



    useEffect(() => {
        list();
    }, [])

    const list = () => {
        console.log("entro");
        dispatch(listPet()).then(data => {
            setPets(data);
        }).catch(e => {
            console.log(" ver error", e);
        })
    }

    const viewMap = (row) => {
        navigate('/view',{state:{item:row}})
    }

    const registerLink = () => {
        navigate('/register')
    }
    return (
        <TableContainer component={Paper}
            style={{marginTop: "15px" }}>
            <Button variant="contained" color="info" onClick={registerLink} >
                   <AddCircleIcon></AddCircleIcon> Registrar
            </Button>

            <Table sx={{ minWidth: 650 }} aria-label="simple table"  size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Image</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="right">Ubicar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { pets?.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" component="th" scope="row">
                                <img style={{borderRadius:'50'}} src={row.image} width="50" height={50} />
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right"> 
                            <Button variant="contained" color="primary" onClick={()=>viewMap(row)}>
                                    <GpsFixedIcon></GpsFixedIcon> Ubicar
                            </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ListaPage;