'use strict';

var totalClicks = 0;
var totalSumClicks = 0;
var image1 = document.getElementById('imagePH1');
var image2 = document.getElementById('imagePH2');
var image3 = document.getElementById('imagePH3');
var imagesection = document.getElementById('imagesection');
var imageData = [];
var lastThreeImgs = [];

var bag = new Images('R2-D2 Bag', 'img-repo/bag.jpg');
var banana = new Images('Banana Slicer', 'img-repo/banana.jpg');
var bathroom = new Images('Bathroom iPad Stand', 'img-repo/bathroom.jpg');
var boots = new Images('Open Toe Rain Boots', 'img-repo/boots.jpg');
var breakfast = new Images('Breakfast All-In-One', 'img-repo/breakfast.jpg');
var bubblegum = new Images("Chef's Chocolate Salty Balls", 'img-repo/bubblegum.jpg');
var chair = new Images('Ass Blaster', 'img-repo/chair.jpg');
var cthulhu = new Images('All Hail Cthulhu', 'img-repo/cthulhu.jpg');
var dogDuck = new Images('Dog Hates Its Life', 'img-repo/dog-duck.jpg');
var dragon = new Images('Dragon Meat', 'img-repo/dragon.jpg');
var pen = new Images('Drawn To Food', 'img-repo/pen.jpg');
var petSweep = new Images('Pet Brooming', 'img-repo/pet-sweep.jpg');
var scissors = new Images('Useless Pizza Scissors', 'img-repo/scissors.jpg');
var shark = new Images('Eaten Asleep', 'img-repo/shark.jpg');
var sweep = new Images('Clean Baby', 'img-repo/sweep.png');
var tauntaun = new Images('I thought they smelled bad on the outside!', 'img-repo/tauntaun.jpg');
var unicorn = new Images('Rainbow Shits', 'img-repo/unicorn.jpg');
var usb = new Images('Tentacle...', 'img-repo/usb.gif');
var waterCan = new Images('FML Can', 'img-repo/water-can.jpg');
var wineGlass = new Images('Cool Wine Glass', 'img-repo/wine-glass.jpg');

if (localStorage.storageArray) {
  var existingLSData = JSON.parse(localStorage.storageArray);
  totalSumClicks += localStorage.totalSumClicksLS;
  for (var i = 0; i < existingLSData.length; i++) {
    imageData[i].clicks += existingLSData[i].clicks;
    imageData[i].displayed += existingLSData[i].displayed;
  }
}

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
  totalSumClicks++;
  if (totalClicks === 25) {
    localStorage.storageArray = JSON.stringify(imageData);
    localStorage.totalSumClicksLS = totalSumClicks;
    showResults();
    image1.removeEventListener('click', renderImages);
    image2.removeEventListener('click', renderImages);
    image3.removeEventListener('click', renderImages);
    imagesection.remove();
  }
}

function showResults() {
  var summarysection = document.getElementById('summarysection');
  var button = document.createElement('button');
  // summarysection.appendChild(button);
  button.id = 'button';
  button.innerText = 'Clear Cache';
  button.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
  });
  var canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.setAttribute('height','300');
  summarysection.appendChild(canvas);
  summarysection.appendChild(button);
  chart();
}

image1.addEventListener('click', renderImages);
image2.addEventListener('click', renderImages);
image3.addEventListener('click', renderImages);
