var getCreateCard = document.getElementById('cardHolderDiv');
var getText = document.getElementById('text');
var getCreate = document.getElementById('create');


function domString(){
	var cardString = '';
	cardString += `<div class="deleteButtonCard">`
	cardString += `<p>${getText.value}</p>`
	cardString += `<button class="delete" id="delete">x</button>`
	cardString += `</div>`
	getCreateCard.innerHTML += cardString;
	console.log(cardString);
}

function deleteButton(e){
	if(e.target.className === 'delete'){
		e.target.parentElement.remove();
	}
	console.log(e);
}



getCreate.addEventListener('click', domString);
document.body.addEventListener('click', deleteButton);
