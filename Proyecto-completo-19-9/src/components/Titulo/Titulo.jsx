function Titulo({ titleObject }) { // prop 
    
    return (
        <div>
            <h1>
                {titleObject.titulo}
            </h1>
            <h2>
                {titleObject.subtitulo}
            </h2>
        </div>
    )
}

export default Titulo