console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";



document.addEventListener("DOMContentLoaded", function() {
    fetchImgs();
});

function fetchImgs() {
    fetch(imgUrl)
    .then( res => res.json() )
    .then(addImgToDiv)
}

function addImgToDiv(json) {
    const dogDiv = document.querySelector("div#dog-image-container");
    const dogImgs = json["message"];
    for ( const element of dogImgs) {
        let dogImg = document.createElement("img");
        dogImg.src = element;
        dogDiv.appendChild(dogImg);
    };
};