// Дан массив. Выведите его на страницу в формате:
// k1 *** 17w4

var arr = {
	"k1" : "17w4",
	"k2" : "1sfsg7",
	"k3" : "17nd",
	"k16" : "1237",
	"k14" : "1w37",
	"3k1" : "1wrw7"
}

for (key in arr) {
	console.log(arr[key]);
	document.querySelector('.box').innerHTML+='<p class="list">'+key+' \*\*\* '+arr[key]+'</p>';
}