// Get all the divs
let getIt = document.querySelectorAll('.col-sm-3');

//loop
getIt.forEach(function (e) {
    e.addEventListener("mouseover", function (yo) {
        yo.target.style.color = "red";

        setTimeout(function () {
            yo.target.style.color = "";
        }, 300);
    }, false);

    //testing below this
    e.addEventListener('mouseenter', function () {
        this.classList.add('mopey');
    })
    e.addEventListener('mouseleave', function () {
        this.classList.remove('mopey');
    })
})