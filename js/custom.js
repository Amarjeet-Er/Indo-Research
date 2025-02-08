let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let items = document.querySelectorAll('.item')
let totalItem = 6;
let count = 0;
next.addEventListener('click', function(){
if(count > 6){
    count = 0;
}
   
    document.querySelector('.slide').appendChild(items[count])
    count++;
})

prev.addEventListener('click', function(){
    if(count < 0){
        count = 0;
    }
    document.querySelector('.slide').prepend(items[count]) 
    count--;
})