const cleanBtn = document.querySelector(".clean");
const cocktBtn = document.querySelector(".cockt");
const cleanMenu = document.querySelector(".clean_menu");
const cocktMenu = document.querySelector(".cockt_menu");

cleanMenu.style.display = "none";
cocktMenu.style.display = "none";

cleanMenu.style.display = "block";


cleanBtn.addEventListener("click", function(){
	cocktMenu.style.display = "none";
	cleanMenu.style.display = "block";
})

cocktBtn.addEventListener("click", function(){
	cleanMenu.style.display = "none";
	cocktMenu.style.display = "block";
})


