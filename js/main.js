//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const button = document.getElementById('button')
button.addEventListener('click', showSpace)


function showSpace(){
    fetch ("https://api.nasa.gov/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
}