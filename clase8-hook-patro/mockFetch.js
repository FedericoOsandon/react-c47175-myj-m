const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Producto 1', price: 1000, stock: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg'},
    {id: 2, name: 'Producto 2', price: 2000, stock: 52, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: 3, name: 'Producto 3', price: 3000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: 4, name: 'Producto 4', price: 4000, stock: 51, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: 5, name: 'Producto 5', price: 5000, stock: 35, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'}
]

export const mFetch  = () =>  new Promise((res,rej) => { // simular fetch
    //acciones.
    const condition = true
    if(condition){
        setTimeout(()=>{
            res(products)
        }, 3000)
    }else{
        rej('Dinero NO devuelto - nunca más - olvidate')
    }
})

