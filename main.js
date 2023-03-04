const loadMeal = (mealName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = "";

  meals.forEach((meal) => {
    const { strMealThumb, strMeal, strInstructions, idMeal } = meal;
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card  p-2">
        <img src="${strMealThumb}" class="img-fluid h-25" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text">${strInstructions.slice(0, 100)}</p>
          <button type="button" onclick="detailShow(${idMeal})" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#mealDetails">
  Details
</button>
          <button type="button" onclick="addToCart()" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#cart">
  Add To Cart
</button>
        </div>
      </div>
    `;
    mealContainer.appendChild(div);
  });
};

// get details by ids
const detailShow = (id) => {
  const id_url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(id_url)
    .then((res) => res.json())
    .then((datas) => displayDetails(datas.meals[0]));
};

const displayDetails = (mealData) => {
  console.log(mealData);

  document.getElementById("showModal").innerHTML = `
    <div className="row container">
    <div className="col-12">
    <h1 class="modal-title text-center fs-2 mb-5" id="mealDetailsLabel">${mealData.strMeal}</h1>
    <hr>
    <div class="row p-4">
    <div class="col-6">
    <h4>Area: ${mealData.strArea}</h4>
    <h4>Category: ${mealData.strCategory}</h4>
    <h5>Ingredients:</h5>
    <ul>
    <li>${mealData.strIngredient1}</li>
    <li>${mealData.strIngredient2}</li>
    <li>${mealData.strIngredient3}</li>
    <li>${mealData.strIngredient4}</li>
    <li>${mealData.strIngredient5}</li>
    <li>${mealData.strIngredient6}</li>
    <li>${mealData.strIngredient7}</li>
    <li>${mealData.strIngredient8}</li>
    </ul>
    </div>
    <div class="col-6">
    <img src="${mealData.strMealThumb}" class="img-fluid w-100 rounded"/>
    </div>
    </div>
    
    <div class="description">
    <p class='desc_text'>${mealData.strInstructions}</p>
    </div>
    </div>
    </div>
    `;
};

// show cards according to search
document.getElementById("searchBtn").addEventListener("click", function () {
  const searchMeal = document.getElementById("searchMeal");
  const meal = searchMeal.value;
  loadMeal(meal);
  searchMeal.value = "";
});
loadMeal("egg");
