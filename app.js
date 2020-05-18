let min = 1,
    max = 10,
    guessLeft = 3;
    winningNo = 2;

const game = document.querySelector('.card'),
      minNo = document.querySelector('.min'),
      maxNo = document.querySelector('.max'),
      submitBtn = document.querySelector('.guess-btn'),
      input = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNo.textContent = min;
maxNo.textContent = max;

submitBtn.addEventListener('click', function(e){
    const guess = parseInt(input.value);
    if(isNaN(guess) || guess<min || guess>max){
        input.value = '';
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }
    else{
        if(guess === winningNo){
            input.disabled = true;
            setMessage(`${guess} is correct. You WON!!.`, 'green')
        }
        else{
            input.value = '';
            guessLeft -= 1;
            if(guessLeft!==0){
                setMessage(`${guess} was not the correct number. ${guessLeft} guesses left. Try Again.`, 'red');
            }
            else{
                input.disabled = true;
                setMessage(`Game OVER. Correct number was ${winningNo}.`, 'red');
            }
            
        }
    }



    console.log(input.value);
    
    e.preventDefault();
})

function setMessage(str, color){
    message.textContent = str;
    input.style.borderColor = color;
    message.style.color = color;
}