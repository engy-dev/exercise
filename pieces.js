// fetching database of wares
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
for (let i = 0; i < pieces.length; i++) {


    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;
    const nomElement = document.createElement("h2");
nomElement.innerText = pieces[i].nom;
const descriptionElement = document.createElement("p");
despcriptionElement.innerText = pieces[i].description ?? "(Pas de description pour le moment.)";
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
const availablilityElement = document.createElement("p");
availablilityElement.innerText = pieces[i].available ? 'En stock' : 'Rupture de stock';
    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(availablilityElement);
    }

    // sorting of content
    const boutonTrier = document.querySelector(".btn-trier");
    boutonTrier.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix;
         });
         console.log(piecesOrdonnees);
     });

     const bouton2eTrier = document.querySelector(".btn2e-trier");
     bouton2eTrier.addEventListener("click", function () {
        const piecesDecroissant = Array.from(pieces);
        piecesDecroissant.sort(function (a,b) {
            return b.prix - a.prix;
        });
        console.log(piecesDecroissant);
     })

     // filtering content
     const boutonFiltrer = document.querySelector(".btn-filtrer");

     boutonFiltrer.addEventListener("click", function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= 35;
        });
    });

    const bouton2eFiltrer= document.querySelector(".btn2e-filtrer");
    bouton2eFiltrer = addEventListener("click", function () {
        const piecesAvecDescription= pieces.filter(function (piece) {
            return piece.description;
        })
        console.log(piecesAvecDescription)
    })
    const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
console.log(noms)
//creating affordable items list 
const abordablesElements = document.createElement('ul');
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
document.querySelector('.abordables')
   .appendChild(abordablesElements)