/* Required 
Напилите код, выводящий на страницу текущее время в течение 100 секунд
Подсказка: создайте элемент, в котором будет отображаться текущее время
Контент элемента должен обновляться каждую секунду */


var tiktak = document.body.appendChild (
		document.createElement ( 'h2' )
);

for ( var sec = 0; sec < 100; sec++ ) {
		( function ( arg ) {
			return function () {
				  setTimeout (
				    () => tiktak.innerText = new Date ().toLocaleString ().split (', ')[1],
				    1000 * arg
				   )
			      }
		 } ) ( sec ) () 
}



/* Additionally
Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        ...
    }
})( 1 )

typeMessage ( `Welcome to the hell` ) */

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        var number = index
        setTimeout (
            () => container.textContent += message [ number ],
            1000 * velocity * number
        )
        index++ < message.length - 1 ?
            arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )


/*  Additionally
Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, был унаследованный метод counter(),
который считает созданные конструктором экземпляры
Каждый вызов конструктора увеличивает счетчик экземпляров
на 1 и помещать новое значение счетчика в свойство id созданного экземпляра: 

function User ( name ) {
    this.name = name
    this.id = this.counter()
}

...

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
:warning: После выполнения кода:

users[1].id = users[1].counter()
свойство id экземпляра не должно измениться, так же, как и значение счетчика */


function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.prototype.counter = (
    function(){
        var id = 0
        return function(){
            return typeof this.id === 'number' ? this.id: id++
        }
    }
)()

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
];

users[1].id = users[1].counter();
