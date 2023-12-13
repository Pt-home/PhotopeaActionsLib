var textarea = document.getElementById("script");

// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.responseType = "text";

// Устанавливаем обработчик события при завершении запроса
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
        // Получаем текст из ответа сервера
        var responseText = xhr.responseText;
    
        // Вставляем текст в textarea
        textarea.value = "////////////////////////////////////// You can write your code withiut row: #include 'photopeaActionsLib.jsx' /////////////////////////////////////\n\n";
          
        libPP = responseText; //Библиотека захвачена
    
      }
  };

// Открываем соединение и отправляем запрос на получение содержимого по ссылке
xhr.open("GET", "https://photopeaactionslib.olegpustovoit.repl.co/photopeaActionsLib.jsx", true);
xhr.send();