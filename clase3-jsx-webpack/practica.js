// const count = 0; 

// ciclo -> va incrementando

// count = count + 1 tradicional 
// count += 1
// count ++;

// let condition = true

// let valor = ''
// if (condition) {
//     valor = 'verdadero'
// }else{
//     valor = 'falsa'
// }

// console.log('El valor es: ' + valor + '. ESto es correcto')
// && - || 
// console.log(`El resultado es ${ condition ? 'verdadero' : 'Falso' }`) 

// ejemplos 
  // const arrayNum = [ 1,2,3,4 ]
  // const five = 5
  // const newArrayNum = [ five, ...arrayNum ] // [1,2,3,4,5]
  // console.log(newArrayNum)

  // propiedades dinámicas
  const propiedad= 'apellido'
  const persona = {
    nombre: 'Fede',
    [propiedad]: 'Osandón',
    email: 'f@gmail.com'
  }

  
  // deep maching
  // const nombre = persona.nombre
  // const apellido = persona.apellido

  // const { nombre = nombre, apellido = apellido } = persona //destructuring
  const { nombre: first_name, apellido: last_name, email='example@example.com' } = persona //deep maching

  console.log(first_name)
  console.log(last_name)
  console.log(email)
