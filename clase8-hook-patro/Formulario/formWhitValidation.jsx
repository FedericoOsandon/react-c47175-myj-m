import { useState } from "react"


// wrappedComponent = Form -> el componente Form pasado por parámetro
export const formWhitValidation =  (FormWrappedComponent) => {
    
    // Nuevo compnente creado pro formWhitValidation que encapsula que agrega valor
    // ay returna el componente Form con otras props
    const FormWhitValidation = (props) =>{
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid = true
    
            if (!props.formData.name) {
                newErrors.name = 'El campo name es obligatorio'
                isValid= false
            }
            if (!props.formData.email) {
                newErrors.email = 'El campo email es obligatorio'
                isValid= false
            }
            setErrors(newErrors)
            return isValid
        }

        return <FormWrappedComponent // Copmponente que recibe por parámetro Form
            {...props} //ya teniamos 
            errors = {errors}
            validateForm={validateForm}
        /> 
    }

    return FormWhitValidation
}