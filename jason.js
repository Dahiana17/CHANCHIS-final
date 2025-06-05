 window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-head');
    if (window.scrollY > 100) {
      header.classList.add('slidedown');
    } else {
      header.classList.remove('slidedown');
    }
  });

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})
