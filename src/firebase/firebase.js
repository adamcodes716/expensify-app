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

export { firebase, database as default }; // make this usable anywhere

/* // child_removed - a new event
database.ref('expenses').on('child_removed', (snapshot) => { // a different event
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => { // a different event
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => { // a different event
    console.log(snapshot.key, snapshot.val());
}); */

/* 

 const onValueChange = database.ref().on('value',  (snapshot) => {
    const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key, // array requires an id
                ...childSnapshot.val() // spread out the rest of the object
            });
        });
        console.log(expenses)
}, (e) => {
    console.log('Error with data fetching', e);
}); */

/* database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key, // array requires an id
                ...childSnapshot.val()
            });
        });
        console.log(expenses)
    });
    */

/*  database.ref('expenses').push({
    description: 'First expenses!',
    note:  'first note',
    amount: 346.97,
    createdAt: 1000
}); */ 

// database.ref('notes/-M9TrJbBicjUcChF4i4G').remove();

/* database.ref('notes/-M9TrJbBicjUcChF4i4G').update({
    body:  'This is a new body'
}); */

/* database.ref('notes').push({
    title: 'Second Note!',
    body:  'This is another note'
}); */

/* const firebaseNotes = {
    notes : {
        1234: {
            title: 'First NOte!',
            body:  'This is my note'
        },
        1235: {
            title: 'Another NOte!',
            body:  'This is my note'
        }
    }
}; */

/* database.ref().on('value', (snapshot) => { 
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})
.catch((e) => {
    console.log('Error fetching data', e);
});  */



/* const onValueChange = database.ref().on('value',  (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(55);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(65);
}, 10500); */

/* database.ref()
.once('value')
.then((snapshot) => {  // snapshot is return value
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
    console.log('Error fetching data', e);
}); */

/* database.ref().set({
    name:'Adam Morgan',
   age: 46,
   stressLevel: 6,
   job: {
        title: 'Software Developer',
        company: 'Google'
   }, 
   location : {
        city: 'Grand Island',
        country: 'UnitedStates'
   }
 }).then(() => {
    console.log ('Data is saved');
 }).catch((e) => {
    console.log ('this failed');
 });

database.ref('isSingle').remove()
    .then(() => {
        console.log('removed isSingle');
    })
    .catch(() => {
        console.log('error removing isSingle');
    });

    database.ref().update({
        stressLevel: 7,
        'location/city': 'Seattle'
    }); */



