
const Form = ({handleOnChange, formData, errors, validateForm}) => {

     const handleOnSubmit = (event)=>{
        event.preventDefault()
        if(validateForm()){
            console.log('Formulario enviando datos: ', formData)
        }
    }
    return (
        <form onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    name='name'
                    placeholder="ingrese el nombre"        
                    value={formData.name} 
                    onChange={handleOnChange}       
                />
                {errors && errors.name && <span>{errors.name}</span>}
                <input 
                    type="text" 
                    name='email'
                    placeholder="ingrese el email"
                    value={formData.email} 
                    onChange={handleOnChange}
                />
                {errors && errors.email && <span>{errors.email}</span>}
                <button>Enviar</button>
            </form>
    )
}   

export default Form