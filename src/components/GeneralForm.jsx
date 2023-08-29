import React from 'react'
import { useFormik } from 'formik';

function GeneralForm() {

    const {values , errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:"",
          password:"",
        },
      });
    
  return (
    <form className='form'>
        <div className='inputDiv'>
            <label>Email</label>
            <input type="email" 
            value={values.email}
            id='email'
            placeholder='Mailinizi giriniz'
            onChange={handleChange}
            />
        </div>
        <div className='inputDiv'>
            <label>Yaş</label>
            <input type="number" 
            value={values.age}
            id='age'
            placeholder='Yaşınızı giriniz'
            onChange={handleChange}
            />
        </div>
        <div className='inputDiv'>
            <label>Şifre</label>
            <input type="password" 
            value={values.password}
            id='password'
            placeholder='Şifrenizi giriniz'
            onChange={handleChange}
            />
        </div>
        <div className='inputDiv' >
            <label>Şifre Tekrarı </label>
            <input type="password" 
            value={values.confirmPassword}
            id='confirmPassword'
            placeholder='Şifrenizi tekrar giriniz'
            onChange={handleChange}
            />
        </div>
        <button type='submit'>Kaydet</button>
    </form>
  )
}

export default GeneralForm