$(document).ready(function(){
	$(".post").dotdotdot({after: "a.readmore"});
});

$(window).resize(function(){
	$(".post").dotdotdot( {after: "a.readmore"} );
});


function positioningPicture(picture){
	var mainImageStyles = document.createElement('style'),
		article = document.getElementById("main-article"),
		top = "", left = "", marginTop = "0", marginLeft = "0";

	if(picture.offsetWidth > article.offsetWidth){
		left = " left: -" + (picture.offsetWidth / 2) + "px; ";
		marginLeft = "50%"; }

	if(picture.offsetHeight <= article.offsetHeight) marginTop = (article.offsetHeight - picture.offsetHeight) / 2 + "px";
	else											 top = " top: -" + (picture.offsetHeight - article.offsetHeight) / 2 + "px; ";

	mainImageStyles.classList.add('main-image-styles');
	mainImageStyles.innerHTML = "#main-pict { \n  position: absolute;\n  z-index: 0;\n " + left + "\n " + top + "\n  margin: " + marginTop + " 0 0 " + marginLeft + ";\n  visibility: visible; }";
	document.body.appendChild(mainImageStyles);
};