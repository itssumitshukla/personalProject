// Get all the divs
let getIt = document.querySelectorAll('.col-sm-3');

//loop
getIt.forEach(function(e){
    e.addEventListener("mouseover", function(yo) {   
        yo.target.style.color = "red";

        setTimeout(function() {
          yo.target.style.color = "";
        }, 300);
      }, false);
     
    e.addEventListener("click", function() {  //this is togglinging class to increase/decrease divs
        e.classList.toggle('mopey')
    })
})
