/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - 2017 Diego Islas Ocampo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Engine Settings.

// Do not modify the ones marked with a *

// Unless you know what you are doing

var engine = {

    // Initial Label *
    "Label": "Start",

    // Number of Save Slots
    "Slots": 10,

    // Current Media *
    "Song": "",
    "Sound": "",
    "Scene": "",

    // Javascript saved from the $ command *.
    "JS": "",

    // Current Statement *.
    "Step": 0,

    // History for the previous function *.
    "MusicHistory": [],
    "SoundHistory": [],
    "ImageHistory": [],
    "CharacterHistory": [],
    "SceneHistory": [],

    // Change to true for a MultiLanguage Game.
    "MultiLanguage": true,

    // Music for the Main Menu.
    "MenuMusic": "Wondering.mp3",

    // Prefix for the Save Slots in Local Storage.
    "SaveLabel": "Save_",
    "AutoSaveLabel": "AutoSave_",

    // Turn main menu on/off; Default: true *
    "ShowMenu": true,

    // Turn image preloading on/off, Default: true
    "Preload": true,

    // Time interval between autosaves (In Minutes). Default: 0 (Off)
    "AutoSave": 0,

    // Enable service workers; Default: true *
    "ServiceWorkers": true,

    // The Aspect Ratio your background images are on. This has no effect on
    // web deployed novels.
    "AspectRatio": "16:9"
}

// Initial Settings
var settings = {

    // Initial Language for Multilanguage Games or for the Default GUI Language.
    "Language": "Français",

    // Initial Volumes from 0.0 to 1.
    "Volume": {
        "Music": 1,
        "Voice": 1,
        "Sound": 1
    },

    // Initial resolution used for Electron, it must match the settings inside
    // the electron.js file. This has no effect on web deployed novels.
    "Resolution": "1280x720"
}

// Persistent Storage Variable
var storage = {
    player: {
        Name: ""
    }
}