/* Обязательное задание ( 3 балла )
:warning: pure JS
Создайте элемент 'p', при клике на котором появляется картинка размером 100px
При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
При клике на картинке она должна исчезать */


var p = document.body.appendChild(
     document.createElement( 'p' )
);
p.innerText = 'Hello, My Dear Friend! Click here!';

var picture = document.createElement( 'img' );
picture.setAttribute ( 'src', 'https://telegraf.com.ua/files/2016/11/443276.jpg' );
picture.style = `display: none`;

p.onclick = ( event ) => {
    document.body.appendChild(picture);
    picture.style = `width: 100px`
}

picture.onmouseover = ( event ) => {
 picture.style = `
       transition: all 2s;
       width: 200px;
    `
}

picture.onclick = ( event ) => {
    document.body.removeChild(picture)
}



/* Дополнительно ( 4 балла )
Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout

var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)

Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель
Установите значение #ff00ff50 атрибута background-color каждому элементу
Установите значение dotted 1px yellow; атрибута border каждому элементу
При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050
При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение
При наступлении события click элемент должен быть удален
При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" ) */


var collection = []

function over ( event ) {
    event.target.style.backgroundColor = "#ffff0050"
}
function out ( event ) {
    event.target.style.backgroundColor = "#ff00ff50"
}
function clickHandler ( event ) {
    event.target.remove()
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        var elem = ( index ? 
			collection [ index - 1 ] :
			document.body )
	    .appendChild ( document.createElement('div') )
        collection.push ( elem )
        elem.style = `
            width:  ${( arr.length - index ) * 100}px;
            height: ${( arr.length - index ) * 100}px;
            background-color: #ff00ff50;
        `
        elem.title = tag
        elem.addEventListener ( "mouseover", over )
        elem.addEventListener ( "mouseout", out )
        elem.onclick = clickHandler
	}
)



/* Дополнительно ( 5 баллов )
Условия предыдущего задания изменить так:
var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
:warning: при удалении элемента его потомки должны оставаться */


var collection = []

function over ( event ) {
    event.target.style.backgroundColor = "#ffff0050"
}
function out ( event ) {
    event.target.style.backgroundColor = "#ff00ff50"
}
function clickHandler ( event ) {
	event.target.parentNode.appendChild ( event.target.firstChild )
     event.target.remove()
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    function ( tag, index, arr  ) {
        var elem = ( index ? 
		  collection [ index - 1 ] :
		  document.body )
	    .appendChild ( document.createElement('div') )
        collection.push ( elem )
        elem.style = `
            width:  ${( arr.length - index ) * 100}px;
            height: ${( arr.length - index ) * 100}px;
            background-color: #ff00ff50;
        `
        elem.title = tag
        elem.addEventListener ( "mouseover", over )
        elem.addEventListener ( "mouseout", out )
        elem.onclick = clickHandler
	}
)
