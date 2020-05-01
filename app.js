var words = ['KOT','DOM','LAS','MAMA','OSA','TATA','TORT','IGLO','SOK','OKO','NOS','PIES','SER','BLOK','LODY','OWCA','RYBA','BANAN','KAWA','CZEKOLADA']
var images = ['cat.jpeg','house.png','forest.jpg','mommy.jpg','osa.jpg','daddy.jpg','tort.jpg','igloo.jpg','juice.jpg','eye.jpg','nose.jpg','dog.png','cheese.jpeg','blok.jpg','icecream.jpg','sheep.jpg','fish.jpg','banana.jpg','coffee.jpeg','chocolate.jpg']

// const inputValue = document.getElementById("main-input-area").value.toUpperCase();

setEventListeners();

// ON ANY TEXT INPUT IN THE MAIN TEXT AREA

function onInput(event) {
    var inputValue = $('#main-input-area').val().toUpperCase();
    var image = $('.side-image');
    var matchedWord, matchedIndex, matchedImageURL;

    // checks if the input matches a string from words[], assigns matching image URL, shows the immage
    if (words.indexOf(inputValue) !== -1) {
        matchedWord = inputValue;
        matchedImageURL = images[words.indexOf(inputValue)];
    } else {
        [matchedWord, matchedImageURL] = [undefined, '']
    }
    
    // changes image URL and show/hides image
    document.getElementsByClassName('side-image')[0].setAttribute('src', matchedImageURL)
    matchedImageURL === '' ? image.hide() : image.show();

    //DEBUG:  console.log(`matchWord: ${matchedWord}, matchedIndex: ${matchedIndex}, inputValue: ${inputValue}, matchedImage: ${matchedImageURL}`)
};

function setEventListeners() {
    document.getElementById("main-input-area").addEventListener('keyup', onInput);
};