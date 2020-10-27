
let actualId = 0k

const contacts = {
    favorites: [],
    list: {}
      }
    }
  }

function genId() {
    //con Math.rancdom se puede hacer o mas simple asi:
    return ++actualId;
}

function genContact(name, surname, phones, email, image) {
    return {
        id: genId(),
    name: name,
    surname: surname,
    phones: [
      {
        tag: String || null
        value: String
      }
    ],
    email: String || null,
    image: String // una url de imagen
  }
    }
}

function addContact(contact {
    contact.list[contact.id]
})