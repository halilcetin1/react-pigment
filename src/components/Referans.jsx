import React from 'react'
import '../css/responsiveDesign.css'
import teknokent from '../source/teknokent.png'
import lab from '../source/lab.png'
import harranUni from '../source/harranuni.png'
import belediye from '../source/belediye.png'

export default function Referans() {
  return (
    <div>
          <h2 className='mb-9 text-5xl text-center'>Referanslar </h2>
 
    <div className='referanceDiv'>
      
<img className='referanceImg' src={teknokent} alt="" />
        
<img className='referanceImg' src={belediye} alt="" />
        
<img className='referanceImg' src={harranUni} alt="" />
        
<img className='referanceImg' src={lab} alt="" />

    </div>
    </div>
  )
}
