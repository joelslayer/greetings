// window. onload = async function getNome(){
// 	let reqPhrase = await fetch('http://localhost:2000'); 
// 	let json = await reqPhrase.json();	
// 	console.log(json);

// 	let nome = prompt('Qual seu nome?');
// 	if(nome != ''){
// 		document.querySelector('.person').innerHTML = nome;
// 	}else{
// 		getNome();
// 	}
// 	//console.log(json.list[0].title);
// 	document.querySelector('.phrase .texto--1').innerHTML = json.list[0].title;
// }
function addZero(i){
	if(i < 10){
		i = '0' + i;
	}
	return i;
}
function manha(h){
	let hora = parseInt(h);
	if(hora < 12){
		return true;
	}
}
function tarde(h){
	let hora = parseInt(h);
	if(hora >= 12 && hora <= 18){
		return true;
	}
}
function noite(h){
	let hora = parseInt(h);
	if(hora > 18 && hora < 6){
		return true;
	}
}
setInterval(function(){
	let timer = new Date();
	let hour = addZero(timer.getHours());
	let minutes = addZero(timer.getMinutes());
	let time = `${hour}:${minutes}`;
	document.querySelector('.hour').innerHTML = time;
	if(manha(hour)){
		document.querySelector('.period').innerHTML = 'Bom dia';
	}
	else if(tarde(hour)){
		document.querySelector('.period').innerHTML = 'Boa tarde';
	}
	else if(noite(hour)){
		document.querySelector('.period').innerHTML = 'Boa noite';
	}
	else{
		alert('Problema na hora');
	}
	
}, 1000);