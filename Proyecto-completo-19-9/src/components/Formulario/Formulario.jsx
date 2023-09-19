import { useState } from "react"
import Form from "./Form"
import { formWhitValidation } from "./formWhitValidaton"


const FormWhitValidation = formWhitValidation(Form) // otro form con validaciones

const Formulario = () => { // (componente -> contenedores)
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })   

    const handleOnChange = (evt) => {
        // console.log(evt.target.name)
        // console.log(evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value 
        })
    }
    console.log(formData)

    return (
        <div>
            {/* <Form formData={formData} handleOnChange={handleOnChange} /> */}
            <FormWhitValidation 
                formData={formData}
                handleOnChange={handleOnChange}
            />
        </div>
    )
}

export default Formulario