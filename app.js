const button = document.querySelector('button');
const randomRGB = document.createElement('p');
const complimentaryRGB = document.createElement('p');
const random = document.querySelector("#randomColour");
const complimentary = document.querySelector("#complimentaryColour");
const randomHead = document.querySelector("#randomHeading");
const compHead = document.querySelector("#compHeading");

button.addEventListener('click', function(){
    const red = makeRandomNumber();
    const green = makeRandomNumber();
    const blue = makeRandomNumber();
    
    const newColour = `rgb(${red},${green},${blue})`;
    
    const complimentaryColour = makeComplimentaryColour(red, green, blue);
    
    //applies the colour as inline styles and adds the rgb values to created <p>'s and appends them.
    random.style.backgroundColor = newColour;
    randomRGB.innerHTML =newColour;  
    randomHead.appendChild(randomRGB);

    complimentary.style.backgroundColor = complimentaryColour;
    complimentaryRGB.innerHTML = complimentaryColour;
    compHead.appendChild(complimentaryRGB);

})

const makeComplimentaryColour = (red, green, blue) => {
 //creates a complimentary colour from the random colour
   return `rgb(${255-red},${255-green},${255-blue})`;
}

const makeRandomNumber =() => {
    //creates a random number up to 255
    return Math.floor(Math.random()*255);
}
