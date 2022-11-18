let nums = [100, 75, 200, 87, 25]
//each value in an array is called an 'element'
//they are used so you can keep track of them
//each element in an array has an index
//the first element is called 0, and then they go up from there
//we can access the value from an array by using the index
//e.g. nums [0] to access '100' in that array
let numIndex = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw(){
    background(220);

    fill(255, 255, 255);
    circle(200, 200, nums[numIndex]);
}

function keyPressed() {
    if (numIndex == 4) {
        numIndex = 0;
    } else {
        numIndex ++;
    }
    console.log('numIndex:' + numIndex);  
    }
    