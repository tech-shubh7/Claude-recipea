import React, { useState } from 'react'

function Explore() {

//     const [ingredient,setIngredient]=useState("");
//     const [items,setItems]=useState([]);

//     const handleInputChange=(event)=>{
//         setIngredient(event.target.value);
//     }
//     const handleAddItem=()=>{
//         if(ingredient.trim()!==''){
//             setItems([...items, ingredient.trim()])
//             setIngredient('')
//         }
//     }
//     const handleDisplayClick=()=>{
//        if(event.key==='Enter'){
//         handleAddItem()
//        }    }

//       return (
//     <div>
//       <input type="text" name='ingre' value={ingredient} onChange={handleInputChange} onKeyPress={handleDisplayClick} placeholder='enter ingredient here' />
//       <button onClick={handleAddItem}>Add</button>
    
//       <div>
//         <h3>items list</h3>
//         <ul>{items.map((item,index)=>(
//                 <li key={index}>{item}</li>
//         ))}</ul>
//       </div>
//     </div>
//   )
// }

// function handleonSubmit(event){
//   event.preventDefault();
//   const formElement=event.target;
//   const formData=new FormData(formElement);
//   const email=formData.get("email");
//   const password=formData.get("password")
//   console.log(email)
//   console.log(password)
//   formElement.reset()
// }
//RATHER THEN WRITE ALL ABOVE CODE WE CAN ALSO ACCESSS EMAIL PASSWORD IN 2 LINNES YES 
//RIGHT HERE IS HOW WE CAN IN NEW REACT VERSION

function signUp(formData){
  const email=formData.get("email")
  console.log(email)
  const password=formData.get("password");
  console.log(password);
  const skills=formData.get("skills")
  console.log(skills)
  const hobbies=formData.getAll("hobbies")
  console.log(hobbies)
  const city=formData.get('city');
  console.log(city)
  console.log(Object.fromEntries(formData)) //it is to print all form data at one time it will print all form data but still there is bug of checkbox that it will not print all checked values only one wil be printed
}

return(
  <section>
   <h1>Sign up Form</h1>
   <form action={signUp}>
    <label htmlFor="email">Email :</label>
    <input type="email" name='email'defaultValue="shubh77@gmail.com" id='email'placeholder='shubh@patel.com'/>
    <br />
<label htmlFor="password">Password :</label>
    <input type="password" defaultValue="1234" name='password' id='password'  />
    <br />
    <label htmlFor="textarea">Description :</label>
    <textarea name="description" id="textarea"></textarea>
    <br />
    <label htmlFor="radio"> Select Skill :
      <input type="radio" id='radio' name='skills' value="python"/> python
      <input type="radio" id='radio' name='skills' value="java"/> java
      <input type="radio" id='radio' name='skills' defaultChecked={true} value="javascript"/> javascript
    </label>
    <br />
    <label htmlFor="checkbox"> Select Hobbies :
      <input type="checkbox" id='checkbox' name='hobbies' value="sports"     /> sports
      <input type="checkbox" id='checkbox' name='hobbies' value='singing'   /> singing
      <input type="checkbox" id='checkbox' name='hobbies' value='reading'   /> reading
      <input type="checkbox" id='checkbox' name='hobbies' value='coding'   /> coding
      </label>
      <br />
    <label htmlFor="city">select city :
      <select name="city" id="city">
    <option value="vadodara">vadodara</option>
    <option value="anand">annad</option>
    <option value="petlad">petlad</option>
    <option value="khambhat">khambhar</option>
      </select>
      </label>
      <br />
    <button>submit</button>
   </form>
  </section>
)
}
export default Explore
