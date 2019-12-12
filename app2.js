let prev = document.querySelector('.prev');
let mid = document.querySelector('.mid img');
let next = document.querySelector('.next');

prev.addEventListener('click', function() {
    let a = prev.getAttribute('src');
    prev.setAttribute('src', next.getAttribute('src'));
    next.setAttribute('src', mid.getAttribute('src'));
    
    mid.classList.remove('appear');
    mid.style.opacity = "0";
    mid.setAttribute('src', a);
    
    setTimeout(() => {
        mid.classList.add('appear');
    }, 50);
});
