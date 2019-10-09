
var uniqueTags=new Array();
var countTags=new Array();
var myDiv;
var temp;
var string;//string in the textarea
var previousCookie;
function makeCloud()
{
	var stringArray=new Array();
	countTags[0]=0;
	string=document.getElementById("tags").value;//makeCloud() step1
	stringArray=string.split(" ");//makeCloud() step2
	stringArray.sort();
	for(var i=0;i<stringArray.length;i++)
	{
		var tempTag=stringArray[i];
		if(i==0)
		{
			uniqueTags.push(stringArray[0]);
			countTags[0]+=1;
		}
		else if(stringArray[i]==stringArray[i-1])
		{
			for(var o=0;o<uniqueTags.length;o++)
				if(tempTag==uniqueTags[o])
					countTags[o]+=1;
		}
		else
		{
			uniqueTags.push(stringArray[i]);
			countTags.push(1);
		}//makeCloud() step3 & 4
	}
	var maxi=findMaxIndex(countTags);//makeCloud() step5
	createDiv();//makeCloud() step6 & 7
	setSize(uniqueTags,countTags,maxi);//makeCloud() step8
	display();//makeCloud() step10
}

function findMaxIndex(array)
{
	var maxIndex=0;
	var maxAmount=array[0];
	for(var i=0;i<array.length;i++)
	{
		if(array[maxIndex]<array[i])
		{
			maxIndex=i;
			maxAmount=array[i];
		}
	}
	return maxAmount;
}

function createDiv()
{
	myDiv=document.createElement("div");
	myDiv.setAttribute("id","newDiv");
	for(var i=0;i<uniqueTags.length;i++)
	{
		myDiv.innerHTML=myDiv.innerHTML+"<span>"+uniqueTags[i]+"</span>"+" ";
	}
	myDiv.style.backgroundColor = "blue";
	myDiv.style.color = "silver";
	myDiv.style.fontFamily = "serif";
	myDiv.style.fontSize = "x-large";
	myDiv.style.border = "0.1em solid silver";
}

function setSize(uniqueTags,countTags,maxi)
{
	for(var i=0;i<uniqueTags.length;i++)
	{
		var size=Math.round(15+countTags[i]/maxi*20);
		size+="px";
		myDiv.getElementsByTagName("span")[i].style.fontSize=size;
		//var t=uniqueTags[i];
		//var c=countTags[i];
		myDiv.getElementsByTagName("span")[i].setAttribute("onclick","temp=this.innerHTML; howMany(temp);");
	}
}
		
function display()
{
	var toBeRomoved=document.getElementsByTagName("div")[0];
	var theParent=toBeRomoved.parentNode;
	theParent.removeChild(toBeRomoved);
	theParent.appendChild(myDiv);
}
	
function howMany(a)//makeCloud() step9
{
	var b;
	for(var i=0;i<uniqueTags.length;i++)
	{
		if(uniqueTags[i]==a)
			b=countTags[i];
	}
	alert(a+": "+b+" occurrences");
}
		
function saveCloud()
{
	string=document.getElementById("tags").value;
	var cookie_date = new Date();
	cookie_date.setTime(cookie_date.getTime()+60*60*1000);
	document.cookie= "T="+string+"; expires="+cookie_date.toGMTString();
	var c=document.cookie;
	var cookieArray=c.split("=");
	var tem=cookieArray[1].split(";");
	previousCookie=tem[0];
}

function clearArea()
{
	document.getElementById("tags").value="";
}

function loadCloud()
{
	var cookieArray=previousCookie.split("=");
	document.getElementById("tags").value=previousCookie;
}