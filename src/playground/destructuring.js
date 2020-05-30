const person = {
    name: 'Adam',
    age: 46,
    location:{
        city: 'Grand Island',
        temp: 60
    }
}

const {name: firstName = '', age} = person;

// const name = person.name;
// const age = person.age;

const{city, temp: temperature} = person.location; 

if (city && temperature) {
     console.log (`It's ${temperature} in ${city}.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'self published'} = book.publisher;
console.log(publisherName)