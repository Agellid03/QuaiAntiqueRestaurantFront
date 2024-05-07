//Implementer le js de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidationInscription = document.getElementById(
  "btn-validation-inscription"
);
const formInscription = document.getElementById("formulaireInscription");
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

btnValidationInscription.addEventListener("click", userInscription);

function sanitizeHtml(text) {
  // Créez un élément HTML temporaire de type "div"
  const tempHtml = document.createElement("div");

  // Affectez le texte reçu en tant que contenu texte de l'élément "tempHtml"
  tempHtml.textContent = text;

  // Utilisez .innerHTML pour récupérer le contenu de "tempHtml"
  // Cela va "neutraliser" ou "échapper" tout code HTML potentiellement malveillant
  return tempHtml.innerHTML;
}

function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const mailOk = validateMail(inputMail);
  const passWordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputValidatePassword
  );

  //Condition pour verifier si tout est requis pour appuyer sur btn inscription
  if (nomOk && prenomOk && mailOk && passWordOk && passwordConfirmOk) {
    btnValidationInscription.disabled = false;
  } else {
    btnValidationInscription.disabled = true;
  }
}

// Verifie si mon Input respecte le format du mail

function validateMail(input) {
  //Definir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value == inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}
//Validation du MDP
function validatePassword(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Validation des champs requis
function validateRequired(input) {
  if (input.value != "") {
    // C'est OK
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    //* Return me permet de retourner une valeur
    return true;
  } else {
    // C'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function userInscription() {
  // Crée un nouvel objet FormData à partir du formulaire contenu dans la variable "formInscription"
  let dataForm = new FormData(formInscription);

  // Crée un nouvel objet Headers pour définir les en-têtes de la requête HTTP
  const myHeaders = new Headers();
  // Ajoute l'en-tête "Content-Type" avec la valeur "application/json"
  myHeaders.append("Content-Type", "application/json");
  // Convertit les données du formulaire en une chaîne JSON
  let raw = JSON.stringify({
    firstName: dataForm.get("nom"),
    lastName: dataForm.get("prenom"),
    email: dataForm.get("email"),
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

  fetch(apiUrl + "registration", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Une erreur est survenue lors de l'inscription");
      }
    })
    .then((result) => {
      alert(
        "Bravo " +
          dataForm.get("prenom") +
          ", vous etes maintenant inscrit , vous pouvez vous connecter !"
      );
      document.location.href = "/signIn";
    })
    .catch((error) => console.error(error));
}
