const tokenCookieName = "accesstoken";
const btnSignOut = document.getElementById("signOut-btn");
const apiUrl = "http://127.0.0.1:8000/api/";

//*Création d'une variable pour role , pour eviter les conflits et fautes de frappes a l'avenir
const roleCookieName = "role";
btnSignOut.addEventListener("click", signOut);

function signOut() {
  eraseCookie(tokenCookieName);
  eraseCookie(roleCookieName);
  window.location.reload();
}

function getRole() {
  return getCookie(roleCookieName);
}

//*Fonctions set et get Token pour le cookie
function setToken(token) {
  setCookie(tokenCookieName, token, 7); // expire dans 1sem
}

function getToken() {
  return getCookie(tokenCookieName);
}

//*Fonctions pré-faites  ( à etudier )

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// Fonction pour savoir si l'on est connecté ou pas

function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

//? disconnected
//? connexted (admin ou client)
//? - admin
//? - client

function showHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;

      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;

      case "admin":
        if (!userConnected || role != "admin") {
          element.classList.add("d-none");
        }
        break;

      case "client":
        if (!userConnected || role != "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}
