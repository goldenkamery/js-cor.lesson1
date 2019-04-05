/* Обязательное задание ( 3 балла )
:warning: pure JS
Создайте элемент 'p', при клике на котором появляется картинка размером 100px
При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
При клике на картинке она должна исчезать */


var p = document.body.appendChild(
     document.createElement( 'p' )
);
p.innerText = 'Hello, My Dear Friend! Click here!';

var picture = new Image();
picture.setAttribute ( 'src', 'https://telegraf.com.ua/files/2016/11/443276.jpg' );


p.onclick = function ( event ) {

    ( arguments[0] && arguments[0].nodeType === 1 ? arguments[0] : document.body )
        .appendChild( this )
            .style = `width: 100px`

}.bind ( picture )

picture.onmouseover = event => 
    event.target.style = `
        transition: all 2s;
        width: 200px;
    `

picture.onclick = event => 
    event.target
        .parentNode
            .removeChild( event.target )

/* Приобретаем правильные привычки и делаем выводы! */
/* Поработаем с контейнером для вставки элемента
А вдруг нужно будет вставить не в document.body, а в section какой-нибудь? */
/* const section = document.body.appendChild(
     document.createElement( 'section' )
)

p.onclick = function ( event ) {

    ( arguments[0] && arguments[0].nodeType === 1 ?
         arguments[0] : document.body )
             .appendChild( this )
                .style = `width: 100px`

}.bind ( picture, section ) */
