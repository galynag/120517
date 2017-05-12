// Дан массив. Выведите его в консоль 
// Преобразуйте его в строку и сохраните в LocalStorage под именем 'mass'
// Считайте его из localStorage в переменнуд primer
// Преобразуйте primer из строки в массив
// Выведите в консоль

var arr = {
	"k1" : "17w4",
	"k2" : "1sfsg7",
	"k3" : "17nd",
	"k16" : "1237",
	"k14" : "1w37",
	"3k1" : "1wrw7"
}
var arrStr=[];
for (var key in arr) {
	console.log(arr);
}
var mass=JSON.stringify(arr);
console.log(mass);
localStorage.setItem('mass', mass);
var primer = localStorage.getItem('mass');
console.log(typeof primer);
console.log(primer);
var arr2=JSON.parse(primer);
console.log(typeof arr2);
console.log(arr2);







