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
