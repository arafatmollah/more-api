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
    meal.forEach(meals => {
        console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
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



