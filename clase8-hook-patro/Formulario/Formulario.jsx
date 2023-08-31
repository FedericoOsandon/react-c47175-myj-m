import React, { useState } from 'react'
import Form from './Form'
import { formWhitValidation } from './formWhitValidation'

const FormWhitValidation = formWhitValidation(Form)

const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    

   
    return (
        <div className='w-50'>
            {/* <Form 
                formData={formData} 
                handleOnChange={handleOnChange} 
            />                 */}
            <FormWhitValidation 
                formData={formData}
                handleOnChange={handleOnChange}
            />
        </div>
    )
}

export default Formulario