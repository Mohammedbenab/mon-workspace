/* 
Activité : gestion des contacts
*/
class Contacts {
constructor (prenom, nom){
    this.prenom = prenom;
    this.nom = nom;
};
}

// Fonction permetant d'afficher le menu dans la console
function afficherMenu(){
    console.log("1: Afficher tous les contacts");
    console.log("2: Ajouter un nouveau contact");
    console.log("0: Quitter le menu");
}

// Fonction qui affiche tous les conctacts enregistés
   function afficherContacts(){
    listeContacts.forEach(Contacts=>{
        console.log(Contacts);
    });
}

// Fonction permetant d'executer les instructions du menu
function choixOption(){
    let option = "";
    while (true){
        option = prompt("Entrer votre choix à partir du menu");
        if (option === "0"){
            return "Au revoir !";
        }if (option === "1"){
            console.log("Voici tous vos contacts");
            afficherContacts();
            afficherMenu();
        }else if (option === "2"){
            const prenom = prompt("Entrer le Prénom du contact que vous souhaitez ajouter");
            const nom = prompt("Entrer le Nom du contact que vous souhaitez ajouter");
            listeContacts.push(new Contacts(prenom, nom));
            console.log("Le nouveau contact a bien été créé");
            afficherMenu();
        }else {
            console.log("Votre choix et incorrecte !");
            afficherMenu();
        }
    }
}
console.log("Choisir une option dans le menu");
afficherMenu();
const listeContacts = [];
listeContacts.push(new Contacts("Carole", "Lévisse"));
listeContacts.push(new Contacts("Mélodie", "Nelseonne"));
console.log(choixOption());
