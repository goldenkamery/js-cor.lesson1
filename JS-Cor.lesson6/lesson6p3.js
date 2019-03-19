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
