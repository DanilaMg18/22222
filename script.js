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


let wrapper = document.querySelector('.wrapper');

function createCard(firstName, wrapper) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.classList.add('one');
    card.innerHTML =`<p>${firstName}</p>`
    wrapper.append(card);
}



for(let i=0; i < arr.length; i++) {
    createCard(arr[i], wrapper)
}
 
//  2. Для каждого объекта создай карточку, с помощью специальной функции, которую ты напишешь сам(а), которая будет принимать первым аргументом строку, вторым массив, и фильтровать массив так: 
//  3. Если в поле объекта name будет найдена строка из поля ввода, то такой объект оставить )
//  4. Создай поле ввода (input)  и напиши ему обработчик который будет получать введённое значение из поля ввода.
//  5. И будет вызывать функцию из пункта два, передавая туда первым аргументом то что мы получили из поля ввода, а вторым массив с объектами.


// Проще говоря: у Вас есть 5-10 карточек и поле ввода.
// Некоторых из ваших объектов зовут Dima и Diana.
// В поле ввода Вы вводите Di и у вас вместо 5-10 карточек остаются только те у которых в именах есть то что Вы ввели в поле ввода. Собственно Dima & Diana