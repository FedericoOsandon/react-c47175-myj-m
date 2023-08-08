// función para insertar un título
export const crearTitulo = (div) => {
    const titulo = document.createElement('h1')
    titulo.innerText = 'ESte es un título'

    const subtitulo = document.createElement('h2')
    subtitulo.innerText = 'Este es un súbtitulo'

    div.appendChild(titulo)
    div.appendChild(subtitulo)
}

