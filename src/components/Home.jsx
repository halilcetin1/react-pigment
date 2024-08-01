import React from 'react'
import Sliders from './Sliders'
import '../css/responsiveDesign.css'
import mobil from '../source/mobile.png'
import web from '../source/websoftware.png'
import {  Avatar, Button } from '@mui/material'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import profil from '../source/profilinsta.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
function Home() {
  return (
    <div className='mb-40' >
    <h3 className='text-center text-3xl text-neutral-700'>Hoşgeldiniz</h3>
      <Sliders/>
   

   <h2 className='text-center text-3xl mb-1 mt-3 '>Öne Çıkan Ürünler</h2>
    <div className="products mt-9">
      
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
    <h1 className='text-center mt-48 text-3xl mb-4'>Dizayn ve tasarım</h1>
<div className="containerDesignedDiv">



<div className="designedCard">



  <div className='one'> <Avatar className='avatar' sx={{width:"150px",height:"150px"}} src={profil}></Avatar>
  </div>
  <div className='two'> 
    <h1 className='text-center text-3xl mt-4'>Halil ÇETİN</h1>
    <h2 className='text-center text-1xl'>Bigisayar Programcılığı || Harran Üniversitesi</h2>
    <div className="contactCard">
      <a className='insta' href="https://instagram.com/halilcetinofficial">
      <FaInstagram/>
      </a>
      <a className='github' href="">
        <FaGithub/>
      </a>
      <a className='linkedin' href="">
        <FaLinkedin/>
      </a>
<a className='x' href="">
  <FaX/>
</a>
<a  href="mailto:halilc3618@gmail.com" className="mail">
  <IoMdMail/>
</a>
    </div>
  </div>
</div>

  
</div>
  
     
</div>
  )
}

export default Home