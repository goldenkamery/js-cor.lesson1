/* Required 
Напилите код, выводящий на страницу текущее время в течение 100 секунд
Подсказка: создайте элемент, в котором будет отображаться текущее время
Контент элемента должен обновляться каждую секунду */


var tiktak = document.body.appendChild (
		document.createElement ( 'h2' )
);
tiktak.style = `
	  text-align: center;
	  color: #A52A2A;
    margin: auto;
    padding: auto;
	  font-size: 200px;
`
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

