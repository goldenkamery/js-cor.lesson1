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
			      var thing = prompt ( "Что достаем из сумки?" );
                              thing in womanBag ? delete womanBag[thing] : alert("В сумке такого нет");
                        },

	setThingInBag: function (thing1, subject) {
			        var thing1 = prompt ( "Что кладем в сумкy?" );
				var subject =  prompt ( "Какой предмет?" )
				womanBag[thing1] = subject;
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

