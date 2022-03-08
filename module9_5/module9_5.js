// Задание 5.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст 
// «Номер страницы вне диапазона от 1 до 10»;

// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст
//  «Лимит вне диапазона от 1 до 10»;

// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы
//  и лимит вне диапазона от 1 до 10»;

// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10,
//  где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 

//Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно
//выполненного запроса (использовать localStorage).

// Решение:

if (localStorage) {
    showImage.innerHTML = localStorage.getItem('cards')
}

butt.onclick = function () {

    const userStringNumber = +document.getElementById('stringNumber').value;
    const userLimit = +document.getElementById('limit').value;
    const showImage = document.getElementById('showImage');

    function displayResult(apiData) {

        let cards = '';

        apiData.forEach(item => {

            const cardBlock = `
            <div>
              <img
                src="${item.download_url}"
                width = "200px"
                height = "150px"
              />
            </div>
          `;

            cards = cards + cardBlock;

            localStorage.setItem('cards', cards);
        });

        showImage.innerHTML = cards;
    }

    if (userStringNumber >= 1 & userStringNumber <= 10 & !isNaN(userStringNumber)
        & userLimit >= 1 & userLimit <= 10 & !isNaN(userLimit)) {

        fetch(`https://picsum.photos/v2/list?page=${userStringNumber}&limit=${userLimit}`)

            .then((response) => { return response.json() })
            .then((data) => { displayResult(data) })
            .catch(() => { console.log('error') });

    } else if ((userStringNumber < 1 || userStringNumber > 10 || isNaN(userStringNumber))
        & (userLimit < 1 || userLimit > 10 || isNaN(userLimit))) {

        showImage.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';

    } else if (userStringNumber < 1 || userStringNumber > 10 || isNaN(userStringNumber)) {

        showImage.innerText = 'Номер страницы вне диапазона от 1 до 10';

    } else {

        showImage.innerText = 'Лимит вне диапазона от 1 до 10';
    }
}

clear.onclick = function () {

    showImage.innerHTML = '';
    localStorage.clear();
}