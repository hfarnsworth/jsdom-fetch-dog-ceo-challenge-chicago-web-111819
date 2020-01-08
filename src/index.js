console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", function() {
    fetchImg()
});

function fetchImg() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => console.log(json['message']));
}
