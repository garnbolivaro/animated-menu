let navgation = document.querySelector('.navgation');
document.querySelector('.toggle').onclick = function (){
  this.classList.toggle('active');
  navgation.classList.toggle('active');
}