const { log } = require('node:console');
const path = require('node:path');
const contacts = require('./contacts');

// index.js
const argv = require("yargs").argv;
// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            contacts.listContacts();
            break;

        case "get":
            contacts.getContactById(id)
            break;

        case "add":
            contacts.addContact(name, email, phone)
            break;

        case "remove":
            contacts.removeContact(id)
            break;

        default:
            log(action)
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);