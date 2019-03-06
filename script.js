var arrayNotValid = []; // массив для невалидных

function start(counter){
  if(counter < 256){

    setTimeout(function(){
      counter++; // счетчик

    var prevButton = document.querySelector('div>div>div>div>div>div>div>div:nth-of-type(2)>div>div>div[role="button"]:nth-of-type(1)'); // кнопка для автоматического нажатия

    var elem = document.querySelector('table>tbody>tr>td>table>tbody>tr>td>a');

    if(elem == null){ // если такого элемента нет
      console.log('her');
    }
    else if(elem.tagName === 'A') { // если это действительно a
      if(elem.hasAttribute("href")){
        console.log('href');
          var email = elem.getAttribute('href'); // вытаскиваем из ссылки аттрибут href

          var symbolNumber = (email.lastIndexOf('?email=') + 7); // ищу местоположение подстроки
          var res = email.substr(symbolNumber);
          arrayNotValid.push(res);  // пушу в массив
          
        }
      }
      
prevButton.click(); // триггер
      start(counter); // рекурсивно
    }, 4000);
  }
  console.log(arrayNotValid);
  return arrayNotValid;
}

start(0);
