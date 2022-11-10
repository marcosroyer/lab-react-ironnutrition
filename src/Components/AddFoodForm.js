import {Divider, Input, Button} from 'antd'
import {useState} from 'react'

function AddFoodForm({allFoods, setAllFoods}){

    const [form, setForm] = useState({
        name: "",
        image: "",
        calories: "1",
        servings: "1"
    })

    function handleChange(event){
        event.preventDefault()
        setForm({...form, [event.target.name]: event.target.value})
        console.log(event.target.name, event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        setAllFoods([...allFoods, form])

        setForm({
            name: "",
            image: "",
            calories: "1",
            servings: "1"
        })
    }

    return (

        <div>
            <form>
                <Divider>Add Food Entry</Divider>
                <label>Name</label>
                <Input name="name"  value={form.name} type="textarea" onChange={handleChange} />
                <label>Image</label>
                <Input name="image" value={form.image} type="textarea" placeholder="http://example.com/food-image.jpg" onChange={handleChange} />
                <label>Calories</label>
                <Input name="calories" value={form.calories} type="number" onChange={handleChange} />
                <label>Servings</label>
                <Input name="servings" value={form.servings} defaultValue="1" type="number" onChange={handleChange} />
                <Button type="submit" onClick={handleSubmit}>Create</Button>
            </form>
        </div>
    )
}

export default AddFoodForm