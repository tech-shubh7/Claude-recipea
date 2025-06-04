import React, { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../../ai';
import Spinner from './Spinner';
function Main(){
    const[recipe,setRecipe]=useState("");
    const [ingredients,setIngredients]=useState([
    
    ]);
    const[errorMessage,setErrorMessage]=useState('');
    const[onclick,setOnClick]=useState(false);
    

     async function getRecipe(){
            setOnClick(prevOnClick=>!prevOnClick);
           const generatedRecipe= await getRecipeFromMistral(ingredients)
           setRecipe(generatedRecipe);
        }
        
        //     function handleSubmit(event)  {
        //         event.preventDefault();
        //         const formData=new FormData(event.currentTarget);
        //         const newIngredient=formData.get("ingredient");
        //         setIngredients(ingredients=>([...ingredients,newIngredient]))
        // }

    function onSubmit(formData){
         setErrorMessage('');
            const newIngredientprev=formData.get("ingredient");
            const newIngredient=newIngredientprev.trim();

              if(newIngredient.length===0){
                setErrorMessage('Please enter a food item!');
                return;
         }
            const isDuplicate=ingredients.some(items=>items.toLowerCase()===newIngredient.toLowerCase());
              if(isDuplicate){
                setErrorMessage("This food item is already in the list");
                return;
        }
            setIngredients(ingredients=>([...ingredients,newIngredient]))
     }
  
    return(
        <main>
             <form action={onSubmit} className='add-ingredient-form'>
                <input type="text" name='ingredient' aria-label='Add ingredient' placeholder='e.g. ladyfinger'/>
                 <button >Add ingredient</button> 
             </form>
                {errorMessage&& 
                  <p id='errormsg'> {errorMessage} </p>} 
              {ingredients.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
               {onclick&&!recipe && <Spinner/>}
              {recipe && <ClaudeRecipe recipe={recipe} />}
           {/* { recipeShown && } */}
     </main>
    )
}

export default Main


