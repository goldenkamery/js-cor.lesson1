/* Обязательное задание ( 3 балла )
:warning: pure JS

Создайте элемент 'p', при клике на котором появляется картинка размером 100px

При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px

При клике на картинке она должна исчезать */


var p = document.body.appendChild(
     document.createElement('p')
);
p.innerText = 'Hello, My Dear Friend! Click here!';

var picture = document.createElement('img');
picture.setAttribute ('src', 'https://telegraf.com.ua/files/2016/11/443276.jpg');
picture.style = `display: none`;

p.onclick = (event) => {
    document.body.appendChild(picture);
    picture.style = `width: 100px`
}

picture.onmouseover = (event) => {
 picture.style = `
       transition: all 2s;
       width: 200px;
    `
}

picture.onclick = (event) => {
    document.body.removeChild(picture)
}

