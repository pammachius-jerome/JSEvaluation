// Déclaration des variable global
let insertionPhoto = document.getElementById("insertionPhoto");
let selectionDemande = document.getElementById("selectionDemande");
let zoneDeText = document.getElementById("zoneDeText");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let photo = document.getElementById("photo");
let nouveauClient;
let ecouteFormulaire = document.getElementById("ecouteFormulaire");

// création de la classe client
class Client {
    constructor (selectionDemande, zoneDeText, prenom, nom, email, photo) {
        this.selectionDemande = selectionDemande;
        this.zoneDeText = zoneDeText;
        this.prenom = prenom; 
        this.nom = nom;
        this.email = email;
        this.photo = photo;
    }
};

// fonction qui construit l'instance cliennt
function demandeClient() {
    
    nouveauClient = new Client(selectionDemande.value, zoneDeText.value, prenom.value, nom.value, email.value, photo.value);
    // console.log de vérification de la construction de notre objet
    console.log(nouveauClient);
};

// fonction qui gère l'affichage des images

function affichageImage () {
    insertionPhoto.innerHTML = '<img src="photos/' + photo.value + '.jpg" class="img-thumbnail" alt="photo de ' + photo.value + '">';
    demandeClient();
};

insertionPhoto.innerHTML = '<img src="photos/neutre.jpg" class="img-thumbnail" alt="photo neutre"></img>';
