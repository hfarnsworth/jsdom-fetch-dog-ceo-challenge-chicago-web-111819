console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const createImg = document.createElement('img')
const findDivImg = document.getElementById('dog-image-container')

function fetchImg() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => loopingObject(json['message']));
}

function loopingObject(obj){
    // for(let i = 0; i < obj.length; i++) {
    //     console.log(obj[i])
    // }
    
    // for (const key in obj){
    //     console.log(obj[key])
    // }

    for (const val of obj){
        console.log(val)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImg()
});