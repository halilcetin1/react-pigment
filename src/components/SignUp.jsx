import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { sıgnIn } from '../formikYup/signIn'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate()
  const submit=()=>{

    setTimeout(() => {
      alert("başarıyla kayıt olundu.")
    }, 2000);
    setTimeout(() => {
      navigate("/")
    },2500);
  }
  const {errors,values,handleChange,handleSubmit,touched}=useFormik({
    initialValues:{
      name:"",
      surName:"",
      number:"",
 eposta:"",
password:"",
confirmPassword:"",
term:""


    },
    validationSchema:sıgnIn
    ,
    onSubmit:submit
  })
  
  return (
    <div className='signIn'>
     
      <form  onSubmit={handleSubmit} className='form pt-4 ' >
      <h1 className='text-center text-4xl text-white'>Kayıt Ol</h1>

    
<div>
<TextField onChange={handleChange} value={values.name}  name='name'  className='input' label="İsim" />
{   errors.name && <p className='text-red-600 mt-3'>{errors.name}</p>}
</div>
<div>
<TextField  onChange={handleChange}     value={values.surName} name='surName'   className='input'  label="Soy İsim" />
{   errors.surName && <p className='text-red-600 mt-3'>{errors.surName}</p>}
</div>
<div>
<TextField  value={values.eposta}  onChange={handleChange}  name='eposta'  className='input' label="E-posta" />
{   errors.eposta && <p className='text-red-600 mt-3'>{ errors.eposta}</p>}
</div>
<div>
<TextField helperText="05XX XXX XX XX" value={values.number}   onChange={handleChange}  name='number'  className='input'  label="Telefon Numarası" />
{   errors.number && <p className='text-red-600 mt-3'>{ errors.number}</p>}
</div>

<div>
<TextField  value={values.password}  onChange={handleChange}  name='password'   className='input' label="Şifre" />
{   errors.password && <p className='text-red-600 mt-3'>{ errors.password}</p>}
</div>
<div> 
<TextField value={values.confirmPassword}      onChange={handleChange} name='confirmPassword'  className='input'  label="Şifre Tekrarı" />
{   errors.confirmPassword && <p className='text-red-600 mt-3'>{ errors.confirmPassword}</p>}
</div>
<div className='mt-2'>
  <input value={values.checkbox}   onChange={handleChange}  className='mr-3' type="checkbox" name="term" id="" />
  <a className='text-center' href="">Kullanıcı sözleşmesini kabul ediyourm.</a>
  {   errors.term && <p className='text-red-600 mt-2'>{ errors.term}</p>}
</div>
<div>
  <Button  type='submit' className='input ' color='success'    variant='contained'>Kayıt ol</Button>
</div>

</form>



    </div>
  )
}

export default SignUp