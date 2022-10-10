import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(InputValue.trim().length <= 1) return

        // setCategories(cat => [...cat, InputValue])
        onNewCategory( InputValue.trim() )
        setInputValue("")
    }

    return (
        <form onSubmit={ (e) => onSubmit(e) }>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={ InputValue }
                onChange={ onInputChange } />
        </form>
    )
}