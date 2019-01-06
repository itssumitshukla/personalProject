
//======================
//Google authentication
//======================

//Initialize
// var config = {
//     apiKey: "AIzaSyBzexAHQM6IMjbC_q3B_z6RF0BKEC_qQWg",
//     authDomain: "first-gatest-project-fanpage.firebaseapp.com",
//     databaseURL: "https://first-gatest-project-fanpage.firebaseio.com",
//     projectId: "first-gatest-project-fanpage",
//     storageBucket: "first-gatest-project-fanpage.appspot.com",
//     messagingSenderId: "1069716982485"
//   };
//   firebase.initializeApp(config);



//======================
//LET THEM IN authentication
//======================

let emailAddress = document.getElementById('inputEmail'),
    passWord = document.getElementById('inputPassword'),
    mainButton = document.getElementById('mainButton');

mainButton.addEventListener('click', function(e){
  e.preventDefault();
  if(emailAddress.value==='test@test.com' && passWord.value==='test'){
    //windows.location.asign = 'http://www.yahoo.com';
    // windows.location.asign('http://www.yahoo.com');
    window.location.href = 'page2.html';
    console.log(`The value for email was ${emailAddress.value} and password was ${passWord.value}`)
  } else {
    console.log(`The value for email was ${emailAddress.value} and password was ${passWord.value}`)
  }
  e.preventDefault();
}, false);

