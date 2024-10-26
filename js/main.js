const element = document.getElementById('enter-button');
const intro = document.getElementById('intro');

element.addEventListener('click', () => {
    intro.classList.add('fade-out');
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
 