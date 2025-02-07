let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let totalItem = 6;
let count = 0;

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item'); // Fetch the latest items
    if (count >= totalItem) {
        count = 0;
    }
    slide.appendChild(items[0]); // Move first item to the end
    count++;
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item'); // Fetch the latest items
    if (count <= 0) {
        count = totalItem - 1;
    } else {
        count--;
    }
    slide.prepend(items[items.length - 1]); // Move last item to the beginning
});
