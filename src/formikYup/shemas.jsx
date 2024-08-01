import *as yup from 'yup'
export const loginForm=yup.object().shape({
    email: yup.string().email("lutfen geçerli bir mail giriniz.").required("e mail adresi zorunludur."),
    password: yup.string().required(" Lütfen şifre alanınını giriniz"),
    
}

)