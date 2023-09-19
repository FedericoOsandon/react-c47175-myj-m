import {useState, memo} from 'react'
import Item from '../Item/Item'


// memo(()=>{}, arg2)
const ItemList =memo(({items}) =>{                 
       
               console.log('item list')
   
               return (
                   <>
                      <ul>
                           { items.map((item)=>  <Item key={item.id}  item={item}  />  )  }
                       </ul>   
                   </>
               )
       }
, (oldProps, newProps)=> oldProps.items.length === newProps.items.length )




export default ItemList
