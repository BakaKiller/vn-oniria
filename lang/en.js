var scripten = {
    // The game starts here.
    "Start": [
        "scene main with fadeIn",
        "- It is late... I have no idea where I am.",
        "- I am cold, I am hungry, and...",
        "? ...",
        "- What was that ?",
        "- I could swear I heard something...",
        "? ...",
        "mc Is there anyone ?",
        "? ... What is your name ?",

        {
            "Input": {
                "Text": "Write your name",
                "Validation": function (input) {
                    return input.trim().length > 0;
                },
                "Save": function (input) {
                    storage.player.Name = input;
                },
                "Warning": "You really have to put one."
            }
        },

        "? Hi {{player.Name}}...",
        "ao My name's Amy, Amy Okura !",

        {
            "Choice": {
                "Dialog": "ao Have you <i>FINALLY</i> read the freacking documentation ?",
                "Yes": {
                    "Text": "Sure thing",
                    "Do": "jump Yes"
                },
                "No": {
                    "Text": "Nope",
                    "Do": "jump No"
                }
            }
        }
    ],

    "Yes": [

        "ao Good puppy.",
        "ao Then what the heck are you waiting for ?",
        "ao Want me to babysit you or somthing ?",
        "ao Go make your shitty game you dickhead.",
        "end"
    ],

    "No": [

        "ao I am <i>SO</i> unsurprised.",

        "display message Help",

        "ao Got it now ?",
        "ao Now get the fuck away and make your damn game.",
        "ao <i>*smirk*</i> Dickhead.",
        "scene main with fadeIn",
        "ao Oh, and this is your goddamn background.",
        "ao Happy now ?",
        "end"
    ]
};