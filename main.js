const loadMeal=(mealName)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMeals(data.meals))
}

const displayMeals=(meals=>{
  console.log(meals);
  const mealContainer=document.getElementById('meal-container');
  mealContainer.innerHTML='';

  meals.forEach(meal=>{
    const {strMealThumb,strMeal,strInstructions,idMeal}=meal;
    // console.log(meal);
    const div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card h-100">
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text">${strInstructions.slice(0,100)}</p>
          <button class='btn btn-warning' id="detailBtn" onclick=detailShow(${idMeal})>Details</button>
        </div>
      </div>
    `;
    mealContainer.appendChild(div);
  })

})
document.getElementById('searchBtn').addEventListener('click',function(){
  const searchMeal=document.getElementById('searchMeal');
  const meal=searchMeal.value;
  loadMeal(meal);
  searchMeal.value=''
})
// loadMeal();