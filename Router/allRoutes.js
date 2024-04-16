import Route from "./Route.js";

//Définir içi les routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "La galerie", "/pages/galerie.html", []),
  new Route(
    "/signIn",
    "Connexion",
    "/pages/auth/signIn.html",
    ["disconnected"],
    "/js/auth/signin.js"
  ),
  new Route(
    "/signUp",
    "Inscription",
    "/pages/auth/signUp.html",
    ["disconnected"],
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html", [
    "client",
    "admin",
  ]),
  new Route(
    "/editPassword",
    "Changement de mot de passe",
    ["client", "admin"],
    "/pages/auth/editPassword.html"
  ),
  new Route(
    "/allResa",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    ["client"]
  ),
  new Route("/reserver", "Rserver", "/pages/reservations/reserver.html", [
    "client",
  ]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";
