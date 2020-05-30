// Object destructuring

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
    // console.log (`It's ${temperature} in ${city}.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'self published'} = book.publisher;
// console.log(publisherName)

// Array destructuring

//const address = ['1299 S. Juniper Street', 'Philadelphia', "Pennsylvania", '19147'];
//const [, city = 'New York', state] = address;  // matched by position
//console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, ,mediumPrice] = item;
console.log(`A ${beverage} costs ${mediumPrice}`)

