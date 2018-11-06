var arrayNotValid = []; // массив для невалидных

function start(counter){
  if(counter < 100){
    setTimeout(function(){
      counter++; // счетчик
      //var prevButton = document.querySelector('div>div>div>div>div>div>div>div>div>span+div[role="button"]:nth-child(2)');
      var prevButton = document.querySelector('div>div>div>div>div>div>div>div:nth-of-type(2)>div>div>div[role="button"]:nth-of-type(1)'); // кнопка для автоматического нажатия
      
      //var email = document.querySelector('div>div> br + a:nth-of-type(5)').innerHTML; 
      var email = document.querySelector('table>tbody>tr>td>table>tbody>tr>td>a').getAttribute('href'); // вытаскиваем из ссыдки аттрибут href
      
			var symbolNumber = (email.lastIndexOf('?email=') + 7); // ищу местоположение подстроки
			var res = email.substr(symbolNumber);
      arrayNotValid.push(res);  // пушу в массив
      prevButton.click(); // триггер
      start(counter); // рекурсивно
    }, 4000);
  }
  console.log(arrayNotValid);
  return arrayNotValid;
}

start(0);
