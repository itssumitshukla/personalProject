//==================================================================
//        Google authentication
//==================================================================

//Initialize
  // var config = {
  //   apiKey: "AIzaSyA9jz6IhZGukay8PVTOebbweJzpY3FtKuo",
  //   authDomain: "gafinalproject-bd887.firebaseapp.com",
  //   databaseURL: "https://gafinalproject-bd887.firebaseio.com",
  //   projectId: "gafinalproject-bd887",
  //   storageBucket: "gafinalproject-bd887.appspot.com",
  //   messagingSenderId: "417993721368"
  // };
  // firebase.initializeApp(config);



//==================================================================
//          LET THEM IN authentication
//==================================================================

let emailAddress = document.getElementById('inputEmail'),
  passWord = document.getElementById('inputPassword'),
  mainButton = document.getElementById('mainButton');

mainButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (emailAddress.value === 'test@test.com' && passWord.value === 'test') {
    window.location.href = 'page2.html';
  } else if(emailAddress.value === ''){
    window.location.href = 'errorPage.html';
  } else {
    console.log('ERROR')
  }
  e.preventDefault();
}, false);