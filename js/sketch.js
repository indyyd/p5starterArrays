let words = ["Plymouth", "is", "awesome"]
//each value in an array is called an 'element'
//they are used so you can keep track of them
//each element in an array has an index
//the first element is called 0, and then they go up from there
//we can access the value from an array by using the index
//e.g. nums [0] to access '100' in that array
let wordIndex = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw(){
    background(220);
    textSize(mouseX);
    text(words[wordIndex], mouseX, mouseY);
}

function mousePressed () {
    if(wordIndex == words.length-1) {
    wordIndex = 0;
    } else {
        wordIndex++;
    }
console.log('wordIndex:' + wordIndex)
}

    
    