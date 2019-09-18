
var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var objExp=new RegExp(re);


function pan(){
	var str=document.getElementById("email").value;
	
	if(document.getElementById("username").value=="Name:")
	{
	alert("Please enter your name."); 
	return false; 
	}	
	
	else if(document.getElementById("email").value=="E-mail:")
	{
	alert("Please enter your  E-mail."); 
	return false;
	}

    else if(objExp.test(str)==false)
	{
	alert("Please enter a valid E-mail."); 
	return false;
	}
  
	else if(document.getElementById("content").value=="We appreciate your suggestion...")
	{
	alert("Please enter your suggestion."); 
	return false; 
	}
	else if(document.getElementById("checkcodestr").value=="CAPTCHA")
	{
	alert("Please enter CAPTCHA."); 
	return false; 
	}
	
	return true;

}
function setNull(x)
{if(x=="username" && document.getElementById(x).value=="Name:"){
document.getElementById(x).value="";
}
if(x=="email" && document.getElementById(x).value=="E-mail:"){
document.getElementById(x).value="";
}
if(x=="tel" && document.getElementById(x).value=="Tel:"){
document.getElementById(x).value="";
}

if(x=="country" && document.getElementById(x).value=="Country:"){
document.getElementById(x).value="";
}
if(x=="content" && document.getElementById(x).value=="We appreciate your suggestion..."){
document.getElementById(x).value="";
}

if(x=="checkcodestr" && document.getElementById(x).value=="CAPTCHA"){
document.getElementById(x).value="";
}

}

function setThing(x)
{
if(x=="username" && document.getElementById(x).value==""){
document.getElementById(x).value="Name:";
}
if(x=="email" && document.getElementById(x).value==""){
document.getElementById(x).value="E-mail:";
}
if(x=="tel" && document.getElementById(x).value==""){
document.getElementById(x).value="Tel:";
}


if(x=="country" && document.getElementById(x).value==""){
document.getElementById(x).value="Country:";
}
if(x=="content" && document.getElementById(x).value==""){
document.getElementById(x).value="We appreciate your suggestion...";
}
if(x=="checkcodestr" && document.getElementById(x).value==""){
document.getElementById(x).value="CAPTCHA";
}
}





function pan2(){
	var str=document.getElementById("email2").value;
	
   if(document.getElementById("email2").value=="Enter your e-mail")
	{
	alert("Please enter your  E-mail."); 
	return false;
	}

    else if(objExp.test(str)==false)
	{
	alert("Please enter a valid E-mail."); 
	return false;
	}
	
	return true;

}

function setNull2(x)
{
if(x=="email2" && document.getElementById(x).value=="Enter your e-mail"){
document.getElementById(x).value="";
}


}

function setThing2(x)
{

if(x=="email2" && document.getElementById(x).value==""){
document.getElementById(x).value="Enter your e-mail";
}

}



function pan3(){
	var str=document.getElementById("verification").value;
	
   if(document.getElementById("verification").value=="Enter verification code")
	{
	alert("Please enter verification."); 
	return false;
	}
    else if(document.getElementById("verification").value!="ohoco2017")
	{
	alert("verification error！"); 
	return false;
	}
	
	return true;

}

function setNull3(x)
{
if(x=="verification" && document.getElementById(x).value=="Enter verification code"){
document.getElementById(x).value="";
}


}

function setThing3(x)
{

if(x=="verification" && document.getElementById(x).value==""){
document.getElementById(x).value="Enter verification code";
}

}

