// выведите массив на страницу так, как показано ниже:
// 0 - 2
// 1 - 3
// выводите только те элементы, что больше 5-ти

var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
var box=document.querySelector('.box');
for (var i=0; i<mas.length; i++) {
    if (mas[i]>5) {
        box.innerHTML+='<p class="list">'+i+' - '+mas[i]+'</p>';
    }
}