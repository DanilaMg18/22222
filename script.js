let arr = [{
    firstName:'Danila',
    lastName:'Palcech'
},
{
    firstName:'Maksim',
    lastName:'Grigorijevich'
},
{
    firstName:'Dima',
    lastName:'Super'
},
{
    firstName:'Diana',
    lastName:'Klass'
},
{
    firstName:'Rodjer',
    lastName:'Pump'
}]

let wrapper = document.querySelector('.wrapper')

function createCard(person, wrapper) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.classList.add('one');
    card.innerHTML =`
        <p>${person.firstName}</p>
        <p2>${person.lastName}</p2>
    `
    wrapper.append(card);
}

for(let i=0; i < arr.length; i++) {
    createCard(arr[i], wrapper)
}



let inputEl = document.querySelector('.input');

inputEl.oninput = function(e) {
    let newArr = arr.filter(function(person) {
        return person.firstName.includes(e.target.value)
    });
    wrapper.innerHTML = "";
    for(let i=0; i < arr.length; i++) {
        createCard(newArr[i], wrapper)
    }
    return newArr
    }
    
    
    
    // 1.  Напиши фильтрацию массива с людьми. Надо проверить содержит ли строка имени строку введеную в поле ввода
    // return person.firstName.includes(e.target.value)

    // 2.  Надо очистить содержимое wrapper

    // 3.  Снова написать цикл, в котором ты вызовишь createCard, но уже с изменённым массивом
    // */


//  2. Для каждого объекта создай карточку, с помощью специальной функции, которую ты напишешь сам(а), которая будет принимать первым аргументом строку, вторым массив, и фильтровать массив так: 
//  3. Если в поле объекта name будет найдена строка из поля ввода, то такой объект оставить )
//  4. Создай поле ввода (input)  и напиши ему обработчик который будет получать введённое значение из поля ввода.
//  5. И будет вызывать функцию из пункта два, передавая туда первым аргументом то что мы получили из поля ввода, а вторым массив с объектами.


// Проще говоря: у Вас есть 5-10 карточек и поле ввода.
// Некоторых из ваших объектов зовут Dima и Diana.
// В поле ввода Вы вводите Di и у вас вместо 5-10 карточек остаются только те у которых в именах есть то что Вы ввели в поле ввода. Собственно Dima & Diana