/* Required
Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду:
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    ...
}

typeMessage ( `Welcome to the hell`, 1 ) */


function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split("").forEach ( 
        ( letter, index ) => 
            setTimeout (
                () => container.textContent += letter,
                1000 * velocity * index
            )
    )
}

typeMessage ( `Welcome to the hell`, 1 )


/* Additionally :ok_hand:
Напилите код методов setUserPresent, showPresent и showAbsent

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                ...
            },
            showPresent () {
                ...
            },
            showAbsent () {
                ...
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
После запуска кода результат в консоли должен быть таким:

Иван
Дмитрий
Степан
Михаил
а после выполнения кода:

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
результат в консоли должен быть таким:

Иван
Степан
Михаил */
