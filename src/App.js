import './App.css';
import foods from './foods.json'
import { useState } from 'react'
import FoodBox from './Components/FoodBox';
import {Divider, Row, Button} from 'antd'
import AddFoodForm from './Components/AddFoodForm';
import SearchBar from './Components/SearchBar';

function App() {

  const [allFoods, setAllFoods] = useState(foods)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  function handleShowForm(){
    setShowForm(!showForm)
  }

  return (
    <div className="App">

      <SearchBar  search={search} setSearch={setSearch}/>
      <Button onClick={handleShowForm}>Add New Food</Button>
      
      {
        showForm ? <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods}/> : ''
      }

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          allFoods
          .filter( (food) =>{
            return food.name.toLowerCase().includes(search.toLocaleLowerCase())
          })
          .map( (food) =>{
            return (
              <div>
                <FoodBox food={food} allFoods={allFoods} setAllFoods={setAllFoods} key={food.name}/>
              </div>
            )
          })
        }
      </Row>
      
    </div>
  );
}

export default App;
