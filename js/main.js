//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// document.getElementById('date').value;
const button = document.getElementById('button');

button.addEventListener('click', showSpace);


function showSpace(){
    let date = document.querySelector('input').value
    console.log(date);
    let url = "https://api.nasa.gov/planetary/apod?api_key=jFN7hrJaqzhUvDvF5c7a9YksX5IZ7XvHntUfYNCT&date="+(date)

    fetch (url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            document.getElementById("des").innerText=data.explanation
            document.getElementById("title").innerText=data.title
            if (data.media_type === 'image'){
                document.querySelector('img').src=data.hdurl
            }else if(data.media_type === "video"){
                document.querySelector('iframe').src=data.url}
        })
        .catch (error => {
            console.log(`error ${error}`)
        })
}
