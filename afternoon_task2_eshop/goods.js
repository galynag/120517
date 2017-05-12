localStorage.clear();
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
window.onload = function() {
    var out='';
for (var key in goods) {
	out+='<div class="item';
    if (goods[key].new==1) {
        out+=' new';
	}
	out+='"><img src="img/'+goods[key].image+'" alt="">';
    out+='<div class="name-item">'+goods[key].name+'<span class="item-article">'+'\n'+goods[key].name2+'</span></div>';
    if (goods[key].cost_1) {
        out+='<div class="old-price">'+goods[key].cost_1+'</div>';
	}
    out+='<div class="new-price"><div class="block-new-price">'+goods[key].cost_2+'</div>';
    out+='<div class="triangle-right"></div></div><div class="new"></div></div>';
    if (goods[key].new==1) {}
}
document.querySelector('.catalog').innerHTML=out;
}


var pol=document.querySelector('#polzunok');
	pol.onchange= function() {
		document.querySelector('#min-pol').innerHTML=pol.value;
    }

    document.querySelector('#filter').onclick=function() {
		var rezMass={};
		// rezz.hhbhb =
        var out='';
        var pL='';
        var produserslist=document.querySelectorAll('.produser input');
        var listProdesers=document.querySelectorAll('.produser');
        var batteriesList=document.getElementsByName('type-battery');
       	var typeBattery=0;//тип батареи
        for (var i=0; i<produserslist.length;i++){
        	if (produserslist[i].checked) {
				pL+=listProdesers[i].innerText;}
		}
		for (i=0; i<batteriesList.length; i++) {
        	if (batteriesList[i].checked) {typeBattery=batteriesList[i].value}
		}

        for (var key in goods) {
			var prod=goods[key].producer;
			var battery=goods[key].batteries;
        	if (goods[key].cost_2<=pol.value && pL.indexOf(prod)>=0 && goods[key].batteries==typeBattery) {
                // localStorage.setItem(key, goods[key].cost_2);
                // console.log(localStorage);
                rezMass[key].name=goods[key].name;
                rezMass[key].producer=goods[key].producer;
                rezMass[key].name2=goods[key].name2;
                rezMass[key].cost_1=goods[key].cost_1;
                rezMass[key].cost_2=goods[key].cost_2;
                rezMass[key].batteries=goods[key].batteries;
                rezMass[key].image=goods[key].image;
                rezMass[key].new=goods[key].new;
                consol.log(rezMass);
                out += '<div class="item">';
                out += '<img src="img/' + goods[key].image + '" alt="">';
                out += '<div class="name-item">' + goods[key].name+ goods[key].producer+goods[key].batteries+ '<span class="item-article">' + '\n' + goods[key].name2 + '</span></div>';
                out += '<div class="old-price">' + goods[key].cost_1 + '</div>';
                out += '<div class="new-price"><div class="block-new-price">' + goods[key].cost_2 + '</div>';
                out += '<div class="triangle-right"></div></div><div class="new"></div></div>'
            }
        }
        document.querySelector('.catalog').innerHTML=out;
	}
	document.querySelector('.triangle-top').onclick= function() {

	}