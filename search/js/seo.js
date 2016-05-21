var seoinput = document.getElementById("seoinput");
var seoul = document.getElementById("seoul");
var clearjilu = document.getElementById("clearjilu");
var arr = seoul.children.length;
seoinput.onblur = function(){
	var li = document.createElement('li');
	li.innerHTML = seoinput.value;
	seoul.appendChild(li);
	arr = seoul.children.length;
	if(arr>6){
		seoul.children[0].remove();
	}
	seoinput.value = '';
}
clearjilu.onclick = function(){
	for(var i=arr-2;i>=0;i--){
		seoul.children[i].remove();
	}
}
