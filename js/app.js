// var images = [
// 	'/images/~1.jpg',
// 	'/images/~2.jpg',
// 	'/images/~3.jpg',
// 	'/images/~4.jpg',
// 	'/images/~5.jpg',
// 	'/images/~6.jpg',
// 	'/images/~7.jpg',
// 	'/images/~8.jpg',
// 	'/images/~9.jpg',
// ];


// var mainImage = document.getElementById('main-image');
// var currentImageIndex = 0;


// var miliseconds = 4000
// setInterval(function() {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   mainImage.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
// }, miliseconds);



// document.getElementById('main-image').style.backgroundImage = 'url(' + images[Math.floor(images.length)] + ')';


const toggleNav = () => {
	// basically is the dataset on the nav is true set it to false, otherwise set it to true.
	document.body.dataset.nav = document.body.dataset.nav === "on" ? "off" : "on";
	// document.body.dataset.nav === "off" ? "on" : "off";
}

// var totalCount = 8;
// function ChangeIt() {
// 	var num = Math.ceil( Math.random() * totalCount );
// 	document.body.background = 'bgimages/'+num+'.jpg';
// 	document.body.style.backgroundRepeat = "repeat";// Background repeat
// }
