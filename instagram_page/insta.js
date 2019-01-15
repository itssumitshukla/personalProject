  //Counter
  let button = document.getElementById("sup"),
    count = 0,
    spanMe = document.getElementById('numCounter');

    // increment function
  // button.onclick = function () {
  //   count += 1;
  //   spanMe.innerHTML = "Likes: " + " " + count;
  // };

  //get all the images
let likeMe = document.querySelectorAll('.card');

likeMe.forEach(function (e) {
    e.addEventListener('click', function () {
      count += 1;
      spanMe.innerHTML = "Likes: " + count;
    })
  }