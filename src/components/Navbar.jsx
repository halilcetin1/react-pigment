
import React, { useEffect, useState } from 'react';
import '../css/responsiveDesign.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


const Navbar = () => {

const [anchorEl,setAnchorEl]=useState(null)
const navigate=useNavigate()
const openMenu=(e)=>{
  setAnchorEl(e.currentTarget)

}



const open=anchorEl?true:false
  return (
    <AppBar sx={{backgroundColor:"rgb(255,255,255,0.4) ",zIndex:"2" ,top:"0px" , color:"black"  ,marginBottom:"100px",backdropFilter:"blur(5px)"}}   position='sticky'>
     <Toolbar>
<IconButton onClick={openMenu}  size='large' edge='end'

color='inherit'
aria-label='menu'
sx={{mr:2, display:{xs:"block",md:"none"}}}
> <MenuIcon  sx={{fontSize:"35px", }}/></IconButton >

<Typography variant='h4' component="div" sx={{flexGrow:1}} > 
<Box sx={{display:{xs:"flex" ,md:"none"}, justifyContent:"space-between"}}>
  <Button  sx={{textAlign:"center",fontSize:"25px"}} color='inherit'  onClick={()=>navigate("/")} >PigmentSoft</Button>

  <Box sx={{display:"flex"}}>


<Button  sx={{fontSize:"25px"}} color='inherit' endIcon={<LoginIcon/>} onClick={()=>navigate("/login")}></Button>
  </Box>
</Box>
{/*  */}

  <Box   sx={{display:{xs:"none", md:"flex"} ,justifyContent:"space-between"}}>
  <Button className='homeBtn'  onClick={()=>navigate("/")} variant='text' color='inherit'>Anasayfa</Button>
  <Button className='contactBtn' variant='text' color='inherit' onClick={()=>navigate("/referanslar")}>Referans ve İletişim</Button>
  <Button className='servicesBtn' variant='text' color='inherit' onClick={()=>navigate("/services")}>Hizmetler</Button>
  <Button className='campaignsBtn'  variant='text' color='inherit' onClick={()=>navigate("/campaigns")}>Kampanyalar</Button>
  <Button className='loginBtn' startIcon={<LoginIcon/>}  variant='text' color='inherit' onClick={()=>navigate("/login")}>Giriş Yap</Button>


  </Box>
 





<div style={
  {display:"none"}
} className='deneme' >
  ahewyrguygr
</div>





   
    
     
      
       

    {/*Menu */}
</Typography>
<Menu    anchorEl={anchorEl} open={open}>
<MenuItem >
<Button sx={{width:"300px"}} onClick={()=>{
  navigate("/")
    setAnchorEl(null)
}} variant='text' color='inherit'>Anasayfa</Button> 
</MenuItem>

<MenuItem>

<Button    sx={{width:"300px"}}        variant='text' color='inherit' onClick={()=>{
navigate("/referanslar")
  setAnchorEl(null)
}}>Referans ve İletişim</Button>


</MenuItem>
<MenuItem>
<Button    sx={{width:"300px"}}        variant='text' color='inherit' onClick={()=>{
  navigate("/services")
  setAnchorEl(null)
}}>Hizmetler</Button>
</MenuItem>


<MenuItem>
<Button    sx={{width:"300px"}}        variant='text' color='inherit' onClick={()=>{
  navigate("/campaigns")
  setAnchorEl(null)
}}>Kampanyalar</Button>
</MenuItem>
</Menu>

     </Toolbar>
    </AppBar>
  );
};

export default Navbar;




