// Add ready listener to the document.
// I.e., JavaScript, wait until the DOM is fully loaded before proceeding to this code
$(document).ready(function(){

	var cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">'
	];

	var gridSize = 8;
	var memoryGameHTML = '';
	for(let i = 0; i< gridSize; i++){
		if(i<2){
			card = cards[0];
		}else if(i<4){
			card = cards[1];
		}else if(i<6){
			card = cards[2];
		}else{
			card = cards[3];
		}

		console.log(card);

		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML += '<div class="card-holder">';
				memoryGameHTML += `<div class="card-front">${card}</div>`;
				// memoryGameHTML += '<div class="card-front">'+card+'</div>';
				memoryGameHTML += `<div class="card-back"></div>`;
			memoryGameHTML += '</div>';
		memoryGameHTML += '</div>';
	}
	console.log(memoryGameHTML);
	$('.mg-contents').html(memoryGameHTML);

	$('.card-holder').click(function(){
		$(this).toggleClass('flip');

		// user has flipped a card. If there is anotehr one turned
		// over, see if they match. Otherwise, do nothing.
		// Set up an array called cardsUp that contains all elements
		// with a class of flip (that's how we know they are face up)
		var cardsUp = $('.flip');
		console.dir(cardsUp[0])
		if(cardsUp.length == 2){
			// Two cards have a flip class (face up) or we wouldn't be here
			// Check to see if they are the same...
			var card1 = cardsUp[0].children[0].children[0].src;
			var card2 = cardsUp[1].children[0].children[0].src;
			// cardsUpImages = cardsUp.find('.card-front img');
			if(card1 == card2){
				// they match! I.e., the images are exactly the same
				cardsUp.removeClass('flip');
				cardsUp.addClass('matched');
				var matchedCards = $('.matched');
				if(matchedCards.length == gridSize){
					// Then every card has been matche. Game won!
					alert("You have won the game!");
				}
			}else{
				// they are not the same. Nice try. Flip them back over
				setTimeout(()=>{
					cardsUp.removeClass('flip');
				},2000);
			}
		}
	});
});