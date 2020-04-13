function media(){
    if (window.screen<768){
        
    }
}
function disabled_button(){
    $('.main-container__button').attr("disabled",false);
    $(event.target).attr("disabled",true);
}
function display(){
    $('.main-container__info-road').css("display","none")
}
function cordRus(){
    $('.main-container__h4').html('Координаты офиса в <span class="span">&nbsp;Москве (Российская Федерация)</span>')
    $('.main-container__map-img').attr("src","img/map.png");
    $('.main-container__info-road').css("display","");
    $('.main-container__info').html(` 
    <p class="main-container__p">Круглосуточная телефонная линия в Москве: <span class="main-container__span">+ 7 495 987 17 75;</span></p>
    <p class="main-container__p">Факс: <span class="main-container__span">+38 044 2720061;</span></p>
    <p class="main-container__p">Так же см. <a class="main-container__a main-container__a_color main-container__a_size" href="#">Круглосуточный Call-центр поддержки туристов</a></p>
    <p class="main-container__p">Skype name: <span class="main-container__span">savitar.ops</span></p>
    <p class="main-container__p">Оперативный отдел: <span class="main-container__span">svg@savitar-gr.com</span></p>
    <p class="main-container__p">Отдел по развитию сети: <span class="main-container__span">network@savitar-gr.com</span></p>
    <p class="main-container__p">С 10:00 до 18:00 по будням. Для несрочных запросов о возможностях организации медицинской помощи.</p>
    <p class="main-container__p">Адрес: <span class="main-container__span">Москва, 127051, пер. Большой Каретный, д.20/3, 1,2-ой подъезд, 3-й этаж</span> </p>`)
}
function cordUK(){
    $('.main-container__h4').html('Координаты офиса в <span class="span">Киеве (Украина)</span>')
    $('.main-container__map-img').attr("src","img/mapUK.png");
    display();
    $( ".main-container__info" ).html(`
    <p class="main-container__p">Круглосуточная телефонная линия в Киеве: <span class="main-container__span">+ 380 44 599 54 04;</span></p>
    <p class="main-container__p">Факс: <span class="main-container__span">+38 044 2720061;</span></p>
    <p class="main-container__p">Так же см. <a class="main-container__a main-container__a_color main-container__a_size" href="#">Круглосуточный Call-центр поддержки туристов</a></p>
    <p class="main-container__p">Skype name: <span class="main-container__span">savitar044</span></p>
    <p class="main-container__p">Оперативный отдел: <span class="main-container__span">ukr@savitar-gr.com.ua </span></p>
    <p class="main-container__p">Адрес: <span class="main-container__span">Украина, 04053 Киев, Кудрявский спуск д. 4</span> </p>`);
}
function cordTurk(){
    $('.main-container__h4').html('Координаты офиса в <span class="span">Анталье (Турция)</span>')
    $('.main-container__map-img').attr("src","img/mapTURK.png");
    display();
    $( ".main-container__info" ).html(`
    <p class="main-container__p">Круглосуточная телефонная линия: <span class="main-container__span">+90 242 312 60 44 , <br/>+90 242 312 60 55,</span></p>
    <p class="main-container__p">Так же см. <a class="main-container__a main-container__a_color main-container__a_size" href="#">Круглосуточный Call-центр поддержки туристов</a></p>
    <p class="main-container__p">Оперативный отдел: <span class="main-container__span">info@medicline.com.tr</span></p>
    <p class="main-container__p">Адрес: <span class="main-container__span">Etiler Mah. 839 Sok. Platin Antalya İş Mrk. No: 17/302 Kat:3 D:25 Muratpaşa/ANTALYA</span> </p>`);
}
function cordEgypt(){
    $('.main-container__h4').html('Координаты офиса в <span class="span">Хургаде (Египет)</span>')
    $('.main-container__map-img').attr("src","img/mapEgypt.png");
    display();
    $( ".main-container__info" ).html(`
    <p class="main-container__p">Круглосуточная телефонная линия в Хургаде: <span class="main-container__span">+20 106 957 99 99;</span></p>
    <p class="main-container__p">Так же см. <a class="main-container__a main-container__a_color main-container__a_size" href="#">Круглосуточный Call-центр поддержки туристов</a></p>
    <p class="main-container__p">Оперативный отдел: <span class="main-container__span">sme@savitar-gr.com</span></p>
    <p class="main-container__p">Адрес: <span class="main-container__span">Египет, Хургада, Эль мамша, Сара СитиМол, 1-1</span> </p>`);
}
