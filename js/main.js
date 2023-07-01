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

var x=0;

function cambioImagen(){
    if(x==0){
        document.getElementById("imgchange").src="img/imagen2.jpg";
        x++
    }else{
        document.getElementById("imgchange").src="img/imagen1.jpg";
        x=0
    }
}

const $tiempo = document.querySelector('.tiempo'), $fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;
    
    let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia}-${showSemana}`
}

setInterval(() => {
    digitalClock()
}, 1000);
