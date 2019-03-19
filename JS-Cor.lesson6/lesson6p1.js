/* Обязательное задание ( 3 балла )
Создайте массив tags с именами валидных тегов HTML5

Теперь создайте массив classes с именами классов

( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )

Создайте элемент style и вставьте его в head документа

Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes

Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes */


var tags = [ "header", "footer", "main", "div", "section" ];
var classes = [ 'laptop', 'lipa', 'home', 'terrible', 'detective'];
var style = document.head.appendChild(document.createElement('style'));

style.textContent = `
    .laptop, .lipa, .home, .terrible, .detective {
           width: 200px;
           height: 200px;
           border-radius: 50%;
     }
    .lipa {
          background-color: #FFF8DC;
     }
    .home {
          background-color: #808000;
     }
   .terrible {
          background-color: #808080;
    }
   .detective {
          background-color: #0000FF;
    }
   .laptop{
         background-color: #9370DB;
    }
`

for ( var t in tags ) {
  var el = document.createElement ( tags[t] );
  el.classList.add ( classes[t] );
  document.body.appendChild ( el )
}

