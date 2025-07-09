
// Fonction pour générer un mot de passe
function generer() {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let motDePasse = "";
    for (let i = 0; i < 12; i++) {
        motDePasse += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("resultat").innerText = motDePasse;
    document.getElementById("resultat").style.setProperty("color", "red");
    document.getElementById("resultat").style.setProperty("font-size", "20px");
}


// Fonction pour copier le mot de passe dans le presse-papiers
// Utilise l'API Clipboard pour copier le texte
function copierMotDePasse() {
    const resultat = document.getElementById("resultat").innerText;
    if (resultat) {
        navigator.clipboard.writeText(resultat)
            .then(() => alert("Mot de passe copié !"))
            .catch(() => alert("Erreur lors de la copie."));
    } else {
        alert("Aucun mot de passe à copier.");
    }
}


// Fonction pour rafraîchir la page
// Réinitialise le texte du mot de passe et les styles
function rafraichir() {
    document.getElementById("resultat").innerText = "";
    document.getElementById("resultat").style.setProperty("color", "black");
    document.getElementById("resultat").style.setProperty("font-size", "16px");
}