// Rendu final JS – Génération d'un site web dynamique à partir d'une API
// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères

// fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(nomCommercial => {
//             console.log(nomCommercial.title);
//         });
//     });


// fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
//   .then((response) => response.json()) // transforme la réponse en JSON
//   .then((data) => {
//     const container = document.getElementById("PatisserieContainer");
//     console.log(data);
//     console.log(data.nomCommercial)



fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
  .then((response) => response.json()) // transforme la réponse en JSON
  .then((data) => {
    const container = document.getElementById("mainContainer");
    console.log(data);
    console.log(data.nomCommercial)

    
    let NomBoutique = document.createElement("H1")
    NomBoutique.textContent = data.nomCommercial;
                container.appendChild(NomBoutique);

     let Accroche = document.createElement("p")
    Accroche.textContent = data.phraseAccroche;
                container.appendChild(Accroche);

    let AppelAction = document.createElement("button")
    AppelAction.textContent = data.texteAppelAction;
                container.appendChild(AppelAction);

    let avantages = document.createElement("p")
    avantages.textContent = data.avantagesClients;
                container.appendChild(avantages);



    // let Varproduits = document.createElement("div")
    // Varproduits.textContent = data.produits;
    //             container.appendChild(Varproduits);

    // let Varnom = document.createElement("div")
    // Varnom.textContent = data.nom;
    //             container.appendChild(Varnom);

    //  let Vardescription = document.createElement("div")
    // Vardescription.textContent = data.description;
    //             container.appendChild(Vardescription);

    //  let image = document.createElement("div")
    // image.textContent = data.image-url;
    //             container.appendChild(image);
});


function CardPatisserie(Patisserie) {
  
    let

}

function product(product) {}




//  data.forEach(product => {
//       let card = document.createElement("div");
//       // ajoute une classe pour le style
//       card.classList.add("productCard");
//       // crée une image
//       let img = document.createElement("img");
//       // met l'image et son alt
//       img.src = product.image;
//       img.alt = product.nomCommercial;
//       // crée le titre
//       let title = document.createElement("h2");
//       title.textContent = product.title;
//       // crée le prix
//       let price = document.createElement("p");
//       price.textContent = product.price + " €";
//       // crée un bouton acheter
//       let button = document.createElement("button");
//       button.textContent = "Acheter";
//       button.classList.add("buyButton");
//       // ajoute tout dans la carte
//       card.appendChild(img);
//       card.appendChild(title);
//       card.appendChild(price);
//       card.appendChild(button);
//       // met la carte dans la page
//       container.appendChild(card);
//     });