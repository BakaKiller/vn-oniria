var scriptfr = {
    // The game starts here.
    "Start": [
            "scene main with fadeIn",
            "- Il est tard... Je n'ai aucune idée d'où je suis.",
            "- J'ai froid, j'ai faim, et...",
            "? ...",
            "- Qu'est-ce que c'était ?",
            "- Je suis certaine d'avoir entendu quelque chose...",
            "? ...",
            "mc Il y a quelqu'un ?",
            "? ... Quel est ton nom ?",

            {
                "Input": {
                    "Text": "Entrez votre prénom",
                    "Validation": function (input) {
                        return input.trim().length > 0;
                    },
                    "Save": function (input) {
                        storage.player.Name = input;
                    },
                    "Warning": "Il faut mettre son nom maintenant."
                }
            },

            "? Salut {{player.Name}}...",
            "ao Je suis Amy, Amy Okura !",

            {
                "Choice": {
                    "Dialog": "ao T'as <i>ENFIN</i> lu la p*tain de documentation ?",
                    "Yes": {
                        "Text": "Carrément !",
                        "Do": "jump Yes"
                    },
                    "No": {
                        "Text": "Euh...",
                        "Do": "jump No"
                    }
                }
            }
        ],

    "Yes": [

            "ao Bon chien.",
            "ao Du coup t'attends quoi ?",
            "ao Tu veux un cookie c'est ça ?",
            "ao Va faire ton jeu de m*rde, pauvre naze.",
            "end"
        ],

    "No": [

            "ao Je suis <i>TELLEMENT</i> pas surprise.",

            "display message Aide",

            "ao C'est bon là ?",
            "ao Maintenant, casse toi faire ton p*tain de jeu.",
            "ao <i>*smirk*</i> Grosse m*rde.",
            "scene main with fadeIn",
            "ao Oh, et voilà ta sal*perie de fond d'écran.",
            "ao T'es content maintenant ?",
            "end"
        ]
};