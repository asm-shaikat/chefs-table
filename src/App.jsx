import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
import Kitchen from './Components/Kitchen/Kitchen'
import Swal from 'sweetalert2';

function App() {

  const[selectedRecipes,setSelectedRecipes] = useState([]);
  const [currenCooking,setCurrenCooking] = useState([]);
  const handleCook = (recipe) => {
    const isRecipeAlreadyAdded = selectedRecipes.some(
      (item) => item.recipe_id === recipe.recipe_id
    );
    
    if (isRecipeAlreadyAdded) {
      Swal.fire({
        position: "top-end",
        showConfirmButton: false,     
        timer: 2000,                  
        toast: true,          
        timerProgressBar: true,
        icon: 'warning',
        title: 'Oops...',
        text: 'This recipe is already in your list!',
      });
    } else {
      const cart = [...selectedRecipes, recipe];
      setSelectedRecipes(cart);
    }
  };

  const handleCurrentCoocking = (recipe) =>{
    const updatedSelectedRecipes = selectedRecipes.filter(
      (item) => item.recipe_id !== recipe.recipe_id
    );
    const cook = [...currenCooking,recipe];
    setSelectedRecipes(updatedSelectedRecipes);
    setCurrenCooking(cook);
  }

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className='flex flex-col lg:flex-row justify-between gap-2 px-4 lg:px-8'>
      <div>
      <Recipes handleCook={handleCook}></Recipes>
      </div>
      <div>
      <Kitchen recipes={selectedRecipes} handleCurrentCoocking={handleCurrentCoocking} currenCooking={currenCooking}></Kitchen>
      </div>
      </div>

    </>
  )
}

export default App
