import './App.css';
import foods from './foods.json'
import { useState } from 'react'
import FoodBox from './Components/FoodBox';
import {Row} from 'antd'
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {

  const [allFoods, setAllFoods] = useState(foods)

  return (
    <div className="App">
      <Search allFoods={allFoods} setAllFoods={setAllFoods} />
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods}/>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          allFoods.map( (food) =>{
            return (
              <div>
                <FoodBox food={food} allFoods={allFoods} setAllFoods={setAllFoods}/>
              </div>
            )
          })
        }
      </Row>
      
    </div>
  );
}

export default App;
