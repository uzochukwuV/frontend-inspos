var image_list = document.querySelector('.image-list');
var slide_buttons = document.querySelectorAll('.slide-button');


slide_buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        var direction = e.target.id == 'prev-slide' ? -1 :1;
        
        var moveby = image_list.clientWidth
        console.log(moveby.toFixed(2) * direction);
        console.log(moveby * -1);
        console.log(moveby);
        console.log(direction);

        image_list.scrollBy({left:moveby * direction, behavior:'smooth'})
        
    })
})