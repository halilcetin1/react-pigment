import {  Button, Grid } from '@mui/material'
import React from 'react'
import '../css/responsiveDesign.css'
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
function Footer() {
  const navigate=useNavigate()
  return (
    <div className='footerDiv '>

  <div className="contentDiv1">
    <h2>İletişim</h2>
<div className='divSocial'>
  <a href="https://instagram.com" target='_blank'>
  <FaInstagram className='social'/>
  </a>

  <a href="https://instagram.com" target='_blank'>
  <FaTwitter className='social'/>
  </a>
  <a href="https://instagram.com" target='_blank'>
  <FaLinkedin className='social'/>
  </a>
  <a href="https://instagram.com" target='_blank'>
  <FaYoutube className='social'/>
  </a>
  <a href="https://instagram.com" target='_blank'>
  <FaWhatsapp className='social'/>
  </a>
</div>

  </div>
  <div className="contentDiv2">

  <h2 className='text-3xl mb-3'>Hakkında</h2>
  <p>
<a className='text-black' href="#"> Web Yazılım</a>
</p>
<p>
<a href="#"> Mobil  Yazılım</a>
</p>
<p>
<a href="#"> Otamasyon  Yazılmı</a>
</p>




  </div>
  <div className="contentDiv3"> 
  <h1> Adress:</h1> 
  <a href="https://maps.app.goo.gl/dhaLbgTAfdBT6bA78">Ulubağ Mah. No: 287/A, Haliliye, Recep Tayyip Erdoğan Bulvarı, 63290 Şanlıurfa Merkez/Şanlıurfa</a>
  </div>


   </div>
  )
}

export default Footer