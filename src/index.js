console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const createImg = document.createElement('img')
const findDivImg = document.getElementById('dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


// function fetchImg() {
//     return fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(json => loopingObject(json['message']));
// }


document.addEventListener("DOMContentLoaded", function() {
    fetchImgs();
    fetchBreeds();
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

function fetchBreeds() {
    fetch(breedUrl)
    .then( res => res.json() )
    .then(addBreeds)
}

function addBreeds(json) {
    const breedDiv = document.querySelector("ul#dog-breeds");
    const dogBreeds = json["message"];
    for (const breed in dogBreeds) {
        let dogBreed = document.createElement('li');
        dogBreed.innerText = breed;
        breedDiv.appendChild(dogBreed);
    }
}