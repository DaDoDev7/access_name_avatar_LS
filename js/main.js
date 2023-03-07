var btn = document.querySelector('.button');
var profile = document.querySelector('.profile');
var form = document.querySelector('.form');
var settings =document.querySelector('.settingsicon')

var nameData = localStorage.getItem('nameID');
var textprofile =document.querySelector('.textprofile');

var inputurlimage = document.querySelector('.urlimage')
var round = document.querySelector('.round')
var input = document.querySelector('.input')

function insertData() {
    textprofile.innerHTML ="Bonjour ," + localStorage.getItem('nameID');
    round.innerHTML = `<img src="${localStorage.getItem('urlimage')}" alt="">`
}

if (nameData) {
    form.classList.toggle('pop')
    profile.classList.toggle('pop');
    textprofile.innerHTML = nameData;
    form.style.animation = "none"; 

     
}

btn.addEventListener('click', function() {
    

    form.classList.toggle('pop')
    profile.classList.toggle('pop');
    
    localStorage.setItem('nameID', input.value);
    localStorage.setItem('urlimage', inputurlimage.value)
    
    insertData()

   
});

insertData()

settings.addEventListener('click', function() {
    profile.classList.toggle('pop')
    form.classList.toggle('pop')
    inputurlimage.value = localStorage.getItem('urlimage') 
    input.value = localStorage.getItem('nameID')
    

});




