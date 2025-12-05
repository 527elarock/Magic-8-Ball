function shakeMagic8Ball() {
    const modal = document.getElementById('question-modal');
    const input = document.getElementById('modal-question-input');

    // Show modal
    modal.style.display = 'flex';
    input.value = '';
    input.focus();

    const submitBtn = document.getElementById('modal-submit');
    const cancelBtn = document.getElementById('modal-cancel');

    // Handle submit
    const submitHandler = () => {
        const question = input.value.trim();
        if (!question) {
            alert('Please ask a valid question!');
            return;
        }
        modal.style.display = 'none';
        generateAnswer();
        removeListeners();
    };

    // Handle cancel
    const cancelHandler = () => {
        document.getElementById('response-text').innerText = 'Please Ask A Question!';
        document.getElementById('response-text').className = 'lead text-warning';
        document.getElementById('response-img').src = 'sad.png';
        modal.style.display = 'none';
        removeListeners();
    };

    const enterHandler = (e) => {
        if (e.key === 'Enter') submitHandler();
    };

    const removeListeners = () => {
        submitBtn.removeEventListener('click', submitHandler);
        cancelBtn.removeEventListener('click', cancelHandler);
        input.removeEventListener('keydown', enterHandler);
    };

    submitBtn.addEventListener('click', submitHandler);
    cancelBtn.addEventListener('click', cancelHandler);
    input.addEventListener('keydown', enterHandler);

    // Original Magic 8 Ball logic
    function generateAnswer() {
        const randomNumber = Math.floor(Math.random() * 8);
        let answer, image, color;

        switch (randomNumber) {
            case 0: answer = 'Yes'; image = 'yes.png'; color = 'text-success'; break;
            case 1: answer = 'Without a doubt'; image = 'without.png'; color = 'text-success'; break;
            case 2: answer = 'Ummm...Sure'; image = 'sure.png'; color = 'text-success'; break;
            case 3: answer = 'My sources say no, but they’ve been wrong before'; image = 'sources.png'; color = 'text-warning'; break;
            case 4: answer = 'You already know the answer. Stop pretending you don’t.'; image = 'pretend.png'; color = 'text-warning'; break;
            case 5: answer = 'Ask again later, I’m on break'; image = 'break.png'; color = 'text-warning'; break;
            case 6: answer = 'You Wish'; image = 'wish.png'; color = 'text-danger'; break;
            case 7: answer = 'Not in this lifetime'; image = 'no.png'; color = 'text-danger'; break;
        }

        const responseText = document.getElementById('response-text');
        const responseImg = document.getElementById('response-img');

        responseText.innerText = answer;
        responseText.className = `display-4 text-center fw-bold ${color}`;
        responseImg.src = image;
    }
}