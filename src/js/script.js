function toggleClassActive() {
    $('.btn-mobile-wrapper').toggleClass('active');
}

function openNav() {
    console.log('hello')
    document.getElementById("nav-bar").style.display = "block";
    
  }
  
  function closeNav() {
    document.getElementById("nav-bar").style.display = "none";
  }