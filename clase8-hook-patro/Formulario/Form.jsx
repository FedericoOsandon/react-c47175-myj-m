const Form = ({ formData, handleOnChange, errors, validateForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()){
            console.log('Enviando datos del form: ',formData)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name='name'
                    onChange={handleOnChange}
                    value={formData.name}
                />
                {errors && errors.name && <span>{errors.name}</span>}
                <label for="exampleInputEmail1">Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name='email'
                    onChange={handleOnChange}  
                    value={formData.email} 
                />
                {errors && errors.email && <span>{errors.email}</span>}
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>  
        </form>   
    )
}

export default Form