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
