let prev = document.querySelector('.prev');
let mid = document.querySelector('.mid img');
let next = document.querySelector('.next');

console.log(prev.getAttribute('src'))

let iters = [0, 1, 2];
let arr = [prev, mid, next];

// console.log(mid.classList.contains('appear'));

prev.addEventListener('click', function() {
    if(arr[1].classList.contains('appear')){
        arr[1].classList.remove('appear');
    } 

    iters = iters.map(x => x < 2 ? x += 1 : x = 0);
    iters.forEach((el, i) => {
        arr[el].setAttribute('src', `img/${i}.png`);
        arr[1].style.opacity = '0';
    });
    
    setTimeout(() => {
        if(!arr[1].classList.contains('appear')){
            arr[1].classList.add('appear');
        } 
    }, 15);
    
});

next.addEventListener('click', function(e) {
    if(arr[1].classList.contains('appear')){
        arr[1].classList.remove('appear');
    } 
    
    iters = iters.map(x => x > 0 ? x -= 1 : x = 2);
    iters.forEach((el, i) => {
        arr[el].setAttribute('src', `img/${i}.png`);
        arr[1].style.opacity = '0';
    });

    setTimeout(() => {
        if(!arr[1].classList.contains('appear')){
            arr[1].classList.add('appear');
        } 
    }, 100);
});