/*Обязательная часть ( 3 балла )
Создайте объект, свойства которого описывают содержимое дамской сумочки
Создайте метод объекта, позволяющий удалить что-то из сумочки
Создайте метод объекта, позволяющий положить что-то в сумочку
*/



var womanBag = {
	cosmetics: 'pomade',
	phone: 'meizum3note',
	accessories: 'mirror',
	keys: 'branch',
	documents: 'passport',

	getThingInBag: function (thing) {
			      var thing = prompt ( "Что достаем из сумки: cosmetics, phone, accessories, keys, documents?" );
                              thing in womanBag ? alert ("Мы достали: " + womanBag[thing]) : alert ("В сумке такого нет");
                              delete womanBag[thing] 
                     },

	setThingInBag: function (thing1, subject) {
			            var thing1 = prompt ( "Что кладем в сумкy?" );
				    var subject = prompt ( "Какой предмет?" );
				    womanBag[thing1] = subject
			            alert ("Мы положили: " + womanBag[thing1]);
                     },
};


womanBag.getThingInBag();
console.log(womanBag);
womanBag.setThingInBag();
console.log(womanBag);



/*Дополнительно ( 4 балла )
Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

📦 Приватные свойства объекта:
    🔑 title ( название книги ),
    🔑 year ( год издания ),
    🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
    🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
        внесение изменений в свойства:
            🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию о наличии книги 
       ( вывести в консоль readerData )
    📋 getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки 
       ( приватное свойство readerName 
         должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод 
       giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
       сбросить значения приватных свойств
       readerName, readerData
Создайте экземпляр книги
Запросите экземпляр от имени ... ( любое имя ) */

var LibraryBook = function ( title = "Без названия", year = "нет данных", author = "нет данных" ) {
                     var title = title
                     var year = year
                     var author = author
                     var readerName = null
                     var readerData = null


		     function giveTheBook ( client, data = new Date() ) {
                           readerName = client
                           readerData = data
                     }


		     this.getBookInfo = function () {
                		            var text = readerName ? "выдана на руки" : "есть в наличии"
                		            console.info ( `${author}, ${title} (${year}): ${text}` )
                                        }


                     this.getTheBook = function ( client, data ) {
                                          if ( readerName ) {
                                                this.getBookInfo ()
                                                return null
                                          } else {
                                              giveTheBook ( client, data )
                                              return {
                                                    title: title,
                                                    year: year,
                                                    author: author
                                              }
                                            }
                                       }


                     this.returnBook = function () {
                                         readerName = null
                                         readerData = null
                                       }
                 }
var books = []
books [0] = new LibraryBook ( "JavaScript. Библия пользователя", "2006", "Майкл Моррисон" )
books [1] = new LibraryBook ( "JavaScript: Подробное руководство", "2008", "David Flanagan" )
books [5] = new LibraryBook ( "Pro Javascript Techniques", "2006", "John Resig" )

console.log ( books )

books [5].getBookInfo()
books [5].getTheBook( "Марина Каменева", new Date ( 2019, 3, 08 ) )
books [5].getBookInfo()
books [5].returnBook()
books [5].getBookInfo()

/* Дополнительно ( 5 баллов )
Объявите конструктор, который создает экземпляры с унаследованным методом addProperty
Метод addProperty должен принимать два аргумента:
-имя свойства
-значение свойства
и добавлять экземпляру новое свойство с указанным именем и значением
*/

function HusbandWife () {}
    HusbandWife.prototype.addProperty = function (name, value) {
        this[name] = value;
    };

var HusbandWife = new HusbandWife ()
HusbandWife.addProperty('husband','Cергей')
HusbandWife.addProperty('wife','Марина')
console.log(HusbandWife)
