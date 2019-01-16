//==================================================================
//        Google authentication
//==================================================================
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9jz6IhZGukay8PVTOebbweJzpY3FtKuo",
    authDomain: "gafinalproject-bd887.firebaseapp.com",
    databaseURL: "https://gafinalproject-bd887.firebaseio.com",
    projectId: "gafinalproject-bd887",
    storageBucket: "gafinalproject-bd887.appspot.com",
    messagingSenderId: "417993721368"
  };
  firebase.initializeApp(config);

//set vars
const submitBtn = document.getElementById("submitBtn");

let mainText = document.getElementById('mainText'),
    writetoPage = document.getElementById('someThing'),
    li = document.createElement('li');


//write to db
submitBtn.addEventListener('click', function(){
    event.preventDefault();
    let database = firebase.database().ref();
    let messageText = mainText.value;
    database.push().set(messageText);
    li.innerHTML = `You typed: ${messageText}`;
    writetoPage.appendChild(li);
     //clear the input
    messageText.innerHTML = ''; // This isnt working
  });

//This is the end of the IFFIIII
  }());