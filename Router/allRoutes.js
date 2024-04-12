import Route from "./Route.js";

//Définir içi les routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route(
    "/signIn",
    "Connexion",
    "/pages/auth/signIn.html",
    "/js/auth/signin.js"
  ),
  new Route(
    "/signUp",
    "Inscription",
    "/pages/auth/signUp.html",
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route(
    "/editPassword",
    "Changement de mot de passe",
    "/pages/auth/editPassword.html"
  ),
  new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
  new Route("/reserver", "Rserver", "/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";
