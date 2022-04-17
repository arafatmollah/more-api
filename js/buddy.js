const buddy = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => displayBuddy(data));

}
  buddy() 
const displayBuddy = buddy => {
    //console.log(buddy)
    const result = buddy.results;
    //console.log(result)
    const show = document.getElementById('show');
    for (const results of result) {
        console.log(results.name)
        const p = document.createElement('p');
        p.innerText = `email: ${results.email}
         cell: ${results.cell}
        name: ${results.name.title} ${results.name.first} ${results.name.last} 
         location: ${results.location}`
        show.appendChild(p)
    }
}
