let phrases = ["Essaye plus tard", //Liste des réponses
  "Essaye encore",
  "Pas d'avis",
  "C'est ton destin",
  "Le sort en est jeté",
  "Une chance sur deux",
  "Repose ta question",
  "D'après moi oui",
  "C'est certain",
  "Oui absolument",
  "Tu peux compter dessus",
  "Sans aucun doute",
  "Très probable",
  "Oui",
  "C'est bien parti",
  "C'est non",
  "Peu probable",
  "Faut pas rêver",
  "N'y compte pas",
  "Impossible" ];

window.onload = function (){ //QUand la page est chargée
  let triangle = document.getElementById("triangle");
  let input = document.getElementById("bouton"); //DOM du bouton jouer
  input.addEventListener("click", magicBall); //En cas de clic sur Jouer : executer magicBall();
  function magicBall() {
    hasard = Math.floor(Math.random()*phrases.length); //Nombre entre 0 et 20
    reponse = document.createElement('p'); //Création de la balise réponse
    reponse.textContent = phrases[hasard]; //On prend une phrase au hasard entre 0 et 20;
    if (triangle.firstChild != null) { //SI la réponse existe déjà, la supprimer
      triangle.firstChild.remove();
      triangle.appendChild(reponse); //Et en mettre une nouvelle.
    }else {
      triangle.appendChild(reponse); //Si la réponse n'existe pas, alors l'insérer.
    }
  }
}