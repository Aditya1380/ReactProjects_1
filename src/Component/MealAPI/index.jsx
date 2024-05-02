import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const MealAPI = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      }).catch((err)=>{
        console.log(err);
      });
  };

  const itemList = items.map(({strMeal,strMealThumb,idMeal})=>{
    return(
        <section key={idMeal} className="card">
            <img src={strMealThumb} alt="strMeal"/>
            <section className="content">
                <p>{strMeal}</p>
                <p>{idMeal}</p>
            </section>
        </section>
    )
  })

  return (
    <div className="items-container">


    {itemList}






      {/* <header className="App-header">
            <h1>Random Meal Generator</h1>
            {meal && (
              <div className="meal">
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strInstructions}</p>
                <h3>Ingredients:</h3>
                <ul>
                  {Object.keys(meal)
                    .filter(key => key.includes("Ingredient") && meal[key])
                    .map(key => (
                      <li key={key}>{meal[key]}</li>
                    ))}
                </ul>
              </div>
            )}
            <button onClick={fetchMeals}>Get Random Meal</button>
          </header> */}
    </div>
  );
};

export default MealAPI;
