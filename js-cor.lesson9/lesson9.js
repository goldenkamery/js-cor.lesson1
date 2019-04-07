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
                users.filter ( user => user.name === userName )[0].present = true
            },
            showPresent () {
                users.filter ( user => user.present )
                    .forEach ( user => console.log ( user ) )
            },
            showAbsent () {
                users.filter ( user => !user.present )
                    .forEach ( user => console.log ( user ) )
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()



/* Additionally :thumbsup:
Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, 
а затем меняет атрибуты стиля этого класса:

let changeClass = ( classname, styleString ) => ( 
   ...
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`
После вызова функции:

changeClass ( "second-level-menu", "background-color: red!important;" )
в консоли страницы, где есть элементы с классом second-level-menu, 
у всех элементов этого класса цвет фона должен измениться на красный. */


let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "second-level-menu", "background-color: red!important;" )
