init();

var words = ['KOT','DOM','LAS','MAMA','OSA','TATA']
var images = ['cat.jpeg','house.png','forest.jpg','mommy.jpg','osa.jpg','daddy.jpg']

var mainInputArea = document.getElementById("main-input-area");

function init() {
    
    setEventListeners();
    console.log('Application started');
}

function onInput(event) {
    var inputValue = document.getElementById("main-input-area").value;
    inputValue = document.getElementById("main-input-area").value = inputValue.toUpperCase();
    var wordsArray = inputValue.split(' ');
    var lastMatch, lastMatchIndex;
    for (var i = wordsArray.length; i >= 0; i--) {
        if (words.indexOf(wordsArray[i]) !== -1) {
            lastMatch = wordsArray[i];
            lastMatchIndex = words.indexOf(wordsArray[i]);
            break
        } 
    }
    if (lastMatchIndex !== undefined) {
        console.log(`Matched word: ${lastMatch}`);
        console.log(`Matched index: ${lastMatchIndex}`);
        console.log(`Matched index: ${typeof(lastMatchIndex)}`);
        var currentImage = document.querySelector(".matched-image");   // Get the <ul> element with id="myList"
        currentImage.removeChild(currentImage.childNodes[0]);
        document.querySelector('.matched-image').insertAdjacentHTML('afterbegin',
            `<img src="${images[lastMatchIndex]}" id="${lastMatchIndex}" alt="Image not found" width='100%'>`
        );
    }
    
};


function setEventListeners() {
    document.getElementById("main-input-area").addEventListener('keyup', onInput);
};



// 1. Take textarea value and split it into an array; split by space
// 2. Create an array with strings that are words f