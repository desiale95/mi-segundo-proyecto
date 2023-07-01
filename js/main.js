const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function(item) {
    
    item.addEventListener('click', function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });

});

let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');

toggle.addEventListener('change',(event)=>{
        let checked=event.target.checked;
        document.body.classList.toggle('dark');
        if (checked==true){
            label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
            label_toggle.style.color="yellow";
            document.getElementById("imgchange").src="img/imagen3.jpg";
        }else{
            label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
            label_toggle.style.color="rgba(214, 8, 50, 0.936)";
            
        }
});