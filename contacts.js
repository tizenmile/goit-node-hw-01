const fs = require('fs').promises;

const contactsPath = fs.readFile('contacts.json');
function listContacts() {
    contactsPath.then(data => console.table(JSON.parse(data.toString())))
}

function getContactById(contactId) {
    contactsPath
        .then(data => console.table(JSON.parse(data.toString()).filter(el => el.id == contactId)));
}

function removeContact(contactId) {
    contactsPath
        .then(data => console.table(JSON.parse(data.toString()).filter(el => el.id != contactId)));
}

function addContact(name, email, phone) {
    contactsPath
        .then(data => {
            const array = JSON.parse(data.toString())
            const id = JSON.parse(data.toString()).length += 1
            const contact = {
                id: id.toString(),
                name,
                email,
                phone,
            }
            array.push(contact)
            console.table(array);
            fs.writeFile('contacts.json', JSON.stringify(array))
        })
}

module.exports = { listContacts, getContactById, removeContact, addContact }