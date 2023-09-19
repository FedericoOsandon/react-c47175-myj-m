import { useState } from "react"

export const formWhitValidation = (FormWrappedComponent)=>{
    
    const FormWhitValidation = (props)=>{
        const [errors, setErros] = useState({})

        const validateForm = ()=>{
            let newErrors = {}
            let isValid = true
            if (!props.formData.name){
                newErrors.name = 'El campo está vacío'
                isValid = false
            }
            if (!props.formData.email){
                newErrors.name = 'El email está vacío'
                isValid = false
            }
            setErros(newErrors)
            return isValid
        }
        return <FormWrappedComponent 
            {...props}
            errors={errors}
            validateForm={validateForm}
        />
    }

    return FormWhitValidation
}