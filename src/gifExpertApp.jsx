import { useState } from "react";
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory) //No usar para evitar mutaciones
        if(categories.includes(newCategory)) return
        setCategories( [...categories, newCategory] ) //Primera manera de solucionarlo
        // setCategories( cat => [...cat, "Valorant"]) //Seguna manera de solucionarlo
    }
    return (
        <>
        <h1>Gif Expert App</h1>

        <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ value => onAddCategory(value) }
        />
        
        <ol>
            { categories.map((category) => {
                return (
                    <GifGrid key={ category } category={ category } />
                )
            }) }
        </ol>
        </>
    )
}