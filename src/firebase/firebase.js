import * as firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyDMdbDvxy9ezdCtUf0UkQgBoh86M6jSdkc",
    authDomain: "expensify-ac366.firebaseapp.com",
    databaseURL: "https://expensify-ac366.firebaseio.com",
    projectId: "expensify-ac366",
    storageBucket: "expensify-ac366.appspot.com",
    messagingSenderId: "696131513943",
    appId: "1:696131513943:web:cff9ce1497701e88043d12",
    measurementId: "G-1P0WS6J3DF"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name:'Adam Morgan',
    age: 46,
    isSingle: false,
    location : {
        city: 'Grand Island',
        country: 'UnitedStates'
    }
}).then(() => {
    console.log ('Data is saved');
}).catch((e) => {
    console.log ('this failed');
});

// database.ref('age').set(47);
// database.ref('location/city').set('Western New York');

database.ref('attributes').set({
    height: 71,
    weight: 200
}).then(() => {
    console.log('attributes are set');
}).catch((e) => {
    console.log('attributes failed');
});


