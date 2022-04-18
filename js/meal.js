const searchFood = () => {
    const searchResut = document.getElementById('input-control');
    const searchResutValue = searchResut.value;
  searchResut.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResutValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.meals));
}

const displaySearch = meal => {
  const card = document.getElementById('card-section')
  card.textContent = '';
    meal.forEach(meals => {
        //console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div onclick="displayResult(${meals.idMeal})" class="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
        <img src="${meals.strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meals.strMeal}</h5>
          <p><span class="text-danger">category: </span>${meals.strCategory}</p>
          <p class="card-text">${meals.strInstructions.slice(0,50)}</p>
        </div>
      </div>`
        card.appendChild(div)
    })
}

const displayResult = meal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
  fetch(url)
    .then(response => response.json())
    .then(data => displayIt(data.meals[0]));
}


const displayIt = mealId => {
  console.log(mealId)
  const row = document.getElementById('row-item');
  row.innerHTML=`<div class="col-6">
  <img src="${mealId.strMealThumb}" class="img-fluid" alt="">
</div>
<div class="col-6">
<h4>Ingredients</h4>
<li>${mealId.strIngredient1}</li>
<li>${mealId.strIngredient2}</li>
<li>${mealId.strIngredient3}</li>
<li>${mealId.strIngredient4}</li>
<li>${mealId.strIngredient5}</li>
<li>${mealId.strIngredient6}</li>
<li>${mealId.strIngredient7}</li>
<li>${mealId.strIngredient8}</li>
<li>${mealId.strIngredient9}</li>
</div>`
}


