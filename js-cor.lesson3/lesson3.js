//Обязательная часть
//Объявите функцию без формальных параметров, которая выводит в консоль сама себя и все переданные ей аргументы
//Вызовите эту функцию с аргументами 10, false, "google"

function smallFunct () {
	console.log(arguments.callee),
	console.log(Array.from(arguments))
};

smallFunct(10, false, "google");

//Дополнительно
//Объявите функцию userInfo, которая выводит в консоль:
//свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true
//сообщение "Незарегистрированный пользователь: " + свойство name в противном случае
//используйте переменные в литералах

//Создайте два объекта с одинаковым набором свойств:

//name ( строка )
//registered ( логическое значение )
//data ( дата в формате "дд.мм.гг" )
//Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo

//Вызовите каждый метод

function userInfo () {
	if (this.registered === true) {
		console.log( "Дата регистрации: " + this.data );
	} else {
		console.log( "Незарегистрированный пользователь: " + this.name );
	    }
};

var userWoman = {
	name: 'Liliya',
	registered: false,
	data: new Date().toLocaleString().slice( 0, 10 ),  
	getInfo: userInfo
};

var userMan = {
	name: 'Inokentiy',
	registered: true,
	data: new Date().toLocaleString().slice( 0, 10 ),
	getInfo: userInfo
};

console.log(userWoman.getInfo());
console.log(userMan.getInfo());