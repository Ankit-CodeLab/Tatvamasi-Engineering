/*----------------------------------------------------Menu Icon----------------------------------------------------*/

function changeicon1() {

    var icon = document.getElementById('icon-1');
    
        if(icon.className === "bi bi-menu-button-fill"){
    
        icon.className = "bi bi-menu-button-wide-fill";
    
        } else {
    
        icon.className = "bi bi-menu-button-fill";
    
        }
               
    }

/*----------------------------------------------------Nav bar------------------------------------------------------*/

var menuicon = document.querySelector(".menu-icon")
var smallnav = document.querySelector(".nav-mid")

menuicon.onclick = function(){
    smallnav.classList.toggle("small-nav")
}  

/*--------------------------------------------------Search bar------------------------------------------------------*/

const searchInput = document.getElementById('searchinput');
const searchButton = document.getElementById('searchbutton');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const selectedOption = document.querySelector(`#searchoptions option[value="${searchTerm}"]`);
  if (selectedOption) {
    const link = selectedOption.getAttribute('data-link');
    window.location.href = link;
  }
});

const searchInput2 = document.getElementById('searchinput2');
const searchButton2 = document.getElementById('searchbutton2');

searchButton2.addEventListener('click', () => {
  const searchTerm = searchInput2.value;
  const selectedOption2 = document.querySelector(`#searchoptions2 option[value="${searchTerm}"]`);
  if (selectedOption2) {
    const link = selectedOption2.getAttribute('data-link');
    window.location.href = link;
  }
});