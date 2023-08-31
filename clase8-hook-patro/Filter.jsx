import { useState } from "react"

const Filter = ({children, products}) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (e) => {
        setFilterState(e.target.value)
    }

    return (
         children({ products, filterState, handleFilterChange }) 
    )
}

export default Filter