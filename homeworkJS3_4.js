
var form_test = {
     adminName: 'Alekseii',

      // метод
formBody: function() {
  var bodyForm = document.body;
  bodyForm.style.fontFamily = 'sans-serif';
  var forms = document.createElement('form');
  forms.innerHTML = '<h2 align="center" style="font-family: sans-serif; font-weight: 200; margin-bottom: 50px;">Тест по программированию</h2>';
  
  forms.classList.add('block_form');
  var blockForm = bodyForm.getElementsByClassName('block_form');
  // console.log(blockForm);
  bodyForm.appendChild(forms);
  // console.log(document.body);
  
    var divDom1 = document.createElement('div');
    var divElementOl = document.createElement('ol');
    var divElementLi1 = document.createElement('li');
      divElementLi1.innerHTML = '<h3 style = "font-weight: 200">Вопрос №1<h3>';
    var divElementLiOl = document.createElement('ol');
      divElementLiOl.style.listStyle = 'none';
      divElementLiOl.style.padding = '0'; 
    var divElementLiOlLi1 = document.createElement('li');
    var divElementLiOlLi2 = document.createElement('li');
    var divElementLiOlLi3 = document.createElement('li');
        
    divDom1.classList.add('classdivDom1');
    var classDivDom1 = document.getElementsByClassName('classdivDom1');
    // console.log(classDivDom1);
        
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    
    divDom1.style.marginTop = '50px';
    divDom1.style.width = '1000px';
    divDom1.style.marginLeft = '50px';
    input1.type = 'checkbox';
    input1.name = 'checkbox';
    input1.id = 'box1';
    input1.style.width = '18px';
    input1.style.height = '18px';
    
    input2.type = 'checkbox';
    input2.name = 'checkbox';
    input2.id = 'box2';
    input2.style.width = '18px';
    input2.style.height = '18px';

    input3.type = 'checkbox';
    input3.name = 'checkbox';
    input3.id = 'box3';
    input3.style.width = '18px';
    input3.style.height = '18px';
    label1.for = 'box1';
    label1.innerHTML = 'Вариант ответа №1';
    label2.for = 'box2';
    label2.innerHTML = 'Вариант ответа №2';
    label3.for = 'box3';
    label3.innerHTML = 'Вариант ответа №3';

    document.body.appendChild(divDom1);
    divDom1.appendChild(forms);
    forms.appendChild(divElementOl);
    divElementOl.appendChild(divElementLi1);
    divElementLi1.appendChild(divElementLiOl);
    divElementLiOl.appendChild(divElementLiOlLi1);
    divElementLiOl.appendChild(divElementLiOlLi2);
    divElementLiOl.appendChild(divElementLiOlLi3);
    divElementLiOlLi1.appendChild(input1);
    divElementLiOlLi2.appendChild(input2);
    divElementLiOlLi3.appendChild(input3);
    divElementLiOlLi1.appendChild(label1);
    divElementLiOlLi2.appendChild(label2);
    divElementLiOlLi3.appendChild(label3);

    /*End block  one question*/

    var divElementLi2 = document.createElement('li');
      divElementLi2.innerHTML = '<h3 style = "font-weight: 200">Вопрос №2<h3>';
    var divElementLiOl = document.createElement('ol');
      divElementLiOl.style.listStyle = 'none';
      divElementLiOl.style.padding = '0'; 
    var divElementLiOlLi1 = document.createElement('li');
    var divElementLiOlLi2 = document.createElement('li');
    var divElementLiOlLi3 = document.createElement('li');
    
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    
    input1.type = 'checkbox';
    input1.name = 'checkbox';
    input1.id = 'box1';
    input1.style.width = '18px';
    input1.style.height = '18px';
    
    input2.type = 'checkbox';
    input2.name = 'checkbox';
    input2.id = 'box2';
    input2.style.width = '18px';
    input2.style.height = '18px';

    input3.type = 'checkbox';
    input3.name = 'checkbox';
    input3.id = 'box3';
    input3.style.width = '18px';
    input3.style.height = '18px';

    label1.for = 'box1';
    label1.innerHTML = 'Вариант ответа №1';
    label2.for = 'box2';
    label2.innerHTML = 'Вариант ответа №2';
    label3.for = 'box3';
    label3.innerHTML = 'Вариант ответа №3';
 
    divElementOl.appendChild(divElementLi2);
    divElementLi2.appendChild(divElementLiOl);
    divElementLiOl.appendChild(divElementLiOlLi1);
    divElementLiOl.appendChild(divElementLiOlLi2);
    divElementLiOl.appendChild(divElementLiOlLi3);
    divElementLiOlLi1.appendChild(input1);
    divElementLiOlLi2.appendChild(input2);
    divElementLiOlLi3.appendChild(input3);
    divElementLiOlLi1.appendChild(label1);
    divElementLiOlLi2.appendChild(label2);
    divElementLiOlLi3.appendChild(label3);

/*End block second question*/

    var divElementLi3 = document.createElement('li');
      divElementLi3.innerHTML = '<h3 style = "font-weight: 200">Вопрос №3<h3>';
    var divElementLiOl = document.createElement('ol');
      divElementLiOl.style.listStyle = 'none';
      divElementLiOl.style.padding = '0'; 
    var divElementLiOlLi1 = document.createElement('li');
    var divElementLiOlLi2 = document.createElement('li');
    var divElementLiOlLi3 = document.createElement('li');
    
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    
    input1.type = 'checkbox';
    input1.name = 'checkbox';
    input1.id = 'box1';
    input1.style.width = '18px';
    input1.style.height = '18px';
    
    input2.type = 'checkbox';
    input2.name = 'checkbox';
    input2.id = 'box2';
    input2.style.width = '18px';
    input2.style.height = '18px';

    input3.type = 'checkbox';
    input3.name = 'checkbox';
    input3.id = 'box3';
    input3.style.width = '18px';
    input3.style.height = '18px';
    label1.for = 'box1';
    label1.innerHTML = 'Вариант ответа №1';
    label2.for = 'box2';
    label2.innerHTML = 'Вариант ответа №2';
    label3.for = 'box3';
    label3.innerHTML = 'Вариант ответа №3';

    
    divElementOl.appendChild(divElementLi3);
    divElementLi3.appendChild(divElementLiOl);
    divElementLiOl.appendChild(divElementLiOlLi1);
    divElementLiOl.appendChild(divElementLiOlLi2);
    divElementLiOl.appendChild(divElementLiOlLi3);
    divElementLiOlLi1.appendChild(input1);
    divElementLiOlLi2.appendChild(input2);
    divElementLiOlLi3.appendChild(input3);
    divElementLiOlLi1.appendChild(label1);
    divElementLiOlLi2.appendChild(label2);
    divElementLiOlLi3.appendChild(label3);

    var bottonSubmit = document.createElement('input');
    bottonSubmit.type = 'submit';
    bottonSubmit.value = 'Проверить мои результаты';
    bottonSubmit.style.fontSize = '18px';
    bottonSubmit.style.width = '400px';
    bottonSubmit.style.height = '50px';
    bottonSubmit.style.verticalAlign = 'middle';
    bottonSubmit.style.border = '2px solid black';
    bottonSubmit.style.marginLeft = '300px';
       
    forms.appendChild(bottonSubmit);

  }
};
   // Вызов
    form_test.formBody();

