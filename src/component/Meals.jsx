import React, { useEffect, useState } from 'react'
import "../style.css";

import axios from 'axios';
const Meals = () => {

  const [meal , setMeal] = useState([]);


  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
      // console.log(res.data.meals);
      setMeal(res.data.meals);
    }).catch(err=> console.error(err))
  },[]);


  const itemList = meal.map(({strMeal,strMealThumb,idMeal})=>{
    return(
      <section className="card">
        <img src={strMealThumb} alt={strMeal} key={idMeal}/>
        <section className='content'>
          <p key={Math.random()*10}>{strMeal}</p>
          <p key={idMeal}>#{idMeal}</p>
        </section>
      </section>
    )
  })


  return (
    <div>
      <div className='items-container'>{itemList}</div>
    </div>
  )
}

export default Meals
