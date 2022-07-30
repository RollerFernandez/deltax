import React from "react";



import Register from "./componentes/register";
import ListaPage from "./componentes/lista";
import MapsPage from "./componentes/maps";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const App=()=> {


  return (

<BrowserRouter>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PET 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Routes>
      <Route exact path="/" element={<ListaPage />}></Route>
      <Route  path="/register" element={<Register />}></Route>
      <Route  path="/view" element={<MapsPage />}></Route>
    </Routes>
    </BrowserRouter>

  );
}
export default App;
