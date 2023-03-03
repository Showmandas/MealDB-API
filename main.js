const loadData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
};

const displayMeals = datas => {
  console.log(datas);
  const mealContainer = document.getElementById("meal-container");
  datas.forEach(meal => {
    console.log(meal);
    // const {strMealThumb,strMeal,strInstructions}=meal;
    const mealdiv = document.createElement("div");
    mealdiv.classList.add("col");
    mealdiv.innerHTML = `
    <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions}</p>
                    </div>
                  </div>
    `;
    mealContainer.appendChild(mealdiv)
  });
};

console.log(loadData());
