var q=0;
var score=0;

function sleep(ms) 
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function firstQuestion() 
{
	document.getElementById(`ques${q}`).style.display="none";
	document.getElementById(`ques${q+1}`).style.display="flex";
	q++;
}

function nextQuestion() 
{
	var selector = document.querySelector(`input[name="qu${q}"]:checked`); 
	if(selector)
	{
		if (selector.id==`ans${q}1`) 
		{
			score+=10;
			document.getElementById(`ans${q}1`).style.backgroundColor="green";
			document.getElementById(`res${q}`).innerHTML="Correct 😎";
			document.getElementById(`r${q}`).innerHTML="Correct 😎";
		}
		else
		{
			document.getElementById(selector.id).style.backgroundColor="red";
			document.getElementById(`ans${q}1`).style.backgroundColor="green";
			document.getElementById(`res${q}`).innerHTML="Incorrect 😭";
			document.getElementById(`r${q}`).innerHTML="Incorrect 😭";
		}
	}
	sleep(1000).then(()=>{
	document.getElementById(`ques${q}`).style.display="none";
	if (q<10)
	{
		document.getElementById(`ques${q+1}`).style.display="flex";
	}
	q++;
	if (q>10) 
	{
		document.getElementById("result").style.display="flex";
	}
	document.getElementById("score").innerHTML=score;});
}