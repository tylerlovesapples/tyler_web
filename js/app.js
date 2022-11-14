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

