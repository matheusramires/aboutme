const clickBtn = document.querySelector("#clickBtn");
const about = document.querySelector('.back');

clickBtn.addEventListener('click', showAboutMe)
about.style.display = "none";

function showAboutMe(){
    clickBtn.style.display = "none";
    about.style.display = "block";
}