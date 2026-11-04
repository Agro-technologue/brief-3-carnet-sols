// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';

//--------------Afichages--------------

function afficherAccueil(){
  console.log('====================================================');
  console.log('       Fderme pédagogique    ');
  console.log('====================================================');
}

function afficherMenu() {
  console.log('');
  console.log('------------------------------MENU------------------');
  console.log('1. Ajouter une observation');
  console.log('2. Lister les observations');
  console.log('3. Rechercher (point, parcelle, texture');
  console.log('4. Trier par pH');
  console.log('5. Synthèse des observations');
  console.log('0. Quitter');
}

//-------------Actions-------------

//Choix 1 : poser les cinq questions, vérifier, ajouter, enregistrer.
async function ajouter(observations) {
  console.log('---- Ajouter une observaztion ----');

  const id = await demander('Point observé(ex. S11) : s11');
  if(id === null) return;
  const parcelle = await demander('Parcelle (ex. P1) : p6')
  if(parcelle === null) return;
  const  texture = await demander('Texture (${TEXTURES.join(',')}) : ');
  if(texture === null) return;
  const pH = await demander('pH (nombre de 0 à 14, sans unité, virgule accptée) : ');
  if (pH === null) return;
  const etatHumide = await demander(`État d'humidité (${HUMIDITES.join(',')}) : `);
  if (etatHumide === null) return;

  // Normalisation avant vérification : majuscule pour le point et la parcelle,
  // minuscule pour la texture et l'état d'humidité, le pH reste tel quel.
  const saisie = {
    id: id.toUpperCase(),
    parcelle: parcelle.toUpperCase(),
    texture: texture.toLowerCase(),
    pH,
    etatHumidite: etatHumide.toLowerCase(),
  };

  const erreurs = ajouterObservation(observations, saisie);
  if (erreurs.length > 0) {
    console.log('Observation refusée :');
    for (const erreur of erreurs) {
      console.log(` -${erreur}`);
    }
    console.log(`Le carnet compte toujours ${observations.length} observation(s).`);
    return;
  }

  await enregistrerJson(FICHIER_DONNEES, observations);
  console.log(`observation ${saisie.id} ajoutée. Le carnet compte ${observations.length} observation.`)
}

//Choix 2 : lister.
function lister(observations) {
  console.log(`---- Liste des observations (${observations.length}) ----`);
  console.log(listerObservations(observations));
}

//Choix 3 : recherche par poiunt, parcelle ou texture.
async function rechercher(observations) {
  console.log('--- Rechercher ---');
  console.log('1. Par point (identifiant)');
  console.log('2. Par parcelle');
  console.log('3. Les observations d\'une texture' );
  const sonChoix = await demander ('Votre choix : ');
  if (sonChoix === null) return;

  switch(sonChoix) {
    case '1' : {
      const saisie = await demander ('Point : ');
      if (saisie === null) return;
      const id = saisie.toUpperCase();
      const observation = trouverParId(observations, id);
      console.log(observation === undefined ? `Observation ${id} introuvable.` : formaterObservation(observation));
      break;
    }
    case '2' : {
      const saisie = await demander ('Parcelle : ');
      if (saisie === null) return;
      const parcelle = saisie.toUpperCase();
      const trouve = filtrerParParcelle(observations, parcelle);
      console.log(`${trouve.length} observation(s) sur la parcelle ${parcelle} :`);
      console.log(listerObservations(trouve));
      break;
    }
    case '3' : {
      const saisie = await demander('Texture : ');
      if (saisie === null) return;
      const texture = saisie.toLowerCase();
      const trouve = filtrerParTexture(observations, texture);
      console.log(`${trouve.length} observation(s) de texture ${texture} :`);
      console.log(listerObservations(trouve));
      break;
    }
    default :
    console.log('Choix inconnu : retour au menu.');
  }
}























































async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
