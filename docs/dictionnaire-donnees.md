# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ             |             Signification        |  Type    |      Règle de validation     | Unité | Exemple |
| ---               | ---                              | -- -     | ---                          | --  - | -    -- |
|      `id`         |           Identifiant unique     |  texte   | non vide, absent des données |   -   |   S05   |
|     `parcelle`    |           Identifiant unique     |  texte   |          non vide            |   -   |   P6    |
|    `texture`      | Classe de texture du sol observé |  texte   | sableux, limoneux ou argileux|   -   | limoneux|
|       `pH`        |    Mesure du pH du sol observé   |  nombre  |     compris entre 0 et 14    |   -   |    8    |
| `etat d'Humidite` |        Etat d'humidité du sol    |  texte   | sec, intermédiaire ou humide |   -   | humide  |

**Listes de valeurs autorisées** : sableux, limoneux ou argileux. 
id : S01, S02, S03. 
etat d'Humidité : sec intermédiaire et humide.

**Sources** : donnees/observations.json et fiche dictionnaire de notre groupe d'expert 
