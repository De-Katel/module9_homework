// Задание 3.

// Напишите код приложения, интерфейс которого представляет собой input и кнопку.
//  В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10,
//  где get-параметр limit — это введённое число.

// Решение:

butt.onclick = function () {
    const num = document.getElementById('input').value;

    document.getElementById('message').innerHTML = '';

    if (+num >= 1 & +num <= 10) {

        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
        }

        xhr.onerror = function () {
            console.log('Ошибка запроса');
        };

        xhr.open("get", `https://picsum.photos/v2/list?limit=${num}`);

        xhr.send();
    } else {

        document.getElementById('message').innerHTML = ' <p>Число вне диапазона от 1 до 10</p>';
    }
};