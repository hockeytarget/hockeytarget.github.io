// JavaScript Document
var speed=50;
									var ATscrolltop=document.getElementById('scrolltop');
									var ATscrolltop1=document.getElementById('scrolltop1');
									var ATscrolltop2=document.getElementById('scrolltop2');
									ATscrolltop2.innerHTML=ATscrolltop1.innerHTML
									function Marquee1(){
									if(ATscrolltop2.offsetHeight-ATscrolltop.scrollTop<=0)
									ATscrolltop.scrollTop-=ATscrolltop1.offsetHeight
									else{
									ATscrolltop.scrollTop++
									}
									}
									var MyMar1=setInterval(Marquee1,speed)
									ATscrolltop.onmouseover=function() {clearInterval(MyMar1)}
									ATscrolltop.onmouseout=function() {MyMar1=setInterval(Marquee1,speed)}