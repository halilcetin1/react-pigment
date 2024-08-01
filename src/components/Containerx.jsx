import React from 'react'
import Container from '@mui/material/Container';
import '../css/responsiveDesign.css'
function Containerx({children}) {
  return (
    <Container sx={{marginTop:"7rem"}} maxWidth='lg'>
{children}

</Container>
  )
}

export default Containerx