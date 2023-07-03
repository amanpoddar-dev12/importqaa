const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        body.style.background = 'black';
        body.style.color = '#e2ebf0';
        body.style.transition = '2s';

    }

    else{
        body.style.background = '#e2ebf0';
        body.style.color = 'black';
        
        body.style.transition = '2s';
    }
});