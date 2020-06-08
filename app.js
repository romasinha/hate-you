const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greeting = ["hate you from the core!",
                 "I don't love you, okay!",
                 "You are such a loser!",
                 "I hate you from the core"];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// when the recognition starts
recognition.onstart = () => {
    
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    // capturing transcript-text
    const transcript = event.results[current][0].transcript
    content.textContent = transcript;
    readOutLoud(transcript);
}

// Add Listener to the talk button
btn.addEventListener('click', () =>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    //Default text

    speech.text = "Sorry, can you try again?";

    // If the speech contains "I love"

    if(message.includes("I love")){
        const finalText = 
        greeting[Math.floor(Math.random()*greeting.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    


    speech.lang = 'en-US';

    window.speechSynthesis.speak(speech);
}








