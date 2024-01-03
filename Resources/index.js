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