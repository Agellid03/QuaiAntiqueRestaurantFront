export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.autorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["admin"] -> Réserver aux utilisateurs avec le role admin 
["client"] -> Réserver aux utilisateurs avec le role client
["admin", "client"] -> Réserver aux utilisateurs avec le role client ou admin
["disconnected"] -> Réserver aux utilisateurs déconnecté 
*/
