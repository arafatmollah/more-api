const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(quote => display(quote));
}

const display = quoted => {
    console.log(quoted);
    const quote = document.getElementById('quotes');
    quote.innerText = quoted.quote;
}