'use strict';

var totalClicks = 0;
var image1 = document.getElementById('imagePH1');
var image2 = document.getElementById('imagePH2');
var image3 = document.getElementById('imagePH3');
var imagesection = document.getElementById('imagesection');
var imageData = [];
var lastThreeImgs = [];

var bag = new Images('bag', 'img-repo/bag.jpg');
var banana = new Images('banana', 'img-repo/banana.jpg');
var bathroom = new Images('bathroom', 'img-repo/bathroom.jpg');
var boots = new Images('boots', 'img-repo/boots.jpg');
var breakfast = new Images('breakfast', 'img-repo/breakfast.jpg');
var bubblegum = new Images('bubblegum', 'img-repo/bubblegum.jpg');
var chair = new Images('chair', 'img-repo/chair.jpg');
var cthulhu = new Images('cthulhu', 'img-repo/cthulhu.jpg');
var dogDuck = new Images('dog-duck', 'img-repo/dog-duck.jpg');
var dragon = new Images('dragon', 'img-repo/dragon.jpg');
var pen = new Images('pen', 'img-repo/pen.jpg');
var petSweep = new Images('pet-sweep', 'img-repo/pet-sweep.jpg');
var scissors = new Images('scissors', 'img-repo/scissors.jpg');
var shark = new Images('shark', 'img-repo/shark.jpg');
var sweep = new Images('sweep', 'img-repo/sweep.png');
var tauntaun = new Images('tauntaun', 'img-repo/tauntaun.jpg');
var unicorn = new Images('unicorn', 'img-repo/unicorn.jpg');
var usb = new Images('usb', 'img-repo/usb.gif');
var waterCan = new Images('water-can', 'img-repo/water-can.jpg');
var wineGlass = new Images('wine-glass', 'img-repo/wine-glass.jpg');

var randomNumber = function() {
  return Math.floor(Math.random() * imageData.length);
};

function Images(name,path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicks = 0;
  imageData.push(this);
}

function randomImages() {
  var newImage = [];
  while (newImage.length < 3) {
    var num = randomNumber();
    if (!lastThreeImgs.includes(num) && !newImage.includes(num)) {
      newImage.push(num);
    }
  }
  image1.src = imageData[newImage[0]].path;
  image1.className = newImage[0];
  image2.src = imageData[newImage[1]].path;
  image2.className = newImage[1];
  image3.src = imageData[newImage[2]].path;
  image3.className = newImage[2];
  lastThreeImgs = newImage;
}
randomImages();

function renderImages() {
  event.preventDefault();
  var clickPic = event.target;
  imageData[clickPic.className].clicks++;
  imageData[image1.className].displayed++;
  imageData[image2.className].displayed++;
  imageData[image3.className].displayed++;
  randomImages();
  totalClicks++;
  if (totalClicks === 25) {
    showResults();
    image1.removeEventListener('click', renderImages);
    image2.removeEventListener('click', renderImages);
    image3.removeEventListener('click', renderImages);
    imagesection.remove();
  }
}

function showResults() {
  var list = document.getElementById('list');
  var summaryh2 = document.getElementById('summaryh2');
  summaryh2.innerText = 'HERE ARE THE RESULTS';
  list.appendChild(summaryh2);
  var ul = document.createElement('ul');
  list.appendChild(ul);
  for (var i = 0; i < imageData.length; i++) {
    var li = document.createElement('li');
    li.innerText = imageData[i].clicks + ' votes for ' + imageData[i].name + '. ' + imageData[i].name + ' received ' + Math.ceil((imageData[i].clicks / totalClicks) * 100) + '% of the total clicks.';
    ul.appendChild(li);
  }
}

image1.addEventListener('click', renderImages);
image2.addEventListener('click', renderImages);
image3.addEventListener('click', renderImages);
