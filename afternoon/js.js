/**
 * Created by UpscaleAcademy on 12.05.2017.
 */
// создать два инпута для ввода чисел и два радио-инпутов для переключения операторов.
//     Нужно при нажатии на кнопку выводить результат согласно активному радио-инпута
document.querySelector('button').onclick= function () {
    var operant1=document.getElementById('operant1').value;
    var operant2=document.getElementById('operant2').value;
    var operator1=document.getElementById('1');
    var operator2=document.getElementById('2');
        if (operator1.checked) {
            var val=operant1*operant2;
         }  else { val=operant1/operant2;}
        document.querySelector('#out').innerHTML=val;
    }

