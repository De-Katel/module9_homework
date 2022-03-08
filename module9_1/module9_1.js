// Задание 1. 
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
// который будет преобразовывать XML в JS-объект и выводить его в консоль.

//   XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>

//  JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

// Решение:

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentList = xmlDOM.querySelectorAll('student');

let result = {list: []};

studentList.forEach(elem => {

  result.list.push({
    
    name: `${elem.querySelector('first').textContent} ${elem.querySelector('second').textContent}`,
    age: elem.querySelector('age').textContent,
    Prof: elem.querySelector('prof').textContent,
    Lang: elem.querySelector('name').getAttribute('lang')
    })
});


console.log(result);
