import Route from "./Route.js";

//Définir içi les routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/signIn", "Connexion", "/pages/signIn.html"),
  new Route("/signUp", "Inscription", "/pages/signUp.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";
