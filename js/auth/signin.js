const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnsignIn = document.getElementById("btnSignIn");
const signInForm = document.getElementById("formulaireConnexion");

btnsignIn.addEventListener("click", checkCredentials);
function checkCredentials() {
  // Crée un nouvel objet FormData à partir du formulaire contenu dans la variable "formInscription"
  let dataForm = new FormData(signInForm);

  // Crée un nouvel objet Headers pour définir les en-têtes de la requête HTTP
  const myHeaders = new Headers();
  // Ajoute l'en-tête "Content-Type" avec la valeur "application/json"
  myHeaders.append("Content-Type", "application/json");
  // Convertit les données du formulaire en une chaîne JSON
  let raw = JSON.stringify({
    username: dataForm.get("email"),
    password: dataForm.get("mdp"),
  });

  // Configure les options de la requête HTTP
  const requestOptions = {
    // Méthode de la requête : "POST" pour envoyer des données au serveur
    method: "POST",
    // Définit les en-têtes de la requête en utilisant l'objet Headers créé précédemment
    headers: myHeaders,
    // Corps de la requête : les données JSON converties en chaîne
    body: raw,
    // Redirection à suivre en cas de besoin ("follow" suit automatiquement les redirections)
    redirect: "follow",
  };

  fetch(apiUrl + "login", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
      }
    })
    .then((result) => {
      const token = result.apiToken;
      setToken(token);

      //placer ce token en cookie
      setCookie(roleCookieName, result.roles[0], 7);

      window.location.replace("/");
    })
    .catch((error) => console.error(error));
}
