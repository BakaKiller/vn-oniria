const sqlite = require('sqlite3');
let db = new sqlite.Database('./db/story.db');
let sharedobject = require('electron').remote.getGlobal('sharedObject');

let funcs = {};

funcs.getOption = (name) => {
    if (sharedobject.options.hasOwnProperty(name)) {
        return sharedobject.options[name];
    } else {
        return false;
    }
};

funcs.setOption = (name, value) => {
    if (sharedobject.options.hasOwnProperty(name)) {
        db.run('update options set ? = ?', [name, value], (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            sharedobject.options[name] = value;
            return true;
        })
    } else {
        return false;
    }
};

module.exports = funcs;