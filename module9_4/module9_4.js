// Задание 4.

// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit.
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
// выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью 
// fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

// После получения данных вывести ниже картинку на экран.

butt.onclick = function () {

  const userWidth = document.getElementById('width').value;
  const userHeight = document.getElementById('height').value;
  const showImage = document.getElementById('showImage');

  showImage.innerText = '';
  showImage.style = 'background-image:none';

  if (userWidth >= 100 & userWidth <= 300 & userHeight >= 100 & userHeight <= 300) {

    function initialImage(blob) {

      let url = URL.createObjectURL(blob);
      showImage.style = `background-image: url(${url}); width: ${userWidth}px; height: ${userHeight}px;`;
    }

    fetch(`https://picsum.photos/${userWidth}/${userHeight}`)

      .then((response) => { console.log(response); return response.blob() })
      .then((data) => { initialImage(data) })
      .catch(() => { console.log('error') });

  } else {

    showImage.innerText = 'одно из чисел вне диапазона от 100 до 300';
  }

}
