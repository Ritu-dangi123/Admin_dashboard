//navbar show
let Open = false;
function humnavbar() {
  let nav = document.querySelector(".navbar");

  if (Open) {
    nav.style.left = "-300px"; 
  } else {
    nav.style.left = "0"; 
  }

  Open = !Open; 

  nav.style.display = "block"
}

// navbar hide
function navhide(){
  let nav = document.querySelector(".navbar");
  nav.style.display = "none"
}
