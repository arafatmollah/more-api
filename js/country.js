const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data =>displayCountry(data));
    
}
loadCountry()
const displayCountry = country => {
    const display = document.getElementById('display-result')
    country.forEach(countries => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<p>${countries.name}</p>
        <p>Capital : ${countries.capital}</p>
        <button onclick="displaydetails('${countries.name}')">More Details</button>`
        display.appendChild(div)
    })
}
const displaydetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
    .then(name => details(name[0]))
}

const details = continent => {
    console.log(continent)
    const countryDetails = document.getElementById('details');
    countryDetails.innerHTML = `<p>Area: ${continent.area}</p>
   Flag: <img src='${continent.flag}' width="200px">
    <p>Population: ${continent.population}</p>
    <p>Region: ${continent.region}</p>`
}

