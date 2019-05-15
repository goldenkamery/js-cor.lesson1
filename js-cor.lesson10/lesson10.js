/* Required :point_up:
Логирование поступающих сообщений в объекте log
Задан массив сообщений и пустой объект log:

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}
Далее, есть функция, отправляющая сообщения в случайном порядке в случайное время:

var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
Обратите внимание, что эта функция получает при вызове не только текст сообщения, 
но и кллбэк-функцию, которой нужно передать это сообщение

С помощью кода:

messages.forEach (
    message => sendMessage ( message, handler )
)
инициируем отправку сообщений

:warning:

Ваша задача - напилить код функции handler,

которая получает сообщение и заносит его в объект log

в виде нового свойства,

значение которого - текст поступившего сообщения,

а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )

log
{
    19:34:08: "control"
    19:34:08[2]: "backspace"
    19:34:09: "subtract"
    19:34:09[2]: "enter"
    19:34:11: "delete"
    19:34:11[2]: "shift"
}
В помощь вам уже есть функция, которая формирует ключ очередного сообщения:

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}
На случай, если два сообщения поступят одновременно, функция getKey добавляет "[2]" к значению ключа 
( иначе значения ключей двух сообщений будут совпадать ) */



// Первый вариант

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

var log = {};

var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )

var handler = message => {
    Object.assign ( log,
        { [ getKey() ] : message }
    )
};

messages.forEach (
    message => sendMessage ( message, handler )
);

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}



// Второй вариант

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

var log = {};

var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )

var handler = message => {
    	log [ getKey() ] = message 
};

messages.forEach (
    message => sendMessage ( message, handler )
);

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}



/* Additionally :ok_hand:
Допилите код конструктора User, дополнив его акцессорами приватного свойства presence так, чтобы после выполнения скрипта:

function User ( name ) {
    this.name = name
    var presence = false
    ...
}

let user = new User ( "Ivan" )
console.info ( user.presence )
в консоли было:

"Ivan is absent"
а после выполнения кода:

user.presence = "+"
console.info ( user.presence )
в консоли было:

"Ivan is present"
getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
} */


function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty ( this, "presence", {
        get: () =>
            presence ? 
                `${this.name} is present` : 
                    `${this.name} is absent`,
        set: newVal =>
            presence = Boolean ( newVal ) 
    })
}

let user = new User ( "Ivan" )
console.info ( user.presence )
user.presence = '+'
console.info ( user.presence )




/* Additionally :thumbsup:
Объявить функцию-конструктор User

:warning: Конструктор должен принимать аргументы, описывающие юзера
:clipboard: Статические свойства и методы конструктора
У конструктора должны быть следующие :warning: не наследуемые экземплярами свойства и методы:
:one: avatars
массив:

[
     "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
     "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]
:two: admin
объект следующей структуры:

{
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}
	Админ пишет непосредственно в messageBox
:three: getAvatar
метод, возвращающий извлеченный из массива avatars элемент

return this.avatars.shift ()
:clipboard: Собственные свойства экземпляров
:one: name ( имя пользователя )



:two: email
:three: photoURL ( URL фотографии пользователя )
Конструктор должен иметь дефолтные значения для всех аргументов
дефолтное значение URL фотографии пользователя должно быть результатом работы статического метода getAvatar

:clipboard: Унаследованные свойства экземпляров
:five: неперечислимое неизменяемое свойство messageBox - элемент DOM
messageBox - это контейнер, куда будут выводиться сообщения всех пользователей и admin
при выводе сообщения пользователя в messageBox должны отображаться его аватар и имя
:four: унаследованные методы write и read
запись осуществляется в messageBox, чтение - из messageBox

:arrow_forward: После того, как конструктор будет объявлен, выполните код в консоли:
var users = [
    new User ( "Иван" ),
    new User ( 'Alex', "alex@gmail.com" ),
    new User ( 'Bob', "bob777@gmail.com" ),
    new User ( 'Dima', "dima888@gmail.com" ),
    new User ( 'Fima', "fima999@gmail.com" )
]

var k = 1
users.forEach ( 
    function ( user ) {
        setTimeout ( 
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
)
:large_blue_circle: Короче, юзеры пишут в messageBox из консоли:

users[index].write ( text )
а вот админ - непосредственно вводит текст в messageBox

( т.е. при вводе в messageBox пишущий сообщение идентифицируется как админ, выводится его аватар и имя ) */


function UserCreate ( userName = "Maryna", userEmail = "mk_@inbox.ru", avatarka = UserCreate.getAvatar() ) {
	this.name = userName;
	this.email = userEmail;
	this.photoURL = avatarka;
};

UserCreate.avatars = [
     "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
     "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
];

UserCreate.admin = {
       photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
       name: "Admin"
};

UserCreate.getAvatar = function () {
	return this.avatars.shift ()
};

UserCreate.prototype.messageBox = ( function () {
     let box = document.createElement ( 'div' )
     document.body.appendChild ( box )
     box.style = `
        	position: fixed;
  		display: flex;
  		flex-direction: column;
  		bottom: 10px;
        	right: 10px;
        	width: 300px;
        	height: 200px;
  		border: 1px solid #000000;
  		padding: 10px;
  		background-color: #00BFFF;
				
    `
    box.image = box.appendChild (
            	document.createElement( 'img' )
    )
    box.image.style = `
  		width: 55px;
    `
    box.name = box.appendChild (
            	document.createElement( 'p' )
    )
    box.name.style = `
		position: absolute;
  		padding-left: 75px;
		margin-top: 20px;
		font-weight: bold;
  		font-size: 18px;
  		color: #FFFFFF;
    `
    box.message = box.appendChild (
        	document.createElement( 'textarea' )
    )
    box.message.placeholder = 'Введите сюда Ваше сообщение'
    box.message.oninput = function ( event ) {
        	event.target.parentNode.querySelector( 'img' ).src = UserCreate.admin.photoURL
        	event.target.parentNode.querySelector( 'p' ).innerHTML = UserCreate.admin.name
    }
   box.message.style = `
  		width: 100%;
        	height: 100%;
        	background-color: #FFFFFF;
        	color: #000000;
		margin-top: 10px;
		padding: 10px;
   `
 return box
})();

UserCreate.prototype.write = function ( text ) {
    this.messageBox.image.src = this.photoURL
    this.messageBox.name.innerHTML = this.name
    this.messageBox.message.value = text
};

UserCreate.prototype.read = function () {
    this.messageBox.image.src = this.photoURL
    this.messageBox.name.innerHTML = this.name
    this.info = this.messageBox.message.value
    console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
    this.messageBox.message.value = "Ok"
};

var users = [
    new UserCreate ( "Иван" ),
    new UserCreate ( 'Alex', "alex@gmail.com" ),
    new UserCreate ( 'Bob', "bob777@gmail.com" ),
    new UserCreate ( 'Dima', "dima888@gmail.com" ),
    new UserCreate ( 'Fima', "fima999@gmail.com" )
];

var k = 1
users.forEach ( 
    function ( user ) {
        setTimeout ( 
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
);

//users[ index ].write( text );
//users[ index ].read();
