# clearSkyPGH


A small project connecting to NASA astronomy picture of the day to allow people in Pittsburgh to see stars (because it's always cloudy).
[clearskypgh.netlify.app](https://clearskypgh.netlify.app/)

[<img ="https://user-images.githubusercontent.com/102367926/184868779-a2ed8e4a-c24e-4959-b1bf-582c666b62af.png" height = "400"/>](https://clearskypgh.netlify.app/)


### How it's made

tech used: HTML, CSS, client side JavaScript. Client side JavaScript runs a fetch request to NASA APOD API and handles returning data allowing for extraction of title of media, picture image or video within iframe, and description of media. 

### Optimizations
x styling of page completed 8/10/22

x improving switch from video to picture or picture to video  completed 8/11/22

### Lessons learned

The promise syntax of fetch request, use of JSON data, ability to use iframe, background-blur ("glass-card look"some resources suggest that it is less accessible due to low contrast, but in this case I used black text on blue/white background. I feel that for people with low vision this is a better choice than the text was on the bottom of this picture with the image of choppy water).
