import { Button, TextField } from '@mui/material'
import React from 'react'
import '../css/responsiveDesign.css'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginForm } from '../formikYup/shemas'
function Login() {
  const navigate=useNavigate()
  const {handleChange,errors,handleSubmit,values} = useFormik({
    initialValues: {
      email: '',
      password: '',

    },
    validationSchema:loginForm

   
  });
console.log(

  
);
  return (
    <div className='containerLogin'>
    <form onChange={handleSubmit} >

    <div className='login'>
<h2 className='text-3xl mb-7'>
  Giriş Yap 
</h2>

<TextField name='email' value={values.email} className='epostaInput' sx={{width:{xs:"90%",md:"400px"},marginBottom:"60px"}}  label='E-posta'  onChange={handleChange}></TextField>
{errors.email && <p className='errors'>{errors.email}</p>}

<TextField name='password'    className='paswordInput' sx={{width:{xs:"90%",md:"400px"}}} label="Şifre" ></TextField>
<div className='mb-5'>
{errors.password && <p className='errors'>{errors.password}</p>}
<span style={{marginRight:"120px",marginBottom:"90px"}}   > <input type="checkbox" className="checkbox"  /> 
<span style={{marginLeft:"5px"}}>Beni Hatırla</span>
</span>



</div>
<div className="loginBtnDiv gap-4">



<Button type='submit'  color='success' sx={{width:{xs:"100%",md:"280px"},height:"45px"
,marginBottom:"4px",}} variant='contained' >Giriş yap</Button>
<Button     onClick={()=>{navigate("/signup")
  
}}>Hesabın mı yok kayıt ol</Button>



</div>
    </div>

    </form>
    </div>
  )
}

export default Login
/*   const formik = useFormik({
  initialValues: {
    email: '',
  },
 
}); 
*/