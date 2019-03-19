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


/* Дополнительно ( 4 балла )
Результат должен быть аналогичен тому, что получится в предыдущем упражнении

Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, 
но и его атрибуты, а так же хотя бы один обработчик события

Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, 
используя как атрибуты тегов, так и свойства элементов DOM */


var tags = [
    {
        name: 'header',
        attrs: {
             className: 'laptop',
             innerText: 'Have no fear of perfection. You’ll never reach it.',
        }
    },
    {
        name: 'footer',
        attrs: {
            className: 'lipa',
            innerText: 'Life is a succession of lessons which must be lived to be understood.',
        }
    },
    {
        name: 'main',
        attrs: {
             className: 'home',
             innerText: 'We do not remember days, we remember moments.',
             title: 'Title'
        }

    },
    {
       name: 'img',
       attrs: {
             src: 'https://cs4.pikabu.ru/post_img/big/2014/11/16/10/1416160054_452602345.png',
             title: 'Title'
        }
    },
    {
        name: 'div',
        attrs: {
             className: 'terrible',
             innerText: 'Happiness is not a destination. It is a method of life.',
        }
    },
    {
        name: 'section',
        attrs: {
            className: 'detective',
            innerText: 'Never say Never!'
        }
        
    }
]

var style = document.head.appendChild( document.createElement('style') )
style.textContent = `
   .laptop, .lipa, .home, .terrible, .detective {
           height: 300px;
           width: 300px;
           padding: 20px;
           font-size: 40px;
  }
  img {
           width: 300px;
  }
  .laptop {
           background-color: #DC143C;
  }
  .lipa {
           background-color: #FF1493;
  }
  .home {
           background-color: #FF4500;
   }
  .terrible {
           background-color: #EE82EE;
   }
  .detective {
          background-color: #9370DB;     
  }
`

function clickHandler(event){
  function randomColor(){
       return Math.round(Math.random() * 255)
  }
  event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}
for(var tag of tags){
   var elem = document.body.appendChild(
        document.createElement(`${tag.name}`)
  )
  for(var attr in tag.attrs)
    elem[attr] = tag.attrs[attr]
    elem.onclick = function (event){
    clickHandler(event)
    }
}


/* Дополнительно ( 5 баллов )
Напилить код, который выбирает все элементы-потомки body ( :warning: кроме элементов script ) и добавляет им класc:

.redBack {
    background-color: red!important;
}
Альтернативный вариант - выбрать все заранее заданные элементы:

var tags = [ "header", "footer", "main", "div", "p" ]
Запустить код в консоли любой страницы

Подсказка: используйте методы объекта classList */


var style = document.head.appendChild(document.createElement('style'));
style.textContent = `.redBack {
   background-color: red!important;
}`

for (var elem of document.body.children) {
  elem.tagName === 'SCRIPT'? null : elem.className = 'redBack';
 };
