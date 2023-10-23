import React, { useEffect, useState } from "react";
import styleRecipes from "./Recipes.module.css";

export default function () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
      .then((response) => response.json())
      .then((result) => setData(result.meals.slice(-3)))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      <section className="p-sections">
        <h4 className={`${styleRecipes.wordRec} text-center my-5`}>Recipes</h4>
        <div className="container d-flex align-items-center justify-content-center  ">
          <div className="row    ">
            {data.map((item, index) => (
              <div className=" col-12 col-md-4  my-2" key={index}>
                <div className={`${styleRecipes.card} card `}>
                  <img
                    className="card-img-top"
                    src={item.strMealThumb}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.strMeal}</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  text-center">
          <button className={`${styleRecipes.BtnCon} my-4  `}>
            Contact us
          </button>
        </div>
      </section>
    </>
  );
}
