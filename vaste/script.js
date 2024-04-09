var image_list = document.querySelector('.image-list');
var slide_buttons = document.querySelectorAll('.slide-button');
var image_item = document.querySelector('.image-item1');

slide_buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        var direction = e.target.id == 'prev-slide' ? -1 :1;
        
        var moveby = image_item.clientWidth
        console.log(moveby.toFixed(2) * direction);
        console.log(moveby * -1);
        console.log(moveby);
        console.log(direction);

        image_list.scrollBy({left:moveby * direction, behavior:'smooth'})
        
    })
})

function PushNav() {
    const navbar = document.getElementById('nav-bar')
    navbar.classList.contains('-translate-y-full')? navbar.classList.remove("-translate-y-full"):navbar.classList.add("-translate-y-full"); 
}