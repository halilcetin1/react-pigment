import React from 'react'
import '../css/responsiveDesign.css'
import mobil from '../source/mobile.png'
import web from '../source/websoftware.png'
import { Box, Button } from '@mui/material'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
function Services() {
  return (
    <div>
      <h1 className='text-center text-6xl mb-3'  >Hizmetler ve Ürünler</h1>

      <div className="products mb-9">
      
      <div className="product1">
      <img src={mobil} alt="" className="imgCard" />
      <div className="content">   <h1 className='text-4xl mt-1'>Mobil <span className='text-indigo-600'>Yazılım</span></h1>
      <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut dignissimos voluptatibus ab officiis placeat doloremque est deleniti aliquid.</p>
        </div>
        <div className="btnDiv  mt-16">
        <Button endIcon={<InfoRoundedIcon/>}  variant='outlined' title='Detaylı bilgi' color='info' sx={{width:"40%"}}>Detaylı Bilgi </Button>
        <Button  endIcon={<AddShoppingCartRoundedIcon/>} variant='contained' title='satın al' color='info' sx={{width:"40%",}}>Satın al</Button>
       
      
      </div>
      </div>
      <div className="product2">
      <img src={web} alt=""  className="imgCard"  />
      <div className="content">
        <h1 className='text-4xl mt-1'>Web <span className='text-indigo-600'>Yazılım</span></h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut dignissimos voluptatibus ab officiis placeat doloremque est deleniti aliquid.</p></div>
        <div className="btnDiv  mt-16">
        <Button  endIcon={<InfoRoundedIcon/>}    variant='outlined' title='satın al' color='info' sx={{width:"40%"}}>Detaylı bilgi</Button>
        <Button    endIcon={<AddShoppingCartRoundedIcon/>}       href='https://halil.com' variant='contained' title='Detaylı bilgi' color='info' sx={{width:"40%"}}>Satın Al </Button> 
      
      </div>
      </div>
      
          </div>
{/*  */}
<div className="products">
      
      <div className="product1">
      <img src={mobil} alt="" className="imgCard" />
      <div className="content">   <h1 className='text-4xl mt-1'>Desktop <span className='text-indigo-600'>Yazılım</span></h1>
      <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut dignissimos voluptatibus ab officiis placeat doloremque est deleniti aliquid.</p>
        </div>
        <div className="btnDiv  mt-16">
        <Button endIcon={<InfoRoundedIcon/>}  variant='outlined' title='Detaylı bilgi' color='info' sx={{width:"40%"}}>Detaylı Bilgi </Button>
        <Button  endIcon={<AddShoppingCartRoundedIcon/>} variant='contained' title='satın al' color='info' sx={{width:"40%",}}>Satın al</Button>
       
      
      </div>
      </div>
      <div className="product2">
      <img src={web} alt=""  className="imgCard"  />
      <div className="content">
        <h1 className='text-4xl mt-1'>Yapay Zeka <span className='text-indigo-600'>Yazılım</span></h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut dignissimos voluptatibus ab officiis placeat doloremque est deleniti aliquid.</p></div>
        <div className="btnDiv  mt-16">
        <Button  endIcon={<InfoRoundedIcon/>}    variant='outlined' title='satın al' color='info' sx={{width:"40%"}}>Detaylı bilgi</Button>
        <Button    endIcon={<AddShoppingCartRoundedIcon/>}       href='https://halil.com' variant='contained' title='Detaylı bilgi' color='info' sx={{width:"40%"}}>Satın Al </Button> 
      
      </div>
      </div>
      
          </div>
    </div>
  )
}

export default Services