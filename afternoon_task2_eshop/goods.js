//полный список товаров
var goods = {
	 12321 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 3000",
	 	"cost_1" : 3550,
	 	"cost_2" : 3394,
	 	"batteries" : 1,
	 	"image" : "bosch3000.jpg",
	 	"new" : 0
	 },
	 12322 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 6000",
	 	"cost_1" : 3500,
	 	"cost_2" : 2500,
	 	"batteries" : 1,
	 	"image" : "bosch6000.jpg" ,
	 	"new" : 1
	 },
	 12323 : {
	 	"name": "Перфоратор",
	 	"producer" : "Bosch",
	 	"name2" : "BFG 2900",
	 	"cost_1" : 3700,
	 	"cost_2" : 3491,
	 	"batteries" : 1,
	 	"image" : "bosch2900.jpg",
	 	"new" : 0
	 },
	 12324 : {
	 	"name": "Перфоратор",
	 	"producer" : "TexAc",
	 	"name2" : "TA-01-352",
	 	"cost_1" : 1399,
	 	"cost_2" : 1279,
	 	"batteries" : 1,
	 	"image" : "tex352.jpg",
	 	"new" : 0
	 },
	 12325 : {
	 	"name": "Перфоратор",
	 	"producer" : "Craft",
	 	"name2" : "CBH 1100",
	 	"cost_1" : 22500,
	 	"cost_2" : 15500,
	 	"batteries" : 1,
	 	"image" : "craft1110.jpg",
	 	"new" : 1
	 },
	 76423 : {
	 	"name": "Перфоратор",
	 	"producer" : "Днепр-М",
	 	"name2" : "ПЕУ-2485",
	 	"cost_1" : 1199,
	 	"cost_2" : 1069,
	 	"batteries" : 0,
	 	"image" : "dnepr85.jpg",
	 	"new" : 0
	 },
	  76424 : {
	 	"name": "Перфоратор",
	 	"producer" : "Титан",
	 	"name2" : "БП75-24",
	 	"cost_1" : 0,
	 	"cost_2" : 1285,
	 	"batteries" : 0,
	 	"image" : "titan.jpg",
	 	"new" : 1
	 },
	  76425 : {
	 	"name": "Перфоратор",
	 	"producer" : "Metabo",
	 	"name2" : "KHE 2444",
	 	"cost_1" : 4434,
	 	"cost_2" : 3299,
	 	"batteries" : 0,
	 	"image" : "metabo.jpg",
	 	"new" : 0
	 }
 };
 //задаем пустой массив для товара, который у нас остается после применения фильтров
var rezMass={};
var triangleBottom=document.querySelector('.triangle-bottom');
var triangleTop=document.querySelector('.triangle-top');

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}
//при загрузке страницы
window.onload = function() {
	var out='';
	var outP=[];//массив для определения в дальнейшем уникальных производителей
	var outPString='';//строка для запоминания формы элемнтов списка фильтра для всех уникальных производителей
	for (var key in goods) {
		 outP.push(goods[key].producer);
		 console.log();
		 out+='<div class="item"><img src="img/'+goods[key].image+'" alt="">';
	   if (goods[key].new==1) {
	       out+='<img id="img-new" src="img/new.png" alt="">';
		  }
		out+='<div class="name-item">' + goods[key].name+'</div>';
		out+='<div class="produser">'+goods[key].producer+'</div>';
		out+='<div class="item-article">'+ goods[key].name2 +'</div>';
		 if (goods[key].cost_1!=0) {
		      out+='<div class="old-price">'+goods[key].cost_1+'</div>';
		 } else { out += '<div class="old-price">&#160;</div>';}
		 out+='<div class="new-price"><div class="block-new-price">'+goods[key].cost_2+'</div>';
		 out+='<div class="triangle-right"></div></div><div class="new"></div></div>';
	 }
document.querySelector('.catalog').innerHTML=out;
outP = unique(outP);
for (var i=0; i<outP.length; i++) {
	outPString+='<li class="produser"><input type="checkbox">'+outP[i]+'</li>';
}

document.querySelector('#produser').innerHTML=outPString;
};


var pol=document.querySelector('#polzunok');
//определение максимального значения ползунка
pol.onchange= function() {
		document.querySelector('#max-pol').innerHTML=pol.value;
};

//функция на нажатие кнопки Показать
document.querySelector('#filter').onclick=function() {
  var out='';
  var pL='';
	rezMass = {};
  var produserslist=document.querySelectorAll('.produser input');
  var listProdesers=document.querySelectorAll('.produser');
  var batteriesList=document.getElementsByName('type-battery');
  var typeBattery=0;//тип батареи
  for (var i=0; i<produserslist.length;i++){
    if (produserslist[i].checked) {
				pL+=listProdesers[i].innerText;}
		}
	for (i=0; i<batteriesList.length; i++) {
  	if (batteriesList[i].checked) {
			typeBattery=batteriesList[i].value
		}
	}
	 for (var key in goods) {
	 var prod=goods[key].producer;
	 var battery=goods[key].batteries;
		 if (goods[key].cost_2<=pol.value && pL.indexOf(prod)>=0 && goods[key].batteries==typeBattery) {
		     rezMass[key]={};
		     rezMass[key].name =goods[key].name;
		     rezMass[key].producer=goods[key].producer;
		     rezMass[key].name2=goods[key].name2;
		     rezMass[key].cost_1=goods[key].cost_1;
		     rezMass[key].cost_2=goods[key].cost_2;
		     rezMass[key].batteries=goods[key].batteries;
		     rezMass[key].image=goods[key].image;
		     rezMass[key].new=goods[key].new;
				 out+='<div class="item"><img src="img/'+goods[key].image+'" alt="">';
			 	 if (goods[key].new==1) {
			 			out+='<img id="img-new" src="img/new.png" alt="">';
			 	 }
				out+='<div class="name-item">'+goods[key].name+'</div>';
				out+='<div class="produser">'+goods[key].producer+'</div>';
				out+='<div class="item-article">'+ goods[key].name2 +'</div>';
				 if (goods[key].cost_1!=0) {
				  out += '<div class="old-price">' + goods[key].cost_1 + '</div>';
				 } else {out += '<div class="old-price">&#160;</div>';}
		     out += '<div class="new-price"><div class="block-new-price">' + goods[key].cost_2 + '</div>';
			   out += '<div class="triangle-right"></div></div><div class="new"></div></div>'
	     }
	  }
document.querySelector('.catalog').innerHTML=out;
};
//функция для определения условного размера ассоциативного массива
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
//функция сортировки товаров на странице по цене, от минимальной к максимальной
triangleTop.onclick= function() {
	var out1='';
	var keys = [];
	var sizeObj = Object.size(rezMass);
 //проверка на наличие отсортированного списка элементов. если у нас сортировка на странице не была применена, то мы берем все товары.
 if (sizeObj >0) {
	  for (var key in rezMass) {

			keys.push(rezMass[key]);
		}
	} else {	for (var key in goods)  {
				  	keys.push(goods[key]);
					}
		}
	//сортируем полученный массив по цене.
	keys.sort(function (a, b) {
		return a.cost_2- b.cost_2;
	  });
  for (var i=0; i<keys.length; i++) {
		out1+='<div class="item"><img src="img/'+keys[i].image+'" alt="">';
		if (keys[i].new==1) {
				out1+='<img id="img-new" src="img/new.png" alt="">';
		 }
		out1+='<div class="name-item">'+keys[i].name+'</div>';
 		out1+='<div class="produser">'+keys[i].producer+'</div>';
 		out1+='<div class="item-article">'+ keys[i].name2 +'</div>';
	  if (keys[i].cost_1) {
			out1+='<div class="old-price">'+keys[i].cost_1+'</div>';
	  } else {out1+='<div class="old-price">&#160;</div>';}
		out1+='<div class="new-price"><div class="block-new-price">'+keys[i].cost_2+'</div>';
		out1+='<div class="triangle-right"></div></div><div class="new"></div></div>';
  }
document.querySelector('.catalog').innerHTML=out1;
};

triangleBottom.onclick= function() {
	var out1='';
	var keys = [];
	var sizeObj = Object.size(rezMass);
 //проверка на наличие отсортированного списка элементов. если у нас сортировка на странице не была применена, то мы берем все товары.
 if (sizeObj >0) {
	  for (var key in rezMass) {

			keys.push(rezMass[key]);
		}
	} else {	for (var key in goods)  {
				  	keys.push(goods[key]);
						console.log(keys)				;
					}
		}
	//сортируем полученный массив по цене.
	keys.sort(function (a, b) {
		return b.cost_2- a.cost_2;
	  });
  for (var i=0; i<keys.length; i++) {
		out1+='<div class="item"><img src="img/'+keys[i].image+'" alt="">';
		if (keys[i].new==1) {
			out1+='<img id="img-new" src="img/new.png" alt="">';
	  }
		out1+='<div class="name-item">' + keys[i].name+'</div>';
		out1+='<div class="produser">'+keys[i].producer+'</div>';
		out1+='<div class="item-article">'+ keys[i].name2 +'</div>';
	  if (keys[i].cost_1 != 0) {
	    	out1+='<div class="old-price">'+keys[i].cost_1+'</div>';
		} else {out1+='<div class="old-price">&#160;</div>';}
		out1+='<div class="new-price"><div class="block-new-price">'+keys[i].cost_2+'</div>';
		out1+='<div class="triangle-right"></div></div><div class="new"></div></div>';
  }
document.querySelector('.catalog').innerHTML=out1;
};
