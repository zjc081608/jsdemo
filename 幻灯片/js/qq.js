
window.onload=function (){
	var oBox=document.getElementById('box');
	var pLi=document.getElementById('pic-list').getElementsByTagName('li');
	var iUl=document.getElementById('icon-list').getElementsByTagName('ul')[0];
	var iLi=iUl.getElementsByTagName('li');
	var h2=document.getElementById('text-list').getElementsByTagName('h2');
	var prev=document.getElementById('btnl');
	var next=document.getElementById('btnr');
	var iNow=0;
	var num=0;
	next.onclick=function(){
		
		if (iNow<7) {
			iNow++;
			moveLeft();
			/*if(iNow==0){
				//prev.className='';
				prev.className='btn';
			}
			else {
				prev.className='btn showBtn'
			}*/
			/*if (iNow==7) {
				next.className='';
				next.className='btn';
			};
			else{
				next.className='btn showBtn';
			}*/
		};
		/*if (iNow==7) {
			next.className='';
			next.className='btn';
		};
		if (iNow>0) {
			prev.className='btn showBtn';
		};*/
	}
	prev.onclick=function(){
		if (iNow>0) {
			iNow--;
			moveLeft();
		};
		/*if (iNow==0) {
			prev.className='';
			prev.className='btn';
		};
		if (iNow<7) {
			next.className='btn showBtn';
		};*/
	}
	for (var i = 0; i < iLi.length; i++) {
		iLi[i].index=i;
		iLi[i].onclick=function(){
			num=this.index;
			//if () {};
			tab();
		}
	};
	function moveLeft(){
		startMove(iUl,{left:-iLi[0].offsetWidth*iNow})
		prev.className=iNow==0?'btn':'btn showBtn';
		next.className=iNow==7?'btn':'btn showBtn';
	}
	function tab(){
		for (var i = 0; i < iLi.length; i++) {
			h2[i].style.display='none';
			iLi[i].className="";
			startMove(pLi[i],{opacity:0})
			/*pLi[i].style.opacity='0';
			pLi[i].style.filter='alpha(opacity=0)';*/
		};
		iLi[num].className="active";
		h2[num].style.display='block';
		startMove(pLi[num],{opacity:100})
		/*pLi[num].style.opacity='1';
		pLi[num].style.filter='alpha(opacity=100)';*/
	}
	function play (){
		num++;
		if (num>=14) {
			num=0;
		};
		if(num>=7&&num<14){
			iNow=num-6;
		}
		if (num<7) {
			iNow=0;
		};
		moveLeft();
		tab();
	}
	var timer=setInterval(play,2000);
	oBox.onmouseover=function(){
		clearInterval(timer);
	}
	oBox.onmouseout=function(){
		timer=setInterval(play,2000)
	}
}