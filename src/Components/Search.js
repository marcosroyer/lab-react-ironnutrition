import {Divider, Input} from 'antd'
import { useState } from 'react'

function Search({allFoods, setAllFoods}){

    const [original, setOriginal ] = useState(allFoods)

    function handleChange(event){
        setAllFoods(original)
        let filteredFoods = original.filter( (food) =>{
            return food.name.includes(event.target.value)
        })
        console.log(event.target.value)
        setAllFoods(filteredFoods)
    }

    return (
        <div>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={undefined} type="text" onChange={handleChange} />
        </div>
    )
}

export default Search