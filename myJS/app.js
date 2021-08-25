const myColors = [
    'DarkGoldenRod',
    'DarkMagenta',
    'DarkOrchid',
    'DarkSlateBlue',
    'DodgerBlue',
    'Indigo',
    'MidnightBlue',
    'Purple',
    'SandyBrown',
    'DarkRed'
];

const myContainer = document.querySelector('.container');
const heading = document.querySelector('h1');
const image = document.querySelector('.gifs');
let count = 0;
//
const changeColor = function(block) {
    heading.style.color = block.style.backgroundColor;
    heading.style.fontSize = '3rem';
}
const appearGif = function() {
    image.style.display = 'block';
    setTimeout(function() {
        image.style.display = 'none';
    }, 1000);
}
for (color of myColors) {
    const myBlock = document.createElement('div');
    myBlock.style.backgroundColor = color;
    myBlock.innerText = ++count;
    myBlock.classList.add('myBlock');
    myContainer.appendChild(myBlock);
    myBlock.addEventListener('click', function() {
        changeColor(myBlock);
        appearGif();
    });
}