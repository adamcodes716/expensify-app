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

firebase.database().ref().set({
    name:'Adam Morgan'
})