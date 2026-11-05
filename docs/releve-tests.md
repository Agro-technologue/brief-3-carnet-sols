# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme.
-Nombre total d'observation :  10
-pH minimum : 4.8
-pH maximum : 7.6
-Nombre de textures :   sableux (3) sur S01; S04; S08
                        limoneux (4) sur S02; S05; S07; S10
                        argileux (3) sur S03; S06; S09
-"id": "S04",
    "parcelle": "P2",
    "texture": "sableux",
    "pH": 4.8
    "etatHumidite": "sec"
-S99 : introuvable

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

|       Action            |                  Attendu                    |        Obtenu                    |      Testeur   |
| ---                     | ---                                         | ---                              | ---            |
|   ajout valide          | l'observation doit etre ajoutée             |         observation ajoutée      |Agro-technologue|
|chaque règle refusée     |     Aucune observation enregistrée          |   Aucune observation enregistrée |Agro-technologue|
|une recherche introuvable|       introuvable                           |    Observation S30 introuvable   |Agro-technologue|
|chaque tri (pH croissant)|         tri succès                          |            tri succès            |Agro-technologue|
|la synthèse              | affichage des statistiques de l'observation | succès affichage des statistiques|Agro-technologue|
|un choix inconnu         |        Aucune observation enregistrée       |   aucune observation enregistrée |Agro-technologue|

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
