import "../SCSS/styles.scss";
import "./recipie-detail";
import "./index01";
import "./recipies";



//Funcion para esconder footer cuando detecta teclado en el celular
const footer = document.querySelector("footer");

window.addEventListener("resize", (e) => {
    if (window.innerHeight > 720) {
        footer.style.visibility = "visible";
    } else {
        footer.style.visibility = "hidden";
    }
});

let fondos = new Array();
fondos[0] = "../assets/Images/fondo1.jpg";
fondos[1] = "../assets/Images/fondo2.jpg";
fondos[2] = "../assets/Images/fondo3.jpg";
fondos[3] = "../assets/Images/fondo4.jpg"

//Declaro algunas variables
const random = document.getElementById("random");

//Funcion para traer receta random
function getRandomMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals[0];
            window.location.href = `/recipie-detail.html?id=${meal.idMeal}`;
        });
}
//Agregamos Event Listeners
if(random) {
random.addEventListener("click", getRandomMeal)
}
