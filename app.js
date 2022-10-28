const toggleNav = () => {
	// basically is the dataset on the nav is true set it to false, otherwise set it to true.
	document.body.dataset.nav === "on" ? "off" : "on";
	// document.body.dataset.nav === "off" ? "on" : "off";
}