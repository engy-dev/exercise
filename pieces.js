// fetching database of wares
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
for (let i = 0; i < pieces.length; i++) {

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img.
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = pieces[i].image;
    // Idem pour le nom, le prix et la catégorie...
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