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


    // debut info
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
 


  // les cartes produits
    let produit = data.produits;
              
    produit.forEach(element => {

     const patisserieContainer = document.getElementById("PatisserieContainer");


      let carteProduitDiv = document.createElement("div");
          carteProduitDiv.classList.add("carteProduitDiv");

      let Cartetitreh2 = document.createElement("h2");
          Cartetitreh2.textContent = element.nom;

      let CarteDescriptionP = document.createElement("p");
          CarteDescriptionP.textContent = element.description;

      let image = document.createElement("img");
             image.src = element["image-url"];
             image.alt = element.nom;

        carteProduitDiv.appendChild(Cartetitreh2);
        carteProduitDiv.appendChild(image);
        carteProduitDiv.appendChild(CarteDescriptionP);

        patisserieContainer.appendChild(carteProduitDiv);
   
});

// les ServicesContainer

    let ServicesC = data.services;
              
    ServicesC.forEach(element => {

     const ServicesContainer = document.getElementById("ServicesContainer");


      let carteServicesDiv = document.createElement("div");
          carteServicesDiv.classList.add("carteServicesDiv");

      let Carteservicesh3 = document.createElement("h3");
          Carteservicesh3.textContent = element.nom;

      let Carteservices = document.createElement("p");
          Carteservices.textContent = element.description;

        carteServicesDiv.appendChild(Carteservicesh3);
        carteServicesDiv.appendChild(Carteservices);

        ServicesContainer.appendChild(carteServicesDiv);
   
});









// // les TémoignagesContainer
    let TémoignagesC = data.temoignages;
              
TémoignagesC.forEach(element => {

  const TémoignagesCont = document.getElementById("TémoignagesC");


      let TémoignagesDiv = document.createElement("div");
          TémoignagesDiv.classList.add("TémoignagesDiv");

      let Témoignagesh2 = document.createElement("h2");
          Témoignagesh2.textContent = element.prenom;

       let Témoignagesh3 = document.createElement("h3");
          Témoignagesh3.textContent = element.typeExperience;

      let CarteDescriptionP = document.createElement("p");
          CarteDescriptionP.textContent = element.commentaire;

           let CarteNoteP = document.createElement("p");
           CarteNoteP.textContent = element.note;

        TémoignagesDiv.appendChild(Témoignagesh2);
        TémoignagesDiv.appendChild(Témoignagesh3);
        TémoignagesDiv.appendChild(CarteDescriptionP);
        TémoignagesDiv.appendChild(CarteNoteP);

  TémoignagesCont.appendChild(TémoignagesDiv);
});




 });